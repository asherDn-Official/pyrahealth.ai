import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";
import CalendarImage from '../../../../../../assets/images/strategrysection/calender.png';
// Import other images you want to use for different tabs
import AIImage from '../../../../../../assets/images/strategrysection/calender.png';
import EngagementImage from '../../../../../../assets/images/strategrysection/calender.png';
import WorkflowImage from '../../../../../../assets/images/strategrysection/workflow.avif';

// Create an image map based on tab titles
const imageMap = {
  "AI-Driven Patient Acquisition": AIImage,
  "Smart Appointment Scheduling": CalendarImage,
  "Patient Engagement & Follow-Up": EngagementImage,
  "Workflow & Operations Automation": WorkflowImage
};

export const StrategySection = () => {
  const [tabs, setTabs] = useState(strategyTabs);
  const tabRefs = useRef([]);
  const containerRef = useRef(null);

  // Set up intersection observer for scroll behavior
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = tabRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveTab(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5
      }
    );

    tabRefs.current.forEach(tab => {
      if (tab) observer.observe(tab);
    });

    return () => {
      tabRefs.current.forEach(tab => {
        if (tab) observer.unobserve(tab);
      });
    };
  }, []);

  const setActiveTab = (index) => {
    setTabs(prevTabs => 
      prevTabs.map((tab, i) => ({
        ...tab,
        isActive: i === index
      }))
    );
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Scroll to the tab
    tabRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  // Get the current active image
  const activeTab = tabs.find(tab => tab.isActive);
  const currentImage = imageMap[activeTab?.title] || CalendarImage;

  return (
    <section className="flex w-full items-center justify-center px-4 sm:px-6 py-4 bg-[#fff6f4]">
      <div className="flex flex-col w-full max-w-[1244px] items-center gap-12 ">
         <h1 className="text-4xl font-bold text-center max-w-2xl">
          Smarter AI Strategies for Real Patient 
          <span className="text-red-500 pl-2">Growth</span>
        </h1>
        <div className="flex flex-col w-full max-w-[1178px] items-center gap-4 lg:gap-5">
          <p className="max-w-[1016px] text-[#6c757d] text-lg sm:text-xl  text-center tracking-[-0.48px] leading-7 lg:leading-9">
            Discover the future of clinic growth with{" "}
            <a
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
          <div 
            className="relative w-full max-w-[457px] pl-8 max-h-[600px] py-4" 
            ref={containerRef}
          >
            {/* Active line container - positioned absolutely */}
            <div className="absolute left-0 top-0 h-full flex">
              {/* Gray background line */}
              <div className="w-1 h-full bg-gray-300 rounded-full" />
              
              {/* Active indicator - positioned based on active tab */}
              <div 
                className="absolute left-0 w-1.5 h-[100px] lg:h-[130px] rounded-md bg-gradient-to-b from-purple-900 via-pink-500 to-orange-500 transition-all duration-300"
                style={{
                  top: `calc(${tabs.findIndex(t => t.isActive) * (130 + 30)}px + 15px)`, // 130px height + 30px gap + half of tab height
                }}
              />
            </div>

            {/* Tabs container */}
            <div className="flex flex-col w-full items-start gap-6 lg:gap-[30px]">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  ref={el => tabRefs.current[index] = el}
                  onClick={() => handleTabClick(index)}
                  className={`relative flex min-h-[100px] lg:h-[130px] items-center gap-4 w-full px-3.5 py-4 rounded-[5px] cursor-pointer hover:bg-white transition-all duration-300 ${
                    tab.isActive 
                      ? "bg-white shadow-md scale-[1.02]" 
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <div className="flex flex-col w-full items-start gap-3 lg:gap-5">
                    <div className="flex flex-col items-start gap-2 lg:gap-3 w-full">
                      <h3 className={`text-primary-font text-lg lg:text-2xl leading-6 lg:leading-[32px] ${
                        tab.isActive ? "font-black" : "font-bold"
                      }`}>
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
          </div>

          {/* Image container */}
          <div className="relative w-full max-w-[643px]">
            <div className="relative w-full max-w-[630px]">
              <img
                className="w-full   max-w-[400px] lg:max-w-[565px] mx-auto transition-opacity duration-500"
                alt={activeTab?.title || "Strategy visual"}
                src={currentImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const strategyTabs = [
  {
    title: "AI-Driven Patient Acquisition",
    subtitle: 'Bring More Patients to Your Clinic — with Less Effort"',
    isActive: false,
  },
  {
    title: "Smart Appointment Scheduling",
    subtitle: "Simplify Scheduling — for You and Your Patients",
    isActive: true,
  },
  {
    title: "Patient Engagement & Follow-Up",
    subtitle: 'Keep Patients Engaged — Before and After Their Visit"',
    isActive: false,
  },
  {
    title: "Workflow & Operations Automation",
    subtitle: "Automate Your Clinic's Busywork — Without Sacrificing Quality",
    isActive: false,
  },
];