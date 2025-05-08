import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Result Processing Software",
      description: "Automated grade calculation, performance analysis, and result publication system for educational institutions of all sizes.",
      image: "https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Result processing software interface",
    },
    {
      id: 2,
      title: "OMR Sheet Scanning Software",
      description: "High-accuracy optical mark recognition systems for efficient processing of entrance exams, assessments, and surveys.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "OMR sheet scanning process",
    },
    {
      id: 3,
      title: "University Web Portals",
      description: "Comprehensive web portals with student, faculty, and administrative interfaces for streamlined university operations.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "University web portal interface",
    },
    {
      id: 4,
      title: "Educational ERP Systems",
      description: "End-to-end enterprise resource planning solutions designed specifically for educational institutions' unique needs.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Educational ERP system dashboard",
    },
    {
      id: 5,
      title: "Custom Web Development",
      description: "Tailor-made websites and web applications that align with institutional branding and specific operational requirements.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Custom website development for education",
    },
    {
      id: 6,
      title: "Global Export Solutions",
      description: "Export of educational technology products to international markets with localization and compliance support.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Global education technology market",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h6 
            className="text-primary font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h6>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer a wide range of specialized services tailored to meet the unique needs of educational institutions.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card bg-white rounded-xl shadow-md overflow-hidden scroll-animate"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-primary font-medium inline-flex items-center group">
                  Learn more
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
