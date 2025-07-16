
import { GrowthStepCard } from "../ui/GrowthStepCard";

export const GrowthProcessSection = ({ growthSteps }) => {
  return (
    <section className="flex w-full items-center justify-center px-4 sm:px-6 py-8 lg:py-16 bg-white">
      <div className="flex flex-col w-full max-w-[1244px] items-center gap-8 lg:gap-[30px]">
        <div className="flex flex-col w-full max-w-[1178px] items-center gap-4 lg:gap-5">
          <p className="max-w-[1016px] text-[#6c757d] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-9">
            Never settle for a one-size-fits-all solution. Accelerate clinic
            growth with a data-informed strategy that aligns with your
            operations — complete with AI-powered tools, automation plans, and
            a performance roadmap. Here's how we do it
          </p>
        </div>

        <div className="w-full mt-8 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 justify-items-center">
            {growthSteps.map((step, index) => (
              <GrowthStepCard
                key={index}
                {...step}
                isLast={index === growthSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};