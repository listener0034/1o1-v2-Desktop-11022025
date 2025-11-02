import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featuresData = [
  {
    id: 1,
    title: "Emotional Check-ins",
    description: "Understands tone and mood to offer the right response.",
    image: "https://c.animaapp.com/mhhzr6auFfG0Hd/img/image.png",
    imagePosition: "left",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[20px_0px_40px_20px]",
    cardRounded: "rounded-[0px_20px_20px_40px]",
  },
  {
    id: 2,
    title: "Real-Time Updates",
    description: "Families receive instant insights about each call.",
    image: "https://c.animaapp.com/mhhzr6auFfG0Hd/img/image-1.png",
    imagePosition: "right",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[0px_0px_20px_40px] ",
    cardRounded: "rounded-[20px_0px_40px_20px]",
  },
  {
    id: 3,
    title: "Personalized Memory Notes",
    description: "Remembers birthdays, habits, and favorite stories.",
    image: "https://c.animaapp.com/mhhzr6auFfG0Hd/img/image-4.png",
    imagePosition: "left",
    bgColor: "bg-white",
    titleColor: "text-[#27133a]",
    descColor: "text-[#b36635]",
    imageRounded: "rounded-[20px_0px_40px_20px]",
    cardRounded: "rounded-[0px_20px_20px_40px]",
  },
  {
    id: 4,
    title: "Easy Scheduling",
    description: "Automated call plans that fit any routine.",
    image: "https://c.animaapp.com/mhhzr6auFfG0Hd/img/image-2.png",
    imagePosition: "right",
    bgColor: "bg-white",
    titleColor: "text-[#27133a]",
    descColor: "text-[#b36635]",
    imageRounded: "rounded-[0px_0px_20px_40px]",
    cardRounded: "rounded-[20px_0px_40px_20px]",
  },
  {
    id: 5,
    title: "Health Reminders",
    description: "Gentle daily prompts for medicine, hydration, or activity.",
    image: "https://c.animaapp.com/mhhzr6auFfG0Hd/img/image-5.png",
    imagePosition: "left",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[20px_0px_40px_20px]",
    cardRounded: "rounded-[0px_20px_20px_40px]",
  },
  {
    id: 6,
    title: "Growing Understanding",
    description: "1o1 learns with each interaction for deeper connection.",
    image: "https://c.animaapp.com/mhhzr6auFfG0Hd/img/image-3.png",
    imagePosition: "right",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[0px_0px_20px_40px] ",
    cardRounded: "rounded-[20px_0px_40px_20px]",
  },
];

export const FeaturesBarSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 px-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${index * 100}ms]`}
          >
            <div
              className={`flex ${
                feature.imagePosition === "left"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`w-full max-w-[600px] flex gap-5 ${
                  feature.imagePosition === "left"
                    ? "flex-row"
                    : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-40 h-40 flex-shrink-0 ${feature.imageRounded} bg-cover bg-center bg-no-repeat`}
                  style={{
                    backgroundImage: `url(${feature.image})`,
                  }}
                />

                <Card
                  className={`flex-1 h-40 ${feature.bgColor} ${feature.cardRounded} border-0 shadow-none overflow-hidden`}
                >
                  <CardContent className="flex flex-col justify-center h-full p-6 gap-2">
                    <h3
                      className={`font-title font-[number:var(--title-font-weight)] ${feature.titleColor} text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)] ${
                        feature.imagePosition === "right"
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`font-but-text font-[number:var(--but-text-font-weight)] ${feature.descColor} text-[length:var(--but-text-font-size)] tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)] ${
                        feature.imagePosition === "right"
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};





/*import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featuresData = [
  {
    id: 1,
    title: "Emotional Check-ins",
    description: "Understands tone and mood to offer the right response.",
    image: "https://c.animaapp.com/mhi03ah6FcJp7z/img/image.png",
    layout: "left",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[20px_0px_40px_20px]",
    contentRounded: "rounded-[0px_20px_20px_40px]",
    animationDelay: "0ms",
  },
  {
    id: 2,
    title: "Real-Time Updates",
    description: "Families receive instant insights about each call.",
    image: "https://c.animaapp.com/mhi03ah6FcJp7z/img/image-1.png",
    layout: "right",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[0px_0px_20px_40px]",
    contentRounded: "rounded-[20px_0px_40px_20px]",
    animationDelay: "200ms",
  },
  {
    id: 3,
    title: "Personalized Memory Notes",
    description: "Remembers birthdays, habits, and favorite stories.",
    image: "https://c.animaapp.com/mhi03ah6FcJp7z/img/image-4.png",
    layout: "left",
    bgColor: "bg-white",
    titleColor: "text-[#27133a]",
    descColor: "text-[#b36635]",
    imageRounded: "rounded-[20px_0px_40px_20px]",
    contentRounded: "rounded-[0px_20px_20px_40px]",
    animationDelay: "400ms",
  },
  {
    id: 4,
    title: "Easy Scheduling",
    description: "Automated call plans that fit any routine.",
    image: "https://c.animaapp.com/mhi03ah6FcJp7z/img/image-2.png",
    layout: "right",
    bgColor: "bg-white",
    titleColor: "text-[#27133a]",
    descColor: "text-[#b36635]",
    imageRounded: "rounded-[0px_0px_20px_40px]",
    contentRounded: "rounded-[20px_0px_40px_20px]",
    animationDelay: "600ms",
  },
  {
    id: 5,
    title: "Health Reminders",
    description: "Gentle daily prompts for medicine, hydration, or activity.",
    image: "https://c.animaapp.com/mhi03ah6FcJp7z/img/image-5.png",
    layout: "left",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[20px_0px_40px_20px]",
    contentRounded: "rounded-[0px_20px_20px_40px]",
    animationDelay: "800ms",
  },
  {
    id: 6,
    title: "Growing Understanding",
    description: "1o1 learns with each interaction for deeper connection.",
    image: "https://c.animaapp.com/mhi03ah6FcJp7z/img/image-3.png",
    layout: "right",
    bgColor: "bg-[#27133a]",
    titleColor: "text-[#e9c7a1]",
    descColor: "text-white",
    imageRounded: "rounded-[0px_0px_20px_40px]",
    contentRounded: "rounded-[20px_0px_40px_20px]",
    animationDelay: "1000ms",
  },
];

export const FeaturesBarSection = (): JSX.Element => {
  return (
    <section className="w-full py-[86px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {featuresData.map((feature, index) => {
            const isLeftLayout = feature.layout === "left";
            const rowIndex = Math.floor(index / 2);
            const isLeftColumn = index % 2 === 0;

            return (
              <div
                key={feature.id}
                className={`flex ${isLeftColumn ? "justify-end pr-3" : "justify-start pl-3"} h-[200px] ${rowIndex > 0 ? "mt-[86px]" : ""} translate-y-[-1rem] animate-fade-in opacity-0`}
                style={
                  {
                    "--animation-delay": feature.animationDelay,
                  } as React.CSSProperties
                }
              >
                <div className="w-[600px] flex justify-between">
                  {isLeftLayout ? (
                    <>
                      <div
                        className={`w-40 h-40 ${feature.imageRounded} [background:url(${feature.image})_50%_50%_/_cover]`}
                      />
                      <Card
                        className={`${feature.bgColor} ${feature.contentRounded} w-[440px] h-40 border-0 shadow-none`}
                      >
                        <CardContent className="flex flex-col gap-[7px] p-0 h-full overflow-hidden">
                          <h3
                            className={`flex items-center justify-center ${isLeftColumn ? "ml-[35px]" : "ml-[87px]"} w-[312px] h-[37px] ${rowIndex === 2 && isLeftColumn ? "mt-[46px]" : "mt-8"} font-title font-[number:var(--title-font-weight)] ${feature.titleColor} text-[length:var(--title-font-size)] ${isLeftColumn ? "" : "text-right"} tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`flex items-center justify-center ${isLeftColumn ? "ml-9" : "ml-[124px]"} w-[275px] ${rowIndex === 2 && isLeftColumn ? "h-[22px]" : "h-11"} font-but-text font-[number:var(--but-text-font-weight)] ${feature.descColor} text-[length:var(--but-text-font-size)] ${isLeftColumn ? "" : "text-right"} tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)]`}
                          >
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </>
                  ) : (
                    <>
                      <Card
                        className={`${feature.bgColor} ${feature.contentRounded} w-[440px] h-40 border-0 shadow-none`}
                      >
                        <CardContent
                          className={`flex flex-col ${feature.id === 6 ? "gap-1.5" : "gap-[7px]"} p-0 h-full overflow-hidden`}
                        >
                          <h3
                            className={`flex items-center justify-center ${isLeftColumn ? "ml-[35px]" : "ml-[87px]"} ${feature.id === 6 ? "w-[378px]" : "w-[312px]"} h-[37px] ${feature.id === 6 ? "mt-[34px]" : "mt-9"} font-title font-[number:var(--title-font-weight)] ${feature.titleColor} text-[length:var(--title-font-size)] ${isLeftColumn ? "" : "text-right"} tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`flex items-center justify-center ${isLeftColumn ? "ml-9" : "ml-[124px]"} w-[275px] h-11 font-but-text font-[number:var(--but-text-font-weight)] ${feature.descColor} text-[length:var(--but-text-font-size)] ${isLeftColumn ? "" : "text-right"} tracking-[var(--but-text-letter-spacing)] leading-[var(--but-text-line-height)] [font-style:var(--but-text-font-style)]`}
                          >
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                      <div
                        className={`${feature.imageRounded} rotate-180 [background:url(${feature.image})_50%_50%_/_cover] w-40 h-40`}
                      />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
*/
