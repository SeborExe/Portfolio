import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bbg,
  OmSphere,
  dreamstorm,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Unreal Engine Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Unreal Engine Developer",
    company_name: "BeardedBrothers",
    icon: bbg,
    iconBg: "#383E56",
    date: "June 2023 – July 2025",
    points: [
      "Developed and expanded core game mechanics including Mechanic Mode, Painting Mode, and Garage Manager",
      "Built mission system and project-wide state machine architecture",
      "Collaborated with UI designers to implement dynamic user interfaces",
      "Integrated sound systems and worked closely with sound designers using Wwise",
    ],
  },
  {
    title: "Junior Unity Developer",
    company_name: "DreamStorm",
    icon: dreamstorm,
    iconBg: "#E6DEDD",
    date: "June - August 2022",
    points: [
      "Implemented and extended gameplay features in Unity (2D and 3D) using C#",
      "Developed UI systems based on Figma designs",
      "Integrated server-side functionality and database communication",
      "Created moderator tools with access restrictions",
    ],
  },
  {
    title: "Junior Full-stack Developer",
    company_name: "OmSphere",
    icon: OmSphere,
    iconBg: "#383E56",
    date: "July 2021 – January 2022",
    points: [
      "Built and debugged web functionalities in PHP and JavaScript",
      "Worked with MySQL databases for backend operations",
      "Encoded HTML/CSS templates for responsive frontend",
      "Conducted bug fixing and code reviews",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sebastian's technical skills and creativity in game development are exceptional. His work on Underground Garage exceeded our expectations.",
    name: "Michał Kowalski",
    designation: "Lead Developer",
    company: "BeardedBrothers",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Working with Sebastian was a pleasure. His Unity skills and ability to implement complex features quickly made him a valuable team member.",
    name: "Anna Nowak",
    designation: "Project Manager",
    company: "DreamStorm",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Sebastian demonstrated excellent full-stack development skills during his time with us. His PHP and JavaScript work was clean and efficient.",
    name: "Tomasz Wiśniewski",
    designation: "CTO",
    company: "OmSphere",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Underground Garage",
    description:
      "Car mechanic simulator game developed in Unreal Engine 5. Features realistic car repair mechanics, painting system, and garage management.",
    tags: [
      {
        name: "unrealengine",
        color: "blue-text-gradient",
      },
      {
        name: "blueprints",
        color: "green-text-gradient",
      },
      {
        name: "cpp",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://store.steampowered.com/app/your-game-id/",
  },
  {
    name: "Unity Mobile Game",
    description:
      "Mobile game application developed in Unity with server integration, featuring multiplayer functionality and real-time data synchronization.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Web Portfolio",
    description:
      "Interactive 3D portfolio website built with Three.js and React, showcasing creative web development and 3D visualization skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "webgl",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };