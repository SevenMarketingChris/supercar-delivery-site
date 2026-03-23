"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/svg/icons";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border-subtle rounded-md overflow-hidden bg-surface-card"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-elevated transition-colors cursor-pointer"
          >
            <span className="text-text-primary font-medium pr-4">
              {item.question}
            </span>
            <span
              className={`text-gold transition-transform duration-300 shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <ChevronDownIcon size={20} />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-5 pt-0 text-text-secondary leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
