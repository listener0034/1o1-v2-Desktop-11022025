import React from "react";

const features = [
  {
    icon: "https://c.animaapp.com/mhi03ah6FcJp7z/img/heart-1.png",
    title: "Empowering Families",
    description:
      "Supporting loved ones through the power of\nmeaningful conversations.",
    iconAlt: "Heart",
  },
  {
    icon: "https://c.animaapp.com/mhi03ah6FcJp7z/img/talk-1.png",
    title: "No Apps, No Barriers",
    description: "Works with any phone. Just answer the call.",
    iconAlt: "Talk",
  },
  {
    icon: "https://c.animaapp.com/mhi03ah6FcJp7z/img/trust-1.png",
    title: "Trusted & Secure",
    description:
      "Built with privacy at its core, 1o1 keeps\nevery conversation safe and confidential.",
    iconAlt: "Trust",
  },
];

 


export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <>
      <section className="relative w-full py-24 px-4 [background:url(https://c.animaapp.com/mhi03ah6FcJp7z/img/why.png)_50%_50%_/_cover] min-h-[800px] flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col items-end gap-12">
            <header className="flex flex-col items-end gap-6 translate-y-[-1rem] animate-fade-in opacity-0">
              <h2 className="flex items-center gap-3 font-header-2 text-white text-[64px] tracking-[-1.28px] leading-[64px]">
                <span>Why</span>
                <img
                  className="w-[74px] h-[51px]"
                  alt="1o1 logo"
                  src="https://c.animaapp.com/mhi03ah6FcJp7z/img/1o1-tek-1-1.svg"
                />
                <span>Makes a Difference?</span>
              </h2>

              <p className="font-din text-white text-2xl tracking-[-0.48px] text-right max-w-[662px]">
                1o1 helps families and care partners stay emotionally close and
                informed, even from afar. Every conversation supports healthy
                aging and human connection.
              </p>
            </header>

            <div className="flex flex-col items-end gap-16 w-full max-w-[500px]">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="flex flex-col items-end gap-3 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${400 + index * 200}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[31px] h-[21px] object-contain"
                      alt={feature.iconAlt}
                      src={feature.icon}
                    />
                    <h3 className="font-din-title text-white text-3xl tracking-[-0.60px]">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="font-din text-white text-xl tracking-[-0.40px] text-right whitespace-pre-line">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#379aa6] flex flex-col items-center py-12 px-4 relative">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <p className="w-full max-w-[1021px] [font-family:'Alice',Helvetica] font-normal text-white text-4xl text-center tracking-[-0.72px] leading-[45px] mb-8">
            Powered by empathetic voice AI, 1o1 strengthens family connection
            and emotional wellbeing through meaningful daily conversations,
            supporting confidence, care, and healthy aging.
          </p>
          <img
            className="w-[43px] h-[66px]"
            alt="Group"
            src="https://c.animaapp.com/mh6u3700CZ3FJ1/img/group-2.png"
          />
        </div>
      </section>
    </>
  );
};
