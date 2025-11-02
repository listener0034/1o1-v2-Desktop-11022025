import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FaqSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#40284f] py-10 px-4">
      <div className="container mx-auto max-w-[1440px] flex flex-col items-center justify-center gap-8">
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] [font-family:'Alice',Helvetica] font-normal text-[#e9c7a1] text-[64px] tracking-[-1.28px] leading-[50px] text-center">
          FAQ
        </h2>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] max-w-[705px] [font-family:'Alice',Helvetica] font-normal text-white text-[28px] text-center tracking-[-0.56px] leading-normal">
          It&apos;s natural to have questions,&nbsp;&nbsp;every family does.
          <br />
          Here&apos;s how 1o1 helps you stay close, informed, and at ease.
        </p>

        <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] h-12 bg-white rounded-[14px] text-[#5c457d] hover:bg-white/90 transition-colors font-but-text font-[number:var(--but-text-font-weight)] text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)] px-5 gap-2">
          Explore All Answers
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};
