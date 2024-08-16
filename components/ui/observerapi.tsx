import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = () => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const observe = (element: Element) => {
    observerRef.current?.observe(element);
  };

  const unobserve = (element: Element) => {
    observerRef.current?.unobserve(element);
  };

  return { observe, unobserve, entries };
};
