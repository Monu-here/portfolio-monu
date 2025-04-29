import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { Send, Loader2 } from 'lucide-react';

interface ContactFormProps {
  darkMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ darkMode }) => {
  const { formState, handleChange, handleSubmit, resetForm } = useContactForm();
  const { values, errors, isSubmitting, isSubmitted, error } = formState;

  return (
    <div className={`rounded-xl shadow-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className={`mb-4 p-3 inline-flex items-center justify-center rounded-full ${
            darkMode ? 'bg-green-900/30 text-green-500' : 'bg-green-100 text-green-600'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Thank You!
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Your message has been sent successfully. I'll get back to you soon!
          </p>
          <button
            onClick={resetForm}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h3>
          
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss potential opportunities? Fill out the form below.
          </p>
          
          {error && (
            <div className={`mb-6 p-4 rounded-md ${
              darkMode ? 'bg-red-900/30 text-red-500' : 'bg-red-100 text-red-600'
            }`}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-500'
                } focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-colors`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-500'
                } focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-colors`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 rounded-md border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-500'
                } focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-colors`}
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors ${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;