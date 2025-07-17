import { Card, CardContent } from "../../../../../../components/ui/card";
import arrow from '../../../../../../assets/images/growthProcess/arrow.png'
import brain from '../../../../../../assets/images/growthProcess/brain.png'
import flag from '../../../../../../assets/images/growthProcess/flag.png'
import idea from '../../../../../../assets/images/growthProcess/idea.png'
import Arrowright from '../../../../../../assets/images/growthProcess/arrow-right.png'

// Create icon mapping for better maintainability
const iconMap = {
  arrow: arrow,
  brain: brain,
  flag: flag,
  idea: idea
};



export const GrowthStepCard = ({ title, description, iconSrc, isLast = false }) => {

  const icon = iconMap[iconSrc] || iconSrc;



  return (
    <div className="flex flex-col items-center p-2.5 w-full max-w-[273px] relative">
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
       <div className="flex w-[70px] lg:w-[84px] h-[70px] lg:h-[84px] items-center justify-center -mt-4 bg-white rounded-[42px] shadow-[0px_4px_10.3px_#ffc1a6] border-none">
          <div className="relative w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
            <img
              className="w-auto h-auto"
              alt="Icon"
              src={icon}
            />
          </div>
        </div>
      ) : (
        <div className="flex w-[70px] lg:w-[84px] h-[70px] lg:h-[84px] items-center justify-center -mt-4 bg-white rounded-[42px] shadow-[0px_4px_10.3px_#ffc1a6] border-none">
          <div className="relative w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]">
            <img
              className="w-auto h-auto"
              alt="Icon"
              src={icon}
            />
          </div>
        </div>
      )}

      {!isLast && (
        <div className="w-[100px] absolute top-52 left-56 lg:w-[115px] h-[100px] lg:h-[115px] overflow-hidden rotate-[-41.81deg] mt-4 lg:mt-8 hidden lg:block">
          <img
            className="rotate-[41.81deg]"
            alt="Arrow"
            src={Arrowright}
          />
        </div>
      )}
    </div>
  );
};