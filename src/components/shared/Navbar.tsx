import { FC, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "icons/MenuIcon";
import { Routes } from "../../types/Routes";

export const NavbarPlaceholder = () => <div className="w-screen h-24"></div>;

export const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const switchMobileOpen = () => setMobileOpen((s) => !s);

  return (
    <div
      className="w-screen h-24 bg-primary fixed top-0 left-0 grid items-center justify-items-start z-50"
      style={{ gridTemplateColumns: "5fr 7fr" }}
    >
      <Link href={Routes.home}>
        <a className="text-secondary font-primary font-medium text-base ml-10 whitespace-nowrap">
          <img className="w-12" src="/zebra-logo.png" alt="" />
        </a>
      </Link>
      {/* small nav */}
      <div
        className="block sm:hidden justify-self-end mr-10"
        onClick={switchMobileOpen}
      >
        <MenuIcon customTwClass="hover:invert-3/4 cursor-pointer" />
      </div>
      <div
        className="block sm:hidden fixed top-20 w-screen bg-primary transition-all duration-500 border-t-2 border-black"
        style={{
          transform: mobileOpen ? "translateX(0)" : "translateX(100vw)",
        }}
      >
        <div className="flex gap-6 p-5 justify-center items-center">
          <Link href={Routes.home}>
            <a className="text-secondary font-primary font-medium text-sm whitespace-nowrap">
              Home
            </a>
          </Link>
          <Link href={Routes.resources}>
            <a className="text-secondary font-primary font-medium text-sm whitespace-nowrap">
              Resources
            </a>
          </Link>
          <Link href={Routes.upcomingEvents}>
            <a className="text-secondary font-primary font-medium text-sm whitespace-nowrap">
              Upcoming Events
            </a>
          </Link>
        </div>
      </div>
      {/* large nav */}
      <div className="hidden sm:flex flex-col items-center">
        <div className="flex gap-16">
          <Link href={Routes.home}>
            <a className="text-secondary font-primary font-medium text-base whitespace-nowrap">
              Home
            </a>
          </Link>
          <Link href={Routes.resources}>
            <a className="text-secondary font-primary font-medium text-base whitespace-nowrap">
              Resources
            </a>
          </Link>
          <Link href={Routes.upcomingEvents}>
            <a className="text-secondary font-primary font-medium text-base whitespace-nowrap">
              Upcoming Events
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
