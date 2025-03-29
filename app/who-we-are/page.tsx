import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">BIG COMPANY TALENT SMALL COMPANY CULTURE</h1>
        </div>
      </section>

      <section className="core-values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-container">
          <div className="value-item">BE DIRECT</div>
          <div className="value-item">BE PASSIONATE</div>
          <div className="value-item">BE AUTHENTIC</div>
          <div className="value-item">BE TRUSTWORTHY</div>
          <div className="value-item">BE RESPONSIBLE</div>
        </div>
        <div className="quote-container">
          <p className="quote">"Authenticity is the cornerstone of our culture. It's not just about being yourself, but about creating an environment where everyone feels empowered to do the same."</p>
          <p className="quote-author">- Sarah Johnson, HR Director</p>
        </div>
      </section>

      <section className="health-wellness-section">
        <div className="section-content">
          <h2 className="section-title">HEALTH AND WELLNESS</h2>
          <p>We offer a comprehensive benefits package to our employees, including health, dental, vision and short and long term disability insurance.</p>
          <p>Some of our offices also have on-site gyms to help our employees reduce stress and stay in shape.</p>
        </div>
        <div className="section-image">
          <Image 
            src="/images/health-wellness.jpg" 
            alt="Employee using gym facilities" 
            width={600} 
            height={400} 
          />
        </div>
      </section>

      <section className="career-section">
        <div className="section-image">
          <Image 
            src="/images/career-development.jpg" 
            alt="Employee working on career development" 
            width={600} 
            height={400} 
          />
        </div>
        <div className="section-content">
          <h2 className="section-title">CAREER DEVELOPMENT AND FUTURE PLANNING</h2>
          <p>To help ensure our employees are getting the most from their careers at TRANZACT, we offer paid trainings, licensing opportunities, 401k, life insurance, and uncapped bonus potential.</p>
        </div>
      </section>

      <section className="work-life-section">
        <div className="section-content">
          <h2 className="section-title">WORK-LIFE BALANCE</h2>
          <p>We understand the importance of balancing work and personal life. That's why we offer flexible schedules, remote work options, and generous paid time off.</p>
        </div>
        <div className="section-image">
          <Image 
            src="/images/work-life-balance.jpg" 
            alt="Employee enjoying work-life balance" 
            width={600} 
            height={400} 
          />
        </div>
      </section>

      <section className="cta-section">
        <Link href="/contact" className="cta-button">
          CONTACT US &gt;
        </Link>
        <Link href="/careers" className="cta-button">
          JOIN OUR TEAM &gt;
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <Image 
            src="/images/tranzact-logo.png" 
            alt="TRANZACT" 
            width={200} 
            height={80} 
          />
        </div>
        <div className="social-icons">
          <Link href="https://facebook.com" aria-label="Facebook">
            <Image src="/images/facebook-icon.png" alt="Facebook" width={30} height={30} />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <Image src="/images/instagram-icon.png" alt="Instagram" width={30} height={30} />
          </Link>
        </div>
        <div className="copyright">
          © 2025 MG LLC D/B/A TRANZACT. ALL RIGHTS RESERVED.
        </div>
        <div className="footer-links">
          <Link href="/privacy-notice">Privacy Notice</Link>
          <div className="privacy-choices">
            Your Privacy Choices
            <span className="toggle-icon"></span>
          </div>
          <Link href="/health-data-privacy">Tranzact Consumer Health Data Privacy Notice</Link>
          <Link href="/site-map">Site Map</Link>
        </div>
      </footer>
    </div>
  );
}
