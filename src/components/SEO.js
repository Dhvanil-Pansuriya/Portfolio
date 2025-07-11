import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website' 
}) => {
  const { currentTheme, currentThemeInfo } = useTheme();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description);
    }
    
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Theme color based on current theme
    const themeColors = {
      'react-native': '#3b82f6',
      'android': '#22c55e',
      'ios': '#ec4899'
    };
    updateMetaTag('theme-color', themeColors[currentTheme]);

    // Open Graph tags
    updateMetaTag('og:title', title || `Hardik Ramoliya - ${currentThemeInfo.name} Developer`, true);
    updateMetaTag('og:description', description || `Professional ${currentThemeInfo.name} Developer`, true);
    updateMetaTag('og:type', type, true);
    
    if (url) {
      updateMetaTag('og:url', url, true);
    }
    
    if (image) {
      updateMetaTag('og:image', image, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || `Hardik Ramoliya - ${currentThemeInfo.name} Developer`);
    updateMetaTag('twitter:description', description || `Professional ${currentThemeInfo.name} Developer`);
    
    if (image) {
      updateMetaTag('twitter:image', image);
    }

    // Structured data for current theme
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Hardik Ramoliya",
      "jobTitle": `${currentThemeInfo.name} Developer`,
      "description": `Professional ${currentThemeInfo.name} Developer specializing in mobile app development`,
      "url": url || window.location.href,
      "sameAs": [
        "https://linkedin.com/in/hardik-r",
        "https://github.com/hardik-r"
      ],
      "knowsAbout": getSkillsForTheme(currentTheme),
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      }
    };

    // Update structured data
    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type, currentTheme, currentThemeInfo]);

  return null; // This component doesn't render anything
};

// Helper function to get skills based on theme
const getSkillsForTheme = (theme) => {
  const skills = {
    'react-native': [
      'React Native',
      'JavaScript',
      'TypeScript',
      'Redux',
      'Firebase',
      'Mobile App Development'
    ],
    'android': [
      'Android Development',
      'Kotlin',
      'Java',
      'Android SDK',
      'MVVM Architecture',
      'Firebase'
    ],
    'ios': [
      'iOS Development',
      'Swift',
      'SwiftUI',
      'UIKit',
      'Core Data',
      'Xcode'
    ]
  };
  
  return skills[theme] || skills['react-native'];
};

export default SEO;