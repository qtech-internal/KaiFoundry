import ImageGrid from './ImageGrid';
import MobileImageLayout from './MobileImageLayout';

const CareersSection = () => {
  return (
    <section className="py-30 bg-white text-center">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-6xl md:text-6xl font-bold text-gray-900 py-5">
          Careers
        </h2>
        <p className="text-2xl md:text-2xl text-gray-600 mt-2">
          Join A Team That Turns Ideas Into Impact
        </p>
        <p className="text-lg md:text-xl  text-gray-600 py-1">
          One Block At A Time!
        </p>

        {/* Image Grid and Mobile Layout */}
        <ImageGrid />
        <MobileImageLayout />
      </div>
    </section>
  );
};

export default CareersSection;