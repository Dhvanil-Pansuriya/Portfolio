import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "./Icon";

const Skills = ({ skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  // Function to process skills data - handles both old flat array and new categorized object
  const processSkillsData = (skillsData) => {
    // Check if skills is already categorized (object with category keys)
    if (
      skillsData &&
      typeof skillsData === "object" &&
      !Array.isArray(skillsData)
    ) {
      // New categorized format - normalize category names to title case
      const normalizedSkills = {};
      Object.entries(skillsData).forEach(([category, skillList]) => {
        // Normalize category names (capitalize first letter, handle special cases)
        const normalizedCategory =
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        const finalCategory =
          normalizedCategory === "Others" ? "Other" : normalizedCategory;
        normalizedSkills[finalCategory] = skillList;
      });
      return normalizedSkills;
    }

    // Old flat array format - return empty object as we're removing static categorization
    if (Array.isArray(skillsData)) {
      console.warn(
        "Flat array skills format is deprecated. Please use categorized object format."
      );
      return { Uncategorized: skillsData };
    }

    // Fallback - return empty object
    return {};
  };

  const categorizedSkills = processSkillsData(skills);

  // Dynamic skill icon mapping - maps skill names to icon names and colors
  const getSkillIcon = (skill) => {
    // Create a comprehensive mapping for skill icons
    const skillIconMap = {
      // Languages
      php: { name: "php", className: "text-indigo-700" },
      html: { name: "html", className: "text-orange-600" },
      javascript: { name: "javascript", className: "text-yellow-500" },
      css: { name: "css", className: "text-blue-500" },

      // Frameworks
      laravel: { name: "laravel", className: "text-red-600" },
      yii2: { name: "yii2", className: "text-green-700" },
      vue: { name: "vue", className: "text-green-500" },
      react: { name: "react", className: "text-blue-500" },
      "node.js": { name: "node.js", className: "text-green-600" },
      jquery: { name: "jquery", className: "text-blue-400" },
      apache: { name: "apache", className: "text-orange-700" },
      // Tools
      git: { name: "git", className: "text-red-500" },
      "apache-jmeter": { name: "apachejmeter", className: "text-orange-700" },
      schema: { name: "schema", className: "text-gray-600" },
      // Databases
      mysql: { name: "mysql", className: "text-blue-700" },
      mongodb: { name: "mongodb", className: "text-green-700" },
      "schema-design": { name: "database", className: "text-gray-700" },
      project: { name: "project", className: "text-purple-600" },
      website : { name: "website", className: "text-blue-500" },
      "core animation" : { name: "animation", className: "text-yellow-500" },
      // Others
      "project-management": {
        name: "project-diagram",
        className: "text-blue-600",
      },
      "website-performance": {
        name: "tachometer-alt",
        className: "text-green-600",
      },
      "website-load-testing": { name: "cogs", className: "text-gray-600" },

      // Existing mappings
      // Languages
      typescript: { name: "typescript", className: "text-blue-600" },
      swift: { name: "swift", className: "text-orange-500" },
      kotlin: { name: "kotlin", className: "text-purple-500" },
      java: { name: "coffee", className: "text-red-600" },
      "objective-c": { name: "objective-c", className: "text-gray-600" },
      "json parsing": { name: "code", className: "text-green-500" },

      // Frameworks & Libraries
      "react native": { name: "react", className: "text-blue-500" },
      redux: { name: "redux", className: "text-purple-600" },
      firebase: { name: "firebase", className: "text-orange-500" },
      swiftui: { name: "swift", className: "text-blue-500" },
      uikit: { name: "apple", className: "text-blue-600" },
      "ios sdk": { name: "apple", className: "text-gray-700" },
      "android sdk": { name: "android", className: "text-green-500" },
      "mvvm architecture": { name: "code", className: "text-purple-500" },
      rxjava: { name: "coffee", className: "text-orange-600" },
      retrofit: { name: "integration", className: "text-green-600" },
      "react navigation": { name: "react", className: "text-blue-400" },
      expo: { name: "react", className: "text-indigo-500" },

      // Tools
      xcode: { name: "xcode", className: "text-blue-500" },
      "android studio": { name: "android", className: "text-green-600" },
      cocoapods: { name: "tools", className: "text-orange-500" },
      "swift package manager": { name: "swift", className: "text-orange-400" },
      instruments: { name: "tools", className: "text-blue-400" },
      "app store connect": { name: "app-store", className: "text-blue-600" },
      testflight: { name: "app-store", className: "text-blue-500" },
      jira: { name: "tools", className: "text-blue-700" },

      // Platforms
      android: { name: "android", className: "text-green-500" },
      ios: { name: "apple", className: "text-gray-700" },

      // Databases
      "core data": { name: "tools", className: "text-blue-600" },
      cloudkit: { name: "cloudKit", className: "text-blue-500" },
      "room database": { name: "database", className: "text-green-600" },
      sqlite: { name: "tools", className: "text-blue-700" },
      "real-time database": { name: "database", className: "text-orange-600" },
      asyncstorage: { name: "sync", className: "text-purple-500" },
      "aws s3": { name: "aws", className: "text-orange-500" },

      // Development concepts
      debugging: { name: "tools", className: "text-gray-600" },
      "performance optimization": { name: "rocket", className: "text-red-500" },
      "rest apis": { name: "api", className: "text-blue-500" },
      "push notifications": {
        name: "notification",
        className: "text-green-500",
      },
      "push notifications (fcm)": {
        name: "mobile",
        className: "text-orange-500",
      },
      "in-app purchases": { name: "purchase", className: "text-purple-500" },
      "in-app purchase": { name: "purchase", className: "text-purple-500" },
      "social integration": { name: "social", className: "text-blue-400" },
      "maps integration": { name: "integration", className: "text-green-400" },
      "google maps": { name: "integration", className: "text-green-500" },
      mapkit: { name: "integration", className: "text-blue-500" },
      "material design": { name: "android", className: "text-green-400" },
      "custom views": { name: "code", className: "text-purple-400" },
      "auto layout": { name: "code", className: "text-blue-400" },
      "mvc/mvvm": { name: "code", className: "text-purple-500" },
      "grand central dispatch": { name: "code", className: "text-gray-500" },
      avfoundation: { name: "apple", className: "text-red-500" },
      "bluetooth low energy (ble)": {
        name: "mobile",
        className: "text-blue-500",
      },
      "beacon technology": { name: "mobile", className: "text-purple-400" },
      "play store publishing": {
        name: "google-play",
        className: "text-green-500",
      },

      // Default categories
      database: { name: "tools", className: "text-blue-600" },
      framework: { name: "code", className: "text-green-600" },
      tool: { name: "tools", className: "text-gray-600" },
      language: { name: "code", className: "text-blue-500" },
    };

    // Normalize skill name for matching
    const normalizedSkill = skill.toLowerCase().trim();

    // Direct match
    if (skillIconMap[normalizedSkill]) {
      const { name, className } = skillIconMap[normalizedSkill];
      return (
        <Icon
          name={name}
          size={24}
          className={`${className} group-hover:drop-shadow-lg transition-all duration-300`}
        />
      );
    }

    // Partial match for compound skill names
    for (const [key, iconInfo] of Object.entries(skillIconMap)) {
      if (normalizedSkill.includes(key) || key.includes(normalizedSkill)) {
        return (
          <Icon
            name={iconInfo.name}
            size={24}
            className={`${iconInfo.className} group-hover:drop-shadow-lg transition-all duration-300`}
          />
        );
      }
    }

    // Fallback icon
    return (
      <Icon
        name="bolt"
        size={24}
        className="text-yellow-500 group-hover:drop-shadow-lg transition-all duration-300"
      />
    );
  };

  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Roadmap */}
          <div className="relative mx-auto max-w-4xl">
            {/* Removed center vertical line */}
            <div className="space-y-16 relative z-10">
              {Object.entries(categorizedSkills).map(
                ([category, categorySkills], categoryIndex) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="relative flex"
                  >
                    {/* Timeline Dot */}
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-6 h-6 rounded-full bg-secondary-500 border-4 border-white shadow-lg z-10" />
                      {categoryIndex !==
                        Object.entries(categorizedSkills).length - 1 && (
                        <div className="flex-1 w-1 bg-secondary-200" />
                      )}
                    </div>
                    {/* Category and Skills */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-secondary-700">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {categorySkills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            variants={skillVariants}
                            className="group flex items-center space-x-2 bg-white border border-gray-100 rounded-xl px-4 py-2 shadow hover:border-secondary-400 transition"
                            whileHover={{
                              scale: 1.08,
                              y: -4,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ delay: 0.1 * index }}
                          >
                            <span>{getSkillIcon(skill)}</span>
                            <span className="font-semibold text-gray-800 text-sm group-hover:text-secondary-700 transition">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <div className="card-professional p-6 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-3 text-secondary-700">
                Continuous Learning
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Technology evolves rapidly, and I'm committed to staying current
                with the latest trends, tools, and best practices. I regularly
                explore new technologies and contribute to open-source projects
                to expand my skill set and give back to the developer community.
              </p>

              <div className="flex justify-center mt-4 space-x-3">
                {[
                  { name: "book", color: "text-blue-600" },
                  { name: "rocket", color: "text-red-500" },
                  { name: "lightbulb", color: "text-yellow-500" },
                  { name: "tools", color: "text-gray-600" },
                ].map((iconInfo, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-secondary-100 rounded-professional flex items-center justify-center text-xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Icon
                      name={iconInfo.name}
                      size={20}
                      className={iconInfo.color}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
