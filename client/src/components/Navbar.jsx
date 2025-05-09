import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logo/Group 1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navLinksRef = useRef([]);
  const indicatorRef = useRef(null);

  // Update the indicator position based on active link
  const updateIndicator = () => {
    const activeLink = navLinksRef.current.find(
      link => link && link.getAttribute('data-section') === activeSection
    );

    if (activeLink && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = activeLink;
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  };

  // Handle scroll event to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to initialize indicator when component mounts
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      updateIndicator();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Effect to update indicator when active section changes
  useEffect(() => {
    updateIndicator();
  }, [activeSection]);

  // Handle direct navigation link clicks
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();

    // Force a scroll event to update the active section in the DOM
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);
  };

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Products", href: "#products", id: "products" },
    { name: "Why Choose Us", href: "#why-us", id: "why-us" },
    // { name: "Our Clients", href: "#clients", id: "clients" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5
      }
    }
  };

  // Nav item animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.2 + custom * 0.1
      }
    }),
    hover: {
      y: -3,
      color: "hsl(var(--primary))",
      textShadow: "0 0 8px rgba(0, 150, 100, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  // Mobile menu item variants
  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <motion.header
      className={`fixed w-full z-[99] transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-2" : "bg-white/95 py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.7
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="#" className="flex items-center">
              <motion.img
                src={logoImage}
                alt="CUPL Logo"
                className="h-8 md:h-9 lg:h-12 w-auto mr-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <div className="flex flex-col md:flex-row md:items-center">
                <motion.span
                  className="text-secondary text-lg md:text-xl lg:text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Chandrakala Universal
                </motion.span>
                {/* <motion.span
                  className="text-primary text-lg md:text-xl font-bold hidden md:inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {" Universal"}
                </motion.span> */}
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 nav-container relative">
            {/* Animated indicator */}
            <div
              ref={indicatorRef}
              className="nav-indicator absolute"
            ></div>

            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                data-section={link.id}
                ref={el => navLinksRef.current[index] = el}
                onClick={() => handleNavClick(link.id)}
                style={{
                  color: activeSection === link.id ? 'var(--color-primary, #10b981)' : '',
                  fontWeight: activeSection === link.id ? '600' : '500'
                }}
                className="nav-link font-medium transition-all duration-300 text-gray-800 hover:text-primary"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button with animations */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden flex items-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu with improved animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden py-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-0">
                {/* Mobile logo display with full name */}
                {/* <motion.div
                  variants={mobileItemVariants}
                  className="flex items-center py-2 px-4 mb-2 border-b border-gray-100"
                >
                  <img src={logoImage} alt="CUPL Logo" className="h-8 w-auto mr-2" />
                  <div className="font-bold">
                    <span className="text-secondary">Chandrakala</span>
                    <span className="text-primary"> Universal</span>
                  </div>
                </motion.div> */}

                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    variants={mobileItemVariants}
                    custom={index}
                    href={link.href}
                    data-section={link.id}
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      color: activeSection === link.id ? 'var(--color-primary, #10b981)' : '',
                      fontWeight: activeSection === link.id ? '600' : '400',
                      borderLeft: activeSection === link.id ? '4px solid var(--color-primary, #10b981)' : 'none',
                      backgroundColor: activeSection === link.id ? 'rgba(16, 185, 129, 0.1)' : ''
                    }}
                    className="nav-link block py-2 px-4 my-1 rounded-md transition-colors text-gray-800 hover:bg-gray-50 hover:text-primary"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
