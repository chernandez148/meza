import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import safetyImageOne from "../../assets/safety-img.jpg";
import safetyImageTwo from "../../assets/safety-img-2.jpg";
import safetyBG from "../../assets/safety-bg.jpg";
import { Link } from "react-router-dom";
import "./Safety.css";

function Safety() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const safetyRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // 0 (completely out of view) to 1 (completely in view)
      }
    );

    if (safetyRef.current) {
      observer.current.observe(safetyRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  console.log(isVisible); // For debugging purposes

  return (
    <div className="Safety" ref={safetyRef}>
      <Header title="SAFETY" background={safetyBG} />
      <h5 style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
        WHY SAFETY MATTERS
      </h5>
      <div className="safety-wrapper">
        <div
          className="safety-block"
          style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
        >
          <div className="safety-content">
            <h4>Safety Protocols</h4>
            <ul>
              <li>
                <b>Pre-Job Safety Planning:</b> Comprehensive safety plans
                developed before project initiation, including risk assessments
                and mitigation strategies.
              </li>
              <li>
                <b>Regular Safety Training:</b> Ongoing training programs for
                all personnel on best practices, safety procedures, and
                emergency response.
              </li>
              <li>
                <b>Personal Protective Equipment (PPE):</b> Mandatory use of
                appropriate PPE, including gloves, helmets, safety glasses, and
                steel-toed boots.
              </li>
            </ul>
          </div>
          <img src={safetyImageOne} alt="Safety protocols" />
        </div>
        <div
          className="safety-block"
          style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
        >
          <img src={safetyImageTwo} alt="Safe handling and installation" />
          <div className="safety-content">
            <h4>Safe Handling and Installation</h4>
            <ul>
              <li>
                <b>Proper Handling Techniques:</b> Training on correct
                techniques for handling and transporting rebar to prevent
                injuries.
              </li>
              <li>
                <b>Secure Rebar Placement:</b> Ensuring rebar is securely tied
                and supported to prevent shifting or collapse during
                installation.
              </li>
              <li>
                <b>Use of Equipment:</b> Utilization of tools and machinery
                designed for safe rebar bending, cutting, and positioning.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="safety-block"
          style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
        >
          <div className="safety-content">
            <h4>Site Safety Measures</h4>
            <ul>
              <li>
                <b>Worksite Inspections:</b> Regular inspections of the worksite
                to identify and address potential hazards.
              </li>
              <li>
                <b>Safe Access and Egress:</b> Ensuring safe access to all work
                areas and clear, unobstructed pathways for emergency exits.
              </li>
              <li>
                <b>Fall Protection:</b> Installation of guardrails, safety nets,
                and harnesses to prevent falls from heights.
              </li>
            </ul>
          </div>
          <img src={safetyImageOne} alt="Site safety measures" />
        </div>
        <div
          className="safety-banner"
          style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
        >
          <div className="banner-left">
            <h3>Safety Protocols & Procedures</h3>
            <p>
              Our comprehensive safety protocols are designed to ensure a secure
              work environment from start to finish. This includes pre-job
              safety planning with detailed risk assessments, ongoing safety
              training for all team members, and mandatory use of personal
              protective equipment (PPE) such as gloves, helmets, and safety
              glasses. These measures are fundamental to preventing accidents
              and ensuring that all personnel are well-prepared for emergency
              situations.
            </p>
          </div>
          <div className="banner-right">
            <h3>Safety Protocols & Procedures</h3>
            <p>
              Our comprehensive safety protocols are designed to ensure a secure
              work environment from start to finish. This includes pre-job
              safety planning with detailed risk assessments, ongoing safety
              training for all team members, and mandatory use of personal
              protective equipment (PPE) such as gloves, helmets, and safety
              glasses. These measures are fundamental to preventing accidents
              and ensuring that all personnel are well-prepared for emergency
              situations.
            </p>
          </div>
        </div>
        <div
          className="safety-block"
          style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
        >
          <div className="safety-content">
            <h4>Compliance and Documentation</h4>
            <ul>
              <li>
                <b>Adherence to Regulations:</b> Compliance with local, state,
                and federal safety regulations and standards for rebar
                construction.
              </li>
              <li>
                <b>Safety Documentation:</b> Detailed records of safety
                procedures, incident reports, and safety audits to ensure
                ongoing compliance and improvement.
              </li>
              <li>
                <b>Emergency Preparedness:</b> Clearly outlined emergency
                procedures and readily available first aid supplies on site.
              </li>
            </ul>
          </div>
          <img src={safetyImageOne} alt="Compliance and documentation" />
        </div>
        <div
          className="safety-block"
          style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
        >
          <img src={safetyImageTwo} alt="Continuous improvement" />
          <div className="safety-content">
            <h4>Continuous Improvement</h4>
            <ul>
              <li>
                <b>Safety Audits and Reviews:</b> Regular audits and reviews of
                safety practices to identify areas for improvement and implement
                best practices.
              </li>
              <li>
                <b>Feedback Mechanism:</b> Encouraging feedback from workers on
                safety concerns and suggestions for enhancing safety protocols.
              </li>
            </ul>
          </div>
        </div>
        <div className="safety-email">
          <h3>Safety Inquieries:</h3>
          <Link>safety@mezainc.com</Link>
        </div>
      </div>
    </div>
  );
}

export default Safety;
