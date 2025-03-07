"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from 'react-icons/io';
import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function BlogPost() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-cover bg-fill" style={{ backgroundImage: "url('/assets/blogs/background.gif')" }}>
      {/* Back Button */}
      <button 
  onClick={() => router.back()} 
  className="flex items-center space-x-2 absolute top-6 left-6 text-gray-600 hover:underline  px-4 py-2 rounded-lg"
>
  <IoMdArrowBack size={20} /> {/* Back icon */}
  <span className="text-lg">Back</span> {/* Increased text size */}
</button>

      <img
        src="/assets/blogs/post.png" 
        alt="Blog Cover"
        className="w-full h-72 object-cover rounded-lg mb-6 mt-20 px-22"
      />

      <div className="w-full max-w-4xl px-4 sm:px-10">
        <h1 className="text-6xl font-bold">Blog Post Title</h1>
        <p className="text-gray-500 text-sm mt-2">
          <strong>Written by Author Name</strong> &nbsp; | &nbsp; Date
        </p>

        <div className="border-b border-gray-300 my-4"></div>
      </div>

      <div className="mt-6 text-gray-800 space-y-4 leading-relaxed w-full max-w-4xl px-4 sm:px-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis at orci tincidunt, nec pharetra lacus tincidunt.
        
        </p>
        <h2 className="text-2xl font-semibold mt-6">Subheading</h2>
        <p>
         
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
          Nulla facilisi. Fusce tristique tortor vel ex hendrerit, eget ullamcorper arcu iaculis. Ut eu ex ac felis elementum ullamcorper.
        
        </p>
        <h2 className="text-2xl font-semibold mt-6">Another Section</h2>
        <p>
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
          Pellentesque vitae metus in metus vulputate ultricies sit amet ut lacus. Nam sodales, ipsum ut aliquam interdum.
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700 transition"
      >
        <FaArrowUp />
      </button>

      <div className="w-full max-w-4xl px-4 sm:px-10 mt-10">
        <div className="border-b border-gray-300 my-4"></div>
      </div>

      <footer className="w-full max-w-4xl px-4 sm:px-10 mb-6">
        <div className="flex justify-end space-x-6 text-gray-600">
          <a href="#" className="hover:text-black"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-black"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-black"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-black"><FaLinkedin size={24} /></a>
        </div>
      </footer>
    </div>
  );
}
