import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import logoImage from "@/public/images/logo.svg";

export const BurgerMenu: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-neutral-950 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-menu md:hidden"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-950">
        <SheetHeader>
          <SheetTitle>
            <Image
              src={logoImage}
              alt="layears logo"
              className="h-9 md:h-auto w-auto ml-2"
            />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid  items-center gap-4">
            <nav className="grid justify-center text-center gap-4">
              <a href="/">Home</a>
              <a href="#Features">Features</a>
              <a href="">Integrations</a>
              <a href="">FAQs</a>
            </nav>
            <Button className="border hover:bg-lime-400 hover:border-none hover:text-neutral-950 border-white h-12 rounded-full px-6 font-medium">
              Log In
            </Button>
            <Button className=" text-black hover:text-white bg-lime-400 h-12 rounded-full px-6 font-medium">
              Sign Up
            </Button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
