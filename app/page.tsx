"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingAnimation from "@/components/LoadingAnimation";
import Particles from "@/components/Particles";

export default function Home() {
  const [isLoaded, setIsLoaded]   = useState(false);
  const [theme, setTheme]         = useState<"dark" | "light">("dark");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      if (next === "light") {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
      return next;
    });
  };

  return (
    <>
      {!isLoaded && <LoadingAnimation />}
      <div
        className="page-content"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <ScrollProgress />
        <Particles />
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <Products />
          <About />
          <WhyChooseUs />
          <Testimonials />
          <Statistics />
          <Contact />
        </main>

        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </>
  );
}
