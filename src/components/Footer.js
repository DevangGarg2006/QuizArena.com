// src/components/Footer.js
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
        
        {/* Contact Info */}
        <div className="mb-3 mb-md-0 text-center text-md-start">
          <p className="mb-1">
            <strong>Contact:</strong> +91 9*7*5 4***0
          </p>
          <p className="mb-0">
            <strong>Office:</strong>  
            123 Cyber Greens, Sector 23, Gurugram, Haryana 122001
          </p>
        </div>

        {/* Copyright & Social Links */}
        <div className="text-center text-md-end">
          <p className="mb-2">&copy; {currentYear} QuizArena. All rights reserved.</p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            GitHub
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            Twitter
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}