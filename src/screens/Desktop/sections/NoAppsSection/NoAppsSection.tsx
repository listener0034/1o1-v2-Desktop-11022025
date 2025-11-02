import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const NoAppsSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-8 translate-y-[-1rem] animate-fade-in opacity-0">
      <Card className="w-full max-w-[996px] border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex rounded-[30px] overflow-hidden">
            <div className="w-1/2 h-[340px] rounded-[30px_0px_0px_30px] [background:url(https://c.animaapp.com/mhi03ah6FcJp7z/img/left-image.png)_50%_50%_/_cover]" />

            <div className="w-1/2 h-[340px] bg-[#e4ddd1] rounded-[0px_30px_30px_0px] flex flex-col justify-center px-7 py-12 gap-4">
              <h2 className="font-header-3 font-[number:var(--header-3-font-weight)] text-[#26123a] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
                No Apps, No Screens, No Hassle!
              </h2>

              <p className="font-title font-[number:var(--title-font-weight)] text-[#a14117] text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
                1o1 works with any phone.&nbsp;&nbsp;
                <br />
                Just pick up the call and the connection begins.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
