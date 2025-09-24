export const personalInfo = {
  name: "Pinal Ramoliya",
  image: require("../assets/images/pinal_ramoliya.png"),
  resume: require("../assets/doc/PHP_Resume_Pinal_Ramoliya_Resume.pdf"),
  title: "Development Lead",
  subtitle: "Complex Problem-Solver with Analytical Mindset",
  email: "pinaltkothiya@gmail.com",
  phone: "+91 (7622905891)",
  location: "Ahmedabad, Gujarat",
  objective:
    "Complex problem-solver with analytical and driven mindset with experience of 11+ years. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.",
  education:
    "B.E (Computer Engineering) from Government Engineering College - Rajkot with 7.11 CPI (2009-2013)",
  socialLinks: {
    gitlab: "https://gitlab.com/pinaltkothiya",
    linkedin: "https://www.linkedin.com/in/pinal-kothiya-a6b61014a/",
  },
};

export const skills = {
  languages: ["PHP", "HTML", "JavaScript", "CSS"],
  frameworks: ["Laravel", "Yii2", "Vue", "React", "Node.js", "jQuery"],
  tools: ["Git", "Apache JMeter"],
  databases: ["MySQL", "MongoDB", "Schema Design"],
  others: [
    "Project Management",
    "Website Performance Enhancement",
    "Website Load Testing",
  ],
};

export const experiences = [
  {
    organization: "E2logy Software Solutions Pvt Ltd",
    designation: "Development Lead",
    duration: "September 2017 - Current",
    location: "Ahmedabad, Gujarat",
    description:
      "Leading development teams and managing complex projects while incorporating cybersecurity priorities and optimizing performance within multi-project environments.",
    achievements: [
      "Incorporated cybersecurity priorities into development projects to reduce potential liability and increase customer security",
      "Created long-term development plans to optimize performance within multi-project and multi-team environments",
      "Achieved prescribed milestones for deliverables to cultivate return patronage and exceptional historical performance metrics",
      "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements",
      "Estimated work hours and tracked progress using Scrum methodology",
    ],
  },
  {
    organization: "Samcom Technobrains",
    designation: "Web Developer",
    duration: "May 2016 - August 2017",
    location: "Ahmedabad, Gujarat",
    description:
      "Developed web applications and enhanced technical skills in various web technologies.",
    achievements: [
      "Developed responsive web applications",
      "Worked with modern web technologies",
      "Collaborated with cross-functional teams",
      "Delivered projects on time and within budget",
    ],
  },
  {
    organization: "Bitlogic Infoway PVT. LTD.",
    designation: "Web Developer",
    duration: "July 2014 - March 2016",
    location: "Rajkot, Gujarat",
    description:
      "Focused on web development projects and gained expertise in various programming languages and frameworks.",
    achievements: [
      "Built dynamic web applications",
      "Implemented database solutions",
      "Enhanced user experience through frontend optimization",
      "Maintained code quality and documentation",
    ],
  },
  {
    organization: "FitZen Technologies Pvt Ltd",
    designation: "PHP Web Developer",
    duration: "June 2013 - June 2014",
    location: "Rajkot, Gujarat",
    description:
      "Started career as PHP developer, working on web applications and learning industry best practices.",
    achievements: [
      "Developed PHP-based web applications",
      "Learned industry standards and best practices",
      "Collaborated with senior developers",
      "Built foundation in web development",
    ],
  },
];

export const projects = [
  {
    name: "Iplusliving",
    description:
      "Managed and developed new features for a comprehensive building management system with integrated hardware control for cameras, lifts, and amenity doors. Successfully running for 7+ years with full client satisfaction.",
    features: [
      "Building management system integration",
      "Hardware control for cameras and lifts",
      "Amenity door management",
      "Real-time monitoring and control",
      "User access management",
      "Maintenance scheduling and tracking",
    ],
    technologies: [
      "Yii2",
      "PHP",
      "MySQL",
      "JavaScript",
      "Hardware Integration",
    ],
    duration: "7+ years",
    status: "Active",
  },
  {
    name: "Wetruss",
    description:
      "Developed M2M shopping portal that manages merchant product stock and orders with a modern React frontend powered by Laravel API.",
    features: [
      "Merchant product stock management",
      "Order processing and tracking",
      "Real-time inventory updates",
      "API-driven architecture",
      "Responsive user interface",
      "Multi-merchant support",
    ],
    technologies: ["React", "Laravel", "PHP", "MySQL", "REST API"],
  },
  {
    name: "ChildCareForms",
    description:
      "Simplified online childcare registration and enrollment platform that eliminates manual paperwork. Built with Vue.js and WebViewer JavaScript PDFTron library for dynamic PDF form generation.",
    features: [
      "Online registration and enrollment",
      "Dynamic PDF form generation",
      "Data point binding and markup",
      "Paperless workflow",
      "Parent portal for form submission",
      "Admin dashboard for form management",
    ],
    technologies: ["Vue.js", "PDFTron WebViewer", "JavaScript", "PHP", "MySQL"],
  },
  {
    name: "Gardens By The Bay",
    description:
      "Built a comprehensive ticket management system for The Gardens attraction, handling visitor bookings and attraction management.",
    features: [
      "Ticket booking and management",
      "Visitor tracking and analytics",
      "Attraction scheduling",
      "Payment processing",
      "Reporting and analytics",
      "Customer support integration",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Payment Gateway"],
  },
  {
    name: "Tours4fun",
    description:
      "Comprehensive tour management platform overseeing order and product management, generating sales reports, customer management, and promotional page creation.",
    features: [
      "Order and product management",
      "Monthly and yearly sales reports",
      "Customer relationship management",
      "Newsletter generation",
      "Promotional page creation",
      "External provider integration (Globus API)",
    ],
    technologies: [
      "Yii2",
      "MySQL",
      "jQuery",
      "API Integration",
      "Reporting Tools",
    ],
  },
  {
    name: "Digital Card Printing Portal",
    description:
      "Interactive platform allowing users to design and create custom business cards using Fabric.js Canvas Library with real-time preview and editing capabilities.",
    features: [
      "Interactive card design interface",
      "Real-time preview and editing",
      "Template library",
      "Custom text and image upload",
      "Print-ready file generation",
      "User account management",
    ],
    technologies: ["Yii2", "Fabric.js", "JavaScript", "Canvas API", "PHP"],
  },
  {
    name: "ShopLetsGo",
    description:
      "E-commerce platform featuring flash deals and reward points system to enhance customer engagement and retention.",
    features: [
      "Flash deals and time-limited offers",
      "Reward points system",
      "Customer loyalty program",
      "Product catalog management",
      "Shopping cart and checkout",
      "User account and order history",
    ],
    technologies: ["Yii2", "jQuery", "PHP", "MySQL", "Payment Integration"],
  },
  {
    name: "The MDLINK",
    description:
      "Healthcare platform enabling patients to book appointments with doctors, featuring Twilio API integration for communication and notifications.",
    features: [
      "Doctor appointment booking",
      "Patient management system",
      "SMS and call notifications",
      "Doctor availability management",
      "Appointment reminders",
      "Medical record integration",
    ],
    technologies: ["Laravel", "jQuery", "Twilio API", "PHP", "MySQL"],
  },
  {
    name: "GetDoolen - Training Video App",
    description:
      "Developed a cross-platform training video application using React Native, enabling users to sign up, log in, and access a wide range of educational video content. The app includes features like personalized queues, interactive quizzes, and complete account management to enhance learning and user engagement.",
    features: [
      "User authentication (Login & Signup)",
      "Video streaming and playback",
      "Create and manage personalized video queues",
      "Interactive quiz modules after each training session",
      "Push notifications for new content and updates",
      "Profile view and update",
      "Delete account option for data privacy",
      "Smooth and intuitive UI/UX for better user engagement",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "Firebase",
      "Node.js",
      "React Navigation",
    ],
    duration: "Ongoing",
    status: "Active",
  },
];

export const interests = [
  "Web Development Architecture",
  "Performance Optimization",
  "Team Leadership & Management",
  "Cybersecurity Implementation",
  "Database Design & Optimization",
  "API Development & Integration",
  "Agile & Scrum Methodologies",
  "Load Testing & Performance Analysis",
];

export const education = [
  {
    degree: "B.E (Computer Engineering)",
    institution: "Government Engineering College - Rajkot",
    duration: "May 2009 - May 2013",
    grade: "7.11 CPI",
    description:
      "Comprehensive computer engineering program covering software development, algorithms, database systems, and computer networks.",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Gujarat Secondary And Higher Secondary School - Nana Vadala",
    duration: "March 2008 - March 2009",
    grade: "78.20%",
    description:
      "Higher secondary education with focus on science and mathematics.",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Gujarat Secondary And Higher Secondary - Lunawada",
    duration: "March 2006 - March 2007",
    grade: "72.92%",
    description: "Secondary education with strong foundation in core subjects.",
  },
];
