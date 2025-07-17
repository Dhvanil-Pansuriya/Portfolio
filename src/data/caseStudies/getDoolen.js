const getDoolen = {
  title: "GetDoolen",
  images: {
    hero: "/images/case-studies/getdoolen/hero-banner.png",
    architecture: "/images/case-studies/getdoolen/system-architecture.png",
    mobileScreens: [
      "/images/case-studies/getdoolen/mobile-login.png",
      "/images/case-studies/getdoolen/mobile-dashboard.png",
    ],
    webScreens: [
      "/images/case-studies/getdoolen/web-dashboard.png",
      "/images/case-studies/getdoolen/web-video-library.png"
    ],
    techStack: "/images/case-studies/getdoolen/tech-stack-diagram.png",
    userFlow: "/images/case-studies/getdoolen/user-flow-diagram.png",
    results: "/images/case-studies/getdoolen/results-analytics.png"
  },
  executiveSummary: {
    summary:
      "GetDoolen is a unified e-learning platform offering subscription-based video courses, real-time assessments, and engagement analytics. Built on a Node.js RESTful API, React web frontend, and React Native Android app, it delivers seamless, cross-device learning with secure authentication, payment integration, and offline capabilities.",
    techSummary: "",
  },
  projectOverview: {
    objectives: [
      "Enable secure user management, intuitive content discovery, cross-platform subscription and payment, and comprehensive analytics."
    ],
    targetAudience: [
      "Individual learners",
      "Corporate training departments",
      "Educators",
      "On-the-go mobile users"
    ],
  },
  technicalArchitecture: {
    backend: ["Node.js", "Express", "MongoDB (Mongoose)"],
    webFrontend: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios"
    ],
    androidApp: [
      "React Native",
      "Redux Toolkit",
      "AsyncStorage",
      "Firebase Cloud Messaging"
    ],
    sharedTechnologies: [
      "JWT + OTP auth",
      "AWS S3 & CloudFront",
      "Stripe/PayPal payments",
      "Winston & Morgan"
    ],
  },
  featuresFunctionality: {
    userManagement: [
      "OTP-based login",
      "Profile sync",
      "Password recovery"
    ],
    contentManagement: [
      "Admin video upload",
      "Searchable library",
      "Mobile-friendly playback with resume"
    ],
    subscriptionPayment: [
      "Web checkout (Stripe, PayPal)",
      "Mobile redirects",
      "Instant access"
    ],
    analyticsTracking: [
      "Real-time progress sync",
      "Quiz tools with auto-save",
      "Performance dashboards"
    ],
    assessmentSystem: [],
    advancedFeatures: [
      "Push notifications",
      "Continue-watching",
      "Role-based views"
    ],
  },
  challengesSolutions: [
    {
      challenge: "Global Delivery",
      solution: "CDN streaming + adaptive buffering"
    },
    {
      challenge: "Cross-Platform Auth",
      solution: "Secure token refresh on mobile"
    },
    {
      challenge: "Payment Compliance",
      solution: "Web-redirect subscription for app-store policies"
    },
    {
      challenge: "Real-Time Sync",
      solution: "Redux + backend APIs for progress and quiz data"
    }
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
      "Reduced support queries"
    ],
    userExperience: [
      "Seamless device switching",
      "Offline watching",
      "Unified dashboards"
    ],
  },
  conclusion:
    "GetDoolen delivers a scalable, secure, and user-friendly e-learning experience across web and mobile, driving engagement and retention through synchronized progress, flexible payments, and rich analytics.",
};

export default getDoolen
