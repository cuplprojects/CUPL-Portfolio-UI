import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import { setupScrollAnimations, setupNavHighlighting } from "./lib/scrollUtils";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Setup scroll animations and navigation highlighting
    setupScrollAnimations();
    setupNavHighlighting();

    // Show/hide scroll button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", setupScrollAnimations);
      window.removeEventListener("scroll", setupNavHighlighting);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen">
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

        {/* Floating scroll-to-top button */}
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-3 sm:p-4 bg-primary rounded-full text-white shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ y: -4 }}
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
