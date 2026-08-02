export const siteConfig = {
  name: "Rohan Donerao",
  role: "Flutter Developer",
  roles: [
    "Flutter Developer",
    "Android Developer",
    "Data Analyst",
    "Cloud Enthusiast",
  ],
  tagline:
    "Computer Engineering student building real-time Flutter apps and data-driven solutions on Firebase, Power BI, and Azure.",
  location: "Pune, India",
  phone: "+91 8830815312",
  email: "rohandonerao24@gmail.com",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/profile.png",
  social: {
    github: "https://github.com/rohandonerao",
    linkedin: "https://www.linkedin.com/in/rohan-donerao-053520283",
  },
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const aboutStats = [
  { label: "Internships Completed", value: "2" },
  { label: "Projects Built", value: "3+" },
  { label: "Certifications", value: "1" },
  { label: "Years Learning", value: "4+" },
];

export const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Android (Java)", level: 82 },
      { name: "Firebase", level: 88 },
    ],
  },
  {
    title: "Data & Cloud",
    skills: [
      { name: "Microsoft Azure", level: 78 },
      { name: "Power BI", level: 76 },
      { name: "Data Analysis", level: 75 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    title: "Core Strengths",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 88 },
      { name: "Communication", level: 85 },
      { name: "UI/UX Design", level: 78 },
    ],
  },
];

export const projects = [
  {
    title: "Cyber-X",
    description:
      "A multi-functional Flutter mobile app built to improve user communication and productivity — with spam call & message filtering, an AI-powered chatbot assistant, emergency SOS with real-time location sharing, and intelligent contact management. Powered by a Firebase backend (Firestore, Cloud Messaging, Analytics) for real-time, scalable performance.",
    tags: ["Flutter", "Dart", "Firebase", "Cloud Messaging"],
    category: "Mobile Apps",
    github: "https://github.com/rohandonerao",
    featured: true,
  },
  {
    title: "TaskFlow",
    description:
      "A Flutter productivity app for organizing daily tasks with reminders, categories, and offline-first sync powered by Firebase Firestore.",
    tags: ["Flutter", "Firebase", "Provider"],
    category: "Mobile Apps",
    github: "https://github.com/rohandonerao",
    featured: false,
  },
  {
    title: "Insight Dashboard",
    description:
      "An interactive Power BI dashboard on Azure that transforms raw business data into actionable visual insights for faster, data-driven decisions.",
    tags: ["Power BI", "Microsoft Azure", "Data Analysis"],
    category: "Data & Cloud",
    github: "https://github.com/rohandonerao",
    featured: false,
  },
];

export const projectCategories = ["All", "Mobile Apps", "Data & Cloud"];

export const experience = [
  {
    type: "work",
    title: "Data Analytics Intern",
    organization: "Kasnet Technologies Pvt. Ltd., Pune, India",
    period: "Jan 2026 — Feb 2026",
    description:
      "Performed data analysis and built interactive dashboards using Power BI and Azure, converting raw data into actionable insights. Supported IT projects through data-driven approaches, improving reporting, visualization, and decision-making.",
  },
  {
    type: "work",
    title: "Flutter Developer Intern",
    organization: "Dream Webbies Pvt. Ltd., Nanded, India",
    period: "Jun 2023 — Jul 2023",
    description:
      "Contributed to software development by analyzing problems, building practical solutions, and preparing technical reports and presentations. Gained hands-on experience with real-world workflows, teamwork, and effective communication.",
  },
  {
    type: "education",
    title: "Bachelor of Engineering, Computer Engineering",
    organization: "Smt. Kashibai Navale College of Engineering, Pune, India",
    period: "Aug 2024 — Jun 2027",
    description:
      "Pursuing a B.E. in Computer Engineering, deepening expertise in software development, data structures, and cloud computing.",
  },
  {
    type: "education",
    title: "Diploma in Computer Engineering",
    organization: "Gramin Technical & Management Campus, Nanded, India",
    period: "Aug 2021 — Jun 2024",
    description:
      "Built a strong foundation in computer engineering fundamentals, programming, and software design principles.",
  },
];
