import ContactForm from "./ContactForm";
import MapLocation from "./MapLocation";
import ContactDetails from "./ContactDetails";
import SocialIcons from "./SocialIcons";

const ContactUs = () => {
    return (
        <section className="pb-20 px-20">
            {/* Main Heading */}
            <h2 className="text-3xl font-bold text-center mb-10">
                Let's Get <span className="text-fuchsia-600">In Touch</span>
            </h2>

            {/* Grid Layout with Equal Heights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
                {/* Left Section */}
                <div className="flex flex-col justify-between h-full">
                    <h3 className="text-xl font-semibold mb-4">Where To Find Us</h3>
                    <MapLocation />
                    <ContactDetails />
                    <SocialIcons />
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-between h-full">
                    <h3 className="text-xl font-semibold mb-4">Leave A Message</h3>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
