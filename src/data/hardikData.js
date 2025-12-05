// Hardik Ramoliya's Complete Portfolio Data
// This file contains all data for his three sub-portfolios: Android, iOS, and React Native

// ===== PERSONAL INFORMATION =====
const basePersonalInfo = {
  name: "Hardik Ramoliya",
  image: require("../assets/images/hardik_ramoliya.png"),
  resume: require("../assets/doc/Hardik_Android_Kotlin_Resume_11_YearExp_6_Aug_2024_WCD.pdf"),
  email: "ramoliyahardik085@gmail.com",
  phone: "+91 99242 74295",
  location: "Ahmedabad, Gujarat",
  education: "B.E. (CSE) from BIT Varnama, Baroda in 2013 with 6.92 CGPA",
  socialLinks: {
    github: "https://github.com/hardikramoliya",
    x: "https://x.com/hardikramoliya",
    linkedin: "https://www.linkedin.com/in/rhardik/",
    bitbucket: "https://bitbucket.org/hardikramoliya/",
    whatsapp:
      "https://wa.me/+919924274295?text=Hello%2C%20I%E2%80%99m%20contacting%20you%20through%20your%20portfolio%20website.%20I%20would%20like%20to%20discuss%20my%20project%20requirement.",
  },
};

// ===== ANDROID PORTFOLIO =====
const androidData = {
  personalInfo: {
    ...basePersonalInfo,
    title: "Android Developer",
    subtitle: "Native Android App Specialist",
    objective:
      "As a professional Android developer, I wish to work diligently, contributing to the growth of my organization and gain knowledge and experience for my own development, hence creating a win-win situation for both of us.",
    journey:
      "My journey began with a simple curiosity for technology, long before I understood what coding really meant. From building small experiments to leading full-scale mobile app projects, every step came with challenges - long nights, failed builds, and moments where giving up felt easier. But passion kept me going. Today, I've grown from an individual developer into someone who builds solutions that impact businesses globally. I now lead ePhoenix, a team that focuses on delivering high-quality mobile and web applications. My goal is simple: create meaningful software, help clients grow, and continue evolving every single day",

    coreStrengths: [
      {
        title: "Technical Excellence",
        description:
          "Skilled in React Native, Kotlin, Swift, and backend tech like Node.js, MySQL and MongoDB.",
      },
      {
        title: "Problem-Solving & Delivery",
        description:
          "Quick at identifying issues and delivering stable, scalable solutions with strong debugging skills.",
      },
      {
        title: "Client & Project Success",
        description:
          "Focus on client needs, clear communication, and converting ideas into real, working products.",
      },
      {
        title: "Leadership & Ownership",
        description:
          "Leads end-to-end development with strong teamwork, mentoring, and full ownership mindset.",
      },
      {
        title: "Quality & Reliability",
        description:
          "Writes clean, maintainable code with attention to UI/UX and long-term app performance.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Builds high-performance cross-platform apps using React Native.",
      },
    ],
  },

  skills: {
    languages: ["Kotlin", "Java"],
    tools: ["Android Studio", "Git", "Jira"],
    frameworks: [
      "MVVM Architecture",
      "RxJava",
      "Retrofit",
      "Firebase",
      "Google Maps",
      "In-App Purchase",
      "Push Notifications (FCM)",
      "Material Design",
    ],
    databases: ["Room Database", "SQLite"],
    others: [
      "Android SDK",
      "Custom Views",
      "Bluetooth Low Energy (BLE)",
      "Beacon Technology",
      "Performance Optimization",
      "Debugging",
      "Play Store Publishing",
    ],
  },

  experiences: [
    {
      organization: "Full Time Freelancing",
      designation: "Android Developer",
      duration: "August 2019 - Current",
      description:
        "Specialized in native Android development, creating high-performance mobile applications for various clients.",
      achievements: [
        "Developed 15+ native Android applications",
        "Implemented complex features like BLE integration, real-time tracking",
        "Optimized app performance and battery usage",
        "Successfully published apps on Google Play Store",
        "Maintained 98% crash-free rate across all applications",
      ],
    },
    {
      organization: "Intuz Solutions PVT. LTD.",
      designation: "Android Developer",
      duration: "May 2017 - July 2019",
      description:
        "Worked on enterprise Android applications with focus on scalability and performance.",
      achievements: [
        "Led Android development team of 5 developers",
        "Implemented MVVM architecture across projects",
        "Reduced app loading time by 60%",
        "Introduced automated testing practices",
      ],
    },
    {
      organization: "Impero IT Services",
      designation: "Android Developer",
      duration: "Jul 2015 - April 2017",
      description:
        "Developed Android applications with focus on user experience and performance optimization.",
      achievements: [
        "Delivered 8+ successful Android applications",
        "Implemented custom UI components",
        "Optimized database queries for better performance",
        "Integrated various third-party SDKs",
      ],
    },
    {
      organization: "Horizzon Web info Pvt. Ltd.",
      designation: "Android Developer",
      duration: "Aug 2013 - June 2015",
      description:
        "Started career as Android developer, learning core Android development concepts and best practices.",
      achievements: [
        "Developed first commercial Android applications",
        "Learned Android SDK and development tools",
        "Implemented basic app features and functionality",
        "Gained experience in app deployment and maintenance",
      ],
    },
    {
      organization: "Chirayu Soft. Sol.",
      designation: "Trainee (Android Application developer)",
      duration: "May 2012 - Aug 2013",
      description:
        "Started as trainee Android developer, learning fundamentals of Android development.",
      achievements: [
        "Completed Android development training program",
        "Built first Android applications",
        "Learned Java programming and Android basics",
        "Gained hands-on experience with Android Studio",
      ],
    },
  ],

  projects: [
    {
      name: "QModi",
      description:
        "A Kotlin-based Android app for tracking drivers during goods transportation. Features real-time location tracking, route optimization, and geofencing for enhanced logistics management.",
      features: [
        "Real-time GPS tracking",
        "Route optimization algorithms",
        "Geofencing and alerts",
        "Driver performance analytics",
        "Logistics management dashboard",
        "Offline data synchronization",
      ],
      technologies: [
        "Kotlin",
        "Google Maps",
        "GPS",
        "Room Database",
        "Retrofit",
        "MVVM",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=in.csias.tcclient",
    },
    {
      name: "Frami Activity",
      description:
        "A B2B2C employee engagement platform built in Kotlin that motivates users to stay active through a gamified rewards program with activity tracking and social features.",
      features: [
        "Activity recording and tracking",
        "Gamified rewards system",
        "Social bonus points",
        "Laptop connectivity for data sync",
        "Manual activity logging",
        "Team challenges and leaderboards",
      ],
      technologies: [
        "Kotlin",
        "Room Database",
        "Retrofit",
        "Firebase",
        "MVVM",
        "Custom Views",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.framiactivity.frami",
    },
    {
      name: "MDI",
      description:
        "A comprehensive Kotlin-based enterprise management app featuring employee management, inventory tracking, attendance monitoring, and task management with reporting capabilities.",
      features: [
        "Employee management system",
        "Inventory tracking and management",
        "Attendance and performance tracking",
        "Task assignment and progress monitoring",
        "Comprehensive reporting system",
        "Data export and analytics",
      ],
      technologies: [
        "Kotlin",
        "Room Database",
        "MVVM",
        "Charts Library",
        "Retrofit",
        "Material Design",
      ],
    },
    {
      name: "MAE Support",
      description:
        "A Kotlin-based sales tracking application for employees to generate and track sales, identify prospects, and manage client relationships with comprehensive analytics.",
      features: [
        "Sales tracking and analytics",
        "Lead and prospect management",
        "Client relationship management",
        "Performance dashboards",
        "Sales report generation",
        "Target tracking and achievements",
      ],
      technologies: [
        "Kotlin",
        "Room Database",
        "Charts",
        "Retrofit",
        "MVVM",
        "Material Design",
      ],
      playStore: "https://play.google.com/store/apps/details?id=com.maesupport",
    },
    {
      name: "MDLink",
      description:
        "A Kotlin-based healthcare app for pregnant women providing comprehensive care from first week to delivery with video consultations, appointments, and medical services.",
      features: [
        "Appointment booking system",
        "Video, audio, and chat consultations (Twilio)",
        "Digital prescription management",
        "Medical product ordering",
        "Pregnancy tracking and tips",
        "Doctor-patient communication",
      ],
      technologies: [
        "Kotlin",
        "Twilio SDK",
        "Room Database",
        "Retrofit",
        "MVVM",
        "Firebase",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.mdlinkhealth",
    },
    {
      name: "Bite Customer/Cook/Driver",
      description:
        "A comprehensive food delivery ecosystem with separate Android apps for customers, cooks, and drivers, featuring order management, payment processing, and delivery tracking.",
      features: [
        "Multi-app ecosystem (Customer/Cook/Driver)",
        "Order management system",
        "Real-time order tracking",
        "Payment integration",
        "Restaurant management tools",
        "Delivery coordination system",
      ],
      technologies: [
        "Kotlin",
        "Google Maps",
        "Firebase",
        "Retrofit",
        "Room Database",
        "MVVM",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.bite.customer",
    },
    {
      name: "GrainFather",
      description:
        "An Android app for the Grainfather brewing system, making grain brewing simple and fun with recipe management, brewing process control, and step-by-step guidance.",
      features: [
        "Brewing process automation",
        "Recipe creation and management",
        "Step-by-step brewing guidance",
        "Temperature and timing control",
        "Brewing history and analytics",
        "Community recipe sharing",
      ],
      technologies: [
        "Android SDK",
        "Bluetooth",
        "Custom Views",
        "SQLite",
        "Material Design",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.grainfather",
    },
    {
      name: "Payfrit",
      description:
        "A mobile wallet Android app with beacon technology for automatic payment detection, money transfer capabilities, and online food ordering with seamless payment integration.",
      features: [
        "Mobile wallet functionality",
        "Beacon-based automatic payments",
        "Money transfer between users",
        "Online food ordering",
        "Credit card and bank account linking",
        "Transaction history and analytics",
      ],
      technologies: [
        "Android SDK",
        "Beacon Technology",
        "NFC",
        "Payment APIs",
        "SQLite",
      ],
      playStore: "https://play.google.com/store/apps/details?id=com.payfrit",
    },
  ],

  interests: [
    "Native Android Development",
    "Kotlin Programming",
    "Android Architecture Components",
    "Performance Optimization",
    "Material Design",
    "IoT and Bluetooth Integration",
    "Learning New Technologies",
  ],
};

// ===== MOBILE APP DEVELOPMENT PORTFOLIO =====
const mobileAppData = {
  personalInfo: {
    ...basePersonalInfo,
    title: "Mobile App Developer",
    subtitle: "iOS & Android Deployment Specialist",
    objective:
      "I specialize in creating fast, reliable, and user-friendly mobile applications using modern technologies. My approach is straightforward: understand the client's goals, deliver high-quality solutions, and support them throughout the product lifecycle. I strive to bring technical excellence and practical business understanding together, ensuring every project delivers measurable value.",
    journey:
      "My journey began with a simple curiosity for technology, long before I understood what coding really meant. From building small experiments to leading full-scale mobile app projects, every step came with challenges - long nights, failed builds, and moments where giving up felt easier. But passion kept me going. Today, I've grown from an individual developer into someone who builds solutions that impact businesses globally. I now lead ePhoenix, a team that focuses on delivering high-quality mobile and web applications. My goal is simple: create meaningful software, help clients grow, and continue evolving every single day",

    coreStrengths: [
      {
        title: "Technical Excellence",
        description:
          "Skilled in React Native, Kotlin, Swift, and backend tech like Node.js, MySQL and MongoDB.",
      },
      {
        title: "Problem-Solving & Delivery",
        description:
          "Quick at identifying issues and delivering stable, scalable solutions with strong debugging skills.",
      },
      {
        title: "Client & Project Success",
        description:
          "Focus on client needs, clear communication, and converting ideas into real, working products.",
      },
      {
        title: "Leadership & Ownership",
        description:
          "Leads end-to-end development with strong teamwork, mentoring, and full ownership mindset.",
      },
      {
        title: "Quality & Reliability",
        description:
          "Writes clean, maintainable code with attention to UI/UX and long-term app performance.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Builds high-performance cross-platform apps using React Native.",
      },
    ],
  },

  skills: {
    languages: [
      "React Native",
      "Flutter",
      "TypeScript",
      "Swift",
      "Objective-C",
      "Kotlin",
      "Java",
    ],
    tools: [
      "VS Code",
      "Cursor",
      "Xcode",
      "Android Studio",
      "Git",
      "App Store Connect",
      "TestFlight",
      "Google Play Console",
      "Google Play Closed Beta Tester",
      "Google Play Open Beta Tester",
      "Asana",
      "Jira",
      "Trello",
      "Remote Test Lab (Samsung, Genymotion)",
      "BrowserStack",
    ],
    frameworks: [
      "Android SDK",
      "iOS SDK",
      "SwiftUI",
      "Compose UI",
      "Google Maps",
      "Geo Location API",
      "MapKit",
      "Firebase",
      "Firebase Auth",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Firebase Cloud Messaging (FCM)",
      "Expo Notifications",
      "Axios",
      "Zustand",
      "React Query for API Caching",
      "Redux Toolkit",
      "React Query/TanStack Query",
      "React Navigation/React Expo Router",
      "Native Base",
      "React Native Elements",
      "React Native Device Info",
      "React Localization",
      "MomentJS",
      "DayJS",
      "Tailwind RN",
      "JWT Authentication",
      "BLE Manager",
      "Retrofit",
      "Gson",
      "Hilt/Dagger",
      "WorkManager",
      "Lottie Animations",
      "Glide/Coil Image Loading",
    ],
    databases: [
      "Room Database",
      "SQLite",
      "MMKV",
      "RealmDB",
      "AsyncStorage",
      "Firebase Firestore",
    ],
    others: [
      "AWS",
      "Stripe",
      "AI Integration",
      "REST APIs",
      "MVC/MVVM",
      "Clean Architecture",
      "In-App Purchases",
      "Material Design",
    ],
  },

  experiences: [
    {
      organization: "Full Time Freelancing",
      designation: "Mobile App Developer",
      duration: "August 2019 - Current",
      description:
        "Specialized in native mobile app development (iOS & Android), creating high-quality mobile applications for various clients with focus on performance and user experience.",
      achievements: [
        "Developed 15+ native mobile applications (iOS & Android)",
        "Implemented complex features like Core Data, Room Database, Firebase integration",
        "Optimized app performance and memory usage",
        "Successfully published apps on App Store and Google Play Store",
        "Maintained 99% crash-free rate across all applications",
        "Achieved average 4.8+ ratings on both App Store and Google Play Store",
      ],
    },
    {
      organization: "Intuz Solutions PVT. LTD.",
      designation: "Mobile App Developer",
      duration: "May 2017 - July 2019",
      description:
        "Worked on enterprise iOS applications with focus on scalability, security, and performance optimization.",
      achievements: [
        "Led iOS development team of 4 developers",
        "Implemented MVVM architecture with Combine framework",
        "Reduced app launch time by 50%",
        "Introduced SwiftUI for modern UI development",
        "Implemented comprehensive unit and UI testing",
      ],
    },
    {
      organization: "Impero IT Services",
      designation: "Android Developer",
      duration: "Jul 2015 - April 2017",
      description:
        "Developed iOS applications with focus on user experience and Apple's design guidelines compliance.",
      achievements: [
        "Delivered 6+ successful iOS applications",
        "Implemented custom UI components following HIG",
        "Optimized Core Data performance",
        "Integrated various Apple frameworks and third-party SDKs",
        "Achieved App Store approval on first submission for 90% of apps",
      ],
    },
    {
      organization: "Horizzon Web info Pvt. Ltd.",
      designation: "Android Developer",
      duration: "Aug 2013 - June 2015",
      description:
        "Started iOS development career, learning Swift and iOS development fundamentals with focus on building solid foundation.",
      achievements: [
        "Transitioned from Android to iOS development",
        "Developed first commercial iOS applications",
        "Learned Swift programming and iOS SDK",
        "Implemented basic to intermediate app features",
        "Gained experience in App Store deployment process",
      ],
    },
    {
      organization: "Chirayu Soft. Sol.",
      designation: "Trainee (Mobile Application developer)",
      duration: "May 2012 - Aug 2013",
      description:
        "Started as trainee mobile developer, learning fundamentals of mobile development including iOS basics.",
      achievements: [
        "Completed mobile development training program",
        "Built first iOS prototype applications",
        "Learned Objective-C and iOS development basics",
        "Gained hands-on experience with Xcode and iOS Simulator",
      ],
    },
  ],

  projects: [
    {
      name: "MyMotive",
      description:
        "MyMotive works together with the Motive device to deliver personalized lower-back and knee relief therapy. The app lets users start therapy sessions, manage treatments, and track progress all in one place.",
      features: [
        "Start & Control Therapy Sessions - Launch therapy sessions directly from the app when paired with the Motive device, simplifying treatment at home.",
        "Progress Tracking & History - Log session history and view progress over time to monitor improvements and keep track of therapy schedules. ",
        "Personalized Therapy Plans - Manage personalized treatment plans tailored to user's needs (e.g., lower-back or knee therapy) for better recovery support.",
      ],
      technologies: [
        "React Native",
        "Type Script",
        "IoT",
        "FireStore",
        "Core Bluetooth",
        "Charts",
      ],
      appStore: "https://apps.apple.com/us/app/mymotive/id6443784536",
      playStore:
        "https://play.google.com/store/apps/details?id=com.mymotive.mymotive&pcampaignid=web_share",
    },
    {
      name: "City Break Apartments (CBA) - Guest App",
      description:
        "CBA is a guest-facing app for City Break Apartments in Dublin, offering remote check-in, digital keys, booking extras, and reservation management for a smoother stay. It replaces traditional key handling with a mobile-first experience, improving both guest convenience and operational efficiency.",
      features: [
        "Remote check-in and digital key access to apartments via mobile",
        "View and manage reservations, stay details, and important instructions ",
        "Book extras such as early check-in, late checkout, shuttle service, and add-ons (latest versions)",
        "Support for multiple properties and apartment details (photos, info, location)",
        "Push notifications for check-in info, stay updates, and offers",
        "Guest support links (help, FAQ, contact)",
        "Stripe integration for secure payments for bookings, extras, and add-ons",
      ],
      technologies: [
        "Digital key / Bluetooth lock integration",
        "Firebase Push Notifications",
        "React Native",
        "TypeScript",
        "React Expo Navigation",
        "Stripe",
        "REST backend",
      ],
      duration: "Ongoing",
      status: "Active",
      playStore:
        "https://play.google.com/store/apps/details?id=com.citybreakapartments.guestapp&pcampaignid=web_share",
      appStore:
        "https://apps.apple.com/in/app/city-break-apartments/id6742106330",
    },
    {
      name: "GetDoolen - Training Video",
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
        "TypeScript",
        "Firebase",
        "React Native Video player",
      ],
      duration: "Ongoing",
      status: "Active",
      website: "https://www.getdoolen.com/",
      playStore:
        "https://play.google.com/store/apps/details?id=com.doolen.trainingplatform",
      appStore: "https://apps.apple.com/us/app/training-platform/id6743212121",
    },
    {
      name: "Frami - Activity & Rewards App",
      description:
        "Frami is a wellness and activity-tracking app that gamifies healthy habits with points, challenges, and rewards for individuals and employees. Users can connect wearables, log activities, and earn redeemable points through real-life physical activities",
      features: [
        "Activity tracking: manual logging, session recording, and wearable integrations (Garmin, Polar, Fitbit, etc.)",
        "Gamification with points, challenges, and team activities",
        "Reward store where users redeem points for partner coupons",
        "Leaderboards, community challenges, and engagement features",
        "User profile, history, progress tracking",
        "Secure login, authentication, and session handling",
        "Push notifications for activity reminders and challenge updates",
        "Subscription/payment integration via Stripe (if applicable)",
      ],
      technologies: [
        "Kotlin",
        "MVVM Architecture",
        "XML layouts / Jetpack components",
        "Retrofit",
        "OkHttp",
        "Room Database",
        "Dagger",
        "Coroutines & Flow",
        "Firebase Cloud Messaging (FCM)",
        "Stripe Android SDK",
        "Garmin",
        "Polar",
        "Fitbit APIs",
      ],
      duration: "Ongoing",
      status: "Active",
      playStore:
        "https://play.google.com/store/apps/details?id=com.framiactivity.frami&pcampaignid=web_share",
      appStore: "https://apps.apple.com/no/app/frami/id1596405937?l=nb",
    },
    {
      name: "Global Pump - Pump Selection & Performance Analysis App",
      description:
        "We developed the Global Pump App, which allows users to filter pumps dynamically based on multiple dependent parameters and view the resulting pump list along with detailed performance graphs. The app parses data from SOAP 1.2 APIs, converts it into usable mobile-friendly structures, and presents it in an intuitive and interactive interface.",
      features: [
        "Pump Filtering: Users can enter required parameters (flow, head, efficiency, etc.) and the app automatically filters pumps based on interdependent criteria.",
        "Graph Display: Shows pump performance curves and operating points using real-time parsed API data.",
        "SOAP 1.2 Integration: Implemented full SOAP 1.2 API parsing to fetch pump catalogs, selection results, and curve data.",
        "Dynamic Result Calculation: Processes raw XML response, transforms it into structured JSON, and computes selection logic on the mobile side",
        "Seamless User Experience: Fast, accurate pump matching with clear visualization for industrial users.",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Axios",
        "ExpressJS",
        "NodeJS",
        "PDF Viewer",
        "SOAP 1.2",
        "XML Parsing",
        "Caching",
      ],
    },
    {
      name: "EventRAFT - Event Booking & Management App",
      description:
        "EventRAFT is a mobile application designed to simplify event discovery, booking, and management — offering users seamless access to a variety of events and venues. Users can browse upcoming events, book tickets, and manage their bookings all from their Android device.",
      features: [
        "Browse and search upcoming events by category, date, and location",
        "Book tickets directly within the app and receive booking confirmation",
        "User account management, booking history, and profile settings",
        "Push notifications and reminders for upcoming events or ticket availability",
        "Event details page with venue info, images, and event description",
        "Secure payment integration for ticket purchases",
        "Order history, ticket download/print options, and booking management",
      ],
      technologies: [
        "Java",
        "MVVM",
        "Dagger",
        "Retrofit / OkHttp",
        "Room Database / SharedPreferences",
        "Material Design components + XML layouts",
        "Firebase Cloud Messaging (FCM)"
      ],
      playStore : "https://play.google.com/store/apps/details?id=com.eventraft.nxt&pcampaignid=web_share"
    },
    {
      name: "Aero Crew",
      description:
        "A dual-platform iOS application connecting pilots with recruiters. Features separate interfaces with document management, payment integration, and real-time communication.",
      features: [
        "Dual user interface (Pilot/Recruiter)",
        "Document scanner and management",
        "Stripe payment integration",
        "Push notifications and real-time updates",
        "Calendar integration for appointments",
        "PDF generation for reports and receipts",
      ],
      technologies: [
        "React Native",
        "Stripe",
        "ReactJS ES5",
        "Chat SDK",
        "Firebase FCM",
        "PDF Viewer",
      ],
    },
    {
      name: "Junobaby",
      description:
        "An iOS healthcare app for pregnant women, providing comprehensive care with doctor consultations, appointment booking, and health tracking features.",
      features: [
        "Video calling with AVFoundation",
        "HealthKit integration for health tracking",
        "Core Data for appointment management",
        "Push notifications for reminders",
        "In-app purchases for premium features",
        "CloudKit for data synchronization",
      ],
      technologies: ["Swift", "UIKit", "HealthKit", "AVFoundation", "CloudKit"],
    },
    {
      name: "Artwork",
      description:
        "An online marketplace iOS app for handmade products with advanced image processing, real-time chat, and seamless user experience following Apple's design guidelines.",
      features: [
        "Advanced image processing and filters",
        "Real-time messaging with MessageKit",
        "Core Data for offline functionality",
        "Search with Core Spotlight integration",
        "Social sharing with Activity View Controller",
        "Custom camera integration",
      ],
      technologies: [
        "Swift",
        "UIKit",
        "Core Image",
        "MessageKit",
        "Core Spotlight",
      ],
    },
    {
      name: "Boozer",
      description:
        "An iOS e-commerce app for liquor delivery with location services, payment processing, and delivery tracking optimized for iOS ecosystem.",
      features: [
        "MapKit for location services",
        "Core Location for precise tracking",
        "Apple Pay integration",
        "Push notifications for order updates",
        "Core Data for cart management",
        "Background app refresh for tracking",
      ],
      technologies: ["Swift", "UIKit", "MapKit", "Core Location", "Apple Pay"],
    },
    {
      name: "Heuro",
      description:
        "A social media iOS app focused on article sharing with rich text editing capabilities and seamless integration with iOS sharing ecosystem.",
      features: [
        "Rich text editor with TextKit",
        "Social framework integration",
        "Core Data for article storage",
        "Share extensions for system-wide sharing",
        "Spotlight search integration",
        "Dark mode support",
      ],
      technologies: [
        "Swift",
        "UIKit",
        "TextKit",
        "Social Framework",
        "Core Spotlight",
      ],
    },
    {
      name: "Cool Off",
      description:
        "A revolutionary iOS app that automatically notifies users when weather conditions are optimal for turning off air conditioning, featuring weather integration and smart notifications.",
      features: [
        "WeatherKit integration for accurate forecasts",
        "Location-based weather monitoring",
        "Smart notification scheduling",
        "Energy usage tracking and analytics",
        "Widget support for quick weather info",
        "Siri Shortcuts integration",
      ],
      technologies: [
        "Swift",
        "SwiftUI",
        "WeatherKit",
        "WidgetKit",
        "SiriKit",
        "Core Location",
      ],
      appStore: "https://play.google.com/store/apps/details?id=com.cooloff.app",
    },
    {
      name: "Talky Life",
      description:
        "A social networking iOS app with real-time features, following iOS design patterns and leveraging native iOS capabilities for optimal user experience.",
      features: [
        "Real-time messaging and updates",
        "Core Data with CloudKit sync",
        "Advanced search with Core Spotlight",
        "Rich media sharing capabilities",
        "Push notifications for social interactions",
        "Accessibility support (VoiceOver, Dynamic Type)",
      ],
      technologies: [
        "Swift",
        "UIKit",
        "CloudKit",
        "Core Spotlight",
        "Accessibility",
      ],
      appStore: "https://play.google.com/store/apps/details?id=com.talky",
    },
  ],

  interests: [
    "React Native Development",
    "iOS Development (Swift, SwiftUI)",
    "Android Development (Kotlin, Java)",
    "Cross-Platform Mobile Apps",
    "Kotlin MultiPlatform (KMP)",
    "Performance Optimization",
    "Mobile UI/UX Design",
    "Bluetooth & IoT Integrations",
    "AI-Powered Mobile Features",
    "Payment & Subscription Systems",
    "Exploring Modern Mobile Technologies",
  ],
};

// ===== REACT NATIVE PORTFOLIO =====
const reactNativeData = {
  personalInfo: {
    ...basePersonalInfo,
    title: "React Native Developer",
    subtitle: "Cross-Platform Mobile App Specialist",
    objective:
      "As a professional React Native developer, I wish to work diligently, contributing to the growth of my organization and gain knowledge and experience for my own development, hence creating a win-win situation for both of us.",
    journey:
      "My journey began with a simple curiosity for technology, long before I understood what coding really meant. From building small experiments to leading full-scale mobile app projects, every step came with challenges - long nights, failed builds, and moments where giving up felt easier. But passion kept me going. Today, I've grown from an individual developer into someone who builds solutions that impact businesses globally. I now lead ePhoenix, a team that focuses on delivering high-quality mobile and web applications. My goal is simple: create meaningful software, help clients grow, and continue evolving every single day",

    coreStrengths: [
      {
        title: "Technical Excellence",
        description:
          "Skilled in React Native, Kotlin, Swift, and backend tech like Node.js, MySQL and MongoDB.",
      },
      {
        title: "Problem-Solving & Delivery",
        description:
          "Quick at identifying issues and delivering stable, scalable solutions with strong debugging skills.",
      },
      {
        title: "Client & Project Success",
        description:
          "Focus on client needs, clear communication, and converting ideas into real, working products.",
      },
      {
        title: "Leadership & Ownership",
        description:
          "Leads end-to-end development with strong teamwork, mentoring, and full ownership mindset.",
      },
      {
        title: "Quality & Reliability",
        description:
          "Writes clean, maintainable code with attention to UI/UX and long-term app performance.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Builds high-performance cross-platform apps using React Native.",
      },
    ],
  },

  skills: {
    Languages: ["JavaScript", "TypeScript"],
    Frameworks: ["React Native", "Redux", "React Navigation", "Expo"],
    Tools: ["Git", "Debugging"],
    Databases: ["Firebase", "Real-time Database", "AsyncStorage", "AWS S3"],
    Others: [
      "REST APIs",
      "Push Notifications",
      "In-App Purchases",
      "Social Integration",
      "Maps Integration",
      "Performance Optimization",
    ],
  },

  // General Web/Backend/Frontend Skills
  pinalSkills: {
    languages: ["PHP", "HTML", "JavaScript", "CSS"],
    frameworks: ["Laravel", "Yii2", "Vue", "React", "Node.js", "jQuery"],
    tools: ["Git", "Apache JMeter"],
    databases: ["MySQL", "MongoDB", "Schema Design"],
    others: [
      "Project Management",
      "Website Performance Enhancement",
      "Website Load Testing",
    ],
  },

  experiences: [
    {
      organization: "Full Time Freelancing",
      designation: "React Native Developer",
      duration: "August 2019 - Current",
      description:
        "Specialized in React Native development, creating cross-platform mobile applications for various clients.",
      achievements: [
        "Developed 10+ React Native applications",
        "Implemented complex features like real-time chat, payment integration",
        "Optimized app performance and user experience",
        "Maintained 95% client satisfaction rate",
      ],
    },
    {
      organization: "Intuz Solutions PVT. LTD.",
      designation: "Mobile App Developer",
      duration: "May 2017 - July 2019",
      description:
        "Worked on various mobile app projects using React Native and native technologies.",
      achievements: [
        "Led React Native migration projects",
        "Mentored junior developers",
        "Implemented CI/CD pipelines",
        "Reduced development time by 40%",
      ],
    },
    {
      organization: "Impero IT Services",
      designation: "Mobile Developer",
      duration: "Jul 2015 - April 2017",
      description:
        "Developed mobile applications and gained expertise in cross-platform development.",
      achievements: [
        "Transitioned from native to React Native development",
        "Delivered 5+ successful mobile applications",
        "Improved code reusability across platforms",
      ],
    },
  ],

  projects: [
    {
      name: "MyMotive",
      description:
        "A comprehensive React Native app providing users with control over their knee pain relief therapy. Features therapy session management, progress monitoring, goal setting, and device integration.",
      features: [
        "Therapy session initiation and management",
        "Progress tracking and analytics",
        "Goal setting and achievement system",
        "Bluetooth device integration",
        "User-friendly interface for therapy management",
      ],
      technologies: [
        "React Native",
        "Redux",
        "Bluetooth",
        "Firebase",
        "Push Notifications",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.mymotive.mymotive",
      appStore: "https://apps.apple.com/us/app/mymotive/id6443784536",
    },
    {
      name: "Aero Crew",
      description:
        "A dual-platform React Native application connecting pilots with recruiters. Features separate interfaces for pilots and recruiters with appointment management and payment integration.",
      features: [
        "Dual user interface (Pilot/Recruiter)",
        "Appointment booking and management",
        "Document upload and verification",
        "Stripe payment integration",
        "Real-time notifications",
        "Expense tracking and billing",
      ],
      technologies: [
        "React Native",
        "Redux",
        "Stripe",
        "Firebase",
        "Real-time Database",
        "Push Notifications",
      ],
    },
    {
      name: "Junobaby",
      description:
        "A React Native healthcare app for pregnant women, providing comprehensive care from first week to delivery. Features doula hiring, gynecologist consultation, and payment processing.",
      features: [
        "Doula hiring and management",
        "Doctor consultation booking",
        "Real-time chat with healthcare providers",
        "Stripe payment integration",
        "Pregnancy tracking and tips",
        "Appointment scheduling",
      ],
      technologies: [
        "React Native",
        "Redux",
        "Stripe",
        "Firebase",
        "Real-time Chat",
        "Push Notifications",
      ],
    },
    {
      name: "Artwork",
      description:
        "An online marketplace React Native app for handmade products, connecting buyers and sellers with chat functionality and customization options.",
      features: [
        "Product listing and browsing",
        "Real-time chat between buyers and sellers",
        "Custom product requests",
        "Image upload and gallery",
        "User authentication and profiles",
        "Search and filter functionality",
      ],
      technologies: [
        "React Native",
        "Redux",
        "Firebase",
        "Real-time Chat",
        "Image Processing",
      ],
    },
    {
      name: "Boozer",
      description:
        "A React Native e-commerce app for liquor delivery, featuring store registration, product catalog, payment processing, and delivery tracking.",
      features: [
        "Store registration and management",
        "Product catalog with categories",
        "Shopping cart and checkout",
        "Stripe payment integration",
        "Delivery tracking",
        "Location-based store discovery",
      ],
      technologies: [
        "React Native",
        "Redux",
        "Stripe",
        "Maps",
        "Geolocation",
        "Push Notifications",
      ],
    },
    {
      name: "Heuro",
      description:
        "A social media React Native app focused on article and blog sharing with a rich text editor and social sharing capabilities.",
      features: [
        "Rich text editor for articles",
        "Social media integration",
        "Article categorization and feeds",
        "User profiles and following system",
        "Real-time article updates",
        "Social sharing (Facebook, X, LinkedIn)",
      ],
      technologies: [
        "React Native",
        "Redux",
        "Rich Text Editor",
        "Social APIs",
        "Firebase",
      ],
    },
  ],

  interests: [
    "Cross-Platform Mobile Development",
    "React Native Ecosystem",
    "Mobile UI/UX Design",
    "Performance Optimization",
    "Real-time Applications",
    "Learning New Technologies",
  ],
};

// ===== EXPORTS =====
// Create alias for backward compatibility
const iosData = mobileAppData;
// Export the main data objects
export { androidData, mobileAppData, iosData, reactNativeData };

// Export individual components for each platform
export const androidPersonalInfo = androidData.personalInfo;
export const androidSkills = androidData.skills;
export const androidExperiences = androidData.experiences;
export const androidProjects = androidData.projects;
export const androidInterests = androidData.interests;

export const mobileAppPersonalInfo = mobileAppData.personalInfo;
export const mobileAppSkills = mobileAppData.skills;
export const mobileAppExperiences = mobileAppData.experiences;
export const mobileAppProjects = mobileAppData.projects;
export const mobileAppInterests = mobileAppData.interests;

export const iosPersonalInfo = iosData.personalInfo;
export const iosSkills = iosData.skills;
export const iosExperiences = iosData.experiences;
export const iosProjects = iosData.projects;
export const iosInterests = iosData.interests;

export const reactNativePersonalInfo = reactNativeData.personalInfo;
export const reactNativeSkills = reactNativeData.skills;
export const reactNativeExperiences = reactNativeData.experiences;
export const reactNativeProjects = reactNativeData.projects;
export const reactNativeInterests = reactNativeData.interests;

// Default exports for backward compatibility (defaults to Android)
export const personalInfo = androidData.personalInfo;
export const skills = androidData.skills;
export const experiences = androidData.experiences;
export const projects = androidData.projects;
export const interests = androidData.interests;
