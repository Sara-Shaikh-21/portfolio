
import "./Footer.css";
import React, { useState } from "react";
import {
  FaHome,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaArrowUp,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const email = "sarassk21@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

          <div className="footer-heading">
            <span className="footer-symbol">&lt;/&gt;</span>
            <h3>Let's Connect</h3>
          </div>

          <p className="footer-intro">
            Have a project, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>

          {/* Location */}
          <div className="footer-contact-item">
            <div className="footer-icon">
              <FaHome />
            </div>

            <div>
              <span className="contact-label">Location</span>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          {/* Email */}
          <div className="footer-contact-item">
            <div className="footer-icon">
              <FaMailBulk />
            </div>

            <div className="email-content">
              <span className="contact-label">Email</span>

              <a href={`mailto:${email} `}>
                {email}
              </a>

              <button
                className="copy-email-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <h3>About Me</h3>

          <p>
            Associate Software Engineer passionate about building
            modern web applications, AI-powered solutions, and
            meaningful digital experiences.
          </p>

          {/* Social Links */}
          <div className="socials">

            <a
              href="https://www.linkedin.com/in/sara-shaikh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Sara-Shaikh-21/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/sara.shaikh.21/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://twitter.com/sara_shaikh_21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href={`mailto:${email} `}
              aria-label="Send Email"
              title="Email Me"
            >
              <FaMailBulk />
            </a>

          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {currentYear} Sara Shaikh. Built with React.
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>

      </div>
    </footer>
  );
};

export default Footer;

