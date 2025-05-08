import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  // Handle form submission (non-functional as requested)
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a frontend-only implementation, no backend integration
    console.log("Form submitted (frontend only)");
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h6 
            className="text-primary font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h6>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Discuss Your Requirements
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out to our team for more information about our services or to schedule a consultation.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="your.email@example.com" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe your requirements in detail..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      Chandrakala Universal Pvt. Ltd.,<br />
                      Civil Lines, Prayagraj,<br />
                      Uttar Pradesh 211001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      info@chandrakalauniversal.com<br />
                      support@chandrakalauniversal.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      +91 9876543210<br />
                      +91 1234567890
                    </p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-medium mb-4">Business Hours</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
