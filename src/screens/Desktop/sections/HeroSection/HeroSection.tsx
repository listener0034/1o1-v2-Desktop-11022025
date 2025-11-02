import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Us", href: "#" },
  { label: "Features", href: "#" },
  { label: "FAQ", href: "#" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full min-h-[1024px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/mhi03ah6FcJp7z/img/hero.png)",
      }}
    >
      <div className="container mx-auto px-4 max-w-[1440px]">
        <header className="flex items-center justify-between pt-11 pb-10 translate-y-[-1rem] animate-fade-in opacity-0">
          <img
            className="w-[200px] h-[100px]"
            alt="1o1 logo"
            src="https://c.animaapp.com/mhi03ah6FcJp7z/img/1o1-logo-1.svg"
          />

          <nav className="relative flex items-center gap-12 px-8 py-4">
            <img
              className="absolute inset-0 w-full h-[110px] -top-2 bg-blend-overlay"
              alt=""
              src="https://c.animaapp.com/mhi03ah6FcJp7z/img/rectangle-4.svg"
            />

            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative z-10 font-but-text font-[number:var(--but-text-font-weight)] text-white text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)] transition-opacity hover:opacity-80"
              >
                {item.label}
              </a>
            ))}

            <Button className="relative z-10 h-12 bg-white text-[#5c457d] rounded-[14px] px-5 font-but-text font-[number:var(--but-text-font-weight)] text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)] hover:bg-white/90 transition-colors">
              Get Started
              <img
                className="ml-2 w-[26px] h-[18px]"
                alt=""
                src="https://c.animaapp.com/mhi03ah6FcJp7z/img/1o1-tek-1.svg"
              />
            </Button>
          </nav>
        </header>

        <div className="mt-[50px] max-w-[800px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h1 className="font-header font-[number:var(--header-font-weight)] text-white text-[length:var(--header-font-size)] tracking-[var(--header-letter-spacing)] leading-[var(--header-line-height)] [font-style:var(--header-font-style)]">
            Closer Than a Call!
          </h1>

          <h2 className="mt-[5px] font-title font-[number:var(--title-font-weight)] text-white text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            Conversations That Become a Habit of Care
          </h2>

          <p className="mt-[43px] font-din font-[number:var(--din-font-weight)] text-white text-[length:var(--din-font-size)] tracking-[var(--din-letter-spacing)] leading-[var(--din-line-height)] [font-style:var(--din-font-style)]">
            1o1 combines advanced voice AI with genuine <br />
            empathy to create conversations that feel truly <br />
            human.&nbsp;&nbsp;
            <br />
            <br />
            Wherever your loved ones are, it bridges <br />
            the distance with familiar voices and gentle <br />
            daily care.
          </p>

          <Button className="mt-[35px] h-12 bg-white text-[#5c457d] rounded-[14px] px-5 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-base tracking-[-0.80px] leading-normal hover:bg-white/90 transition-colors">
            Start Talking Today
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Button>

          <div className="flex items-center gap-6 mt-[60px]">
            <img
              className="w-[37px] h-[46px] object-cover"
              alt="SSL certified"
              src="https://c.animaapp.com/mhi03ah6FcJp7z/img/ssl-1.png"
            />
            <img
              className="w-[118px] h-[46px] object-cover"
              alt="HIPAA compliant"
              src="https://c.animaapp.com/mhi03ah6FcJp7z/img/hipaa-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
