"use client";

import { Container } from "@/components/sectionComponants";
import Link from "next/link";

type TSocialSectionProps = {
  title: string;
  description: string;
  buttons: {
    label: string;
    href: string;
    variant: string;
    // variant: "primary" | "outline";
  }[];
};

export default function BlogSocialSection({
  title,
  description,
  buttons,
}: TSocialSectionProps) {
  return (
    <Container>
      <div className="rounded-md border border-secondary/20 bg-[#162218]  px-6 py-14 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-4xl font-serif">
            {title}
          </h2>

          <p className="text-[#8d8d8d] text-sm md:text-base mt-5 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                target="_blank"
                className={`flex items-center justify-center px-8 py-3 rounded-xs text-base font-medium uppercase transition-all duration-300 border ${button.variant === "primary"
                  ? "bg-secondary border-secondary text-black"
                  : "border-secondary hover:bg-secondary text-secondary hover:text-black"
                  }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
