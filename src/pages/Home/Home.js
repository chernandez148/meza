import React, { useState, useEffect } from "react";
import sliderImage1 from "../../assets/meza1.jpg";
import sliderImage2 from "../../assets/meza2.jpg";
import "./Home.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (currentSlide) => (currentSlide + 1) % heroCarousel.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const heroCarousel = [
    {
      id: 1,
      image: sliderImage1,
      alt: "Meza 1",
    },
    {
      id: 2,
      image: sliderImage2,
      alt: "Meza 2",
    },
  ];

  return (
    <div className="Home">
      <div className="hero-carousel">
        {heroCarousel.map((slide, index) => (
          <img
            key={slide.id}
            className="hero-slide"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
            src={slide.image}
            alt={slide.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
