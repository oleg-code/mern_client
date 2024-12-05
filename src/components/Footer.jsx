import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Branding or Logo */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <span className="text-lg font-semibold">MyApp</span>
          <p className="text-sm text-gray-400">Your tagline goes here</p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex space-x-4">
          <a
            href="/about"
            className="text-gray-400 hover:text-white text-sm"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white text-sm"
          >
            Contact
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white text-sm"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white text-sm"
          >
            Privacy
          </a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4">
        <p className="text-center text-sm text-gray-500 py-2">
          © 2024 MyApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
