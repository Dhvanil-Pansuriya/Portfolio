// Deep Surti's Complete Portfolio Data

export const personalInfo = {
  name: "Deep Surti",
  image: require("../assets/images/deep_surti.png"), // You'll need to add this image
  resume: require("../assets/doc/Deep_Surti.pdf"), // You'll need to add this resume
  title: "Mobile Developer",
  subtitle: "Android & Cross-Platform Development Specialist",
  email: "deepsurti23@gmail.com",
  phone: "+91 81603 45026",
  location: "Ahmedabad, Gujarat",
  objective:
    "I have hands-on experience as a Mobile Application Developer, working on Android app development using Kotlin and Jetpack Compose, as well as cross-platform apps using React Native. My role involved designing user-friendly interfaces, developing app features, integrating APIs, and ensuring smooth app performance. Currently, I am learning Kotlin Multiplatform to build apps that work on both Android and iOS with a shared codebase.",
  education:
    "Bachelor of Engineering from L J University (2021-2025) with CGPA: 7.0/10.0",
  socialLinks: {
    github: "https://github.com/deepsurti", // You can update this with actual links
    linkedin: "https://www.linkedin.com/in/deep-surti-24227928b",
  },
};

export const skills = {
  languages: ["Kotlin", "JavaScript", "HTML", "CSS"],
  frameworks: ["Jetpack Compose", "React Native", "XML"],
  tools: ["Android Studio", "Visual Studio Code", "Git", "Github", "Bitbucket", "Postman"],
  databases: ["SQLite", "Room Database", "Firebase"],
  others: [
    "Mobile App Development",
    "Cross-Platform Development",
    "Kotlin Multiplatform (Learning)",
    "API Integration",
    "UI/UX Design",
    "Real-time Communication",
    "Offline Data Sync",
    "In-App Subscriptions",
    "Third-party SDK Integration",
  ],
};

export const experiences = [
  {
    organization: "ePhoenix Solutions",
    designation: "Mobile Developer",
    duration: "Feb 2024 - Present",
    location: "Ahmedabad, Gujarat",
    description:
      "Developed and maintained mobile applications using Kotlin and React Native for Android platforms. Designed UI components and collaborated with backend teams for seamless app performance.",
    achievements: [
      "Developed and maintained mobile applications using Kotlin and React Native for Android platforms",
      "Designed UI components using Jetpack Compose and XML for scalable and responsive app interfaces",
      "Collaborated with backend teams to integrate APIs, ensuring smooth data flow and app performance",
      "Implemented real-time features including chat and video calling using third-party SDKs",
      "Created barcode scanning integration for inventory management applications",
      "Developed offline data collection and syncing capabilities",
      "Integrated secure user authentication and profile management systems",
    ],
  },
];

export const projects = [
  {
    name: "SIGE-EKL (React Native)",
    description:
      "Developed a barcode-based inventory management application for bookstores with real-time stock updates and clean, minimal UI for ease of use.",
    features: [
      "Barcode scanning integration for inventory tracking",
      "Real-time stock updates and management",
      "Clean and minimal UI design for ease of use",
      "Inventory search and filtering capabilities",
      "Stock level alerts and notifications",
      "Multi-store inventory management",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Barcode Scanner",
      "Firebase",
      "Real-time Database",
      "Redux",
    ],
  },
  {
    name: "Dating App (Kotlin)",
    description:
      "Engineered a premium dating platform with in-app subscriptions, live communication features, secure user authentication, and real-time chat and video calling.",
    features: [
      "Premium dating platform with subscription model",
      "In-app subscriptions and payment integration",
      "Secure user authentication and profile management",
      "Real-time chat messaging system",
      "Video calling features using third-party SDKs",
      "User matching algorithms",
      "Profile verification and safety features",
    ],
    technologies: [
      "Kotlin",
      "XML",
      "Android SDK",
      "Firebase Authentication",
      "Real-time Database",
      "Video SDK",
      "Payment Gateway",
    ],
  },
  {
    name: "Doolen - Training Video App (React Native)",
    description:
    "Built a personalized training video platform with custom content queue system tailored to user preferences and interactive quizzes with score tracking.",
    features: [
      "Personalized training video platform",
      "Custom content queue system based on user preferences",
      "Interactive quizzes with score tracking",
      "Learning progress analytics",
      "Video streaming and playback controls",
      "User profile and learning history",
      "Offline video download capability",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Video Player",
      "Firebase",
      "Redux",
      "AsyncStorage",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.doolen.trainingplatform"
  },
  {
    name: "School Survey App (Kotlin)",
    description:
      "Developed a survey app for collecting structured student feedback with dynamic survey forms, conditional questions, and offline data collection capabilities.",
    features: [
      "Dynamic survey forms with conditional questions",
      "Structured student feedback collection",
      "Offline data collection and storage",
      "Secure data syncing when online",
      "Survey analytics and reporting",
      "Multi-language support",
      "Admin dashboard for survey management",
    ],
    technologies: [
      "Kotlin",
      "Android SDK",
      "Room Database",
      "SQLite",
      "Retrofit",
      "MVVM Architecture",
    ],
  },
  {
    name: "CBA (React Native)",
    description:
      "Hotel booking application with partial development completed, focusing on exploring hotels and booking options with smooth navigation and UI.",
    features: [
      "Explore hotels with search and filter options",
      "View hotel details and availability",
      "Partial booking flow implemented",
      "Clean and intuitive UI for easy navigation",
      "Future scope for full booking integration",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "React Navigation",
      "SQLite Database (for local data storage)",
      "API Integration (for hotel listings)",
    ],
  },
  {
    name: "Global Pump (React Native)",
    description:
      "Pump calculation application designed for managing pump data and calculations efficiently, with local storage and offline capabilities.",
    features: [
      "Pump calculation based on user input",
      "Save and retrieve calculation data locally",
      "Offline functionality with SQLite",
      "Clean and responsive UI",
      "Future scope for real-time data integration",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "SQLite Database (for local saving)",
      "Redux (optional for state management)",
      "Custom calculation logic",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "L J University",
    duration: "2021 - 2025",
    grade: "CGPA: 7.0/10.0",
    description:
      "Bachelor of Engineering with focus on software development, mobile technologies, and computer science fundamentals.",
  },
  {
    degree: "Higher Secondary School",
    institution: "Jay Somnath School",
    duration: "2020 - 2021",
    grade: "70%",
    description:
      "Higher secondary education with science stream focusing on mathematics and computer science.",
  },
];

export const interests = [
  "Mobile App Development",
  "Cross-Platform Development",
  "Kotlin Multiplatform",
  "Android Development",
  "React Native",
  "Jetpack Compose",
  "UI/UX Design",
  "API Integration",
  "Real-time Applications",
  "Learning New Technologies",
];

export const languages = ["Hindi", "English", "Gujarati"];

export const certifications = [
  {
    name: "Android Development",
    issuer: "Self-Learning",
    year: "2024",
    description:
      "Comprehensive Android development using Kotlin and Jetpack Compose",
  },
  {
    name: "React Native Development",
    issuer: "Self-Learning",
    year: "2024",
    description: "Cross-platform mobile app development using React Native",
  },
];

export const achievements = [
  {
    title: "Mobile App Developer",
    description:
      "Successfully developed and deployed multiple mobile applications",
    year: "2024",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "Gained expertise in both native Android and React Native development",
    year: "2024",
  },
];

// Technical Skills Categories
export const technicalSkills = {
  mobileAppDevelopment: [
    "Kotlin",
    "Jetpack Compose",
    "React Native",
    "Android SDK",
    "XML Layouts",
  ],
  crossPlatformDevelopment: [
    "React Native",
    "Kotlin Multiplatform (Learning)",
    "JavaScript",
  ],
  frontendDevelopment: ["HTML", "CSS", "JavaScript (Basics)"],
  toolsAndPlatforms: [
    "Android Studio",
    "Visual Studio Code",
    "Git",
    "Firebase",
    "Redux",
  ],
};
