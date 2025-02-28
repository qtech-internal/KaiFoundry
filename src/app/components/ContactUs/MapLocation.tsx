const MapLocation = () => {
    return (
      <div className="w-full h-64">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://maps.google.com/maps?q=Ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    );
  };
  
  export default MapLocation;
  