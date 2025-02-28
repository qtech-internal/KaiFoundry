"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
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
      {/* First & Last Name */}
      <div className="flex space-x-4">
        <div className="w-full">
          <label htmlFor="firstName" className="block text-black mb-1">Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your Name"
            className="w-full border border-gray-300 bg-transparent p-3 rounded-md text-black focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName" className="block text-black mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your Name"
            className="w-full border border-gray-300 bg-transparent p-3 rounded-md text-black focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-black mb-1">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          className="w-full border border-gray-300 bg-transparent p-3 rounded-md text-black focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-black mb-1">Phone Number*</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your Contact Number"
          className="w-full border border-gray-300 bg-transparent p-3 rounded-md text-black focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-black mb-1">Message*</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here."
          className="w-full border border-gray-300 bg-transparent p-3 rounded-md text-black focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none h-32 resize-none"
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-fuchsia-500 text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
