"use client";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const Accordion2: React.FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#D9D0BA] py-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-lg font-medium text-[#0C150D]">{question}</span>
        <span className={`text-2xl leading-none transition-transform duration-300 ${open ? "rotate-45 text-secondary" : "text-[#0C150D]"}`}>
          +
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "mt-4 max-h-80" : "max-h-0"}`}>
        <p className="text-[15px] leading-7 text-[#4A5A47]">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion2;