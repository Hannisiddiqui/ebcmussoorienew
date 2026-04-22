"use client";
import { useAppContext } from "@/contextApi/AppContext";
import { useWeather } from "@/hooks/useWeather";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../sectionComponants";
import { navData } from "./navData";
import Image from "next/image";
import { CtaBtn } from "../buttons/CtaBtn";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const { setIsMobileNavOpen, isMobileNavOpen } = useAppContext();

  const pathName = usePathname();

  const { temp } = useWeather({
    altitude: navData.upperNav.temperature,
  });

  const desktopViewLinks = navData?.bottomNav?.navLink.slice(0, 5);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`max_screen_width fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* nav upper */}
        <div className="bg-background-2 text-primary py-3.5">
          <Container>
            <div className="flex items-center justify-between gap-6">
              {/* left side content */}

              <div className="flex items-center gap-4 divide-x-2 divide-primary">
                <div className="flex items-center gap-2 pr-4">
                  <span>
                    <TempIcon />
                  </span>
                  <span className="text-xl font-secondary">
                    {temp?.toFixed(1)} °C
                  </span>
                </div>
                <Link
                  href={navData.upperNav.links[0].href}
                  className="flex items-center gap-2 text-xl font-medium"
                >
                  <span className="text-primary">
                    {navData.upperNav.links[0].icon}
                    <span className="sr-only">
                      {navData.upperNav.links[0].label}
                    </span>
                  </span>
                  <span className="max-md:hidden">
                    {navData.upperNav.links[0].label}
                  </span>
                </Link>
              </div>

              {/* right side content */}

              <div className="flex items-center gap-4 lg:divide-x-2 divide-primary">
                <Link
                  href={navData.upperNav.links[1].href}
                  className="flex items-center gap-2 font-medium lg:px-4"
                >
                  <span>{navData.upperNav.links[1].icon}</span>
                  <span className="sr-only">
                    {navData.upperNav.links[1].label}
                  </span>
                  <span className="lg:flex hidden flex-col">
                    <span>{navData.upperNav.links[1].title}</span>
                    <span className="font-secondary">
                      {navData.upperNav.links[1].label}
                    </span>
                  </span>
                </Link>
                <ul className="md:flex hidden items-center gap-2">
                  {navData.upperNav.links.slice(2).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-xl text-white bg-primary w-10.5 aspect-square  justify-center rounded-full"
                      >
                        <span>{link.icon}</span>
                        <span className="sr-only">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>
        {/* nav lower */}
        <nav className="bg-primary text-white py-2.5">
          <Container className="flex items-center justify-between">
            {/* logo */}
            <Link href="/" className="relative md:w-47 w-35 block aspect-4/2.5">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </Link>
            {/*  */}
            <ul className="xl:flex hidden items-center gap-7">
              {desktopViewLinks?.map((link, index) => (
                <li key={index} className="group">
                  <Link
                    href={link.href}
                    className={`text-[1.375rem] font-medium uppercase p-2 relative `}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 w-0 -bottom-0.5 h-0.5 bg-secondary z-10 transition-all duration-300 group-hover:w-full ${pathName === link.href ? "w-full" : ""}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                <MenuIcon />
              </button>
              <CtaBtn
                type="link"
                href={"#"}
                label={"Book Now"}
                startIcon="Booking"
                startIconClass="text-primary!"
                className="bg-background-1 rounded-lg text-primary max-xl:hidden hover:shadow-none uppercase font-primary-medium text-xl"
              />
            </div>
          </Container>
        </nav>
        <MobileNav />
      </header>
      <div className="h-[178px] md:h-[210px] lg:h-[214px]"></div>
    </>
  );
};

export default Header;

export const MenuIcon = () => (
  <svg
    width="40"
    height="18"
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.6875 10.3299C0.492708 10.3299 0.329465 10.264 0.197771 10.1321C0.0659237 10.0005 0 9.83713 0 9.64219C0 9.4474 0.0659237 9.28415 0.197771 9.15246C0.329465 9.02092 0.492708 8.95515 0.6875 8.95515H14.8958C15.0906 8.95515 15.2539 9.02099 15.3856 9.15269C15.5174 9.28454 15.5833 9.44793 15.5833 9.64287C15.5833 9.83767 15.5174 10.0009 15.3856 10.1326C15.2539 10.2641 15.0906 10.3299 14.8958 10.3299H0.6875ZM0.6875 5.85246C0.492708 5.85246 0.329465 5.78653 0.197771 5.65469C0.0659237 5.52284 0 5.35952 0 5.16473C0 4.96978 0.0659237 4.80654 0.197771 4.675C0.329465 4.54331 0.492708 4.47746 0.6875 4.47746H14.8958C15.0906 4.47746 15.2539 4.54338 15.3856 4.67523C15.5174 4.80708 15.5833 4.9704 15.5833 5.16519C15.5833 5.36013 15.5174 5.52338 15.3856 5.65492C15.2539 5.78661 15.0906 5.85246 14.8958 5.85246H0.6875ZM0.6875 1.37477C0.492708 1.37477 0.329465 1.30892 0.197771 1.17723C0.0659237 1.04538 0 0.881986 0 0.687041C0 0.49225 0.0659237 0.329007 0.197771 0.197312C0.329465 0.0657705 0.492708 0 0.6875 0H14.8958C15.0906 0 15.2539 0.0659237 15.3856 0.197771C15.5174 0.329465 15.5833 0.492785 15.5833 0.687729C15.5833 0.882521 15.5174 1.04576 15.3856 1.17746C15.2539 1.309 15.0906 1.37477 14.8958 1.37477H0.6875Z"
      fill="currentColor"
    />
  </svg>
);

export const TempIcon = () => (
  <svg
    width={16}
    height={20}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.79492 13.4933V7.97803C6.79492 7.54654 6.44516 7.19678 6.01367 7.19678C5.58219 7.19678 5.23242 7.54654 5.23242 7.97803V13.4933C4.32223 13.8151 3.66992 14.6828 3.66992 15.7032C3.66992 16.9976 4.71926 18.0469 6.01367 18.0469C7.30809 18.0469 8.35742 16.9976 8.35742 15.7032C8.35742 14.6828 7.70516 13.8151 6.79492 13.4933Z"
      fill="#29422C"
    />
    <path
      d="M8.35742 12.5787V2.73438C8.35742 1.44203 7.30602 0.390625 6.01367 0.390625C4.72133 0.390625 3.66992 1.44203 3.66992 2.73438V12.5787C2.70531 13.3038 2.10742 14.4543 2.10742 15.7031C2.10742 17.8571 3.85977 19.6094 6.01367 19.6094C8.16758 19.6094 9.91992 17.8571 9.91992 15.7031C9.91992 14.4543 9.32203 13.3038 8.35742 12.5787Z"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.0625 2.26562H0.5"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.0625 4.42615H0.5"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.0625 6.58655H0.5"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.0625 8.74707H0.5"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.0625 10.9076H0.5"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.584 0.390625C10.1525 0.390625 9.80273 0.740391 9.80273 1.17188C9.80273 1.60336 10.1525 1.95312 10.584 1.95312C11.0155 1.95312 11.3652 1.60336 11.3652 1.17188C11.3652 0.740391 11.0155 0.390625 10.584 0.390625Z"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4993 1.57197C15.1858 1.36572 14.8107 1.24548 14.4074 1.24548C13.3087 1.24548 12.418 2.13619 12.418 3.23494C12.418 4.33369 13.3087 5.22439 14.4074 5.22439C14.8537 5.22439 15.2207 5.07748 15.4993 4.82935"
      stroke="#29422C"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
