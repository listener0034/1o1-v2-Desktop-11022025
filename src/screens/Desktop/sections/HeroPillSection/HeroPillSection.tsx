import React from "react";
import { Button } from "../../../../components/ui/button";

const audioWaveformBars = [
  { height: "h-[13px]", marginTop: "mt-2" },
  { height: "h-[9px]", marginTop: "mt-2.5" },
  { height: "h-[19px]", marginTop: "mt-[5px]" },
  { height: "h-[29px]", marginTop: "" },
  { height: "h-[19px]", marginTop: "mt-[5px]" },
  { height: "h-6", marginTop: "mt-[3px]" },
  { height: "h-3", marginTop: "mt-[9px]" },
  { height: "h-4", marginTop: "mt-[7px]" },
  { height: "h-[7px]", marginTop: "mt-[11px]" },
];

export const HeroPillSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-8 md:py-12 lg:py-16">
      <div className="flex w-full max-w-[996px] h-auto md:h-[459px] items-center justify-between overflow-hidden flex-col md:flex-row translate-y-[-1rem] animate-fade-in opacity-0">
        <article className="bg-[#e4ddd1] rounded-[100px] md:rounded-[100px_0px_0px_100px] overflow-hidden w-full md:w-[297px] h-auto md:h-[459px] p-8 md:p-0 flex flex-col justify-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="relative w-full h-full flex flex-col justify-center md:block">
            <img
              className="hidden md:block absolute top-[209px] left-[calc(50%_-_108px)] w-4 h-[25px]"
              alt="Decorative element"
              src="https://c.animaapp.com/mhi03ah6FcJp7z/img/group-2-1.png"
            />

            <h2 className="md:absolute md:top-[97px] md:left-[41px] w-full md:w-[225px] mb-4 md:mb-0 flex items-center justify-center md:justify-start font-title font-[number:var(--title-font-weight)] text-[#27133a] text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
              Meet Our AI Companion
            </h2>

            <h3 className="md:absolute md:top-[196px] md:left-[61px] w-full md:w-[119px] mb-2 md:mb-0 flex items-center justify-center md:justify-start font-title font-[number:var(--title-font-weight)] text-[#27133a] text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
              Luma
            </h3>

            <p className="md:absolute md:top-[239px] md:left-[41px] w-full md:w-[246px] mb-6 md:mb-0 flex items-center justify-center md:justify-start [font-family:'Alice',Helvetica] font-normal text-[#4e7677] text-[28px] tracking-[-0.56px] leading-[normal]">
              The Voice of Care
            </p>

            <div className="md:absolute md:top-[296px] md:left-[41px] w-full md:w-[210px] flex justify-center md:justify-start">
              <Button
                variant="ghost"
                className="relative w-[210px] h-12 bg-white rounded-[14px] hover:bg-white/90 transition-colors"
              >
                <div className="absolute top-2.5 left-4 w-[42px] h-[29px] flex gap-[3px]">
                  {audioWaveformBars.map((bar, index) => (
                    <div
                      key={index}
                      className={`w-0.5 ${bar.height} ${bar.marginTop} bg-[#b36635] rounded-[9px]`}
                    />
                  ))}
                </div>
                <span className="ml-12 font-but-text font-[number:var(--but-text-font-weight)] text-[#5c457d] text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)]">
                  Listen to Luma
                </span>
              </Button>
            </div>
          </div>
        </article>

        <div className="relative w-full md:w-[700px] h-[300px] md:h-[459px] rounded-[100px] md:rounded-none overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <img
            src="https://c.animaapp.com/mhi03ah6FcJp7z/img/right-image-1.png"
            alt="A friendly voice just a call away"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-8 md:p-0">
            <h3 className="md:absolute md:top-[290px] md:left-[42px] w-full md:w-[373px] flex items-center justify-center md:justify-start font-header-3 font-[number:var(--header-3-font-weight)] text-[#fbf1db] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              A friendly voice just a call away
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
