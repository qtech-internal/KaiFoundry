'use client'
import ContactForm from "./ContactForm";
import MapLocation from "./MapLocation";
import ContactDetails from "./ContactDetails";
import SocialIcons from "./SocialIcons";

const ContactUs = () => {
    const handleBackClick = () => {
        window.history.back(); // Navigate back to the previous page
    };

    return (
        <section className="container sm:p-20 p-4 mt-14 ">
            {/* Back Button */}
            <button 
                onClick={handleBackClick} 
                className=" top-2  left-4 flex items-center font-bold text-gray-700 hover:text-gray-900 "
            >
                <span className="mr-3 font-bold">&larr;</span> 
                Back
            </button>

            <h2 className="mt-6 sm:mt-14 text-[28px] sm:text-[32px] md:text-[48px] lg:text-[62px] font-bold text-[#333333] text-center mb-2">
  Let&apos;s Get In Touch
</h2>


            <p className="text-[22px] text-center text-[#333333] mb-10 px-60 hidden lg:block md:block">
                Have A Question Or A Big Idea? Let's Connect And Create Something Amazing Together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 ">
                {/* Box 1 */}
                <div className="md:row-span-1 flex-col">
                    <h3 className="text-xl font-semibold mb-6 sm:mb-10">Where To Find Us</h3>
                    <MapLocation />
                </div>
                {/* Box 3 (Placed in second column in desktop view, but second in mobile) */}
                <div className="md:col-start-2 row-span-2 flex-col">
                    <h3 className="text-xl font-semibold mb-6 sm:mb-10">Leave A Message</h3>
                    <ContactForm />
                </div>
                {/* Box 2 */}
                <div className="md:row-span-1 flex-col">
                    <div className="mt-10">
                        <ContactDetails />
                    </div>
                    <div className="mt-10"> {/* Added margin-top for spacing */}
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;