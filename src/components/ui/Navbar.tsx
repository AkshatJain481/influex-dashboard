import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <nav className="bg-gray-100 border-b border-gray-300 z-10 fixed w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <Menu
          size={25}
          color="gray"
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
