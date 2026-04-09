"use client";

import { useAppContext } from "@/contextApi/AppContext";
import { desktopNavLinks } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

const MobileNav = () => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useAppContext();
  const pathName = usePathname();

  const navLinks =
    typeof window !== "undefined" && window.innerWidth > 1024
      ? desktopNavLinks.slice(5)
      : desktopNavLinks;

  return (
    <div
      className={`fixed top-0 h-dvh bg-background-1/90 border-l border-primary backdrop-blur-sm w-80 z-50 ${
        isMobileNavOpen ? "right-0" : "-right-full"
      } transition-all duration-300`}
    >
      <div className="px-6 py-8">
        <button
          className="float-right"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <IoClose size={24} />
        </button>

        <nav className="flex flex-col gap-3 mt-10">
          {navLinks.map((link, index) => {
            return (
              <div key={index} className="text-lg">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href || "#"}
                    className={`text-nowrap text-xl uppercase font-medium border-l-4 pl-2 text-primary ${
                      pathName === link.href
                        ? "border-secondary"
                        : "border-transparent"
                    }`}
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
