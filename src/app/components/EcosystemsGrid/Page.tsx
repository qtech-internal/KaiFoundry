import EcosystemCard from "./EcosystemCard";
const ecosystems = [
  { name: "TON", icon: "/assets/ton.png" },
  { name: "NEAR", icon: "/assets/near.png" },
  { name: "POLYGON", icon: "/assets/polygon.png" },
  { name: "ICP", icon: "/assets/icp.png" },
  { name: "ETHEREUM", icon: "/assets/ethereum.png" },
  { name: "FILECOIN", icon: "/assets/filecoin.png" },
  { name: "BITCOIN", icon: "/assets/bitcoin.png" },
  { name: "SOLANA", icon: "/assets/solana.png" }
];

const EcosystemsGrid = () => {
  return (
    <div className="text-center sm:p-20 sm:px-60 p-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-900">
        <span className="text-fuchsia-800">Ecosystems</span> We Work With
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-8 gap-4 mt-10">
        {ecosystems.map((ecosystem, index) => (
          <EcosystemCard key={index} name={ecosystem.name} icon={ecosystem.icon} />
        ))}
      </div>
    </div>
  );
};

export default EcosystemsGrid;
