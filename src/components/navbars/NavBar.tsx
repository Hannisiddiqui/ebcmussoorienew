"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";


const NavBar = () => {
  const pathName = usePathname();
  const RenderNavBar = Header;

  switch (pathName) {
    case "/thank-you/":
      return null;
    
    default:
      return (
        <>
          <RenderNavBar />
        </>
      );
  }
};

export default NavBar;
