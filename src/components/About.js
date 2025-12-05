import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "./Icon";
import ImageWithEnhancedBackground from "./ImageWithEnhancedBackground";

const About = ({
  personalInfo,
  interests,
  education,
  certificates,
  achievements,
  hobbies,
  softSkills,
  languages,
  technicalSkills,
  coreStrengths,
}) => {
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
        staggerChildren: 0.2,
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

  // Dynamic stats based on the portfolio
  const getStats = () => {
    if (personalInfo.name === "Pinal Ramoliya") {
      return [
        { number: "12+", label: "Years Experience", icon: "code" },
        { number: "100+", label: "Projects Completed", icon: "rocket" },
        { number: "99%", label: "Client Acknowledgement", icon: "heart" },
      ];
    } else if (personalInfo.name === "Dhvanil Pansuriya") {
      return [
        { number: "3+", label: "Years Experience", icon: "code" },
        { number: "10+", label: "Projects Completed", icon: "rocket" },
        { number: "110+", label: "Problems Solved", icon: "lightbulb" },
      ];
    } else if (personalInfo.name === "Deep Surti") {
      return [
        { number: "2+", label: "Years Experience", icon: "code" },
        { number: "10+", label: "Projects Completed", icon: "rocket" },
        { number: "99%", label: "Client Acknowledgement", icon: "heart" },
      ];
    }
    return [
      { number: "12+", label: "Years Experience", icon: "code" },
      { number: "100+", label: "Projects Completed", icon: "rocket" },
      { number: "99%", label: "Client Acknowledgement", icon: "heart" },
    ];
  };

  const stats = getStats();

  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4">
              Passionate developer with a love for creating amazing digital
              experiences
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Profile Image and Stats - Left Column */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 xl:col-span-3 flex flex-col items-center lg:items-start space-y-6 sm:space-y-8"
            >
              {/* Enhanced Profile Image */}
              <motion.div
                className="relative w-full flex justify-center lg:justify-start"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image Container - Perfect Square Responsive Size */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  {/* Enhanced Animated Border */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 p-1"
                    animate={{
                      background: [
                        "linear-gradient(45deg, var(--color-secondary-400), var(--color-accent-400), var(--color-primary-400))",
                        "linear-gradient(135deg, var(--color-primary-400), var(--color-secondary-400), var(--color-accent-400))",
                        "linear-gradient(225deg, var(--color-accent-400), var(--color-primary-400), var(--color-secondary-400))",
                        "linear-gradient(315deg, var(--color-secondary-400), var(--color-accent-400), var(--color-primary-400))",
                        "linear-gradient(45deg, var(--color-secondary-400), var(--color-accent-400), var(--color-primary-400))",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center overflow-hidden relative">
                      <ImageWithEnhancedBackground
                        src={personalInfo.image}
                        alt={`${personalInfo.name} - Professional Developer`}
                        name={personalInfo.name}
                        className="w-full h-full"
                        imageClassName="object-cover object-center w-full h-full"
                        showBackground={true}
                      />
                      {/* Enhanced Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats Cards Below Image */}
              <div className="w-full max-w-64 sm:max-w-80 md:max-w-96 lg:max-w-80 xl:max-w-96 space-y-3 sm:space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-white to-gray-50"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                    }
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-secondary-500 to-accent-500 flex items-center justify-center shadow-lg">
                        <Icon
                          name={stat.icon}
                          size={18}
                          className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <motion.h3
                          className="text-xl sm:text-2xl font-bold text-secondary-600"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: index * 0.2 + 0.8 }}
                        >
                          {stat.number}
                        </motion.h3>
                        <p className="text-gray-600 font-medium text-xs sm:text-sm truncate">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content - Middle Column */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 xl:col-span-5"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <Icon
                      name="code"
                      size={20}
                      className="text-secondary-500 sm:w-6 sm:h-6"
                    />
                    <span className="truncate">My Journey</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {personalInfo.journey
                      ? personalInfo.journey
                      : personalInfo.objective}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    {education && education.length > 0 ? (
                      education.map((edu, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-secondary-50"
                        >
                          <Icon
                            name="graduation-cap"
                            size={16}
                            className="text-secondary-500 mt-1 sm:w-5 sm:h-5"
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                              {edu.degree}
                            </h4>
                            <p className="text-gray-600 text-sm truncate">
                              {edu.institution}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500 truncate">
                              {edu.duration} • {edu.grade}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-secondary-50">
                        <Icon
                          name="graduation-cap"
                          size={16}
                          className="text-secondary-500 sm:w-5 sm:h-5"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                            Education
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {personalInfo.education}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Interests */}
                <motion.div
                  className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg p-6 sm:p-8"
                  variants={itemVariants}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <Icon
                      name="brain"
                      size={20}
                      className="text-accent-500 sm:w-6 sm:h-6"
                    />
                    <span className="truncate">What I Do ?</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {interests.map((interest, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-secondary-100 to-accent-100 text-secondary-700 text-xs sm:text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                {/* Achievements - Only for Dhvanil */}
                {achievements && achievements.length > 0 && (
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg p-6 sm:p-8"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Icon
                        name="trophy"
                        size={20}
                        className="text-accent-500 sm:w-6 sm:h-6"
                      />
                      <span className="truncate">Achievements</span>
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-accent-50"
                        >
                          <Icon
                            name="star"
                            size={16}
                            className="text-accent-500 mt-1 sm:w-5 sm:h-5"
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                              {achievement.title}
                            </h4>
                            {achievement.issuer && (
                              <p className="text-gray-600 text-sm truncate">
                                {achievement.issuer}
                              </p>
                            )}
                            {achievement.year && (
                              <p className="text-xs sm:text-sm text-gray-500 truncate">
                                {achievement.year}
                              </p>
                            )}
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Additional Information - Right Column */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 xl:col-span-4"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Skills Highlight */}
                <motion.div
                  className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg p-6 sm:p-8 bg-gradient-to-br from-secondary-50 to-accent-50"
                  variants={itemVariants}
                >
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-secondary-700 flex items-center gap-2 sm:gap-3">
                    <Icon
                      name="lightbulb"
                      size={20}
                      className="text-accent-500 sm:w-6 sm:h-6"
                    />
                    <span className="truncate">Core Strengths</span>
                  </h4>
                  <ul className="space-y-3 sm:space-y-4 text-gray-600">
                    {personalInfo.coreStrengths?.map((strength, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>

                        <div className="min-w-0">
                          <span className="font-semibold text-gray-800 text-sm sm:text-base">
                            {strength.title}
                          </span>

                          {strength.description && (
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                              {strength.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Professional Approach */}
                <motion.div
                  className="bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg p-6 sm:p-8 bg-gradient-to-br from-primary-50 to-secondary-50"
                  variants={itemVariants}
                >
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary-700 flex items-center gap-2 sm:gap-3">
                    <Icon
                      name="bullseye"
                      size={20}
                      className="text-primary-500 sm:w-6 sm:h-6"
                    />
                    <span className="truncate">My Approach</span>
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Icon
                        name="check-circle"
                        size={16}
                        className="text-green-500 mt-1 sm:w-5 sm:h-5"
                      />
                      <div className="min-w-0">
                        <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                          Problem-Solving First
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Understanding the core problem before jumping into
                          solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Icon
                        name="check-circle"
                        size={16}
                        className="text-green-500 mt-1 sm:w-5 sm:h-5"
                      />
                      <div className="min-w-0">
                        <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                          User-Centric Design
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Prioritizing user experience in every development
                          decision
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Icon
                        name="check-circle"
                        size={16}
                        className="text-green-500 mt-1 sm:w-5 sm:h-5"
                      />
                      <div className="min-w-0">
                        <h5 className="font-semibold text-gray-800 text-sm sm:text-base">
                          Quality Assurance
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Thorough testing and optimization for peak performance
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
