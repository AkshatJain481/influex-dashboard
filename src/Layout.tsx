import { ReactNode } from "react";
import Sidebar from "./components/ui/Sidebar";
import { useState } from "react";
import Navbar from "./components/ui/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
      <main className="pt-12">{children}</main>
    </div>
  );
};

export default Layout;
