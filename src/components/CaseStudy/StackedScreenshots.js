import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImagePlaceholder from '../ImagePlaceholder';

const StackedScreenshots = ({ screenshots, title = "Application Screenshots", description = "Experience the seamless interface design across all platforms" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
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

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`text-center pb-20 min-h-screen bg-primary-50 text-primary-900`}
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
      <main ref={scrollRef} className="w-4/5 mx-auto relative" style={{ height: `calc(${screenshots.length} * 100vh)` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <ul className="list-none p-0 m-0 w-full h-full relative">
            {screenshots.map((screenshot, index) => (
              <ScreenshotCard
                key={index}
                index={index}
                screenshot={screenshot}
                scrollYProgress={scrollYProgress}
                totalScreenshots={screenshots.length}
              />
            ))}
          </ul>
        </div>
      </main>
    </motion.div>
  );
};

const ScreenshotCard = ({ index, screenshot, scrollYProgress, totalScreenshots }) => {
  const start = index / totalScreenshots;
  const end = (index + 1) / totalScreenshots;

  // When the card is active, its blur is 0. As it gets scrolled past, it blurs.
  const blurValue = useTransform(scrollYProgress, [start, end], [0, 4]);
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  // The active card is at full scale. It shrinks as it moves to the back.
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
  
  // The active card is fully opaque. It fades as it moves to the back.
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0.7]);

  return (
    <motion.li
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        className={`shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch p-6 lg:p-8 rounded-2xl bg-white text-primary-900 w-full max-w-6xl`}
        style={{
          filter: blur,
          scale: scale,
          opacity: opacity,
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
            className="w-full h-full object-contain rounded-lg"
            fallbackText={screenshot.title}
          />
        </figure>
      </motion.div>
    </motion.li>
  );
};

export default StackedScreenshots;

