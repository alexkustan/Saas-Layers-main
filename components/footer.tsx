import Image from "next/image";
import React from "react";
import logoImage from "@/public/images/logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="pt-36 pb-12">
      <div className="container">
        <div className="flex flex-col md:flex-row  md:justify-between items-center gap-6">
          <Image src={logoImage} alt="layears logo" className="h-11 w-auto" />
          <div className="flex gap-6 justify-center text-white/50 text-sm">
            <a href="/">Contact</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
