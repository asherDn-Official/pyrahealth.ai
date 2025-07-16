import React from 'react';
import Person from '../../../../../../assets/images/person.png'

export const BenefitsSection = ({ benefits }) => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-center justify-center gap-8 lg:gap-[38px] px-4 sm:px-6 lg:px-[66px] py-8 lg:py-16 bg-[#fff6f4]">
      <div className="flex flex-col items-start gap-6 lg:gap-[26px] max-w-[763px] w-full">
        <div className="flex flex-col items-start gap-4 lg:gap-5 w-full">
          <div className="h-8 lg:h-[118px]">
            Built for busy Clinics. Powered by AI.
          </div>
          <p className="text-black text-lg sm:text-xl lg:text-2xl tracking-[-0.48px] leading-7 lg:leading-9 font-normal">
            We help you attract more patients, automate daily workflows, and
            deliver more personalized care from first click to post-visit
            follow-up.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:gap-2.5 w-full">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 lg:gap-2.5 w-full">
              <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                <div className="relative w-[22px] h-[22px] top-px left-px bg-[url(/vector.svg)] bg-[100%_100%]">
                  <img className="absolute w-[11px] h-2 top-2 left-1.5" alt="Checkmark" src="/vector-23.svg" />
                </div>
              </div>
              <p className="flex-1 text-[#121416] text-lg sm:text-xl lg:text-2xl tracking-[-0.48px] leading-7 lg:leading-9">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <img
        className="w-full max-w-[400px] lg:max-w-[486.03px] h-auto"
        alt="Healthcare illustration"
        src={Person}
      />
    </section>
  );
};