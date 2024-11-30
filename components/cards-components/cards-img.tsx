import Image from "next/image";
import React from "react";
import avatar1 from "@/public/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/public/images/avatar-lula-meyers.jpg";
import avatar3 from "@/public/images/avatar-florence-shaw.jpg";
import { Ellipsis } from "lucide-react";

export const CardsImg: React.FC = () => {
  return (
    <div className="flex aspect-video items-center justify-center">
      <div className="z-40 border-4 rounded-full size-20 overflow-hidden border-blue-500 p-1 bg-neutral-900 -ml-6">
        <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
      </div>
      <div className="z-30 border-4 rounded-full size-20 overflow-hidden border-indigo-500 p-1 bg-neutral-900  -ml-6">
        <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
      </div>
      <div className="z-20 border-4 rounded-full size-20 overflow-hidden border-amber-500 p-1 bg-neutral-900  -ml-6">
        <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
      </div>
      <div>
        <div className="z-10 bg-neutral-700 size-16 rounded-full -ml-5 flex items-center justify-center">
          <Ellipsis className="size-8" />
        </div>
      </div>
    </div>
  );
};
