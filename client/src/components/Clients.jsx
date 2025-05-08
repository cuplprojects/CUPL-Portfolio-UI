import { motion } from "framer-motion";

const Clients = () => {
  // Client types
  const clientTypes = [
    "Universities", 
    "Colleges", 
    "Schools", 
    "Examination Boards", 
    "Training Institutes"
  ];

  return (
    <section id="clients" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h6 
            className="text-primary font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Clients
          </motion.h6>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted by Educational Leaders
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We partner with universities, colleges, and educational institutions across India and internationally.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* University campus with students */}
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="University campus with students" 
              className="rounded-xl shadow-xl w-full h-auto" 
            />
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Our Global Presence</h3>
              <p className="text-gray-600 mb-6">
                From prestigious universities in metropolitan cities to educational institutions in smaller towns, our solutions serve diverse academic environments across India and internationally.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {clientTypes.map((type, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-white shadow-sm rounded-full text-gray-700 text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  >
                    {type}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
              
              {/* Testimonial card */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="italic text-gray-600 mb-4">
                  "Chandrakala Universal's result processing system has revolutionized our examination workflow, reducing processing time by 70% and eliminating manual errors."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                      AU
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Anil Upadhyay</h4>
                    <p className="text-sm text-gray-500">Examination Controller, University of Allahabad</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
