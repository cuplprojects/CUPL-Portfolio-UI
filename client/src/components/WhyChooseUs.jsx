import { motion } from "framer-motion";
import { Clock, Clipboard, Globe, Zap } from "lucide-react";

const WhyChooseUs = () => {
  // Features data
  const features = [
    {
      id: 1,
      icon: <Clock className="h-8 w-8" />,
      title: "Decade of Experience",
      description: "Over 10 years of expertise in developing specialized education-focused technology solutions.",
    },
    {
      id: 2,
      icon: <Clipboard className="h-8 w-8" />,
      title: "Tailor-Made Solutions",
      description: "Custom software designed to match your institution's specific workflows and requirements.",
    },
    {
      id: 3,
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Serving educational institutions nationwide with growing international presence.",
    },
    {
      id: 4,
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation Focus",
      description: "Constantly evolving our solutions to incorporate cutting-edge technologies and best practices.",
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div className="absolute top-0 right-0 -z-10">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" className="text-primary/10">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h6 
            className="text-primary font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h6>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Competitive Advantage
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We combine technical expertise with deep domain knowledge in education to deliver superior solutions.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="bg-white rounded-xl shadow-md p-6 text-center transition hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
