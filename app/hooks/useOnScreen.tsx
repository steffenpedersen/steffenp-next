import { useEffect, useState } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer) => {
      setIntersecting(entry.isIntersecting);

      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
    });

    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}
