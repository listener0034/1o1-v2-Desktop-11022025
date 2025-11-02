import React from "react";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesBarSection } from "./sections/FeaturesBarSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroPillSection } from "./sections/HeroPillSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NoAppsSection } from "./sections/NoAppsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const Desktop = (): JSX.Element => {
  return (
    <div
      className="bg-[#5c457d] w-full min-w-[1440px] relative"
      data-model-id="1:20"
    >
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <HeroSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <HeroPillSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <WhyChooseUsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <HowItWorksSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <NoAppsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <FeaturesSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <FeaturesBarSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <FaqSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <MainContentSection />
      </div>
    </div>
  );
};
