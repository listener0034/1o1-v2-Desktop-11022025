import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const navigationLinks = [
  { label: "Email Us" },
  { label: "Us" },
  { label: "Features" },
  { label: "FAQ" },
];

const legalLinks = [{ label: "Term of Use" }, { label: "Privacy Policy" }];

export const MainContentSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#2c113c] py-16 px-8 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          <div className="flex-shrink-0">
            <img
              className="w-[202px] h-[101px]"
              alt="1o1 logo"
              src="https://c.animaapp.com/mhi03ah6FcJp7z/img/1o1-logo-2.svg"
            />
          </div>

          <nav className="flex flex-wrap gap-8 lg:gap-12 items-center justify-center flex-1">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                className="font-but-text font-[number:var(--but-text-font-weight)] text-white text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)] transition-opacity hover:opacity-80"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4 flex-shrink-0">
            <div className="font-but-text font-[number:var(--but-text-font-weight)] text-white text-[length:var(--but-text-font-size)] text-center tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)]">
              Get updates from 1o1
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder=""
                className="w-[183px] h-12 rounded-[14px] border-white bg-transparent text-white placeholder:text-white/50"
              />
              <Button className="w-[91px] h-12 bg-white rounded-[14px] text-[#5c457d] text-base font-normal [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] tracking-[-0.80px] hover:bg-white/90 transition-colors">
                Submit
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-wrap gap-8 justify-center lg:justify-end">
          {legalLinks.map((link, index) => (
            <button
              key={index}
              className="font-but-text font-[number:var(--but-text-font-weight)] text-white text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)] transition-opacity hover:opacity-80"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
