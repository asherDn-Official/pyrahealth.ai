import React from "react";
import { Separator } from "../../../../components/ui/separator";
import footerLogo from "../../../../assets/images/footer-logo.png";
import youtubelogo from "../../../../assets/images/you-tube-icon.png";
import linkedinlogo from "../../../../assets/images/linkedin-icon.png";
import applelogo from "../../../../assets/images/appile-icon.png";

export const ClientCareHighlightsSection = () => {
  // Who We Help column data
  const whoWeHelpItems = [
    "IVF & Fertility Clinics",
    "Dental Clinics & DSOs",
    "Chiropractic & Physical Therapy Centers",
    "Mental Health Clinics",
    "Behavioral Health Providers",
    "Wellness & Integrative Medicine Centers",
  ];

  // Capabilities column data
  const capabilitiesItems = [
    "Patient Acquisition Strategy",
    "Workflow Automation for Clinics",
    "Growth Analytics & Performance Dashboards",
    "Smart Intake & Visit Automation",
    "Website & Experience",
  ];

  // About Us column data
  const aboutUsItems = [
    {
      text: "Healthcare Marketing Blog",
      href: "https://www.cardinaldigitalmarketing.com/healthcare-resources/blog/",
    },
    {
      text: "Healthcare Client Case Studies",
      href: "https://www.cardinaldigitalmarketing.com/healthcare-case-study/",
    },
    { text: "Careers", href: null },
    { text: "Internships", href: null },
    { text: "Testimonials", href: null },
    { text: "Contact Us", href: null },
  ];

  return (
    <footer className="w-full bg-white py-6 lg:py-8 px-4 lg:px-16">
      <div className="max-w-[1320px] mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Heading */}
          <div className="lg:max-w-[286px]">
            <h2 className="font-bold text-xl lg:text-2xl text-[#353535] leading-7 lg:leading-[34.1px] [font-family:'Satoshi-Bold',Helvetica]">
              Built for Clinics That Want to Scale Smarter.
            </h2>
          </div>

          {/* Footer columns */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">
            {/* Who We Help column */}
            <div className="flex flex-col w-full lg:w-[355px] gap-3">
              <a
                className="font-bold text-lg text-black leading-[25.2px] [font-family:'Satoshi-Bold',Helvetica] hover:underline"
                href="https://www.cardinaldigitalmarketing.com/healthcare-specialties/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Who We Help
              </a>
              <div className="flex flex-col gap-2">
                {whoWeHelpItems.map((item, index) => (
                  <div
                    key={`who-we-help-${index}`}
                    className="font-medium text-sm lg:text-base text-[#353535] leading-5 lg:leading-[22.4px] [font-family:'Satoshi-Medium',Helvetica]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities column */}
            <div className="flex flex-col w-full lg:w-[341px] gap-3">
              <a
                className="font-bold text-lg text-black leading-[25.2px] [font-family:'Satoshi-Bold',Helvetica] hover:underline"
                href="https://www.cardinaldigitalmarketing.com/healthcare-services/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Capabilities
              </a>
              <div className="flex flex-col gap-2">
                {capabilitiesItems.map((item, index) => (
                  <div
                    key={`capabilities-${index}`}
                    className="font-medium text-sm lg:text-base text-[#353535] leading-5 lg:leading-[22.4px] [font-family:'Satoshi-Medium',Helvetica]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* About Us column */}
            <div className="flex flex-col w-full lg:w-56 gap-3">
              <a
                className="font-bold text-lg text-black leading-[25.2px] [font-family:'Satoshi-Bold',Helvetica] hover:underline"
                href="https://www.cardinaldigitalmarketing.com/about-us/"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </a>
              <div className="flex flex-col gap-2">
                {aboutUsItems.map((item, index) =>
                  item.href ? (
                    <a
                      key={`about-us-${index}`}
                      className="font-medium text-sm lg:text-base text-[#353535] leading-5 lg:leading-[22.4px] [font-family:'Satoshi-Medium',Helvetica] hover:underline"
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <div
                      key={`about-us-${index}`}
                      className="font-medium text-sm lg:text-base text-[#353535] leading-5 lg:leading-[22.4px] [font-family:'Satoshi-Medium',Helvetica] cursor-pointer hover:underline"
                    >
                      {item.text}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-6 lg:mb-8" />

        {/* Bottom footer bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex justify-center items-center">
              <div className="inline-flex items-center gap-[6.12px]">
                <img className="" alt="Union" src={footerLogo} />
              </div>
            </div>
          </div>

          {/* Social links */}

          <div className="flex gap-4 ml-[0%] sm:ml-[10%] md:ml-[0%] lg:ml-[15%]">
            <img
              className="flex-none h-6 lg:h-auto"
              alt="YouTube logo"
              src={youtubelogo}
            />
            <img
              className="flex-none h-6 lg:h-auto"
              alt="LinkedIn logo"
              src={linkedinlogo}
            />
            <img
              className="flex-none h-6 lg:h-auto"
              alt="Apple logo"
              src={applelogo}
            />
          </div>

          {/* Legal links */}
          <div className="inline-flex items-center gap-1.5 flex-wrap justify-center lg:justify-end">
            <div className="font-medium text-xs text-[#353535] leading-6 [font-family:'Satoshi-Medium',Helvetica] cursor-pointer hover:underline">
              Terms & Conditions
            </div>

            <img
              className="w-[5px] h-[4.98px]"
              alt="Vector"
              src="/vector-7.svg"
            />

            <div className="font-medium text-xs text-[#353535] leading-6 [font-family:'Satoshi-Medium',Helvetica] cursor-pointer hover:underline">
              Privacy Policy
            </div>

            <img
              className="w-[5px] h-[4.98px]"
              alt="Vector"
              src="/vector-7.svg"
            />

            <div className="font-medium text-xs text-[#353535] leading-6 [font-family:'Satoshi-Medium',Helvetica]">
              Copyright © 2025 Pyrahealth.ai
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
