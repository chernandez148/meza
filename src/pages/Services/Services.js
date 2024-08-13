import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import servicesBG from "../../assets/services-bg.jpg";
import "./Services.css";

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.2, // 0 (completely out of view) to 1 (completely in view)
      }
    );

    if (servicesRef.current) {
      observer.current.observe(servicesRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="Services" ref={servicesRef}>
      <Header title="SERVICES" background={servicesBG} />
      <h5 style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
        WHAT WE DO
      </h5>
      <div
        className="services-wrapper"
        style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
      >
        <div className="core-services">
          <h4>Core Services</h4>
          <ul>
            <li>
              <b>Pre-Construction Budgeting:</b> Comprehensive cost estimation
              and financial planning before project commencement.
            </li>
            <li>
              <b>Design Build:</b> Integrated design and construction services
              to streamline project execution.
            </li>
            <li>
              <b>Value Engineering:</b> Optimization of project value through
              cost-effective and innovative solutions.
            </li>
            <li>
              <b>Construction Management:</b> Oversight and coordination of
              construction projects to ensure timely and successful completion.
            </li>
          </ul>
        </div>
        <div className="specialized-services">
          <h4>Specialized Services</h4>
          <ul>
            <li>
              <b>Concrete:</b> Expert concrete installation and repair for
              various applications.
            </li>
            <li>
              <b>Rebar:</b> Professional rebar installation and reinforcement
              for structural integrity.
            </li>
            <li>
              <b>Masonry:</b> High-quality masonry work for durable and
              aesthetically pleasing structures.
            </li>
            <li>
              <b>Seismic Upgrades:</b> Enhancements to buildings to meet seismic
              safety standards.
            </li>
          </ul>
        </div>
        <div className="service-types">
          <h4>Service Types</h4>
          <ul>
            <li>
              <b>Industrial:</b> Large-scale industrial facilities and
              infrastructure projects.
            </li>
            <li>
              <b>Retail:</b> Customized solutions for retail spaces to enhance
              functionality and appeal.
            </li>
            <li>
              <b>Churches:</b> Construction and renovation of places of worship
              with respect to architectural and community needs.
            </li>
            <li>
              <b>Multi-Family:</b> Development of residential buildings designed
              for multiple families.
            </li>
            <li>
              <b>Senior Housing:</b> Specialized housing solutions that cater to
              the needs of seniors.
            </li>
            <li>
              <b>Hospitals:</b> Construction and renovation of healthcare
              facilities ensuring safety and compliance.
            </li>
            <li>
              <b>Garages:</b> Functional and durable garage construction for
              various uses.
            </li>
            <li>
              <b>Mixed Use:</b> Versatile spaces combining residential,
              commercial, and other uses.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
