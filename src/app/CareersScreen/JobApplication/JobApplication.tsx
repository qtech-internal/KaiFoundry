"use client";
import { useRouter } from "next/navigation";
import { CheckSquare, ArrowLeft } from "lucide-react";

const eligibilityCriteria = [
  "Eger Tincidunt Dolor. Morbi Fames Venenatis Egestas Imperdiet Elit.",
  "Neque Dictum Vitae Sit Nibh.",
  "Vitae Luctus Non Habitant In At Sed.",
];

const perksAndBenefits = [
  "Flexible Working Hours",
  "Health Insurance",
  "Paid Time Off",
  "Professional Development Opportunities",
  "Remote Work Options",
];

const JobApplication = () => {
  const router = useRouter();

  return (
    <div className="max-w-full mx-auto p-6 pr-0 bg-white">
      <button
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4 py-2 px-2 text-lg font-semibold  rounded-md transition duration-200"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2" size={20} />
        Back
      </button>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Job Application</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">About The Job</h2>
      <p className="text-gray-600 mb-6 text-lg md:text-xl">
        Ullamcorper Sit. Aliquam Sed Senectus Varius Nulla Risus Aliquet. Nunc
        Sit Scelerisque Mauris Sit Scelerisque Donec Aliquam. Commodo Eros Leo
        Quisque Integer. Vitae Luctus Non Habitant In At Sed. Sapien Suspendisse
        Tristique Tortor Adipiscing Eget. Elit Pretium Eu At Nibh Ac Tristique
        Est.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Eligibility Criteria
      </h2>

      <ul className="list-disc pl-5 space-y-6"> 
        {eligibilityCriteria.map((criteria, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-[#D444F1]">
              <CheckSquare className="text-white" size={18} />
            </div>
            <span className="text-gray-700">{criteria}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-6">
        Perks & Benefits
      </h2>

      <ul className="list-disc pl-5 space-y-5"> 
        {perksAndBenefits.map((perk, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-[#D444F1]">
              <CheckSquare className="text-white" size={18} />
            </div>
            <span className="text-gray-700">{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobApplication;