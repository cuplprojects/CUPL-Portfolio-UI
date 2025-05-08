import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Clients from "./components/Clients";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { setupScrollAnimations, setupNavHighlighting } from "./lib/scrollUtils";

function App() {
  useEffect(() => {
    // Setup scroll animations and navigation highlighting
    setupScrollAnimations();
    setupNavHighlighting();
    
    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", setupScrollAnimations);
      window.removeEventListener("scroll", setupNavHighlighting);
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
          <WhyChooseUs />
          <Clients />
          <CallToAction />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
