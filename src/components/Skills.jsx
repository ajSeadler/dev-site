import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaHtml5,
  FaGithub,
  FaPython,
  FaChevronDown,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import "../styles/Skills.css";

const skillData = [
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    textColor: "#333333", // Darker color for JavaScript text
    bgColor: "#f0db4f",
    gridColumn: "span 2",
    gridRow: "span 1",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    bgColor: "#61DBFB",
    textColor: "#333",
    gridColumn: "span 1",
    gridRow: "span 2",
  },
  {
    name: "Node.js",
    icon: <FaNode />,
    bgColor: "#68A063",
    gridColumn: "span 1",
    gridRow: "span 1",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    bgColor: "#20232a",
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  {
    name: "HTML5 & CSS3",
    icon: <FaHtml5 />,
    bgColor: "#E44D26",
    gridColumn: "span 1",
    gridRow: "span 1",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    bgColor: "#336791",
    gridColumn: "span 1",
    gridRow: "span 1",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    bgColor: "#4DB33D",
    gridColumn: "span 1",
    gridRow: "span 2",
  },
  {
    name: "Python",
    icon: <FaPython />,
    bgColor: "#306998",
    gridColumn: "span 1",
    gridRow: "span 1",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub />,
    bgColor: "#171515",
    gridColumn: "span 2",
    gridRow: "span 1",
  },
];

const SkillsGrid = () => (
  <>
    <div className="widget-grid">
      {skillData.map((skill, index) => (
        <div
          className="skill-widget"
          key={index}
          style={{
            backgroundColor: skill.bgColor,
            gridColumn: skill.gridColumn,
            gridRow: skill.gridRow,
          }}
        >
          <div className="icon-container">{skill.icon}</div>
          <p style={{ color: skill.textColor || "#ffffff", fontWeight: 200 }}>
            {skill.name}
          </p>
        </div>
      ))}
    </div>
    <div className="skill-widget-bottom">
      <div className="icon-container"></div>
      <p>
        <FaChevronDown style={{ marginRight: "8px" }} />
        Check out my projects below!
        <FaChevronDown style={{ marginLeft: "8px" }} />
      </p>
    </div>
  </>
);

export default SkillsGrid;
