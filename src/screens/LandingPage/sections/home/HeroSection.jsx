import { useState } from 'react';
import { Button } from '../../../../components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '../../../../components/ui/navigation-menu';



const HeroSection = ({ layer, logo, contactLogo, heroImage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'Features', 'Solutions', 'Pricing', 'About']; // Example nav items

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="relative w-full min-h-[600px] lg:h-[819px] overflow-hidden bg-[linear-gradient(180deg,rgba(114,0,98,1)_0%,rgba(255,45,125,1)_46%,rgba(246,120,0,1)_100%)]">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-[169px] top-0 left-0 bg-[#88004f] blur-[51.65px]" />
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          alt="Layer"
          src={layer}
        />

        {/* Responsive Header/Navigation */}
        <header className="w-full h-16 lg:h-20 absolute top-0 left-0 bg-transparent z-50">
          <div className="flex w-full max-w-[1320px] h-full mx-auto items-center justify-between px-4 lg:px-8">
            {/* Logo */}
            <div className="flex items-center gap-[5px]">
              <img
                className="w-8 h-7 lg:w-[40.72px] lg:h-[35.65px]"
                alt="Pyrahealth Logo"
                src={logo}
              />
              <span className="font-bold text-white text-lg lg:text-xl">
                Pyrahealth.ai
              </span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex gap-4 xl:gap-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <span className="font-bold text-white text-sm xl:text-lg [text-shadow:1px_1px_8.3px_#0096f280] cursor-pointer hover:opacity-80 transition-opacity">
                      {item}
                    </span>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="flex items-center gap-4">
              <Button className="hidden sm:flex rounded-[50px] bg-white text-black font-bold items-center gap-[5px] text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 hover:bg-gray-100 transition-colors">
                <span>Contact us</span>
                <img className="w-4 h-4 lg:w-5 lg:h-5" alt="Chatting" src={contactLogo} />
              </Button>
              
              <button 
                className="lg:hidden text-white focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[rgba(114,0,98,0.95)] w-full px-4 py-3 shadow-lg animate-in fade-in-80">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a 
                    key={index} 
                    className="text-white font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <Button className="rounded-[50px] bg-white text-black font-bold flex items-center gap-[5px] text-sm px-4 py-2 w-full justify-center mt-2">
                  <span>Contact us</span>
                  <img className="w-4 h-4" alt="Chatting" src={contactLogo} />
                </Button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto px-4 lg:px-8 items-center justify-between gap-8 lg:gap-12 relative z-10 pt-24 lg:pt-32 pb-8 lg:pb-16">
          {/* Text Content - Left Side */}
          <div className="flex flex-col w-full lg:w-1/2 items-start justify-center gap-4 lg:gap-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-[1.2] [text-shadow:0px_4px_13.5px_#00000080] [-webkit-text-stroke:1px_#ff4776]">
              The Future of Patient Growth Is Here
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl font-medium max-w-[705px]">
              <a
                href="http://pyrahealth.ai/"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium hover:underline"
              >
                Pyrahealth.ai
              </a>{" "}
              is the AI-powered growth and operations partner for healthcare and
              wellness clinics.
            </p>

            <Button className="h-12 lg:h-[61px] px-6 lg:px-9 bg-white text-black rounded-[50px] font-bold text-sm lg:text-lg tracking-[0.72px] shadow-[0px_4px_19.6px_#00000040] border border-[#ffffff52] flex items-center gap-2.5 hover:bg-gray-100 transition-colors">
              Get Your Custom Growth Plan
              <div className="w-4 h-4 lg:w-5 lg:h-5 bg-[url(/vector-10.svg)] bg-[100%_100%]" />
            </Button>
          </div>

          {/* Hero Image - Right Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={heroImage}
              alt="Hero Image"
              className="w-full h-auto max-w-[500px] lg:max-w-none object-cover rounded-lg animate-in fade-in-50 slide-in-from-right-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;