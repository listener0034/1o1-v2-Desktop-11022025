import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const steps = [
  {
    number: "1",
    label: "Set Up in Minutes",
  },
  {
    number: "2",
    label: "Plan Your Schedule",
  },
  {
    number: "3",
    label: "Enjoy Your Conversations",
  },
  {
    number: "4",
    label: "Fell the Bond Grow with 1o1",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="flex w-full max-w-[996px] h-auto min-h-[459px] items-center justify-between overflow-hidden">
        <div className="rounded-[30px_0px_0px_30px] [background:url(https://c.animaapp.com/mhi03ah6FcJp7z/img/left-image-1.png)_50%_50%_/_cover] w-[297px] min-h-[459px] flex-shrink-0" />

        <div className="w-full max-w-[700px] min-h-[459px] rounded-[0px_30px_30px_0px] overflow-hidden bg-[linear-gradient(161deg,rgba(201,103,26,1)_0%,rgba(153,57,22,1)_100%)] flex">
          <div className="w-[170px] bg-[#c9681b] py-[30px] px-1.5 flex flex-col gap-[15px] flex-shrink-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-[10px]"
              >
                <div className="w-[52px] h-[52px] bg-white rounded-[26px] flex items-center justify-center">
                  <span className="[font-family:'URW_DIN-Regular',Helvetica] font-normal text-[#b5732f] text-[37px] tracking-[-1.85px] leading-normal">
                    {step.number}
                  </span>
                </div>
                <p className="w-[158px] [font-family:'URW_DIN-Regular',Helvetica] font-normal text-white text-[17px] text-center tracking-[-0.85px] leading-normal">
                  {step.label}
                </p>
              </div>
            ))}
            <div className="w-px h-[402px] bg-white/20 mx-auto mt-[-402px]" />
          </div>

          <div className="flex-1 rounded-[0px_30px_30px_0px] overflow-hidden p-11 flex flex-col justify-center gap-6">
            <h2 className="font-header-3 font-[number:var(--header-3-font-weight)] text-[#e4ddd1] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              How it Works?
            </h2>

            <p className="font-title font-[number:var(--title-font-weight)] text-[#e4ddd1] text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)] max-w-[437px]">
              When 1o1 calls, simply answer&nbsp;&nbsp;or reach out anytime
              using the same number.
            </p>

            <Button className="w-[181px] h-12 bg-white hover:bg-white/90 rounded-[14px] text-[#b36635] font-but-text font-[number:var(--but-text-font-weight)] text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)] transition-colors">
              How it Works?
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
