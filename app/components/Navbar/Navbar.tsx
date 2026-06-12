'use client';

import { useState, useEffect } from 'react';
import { Leaf, ShoppingBag, Menu, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { cartCount, isLoaded } = useCart();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('jamu-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('jamu-theme', newTheme);
    setIsDark(newTheme === 'dark');
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <>
      <header id="nav" className="fixed top-0 left-0 right-0 z-40 glass-nav">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="h-[72px] flex items-center justify-between">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[11px] bg-jamu-forest dark:bg-jamu-beige flex items-center justify-center">
                <Leaf className="w-[18px] h-[18px] text-jamu-gold" />
              </div>
              <div>
                <div className="font-display font-600 text-[18px] leading-tight tracking-tight">Jamu Nusantara</div>
                <div className="text-[10.5px] tracking-widest text-jamu-sage uppercase -mt-0.5">Sejak 1987</div>
              </div>
            </Link>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10" />
              <Link href="/cart"
                className="relative hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition"
                aria-label="Cart"
              >
                <ShoppingBag className="w-[19px] h-[19px]" />
                <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-jamu-gold text-[#2a1b0a] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                  {isLoaded ? cartCount : 0}
                </span>
              </Link>
              <a
                href="#products"
                className="hidden sm:inline-flex btn-primary text-[13.5px] font-semibold px-4 py-2.5 rounded-full"
              >
                Order Now
              </a>
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Link href="/cart" className="sm:hidden fixed bottom-24 right-6 z-50 w-14 h-14 bg-jamu-forest dark:bg-jamu-gold rounded-full shadow-lg flex items-center justify-center text-white dark:text-[#2a1b0a]">
        <ShoppingBag className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 text-[11px] bg-jamu-gold dark:bg-jamu-forest text-[#2a1b0a] dark:text-white font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1 border-2 border-[#faf7f2] dark:border-[#1d2820]">
          {isLoaded ? cartCount : 0}
        </span>
      </Link>
      </>
    );
  }

  const navLinks = [
    { href: '#products', label: 'Produk' },
    { href: '#benefits', label: 'Manfaat' },
    { href: '#ingredients', label: 'Bahan' },
    { href: '#testimonials', label: 'Testimoni' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontak' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <header id="nav" className="fixed top-0 left-0 right-0 z-40 glass-nav">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-[72px] flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[11px] bg-jamu-forest dark:bg-jamu-beige flex items-center justify-center">
              <Leaf className="w-[18px] h-[18px] text-jamu-gold" />
            </div>
            <div>
              <div className="font-display font-600 text-[18px] leading-tight tracking-tight">Jamu Nusantara</div>
              <div className="text-[10.5px] tracking-widest text-jamu-sage uppercase -mt-0.5">Sejak 1987</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-[500] text-[var(--muted)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--ink)] transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <Sun className={`w-4 h-4 ${!isDark ? 'text-amber-500' : 'text-gray-400'}`} />
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="rounded-full p-1.5"
              >
                <div className="toggle-track">
                  <div className="toggle-dot" />
                </div>
              </button>
              <Moon className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-gray-400'}`} />
            </div>
            <Link href="/cart"
              className="relative hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition"
              aria-label="Keranjang"
            >
              <ShoppingBag className="w-[19px] h-[19px]" />
              <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-jamu-gold text-[#2a1b0a] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {isLoaded ? cartCount : 0}
              </span>
            </Link>
            <a
              href="#products"
              className="hidden sm:inline-flex btn-primary text-[13.5px] font-semibold px-4 py-2.5 rounded-full"
            >
              Pesan Sekarang
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t hairline ${isMobileMenuOpen ? '' : 'hidden'}`}
      >
        <div className="px-5 py-4 space-y-3 text-[15px] font-medium paper">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={handleLinkClick}
            className="inline-flex mt-2 btn-primary text-[13.5px] font-semibold px-4 py-2.5 rounded-full"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </header>
    <Link href="/cart" className="sm:hidden fixed bottom-24 right-6 z-50 w-14 h-14 bg-jamu-forest dark:bg-jamu-gold rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center text-white dark:text-[#2a1b0a] active:scale-95">
      <ShoppingBag className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 text-[11px] bg-jamu-gold dark:bg-jamu-forest text-[#2a1b0a] dark:text-white font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1 border-2 border-[#faf7f2] dark:border-[#1d2820]">
        {isLoaded ? cartCount : 0}
      </span>
    </Link>
    </>
  );
}
