import React, { useState, useEffect, useRef } from 'react';

// Only sets the video's src (and starts loading/autoplay) once the element
// is close to entering the viewport, instead of every project video
// downloading immediately on page load.
const LazyVideo = ({ src, className, label }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      className={className}
      aria-label={label}
      preload="none"
      autoPlay={isVisible}
      loop
      muted
      playsInline
    />
  );
};

export default LazyVideo;
