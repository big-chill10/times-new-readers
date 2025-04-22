
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-reader-DEFAULT text-white mt-12 animate-fade-in">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Times New Readers</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A platform dedicated to bringing you thoughtful articles, captivating stories, 
              and beautiful poetry from writers around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/poems" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Poems
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles/technology" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/articles/science" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/articles/knowledge" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Knowledge
                </Link>
              </li>
              <li>
                <Link to="/articles/history" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  History
                </Link>
              </li>
              <li>
                <Link to="/articles/geography" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                  Geography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-reader-accent transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Email: <a href="mailto:contact@timesnewreaders.com" className="hover:text-reader-accent transition-colors duration-200">contact@timesnewreaders.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Times New Readers. All rights reserved.</p>
          <p className="mt-2">Designed with ♥ by Creative Minds</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
