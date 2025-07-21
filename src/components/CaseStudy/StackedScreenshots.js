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
      className="bg-gray-900 text-stone-200 text-center pb-20 min-h-screen"
      style={{
        '--card-height': '45vw', // Increased from 40vw to make images larger
        '--card-margin': '4vw',
        '--card-top-offset': '1em',
        '--numcards': screenshots.length,
      }}
    >
      {/* Header */}
      <header className="w-4/5 mx-auto h-[35vh] flex items-center justify-center mb-20">
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-light text-5xl mb-4 font-['Inter'] tracking-wide">
            {title}
          </h1>
          <p className="font-light leading-relaxed text-lg font-['Inter']">
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
              <div className="shadow-lg bg-stone-50 text-gray-900 overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch p-6 lg:p-8">
                <div className="w-full max-w-3xl place-self-center text-left grid gap-4 place-items-start lg:pr-6">
                  <h2 className="font-bold text-3xl lg:text-4xl font-['Inter'] m-0 tracking-wide">
                    {screenshot.title}
                  </h2>
                  <p className="font-light leading-relaxed text-lg font-['Inter']">
                    {screenshot.description}
                  </p>
                </div>
                <figure className="overflow-hidden mt-6 lg:mt-0">
                  <ImagePlaceholder
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover rounded-sm min-h-[300px] lg:min-h-[400px]" // Increased min-height for larger images
                    fallbackText={screenshot.title}
                  />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .stacked-screenshots-container {
            --card-height: 70vw; /* Increased from 60vw for larger mobile images */
            --card-margin: 6vw;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default StackedScreenshots;