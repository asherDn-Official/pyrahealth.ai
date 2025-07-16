import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import { Button } from "./ui/button";

export const Navbar = ({ navItems }) => {
  return (
    <header className="flex flex-col w-full h-16 lg:h-20 items-center justify-center absolute top-0 left-0 bg-transparent z-10">
      <div className="flex w-full max-w-[1320px] items-center justify-between px-4 lg:px-8">
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

        <Button className="rounded-[50px] bg-white text-black font-bold flex items-center gap-[5px] text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 hover:bg-gray-100 transition-colors">
          <span>Contact us</span>
          <img className="w-4 h-4 lg:w-5 lg:h-5" alt="Chatting" src={contactLogo} />
        </Button>
      </div>
    </header>
  );
};