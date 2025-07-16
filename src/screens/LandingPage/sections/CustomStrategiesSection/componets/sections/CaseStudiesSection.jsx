import { CaseStudyCard } from "../ui/CaseStudyCard";

export const CaseStudiesSection = ({ caseStudies }) => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-[52px] py-8 lg:py-16 bg-white">
      <div className="flex flex-col items-center gap-4 lg:gap-5 w-full px-4">
        <p className="max-w-[858px] text-[#6c757d] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-9">
          Discover how modern healthcare and wellness clinics are transforming
          operations, improving patient outcomes, and scaling faster — all
          with the power of AI.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 w-full max-w-[1200px]">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
    </section>
  );
};