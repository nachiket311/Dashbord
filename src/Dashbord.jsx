import React, { useState, useEffect } from "react";
import LeftNav from "./LeftNav";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Dashbord() {
  const [showDashbord, setShowDashbord] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)"); 

    const handleMediaChange = (e) => {
      setShowDashbord(e.matches);
    };
    setShowDashbord(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  if (!showDashbord) {
    return (
      <div className="flex justify-center items-center h-screen text-center bg-blue-950 text-white text-xl p-4">
        Please rotate your screen or use a larger device.
      </div>
    );
  }

  return (
    <div className="relative">
      <LeftNav isOpen={isOpen} closeSidebar={closeSidebar} />
      <div className="md:ml-[25vw] lg:ml-[19vw] min-h-screen">
        <TopNavbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
