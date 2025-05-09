import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Toaster } from "@/components/ui-jsx/toaster";
import { TooltipProvider } from "@/components/ui-jsx/tooltip";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Clients from "./components/Clients";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  setupScrollAnimations,
  setupNavHighlighting,
  setupParallaxEffects
} from "./lib/scrollUtils";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Setup scroll animations, navigation highlighting, and parallax effects
    const scrollAnimationsCleanup = setupScrollAnimations();
    const navHighlightingCleanup = setupNavHighlighting();
    const parallaxEffectsCleanup = setupParallaxEffects();

    // Show/hide scroll button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", scrollAnimationsCleanup);
      window.removeEventListener("scroll", navHighlightingCleanup);
      window.removeEventListener("scroll", parallaxEffectsCleanup);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen">
        {/* Enhanced scroll progress indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary z-[100] origin-left shadow-glow"
          style={{ scaleX }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <WhyChooseUs />
          {/* <Clients /> */}
          <CallToAction />
          <Contact />
        </main>
        <Footer />

        {/* Enhanced floating scroll-to-top button */}
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-3 sm:p-4 bg-gradient-to-r from-primary to-accent rounded-full text-white shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-accent hover:to-primary transition-all duration-300 z-50 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>
        )}
      </div>
    </TooltipProvider>
  );
}

export default App;
