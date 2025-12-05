import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID_ADMIN: process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN || 'template_admin',
  TEMPLATE_ID_USER: process.env.REACT_APP_EMAILJS_TEMPLATE_ID_USER || 'template_user',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key',
  TO_EMAIL: process.env.REACT_APP_TO_EMAIL,
  TO_NAME: process.env.REACT_APP_TO_NAME,
};


// Initialize EmailJS with public key
const initEmailJS = () => {
  try {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Send email to admin (Hardik)
const sendEmailToAdmin = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: EMAILJS_CONFIG.TO_NAME,
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      reply_to: formData.email,
      // Additional metadata
      timestamp: new Date().toLocaleString(),
      user_agent: navigator.userAgent,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_ADMIN,
      templateParams
    );

    console.log('Admin email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send admin email:', error);
    return { success: false, error: error.message };
  }
};

// Send thank you email to user
const sendThankYouEmail = async (formData) => {

  console.log('FormData : ', formData);

  try {
    const templateParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: EMAILJS_CONFIG.TO_NAME,
      from_email: EMAILJS_CONFIG.TO_EMAIL,
      subject: formData.subject,
      original_message: formData.message,
      // Additional personalization
      timestamp: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_USER,
      templateParams
    );

    console.log('Thank you email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send thank you email:', error);
    return { success: false, error: error.message };
  }
};

// Main function to send both emails
export const sendContactEmails = async (formData) => {
  try {
    // Initialize EmailJS if not already done
    initEmailJS();

    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('All fields are required');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    // Send email to admin (Hardik)
    const adminResult = await sendEmailToAdmin(formData);
    
    if (!adminResult.success) {
      throw new Error(`Failed to send notification email: ${adminResult.error}`);
    }

    // Send thank you email to user
    const userResult = await sendThankYouEmail(formData);
    
    if (!userResult.success) {
      console.warn('Thank you email failed, but admin email was sent:', userResult.error);
      // Don't throw error here as the main purpose (notifying admin) was successful
    }

    return {
      success: true,
      message: 'Your message has been sent successfully! Thank you for reaching out.',
      adminEmailSent: adminResult.success,
      thankYouEmailSent: userResult.success,
    };

  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: error.message || 'Failed to send email. Please try again later.',
      error: error.message,
    };
  }
};

// Test EmailJS configuration
export const testEmailJSConfig = async () => {
  try {
    initEmailJS();
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Email Configuration',
      message: 'This is a test message to verify EmailJS configuration.',
    };

    const result = await sendEmailToAdmin(testData);
    return result;
  } catch (error) {
    console.error('EmailJS configuration test failed:', error);
    return { success: false, error: error.message };
  }
};

// Export configuration for reference
export { EMAILJS_CONFIG };

// Initialize EmailJS when the module is imported
initEmailJS();