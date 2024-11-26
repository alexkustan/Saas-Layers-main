import React from "react";
import { BurgerMenu } from "./burger-menu";
import Image from "next/image";
import logoImage from "@/public/images/logo.svg";
import { Button } from "./ui/button";
import { navLinks } from "@/constants/constants";

export const Navbar: React.FC = () => {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
          <div>
            <Image
              src={logoImage}
              alt="layears logo"
              className="h-9 md:h-auto w-auto ml-2"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-light">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end">
            <BurgerMenu />
            <div className="gap-4 md:flex hidden">
              <Button className="border border-white h-12 rounded-full px-6 font-medium">
                Log In
              </Button>
              <Button className=" text-black bg-lime-400 h-12 rounded-full px-6 font-medium">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
