import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import "./carousel.css";

const Carousel = ({ images, height, width, delay }) => {
  const containerRef = useRef();
  const imageContainerRef = useRef();
  const currentIndex = useRef(0);

  useLayoutEffect(() => {
    containerRef.current.style.setProperty("--height", `${height}px`);
    containerRef.current.style.setProperty("--width", `${width}px`);
    containerRef.current.style.setProperty("--aspect-ratio", width / height);
  }, [height, width]);

  const handleScroll = useCallback((direction) => {
    const newIndex =
      direction === "next"
        ? currentIndex.current + 1
        : currentIndex.current - 1;
    if (newIndex === images.length) {
      currentIndex.current = 0;
    } else if (newIndex < 0) {
      currentIndex.current = images.length - 1;
    } else {
      currentIndex.current = newIndex;
    }

    imageContainerRef.current.scrollTo({
      left: currentIndex.current * width,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleScroll("next");
    }, delay);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="image-wrapper" ref={imageContainerRef}>
        {images.map((img) => (
          <img
            className="corusel-img"
            key={img.src}
            src={img.src}
            alt={img.alt}
            height={height}
            width={width}
          />
        ))}
      </div>
      <button
        onClick={() => handleScroll("prev")}
        className="carousel-button prev">
        &lt;
      </button>
      <button
        onClick={() => handleScroll("next")}
        className="carousel-button next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
