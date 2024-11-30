"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";
import { type IntegrationsType } from "./integration";
import gsap from "gsap";

interface Props {
  integrations: IntegrationsType;
  className?: string;
  reversed?: boolean;
}

export const IntegrationComponent: React.FC<Props> = ({
  integrations,
  className,
  reversed,
}) => {
  const integrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const integrationElement = integrationRef.current;

    if (integrationElement) {
      gsap.set(integrationElement, {
        y: reversed ? "-50%" : "0%",
      });

      // Start the animation
      gsap.to(integrationElement, {
        y: reversed ? "0%" : "-50%",
        duration: 20,
        ease: "linear",
        repeat: 100,
      });
    }
  }, []);
  return (
    <div
      className={cn("flex flex-col gap-4 pb-4", className)}
      ref={integrationRef}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              className={cn(
                "border border-white/10 rounded-3xl bg-neutral-900 p-6",
                className
              )}
              key={integration.name}
            >
              <div className="flex justify-center items-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="size-24"
                />
              </div>
              <div className="flex text-center flex-col">
                <h2 className="text-3xl font-medium mt-6">
                  {integration.name}
                </h2>
                <p className="text-white/50 mt-2">{integration.description}</p>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
