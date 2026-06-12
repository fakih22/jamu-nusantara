'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/app/lib/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(goToNext, 5600);
    return () => clearInterval(interval);
  }, [mounted, currentIndex]);

  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8 reveal">
          <h2 className="display-font text-[38px] sm:text-[46px]">Apa kata mereka</h2>
          <div className="flex gap-2">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border hairline flex items-center justify-center hover:bg-black/[.04] dark:hover:bg-white/[.05]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border hairline flex items-center justify-center hover:bg-black/[.04] dark:hover:bg-white/[.05]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border hairline paper">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-7 sm:px-10 py-9">
                <div className="max-w-3xl">
                  <div className="flex text-amber-500 mb-3">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="display-font text-[22px] sm:text-[26px] leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-[13px] muted">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-2 h-2 rounded-full transition"
              style={{
                background: index === currentIndex ? '#c89a5b' : 'var(--muted)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
