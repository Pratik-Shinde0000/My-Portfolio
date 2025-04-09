import {
  FaReact,
  FaHtml5,
  FaFigma,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPostman } from "react-icons/si";
import { FaPython, FaLaravel } from "react-icons/fa";
import { DiDocker, DiJava } from "react-icons/di";

const SkillData = [
  {
    icon: FaHtml5,
    title: "HTML & CSS",
    description:
      "Learning the basics of creating website structure and styling using HTML and CSS.",
  },
  {
    icon: FaDatabase,
    title: "MySQL",
    description:
      "Learning to manage data in a database using MySQL for website purposes.",
  },
  {
    icon: DiJava,
    title: "Java",
    description:
      "Experienced in Java programming, including building scalable backend systems, implementing object-oriented principles, and developing applications using frameworks like Spring Boot.",
  },
  {
    icon: DiJava, // Replace with a Spring Boot-specific icon if available
    title: "Spring Boot",
    description:
      "Experienced in using Spring Boot for building robust and scalable backend applications. Proficient in creating RESTful APIs, integrating with databases, and implementing security features using Spring Security.",
  },

  {
    icon: DiJava,
    title: "C Language",
    description:
      "Proficient in C with focus on problem-solving, data structures, and system-level programming.",
  },

  {
    icon: SiPostman,
    title: "Postman",
    description:
      "Proficient in using Postman for API testing, debugging, and documentation. Experienced in creating and managing API requests, testing endpoints, and automating workflows with collections.",
  },
  {
    icon: FaPython,
    title: "Python",
    description:
      "Learning the Python programming language for various purposes, such as data processing and creating simple programs.",
  },
  {
    icon: FaReact, // Replace with an IntelliJ-specific icon if available
    title: "IntelliJ IDEA",
    description:
      "Proficient in using IntelliJ IDEA for Java development, debugging, and managing large-scale projects. Experienced in leveraging its advanced features like code analysis, version control integration, and plugin support.",
  },
  {
    icon: DiDocker,
    title: "Docker",
    description:
      "Gaining hands-on experience with Docker for containerization. Learning to create and manage containers, write Dockerfiles, and understand the basics of deploying applications using Docker.",
  },
];

export default SkillData;
