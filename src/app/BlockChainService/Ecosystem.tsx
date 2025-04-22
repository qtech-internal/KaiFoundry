import EcosystemCard from "../components/EcosystemsGrid/EcosystemCard";
const ecosystems = [
  { name: "TON", icon: "/toncoin-ton-logo 1.svg" },
  { name: "NEAR", icon: "/log8.svg" },
  { name: "POLYGON", icon: "/log1.svg" },
  { name: "ICP", icon: "/log7.svg" },
  { name: "ETHEREUM", icon: "/log8.svg" },
  { name: "FILECOIN", icon: "/log7.svg" },
  { name: "BITCOIN", icon: "/log5.svg" },
  { name: "SOLANA", icon: "/log2.svg" }
];

const EcosystemsGrid = () => {
  return (
    <div className="text-center sm:p-20 sm:px-60 p-6">
      <h2 className="text-2xl font-bold text-gray-900">
        <span className="text-fuchsia-800">Ecosystems</span> We Work With
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-8 gap-4 mt-10" >
        {ecosystems.map((ecosystem, index) => (
          <EcosystemCard  key={index} name={ecosystem.name} icon={ecosystem.icon}  />

        ))}
      </div>
    </div>
  );
};

export default EcosystemsGrid;
