import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const InsightsAndArticlesSection = () => {
  // Form fields data
  const formFields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "phone", label: "Phone", type: "tel" },
    { id: "company", label: "Company", type: "text" },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-[50px] px-4 sm:px-8 lg:px-[60px] py-16 lg:py-[123px] bg-[#fff6f4]">
      <div className="flex flex-col w-full lg:w-[484px] items-start gap-8 lg:gap-12">
        <div className="flex flex-col items-start gap-4 lg:gap-5 w-full">
          <p className="font-['Satoshi-Regular',Helvetica] font-normal text-black text-lg sm:text-xl lg:text-2xl tracking-[-0.48px] leading-7 lg:leading-[34px]">
            <span className="tracking-[-0.12px]">
              Discover the future of clinic growth with{" "}
            </span>

            <a
              href="http://pyrahealth.ai/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline"
            >
              <span className="tracking-[-0.12px]">Pyrahealth.ai</span>
            </a>

            <span className="tracking-[-0.12px]">
              . Our AI-driven solutions combine smart patient acquisition,
              automated workflows, and intelligent follow-ups — helping you
              attract more of the right patients, reduce operational friction,
              and deliver high-touch care at scale.
            </span>
          </p>
        </div>

        <p className="font-['Satoshi-Bold',Helvetica] font-bold text-black text-lg sm:text-xl lg:text-2xl tracking-[-0.48px] leading-7 lg:leading-[34px]">
          Fill out this form to get started!
        </p>
      </div>

      <Card className="flex flex-col w-full lg:w-[750px] items-start rounded-[20px] border-2 border-solid border-[#fff1d7] shadow-[0px_4px_35.1px_#ffece0] backdrop-blur-[28.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.5px)_brightness(100%)]">
        <CardContent className="w-full p-6 lg:p-[41px] lg:pt-[27px]">
          <div className="w-full">
            <h2 className="mb-8 lg:mb-[59px] font-['Inter',Helvetica] font-medium text-white-font text-2xl lg:text-[28px] text-center tracking-[0] leading-8 lg:leading-[33.6px]">
              Have a requirement? Let&#39;s discuss.
            </h2>

            {formFields.map((field) => (
              <div
                key={field.id}
                className="mb-4 lg:mb-[20px] pb-3 lg:pb-[15px] border-b border-[#dce2f2]"
              >
                <label
                  htmlFor={field.id}
                  className="block mb-2 font-['Satoshi-Regular',Helvetica] font-normal text-[#121416] text-sm lg:text-[15.6px] tracking-[0] leading-5 lg:leading-[21px]"
                >
                  {field.label}
                </label>
                <Input
                  id={field.id}
                  type={field.type}
                  className="border-none shadow-none focus-visible:ring-0 p-0 h-[25px] lg:h-[30px] font-['Satoshi-Regular',Helvetica] text-sm lg:text-base"
                />
              </div>
            ))}

            <div className="mb-4 lg:mb-[20px] pb-3 lg:pb-[15px] border-b border-[#dce2f2]">
              <Select>
                <SelectTrigger className="border-none shadow-none focus-visible:ring-0 p-0 h-12 lg:h-[57px] font-['Satoshi-Regular',Helvetica] text-sm lg:text-base">
                  <SelectValue placeholder="---Select Country---" />
                </SelectTrigger>
              </Select>
            </div>

            <div className="mb-4 lg:mb-[20px] pb-3 lg:pb-[15px] border-b border-[#dce2f2]">
              <label
                htmlFor="requirement"
                className="block mb-2 font-['Satoshi-Regular',Helvetica] font-normal text-[#121416] text-sm lg:text-[15.2px] tracking-[0] leading-5 lg:leading-[21px]"
              >
                Your Requirement
              </label>
              <Textarea
                id="requirement"
                className="border-none shadow-none focus-visible:ring-0 p-0 min-h-[50px] lg:min-h-[60px] resize-none font-['Satoshi-Regular',Helvetica] text-sm lg:text-base"
              />
            </div>

            <Button className="mt-4 lg:mt-[20px] w-full sm:w-[184px] h-[45px] lg:h-[50px] bg-black rounded-[100px] font-['Satoshi-Medium',Helvetica] font-medium text-white-font text-xs lg:text-[13.9px] tracking-[1.00px] leading-6 lg:leading-[27px] hover:bg-gray-800 transition-colors">
              Send Message
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};