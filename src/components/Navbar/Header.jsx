"use client";

import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 960);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 960);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <header>{isMobile ? <MobileNav /> : <Navbar />}</header>;
}
