import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Icon from './Icon';
import { sendContactEmails } from '../services/emailService';

const Contact = ({ personalInfo }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');
    
    try {
      // Send emails using EmailJS service
      const result = await sendContactEmails(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        setSubmitMessage(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'envelope',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-500'
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-500'
    },
    {
      icon: 'map-marker',
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'text-blue-500'
    }
  ];

  // Generate social links from personalInfo
  const socialLinks = personalInfo.socialLinks ? Object.entries(personalInfo.socialLinks).map(([platform, url]) => {
    const colorMap = {
      linkedin: 'hover:text-blue-600',
      github: 'hover:text-gray-800',
      twitter: 'hover:text-blue-400',
      gitlab: 'hover:text-orange-500',
      bitbucket: 'hover:text-blue-500'
    };
    
    return {
      icon: platform,
      label: platform.charAt(0).toUpperCase() + platform.slice(1),
      href: url,
      color: colorMap[platform] || 'hover:text-gray-600'
    };
  }) : [];

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-3 sm:px-4 leading-relaxed">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="glass-effect rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>

                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-3 lg:p-4 bg-white/50 rounded-lg sm:rounded-xl hover:bg-white/80 transition-all duration-300 group overflow-hidden"
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${info.color} bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <Icon name={info.icon} size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base truncate">{info.label}</div>
                        <div className="text-gray-600 text-xs sm:text-sm lg:text-base break-all overflow-wrap-anywhere leading-tight">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">Follow Me</h4>
                  <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/50 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 flex-shrink-0`}
                        whileHover={{ rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        title={social.label}
                      >
                        <Icon name={social.icon} size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                variants={itemVariants}
                className="glass-effect rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-green-50 to-emerald-50"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <h4 className="font-semibold text-green-800 text-xs sm:text-sm lg:text-base">Available for Projects</h4>
                </div>
                <p className="text-green-700 text-xs sm:text-sm leading-relaxed">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss your requirements!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="glass-effect rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-6 sm:py-8 lg:py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Icon name="check-circle" size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-500 mx-auto mb-3 sm:mb-4" />
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-green-600 mb-2 px-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base px-2 mb-2">
                      {submitMessage || "Thank you for reaching out. I'll get back to you soon!"}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm px-2">
                      📧 You should receive a confirmation email shortly.
                    </p>
                  </motion.div>
                ) : (
                  <div>
                    {/* Error Message */}
                    {submitError && (
                      <motion.div
                        className="mb-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg sm:rounded-xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Icon name="exclamation-triangle" size={16} className="text-red-500 flex-shrink-0" />
                          <p className="text-red-700 text-sm sm:text-base">{submitError}</p>
                        </div>
                      </motion.div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 bg-white/50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 bg-white/50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 bg-white/50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                        placeholder="Project Discussion"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 bg-white/50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-sm lg:text-base min-h-[100px] sm:min-h-[120px]"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-primary-500 text-white rounded-lg sm:rounded-xl font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="hidden xs:inline">Sending...</span>
                          <span className="xs:hidden">...</span>
                        </>
                      ) : (
                        <>
                          <Icon name="paper-plane" size={14} className="sm:w-4 sm:h-4" />
                          <span className="hidden xs:inline">Send Message</span>
                          <span className="xs:hidden">Send</span>
                        </>
                      )}
                    </motion.button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16"
          >
            <div className="glass-effect rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-primary-700 px-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed px-2">
                Let's turn your ideas into reality. I'm here to help you build amazing applications 
                that users will love.
              </p>
              <div className="flex justify-center space-x-2 sm:space-x-3 lg:space-x-4 flex-wrap gap-y-2">
                {[
                  { icon: 'lightbulb', color: 'text-yellow-500' },
                  { icon: 'rocket', color: 'text-blue-500' },
                  { icon: 'star', color: 'text-yellow-400' },
                  { icon: 'bullseye', color: 'text-red-500' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <Icon name={item.icon} size={14} className={`${item.color} sm:w-4 sm:h-4 lg:w-5 lg:h-5`} />
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

export default Contact;