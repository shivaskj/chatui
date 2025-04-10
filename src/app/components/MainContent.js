import DashboardCardGrid from './Dashboard';
import { IoAttachOutline, IoArrowUp  } from "react-icons/io5";

const MainContent = () => {
  const cards = [
    {
      title: "main change 1",
      subtitle: "Top Forecasted Sales 2024",
    },
    {
      title: "Daily Sales",
      subtitle: "Sales Trend: Scarves, Hats, Gloves July 2024",
    },
    {
      title: "Store Stock",
      subtitle: "Restocks Rate and Store Performance Week 20 2024",
    },
    {
      title: "Purchase plan vs Order plan",
      subtitle: "Top 3 Departments in Season 9 2024",
    },
  ];

  return (
    <div className="flex-1 flex flex-col  bg-white px-85 pt-20">
      
      {/* Header Section */}
      <div className="p-6  mt-10">

        <div  className="flex items-center justify-center mb-4">
        <img src="/img1.png" className='w-20 h-10 items-center'/>
        </div>
       
      
        <p className="text-black mt-2 text-center">
          Empowering business teams with AI-driven insights and real-time solutions to identify key customer engagement metrics and enhance overall performance.
        </p>
        <p className="text-gray-500 text-sm mt-2 text-center">
          You can learn more about the insight/Sphere by visiting the <span className='underline'>docs</span>.
        </p>
      </div>

     
      <div className="flex-1 mt-40 ">
        <DashboardCardGrid cards={cards} />
      </div>

      
      <div className="h-20 mt-2  rounded-xl bg-gray-100">

        <div className="relative text-xs">
          <input
            type="text"
            placeholder="Send a message..."
            className="w-full py-3 px-4  rounded-lg focus:outline-none "
          />

          <button className="absolute left-2 top-10 p-1 text-gray-500 hover:text-gray-700">
          <IoAttachOutline  className="h-5 w-5" />
         </button>

         <button 
         type="submit"
         className="absolute  right-2 top-10 p-1 bg-gray-400 text-white rounded-full hover:bg-gray-500 ">
          <IoArrowUp className="h-4 w-4" />
         </button>

        </div>
      </div>
    </div>
  );
};

export default MainContent;


