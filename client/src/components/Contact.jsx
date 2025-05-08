import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CalendarClock } from "lucide-react";
import { Input } from "@/components/ui-jsx/input";
import { Textarea } from "@/components/ui-jsx/textarea";
import { Button } from "@/components/ui-jsx/button";
import { Label } from "@/components/ui-jsx/label";
import { fadeInUp, slideInLeft, slideInRight, springScale, rotateIn } from "@/lib/animations";

const Contact = () => {
  // Handle form submission (non-functional as requested)
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a frontend-only implementation, no backend integration
    console.log("Form submitted (frontend only)");
  };

  // Animation variants
  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1 + (custom * 0.1)
      }
    })
  };

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
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="space-y-2"
                    variants={formItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                  >
                    <Label htmlFor="name" className="font-medium">Full Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring-primary/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    variants={formItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                  >
                    <Label htmlFor="email" className="font-medium">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring-primary/20 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <Label htmlFor="subject" className="font-medium">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring-primary/20 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3}
                >
                  <Label htmlFor="message" className="font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Please describe your requirements in detail..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={4}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center">
                        Send Message
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          className="ml-2"
                        >
                          <Send className="h-4 w-4" />
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
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
                      Chandrakala Universal Pvt. Ltd.,<br />
                      Civil Lines, Prayagraj,<br />
                      Uttar Pradesh 211001, India
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
                        href="mailto:info@chandrakalauniversal.com"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        info@chandrakalauniversal.com
                      </a>
                      <br />
                      <a
                        href="mailto:support@chandrakalauniversal.com"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        support@chandrakalauniversal.com
                      </a>
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
                        href="tel:+919876543210"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        +91 9876543210
                      </a>
                      <br />
                      <a
                        href="tel:+911234567890"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        +91 1234567890
                      </a>
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
                        <span className="w-32">Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-32">Saturday:</span>
                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                      </li>
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
