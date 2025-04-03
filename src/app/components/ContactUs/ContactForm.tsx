"use client";
import { useState, useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Loader from "../UI/Loader";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    captchaToken: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.captchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Email sent successfully!");
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          captchaToken: "",
        });
        recaptchaRef.current?.reset();
      } else {
        setError(data.error || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto">
      {error && <p className="text-red-600 bg-red-100 p-2 rounded">{error}</p>}
      {success && (
        <p className="text-green-600 bg-green-100 p-2 rounded">{success}</p>
      )}

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <Input
          label="Name*"
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          // className="w-full"
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Enter your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          // className="w-full"
        />
      </div>
      <Input
        label="Email*"
        type="email"
        name="email"
        placeholder="Enter your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Phone Number*"
        type="tel"
        name="phone"
        placeholder="Enter your Contact Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <Input
        label="Message*"
        type="text"
        name="message"
        placeholder="Write your message here."
        value={formData.message}
        onChange={handleChange}
        textarea
      />

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        onChange={(token) =>
          setFormData((prev) => ({ ...prev, captchaToken: token || "" }))
        }
        ref={recaptchaRef}
      />

      <div className="flex justify-center">
        <Button
          type="submit"
          text="Submit"
          className="bg-fuchsia-800 text-white hover:bg-fuchsia-700"
        />
      </div>
    </form>
  );
};

export default ContactForm;
