"use client";
import { usePathname } from "next/navigation";
import WebSiteFooter from "./WebSiteFooter";
import NewFooter from "./NewFooter";
const Footer = () => {
  const pathName = usePathname();
  const RenderFooter = WebSiteFooter;
  switch (pathName) {
    case "/thank-you/":
      return null;

    default:
      return <NewFooter />;
  }
};

export default Footer;
