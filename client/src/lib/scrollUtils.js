// Setup animations on scroll
export const setupScrollAnimations = () => {
  // Select all elements with scroll animation classes
  const scrollAnimateElements = document.querySelectorAll(
    '.scroll-animate, .scroll-fade-in, .scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale'
  );

  const checkScroll = () => {
    scrollAnimateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      // Adjust visibility threshold based on element data attribute or default to 150px
      const elementVisible = element.dataset.threshold ? parseInt(element.dataset.threshold) : 150;

      // Add active class when element is in viewport
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      } else if (element.dataset.reset === 'true') {
        // Optional: Remove active class when element is out of viewport if reset is enabled
        element.classList.remove('active');
      }
    });
  };

  // Check elements on initial load
  checkScroll();

  // Add scroll event listener with passive option for better performance
  window.addEventListener('scroll', checkScroll, { passive: true });

  return checkScroll;
};

// Setup navigation highlighting based on scroll position
export const setupNavHighlighting = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let scrollPosition = window.scrollY + 100;
    let currentSection = '';

    // Find the current section based on scroll position
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });

    // Update active class on navigation links
    if (currentSection) {
      navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');

        // Get the href attribute and extract the section ID
        const href = link.getAttribute('href');
        const linkSectionId = href ? href.replace('#', '') : '';

        // Add active class if this link points to the current section
        if (linkSectionId === currentSection) {
          link.classList.add('active');
        }
      });
    }
  };

  // Check on initial load
  highlightNav();

  // Add scroll event listener
  window.addEventListener('scroll', highlightNav);

  // Add click event listeners to nav links to update active state immediately
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const targetId = href ? href.substring(1) : '';

      if (targetId) {
        // Remove active class from all links
        navLinks.forEach(navLink => {
          navLink.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // Update current section in the DOM
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          if (section.id === targetId) {
            // This is a hack to force the browser to recognize this section as active
            setTimeout(() => {
              // Trigger a scroll event to update the active section
              window.dispatchEvent(new Event('scroll'));
            }, 100);
          }
        });
      }
    });
  });

  return highlightNav;
};

// Enhanced smooth scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Get the navbar height to offset the scroll position
  const navbar = document.querySelector('header');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  // Calculate the element's position relative to the document
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

  // Scroll to the element with offset for the navbar
  window.scrollTo({
    top: elementPosition - navbarHeight - 20, // Additional 20px padding
    behavior: 'smooth'
  });
};

// Setup parallax scroll effects
export const setupParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('.parallax-scroll');

  const updateParallax = () => {
    parallaxElements.forEach(element => {
      // Get the element's position relative to the viewport
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = elementTop - windowHeight / 2 + elementHeight / 2;

      // Calculate the parallax effect (adjust the divisor to control the effect strength)
      const parallaxValue = distanceFromCenter / 10;

      // Get the direction from data attribute or default to 'up'
      const direction = element.dataset.parallaxDirection || 'up';

      // Apply the transform based on direction
      if (direction === 'up') {
        element.style.transform = `translateY(${-parallaxValue}px)`;
      } else if (direction === 'down') {
        element.style.transform = `translateY(${parallaxValue}px)`;
      } else if (direction === 'left') {
        element.style.transform = `translateX(${-parallaxValue}px)`;
      } else if (direction === 'right') {
        element.style.transform = `translateX(${parallaxValue}px)`;
      }
    });
  };

  // Update on scroll
  window.addEventListener('scroll', updateParallax, { passive: true });

  // Initial update
  updateParallax();

  return updateParallax;
};
