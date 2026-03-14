import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const isHome = useLocation().pathname === "/";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className={`flex-1 ${isHome ? "" : "pt-16"}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
