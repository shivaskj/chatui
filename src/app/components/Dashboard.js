const DashboardCard = ({ title, subtitle}) => {
  return (
    <div className="bg-white  rounded-lg shadow-sm  max-w-88 h-16 p-2">
      <h2 className="font-semibold text-xs mb-1">{title}</h2>
      <p className="text-gray-500 text-xs">{subtitle}</p>
     
    </div>
  );
};


const DashboardCardGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {cards.map((card, index) => (
        <DashboardCard key={index} title={card.title} subtitle={card.subtitle}/>
          
        
      ))}
    </div>
  );
};

export default DashboardCardGrid;