import { motion } from "framer-motion";
import { Button } from "@/components/ui-jsx/button";
import { ChevronRight } from "lucide-react";
import { floatingAnimation, bounceIn } from "@/lib/animations";

const CallToAction = () => {
  // Text reveal animation
  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    })
  };

  // Background gradient animation
  const gradientVariants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  return (
    <motion.section
      className="py-12 lg:py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] z-0"
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20"
        >
          <motion.div className="max-w-3xl mx-auto">
            <motion.div
              className="mb-2 inline-block"
              variants={bounceIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Take Action
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 hero-text-shadow"
              variants={textRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Ready to transform your educational institution?
            </motion.h2>

            <motion.p
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
              variants={textRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Contact us today to discuss how our digital solutions can enhance your operations and improve educational outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-50 font-semibold shadow-lg transition-all duration-300"
                >
                  <a href="#contact" className="flex items-center">
                    Get in Touch
                    <motion.span
                      animate={floatingAnimation}
                      className="ml-1"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/20 font-medium transition-all duration-300"
                >
                  <a href="#services">Explore Our Services</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>
    </motion.section>
  );
};

export default CallToAction;
