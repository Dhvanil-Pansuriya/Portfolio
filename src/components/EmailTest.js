import React, { useState } from 'react';
import { testEmailJSConfig, sendContactEmails } from '../services/emailService';

const EmailTest = () => {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runConfigTest = async () => {
    setIsLoading(true);
    setTestResult(null);
    
    try {
      const result = await testEmailJSConfig();
      setTestResult(result);
    } catch (error) {
      setTestResult({ success: false, error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const runFullTest = async () => {
    setIsLoading(true);
    setTestResult(null);
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com', // Replace with a real email for testing
      subject: 'EmailJS Test Message',
      message: 'This is a test message to verify the EmailJS integration is working correctly.'
    };

    try {
      const result = await sendContactEmails(testData);
      setTestResult(result);
    } catch (error) {
      setTestResult({ success: false, error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">EmailJS Test Panel</h2>
      
      <div className="space-y-4">
        <button
          onClick={runConfigTest}
          disabled={isLoading}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Testing...' : 'Test Configuration'}
        </button>
        
        <button
          onClick={runFullTest}
          disabled={isLoading}
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          {isLoading ? 'Testing...' : 'Test Full Email Flow'}
        </button>
      </div>

      {testResult && (
        <div className={`mt-4 p-4 rounded ${testResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <h3 className="font-semibold mb-2">Test Result:</h3>
          <p className="text-sm">
            Status: {testResult.success ? '✅ Success' : '❌ Failed'}
          </p>
          {testResult.message && (
            <p className="text-sm mt-1">Message: {testResult.message}</p>
          )}
          {testResult.error && (
            <p className="text-sm mt-1">Error: {testResult.error}</p>
          )}
          {testResult.adminEmailSent !== undefined && (
            <p className="text-sm mt-1">
              Admin Email: {testResult.adminEmailSent ? '✅ Sent' : '❌ Failed'}
            </p>
          )}
          {testResult.thankYouEmailSent !== undefined && (
            <p className="text-sm mt-1">
              Thank You Email: {testResult.thankYouEmailSent ? '✅ Sent' : '❌ Failed'}
            </p>
          )}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600">
        <h4 className="font-semibold mb-2">Environment Variables Status:</h4>
        <ul className="space-y-1">
          <li>Service ID: {process.env.REACT_APP_EMAILJS_SERVICE_ID ? '✅ Set' : '❌ Missing'}</li>
          <li>Admin Template: {process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN ? '✅ Set' : '❌ Missing'}</li>
          <li>User Template: {process.env.REACT_APP_EMAILJS_TEMPLATE_ID_USER ? '✅ Set' : '❌ Missing'}</li>
          <li>Public Key: {process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? '✅ Set' : '❌ Missing'}</li>
        </ul>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>⚠️ This component is for testing only. Remove it before production deployment.</p>
      </div>
    </div>
  );
};

export default EmailTest;