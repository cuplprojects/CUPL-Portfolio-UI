import { motion, useScroll, useTransform } from "framer-motion";
import { History, Target, Lightbulb, ChevronRight, Calendar } from "lucide-react";
import {
  staggerContainer,
  springScale,
  blurInAnimation,
  floatingAnimation,
  bounceIn,
  rotateIn
} from "@/lib/animations";
import { useRef } from "react";
import { Button } from "@/components/ui-jsx/button";
import 

const About = () => {
  // Ref for parallax effect
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax values
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Background gradient animation
  const gradientVariants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  // Container variants for staggered animations
  const containerVariants = staggerContainer(0.1);

  return (
    <section
      id="about"
      className="py-16 lg:py-24 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50 bg-[length:200%_200%] -z-10"
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" className="text-primary">
          <defs>
            <pattern id="about-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#about-dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="inline-block mb-4 bg-primary/10 backdrop-blur-sm px-4 py-1 rounded-full border border-primary/20"
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Established 2013
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hero-text-shadow"
            variants={rotateIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Digital Journey
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={blurInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From paper manufacturing to pioneering educational technology, our evolution reflects our commitment to innovation and excellence in the educational sector.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2 relative"
            variants={springScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: parallaxY * -0.2 }}
          >
            {/* Decorative frame for image */}
            <motion.div
              className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl blur-md -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
            />

            {/* University campus with modern buildings */}
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
                className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 transition-opacity duration-300 z-10"
                whileHover={{ opacity: 1 }}
              />

              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="University campus with modern architecture"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden md:block backdrop-blur-sm border border-gray-100"
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8
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
                  <Calendar className="h-5 w-5 text-primary" />
                </motion.div>
                <div>
                  <p className="font-medium">Serving since</p>
                  <p className="text-sm text-gray-500">2013</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                variants={springScale}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <History className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Our History</h3>
                    <p className="text-gray-600">
                      Established in 2013 in Prayagraj, Uttar Pradesh, Chandrakala Universal Pvt. Ltd. began as a paper and forest products manufacturer. Recognizing the digital transformation in education, we pivoted to developing specialized technology solutions for educational institutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                variants={springScale}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                    <p className="text-gray-600">
                      To empower educational institutions with innovative digital tools that streamline administrative processes, enhance learning experiences, and drive academic excellence.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                variants={springScale}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the leading provider of integrated educational technology solutions both in India and global markets, setting new standards for quality, innovation, and customer support.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="pt-4 flex justify-start"
                variants={springScale}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 150, 100, 0.3), 0 10px 10px -5px rgba(0, 150, 100, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 transition-all duration-300"
                  >
                    <a href="#services" className="flex items-center gap-1">
                      Discover our services
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
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Timeline indicator */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 relative z-10">
                  <span className="text-xs font-bold">1</span>
                </div>
                <p className="text-sm font-medium">Founded</p>
                <p className="text-xs text-gray-500">2013</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 relative z-10">
                  <span className="text-xs font-bold">2</span>
                </div>
                <p className="text-sm font-medium">Digital Pivot</p>
                <p className="text-xs text-gray-500">2015</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 relative z-10">
                  <span className="text-xs font-bold">3</span>
                </div>
                <p className="text-sm font-medium">Expansion</p>
                <p className="text-xs text-gray-500">2018</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 relative z-10">
                  <span className="text-xs font-bold">4</span>
                </div>
                <p className="text-sm font-medium">Global Reach</p>
                <p className="text-xs text-gray-500">2021</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary/80 text-white flex items-center justify-center mx-auto mb-2 relative z-10">
                  <span className="text-xs font-bold">5</span>
                </div>
                <p className="text-sm font-medium">Today</p>
                <p className="text-xs text-gray-500">2023+</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
