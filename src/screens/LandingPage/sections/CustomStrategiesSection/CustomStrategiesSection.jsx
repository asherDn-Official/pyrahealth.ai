import React from "react";
import { HeroSection } from "../../sections/CustomStrategiesSection/componets/sections/HeroSection";
import { BenefitsSection } from "../../sections/CustomStrategiesSection/componets/sections/BenefitsSection";
import { CaseStudiesSection } from "../../sections/CustomStrategiesSection/componets/sections/CaseStudiesSection";
import { StrategySection } from "../../sections/CustomStrategiesSection/componets/sections/StrategySection";
import { GrowthProcessSection } from "../../sections/CustomStrategiesSection/componets/sections/GrowthProcessSection";
import { TestimonialsSection } from "../../sections/CustomStrategiesSection/componets/sections/TestimonialsSection";
import { BlogSection } from "../../sections/CustomStrategiesSection/componets/sections/BlogSection";
import { FAQSection } from "../../sections/CustomStrategiesSection/componets/sections/FAQSection";

import heroImage from "../../../../assets/images/HeroImage.png";
import layer from "../../../../assets/images/Layer.png";
import logo from "../../../../assets/images/logo.png";
import contactLogo from "../../../../assets/images/contactlogo.png";

export const CustomStrategiesSection = () => {
  // Data can be moved to a separate constants file if preferred
  const navItems = [
    "Who We Help",
    "Capabilities",
    "Insights",
    "Case Studies",
    "About Us",
  ];
  const benefits = [
    "Attract more patients through intelligent, automated marketing",
    "Streamline daily tasks with scheduling, reminders, and admin automation",
    "Deliver better care by freeing your team to focus on what matters most",
  ];
  const caseStudies = [
    {
      percentage: "65",
      title: "Reduction in admin workload",
      description:
        "Corevia Medical Group streamlined appointment booking and follow-up with Pyrahealth.ai's intelligent workflow automation.",
      logo: "./assets/images/case-1.png",
      logoWidth: "147px",
      logoHeight: "38px",
    },
    {
      percentage: "47",
      title: "Increase in patient bookings",
      description:
        "Auralis Care used AI-powered outreach to boost new client acquisition in under 90 days — without increasing staff hours.",
      logo: "./assets/images/case-2.png",
      logoWidth: "178px",
      logoHeight: "46px",
    },
    {
      percentage: "3",
      unit: "x",
      title: "Improvement in follow-up engagement",
      description:
        "Vellara Clinic automated personalized post-visit messages and saw triple the patient return rate within the first month.",
      logo: "./assets/images/case-3.png",
      logoWidth: "178px",
      logoHeight: "46px",
    },
  ];

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

  const growthSteps = [
    {
      title: "Diagnose Your Growth Leaks",
      description:
        "We start by mapping your patient journey and identifying where you're losing leads, time, or revenue fast.",
      iconSrc: "arrow",
    },
    {
      title: "Design Your AI Acceleration Plan",
      description:
        "Our team crafts a custom growth blueprint, powered by real data and built to fit your clinic's goals, specialties, and systems.",
      iconSrc: "brain",
    },
    {
      title: "Deploy Automation Where It Matters",
      description:
        "We implement AI-driven solutions — from smart scheduling to follow-up automation — tailored to maximize results and minimize busywork.",
      iconSrc: "flag",
    },
    {
      title: "Optimize, Learn, and Scale",
      description:
        "Your clinic evolves. So does our strategy. We continuously monitor, adjust, and optimize based on performance data and patient behavior — all without slowing your team down.",
      iconSrc: "idea",
    },
  ];
  
  const testimonials = [
    {
      content:
        "I'm genuinely impressed with how aligned the Pyrahealth team has been from day one. The collaboration, responsiveness, and results have exceeded expectations. Supporting multiple clinic locations isn't easy — but Pyrahealth helped us simplify operations and grow patient volume at the same time. Their AI systems didn't just save us time — they gave us clarity",
      author: "Dr. Raj P",
      position: "Chief Executive Officer",
      logo: "/asset-43-6.svg",
    },
    {
      content:
        "Before PyraHealth, our front desk was buried in repetitive tasks. Now, appointment scheduling, follow-ups, and patient reminders run automatically — and our staff can actually focus on care. It's like having a full-time operations assistant powered by AI. We saved over 15 hours a week within the first month.",
      author: "Dr. Menon",
      position: "Manager",
      logo: "/asset-43-5.svg",
    },
    {
      content:
        "Since implementing PyraHealth, we've seen a measurable improvement in our online visibility. Our clinic is now appearing in more relevant searches, and our content is showing up in AI-generated patient recommendations. Pyra's SEO and structured data tools are built for the new age of search — and it shows.",
      author: "Dr. Raj P",
      position: "Harmony Family Care",
      logo: "/container.svg",
    },
  ];
  const blogPosts = [
    {
      image: "/blog-image01.png",
      title: "How AI Is Changing Patient Expectations in 2025.",
      description:
        "Discover how personalized, on-demand care is shaping the future — and how clinics can meet the moment with smart engagement tools.",
      date: "June 21,2022",
      readTime: "2 minute read",
    },
    {
      image: "/blog-image02.png",
      title: "From Missed Calls to Fully Booked.",
      description:
        "Discover how personalized, on-demand care is shaping the future — and how clinics can meet the moment with smart engagement tools.",
      date: "June 21,2022",
      readTime: "2 minute read",
    },
    {
      image: "/blog-image03.png",
      title: "Inside a Clinic That Grew 40% in 30 Days",
      description:
        "Discover how personalized, on-demand care is shaping the future — and how clinics can meet the moment with smart engagement tools.",
      date: "June 21,2022",
      readTime: "2 minute read",
    },
    {
      image: "/blog-image04.png",
      title: "5 Admin Tasks You Can Automate Today",
      description:
        "Discover how personalized, on-demand care is shaping the future — and how clinics can meet the moment with smart engagement tools.",
      date: "June 21,2022",
      readTime: "2 minute read",
    },
  ];

  // FAQ items
  const faqItems = [
    "What exactly does Pyrahealth.ai do for clinics?",
    "Can Pyrahealth help my clinic appear in AI tools like ChatGPT and Google Search?",
    "How is Pyrahealth different from a typical agency or software vendor?",
    "Is Pyrahealth.ai compliant with healthcare regulations?",
    "Do you offer LLM SEO services for clinics?",
    "Can Pyrahealth help reduce no-shows and cancellations?",
    "How fast can we get started with Pyrahealth?",
    "Is Pyrahealth suitable for small or single-location clinics?",
    "How much does Pyrahealth.ai cost?",
    "Will my team need to be tech-savvy to use it?",
  ];

  return (
    <div className="flex flex-col w-full items-center gap-3">
      <HeroSection
        layer={layer}
        logo={logo}
        contactLogo={contactLogo}
        heroImage={heroImage}
        navItems={navItems}
      />
      <BenefitsSection benefits={benefits} />
      <CaseStudiesSection caseStudies={caseStudies} />
      {/* <StrategySection strategyTabs={strategyTabs} /> */}
      <GrowthProcessSection growthSteps={growthSteps} />
      {/* <TestimonialsSection testimonials={testimonials} />
      <BlogSection blogPosts={blogPosts} />
      <FAQSection faqItems={faqItems} /> */}
    </div>
  );
};
