'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setScrollProgress(scrolled * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-jamu-gold z-[100]"
        style={{ width: '0%' }}
      />
    );
  }

  return (
    <div
      className="fixed top-0 left-0 h-[2.5px] bg-jamu-gold z-[100]"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
