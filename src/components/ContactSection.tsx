import React from 'react';
import ContactForm from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Me
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Interested in working together? Let's discuss your project or any opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Connect
              </h3>
              
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Whether you need a custom web application, API development, or database design, 
                I'm here to help bring your ideas to life with Laravel. 
                Feel free to reach out using the form or contact details below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${
                    darkMode ? 'bg-gray-800 text-red-500' : 'bg-gray-200 text-red-600'
                  }`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className={`text-md font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </h4>
                    <a 
                      href="mailto:kumar.monuthakur12@gmail.com" 
                      className={`hover:underline ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      tmonu995@gmail.com , kumar.monuthakur12@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${
                    darkMode ? 'bg-gray-800 text-red-500' : 'bg-gray-200 text-red-600'
                  }`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className={`text-md font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Location
                    </h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Biratnagar, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${
                    darkMode ? 'bg-gray-800 text-red-500' : 'bg-gray-200 text-red-600'
                  }`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className={`text-md font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </h4>
                    <a 
                      href="tel: +9779811343963" 
                      className={`hover:underline ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      +977 9811343963
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Available For Freelance
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                I'm currently available for freelance projects and contract work. If you need a 
                Laravel expert for your team or project, let's talk!
              </p>
            </div>
          </div>
          
          <div>
            <ContactForm darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;