"use client";

import { useAppContext } from "@/contextApi/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { navLinks } from "./Navbar2";

const MobileNav = () => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useAppContext();
  const pathName = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`fixed top-0 h-dvh bg-[#1B2B21] border-l border-primary backdrop-blur-sm w-80 z-50 ${
        isMobileNavOpen ? "right-0" : "-right-full"
      } transition-all duration-300 overflow-y-auto`}
    >
      <div className="px-6 py-8">
        {/* Close Button */}
        <button
          className="float-right text-white"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <IoClose size={24} />
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 mt-10">
          {navLinks.map((link, index) => {
            const isOpen = openDropdown === index;
            const isActive =
              pathName === link.href ||
              link.subLinks?.some((subLink) => pathName === subLink.href);

            return (
              <div key={index} className="text-lg">
                {/* Main Link + Dropdown Button */}
                <div className="flex items-center justify-between text-white">
                  <Link
                    href={link.href || "#"}
                    className={`uppercase border-l-4 pl-2 text-sm tracking-[0.15em] ${
                      isActive ? "border-secondary" : "border-transparent"
                    }`}
                    onClick={() => {
                      // Only close mobile nav if there are no sublinks
                      if (!link.subLinks) {
                        setIsMobileNavOpen(false);
                      }
                    }}
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown Toggle */}
                  {link.subLinks && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      className="p-1"
                    >
                      <BiChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Sub Links */}
                {link.subLinks && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="ml-4 border-l border-white/10">
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          className={`block py-2 pl-4 text-sm text-white/80 hover:text-secondary transition-colors ${
                            pathName === subLink.href ? "text-secondary" : ""
                          }`}
                          onClick={() => setIsMobileNavOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;