import React from "react";

// Import icons from react-icons
import {
  FaReact,
  FaAndroid,
  FaApple,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaLaptopCode,
  FaRocket,
  FaStar,
  FaHeart,
  FaBars,
  FaTimes,
  FaGooglePlay,
  FaTools,
  FaBook,
  FaLightbulb,
  FaBolt,
  FaCoffee,
  FaMobileAlt,
  FaGraduationCap,
  FaCalendar,
  FaBuilding,
  FaCheckCircle,
  FaBullseye,
  FaBriefcase,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaProjectDiagram,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaArrowUp,
  FaDizzy,
  FaDatabase,
  FaSync,
  FaCss3Alt,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiRedux,
  SiXcode,
  SiYii,
  SiApache,
} from "react-icons/si";
import {
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaTachometerAlt,
  FaCogs,
} from "react-icons/fa";
import { SiJquery, SiMongodb, SiMysql, SiApachejmeter } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineAnimation,
  MdOutlineIntegrationInstructions,
  MdOutlineSchema,
} from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoCall, IoCloud } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { PiNotificationBold } from "react-icons/pi";
import { TbShoppingBagCheck, TbWorldWww } from "react-icons/tb";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaHtml5 } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { BsAndroid2 } from "react-icons/bs";
import { RiRobot2Fill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { FaHandPaper, FaUserCircle, FaArrowDown, FaDollarSign, FaClock, FaHandshake, FaRedo, FaPaintBrush, FaRuler, FaStore, FaShoppingCart, FaClipboardList, FaLink, FaDesktop, FaBookOpen } from "react-icons/fa";

// Icon mapping
const iconMap = {
  // Technology icons
  react: FaReact,
  android: BsAndroid2,
  apple: FaApple,
  javascript: SiJavascript,
  typescript: SiTypescript,
  swift: SiSwift,
  kotlin: SiKotlin,
  firebase: SiFirebase,
  git: FaGithub,
  xcode: SiXcode,
  redux: SiRedux,
  integration: MdOutlineIntegrationInstructions,

  // Navigation icons
  home: AiFillHome,
  user: FaUser,
  code: FaCode,
  briefcase: FaBriefcase,
  "project-diagram": FaProjectDiagram,
  envelope: FaEnvelope,
  phone: IoCall,
  "map-marker": FaMapMarkerAlt,

  // Social icons
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  gitlab: FaGithub, // Using GitHub icon as fallback for GitLab
  bitbucket: FaGithub, // Using GitHub icon as fallback for Bitbucket

  // Action icons
  download: FaDownload,
  "laptop-code": FaLaptopCode,
  rocket: FaRocket,
  star: FaStar,
  heart: FaHeart,
  bars: FaBars,
  times: FaTimes,
  "external-link": FaExternalLinkAlt,
  "google-play": FaGooglePlay,
  "app-store": FaAppStoreIos,
  "paper-plane": FaPaperPlane,
  play: FaPlay,
  "chevron-left": FaChevronLeft,
  "chevron-right": FaChevronRight,
  "chevron-down": FaChevronDown,
  "arrow-up": FaArrowUp,

  // Utility icons
  tools: FaTools,
  book: FaBook,
  lightbulb: FaLightbulb,
  bolt: FaBolt,
  coffee: FaCoffee,
  mobile: FaMobileAlt,
  "graduation-cap": FaGraduationCap,
  calendar: FaCalendar,
  building: FaBuilding,
  "check-circle": FaCheckCircle,
  bullseye: FaBullseye,
  work: MdOutlineWorkOutline,
  dizzy: FaDizzy,
  aws: FaAws,
  database: FaDatabase,
  sync: FaSync,
  api: AiOutlineApi,
  notification: PiNotificationBold,
  purchase: TbShoppingBagCheck,
  social: TiSocialAtCircular,

  // Languages
  php: FaPhp,
  html: FaHtml5,
  javascript: SiJavascript,
  css: FaCss3Alt,
  cloudKit: IoCloud,
  // Frameworks
  laravel: FaLaravel,
  yii2: SiYii,
  vue: FaVuejs,
  react: FaReact,
  "node.js": FaNodeJs,
  jquery: SiJquery,
  apache: SiApache,
  schema: MdOutlineSchema,
  project: GoProjectSymlink,
  website: TbWorldWww,
  animation: MdOutlineAnimation,

  // Tools
  git: FaGitAlt,
  "apache-jmeter": SiApachejmeter,

  // Databases
  mysql: SiMysql,
  mongodb: SiMongodb,
  "schema-design": FaDatabase,

  // Others
  "project-management": FaProjectDiagram,
  "website-performance": FaTachometerAlt,
  "website-load-testing": FaCogs,
  "objective-c": FaC,

  // Chat-specific icons
  "waving-hand": FaHandPaper,
  "robot": RiRobot2Fill,
  "user-avatar": HiOutlineUser,
  "check-mark": FaCheckCircle,
  "pointing-down": FaArrowDown,
  "money": FaDollarSign,
  "clock": FaClock,
  "refresh": FaRedo,
  "handshake": FaHandshake,
  "wrench": FaTools,
  "lightning": FaBolt,
  "construction": FaTools,
  "paint-brush": FaPaintBrush,
  "ruler": FaRuler,
  "shopping-cart": FaShoppingCart,
  "computer": FaDesktop,
  "book-open": FaBookOpen,
};

const Icon = ({ name, size = 24, className = "", ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent size={size} className={`icon ${className}`} {...props} />
  );
};

export default Icon;
