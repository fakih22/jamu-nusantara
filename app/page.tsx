'use client';

import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustStrip from './components/TrustStrip/TrustStrip';
import Products from './components/Products/Products';
import Benefits from './components/Benefits/Benefits';
import Ingredients from './components/Ingredients/Ingredients';
import WhyUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Blog from './components/Blog/Blog';
import Promo from './components/Promo/Promo';
import FAQ from './components/FAQ/FAQ';
import AppPromo from './components/AppPromo/AppPromo';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';
import RevealOnScroll from './components/RevealOnScroll/RevealOnScroll';

export default function Home() {
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const closeToast = () => {
    setIsToastVisible(false);
  };

  return (
    <>
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      
      <main id="home">
        <Hero />
        <TrustStrip />
        <Products showToast={showToast} />
        <Benefits />
        <Ingredients />
        <WhyUs />
        <Testimonials />
        <HowItWorks />
        <Blog />
        <Promo />
        <FAQ />
        <AppPromo />
        <Contact showToast={showToast} />
      </main>

      <Footer showToast={showToast} />
      <Toast message={toastMessage} isVisible={isToastVisible} onClose={closeToast} />
      <RevealOnScroll />
    </>
  );
}
