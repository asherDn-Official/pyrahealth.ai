import { Card, CardContent } from "../../../../../../components/ui/card";

export const GrowthStepCard = ({ title, description, iconSrc, isLast = false }) => {
  return (
    <div className="flex flex-col items-center p-2.5 w-full max-w-[273px]">
      <Card className="w-full h-56 lg:h-64 rounded-[40px] shadow-[0px_4px_24.3px_#ffcebd] border-none hover:shadow-[0px_8px_30px_#ffcebd] transition-shadow">
        <CardContent className="flex flex-col items-center gap-4 lg:gap-5 p-4 lg:p-5 h-full justify-center">
          <h3 className="font-bold text-[#121416] text-lg lg:text-2xl text-center leading-6 lg:leading-[29px] max-w-[186px]">
            {title}
          </h3>
          <p className="text-[#121416] text-sm lg:text-base text-center leading-5 lg:leading-[21px]">
            {description}
          </p>
        </CardContent>
      </Card>

      {isLast ? (
        <img
          className="w-[80px] lg:w-[104.6px] h-[80px] lg:h-[104.6px] -mt-4"
          alt="Icon"
          src={iconSrc}
        />
      ) : (
        <div className="flex w-[70px] lg:w-[84px] h-[70px] lg:h-[84px] items-center justify-center -mt-4 bg-white rounded-[42px] shadow-[0px_4px_10.3px_#ffc1a6] border-none">
          <div className="relative w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
            <img
              className="w-auto h-auto"
              alt="Icon"
              src={iconSrc}
            />
          </div>
        </div>
      )}

      {!isLast && (
        <div className="w-[100px] lg:w-[115px] h-[100px] lg:h-[115px] overflow-hidden rotate-[-41.81deg] mt-4 lg:mt-8 hidden lg:block">
          <img
            className="w-[140px] lg:w-[158px] h-[140px] lg:h-[157px] rotate-[41.81deg]"
            alt="Arrow"
            src="/xmlid-959-.svg"
          />
        </div>
      )}
    </div>
  );
};