import React from "react";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] grid grid-cols-2">
        <div className="w-full h-[600px] flex flex-col gap-4 bg-[#2c113c] rounded-br-[100px] overflow-hidden px-[59px] py-[174px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="w-full max-w-[536px] font-header-2 font-[number:var(--header-2-font-weight)] text-[#e9c7a1] text-[length:var(--header-2-font-size)] tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
            Features That Bring Care Closer
          </h2>

          <p className="w-full max-w-[502px] font-title font-[number:var(--title-font-weight)] text-white text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            Each feature in 1o1 is designed to make daily life safer, easier,
            and more connected both for older adults and their families.
          </p>
        </div>

        <div
          className="w-full h-[600px] flex flex-col gap-0.5 rounded-bl-[100px] overflow-hidden bg-cover bg-center px-[60px] pt-[361px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/mhi03ah6FcJp7z/img/right-image.png)",
          }}
        >
          <h2 className="w-full max-w-[536px] font-header-2 font-[number:var(--header-2-font-weight)] text-[#fbf1db] text-[length:var(--header-2-font-size)] tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] whitespace-nowrap [font-style:var(--header-2-font-style)]">
            It&apos;s simple.
          </h2>

          <p className="w-full max-w-[536px] font-title font-[number:var(--title-font-weight)] text-[#fbf1db] text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            It keeps us connected <br />
            in the kindest way.
          </p>
        </div>
      </div>
    </section>
  );
};
