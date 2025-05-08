import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 -z-10"></div>
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hero-text-shadow"
              variants={itemVariants}
            >
              Empowering Education with <span className="text-primary">Digital Innovation</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg"
              variants={itemVariants}
            >
              Transforming educational experiences through custom technology solutions for institutions across India and worldwide since 2013.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
              >
                <a href="#services">
                  Our Services
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
              >
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Educational technology in classroom */}
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Educational technology in classroom" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Trusted by</p>
                  <p className="text-sm text-gray-500">50+ Educational Institutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
