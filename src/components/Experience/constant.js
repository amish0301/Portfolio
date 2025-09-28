import { MdTrendingUp } from "react-icons/md";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";
import NetAiLogo from '../../Assets/netai-logo.png'
import BluexkyeLogo from '../../Assets/bluexkye-logo.jpg'

export const experiences = [
  {
    id: 1,
    role: "Software Engineer (Frontend)",
    company: "NetAI Inc.",
    location: "Ahmedabad, Gujarat (Office)",
    duration: "May 2025 - Present",
    type: "Full-time",
    description:
      "Working in the frontend team to build optimized, scalable, and reusable components for enterprise applications. Developing Higher-Order Components and implementing state management using Zustand.",
    achievements: [
      "Built highly reusable HOCs for UI components improving developer productivity",
      "Optimized Next.js applications for faster load and better SEO",
      "Implemented state management using Zustand, simplifying global state handling",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "React", "TypeScript"],
    companyImage: NetAiLogo,
    colorClass: "gradient-purple",
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Bluexkye",
    location: "Ahmedabad, Gujarat (Office)",
    duration: "Feb 2025 - May 2025",
    type: "Internship",
    description:
      "Worked on the 'Crick Prediction App' project as a full-stack developer. Developed backend APIs with Node.js, Express, and Sequelize, and integrated PostgreSQL. Designed flow diagrams for project presentation and contributed to front-end using React.",
    achievements: [
      "Built full-stack MVP of Crick Prediction App with React + PostgreSQL",
      "Implemented database migrations using sequelize-cli",
      "Created visual flow diagrams for team presentation",
    ],
    technologies: ["React", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    companyImage: BluexkyeLogo,
    colorClass: "gradient-blue",
  },
];
