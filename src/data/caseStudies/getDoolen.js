const getDoolen = {
  title: "GetDoolen",
  images: {
    hero: "/images/case-studies/getdoolen/hero-banner.png",
    architecture: "/images/case-studies/getdoolen/system-architecture.png",
    // mobileScreens: [
    //   "/images/case-studies/getdoolen/mobile-dashboard.png",
    //   "/images/case-studies/getdoolen/mobile-video-player.png",
    //   "/images/case-studies/getdoolen/mobile-queue.png",
    //   "/images/case-studies/getdoolen/mobile-profile.png",
    // ],
    // webScreens: [
    //   "/images/case-studies/getdoolen/web-dashboard.png",
    //   "/images/case-studies/getdoolen/web-video-library.png"
    // ],
    stackedScreenshots: [
      {
        title: "Dashboard Overview",
        description:
          "The main dashboard provides users with a comprehensive view of their learning progress, featuring personalized course recommendations, recent activity, and quick access to favorite content.",
        image: "/images/case-studies/getdoolen/web-dashboard.png",
      },
      {
        title: "Video Library",
        description:
          "Our extensive video library offers intuitive categorization and search functionality, making it easy for learners to discover and access relevant educational content.",
        image: "/images/case-studies/getdoolen/web-video-library.png",
      },
      {
        title: "Queue Page",
        description:
          "Users can easily manage their viewing queue, adding and removing videos to tailor their learning experience according to their preferences and schedule.",
        image: "/images/case-studies/getdoolen/web-queue.png",
      },
      {
        title: "User panel",
        description:
          "The user panel provides a detailed overview of individual progress, achievements, and settings, allowing users to customize their learning journey and track their accomplishments.",
        image: "/images/case-studies/getdoolen/web-user-panel.png",
      },
    ],

    // techStack: "/images/case-studies/getdoolen/tech-stack-diagram.png",
    // userFlow: "/images/case-studies/getdoolen/user-flow-diagram.png",
    // results: "/images/case-studies/getdoolen/results-analytics.png",
  },
  executiveSummary: {
    summary:
      "GetDoolen is a unified e-learning platform offering subscription-based video courses, real-time assessments, and engagement analytics. Built on a Node.js RESTful API, React web frontend, and React Native Android app, it delivers seamless, cross-device learning with secure authentication, payment integration, and offline capabilities.",
    techSummary: "",
  },
  projectOverview: {
    objectives: [
      "Enable secure user management",
      "Intuitive content discovery",
      "Cross-platform subscription and payment",
      "Comprehensive analytics",
    ],
    targetAudience: [
      "Individual learners",
      "Corporate training departments",
      "Educators",
      "On-the-go mobile users",
    ],
  },
  technicalArchitecture: {
    backend: ["Node.js", "Express", "MongoDB (Mongoose)"],
    webFrontend: ["React", "Redux Toolkit", "Tailwind CSS", "Axios"],
    androidApp: [
      "React Native",
      "Redux Toolkit",
      "AsyncStorage",
      "Firebase Cloud Messaging",
    ],
    sharedTechnologies: [
      "JWT + OTP auth",
      "AWS S3 & CloudFront",
      "Stripe/PayPal payments",
      "Winston & Morgan",
    ],
  },
  featuresFunctionality: {
    userManagement: ["OTP-based login", "Profile sync", "Password recovery"],
    contentManagement: [
      "Admin video upload",
      "Searchable library",
      "Mobile-friendly playback with resume",
    ],
    subscriptionPayment: [
      "Web checkout (Stripe, PayPal)",
      "Mobile redirects",
      "Instant access",
    ],
    analyticsTracking: [
      "Real-time progress sync",
      "Quiz tools with auto-save",
      "Performance dashboards",
    ],
    advancedFeatures: [
      "Push notifications",
      "Continue-watching",
      "Role-based views",
    ],
  },
  challengesSolutions: [
    {
      challenge: "Global Video Delivery",
      solution:
        "CDN streaming + mobile-optimized video player with progressive buffering",
    },
    {
      challenge: "Secure Authentication",
      solution:
        "Cross-platform token handling with refresh token mechanism on Android",
    },
    {
      challenge: "Complex Payment Flows",
      solution:
        "React Native-compatible subscription planning with fallback for direct web payment",
    },
    {
      challenge: "Real-Time Sync",
      solution:
        "Redux + backend sync APIs for watch progress, quiz attempts, and subscriptions",
    },
    {
      challenge: "Play Store Rejection",
      solution:
        "Deferred subscription billing inside app, directing users to web portal for now",
    },
    {
      challenge: "Push Notifications",
      solution:
        "Firebase integration for both web and Android for course alerts and updates",
    },
    {
      challenge: "App Store Rejection",
      solution:
        "The client does not need to make subscriptions via in-app purchase as per business logic and App Store policy for digital goods; in-app purchases need to be handled accordingly. Therefore, we applied an alternative option with a redirect app, and after some rejections, we finally achieved the goal. Currently, we are managing subscriptions from the web only.",
    },
  ],
  resultsImpact: {
    technicalHighlights: {
      apiResponseTime: "<100ms",
      webLoadTime: "<2s",
      mobileLoadTime: "",
      uptime: "",
    },
    businessOutcomes: [
      "40% user growth post-app launch",
      "Reduced support queries",
    ],
    userExperience: [
      "Seamless device switching",
      "Offline watching",
      "Unified dashboards",
    ],
  },
  conclusion:
    "GetDoolen delivers a scalable, secure, and user-friendly e-learning experience across web and mobile, driving engagement and retention through synchronized progress, flexible payments, and rich analytics.",
};

export default getDoolen;
