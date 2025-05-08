import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { 
  fadeInUp, 
  rotateIn, 
  springScale, 
  bounceIn, 
  hoverElevate 
} from "@/lib/animations";

const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Result Processing Software",
      description: "Automated grade calculation, performance analysis, and result publication system for educational institutions of all sizes.",
      image: "https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Result processing software interface",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "OMR Sheet Scanning Software",
      description: "High-accuracy optical mark recognition systems for efficient processing of entrance exams, assessments, and surveys.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "OMR sheet scanning process",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "University Web Portals",
      description: "Comprehensive web portals with student, faculty, and administrative interfaces for streamlined university operations.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "University web portal interface",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Educational ERP Systems",
      description: "End-to-end enterprise resource planning solutions designed specifically for educational institutions' unique needs.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Educational ERP system dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Custom Web Development",
      description: "Tailor-made websites and web applications that align with institutional branding and specific operational requirements.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Custom website development for education",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Global Export Solutions",
      description: "Export of educational technology products to international markets with localization and compliance support.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Global education technology market",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  // Animation variants for staggered card appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
      <motion.div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h6 
            className="text-primary font-semibold uppercase tracking-wider mb-2"
            variants={springScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Services
          </motion.h6>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={rotateIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Comprehensive Digital Solutions
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            We offer a wide range of specialized services tailored to meet the unique needs of educational institutions.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="service-card bg-white rounded-xl shadow-md overflow-hidden relative"
              variants={itemVariants}
              whileHover={hoverElevate}
            >
              <div className="absolute top-4 right-4 z-10">
                <motion.div 
                  className="p-2 bg-white rounded-full shadow-md text-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: 0.6 + (service.id * 0.1)
                  }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (service.id * 0.05) }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (service.id * 0.05) }}
                >
                  {service.description}
                </motion.p>
                
                <motion.a 
                  href="#contact" 
                  className="text-primary font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5 ml-1 transition" />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
