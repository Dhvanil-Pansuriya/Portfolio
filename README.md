# Hardik Ramoliya - Mobile Developer Portfolio

A modern, responsive, and animated portfolio website built with React and Tailwind CSS, showcasing three different developer profiles: React Native, Android, and iOS development.

## 🚀 Features

- **Dynamic Theme System**: Switch between React Native, Android, and iOS themes with a single click
- **Modern Animations**: Smooth animations using Framer Motion
- **Responsive Design**: Optimized for all devices and screen sizes
- **One-Page Layout**: Smooth scrolling navigation between sections
- **Interactive Components**: Engaging user interface with hover effects and transitions
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **PWA Ready**: Progressive Web App capabilities
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🎨 Theme System

The portfolio features a dynamic theme system that allows you to showcase different developer profiles:

- **React Native Theme**: Blue color scheme with React Native specific content
- **Android Theme**: Green color scheme with Android development focus
- **iOS Theme**: Pink/Purple color scheme with iOS development emphasis

All themes share the same layout and animations but display different:
- Personal information and titles
- Skills and technologies
- Work experience
- Project portfolios
- Color schemes

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for consistent iconography
- **React Intersection Observer**: For scroll-based animations
- **CSS Custom Properties**: For dynamic theming

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── About.js         # About section
│   ├── Contact.js       # Contact form and information
│   ├── Experience.js    # Work experience timeline
│   ├── Hero.js          # Landing section
│   ├── Navigation.js    # Navigation bar and mobile menu
│   ├── Projects.js      # Project showcase
│   ├─�� Skills.js        # Skills and technologies
│   └── ThemeSelector.js # Theme switching component
├── contexts/            # React contexts
│   └── ThemeContext.js  # Theme management
├── data/               # Portfolio data
│   ├── androidData.js  # Android developer data
│   ├── iosData.js      # iOS developer data
│   └── reactNativeData.js # React Native developer data
├── styles/             # CSS files
│   └── themes.css      # Theme color definitions
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🎯 Customization

### Changing Theme Colors

To modify theme colors, edit the CSS custom properties in `src/styles/themes.css`:

```css
.theme-react-native {
  --color-primary-500: #3b82f6;  /* Change primary color */
  --color-secondary-500: #0ea5e9; /* Change secondary color */
  --color-accent-500: #10b981;    /* Change accent color */
}
```

### Adding New Content

1. **Personal Information**: Update the `personalInfo` object in the respective data files
2. **Skills**: Modify the `skills` array in the data files
3. **Experience**: Update the `experiences` array with your work history
4. **Projects**: Add your projects to the `projects` array
5. **Interests**: Update the `interests` array

### Adding Your Profile Image

Replace the placeholder profile image section in `Hero.js` with your actual image:

```jsx
<img 
  src="/path-to-your-image.jpg" 
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured layout with all animations
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized mobile experience with hamburger menu

## 🎨 Animation Features

- **Scroll-based animations**: Elements animate as they come into view
- **Hover effects**: Interactive hover states on buttons and cards
- **Loading animations**: Smooth loading states and transitions
- **Floating elements**: Subtle floating animations for visual appeal
- **Theme transitions**: Smooth color transitions when switching themes

## 🔧 Build and Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting platform**
   - Upload the `build` folder to your web server
   - Configure your server to serve the `index.html` for all routes

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting and lazy loading
- **SEO**: Structured data and meta tags for search engines

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

If you have any questions or would like to discuss a project, feel free to reach out:

- **Email**: hardik@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ using React and Tailwind CSS**