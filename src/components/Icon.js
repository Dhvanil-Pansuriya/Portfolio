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
  SiLeetcode,
  SiLinux,
  SiDocker,
  SiGraphql,
  SiNodedotjs,
  SiFlutter,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaHackerrank } from "react-icons/fa6";
  
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
import { FaHandPaper, FaUserCircle, FaArrowDown, FaDollarSign, FaClock, FaHandshake, FaRedo, FaPaintBrush, FaRuler, FaStore, FaShoppingCart, FaClipboardList, FaLink, FaDesktop, FaBookOpen, FaServer, FaGlobe, FaCog, FaVideo, FaCreditCard, FaChartBar, FaClipboardCheck, FaExclamationTriangle, FaTrendingUp, FaUsers, FaTrophy } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import { TbBatteryFilled } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { FaFlutter } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FaStripe } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { VscEditorLayout } from "react-icons/vsc";
import { SiGooglemaps } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaBitbucket } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { LuBrain } from "react-icons/lu";
import { SiAsana } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { MdOutlineMotionPhotosOn } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { MdPhoneIphone } from "react-icons/md";
import { SiAxios } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGoogleauthenticator } from "react-icons/si";
import { MdOutlineManageHistory } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineArchitecture } from "react-icons/md";


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
  "node.js": SiNodedotjs,
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
  
  // Platform and Technology Icons
  hackerrank: FaHackerrank ,
  leetcode: SiLeetcode,
  trophy: FaTrophy,
  azure: VscAzure ,
  linux: SiLinux,
  docker: SiDocker,
  graphql: SiGraphql,
  nodejs: SiNodedotjs,
  flutter: SiFlutter,
  
  // Additional aliases
  "node-js": SiNodedotjs,
  "node.js": SiNodedotjs,
  award: FaTrophy,
  certificate: FaTrophy,

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
  
  // Case study specific icons
  "server": FaServer,
  "globe": FaGlobe,
  "cog": FaCog,
  "video": FaVideo,
  "credit-card": FaCreditCard,
  "chart-bar": FaChartBar,
  "clipboard-check": FaClipboardCheck,
  "exclamation-triangle": FaExclamationTriangle,
  "trending-up": IoMdTrendingUp,
  "users": FaUsers,
  "file-text": FiFileText,
  "battery" :TbBatteryFilled,
  "wifi":FaWifi,
  "signal" :MdSignalCellularAlt,
  "flutter": FaFlutter,
  "vscode": VscVscode,
  "stripe": FaStripe,
  "artificial-intelligence": GiArtificialIntelligence,
  "cursor" : VscEditorLayout,
  "google-maps": SiGooglemaps,
  "x-twitter": FaXTwitter,
  "bitbucket": FaBitbucket,
  "whatsapp": ImWhatsapp,
  "brain": LuBrain,
  "asana": SiAsana,
  'jira': SiJira,
  'trello': FaTrello,
  'test': GrTest,
  'motion-photos': MdOutlineMotionPhotosOn,
  'browser': GoBrowser,
  'iphone': MdPhoneIphone,
  'axios': SiAxios,
  'tailwind': RiTailwindCssFill,
  auth : SiGoogleauthenticator,
  manager : MdOutlineManageHistory,
  image : CiImageOn,
  architecture : MdOutlineArchitecture 
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
