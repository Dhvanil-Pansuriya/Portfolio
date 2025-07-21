import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImagePlaceholder from '../ImagePlaceholder';

const StackedScreenshots = ({ screenshots, title = "Application Screenshots", description = "Experience the seamless interface design across all platforms" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`text-center pb-20 min-h-screen bg-primary-50 text-primary-900`}
      style={{
        '--card-height': 'clamp(400px, 45vw, 600px)', // Responsive height
        '--card-margin': '4vw',
        '--card-top-offset': '3rem', // Adjusted for desired overlap
        '--numcards': screenshots.length,
      }}
    >
      {/* Header */}
      <header className="w-4/5 mx-auto h-[40vh] flex items-center justify-center mb-12">
        <motion.div variants={itemVariants} className="text-center">
          <h1 className={`font-light text-5xl mb-4 font-['Inter'] tracking-wide text-primary-900`}>
            {title}
          </h1>
          <p className={`font-light leading-relaxed text-lg font-['Inter'] text-primary-700`}>
            {description}
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="w-4/5 mx-auto">
        <ul 
          className="list-none grid grid-cols-1 gap-[var(--card-margin)] p-0 m-0"
          style={{
            gridTemplateRows: `repeat(var(--numcards), var(--card-height))`,
            paddingBottom: `calc(var(--numcards) * var(--card-top-offset))`,
            marginBottom: 'var(--card-margin)',
          }}
        >
          {screenshots.map((screenshot, index) => (
            <li
              key={index}
              className="sticky top-0"
              style={{
                '--index': index + 1,
                paddingTop: `calc(var(--index) * var(--card-top-offset))`,
              }}
            >
              <div 
                className={`shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch p-6 lg:p-8 rounded-2xl bg-white text-primary-900 transition-all duration-500`}
                style={{
                  transform: `scale(${1 - ((screenshots.length - 1 - index) * 0.01)})`,
                  filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, ${0.1 + (index * 0.02)}))`,
                  zIndex: screenshots.length - index,
                  marginTop: `calc(var(--index) * var(--card-top-offset))`,
                  marginBottom: `calc(var(--index) * var(--card-top-offset))`,
                  
                }}
              >
                <div className="w-full max-w-3xl place-self-center text-left grid gap-4 place-items-start lg:pr-6">
                  <h2 className="font-bold text-3xl lg:text-4xl font-['Inter'] m-0 tracking-wide">
                    {screenshot.title}
                  </h2>
                  <p className="font-light leading-relaxed text-lg font-['Inter']">
                    {screenshot.description}
                  </p>
                </div>
                <figure className="overflow-hidden mt-6 lg:mt-0 flex items-center justify-center h-full">
                  <ImagePlaceholder
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-contain rounded-lg" // Use object-contain for better alignment
                    fallbackText={screenshot.title}
                  />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </motion.div>
  );
};

export default StackedScreenshots;
