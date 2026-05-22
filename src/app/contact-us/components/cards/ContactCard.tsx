// components/contact/ContactCard.tsx

import Link from "next/link";
import { ContactCardType } from "../ContactCardSection";

export default function ContactCard({
  title,
  description,
  badge,
  contact,
  availability,
  icon,
  button,
}: ContactCardType) {
  //   const Icon = icons[icon];

  return (
    <div className="bg-primary border border-secondary/30 rounded-sm p-4 flex flex-col items-center hover:border-primary transition-all duration-300 space-y-4">
      <div className="rounded-full text-3xl border border-primary/30 flex items-center justify-center">
        {/* <Icon className="w-6 h-6 text-primary" /> */}
        {icon}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl text-center font-serif text-secondary">
          {title}
        </h2>

        {badge && (
          <p className="text-xs border border-secondary text-secondary px-2 py-0.5 rounded-xs">
            {badge}
          </p>
        )}
      </div>

      <div className="space-y-1 text-center text-white/40">
        {contact && <p>{contact}</p>}
        {availability && <p>{availability}</p>}
        {description && <p>{description}</p>}
      </div>

      <div className="mt-2">
        <Link
          href={String(button?.href)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-secondary text-secondary rounded-sm px-4 py-3 text-sm tracking-wide  hover:text-black transition-all duration-300 hover:bg-secondary"
        >
          {button?.label}
        </Link>
      </div>
    </div>
  );
}
