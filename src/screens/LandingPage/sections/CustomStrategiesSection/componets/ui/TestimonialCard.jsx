import { Card, CardContent } from "../../../../../../components/ui/card";

export const TestimonialCard = ({ content, author, position, logo }) => {
  return (
    <Card className="w-full max-w-[569px] min-h-[400px] lg:h-[513px] rounded-[45px] border-4 border-[#ffecec] shadow-[0px_4px_40.1px_#ffe4df] bg-white hover:shadow-[0px_8px_50px_#ffe4df] transition-shadow flex-shrink-0">
      <CardContent className="flex flex-col items-center gap-6 lg:gap-[37px] p-6 lg:p-12 h-full justify-between">
        <p className="text-[#121416] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.72px] leading-6 lg:leading-8 flex-grow flex items-center">
          {content}
        </p>

        <div className="flex flex-col items-center justify-center gap-1.5 w-[135px]">
          <div className="w-[68px] h-[49px]">
            <div className="w-[67px] h-12 rounded-[1999px] bg-gray-200" />
          </div>

          <div className="flex flex-col items-center gap-[3px] w-full">
            <h4 className="font-bold text-[#121416] text-base lg:text-lg text-center leading-[19.2px]">
              {author}
            </h4>
            <p className="opacity-60 text-[#121416] text-sm text-center leading-[21px]">
              {position}
            </p>
          </div>

          <img
            className="h-auto mt-2 max-w-full"
            alt="Company logo"
            src={logo}
          />
        </div>
      </CardContent>
    </Card>
  );
};