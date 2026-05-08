// components/contact/InfoCard.tsx

import Link from "next/link";
import SectionHeading from "@/components/typography/SectionHeading";

type InfoCardProps = {
  title: string;

  content?: string[];

  socialLinks?: {
    label: string;
    href: string;
  }[];

  button?: {
    label: string;
    href: string;
  };
};

export default function InfoCard({
  title,
  content,
  socialLinks,
  button,
}: InfoCardProps) {
  return (
    <div className="border border-secondary/30 bg-primary rounded-md p-8 flex flex-col">
      <SectionHeading
        level={2}
        title={title}
        titleClassName="text-white text-[2rem] leading-tight mb-8 font-primary"
      />

      {/* Address Content */}
      {content && (
        <div className="flex flex-col gap-2 text-[#9C9C9C] text-lg leading-relaxed">
          {content.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      {/* Social Links */}
      {socialLinks && (
        <div className="flex flex-col gap-5 text-[#8F8F8F]">
          {socialLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Button */}
      {button && (
        <div className="mt-auto pt-10">
          <Link
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-secondary rounded-md p-4 text-sm text-secondary uppercase transition-all duration-300"
          >
            {button.label}
          </Link>
        </div>
      )}
    </div>
  );
}
