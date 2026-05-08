import Image from "next/image";
import Link from "next/link";
import { CtaBtn } from "../buttons/CtaBtn";
import { Container } from "../sectionComponants";
import { webSiteFooterData } from "./footerData";

const WebSiteFooter = () => {
  return (
    <footer className="max_screen_width bg-primary text-white border">
      <Container>
        <div className="flex max-md:flex-col gap-6 items-center justify-between py-6 md:py-10 border-b border-primary">
          {/* social media links */}
          <ul className="flex items-center gap-4 max-md:order-2">
            {webSiteFooterData.lists[0].links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 aspect-square rounded-full flex items-center justify-center bg-primary text-white transition-all"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
          {/* logo */}
          <Link
            href="/"
            className="md:w-[242px] lg:ml-8 w-full relative max-md:order-1 md:aspect-[4/2.45] aspect-[3/1.25]"
          >
            <Image
              src={webSiteFooterData.logo}
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
          {/* call contact */}
          <div className="flex flex-col gap-3 max-md:order-3">
            <p className="max-md:text-center text-xl font-medium">{webSiteFooterData.description}</p>
            <div className="md:ml-auto max-md:mx-auto w-fit flex items-center">
              <CtaBtn
                type="link"
                href={webSiteFooterData.link.href}
                label={webSiteFooterData.link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:shadow-none uppercase text-xl font-primary-medium gap-4 rounded-lg border-primary"
                startIcon="Booking"
                startIconClass="text-primary!"
              />
            </div>
          </div>
        </div>
        <div className="grid md:py-12 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1.1fr_1.1fr_1.4fr] gap-4 md:gap-4">
          {webSiteFooterData.lists.slice(1).map((list, index) => (
            <div key={index}>
              <h2 className="md:text-[2rem] font-primary font-light uppercase text-2xl mb-4">
                {list.title}
              </h2>
              <ul className={`flex flex-col gap-2`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${index === 3 && suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    {item.icon && (
                      <span
                        className={`mt-px ${index === 1
                          ? "text-secondary flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "inline-block"
                          }`}
                      >
                        {item.icon}
                        <span className="sr-only">{item.label}</span>
                      </span>
                    )}

                    {item?.title && (
                      <span className="md:text-lg inline-block capitalize">
                        {item.title}
                      </span>
                    )}
                    <Link
                      target={item.href.includes("https") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span className={` font-medium capitalize ${index === 3 && suIndex === 1 ? "font-secondary font-normal! md:text-lg" : "md:text-[1.375rem]"}`}>
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="-ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-8"
                      >
                        <span
                          className={`${index === 1
                            ? "text-2xl my-auto"
                            : "md:text-lg text-white"
                            }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="border-t border-primary">
        <Container className="py-4">
          <div className="flex max-md:flex-col items-center justify-center gap-2 text-primary md:text-lg">
            {" "}
            <p className="">© {new Date().getFullYear()} EBC Mussoorie</p>
            <span className="md:block hidden">|</span>
            <p className="">All Rights Reserved</p>
            <span className="md:block hidden">|</span>
            <p className="">Powered by Fielmente</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default WebSiteFooter;
