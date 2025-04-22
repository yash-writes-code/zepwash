/**
 * Initializes the scroll animation observer to detect elements with animation classes
 * and add the 'visible' class when they enter the viewport
 */
export function initScrollAnimations() {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  // Get all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add the 'visible' class when the element enters the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  // Observe all animated elements
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    // Cleanup function
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
}

/**
 * Adds scroll-triggered animations to elements with specific data attributes
 * Usage: Add data-animate="fade-in-up" to any element you want to animate
 * Optional: Add data-delay="1" to stagger animations (values 1-4)
 */
export function setupScrollAnimations() {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  const animatedElements = document.querySelectorAll('[data-animate]');

  animatedElements.forEach((element) => {
    const animationType = element.getAttribute('data-animate');
    const delay = element.getAttribute('data-delay');

    if (animationType) {
      element.classList.add(animationType);
    }

    if (delay) {
      element.classList.add(`stagger-delay-${delay}`);
    }
  });

  return initScrollAnimations();
}