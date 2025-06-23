import React, { useState, useEffect } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    // Create a style element specifically for this component
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      /* Base container styles */
      .terms-container {
        max-width: 1024px;
        margin: 112px auto;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      /* Header styles */
      .terms-header {
        background: linear-gradient(to right, #3b82f6, #8b5cf6);
        padding: 32px 24px;
        color: white;
        text-align: center;
      }

      .terms-header h1 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
      }

      .terms-header p {
        color: #dbeafe;
        margin-top: 8px;
        font-size: 16px;
      }

      /* Introduction section */
      .terms-intro {
        padding: 24px;
        border-bottom: 1px solid #e5e7eb;
      }

      .terms-intro p {
        color: #4b5563;
        font-size: 18px;
        line-height: 1.6;
        margin: 0;
      }

      /* Navigation section */
      .terms-nav {
        background-color: #f9fafb;
        padding: 24px;
        border-bottom: 1px solid #e5e7eb;
      }

      .terms-nav h2 {
        font-size: 20px;
        font-weight: 600;
        color: #1f2937;
        margin-top: 0;
        margin-bottom: 16px;
      }

      .terms-nav-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
      }

      @media (min-width: 768px) {
        .terms-nav-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      .terms-nav-link {
        color: #2563eb;
        text-decoration: none;
        transition: color 0.3s;
      }

      .terms-nav-link:hover {
        color: #1d4ed8;
        text-decoration: underline;
      }

      /* Content sections */
      .terms-content {
        padding: 24px;
      }

      .terms-section {
        margin-bottom: 24px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s;
      }

      .terms-section-button {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background-color: #f9fafb;
        border: none;
        cursor: pointer;
        text-align: left;
        transition: background-color 0.3s;
      }

      .terms-section-button:hover {
        background-color: #f3f4f6;
      }

      .terms-section-button h2 {
        font-size: 20px;
        font-weight: 600;
        color: #1f2937;
        margin: 0;
      }

      .terms-section-icon {
        width: 24px;
        height: 24px;
        transition: transform 0.3s;
      }

      .terms-section-icon.active {
        transform: rotate(180deg);
      }

      .terms-section-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
      }

      .terms-section-content.active {
        max-height: 500px;
      }

      .terms-section-body {
        padding: 16px;
        background-color: white;
      }

      .terms-section-body p {
        color: #4b5563;
        line-height: 1.7;
        margin: 0;
      }

      .terms-subsection {
        margin-top: 16px;
      }

      .terms-subsection h3 {
        font-size: 18px;
        font-weight: 500;
        color: #1f2937;
        margin-top: 0;
        margin-bottom: 8px;
      }

      /* Footer styles */
      .terms-footer {
        padding: 24px;
        background-color: #f9fafb;
        border-top: 1px solid #e5e7eb;
        text-align: center;
      }

      .back-to-top {
        display: inline-flex;
        align-items: center;
        background-color: #2563eb;
        color: white;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .back-to-top:hover {
        background-color: #1d4ed8;
      }

      .back-to-top svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }

      .terms-footer p {
        margin-top: 16px;
        color: #6b7280;
      }
    `;
    
    // Add the style element to the document head
    document.head.appendChild(styleElement);
    
    // Clean up function to remove styles when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Array of sections for easy mapping
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: "Welcome to our online marketplace. By using this site, you accept these terms and conditions. If you do not agree, please do not use this site."
    },
    {
      id: "conditions",
      title: "2. Conditions of Use",
      subsections: [
        {
          id: "account",
          title: "A. Your Account",
          content: "To access certain services, you may need to create an account. We reserve the right to modify or remove accounts at any time."
        }
      ]
    },
    {
      id: "responsibilities",
      title: "3. User Responsibilities",
      content: "Users must ensure that the information provided is accurate. Any misuse of the platform may result in account suspension."
    },
    {
      id: "liability",
      title: "4. Limitation of Liability",
      content: "We are not responsible for any direct or indirect damages resulting from the use of this site."
    },
    {
      id: "changes",
      title: "5. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Continued use of the site implies acceptance of the changes."
    }
  ];

  // Toggle section visibility
  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    toggleSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="terms-container">
      {/* Header with gradient background */}
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p>Last updated: March 2025</p>
      </div>
      
      {/* Introduction text */}
      <div className="terms-intro">
        <p>
          <strong>Please read these Terms and Conditions carefully before using our services.</strong> 
          This document outlines your rights and responsibilities when using our platform.
        </p>
      </div>
      
      {/* Table of contents */}
      <div className="terms-nav">
        <h2>Quick Navigation</h2>
        <div className="terms-nav-grid">
          {sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="terms-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
      
      {/* Accordion sections */}
      <div className="terms-content">
        {sections.map((section) => (
          <div 
            key={section.id} 
            id={section.id}
            className="terms-section"
          >
            <button
              className="terms-section-button"
              onClick={() => toggleSection(section.id)}
            >
              <h2>{section.title}</h2>
              <svg
                className={`terms-section-icon ${activeSection === section.id ? 'active' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div className={`terms-section-content ${activeSection === section.id ? 'active' : ''}`}>
              <div className="terms-section-body">
                {section.content && <p>{section.content}</p>}
                
                {section.subsections && section.subsections.map((subsection) => (
                  <div key={subsection.id} className="terms-subsection">
                    <h3>{subsection.title}</h3>
                    <p>{subsection.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="terms-footer">
        <button 
          onClick={scrollToTop}
          className="back-to-top"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to Top
        </button>
        <p>
          If you have any questions about these terms, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;