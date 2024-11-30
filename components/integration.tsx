import React from "react";
import { Tag } from "./ui/tag";
import { IntegrationComponent } from "./integration-component";
import figmaIcon from "@/public/images/figma-logo.svg";
import notionIcon from "@/public/images/notion-logo.svg";
import slackIcon from "@/public/images/slack-logo.svg";
import relumeIcon from "@/public/images/relume-logo.svg";
import framerIcon from "@/public/images/framer-logo.svg";
import githubIcon from "@/public/images/github-logo.svg";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

export const Integration: React.FC = () => {
  return (
    <section className="mt-48 overflow-hidden">
      <div className="container grid lg:grid-cols-2 items-center lg:gap-16">
        <div>
          <Tag>Integrations</Tag>
          <h2 className="text-6xl font-medium mt-6">
            Plays well with <span className="text-lime-400">others</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            Layers seamlessly connects with your favorite tools, making it easy
            to plug into any workflow and collaborate across platforms.
          </p>
        </div>
        <div className="h-[400px] lg:h-[800px] mt-8 grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <IntegrationComponent integrations={integrations} />
          <IntegrationComponent
            integrations={integrations.slice().reverse()}
            className="hidden md:flex flex-col"
            reversed
          />
        </div>
      </div>
    </section>
  );
};
