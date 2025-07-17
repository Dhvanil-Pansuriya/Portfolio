const getDoolen = {
  title: "GetDoolen",
  images: {
    hero: "/images/case-studies/getdoolen/hero-banner.png",
    architecture: "/images/case-studies/getdoolen/system-architecture.png",
    mobileScreens: [
      "/images/case-studies/getdoolen/mobile-login.png",
      "/images/case-studies/getdoolen/mobile-dashboard.png",
      "/images/case-studies/getdoolen/mobile-video-player.png",
      "/images/case-studies/getdoolen/mobile-queue.png"
    ],
    webScreens: [
      "/images/case-studies/getdoolen/web-dashboard.png",
      "/images/case-studies/getdoolen/web-video-library.png",
      "/images/case-studies/getdoolen/web-user-panel.png",
      "/images/case-studies/getdoolen/web-queue.png"
    ],
    techStack: "/images/case-studies/getdoolen/tech-stack-diagram.png",
    userFlow: "/images/case-studies/getdoolen/user-flow-diagram.png",
    results: "/images/case-studies/getdoolen/results-analytics.png"
  },
  executiveSummary: {
    summary:
      "GetDoolen is a comprehensive video-based learning platform that delivers professional educational content with enhanced subscription management, real-time assessments, and user engagement analytics.",
    techSummary:
      "The platform is built using a Node.js-based RESTful API, a React.js web frontend, and a fully integrated React Native Android mobile application.",
  },
  projectOverview: {
    objectives: [
      "Build a full-stack and mobile-accessible e-learning platform supporting subscription-based video learning.",
      "Implement secure user authentication, registration, and profile management with OTP verification across web and mobile platforms.",
      "Provide intuitive video browsing, search, and playback experiences optimized for both desktop and mobile devices.",
      "Enable in-app subscriptions and purchases through Stripe, PayPal, and native payment flows.",
      "Deliver real-time engagement tracking, video analytics, and quiz performance across devices.",
      "Include quiz and evaluation tools on all platforms, with real-time syncing and scoring.",
      "Build a dedicated Android application for wider reach, offline access, and push notifications.",
    ],
    targetAudience: [
      "Individual learners seeking skill advancement",
      "Corporate training departments",
      "Professional educators and instructors",
      "Educational organizations needing scalable content delivery",
      "Mobile-first users looking for on-the-go learning",
    ],
  },
  technicalArchitecture: {
    backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    webFrontend: [
      "React.js",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "React Router",
    ],
    androidApp: [
      "React Native (Android)",
      "Redux Toolkit",
      "Axios",
      "AsyncStorage",
      "Firebase Cloud Messaging",
      "React Navigation",
    ],
    sharedTechnologies: [
      "JWT",
      "Email OTP",
      "AWS S3",
      "CloudFront",
      "Stripe",
      "PayPal",
      "Winston",
      "Morgan",
    ],
  },
  featuresFunctionality: {
    userManagement: [
      "OTP login on both mobile and web",
      "Real-time sync of profile data across devices",
      "Secure password recovery through email",
      "Mobile-side device identification and token refresh handling",
    ],
    contentManagement: [
      "Admin panel for video upload and metadata entry",
      "Mobile video playback with resume, lock orientation, and full-screen support",
      "Searchable video library across categories on both platforms",
    ],
    subscriptionPayment: [
      "Web-based checkout with Stripe and PayPal",
      "Mobile-ready payment options with native support",
      "Subscriptions reflect instantly across web and mobile apps",
      "Alert on payment failure through in-app UI and push notifications",
    ],
    analyticsTracking: [
      "Resume learning between web and Android app",
      "Mobile app saves watch progress offline and syncs when online",
      "Quiz attempt history and scores visible across platforms",
      "Admin dashboard for tracking overall user engagement",
    ],
    assessmentSystem: [
      "Quiz participation on mobile and web",
      "Auto-save of quiz answers in real-time",
      "Retake limits and score breakdowns integrated",
      "Performance reports rendered in both web admin and mobile user view",
    ],
    advancedFeatures: [
      "Push notifications for course updates and quizzes",
      "Continue Watching on homepage (web and app)",
      "Role-based dashboards: user, instructor, corporate admin",
      "Real-time content filtering for mobile based on user access level",
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
      challenge: "Play Store Restrictions",
      solution:
        "Deferred subscription billing inside app, directing users to web portal for now`, ",
    }, {
      challenge: "App Store Restrictions",
      solution:
       "The client does not need to make subscriptions via in-app purchase as per business logic and App Store policy for digital goods; in-app purchases need to be handled accordingly. Therefore, we applied an alternative option with a redirect app, and after some rejections, we finally achieved the goal. Currently, we are managing subscriptions from the web only."
    },
    {
      challenge: "Push Notifications",
      solution:
        "Firebase integration for both web and Android for course alerts and updates",
    },
  ],
  resultsImpact: {
    technicalHighlights: {
      apiResponseTime: "< XXXms",
      webLoadTime: "< X.xs",
      mobileLoadTime: "< Xs",
      uptime: "XX.xx%",
    },
    businessOutcomes: [
      "40% user increase after launching Android app",
      "Improved retention via push notifications and watch queue sync",
      "Unified subscription and access model across platforms",
      "Reduced support queries due to consistent UX across web and mobile",
    ],
    userExperience: [
      "Seamless experience switching between devices",
      "Personalized dashboards accessible anywhere",
      "Learners can track progress, take quizzes, and resume videos from any device",
      "Improved performance and offline-friendly behavior on mobile",
    ],
  },
  technicalSpecifications: {
    apiArchitecture: [
      "RESTful API Design",
      "Rate Limiting",
      "JWT Middleware",
      "OTP Validation",
      "Modular routing for videos, auth, quizzes, subscriptions",
    ],
    frontendStructure: {
      web: "Page-based routing, responsive layout",
      mobile: "Stack navigation, bottom tab bar for quick access",
      redux: "Slices for Auth, Video, Quiz, Plans, Notifications",
    },
    devOpsSecurity: [
      "Secure environment handling using .env files",
      "Cross-Origin Resource Sharing (CORS) configuration",
      "Signed S3 URLs for secure video playback",
      "Encrypted local storage (Android AsyncStorage) for auth tokens",
    ],
  },
  androidAppHighlight: {
    framework: "React Native (CLI-based)",
    features: [
      "Secure login and token persistence with refresh handling",
      "Push notifications via Firebase Cloud Messaging",
      "Lightweight, optimized UI for low and mid-end Android devices",
      "Designed for Google Play compliance, with web-redirected subscriptions",
    ],
  },
  conclusion:
    "GetDoolen now stands as a cross-platform e-learning platform supporting web and mobile users alike. The system's unified backend, scalable frontend, and dedicated Android app ensure accessibility, performance, and personalization at scale.",
};


export default getDoolen