"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HeaderNavMenu, HeaderTopBanner } from "../../components";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <HeaderTopBanner />
      <HeaderNavMenu />
    </div>
  );
};

export default Header;
