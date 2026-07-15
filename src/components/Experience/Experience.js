import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { experiences } from "./constant"; 
import './work-exp.css';

const ACHIEVEMENTS_PREVIEW_COUNT = 2;
 
function WorkExperience({ isFromHome = false }) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [expandedItems, setExpandedItems] = useState(new Set());
  const observerRef = useRef(null);
  const navigate = useNavigate();
 
  const toggleExpanded = (id) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };
 
  useEffect(() => {
    if (!experiences || experiences.length === 0) return;
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // data-exp-id in the DOM maps to dataset.expId (camelCase),
            // not dataset.id — this mismatch was why cards stayed hidden.
            const id = parseInt(entry.target.dataset.expId, 10);
            if (!Number.isNaN(id)) {
              setVisibleItems((prev) => new Set([...prev, id]));
            }
            observer.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
 
    observerRef.current = observer;
 
    // Re-query on every experiences change so late-arriving/async data
    // still gets observed correctly.
    const elements = document.querySelectorAll("[data-exp-id]");
    elements.forEach((el) => observer.observe(el));
 
    return () => observer.disconnect();
  }, [experiences]);
 
  return (
    <div
      className="we-section"
      style={{ background: isFromHome ? "transparent" : "" }}
    >
      <div className="we-orb we-orb-1"></div>
      <div className="we-orb we-orb-2"></div>
      <div className="we-orb we-orb-3"></div>
 
      <div className="we-container">
        {/* Header */}
        <div className="we-header">
          <div className="we-badge">
            <FaBriefcase className="we-badge-icon" />
            <span>Professional Journey</span>
          </div>
          <h2 className="we-title">Work Experience</h2>
          <p className="we-subtitle">
            Explore my professional journey and the impact I've made across
            different organizations
          </p>
        </div>
 
        {/* Timeline */}
        <div className="we-timeline">
          <div className="we-timeline-track">
            <span className="we-timeline-fill"></span>
          </div>
 
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isVisible = visibleItems.has(exp.id);
            const side = index % 2 === 0 ? "left" : "right";
 
            return (
              <div
                key={exp.id}
                data-exp-id={exp.id}
                className={`we-item we-item-${side} ${
                  isVisible ? "we-item-visible" : ""
                }`}
              >
                <div className={`we-node ${exp.colorClass || ""}`}>
                  <span className="we-node-core"></span>
                  <span className="we-node-ring"></span>
                </div>
 
                <div className={`we-card ${exp.colorClass || ""}`}>
                  <div className="we-card-header">
                    <div
                      className={`we-company-icon ${exp.colorClass || ""} ${
                        exp.companyImage ? "has-logo" : ""
                      }`}
                    >
                      {exp.companyImage ? (
                        <img
                          src={exp.companyImage}
                          alt={exp.company}
                          className="we-company-image"
                        />
                      ) : (
                        IconComponent && <IconComponent />
                      )}
                    </div>
                    <span className={`we-type-badge ${exp.colorClass || ""}`}>
                      {exp.type}
                    </span>
                  </div>
 
                  <h3 className="we-role">{exp.role}</h3>
                  <h4 className="we-company">{exp.company}</h4>
 
                  <div className="we-meta">
                    <div className="we-meta-item">
                      <FaMapMarkerAlt className="we-meta-icon we-meta-icon-purple" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="we-meta-item">
                      <FaCalendarAlt className="we-meta-icon we-meta-icon-blue" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
 
                  <p className="we-description">{exp.description}</p>
 
                  <div className="we-block">
                    <div className="we-block-header">
                      <FaAward className="we-block-icon we-block-icon-award" />
                      <span>Key Achievements</span>
                    </div>
                    {(() => {
                      const isExpanded = expandedItems.has(exp.id);
                      const hasMore =
                        exp.achievements.length > ACHIEVEMENTS_PREVIEW_COUNT;
                      const visibleAchievements = isExpanded
                        ? exp.achievements
                        : exp.achievements.slice(0, ACHIEVEMENTS_PREVIEW_COUNT);
 
                      return (
                        <>
                          <ul className="we-achievements">
                            {visibleAchievements.map((achievement, i) => (
                              <li key={i} className="we-achievement-item">
                                <FaChevronRight className="we-achievement-icon" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          {hasMore && (
                            <button
                              type="button"
                              className="we-toggle-btn"
                              aria-expanded={isExpanded}
                              onClick={() => toggleExpanded(exp.id)}
                            >
                              <span>
                                {isExpanded
                                  ? "Show less"
                                  : `Show ${
                                      exp.achievements.length -
                                      ACHIEVEMENTS_PREVIEW_COUNT
                                    } more`}
                              </span>
                              <FaChevronDown className="we-toggle-icon" />
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </div>
 
                  <div className="we-block">
                    <div className="we-block-header">
                      <MdTrendingUp className="we-block-icon we-block-icon-tech" size={18} />
                      <span>Technologies</span>
                    </div>
                    <div className="we-tech-grid">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="we-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
 
        {!isFromHome && (
          <div className="we-cta">
            <button className="we-cta-button" onClick={() => navigate("contact")}>
              <span>Let's Work Together</span>
              <FaChevronRight className="we-cta-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkExperience;