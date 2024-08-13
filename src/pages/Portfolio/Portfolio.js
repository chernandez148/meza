import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import portfolioBG from "../../assets/portfolio-bg.jpg";
import "./Portfolio.css";

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // 0 (completely out of view) to 1 (completely in view)
      }
    );

    if (portfolioRef.current) {
      observer.current.observe(portfolioRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="Portfolio" ref={portfolioRef}>
      <Header title="PORTFOLIO" background={portfolioBG} />
      <div id="portfolio-section">
        <ul class="juicer-feed" data-feed-id="qq_studios" data-per="15"></ul>
      </div>
    </div>
  );
}

export default Portfolio;
