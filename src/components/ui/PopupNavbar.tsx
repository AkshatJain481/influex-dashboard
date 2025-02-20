import { FaTags } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";

const PopupNavbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (value: number) => void;
}) => {
  return (
    <div className="flex flex-col min-w-10 h-[250px] items-center justify-around bg-black rounded-lg p-2">
      <IoStatsChart
        color="white"
        size={20}
        className={`transition-transform duration-300 hover:translate-x-1 cursor-pointer ${
          activeTab === 0 ? "translate-x-1" : ""
        }`}
        onClick={() => setActiveTab(0)}
      />

      <FaTags
        color="white"
        size={20}
        className={`transition-transform duration-300 hover:translate-x-1 cursor-pointer ${
          activeTab === 1 ? "translate-x-1" : ""
        }`}
        onClick={() => setActiveTab(1)}
      />

      <MdDescription
        color="white"
        size={20}
        className={`transition-transform duration-300 hover:translate-x-1 cursor-pointer ${
          activeTab === 2 ? "translate-x-1" : ""
        }`}
        onClick={() => setActiveTab(2)}
      />
    </div>
  );
};

export default PopupNavbar;
