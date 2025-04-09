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
        <section className="container sm:p-20 p-4">
            {/* Back Button */}
            <button 
                onClick={handleBackClick} 
                className="absolute top-2 mt-20 left-4 flex items-center font-bold text-gray-700 hover:text-gray-900"
            >
                <span className="mr-3 font-bold">&larr;</span> {/* Arrow character */}
                Back
            </button>

            <h2 className="text-5xl font-bold text-black text-center mb-2">
                Let&apos;s Get In Touch
            </h2>
            <p className="text-2xl text-center text-gray-700 mb-10 px-80">
                Have A Question Or A Big Idea? Let's Connect And Create Something Amazing Together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 min-h-screen">
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