import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <FaInstagram className="text-black text-2xl" />
      <IoMdPaperPlane  className="text-black text-2xl" />
      <FaLinkedinIn className="text-black text-2xl" />
    </div>
  );
};

export default SocialIcons;
