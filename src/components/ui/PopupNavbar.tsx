import { Tags, FileText, ChartNoAxesColumnDecreasing } from "lucide-react";

const PopupNavbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (value: number) => void;
}) => {
  return (
    <div className="flex flex-col min-w-10 h-[250px] items-center justify-around bg-black rounded-lg p-2">
      <ChartNoAxesColumnDecreasing
        color="white"
        size={24}
        className={`transition-transform duration-300 hover:translate-x-1 cursor-pointer ${
          activeTab === 0 ? "translate-x-1" : ""
        }`}
        onClick={() => setActiveTab(0)}
      />

      <Tags
        color="white"
        size={24}
        className={`transition-transform duration-300 hover:translate-x-1 cursor-pointer ${
          activeTab === 1 ? "translate-x-1" : ""
        }`}
        onClick={() => setActiveTab(1)}
      />

      <FileText
        color="white"
        size={24}
        className={`transition-transform duration-300 hover:translate-x-1 cursor-pointer ${
          activeTab === 2 ? "translate-x-1" : ""
        }`}
        onClick={() => setActiveTab(2)}
      />
    </div>
  );
};

export default PopupNavbar;
