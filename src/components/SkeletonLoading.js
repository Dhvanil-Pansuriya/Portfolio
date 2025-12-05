import React from "react";
import { motion } from "framer-motion";
 
// Enhanced skeleton primitives with better animations
const SkeletonBox = ({ className = "", delay = 0 }) => (
  <motion.div
    className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] rounded relative overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: 0,
      backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
    }}
    transition={{
      opacity: { duration: 0.4, delay },
      y: { duration: 0.4, delay },
      backgroundPosition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer-fast" />
  </motion.div>
);
 
const SkeletonCircle = ({ size = "w-16 h-16", delay = 0 }) => (
  <motion.div
    className={`${size} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] rounded-full relative overflow-hidden`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
    }}
    transition={{
      opacity: { duration: 0.4, delay },
      scale: { duration: 0.4, delay, type: "spring", stiffness: 200 },
      backgroundPosition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer-fast" />
  </motion.div>
);
 
const SkeletonText = ({ width = "w-full", height = "h-4", delay = 0 }) => (
  <SkeletonBox className={`${width} ${height}`} delay={delay} />
);
 
// Enhanced Navigation Skeleton - matches real Navigation component exactly
const NavigationSkeleton = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-lg">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-16">
        {/* Logo skeleton */}
        <div className="flex items-center space-x-2">
          <SkeletonCircle size="w-10 h-10" delay={0} />
          <div className="hidden sm:block">
            <SkeletonText width="w-32" height="h-6" delay={0} />
          </div>
        </div>
 
        {/* Desktop menu skeleton */}
        <div className="hidden lg:flex items-center space-x-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SkeletonBox 
              key={item} 
              className="w-20 h-10" 
              delay={0}
            />
          ))}
        </div>
 
        {/* Mobile menu button skeleton */}
        <div className="lg:hidden">
          <SkeletonBox className="w-10 h-10" delay={0} />
        </div>
      </div>
    </div>
  </nav>
);
 
// Enhanced Hero Section with beautiful animations
const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16">
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content with stagger */}
        <motion.div 
          className="flex-1 space-y-6 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SkeletonText width="w-24" height="h-6" delay={0.2} />
          <SkeletonText width="w-full" height="h-12" delay={0.25} />
          <SkeletonText width="w-5/6" height="h-12" delay={0.3} />
          <div className="space-y-3 pt-4">
            <SkeletonText width="w-full" height="h-5" delay={0.35} />
            <SkeletonText width="w-11/12" height="h-5" delay={0.4} />
            <SkeletonText width="w-10/12" height="h-5" delay={0.45} />
          </div>
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <SkeletonBox className="w-40 h-12 rounded-md" delay={0.5} />
            <SkeletonBox className="w-40 h-12 rounded-md" delay={0.55} />
          </div>
          {/* Social links */}
          <div className="flex gap-3 pt-4">
            {[1, 2, 3, 4].map((item, index) => (
              <SkeletonCircle 
                key={item} 
                size="w-10 h-10" 
                delay={0.6 + index * 0.05}
              />
            ))}
          </div>
        </motion.div>
 
        {/* Profile image with scale animation */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <SkeletonCircle size="w-64 h-64 lg:w-80 lg:h-80" delay={0} />
        </motion.div>
      </div>
    </div>
  </div>
);
 
// Enhanced About Section
const AboutSkeleton = () => (
  <motion.div 
    className="py-20 bg-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <SkeletonText width="w-48 h-10 mx-auto" delay={0.4} />
          <div className="mt-4">
            <SkeletonText width="w-64 h-6 mx-auto" delay={0.45} />
          </div>
        </div>
 
        {/* About content */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((line, index) => (
            <SkeletonText 
              key={line}
              width={index === 2 ? "w-5/6" : index === 4 ? "w-4/5" : "w-full"} 
              height="h-5" 
              delay={0.5 + index * 0.05}
            />
          ))}
        </div>
 
        {/* Interests grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[1, 2, 3, 4].map((item, index) => (
            <SkeletonBox 
              key={item} 
              className="h-24 rounded-lg" 
              delay={0.75 + index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);
 
// Enhanced Skills Section
const SkillsSkeleton = () => (
  <motion.div 
    className="py-20 bg-gradient-to-br from-gray-50 to-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <div className="container mx-auto px-6">
      {/* Section heading */}
      <div className="text-center mb-12">
        <SkeletonText width="w-40 h-10 mx-auto" delay={0.5} />
        <div className="mt-4">
          <SkeletonText width="w-56 h-6 mx-auto" delay={0.55} />
        </div>
      </div>
 
      {/* Skills categories */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {[1, 2, 3].map((category, catIndex) => (
          <div key={category}>
            <SkeletonText width="w-48 h-8 mb-6" delay={0.6 + catIndex * 0.1} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((skill, skillIndex) => (
                <SkeletonBox 
                  key={skill} 
                  className="h-32 rounded-lg" 
                  delay={0.65 + catIndex * 0.1 + skillIndex * 0.03}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
 
// Enhanced Experience Section with timeline
const ExperienceSkeleton = () => (
  <motion.div 
    className="py-20 bg-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <div className="container mx-auto px-6">
      {/* Section heading */}
      <div className="text-center mb-12">
        <SkeletonText width="w-48 h-10 mx-auto" delay={0.6} />
        <div className="mt-4">
          <SkeletonText width="w-64 h-6 mx-auto" delay={0.65} />
        </div>
      </div>
 
      {/* Experience timeline */}
      <div className="max-w-4xl mx-auto space-y-8">
        {[1, 2, 3, 4].map((exp, index) => (
          <motion.div 
            key={exp} 
            className="flex gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
          >
            {/* Timeline dot and line */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <SkeletonCircle size="w-4 h-4" delay={0} />
              {index < 3 && (
                <div className="w-0.5 h-full bg-gray-200 mt-2" />
              )}
            </div>
 
            {/* Experience card */}
            <div className="flex-1 pb-8">
              <SkeletonBox className="w-full h-48 rounded-lg" delay={0} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);
 
// Enhanced Projects Section with grid
const ProjectsSkeleton = () => (
  <motion.div 
    className="py-20 bg-gradient-to-br from-gray-50 to-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <div className="container mx-auto px-6">
      {/* Section heading */}
      <div className="text-center mb-12">
        <SkeletonText width="w-40 h-10 mx-auto" delay={0.7} />
        <div className="mt-4">
          <SkeletonText width="w-56 h-6 mx-auto" delay={0.75} />
        </div>
      </div>
 
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((project, index) => (
          <motion.div 
            key={project} 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
          >
            {/* Project image */}
            <SkeletonBox className="w-full h-48 rounded-lg" delay={0} />
            {/* Project title */}
            <SkeletonText width="w-3/4" height="h-6" delay={0} />
            {/* Project description */}
            <div className="space-y-2">
              <SkeletonText width="w-full" height="h-4" delay={0} />
              <SkeletonText width="w-5/6" height="h-4" delay={0} />
              <SkeletonText width="w-4/5" height="h-4" delay={0} />
            </div>
            {/* Project tags */}
            <div className="flex gap-2 flex-wrap">
              <SkeletonBox className="w-16 h-6 rounded-full" delay={0} />
              <SkeletonBox className="w-20 h-6 rounded-full" delay={0} />
              <SkeletonBox className="w-16 h-6 rounded-full" delay={0} />
            </div>
            {/* Project buttons */}
            <div className="flex gap-3 pt-2">
              <SkeletonBox className="flex-1 h-10 rounded-md" delay={0} />
              <SkeletonBox className="flex-1 h-10 rounded-md" delay={0} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);
 
// Enhanced Contact Section
const ContactSkeleton = () => (
  <motion.div 
    className="py-20 bg-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.7 }}
  >
    <div className="container mx-auto px-6">
      {/* Section heading */}
      <div className="text-center mb-12">
        <SkeletonText width="w-48 h-10 mx-auto" delay={0.8} />
        <div className="mt-4">
          <SkeletonText width="w-64 h-6 mx-auto" delay={0.85} />
        </div>
      </div>
 
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {/* Form fields */}
            {[1, 2, 3].map((field, index) => (
              <div key={field} className="space-y-2">
                <SkeletonText width="w-24 h-4" delay={0.95 + index * 0.05} />
                <SkeletonBox className="w-full h-12 rounded-md" delay={0.95 + index * 0.05} />
              </div>
            ))}
            {/* Message field */}
            <div className="space-y-2">
              <SkeletonText width="w-24 h-4" delay={1.1} />
              <SkeletonBox className="w-full h-32 rounded-md" delay={1.1} />
            </div>
            {/* Submit button */}
            <SkeletonBox className="w-full h-12 rounded-md" delay={1.15} />
          </motion.div>
 
          {/* Contact info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {[1, 2, 3].map((info, index) => (
              <SkeletonBox 
                key={info} 
                className="h-24 rounded-lg" 
                delay={1.05 + index * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);
 
// Enhanced Footer
const FooterSkeleton = () => (
  <motion.footer 
    className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <SkeletonCircle size="w-12 h-12" delay={0.9} />
        
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5, 6].map((link, index) => (
            <SkeletonBox 
              key={link} 
              className="w-20 h-4 rounded" 
              delay={0.95 + index * 0.03}
            />
          ))}
        </div>
 
        {/* Social links */}
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((social, index) => (
            <SkeletonCircle 
              key={social} 
              size="w-10 h-10" 
              delay={1.1 + index * 0.05}
            />
          ))}
        </div>
 
        {/* Divider */}
        <div className="w-full max-w-4xl">
          <SkeletonBox className="w-full h-px" delay={1.25} />
        </div>
 
        {/* Copyright */}
        <SkeletonText width="w-64 h-4" delay={1.3} />
      </div>
    </div>
  </motion.footer>
);
 
// Main Enhanced Skeleton Loading Component
const SkeletonLoading = () => {
  return (
    <div
      className="min-h-screen bg-white overflow-hidden"
      role="status"
      aria-label="Loading portfolio content"
      aria-live="polite"
    >
      <NavigationSkeleton />
      <HeroSkeleton />
      <AboutSkeleton />
      <SkillsSkeleton />
      <ExperienceSkeleton />
      <ProjectsSkeleton />
      <ContactSkeleton />
      <FooterSkeleton />
 
      {/* Screen reader announcement */}
      <span className="sr-only">Loading portfolio content, please wait...</span>
      
      {/* Loading indicator for screen readers */}
      <div className="sr-only" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
        Loading: 50%
      </div>
    </div>
  );
};
 
export default SkeletonLoading;