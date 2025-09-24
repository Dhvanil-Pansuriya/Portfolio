import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaRocket,
  FaStar,
  FaBullseye,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Experience = ({ experiences }) => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-7xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200">
              <motion.div
                className="w-full bg-gradient-to-b from-primary-500 to-accent-500"
                variants={timelineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[26px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-5">
                    <motion.div
                      className="absolute inset-0 bg-primary-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FaBriefcase className="text-primary-500" />
                          <h3 className="text-xl font-bold text-gray-800">
                            {experience.designation}
                          </h3>
                        </div>
                        <h4 className="text-lg font-semibold text-primary-600 mb-2">
                          {experience.organization}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-accent-500" />
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      {experience.achievements && (
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <FaCheckCircle className="text-accent-500" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {experience.achievements.map(
                              (achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  className="flex items-start gap-2 text-sm text-gray-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={
                                    inView
                                      ? { opacity: 1, x: 0 }
                                      : { opacity: 0, x: -20 }
                                  }
                                  transition={{
                                    delay: index * 0.2 + achIndex * 0.1,
                                  }}
                                >
                                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-20" />
                    </motion.div>
                  </div>

                  {/* Side Decoration for larger screens */}
                  <div
                    className={`hidden md:block w-5/12 ${
                      index % 2 === 0 ? "order-last" : "order-first"
                    }`}
                  >
                    <motion.div
                      className="text-center p-8"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <div className="text-6xl opacity-20 flex justify-center">
                        {index % 4 === 0 ? (
                          <FaRocket className="text-blue-500" />
                        ) : index % 4 === 1 ? (
                          <MdWork className="text-gray-600" />
                        ) : index % 4 === 2 ? (
                          <FaStar className="text-yellow-400" />
                        ) : (
                          <FaBullseye className="text-red-500" />
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">
                Professional Growth
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Throughout my career, I've consistently delivered high-quality
                solutions while continuously learning and adapting to new
                technologies. My experience spans from startup environments to
                established companies, giving me a well-rounded perspective on
                software development.
              </p>
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-xs sm:max-w-none mx-auto">
                {[
                  { label: "Years of Experience", value: "11+" },
                  { label: "Companies Worked", value: experiences.length },
                  { label: "Technologies Mastered", value: "20+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
