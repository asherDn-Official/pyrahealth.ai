import { Card, CardContent } from "../../../../../../components/ui/card";

export const CaseStudyCard = ({
  percentage,
  unit = "%",
  title,
  description,
  logo,
  logoWidth,
  logoHeight,
}) => {
  return (
    <Card className="w-full max-w-[378px] rounded-[40px] border shadow-[0px_4px_22.7px_#ffd3c4b2] hover:shadow-[0px_8px_30px_#ffd3c4b2] transition-shadow">
      <CardContent className="p-0">
        <div className="w-full h-[120px] lg:h-[158px]  m-2 mx-auto bg-[#fff2ed] rounded-[30px_30px_0px_0px] border border-white flex flex-col items-center justify-center">
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-5xl lg:text-[70px] tracking-[-1.40px] bg-[linear-gradient(180deg,rgba(114,0,98,1)_0%,rgba(255,45,125,1)_46%,rgba(246,120,0,1)_100%)] text-transparent bg-clip-text">
              {percentage}
            </span>
            <span className="font-medium text-[#121416] text-4xl lg:text-6xl tracking-[-1.20px] leading-8">
              {unit}
            </span>
          </div>
          <h3 className="font-bold text-[#121416] text-lg lg:text-2xl text-center tracking-[-0.48px] leading-6 lg:leading-[29px] mt-4 max-w-[325px] px-4">
            {title}
          </h3>
        </div>

        <p className="text-[#121416] text-lg lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-[35px] mt-6 lg:mt-8 mx-auto max-w-[325px] px-4">
          {description}
        </p>

        <div className="flex justify-center mt-8 lg:mt-16 mb-6 px-4">
          <img
            src={logo}
            alt={`Case study logo`}
            style={{
              width: logoWidth,
              height: logoHeight,
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
