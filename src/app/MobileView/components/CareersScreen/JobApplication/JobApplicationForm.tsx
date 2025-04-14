"use client";
import { useState } from "react";
import { UploadCloud } from "lucide-react";

const JobApplicationForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-[16px] lg:text-3xl font-bold text-[#333333] mb-6">Application Form</h1>

      <form className="space-y-5 w-full">
        {/* Name & Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="block text-[14px] lg:text-[22px] text-[#333333] font-medium">
              Name <span className="text-[#155EEF]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border border-[#E4E4E4] placeholder:text-[#9C9C9C] placeholder:text-[14px] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-[14px] lg:text-[22px] text-[#333333] font-medium">
              Email <span className="text-[#155EEF]">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your E-mail"
              className="w-full p-3 border border-[#E4E4E4] placeholder:text-[#9C9C9C] placeholder:text-[14px] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
              required
            />
          </div>
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col gap-2">
          <label className="block text-[14px] lg:text-[22px] text-[#333333] font-medium">
            Phone Number <span className="text-[#155EEF]">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter your Contact Number"
            className="w-full p-3 border border-[#E4E4E4] placeholder:text-[#9C9C9C] placeholder:text-[14px] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="flex flex-col gap-2">
          <label className="block text-[14px] lg:text-[22px] text-[#333333] font-medium">
            Resume upload <span className="text-[#155EEF]">*</span>
          </label>
          <div className="border-dashed border-2 border-[#E4E4E4] placeholder:text-[#9C9C9C] placeholder:text-[14px] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
            <UploadCloud className="text-gray-500 h-32" size={32} />
            <p className="text-gray-600 mt-2">
              {file ? file.name : "Upload Your Resume Here"}
            </p>
          </div>
        </div>

        {/* Why Join Field */}
        <div className="flex flex-col gap-2">
          <label className="block text-[14px] lg:text-[22px] text-[#333333] font-medium">
            Why do you want to join? <span className="text-[#155EEF]">*</span>
          </label>
          <textarea
            placeholder="Write your answer here."
            className="w-full p-3 border border-[#E4E4E4] placeholder:text-[#9C9C9C] placeholder:text-[14px] rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[150px] bg-[#D444F1] text-white py-3 rounded-full  font-semibold hover:bg-[#D444F1]/80 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;