import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 sm:p-20">
            <h4 className="text-3xl font-extrabold text-center">
                Meet <span className="text-[#BA24D5]">Our Founder</span>
            </h4>
            <p className="text-center text-gray-600 mt-2 max-w-xl">
                We focus on the details of everything we do. All to help businesses around the world.
            </p>

            {/* Desktop Layout */}
            <div className="hidden sm:flex flex-col md:flex-row items-center justify-center gap-6 mt-10 max-w-6xl w-full">
                {/* Founder Image */}
                <div className="w-[300px] md:w-[350px] h-[300px] md:h-[350px] flex items-center">
                    <Image
                        src="/assets/founder.jpeg"
                        alt="Founder"
                        width={350}
                        height={350}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Founder Info */}
                <div className="bg-[#F5D6FC] p-6 md:p-8 flex flex-col w-[300px] md:w-[350px] h-[300px] md:h-[350px] items-center justify-center">
                    <h2 className="text-2xl font-bold text-center">VINAYAK KALRA</h2>
                    <p className="text-[#BA24D5] font-semibold text-lg text-center">Founder</p>
                    <div className="border-b-2 border-[#BA24D5] w-12 my-3"></div>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-[#BA24D5]">
                        <FaFacebookF className="cursor-pointer text-2xl hover:text-[#8a1fa8]" />
                        <FaGithub className="cursor-pointer text-2xl hover:text-[#8a1fa8]" />
                        <FaLinkedin className="cursor-pointer text-2xl hover:text-[#8a1fa8]" />
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden flex flex-col items-center justify-center mt-10 max-w-6xl w-full">
                {/* Founder Image */}
                <div className="w-[300px] h-[300px] flex items-center">
                    <Image
                        src="/assets/founder.jpeg"
                        alt="Founder"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Founder Info */}
                <div className="bg-[#F5D6FC] p-6 flex flex-col w-[300px] h-auto items-center justify-center mt-4">
                    <h2 className="text-2xl font-bold text-center">VINAYAK KALRA2</h2>
                    <p className="text-[#BA24D5] font-semibold text-lg text-center">Founder</p>
                    <div className="border-b-2 border-[#BA24D5] w-12 my-3"></div>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-[#BA24D5]">
                        <FaFacebookF className="cursor-pointer text-2xl hover:text-[#8a1fa8]" />
                        <FaGithub className="cursor-pointer text-2xl hover:text-[#8a1fa8]" />
                        <FaLinkedin className="cursor-pointer text-2xl hover:text-[#8a1fa8]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
