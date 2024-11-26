import Image from "next/image";
import React from "react";
import quantumLogo from "@/public/images/quantum.svg";
import acmeLogo from "@/public/images/acme-corp.svg";
import echoValleyLogo from "@/public/images/echo-valley.svg";
import pulseLogo from "@/public/images/pulse.svg";
import outsideLogo from "@/public/images/outside.svg";
import apexLogo from "@/public/images/apex.svg";
import celestialLogo from "@/public/images/celestial.svg";
import twiceLogo from "@/public/images/twice.svg";

export const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export const LogoTicker: React.FC = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h2 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h2>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-24 pr-24">
            {logos.map((logo) => (
              <Image src={logo.image} key={logo.name} alt={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
