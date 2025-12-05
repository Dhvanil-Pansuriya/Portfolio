// Dhvanil Pansuriya's Complete Portfolio Data

export const personalInfo = {
  name: "Dhvanil Pansuriya",
  image: require("../assets/images/dhvanil_pansuriya.png"), // You'll need to add this image
  resume: require("../assets/doc/Dhvanil_Pansuriya.pdf"), // You'll need to add this resume
  title: "React & Node.js Developer",
  subtitle: "MERN Stack Development Specialist",
  email: "dhvanil.p@ephoenixsolutions.com",
  phone: "+91 99242 74295",
  location: "Ahmadabad, Gujarat, India",
  objective:
    "Passionate MERN stack developer with hands-on experience in building real-time applications and web solutions. Dedicated to creating efficient, scalable applications while continuously learning and adapting to new technologies.",
  education: "B.Sc. IT from Parul University (2022-2025) with CGPA: 8.56",
  socialLinks: {
    github: "https://github.com/Dhvanil-Pansuriya/",
    linkedin: "https://www.linkedin.com/in/dhvanil-pansuriya",
    leetcode: "https://leetcode.com/u/DhvanilPansuriya/",
    hackerrank: "https://www.hackerrank.com/profile/dhvanilpansuriy1",
    whatsapp:
      "https://wa.me/+919924274295?text=Hello%20Dhvanil%2C%20I%E2%80%99m%20contacting%20you%20through%20your%20portfolio%20website.%20I%20would%20like%20to%20discuss%20my%20project%20requirement.",
  },
  coreStrengths: [
    {
      title: "MERN Stack Expertise",
      description:
        "Skilled in building full-stack applications using React, Node.js, Express.js, and MongoDB.",
    },
    {
      title: "Real-Time Application Development",
      description:
        "Experience developing live chat, notifications, and real-time features using Socket.IO.",
    },
    {
      title: "API & Backend Development",
      description:
        "Strong in designing REST APIs, authentication systems, and scalable backend logic.",
    },
    {
      title: "Frontend Design & Optimization",
      description:
        "Builds responsive, user-friendly interfaces using React.js, Tailwind CSS, and modern UI patterns.",
    },
    {
      title: "Problem Solving & Debugging",
      description:
        "Quick at identifying issues, optimizing performance, and delivering reliable solutions.",
    },
  ],
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
  tools: [
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "VS Code",
    "Vercel",
    "Postman",
  ],
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
    duration: "July 2023 - Present",
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
    name: "Saatphere - Wedding Management Platform",
    description:
      "A full-stack wedding management platform built using the MERN stack with real-time updates, multi-role access control, and comprehensive event management features.",
    features: [
      "Multi-role system: Admin, Organizer, Individual, and Staff",
      "Admins, Organizers, and Individuals can create and manage wedding events",
      "Stripe payment gateway for subscription plans with upgrade/downgrade options",
      "Venue, Caterer, Decorator, Photographer, Temple, Priest, and Music System selection",
      "Groom & Bride details, Ceremony setup, and Guest management",
      "RSVP tracking with guest invitation management",
      "Organizer-specific staff management system for assigning and tracking tasks",
      "Dedicated staff panel with task dashboard and progress tracking",
      "Permission-based access control (view, add, edit, delete)",
      "Responsive, user-friendly design optimized for all roles",
      "Scalable backend with efficient API architecture and WebSocket real-time updates",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "WebSocket",
      "Stripe API",
      "Tailwind CSS",
      "JavaScript",
      "Swagger",
    ],
    website: "https://saatphere.ai/",
  },
  {
    name: "GetDoolen Training",
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
    website: "https://training.getdoolen.com/",
  },
  {
    name: "Global Pump - Pump Selection & Performance Analysis",
    description:
      "A pump selection and performance analysis application that dynamically filters pumps based on engineering parameters and displays performance graphs. The system integrates SOAP 1.2 APIs, processes XML data, and delivers accurate pump selection results.",
    features: [
      "Dynamic Pump Filtering: Users enter parameters like flow, head, and efficiency, and the system filters pumps using interdependent backend logic.",
      "Performance Graphs: Displays pump curves and operating points using processed API response data.",
      "SOAP 1.2 API Integration: Backend implementation of SOAP 1.2 services for pump catalogs, selection results, and performance curves.",
      "XML to JSON Transformation: Parses large XML responses, converts them into structured JSON, and applies computation logic.",
      "Optimized Backend Workflow: Ensures fast, accurate pump matching with caching and clean data processing.",
      "Seamless User Experience Support: Backend designed to provide smooth data flow for mobile UI interactions.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React Native",
      "TypeScript",
      "Axios",
      "SOAP 1.2",
      "XML Parsing",
      "Caching",
      "Swagger",
    ],
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
    technologies: [
      "Node.js",
      "Puppeteer",
      "SQL",
      "Snowflake",
      "JavaScript",
      "Express.js",
    ],
  },
  {
    name: "HRF Incubation Center",
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
