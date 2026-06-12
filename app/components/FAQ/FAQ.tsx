'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/app/lib/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 section-bg border-y hairline">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h2 className="display-font text-[36px] sm:text-[44px] text-center reveal">
          Pertanyaan umum
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="paper rounded-[16px] border hairline overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium"
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-5 pb-5 text-[14.5px] muted ${
                  openIndex === index ? '' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
