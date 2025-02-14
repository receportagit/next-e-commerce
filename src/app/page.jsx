"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "../sections";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Section1 />
      <Section4 />
      <Section3 />
      <Section2 />
      <Section5 />
      <Section6 />
    </div>
  );
}
