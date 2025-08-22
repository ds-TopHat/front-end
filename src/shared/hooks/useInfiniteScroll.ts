import { useEffect, useState, useCallback } from 'react';

export const useInfiniteScroll = (
  callback: () => void,
  options?: IntersectionObserverInit,
) => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const refCallback = useCallback((el: HTMLDivElement | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, callback, options]);

  return refCallback;
};
