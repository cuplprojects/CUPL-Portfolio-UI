import { motion } from "framer-motion";
import { MapPin, Mail, Phone, CalendarClock } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, springScale, rotateIn } from "@/lib/animations";

const Contact = () => {
  // Animation variants

  const contactItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2 + (custom * 0.15)
      }
    })
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-50 to-transparent -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="mb-2 inline-block"
            variants={springScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={rotateIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Let's Discuss Your Requirements
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Reach out to our team for more information about our services or to schedule a consultation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-50 rounded-xl shadow-md p-8 border border-gray-100 h-full"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                className="text-2xl font-semibold mb-8"
                variants={springScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Find Us on Map
              </motion.h3>

              <motion.div
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221.64069488644026!2d81.86160698241898!3d25.453610755760142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1746704330894!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chandrakala Universal Pvt. Ltd. Location"
                  className="rounded-lg shadow-md"
                ></iframe>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-50 rounded-xl p-8 h-full border border-gray-100 shadow-md"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                className="text-2xl font-semibold mb-8"
                variants={springScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h3>

              <div className="space-y-8">
                <motion.div
                  className="flex items-start"
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                >
                  <motion.div
                    className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full text-primary"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary))",
                      color: "white"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="h-6 w-6" />
                  </motion.div>

                  <div className="ml-6">
                    <h4 className="text-lg font-medium mb-2">Office Address</h4>
                    <p className="text-gray-600">
                      42/7 Jawahar Lal Nehru Road ,<br /> Near Parvati Hospital ,<br /> Beside Punjab National Bank<br />
                      Tagore Town, Prayagraj,<br />
                      Uttar Pradesh 211002, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                >
                  <motion.div
                    className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full text-primary"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary))",
                      color: "white"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="h-6 w-6" />
                  </motion.div>

                  <div className="ml-6">
                    <h4 className="text-lg font-medium mb-2">Email Us</h4>
                    <p className="text-gray-600">
                      <a
                        href="mailto:hello@chandrakala.co.in"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        hello@chandrakala.co.in
                      </a>
                      {/* <br />
                      <a
                        href="mailto:support@chandrakalauniversal.com"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        support@chandrakalauniversal.com
                      </a> */}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <motion.div
                    className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full text-primary"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary))",
                      color: "white"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="h-6 w-6" />
                  </motion.div>

                  <div className="ml-6">
                    <h4 className="text-lg font-medium mb-2">Call Us</h4>
                    <p className="text-gray-600">
                      <a
                        href="tel:0532-2465187"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        0532-2465187
                      </a>
                      {/* <br />
                      <a
                        href="tel:+911234567890"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        +91 1234567890
                      </a> */}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3}
                >
                  <motion.div
                    className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full text-primary"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary))",
                      color: "white"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CalendarClock className="h-6 w-6" />
                  </motion.div>

                  <div className="ml-6">
                    <h4 className="text-lg font-medium mb-2">Business Hours</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-32">Monday - Saturday:</span>
                        <span className="font-medium">10:00 AM - 6:00 PM</span>
                      </li>
                      {/* <li className="flex items-center">
                        <span className="w-32">Saturday:</span>
                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                      </li> */}
                      <li className="flex items-center">
                        <span className="w-32">Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
