import React from "react";
import { ClientCareHighlightsSection } from "./sections/ClientCareHighlightsSection";
import { CustomStrategiesSection } from "./sections/CustomStrategiesSection/CustomStrategiesSection";
import { InsightsAndArticlesSection } from "./sections/InsightsAndArticlesSection";

export const LandingPage = () => {
  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full mx-auto overflow-hidden">
        <CustomStrategiesSection />
        <InsightsAndArticlesSection />
        <ClientCareHighlightsSection />
      </div>
    </div>
  );
};
