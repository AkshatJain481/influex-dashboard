import { ImCancelCircle } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation(); // Access the current route

  return (
    <div
      className={`h-full w-64 bg-gray-100  transform fixed z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4">
        <p className="font-bold text-gray-500 text-xl">MENU</p>
        <ImCancelCircle
          size={25}
          color="gray"
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <nav className="p-4">
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
              <AiFillHome size={22} color="gray" />
              <p className="font-semibold text-lg text-gray-700">Metrics</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
