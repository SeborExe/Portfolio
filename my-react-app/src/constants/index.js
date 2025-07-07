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
  UE5Unity,
  bbg,
  dreamstorm,
  OmSphere,
  carrent,
  jobit,
  tripguide,
  threejs,
  steam
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
    title: "Unreal Engine Developer",
    icon: web,
  },
  {
    title: "Unity Developer",
    icon: mobile,
  },
  {
    title: "Game Programmer",
    icon: backend,
  },
  {
    title: "Full-stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Blueprints",
    icon: threejs,
  },
  {
    name: "PHP",
    icon: typescript,
  },
  {
    name: "Unity",
    icon: redux,
  },
  {
    name: "MySQL",
    icon: tailwind,
  },
  {
    name: "Wwise",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "C++",
    icon: html,
  },
  {
    name: "C#",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Unreal Engine",
    icon: reactjs,
  },
  {
    name: "HTML/CSS",
    icon: mongodb,
  },
  {
    name: "Shader Graph",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Unreal Engine Developer",
    company_name: "BeardedBrothers",
    icon: bbg,
    iconBg: "#383E56",
    date: "June 2023 - July 2025",
    points: [
      "Developed and expanded core game mechanics including Mechanic Mode, Painting Mode, and Garage Manager for Underground Garage.",
      "Built mission system and project-wide state machine architecture.",
      "Collaborated with UI designers to implement dynamic user interfaces.",
      "Integrated sound systems and worked closely with sound designers using Wwise.",
      "Added full gamepad support and rebuilt plugins to suit project needs.",
      "Created editor tools and cooperated with QA department.",
    ],
  },
  {
    title: "Junior Unity Developer",
    company_name: "DreamStorm",
    icon: dreamstorm,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Implemented and extended gameplay features in Unity (2D and 3D) using C#.",
      "Developed UI systems based on Figma designs.",
      "Integrated server-side functionality and database communication.",
      "Created moderator tools with access restrictions.",
      "Conducted bug fixing and code reviews.",
    ],
  },
  {
    title: "Junior Full-stack Developer",
    company_name: "OmSphere",
    icon: OmSphere,
    iconBg: "#383E56",
    date: "July 2021 - January 2022",
    points: [
      "Built and debugged web functionalities in PHP and JavaScript.",
      "Worked with MySQL databases for backend operations.",
      "Encoded HTML/CSS templates for responsive frontend.",
      "Collaborated with team to deliver web solutions.",
    ],
  },
  {
    title: "Personal Projects",
    company_name: "Independent",
    icon: UE5Unity,
    iconBg: "#E6DEDD",
    date: "May 2021 - Present",
    points: [
      "Created over 50 games and prototypes using Unreal Engine 5 and Unity.",
      "Developed projects available on GitHub, Google Play, and personal portfolio.",
      "Continuously expanding skills and exploring new gameplay concepts.",
      "Building portfolio of diverse game development projects.",
    ],
  },
];

const projects = [
  {
    name: "Underground Garage",
    description:
      "is a comprehensive automotive simulation game developed in Unreal Engine that combines realistic car mechanic gameplay with open-world exploration and narrative depth. This immersive experience blends technical car restoration with dynamic racing and customization elements, all wrapped in a compelling dark storyline.",
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
        name: "wwise",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://store.steampowered.com/app/1452250/Underground_Garage/",
    icon: steam,
  },
  {
    name: "Dungeon Gunner",
    description:
      "is a Unity-based roguelike dungeon crawler featuring intense action gameplay and high replayability. The game combines procedural dungeon generation with extensive weapon variety, diverse enemy types, and multiple playable characters, each offering unique gameplay experiences..",
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
        name: "2d",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SeborExe/Gunner",
  },
  {
    name: "Diabolo",
    description:
      "is a Unity-based action RPG featuring fast-paced hack and slash combat with deep character progression systems. The game delivers an immersive fantasy experience through diverse combat mechanics, extensive spell systems, and challenging enemy encounters.",
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
        name: "3d",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SeborExe/Diabolo",
  },
];

export { services, technologies, experiences, projects };