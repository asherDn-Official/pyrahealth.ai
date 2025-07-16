import { CaseStudyCard } from "../ui/CaseStudyCard";

// Import your case study images
import case1 from "../../../../../../assets/images/case-1.png";
import case2 from "../../../../../../assets/images/case-2.png";
import case3 from "../../../../../../assets/images/case-3.png";

export const CaseStudiesSection = ({ caseStudies }) => {
  // Create an array of imported images for easy access
  const caseStudyImages = [case1, case2, case3];

  // Enhance the caseStudies data with the corresponding images
  const enhancedCaseStudies = caseStudies.map((study, index) => ({
    ...study,
    logo: caseStudyImages[index],
    logoWidth: "160px", // Set your desired width
    logoHeight: "auto", // Maintain aspect ratio
  }));

  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-[52px] py-8 lg:py-16 bg-white">
      <div className="flex flex-col items-center gap-4 lg:gap-5 w-full px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-1px] mb-4 lg:mb-6 text-[#121416]">
          Client Case{" "}
          <span className="bg-[linear-gradient(180deg,rgba(114,0,98,1)_0%,rgba(255,45,125,1)_46%,rgba(246,120,0,1)_100%)] text-transparent bg-clip-text">
            Studies
          </span>
        </h2>

        <p className="max-w-[858px] text-[#6c757d] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-9">
          Discover how modern healthcare and wellness clinics are transforming
          operations, improving patient outcomes, and scaling faster — all with
          the power of AI.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 w-full max-w-[1200px]">
        {enhancedCaseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            percentage={study.percentage}
            title={study.title}
            description={study.description}
            logo={study.logo}
            logoWidth={study.logoWidth}
            logoHeight={study.logoHeight}
          />
        ))}
      </div>
    </section>
  );
};
