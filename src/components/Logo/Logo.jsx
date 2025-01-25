import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="cursor-pointer selection:font-serif text-4xl font-bold text-transparent bg-gradient-to-r from-lightPrimary to-info bg-clip-text">
      <Link href={{ pathname: "/" }}>LOGO</Link>
    </div>
  );
};

export default Logo;
