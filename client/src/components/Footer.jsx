import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  // Services list
  const services = [
    { name: "Result Processing Software", href: "#services" },
    { name: "OMR Sheet Scanning", href: "#services" },
    { name: "University Web Portals", href: "#services" },
    { name: "Educational ERP Systems", href: "#services" },
    { name: "Custom Web Development", href: "#services" },
    { name: "Global Export Solutions", href: "#services" },
  ];

  // Quick links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Our Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle newsletter form submission (non-functional as requested)
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a frontend-only implementation
    console.log("Newsletter form submitted (frontend only)");
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chandrakala Universal</h3>
            <p className="text-gray-300 mb-6">
              Empowering education with digital innovation since 2013. Transforming the way educational institutions operate with custom technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-300 hover:text-white transition">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest developments and industry insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <Input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  className="w-full px-4 py-2 bg-secondary-dark/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-primary focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Chandrakala Universal Pvt. Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Legal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
