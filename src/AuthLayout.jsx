import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [isLargeEnough, setIsLargeEnough] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)"); 
    const handleResize = (e) => setIsLargeEnough(e.matches);
    setIsLargeEnough(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  if (!isLargeEnough) {
    return (
      <div className="flex justify-center items-center bg-blue-950 text-white h-screen text-center text-xl p-4">
        Please rotate your screen or use a larger device.
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <Outlet />
    </div>
  );
}
