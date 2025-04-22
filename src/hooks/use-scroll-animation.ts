import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useScrollAnimation = <T extends HTMLElement>(options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.3,
    rootMargin = '0px',
    delay = 0
  } = options;
  
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay before adding the visible class
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay * 1000);
            
            // Once the animation has been triggered, we can unobserve the element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);

  return ref;
};