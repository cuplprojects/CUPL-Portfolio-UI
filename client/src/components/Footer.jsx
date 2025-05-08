import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, ArrowUp, Send } from "lucide-react";
import { Input } from "@/components/ui-jsx/input";
import { Button } from "@/components/ui-jsx/button";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const Footer = () => {
  // Services list
  const services = [
    { name: "University Web Portals", href: "#services" },
    { name: "Custom Web Development", href: "#services" },
    { name: "Global Export Solutions", href: "#services" },
  ];

  // Products list
  const products = [
    { name: "Result Processing Software", href: "#products" },
    { name: "OMR Sheet Scanning", href: "#products" },
    { name: "Educational ERP Systems", href: "#products" },
  ];

  // Quick links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Our Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      x: 5,
      color: "white",
      transition: { duration: 0.2 }
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5 + (custom * 0.1)
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  // Handle newsletter form submission (non-functional as requested)
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a frontend-only implementation
    console.log("Newsletter form submitted (frontend only)");
  };

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute left-[10%] top-24 opacity-5"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 50 C0 25 25 0 50 0 C75 0 100 25 100 50 C100 75 75 100 50 100 C25 100 0 75 0 50Z"
            strokeWidth="8"
            stroke="currentColor"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
        </svg>
        <svg
          className="absolute right-[10%] bottom-24 opacity-5"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 75 L75 0 L150 75 L75 150 Z"
            strokeWidth="8"
            stroke="currentColor"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Chandrakala Universal
              </span>
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6"
              variants={fadeInUp}
            >
              Empowering education with digital innovation since 2013. Transforming the way educational institutions operate with custom technology solutions.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#"
                className="p-2 bg-secondary-dark/40 rounded-full text-gray-300 hover:text-white transition"
                variants={socialIconVariants}
                custom={0}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-secondary-dark/40 rounded-full text-gray-300 hover:text-white transition"
                variants={socialIconVariants}
                custom={1}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-secondary-dark/40 rounded-full text-gray-300 hover:text-white transition"
                variants={socialIconVariants}
                custom={2}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold mb-4"
              variants={slideInLeft}
            >
              Services
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <a href={service.href} className="text-gray-300 transition inline-block">
                    <span className="flex items-center">
                      <span className="h-1 w-2 bg-primary/70 rounded-full mr-2 transition-all duration-300 group-hover:w-3"></span>
                      {service.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold mb-4"
              variants={slideInLeft}
            >
              Products
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {products.map((product, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <a href={product.href} className="text-gray-300 transition inline-block">
                    <span className="flex items-center">
                      <span className="h-1 w-2 bg-primary/70 rounded-full mr-2 transition-all duration-300 group-hover:w-3"></span>
                      {product.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold mb-4"
              variants={slideInLeft}
            >
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <a href={link.href} className="text-gray-300 transition inline-block">
                    <span className="flex items-center">
                      <span className="h-1 w-2 bg-primary/70 rounded-full mr-2 transition-all duration-300 group-hover:w-3"></span>
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold mb-4"
              variants={slideInRight}
            >
              Newsletter
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-4"
              variants={fadeInUp}
            >
              Stay updated with our latest developments and industry insights.
            </motion.p>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-2"
              variants={fadeInUp}
            >
              <div className="relative">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <Input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  className="w-full px-4 py-2 bg-secondary-dark/30 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="Your email address"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2"
                >
                  <Button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
                  >
                    Subscribe
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:text-left items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Chandrakala Universal Pvt. Ltd. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end">
            <div className="mr-8">
              <ul className="flex justify-center md:justify-end space-x-6">
                <motion.li
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a>
                </motion.li>
                <motion.li
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a>
                </motion.li>
                <motion.li
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition">Legal</a>
                </motion.li>
              </ul>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-primary rounded-full text-white shadow-lg hover:bg-primary/90 transition-all duration-300"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7
              }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
