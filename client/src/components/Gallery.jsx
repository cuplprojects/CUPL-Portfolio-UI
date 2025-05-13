import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, Maximize } from "lucide-react";

// Import all gallery images
import caImage from "../assets/images/gallery/CA.png";
import devTeamImage from "../assets/images/gallery/dev-team.png";
import director1Image from "../assets/images/gallery/director-1.png";
import director2Image from "../assets/images/gallery/director-2.png";
import meetingImage from "../assets/images/gallery/meeting.png";
import presentationImage from "../assets/images/gallery/presentation.jpg";
import serverRoomImage from "../assets/images/gallery/server-room.jpg";
import teamImage from "../assets/images/gallery/team.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Gallery images with metadata
  const galleryImages = [
    {
      src: director1Image,
      alt: "Director",
      title: "Leadership",
      description: "Guiding our company with vision and expertise."
    },
    {
      src: director2Image,
      alt: "Director Meeting",
      title: "Strategic Planning",
      description: "Shaping the future of educational technology."
    },
    {
      src: caImage,
      alt: "Chartered Accountant",
      title: "Financial Excellence",
      description: "Our financial team ensures compliance and growth."
    },
    {
      src: devTeamImage,
      alt: "Development Team",
      title: "Innovation Hub",
      description: "Our talented developers creating cutting-edge solutions."
    },
    {
      src: meetingImage,
      alt: "Team Meeting",
      title: "Collaboration",
      description: "Working together to achieve excellence."
    },
    {
      src: presentationImage,
      alt: "Presentation",
      title: "Knowledge Sharing",
      description: "Presenting innovative solutions to clients."
    },
    {
      src: serverRoomImage,
      alt: "Server Room",
      title: "Technology Infrastructure",
      description: "Powerful systems supporting our digital solutions."
    },
    {
      src: teamImage,
      alt: "IT Room",
      title: "IT Team ",
      description: "Young and dynamic team working on various projects."
    }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const autoRotateTimer = setInterval(() => {
      if (!selectedImage) { // Only auto-rotate when lightbox is closed
        setFeaturedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
    }, 15000);

    return () => clearInterval(autoRotateTimer);
  }, [selectedImage, galleryImages.length]);

  // Handle keyboard navigation and scroll events for the lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateImage(1);
      } else if (e.key === "ArrowLeft") {
        navigateImage(-1);
      }
    };

    // Close lightbox when scrolling
    const handleScroll = () => {
      if (selectedImage) {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedImage, currentIndex]);

  // Navigate between images in the lightbox
  const navigateImage = (direction) => {
    if (selectedImage === null) return;

    const newIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Open the lightbox with the selected image
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  // Close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
      }
    }
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white to-transparent -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-2">
          <motion.div
            className="mb-2 inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full">
              Our Workspace
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Glimpses of Excellence
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our workspace and team through this visual journey.
          </motion.p>
        </div>

        {/* True carousel gallery layout */}
        <div className="relative px-4 py-8">
          {/* Main featured image with navigation controls */}
          <div className="relative mb-8 mx-auto max-w-4xl">
            <motion.div
              className="overflow-hidden rounded-xl shadow-lg border-2 border-gray-200"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredIndex}
                  className="relative group aspect-video h-96 w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={galleryImages[featuredIndex].src}
                    alt={galleryImages[featuredIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-semibold text-2xl">{galleryImages[featuredIndex].title}</h3>
                    <p className="text-white/80 text-lg">{galleryImages[featuredIndex].description}</p>
                    <button
                      onClick={() => openLightbox(galleryImages[featuredIndex], featuredIndex)}
                      className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Zoom image"
                    >
                      <ZoomIn className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Navigation arrows for featured image */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow-md z-10 transition-all duration-300 opacity-70 hover:opacity-100"
              onClick={() => setFeaturedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow-md z-10 transition-all duration-300 opacity-70 hover:opacity-100"
              onClick={() => setFeaturedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          {/* Image indicators/dots */}
          <div className="flex justify-center space-x-2 mb-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === featuredIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setFeaturedIndex(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>

          {/* Horizontal scrolling thumbnails */}
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <motion.div
              className="flex space-x-4 min-w-max p-4 "
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative flex-shrink-0 w-40 h-28 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                    index === featuredIndex
                      ? "border-primary shadow-lg"
                      : "border-gray-200 shadow-md hover:shadow-lg"
                  }`}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFeaturedIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${index === featuredIndex ? "bg-primary/10" : "hover:bg-primary/5"} transition-colors duration-300`} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Instruction text */}
          {/* <motion.p
            className="text-center text-gray-500 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Images rotate automatically every 5 seconds. Click thumbnails or use arrows to navigate manually.
          </motion.p> */}
        </div>

        {/* Add custom CSS for hiding scrollbar but allowing scroll */}
        <style jsx global>{`
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
          }
        `}</style>
      </div>

      {/* Improved Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox} // Close when clicking the background
          >
            {/* Prominent close button */}
            <motion.button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300 z-[60] border border-white/20"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the background click
                closeLightbox();
              }}
              aria-label="Close lightbox"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>

            {/* Close instructions */}
            <motion.div
              className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              Press ESC or scroll to close
            </motion.div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[60]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the background click
                navigateImage(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <motion.div
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover md:object-contain transform hover:scale-110 transition-transform duration-300"
              />
              {/* Zoom indicator */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full flex items-center space-x-2 text-white/90 text-sm">
                <Maximize className="h-4 w-4" />
                <span>Hover to zoom</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-xl">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[60]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the background click
                navigateImage(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
