// Setup animations on scroll
export const setupScrollAnimations = () => {
  const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

  const checkScroll = () => {
    scrollAnimateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  // Check elements on initial load
  checkScroll();

  // Add scroll event listener
  window.addEventListener('scroll', checkScroll);

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
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
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
      const targetId = this.getAttribute('href').substring(1);

      // Remove active class from all links
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });

      // Add active class to clicked link
      this.classList.add('active');
    });
  });

  return highlightNav;
};

// Smooth scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
