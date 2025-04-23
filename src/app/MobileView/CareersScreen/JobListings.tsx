"use client";

const jobListings = [
  {
    title: "JOB TITLE",
    type: "Full Time/Permanent",
    company: "Company",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit.",
  },
  {
    title: "JOB TITLE",
    type: "Full Time/Permanent",
    company: "Company",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit.",
  },
  {
    title: "JOB TITLE",
    type: "Full Time/Permanent",
    company: "Company",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit.",
  },
];

const JobListings = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4 md:px-8 lg:px-36">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className={`p-6 md:p-8 border border-gray-700 mb-8 bg-white transition-all duration-300 ease-in-out hover:bg-purple-100 `}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{job.title}</h2>
            <p className="text-gray-700 font-semibold mb-2">
              {job.type} - {job.company} / {job.location}
            </p>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <a href="CareersScreen/JobApplication" className="flex justify-between items-center">
              <button
                style={{ backgroundColor: '#D444F1' }}
                className="mt-4 px-6 py-1 text-white text-lg font-semibold rounded-full flex justify-center items-center bg-[#D444F1]  transition duration-300"
              >
                Apply
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;