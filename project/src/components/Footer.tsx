import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-accent-teal" />
              <span className="font-heading font-bold text-xl text-white">AI Think Tank</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Advancing the future of industry through innovative AI research and implementation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-gray-400 hover:text-accent-teal transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-accent-teal transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@aithinktank.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Street</li>
              <li>Tech City, TC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Think Tank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;