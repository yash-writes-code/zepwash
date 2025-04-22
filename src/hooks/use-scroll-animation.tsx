import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * A hook that adds animation classes to elements when they enter the viewport
 * @param options Configuration options for the Intersection Observer
 * @returns A ref to attach to the element that should be animated
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add the 'visible' class when the element enters the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            // Optionally remove the class when the element leaves the viewport
            // Uncomment the line below if you want animations to replay when elements re-enter the viewport
            // entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
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
  }, [threshold, rootMargin]);

  return ref;
}

export default useScrollAnimation;