import { useEffect } from 'react';

export const useInfiniteScroll = (
  loaderRef: React.RefObject<HTMLDivElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    if (!loaderRef.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    });

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loaderRef, callback]);
};
