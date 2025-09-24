// Dhvanil Pansuriya's Complete Portfolio Data

export const personalInfo = {
  name: "Dhvanil Pansuriya",
  image: require("../assets/images/dhvanil_pansuriya.png"), // You'll need to add this image
  resume: require("../assets/doc/Dhvanil_Pansuriya.pdf"), // You'll need to add this resume
  title: "React & Node.js Developer",
  subtitle: "MERN Stack Development Specialist",
  email: "dhvanil.p@ephoenixsolutions.com",
  phone: "+91 8799020150",
  location: "Ahmadabad, Gujarat, India",
  objective:
    "Passionate MERN stack developer with hands-on experience in building real-time applications and web solutions. Dedicated to creating efficient, scalable applications while continuously learning and adapting to new technologies.",
  education: "B.Sc. IT from Parul University (2022-2025) with CGPA: 8.56",
  socialLinks: {
    github: "https://github.com/Dhvanil-Pansuriya/",
    linkedin: "https://www.linkedin.com/in/dhvanil-pansuriya",
    leetcode: "https://leetcode.com/u/DhvanilPansuriya/",
    hackerrank: "https://www.hackerrank.com/profile/dhvanilpansuriy1",
  },
};

export const skills = {
  languages: ["Java (DSA)", "C", "PHP", "JavaScript", "HTML", "CSS"],
  frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
  ],
    databases: ["MongoDB", "MySQL", "Snowflake"],
    tools: ["Git", "GitHub", "GitLab", "Bitbucket", "VS Code", "Vercel", "Postman"],
  others: [
    "MERN Stack Development",
    "REST APIs",
    "Socket.IO",
    "Real-time Applications",
    "Web Scraping (Puppeteer)",
    "Responsive Design",
    "Version Control",
    "Deployment",
  ],
};

export const experiences = [
  {
    organization: "ePhoenix Solutions",
    designation: "React & Node.js Developer Intern",
    duration: "December 2023 - Present",
    location: "Ahmadabad, Gujarat, India",
    description:
      "Worked on MERN stack development with full focus on building and learning through real-time projects. Collaborated with senior developers on live client projects.",
    achievements: [
      "Worked on MERN stack development (MongoDB, Express.js, React.js, Node.js)",
      "Collaborated with senior developers on live client projects",
      "Implemented features like API integration, authentication, CRUD operations",
      "Gained experience in state management in React applications",
      "Improved problem-solving and debugging skills through real production-level challenges",
      "Learned team collaboration tools (Git, GitHub, GitLab, Bitbucket)",
      "Gained strong exposure to end-to-end web application development from design to deployment",
    ],
  },
];

export const projects = [
  {
    name: "Code Sharing Platform",
    description:
      "This is my collage first project in this i built a code-sharing platform in PHP for writing, editing, and sharing HTML, CSS, and JavaScript snippets with real-time live preview functionality.",
    features: [
      "Code editor for HTML, CSS, and JavaScript",
      "Real-time live preview of code execution",
      "Code snippet sharing and collaboration",
      "Syntax highlighting and code formatting",
      "Intuitive UI for easy collaboration",
      "Save and manage code snippets",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhvanil-Pansuriya/CSP",
  },
  {
    name: "Chat-Horizon",
    description:
      "Developed Chat Horizon (MERN), a real-time chat application enabling users to connect with registered members using Socket.IO with multilingual conversation support.",
    features: [
      "Real-time messaging with Socket.IO",
      "User authentication and registration",
      "Profile management and updates",
      "Translation option for multilingual conversations",
      "User-friendly interface for smooth communication",
      "Online/offline status indicators",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "JWT Authentication",
    ],
    github: "https://github.com/Dhvanil-Pansuriya/ChatHorizon",
  },
  {
    name: "Health Stream",
    description:
      "Developed a healthcare appointment system using PHP & MySQL where patients can book appointments with doctors through a real-time doctor panel.",
    features: [
      "Patient appointment booking system",
      "Real-time doctor panel for appointment tracking",
      "Paperless appointment management",
      "Doctor availability management",
      "Patient history and records",
      "Enhanced user experience for both patients and doctors",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhvanil-Pansuriya/HealthStream",
  },
  {
    name: "Element Engineering",
    description:
      "Developed a corporate website for showcasing engineering services and projects with responsive, modern design using React.js and Tailwind CSS.",
    features: [
      "Responsive corporate website design",
      "Modern UI with React.js and Tailwind CSS",
      "Service and project showcasing",
      "Contact forms and business information",
      "High performance and availability",
      "Mobile-responsive design",
      "EmailJs integration for appointment + inquiries",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    website: "https://element-engineering.vercel.app/",
  },
  {
    name: "HRF Incubation Center Website",
    description:
      "Built a professional website to represent HRFIC's offerings and services using React.js and Tailwind CSS with clean UI and smooth navigation.",
    features: [
      "Professional business website",
      "Clean UI with smooth navigation",
      "Service and offering presentation",
      "Performance optimized",
      "Mobile responsive design",
      "Modern design patterns",
      "EmailJs integration for inquiries",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    website: "https://www.hrfic.in/home",
  },
  {
    name: "Pleasantree Project (Web Scraping & Data Storage)",
    description:
      "Worked on web scraping for the metrc.com website to extract relevant business data using Node.js with Puppeteer and stored data in SQL databases and Snowflake.",
    features: [
      "Automated web scraping with Puppeteer",
      "Business data extraction from websites",
      "Data storage in SQL databases",
      "Snowflake integration for scalable data storage",
      "Data processing and analysis",
      "Automated extraction processes",
    ],
    technologies: ["Node.js", "Puppeteer", "SQL", "Snowflake", "JavaScript", "Express.js"],
  },
  {
    name: "Doolen Training Video App",
    description:
      "Contributed to video training platform functionality with automatic scheduled notifications and video watch logic for progress tracking.",
    features: [
      "Video training platform functionality",
      "Automatic scheduled notifications for engagement",
      "Video watch logic for progress tracking",
      "User experience optimization",
      "Training progress analytics",
      "Notification management system",
    ],
    technologies: ["React.js", "Node.js", "JavaScript", "Notification APIs"],
    website: "https://training.getdoolen.com/"
  },
];

export const certificates = [
  {
    name: "Complete Java Course",
    issuer: "NPTEL by IIT Kharagpur",
    year: "2023",
    description:
      "Comprehensive Java programming course covering core concepts and advanced topics",
  },
  {
    name: "Web Design and Hosting",
    issuer: "Parul University",
    year: "2022",
    description:
      "Course covering web design principles and hosting technologies",
  },
];

export const achievements = [
  {
    title: "Qualified in Core Java Exam",
    issuer: "NPTEL",
    year: "2023",
    description:
      "Successfully qualified in the Core Java examination conducted by NPTEL",
  },
  {
    title: "Coding Problem Solver",
    description: "Solved 110+ coding problems on LeetCode and HackerRank",
    platforms: [
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/DhvanilPansuriya/",
        problems: "110+",
      },
      {
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/dhvanilpansuriy1",
        problems: "Various challenges",
      },
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. IT",
    institution: "Parul University, Vadodara",
    duration: "2022 - 2025",
    grade: "CGPA: 8.56",
    description:
      "Bachelor of Science in Information Technology with focus on software development, web technologies, and computer science fundamentals.",
  },
  {
    degree: "XII (GSEB)",
    institution: "DEV International School, Junagadh",
    duration: "2022",
    grade: "60.76%",
    description:
      "Higher secondary education with science stream focusing on mathematics and computer science.",
  },
  {
    degree: "X (GSEB)",
    institution: "Tapovan Vidhya Sankul, Junagadh",
    duration: "2020",
    grade: "71.83%",
    description:
      "Secondary education with strong foundation in core subjects including mathematics and science.",
  },
];

export const interests = [
  "MERN Stack Development",
  "Real-time Applications",
  "Web Scraping and Data Processing",
  "Problem Solving (DSA)",
  "Modern Web Technologies",
  "API Development and Integration",
  "Database Design and Optimization",
  "Learning New Technologies",
];

export const hobbies = [
  "Playing Cricket",
  "Playing Volleyball",
  "Playing Chess",
  "Crafting (Origami)",
  "Exploring new technologies in different domains",
];

// Soft skills
export const softSkills = [
  "Writing",
  "Listening",
  "Team Collaboration",
  "Problem Solving",
  "Communication",
  "Adaptability",
];
