import { useState, useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronRight,
  FaAward,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { experiences } from "./constant";
import "../../index.css";
import { useNavigate } from "react-router-dom";

function WorkExperience({ isFromHome = false }) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);
  const observerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, parseInt(entry.target.dataset.id)])
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    observerRef.current = observer;

    const elements = document.querySelectorAll("[data-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="work-experience-container"
        style={{ background: isFromHome ? "transparent" : "" }}
      >
        <div className="background-orb background-orb-1"></div>
        <div className="background-orb background-orb-2"></div>
        <div className="background-orb background-orb-3"></div>

        <div className="container">
          <div className="header">
            <div className="header-badge">
              <FaBriefcase className="header-badge-icon" />
              <span>Professional Journey</span>
            </div>
            <h2 className="header-title">Work Experience</h2>
            <p className="header-subtitle">
              Explore my professional journey and the impact I've made across
              different organizations
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline-container">
            {/* Vertical line */}
            <div className="timeline-line"></div>

            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={exp.id}
                  data-id={exp.id}
                  className={`experience-item ${
                    visibleItems.has(exp.id) ? "visible" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`timeline-dot ${exp.colorClass}`}></div>

                  {/* Experience Card */}
                  <div
                    className={`experience-card ${exp.colorClass}`}
                    onMouseEnter={() => setHoveredItem(exp.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Company icon and type badge */}
                    <div className="card-header">
                      <div className={`company-icon ${exp.colorClass}`}>
                        {exp.companyImage ? (
                          <img
                            src={exp.companyImage}
                            alt={exp.company}
                            className="company-image"
                          />
                        ) : (
                          <IconComponent /> // fallback to icon if image not provided
                        )}
                      </div>
                      <span className={`type-badge ${exp.colorClass}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Role and Company */}
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-name">{exp.company}</h4>

                    {/* Location and Duration */}
                    <div className="location-duration">
                      <div className="location-item">
                        <FaMapMarkerAlt className="location-icon purple" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="location-item">
                        <FaCalendarAlt className="location-icon blue" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="description">{exp.description}</p>

                    {/* Achievements */}
                    <div>
                      <div className="section-header">
                        <FaAward className="section-icon award" />
                        <span className="section-title">Key Achievements</span>
                      </div>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="achievement-item">
                            <FaChevronRight className="achievement-icon" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="section-header">
                        <MdTrendingUp className="section-icon tech" size={24} />
                        <span className="section-title">Technologies</span>
                      </div>
                      <div className="technologies-grid">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="technology-tag">
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
            <div className="cta-section">
              <button
                className="cta-button"
                onClick={() => navigate("contact")}
              >
                <span>Let's Work Together</span>
                <FaChevronRight className="cta-icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
