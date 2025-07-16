import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";

export const StrategySection = ({ strategyTabs }) => {
  return (
    <section className="flex w-full items-center justify-center px-4 sm:px-6 py-8 lg:py-16 bg-[#fff6f4]">
      <div className="flex flex-col w-full max-w-[1244px] items-center gap-12 lg:gap-[74px]">
        <div className="flex flex-col w-full max-w-[1178px] items-center gap-4 lg:gap-5">
          <p className="max-w-[1016px] text-[#6c757d] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-9">
            Discover the future of clinic growth with{" "}
            <a
              href="http://pyrahealth.ai/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#6c757d] hover:underline"
            >
              Pyrahealth.ai
            </a>
            . Our AI-driven solutions combine smart patient acquisition,
            automated workflows, and intelligent follow-ups — helping you
            attract more of the right patients, reduce operational friction,
            and deliver high-touch care at scale
          </p>
        </div>

        <div className="flex flex-col xl:flex-row w-full items-center justify-center gap-12 lg:gap-[92px]">
          <div className="relative w-full max-w-[457px]">
            <div className="flex flex-col w-full items-start gap-6 lg:gap-[30px]">
              {strategyTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`flex min-h-[100px] lg:h-[130px] items-center gap-4 w-full px-3.5 py-4 rounded-[5px] cursor-pointer hover:bg-white transition-colors ${tab.isActive ? "bg-white" : "opacity-50 hover:opacity-75"}`}
                >
                  <div className="flex flex-col w-full items-start gap-3 lg:gap-5">
                    <div className="flex flex-col items-start gap-2 lg:gap-3 w-full">
                      <h3
                        className={`text-primary-font text-lg lg:text-2xl leading-6 lg:leading-[32px] ${tab.isActive ? "font-black" : "font-bold"}`}
                      >
                        {tab.title}
                      </h3>
                      <p className="text-icon-color text-sm lg:text-lg leading-5 lg:leading-[27px] font-medium max-w-[407px]">
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex h-[400px] lg:h-[615px] items-start absolute top-8 lg:top-11 left-0">
              <div className="relative self-stretch w-1 rounded-[106.17px] bg-[linear-gradient(0deg,rgba(215,215,215,1)_0%,rgba(215,215,215,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
              <div className="relative self-stretch w-[4.25px] ml-[-4.25px]">
                <div className="relative w-1.5 h-[100px] lg:h-[140px] top-32 lg:top-44 left-px rounded-[106.17px_106.17px_9px_0px] bg-[linear-gradient(180deg,rgba(114,0,98,1)_0%,rgba(255,45,125,1)_46%,rgba(246,120,0,1)_100%)]" />
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[643px]">
            <div className="relative w-full max-w-[630px]">
              <img
                className="w-full max-w-[400px] lg:max-w-[565px] mx-auto"
                alt="Calendar background"
                src="/group-1066.png"
              />

              <Card className="absolute w-[90%] max-w-[423px] top-[60px] lg:top-[81px] left-1/2 -translate-x-1/2 lg:left-[71px] lg:translate-x-0 rounded-[21.96px] shadow-[10.98px_4.12px_30.2px_13.73px_#9595951c]">
                <CardContent className="p-0">
                  <div className="flex w-full items-center justify-between px-4 lg:px-8 py-4 lg:py-8">
                    <div className="font-bold text-black text-lg lg:text-2xl text-center tracking-[0.06px]">
                      January 2025
                    </div>
                    <div className="flex items-start gap-4 lg:gap-8">
                      <img
                        className="w-[18px] lg:w-[21.96px] h-[18px] lg:h-[21.96px] cursor-pointer hover:opacity-70"
                        alt="Previous month"
                        src="/icons.svg"
                      />
                      <img
                        className="w-[6px] lg:w-[7.92px] h-[18px] lg:h-[21.96px] cursor-pointer hover:opacity-70"
                        alt="Menu"
                        src="/icons-1.svg"
                      />
                    </div>
                  </div>

                  <Separator className="w-[90%] mx-auto" />

                  <div className="flex w-full items-start justify-between px-4 lg:px-8 py-3 lg:py-4">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (day, index) => (
                        <div
                          key={index}
                          className="flex w-[30px] lg:w-[43.93px] items-start p-1 lg:p-[5.49px]"
                        >
                          <div className="font-medium text-[#7e818c] text-xs lg:text-[13.7px] text-center">
                            {day}
                          </div>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="flex flex-col w-full items-start gap-4 lg:gap-[21.96px] px-4 lg:px-8 pb-4 lg:pb-8">
                    <div className="flex items-start justify-between w-full">
                      {[1, 2, 3, 4, 5, 6, 7].map((day, index) => (
                        <div
                          key={index}
                          className={`w-[28px] lg:w-[32.94px] h-[28px] lg:h-[32.94px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors ${day === 7 ? "rounded-[30px] bg-[linear-gradient(180deg,rgba(114,0,98,1)_0%,rgba(255,45,125,1)_46%,rgba(246,120,0,1)_100%)]" : ""}`}
                        >
                          <div
                            className={`font-medium text-sm lg:text-[19.2px] text-center ${day === 7 ? "text-white" : "text-black"}`}
                          >
                            {day}
                          </div>
                        </div>
                      ))}
                    </div>

                    {[[8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31, "", "", "", ""]].map((week, weekIndex) => (
                      <div key={weekIndex} className="flex items-start justify-between w-full">
                        {week.map((day, index) => (
                          <div
                            key={index}
                            className="w-[28px] lg:w-[32.94px] h-[28px] lg:h-[32.94px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                          >
                            <div
                              className={`font-medium text-sm lg:text-[19.2px] text-center ${day ? "text-black" : "text-transparent"}`}
                            >
                              {day || "25"}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="absolute w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] top-[200px] lg:top-[262px] right-[20px] lg:left-[461px] hidden lg:block">
                <img
                  className="w-[75px] lg:w-[95px] h-[75px] lg:h-[95px]"
                  alt="Vector"
                  src="/vector-27.svg"
                />
              </div>

              <div className="absolute w-12 lg:w-14 h-12 lg:h-14 top-[20px] lg:top-[25px] right-[40px] lg:left-[502px] overflow-hidden hidden lg:block">
                <div className="relative h-[48px] lg:h-[54px]">
                  <img
                    className="absolute w-[8px] lg:w-[9px] h-[11px] lg:h-[13px] top-[37px] lg:top-[41px] left-4 lg:left-5"
                    alt="Vector"
                    src="/vector-31.svg"
                  />
                  <img
                    className="absolute w-12 lg:w-14 h-[42px] lg:h-[47px] top-0 left-0"
                    alt="Vector"
                    src="/vector-30.svg"
                  />
                </div>
              </div>

              <img
                className="absolute w-[150px] lg:w-[197px] h-[150px] lg:h-[197px] top-8 lg:top-12 right-[10px] lg:left-[433px] hidden lg:block"
                alt="Rotated right arrow"
                src="/rotated-right-arrow-with-broken-line-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};