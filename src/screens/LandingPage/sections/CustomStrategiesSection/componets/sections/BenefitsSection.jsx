import React from "react";
import Person from "../../../../../../assets/images/about-us-img.png";
import point from "../../../../../../assets/images/point.png";

export const BenefitsSection = ({ benefits }) => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 lg:gap-8 xl:gap-[38px] px-4 sm:px-6 lg:px-8 xl:px-[66px] py-8 md:py-12 lg:py-16 bg-[#fff6f4]">
      <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-6 xl:gap-[26px] max-w-[763px] w-full">
        <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-5 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
            Built for busy Clinics. Powered by{" "}
            <span className="text-red-500">AI.</span>
          </h2>
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-[-0.48px] leading-normal md:leading-7 lg:leading-8 xl:leading-9 font-normal">
            We help you attract more patients, automate daily workflows, and
            deliver more personalized care from first click to post-visit
            follow-up.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-2.5 w-full">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-2 md:gap-3 lg:gap-2.5 w-full"
            >
              <div className="flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6">
                <img
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="Checkmark"
                  src={point}
                />
              </div>
              <p className="text-[#121416] text-base sm:text-lg md:text-xl lg:text-2xl tracking-[-0.48px] leading-normal md:leading-7 lg:leading-8 xl:leading-9">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full lg:w-auto">
        <img
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[486px] h-auto"
          alt="Healthcare illustration"
          src={Person}
          loading="lazy"
        />
      </div>
    </section>
  );
};
