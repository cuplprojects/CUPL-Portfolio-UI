import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui-jsx/button";
import { ChevronRight } from "lucide-react";
import {
  staggerContainer,
  springScale,
  blurInAnimation,
  floatingAnimation,
  bounceIn
} from "@/lib/animations";
import { useRef } from "react";

const Hero = () => {
  // Ref for parallax effect
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax values
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  // Enhanced staggered animation for text
  const containerVariants = staggerContainer(0.15);

  // Background gradient animation
  const gradientVariants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

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

  // Particle animation for modern tech feel
  const generateParticles = (count) => {
    return Array.from({ length: count }).map((_, index) => {
      const size = Math.random() * 4 + 2;
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      return (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: size,
            height: size,
            left: `${xPos}%`,
            top: `${yPos}%`,
            opacity: 0
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        />
      );
    });
  };

  return (
    <section
      id="home"
      className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 bg-[length:200%_200%] -z-10"
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute top-0 right-0 -z-10 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ opacity: parallaxOpacity }}
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

      {/* Particles for tech feel */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {generateParticles(15)}
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-sm -z-5 hidden lg:block"
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-10 w-10 h-10 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/10 blur-sm -z-5 hidden lg:block"
        initial={{ y: 0 }}
        animate={{
          y: [10, -10, 10],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-primary/15 blur-sm -z-5 hidden lg:block"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: parallaxY, scale: parallaxScale, opacity: parallaxOpacity }}
          >
            {/* Decorative badge */}
            <motion.div
              className="inline-block mb-4 bg-primary/10 backdrop-blur-sm px-4 py-1 rounded-full border border-primary/20"
              variants={bounceIn}
              initial="hidden"
              animate="visible"
            >
              <span className="text-sm font-medium text-primary">Since 2013</span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 hero-text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden pb-2">
                {createTextVariants("Winning your confidence")}
              </div>
              <motion.span
                className="text-primary block mt-2 relative"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <span className="relative z-10">Always</span>
                
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
              <motion.div
                whileHover={{
                  scale: 1.05,
                
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  <a href="#services" className="flex items-center gap-1">
                    Our Services
                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
               
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            variants={springScale}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            style={{ y: parallaxY * -0.5 }}
          >
            {/* Decorative frame for image */}
            <motion.div
              className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-2xl blur-md -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
            />

            {/* Educational technology in classroom with enhanced hover effect */}
            <motion.div
              className="relative rounded-xl overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 10px 20px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            >
              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity duration-300 z-10"
                whileHover={{ opacity: 1 }}
              />

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Educational technology in classroom"
                className="rounded-xl shadow-xl w-full h-auto transition-all duration-300"
              />
            </motion.div>

            {/* Floating badge with enhanced design */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden md:block backdrop-blur-sm border border-gray-100"
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
              <div className="flex items-center space-x-3">
                <motion.div
                  className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full"
                  animate={floatingAnimation}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="font-medium">Trusted by</p>
                  <p className="text-sm text-gray-500">15+ Educational Institutions</p>
                </div>
              </div>
            </motion.div>

            {/* Additional floating element with enhanced design */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl shadow-xl p-3 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 150, 100, 0.3), 0 10px 10px -5px rgba(0, 150, 100, 0.2)"
              }}
            >
              <p className="text-sm font-medium">Est. 2013</p>
            </motion.div>

            {/* New decorative element - tech dots pattern */}
            <motion.div
              className="absolute top-1/2 -right-10 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.g
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={10 + i * 20}
                      cy={10 + i * 20}
                      r="3"
                      fill="currentColor"
                      className="text-primary"
                      initial={{ opacity: 0.3 }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.4,
                        repeat: Infinity
                      }}
                    />
                  ))}
                </motion.g>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
