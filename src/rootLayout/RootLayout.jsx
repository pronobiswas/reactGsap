import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./header/Header";
import Footer from "./footer/Footer";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const RootLayout = () => {
  useEffect(() => {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }
  }, []);
  return (
    <div >
      <Header />
      <div id="smooth-wrapper" className="w-full h-full">
        <div id="smooth-content">
        <Outlet />
        <Footer />
      </div>
    </div>
    </div >
  );
};

export default RootLayout;
