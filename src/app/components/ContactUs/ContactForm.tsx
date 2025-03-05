'use client'
import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <Input label="Name*" type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} className="w-full" />
        <Input label="Last Name" type="text" name="lastName" placeholder="Enter your Last Name" value={formData.lastName} onChange={handleChange} className="w-full" />
      </div>
      <Input label="Email*" type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} />
      <Input label="Phone Number*" type="tel" name="phone" placeholder="Enter your Contact Number" value={formData.phone} onChange={handleChange} />
      <Input label="Message*" type="text" name="message" placeholder="Write your message here." value={formData.message} onChange={handleChange} textarea />

      <div className="flex justify-center">
        <Button href="/" text="Submit" className="bg-fuchsia-800 text-white hover:bg-fuchsia-700" />
      </div>
    </form>
  );
};

export default ContactForm;
