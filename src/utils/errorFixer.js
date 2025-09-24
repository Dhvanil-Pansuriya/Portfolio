// Error Detection and Fixing Utility
export const detectAndFixErrors = () => {
  const errors = [];
  const fixes = [];

  // Check for common React errors
  try {
    // 1. Check for missing alt attributes on images
    const images = document.querySelectorAll("img:not([alt])");
    if (images.length > 0) {
      errors.push(`Found ${images.length} images without alt attributes`);
      fixes.push("Add alt attributes to all images for accessibility");
    }

    // 2. Check for missing key props in lists (this would be caught at build time)
    // 3. Check for console errors
    const originalConsoleError = console.error;
    let consoleErrors = [];
    console.error = (...args) => {
      consoleErrors.push(args.join(" "));
      originalConsoleError.apply(console, args);
    };

    // 4. Check for broken links
    const links = document.querySelectorAll('a[href="#"], a[href=""]');
    if (links.length > 0) {
      errors.push(`Found ${links.length} broken or empty links`);
      fixes.push(
        "Update href attributes with proper URLs or use button elements for actions"
      );
    }

    // 5. Check for missing form labels
    const inputs = document.querySelectorAll(
      "input:not([aria-label]):not([aria-labelledby])"
    );
    const inputsWithoutLabels = Array.from(inputs).filter((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      return !label && input.type !== "hidden";
    });

    if (inputsWithoutLabels.length > 0) {
      errors.push(
        `Found ${inputsWithoutLabels.length} form inputs without proper labels`
      );
      fixes.push("Add proper labels or aria-label attributes to form inputs");
    }

    // 6. Check for performance issues
    const largeImages = document.querySelectorAll("img");
    largeImages.forEach((img, index) => {
      if (img.naturalWidth > 2000 || img.naturalHeight > 2000) {
        errors.push(
          `Image ${index + 1} is very large (${img.naturalWidth}x${
            img.naturalHeight
          })`
        );
        fixes.push("Optimize large images for better performance");
      }
    });

    // 7. Check for accessibility issues
    const elementsWithoutFocus = document.querySelectorAll(
      "button:not([tabindex]), a:not([tabindex])"
    );
    // This is just a basic check - more comprehensive accessibility auditing would be needed
  } catch (error) {
    errors.push(`Error during detection: ${error.message}`);
  }

  return { errors, fixes };
};

// Performance optimization utilities
export const optimizePerformance = () => {
  const optimizations = [];

  // 1. Lazy load images
  const images = document.querySelectorAll("img[src]");
  images.forEach((img) => {
    if (!img.loading) {
      img.loading = "lazy";
      optimizations.push("Added lazy loading to images");
    }
  });

  // 2. Preload critical resources
  const criticalImages = document.querySelectorAll('img[data-critical="true"]');
  criticalImages.forEach((img) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = img.src;
    document.head.appendChild(link);
    optimizations.push("Preloaded critical images");
  });

  // 3. Add intersection observer for animations
  if ("IntersectionObserver" in window) {
    const animatedElements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => observer.observe(el));
    if (animatedElements.length > 0) {
      optimizations.push(
        "Added intersection observer for performance-optimized animations"
      );
    }
  }

  return optimizations;
};

// Accessibility improvements
export const improveAccessibility = () => {
  const improvements = [];

  // 1. Add skip links
  if (!document.querySelector(".skip-link")) {
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.className =
      "skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 z-50";
    skipLink.textContent = "Skip to main content";
    document.body.insertBefore(skipLink, document.body.firstChild);
    improvements.push("Added skip link for keyboard navigation");
  }

  // 2. Improve focus management
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  focusableElements.forEach((el) => {
    if (!el.classList.contains("focus:outline-none") && !el.style.outline) {
      el.style.outlineOffset = "2px";
    }
  });

  if (focusableElements.length > 0) {
    improvements.push(
      "Enhanced focus indicators for better keyboard navigation"
    );
  }

  // 3. Add ARIA landmarks
  const main = document.querySelector("main");
  if (main && !main.getAttribute("role")) {
    main.setAttribute("role", "main");
    main.id = "main-content";
    improvements.push("Added main landmark");
  }

  const nav = document.querySelector("nav");
  if (nav && !nav.getAttribute("role")) {
    nav.setAttribute("role", "navigation");
    nav.setAttribute("aria-label", "Main navigation");
    improvements.push("Added navigation landmark");
  }

  return improvements;
};

// SEO improvements
export const improveSEO = () => {
  const improvements = [];

  // 1. Check meta tags
  if (!document.querySelector('meta[name="description"]')) {
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Professional portfolio showcasing modern web development skills and projects";
    document.head.appendChild(metaDesc);
    improvements.push("Added meta description");
  }

  // 2. Check for proper heading hierarchy
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  let hasH1 = false;
  headings.forEach((heading) => {
    if (heading.tagName === "H1") {
      hasH1 = true;
    }
  });

  if (!hasH1) {
    improvements.push("Warning: No H1 tag found - add one for better SEO");
  }

  // 3. Add structured data
  if (!document.querySelector('script[type="application/ld+json"]')) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Hardik Ramoliya",
      jobTitle: "Software Developer",
      url: window.location.origin,
      sameAs: [
        "https://github.com/hardik-ramoliya-ramoliya",
        "https://linkedin.com/in/hardik-ramoliya-ramoliya",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    improvements.push(
      "Added structured data for better search engine understanding"
    );
  }

  return improvements;
};

// Main function to run all fixes
export const runAllFixes = () => {
  const results = {
    errors: [],
    fixes: [],
    optimizations: [],
    accessibilityImprovements: [],
    seoImprovements: [],
  };

  try {
    const errorResults = detectAndFixErrors();
    results.errors = errorResults.errors;
    results.fixes = errorResults.fixes;

    results.optimizations = optimizePerformance();
    results.accessibilityImprovements = improveAccessibility();
    results.seoImprovements = improveSEO();

    console.log("🔧 Portfolio Optimization Results:", results);

    return results;
  } catch (error) {
    console.error("Error running fixes:", error);
    return results;
  }
};
