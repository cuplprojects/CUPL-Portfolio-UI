import { motion } from "framer-motion";
import { Button } from "@/components/ui-jsx/button";
import {
  staggerContainer,
  fadeInUp,
  springScale,
  blurInAnimation,
  floatingAnimation
} from "@/lib/animations";
import mainGateImage from "../assets/images/maingate-2.jpg";

const Hero = () => {
  // Enhanced staggered animation for text
  const containerVariants = staggerContainer(0.15);

  // Creating text animation for the heading
  const createTextVariants = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.5 + index * 0.03,
          ease: [0.215, 0.61, 0.355, 1]
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      {/* Animated decorative background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <motion.div
        className="absolute top-0 right-0 -z-10 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-primary/10 -z-5 hidden lg:block"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/3 right-10 w-10 h-10 rounded-full bg-secondary/10 -z-5 hidden lg:block"
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden pb-2">
                {createTextVariants("Winning your confidence")}
              </div>
              <motion.span
                className="text-primary block mt-2"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Always
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-lg"
              variants={blurInAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              Transforming educational experiences through custom technology solutions for institutions across India and worldwide since 2013.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  <a href="#services">
                    Our Services
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <a href="#contact">
                    Contact Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            variants={springScale}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            {/* Educational technology in classroom with hover effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={mainGateImage}
                alt="Chandrakala Universal Main Gate"
                className="rounded-xl shadow-xl w-full h-auto transition-all duration-300"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden md:block"
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 1.2
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  className="p-2 bg-primary/10 rounded-full"
                  animate={floatingAnimation}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="font-medium">Serving Since 2013</p>
                  <p className="text-sm text-gray-500">Educational Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Additional floating element */}
            <motion.div
              className="absolute -top-4 -right-4 bg-primary/90 text-white rounded-lg shadow-lg p-3 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm font-medium">Est. 2013</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
