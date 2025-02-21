import { ImCancelCircle } from "react-icons/im";
import { PiGraphBold } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { CircleUserRound } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation(); // Access the current route

  return (
    <div
  className={`h-full w-64 bg-gray-100 transform fixed z-20 border-r border-gray-300 flex flex-col ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out`}
>
  <div className="flex justify-between items-center p-4">
    <div className="flex justify-between w-full items-center">
      <p className="font-bold text-gray-500 text-xl">MENU</p>
      <ImCancelCircle
        size={25}
        color="gray"
        className="cursor-pointer"
        onClick={toggleSidebar}
      />
    </div>
  </div>

  <nav className="p-4 flex-grow">
    <ul className="space-y-4">
      <li
        className={`py-2 hover:bg-gray-200 cursor-pointer px-4 ${
          isOpen && location.pathname === "/" ? "bg-gray-200" : ""
        }`}
      >
        <Link to="/" className="flex items-center space-x-4">
          <MdDashboard size={22} color="gray" />
          <p className="font-semibold text-lg text-gray-700">Dashboard</p>
        </Link>
      </li>
      <li
        className={`py-2 hover:bg-gray-200 cursor-pointer px-4 ${
          isOpen && location.pathname === "/metrics" ? "bg-gray-200" : ""
        }`}
      >
        <Link to="/metrics" className="flex items-center space-x-4">
          <PiGraphBold size={22} color="gray" />
          <p className="font-semibold text-lg text-gray-700">Metrics</p>
        </Link>
      </li>
    </ul>
  </nav>

  <div className="p-4 mt-auto border-t pl-[10%] bg-gray-200 border-gray-200">
    <p className="text-center flex gap-x-4 items-center text-gray-500 text-xs">
      <CircleUserRound className="h-auto"/> <span className="text-lg font-semibold">User</span>
    </p>
  </div>
</div>
  );
};

export default Sidebar;
