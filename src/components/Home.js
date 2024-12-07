import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // State to check if the user is logged in (This could be dynamically set based on authentication)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logoContainer}>
            <img src="/api/placeholder/50/50" alt="Scholarship Platform Logo" style={styles.logo} />
            <span style={styles.brandName}>ScholarConnect</span>
          </div>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink}>Login</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/register" style={styles.navLink}>Register</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Unlock Your Educational Potential</h1>
          <p style={styles.heroDescription}>
            Discover and apply for scholarships that can transform your academic journey.
          </p>
          <div style={styles.heroButtons}>
            <Link to={isLoggedIn ? "/apply-scholarship" : "/login"} style={styles.primaryButton}>
              {isLoggedIn ? "Apply for Scholarship" : "Login to Apply"}
            </Link>
            <Link to={isLoggedIn ? "/status" : "/login"} style={styles.secondaryButton}>
              {isLoggedIn ? "Check Application Status" : "Login to Check Status"}
            </Link>
          </div>
        </div>
      </div>

      <div style={styles.scholarshipOverview}>
        <h2 style={styles.sectionTitle}>Scholarship Opportunities</h2>
        <div style={styles.scholarshipGrid}>
          <div style={styles.scholarshipCard}>
            <div style={styles.scholarshipIcon}>🎓</div>
            <h3 style={styles.scholarshipCardTitle}>Academic Excellence</h3>
            <p style={styles.scholarshipCardDescription}>
              Scholarships for top-performing students with exceptional academic records.
            </p>
            <div style={styles.scholarshipDetails}>
              <span style={styles.scholarshipBadge}>Avg. Award: $5,000</span>
              <span style={styles.scholarshipBadge}>Merit-Based</span>
            </div>
          </div>

          <div style={styles.scholarshipCard}>
            <div style={styles.scholarshipIcon}>💡</div>
            <h3 style={styles.scholarshipCardTitle}>Innovation Grants</h3>
            <p style={styles.scholarshipCardDescription}>
              Support for students pursuing innovative research and creative projects.
            </p>
            <div style={styles.scholarshipDetails}>
              <span style={styles.scholarshipBadge}>Avg. Award: $7,500</span>
              <span style={styles.scholarshipBadge}>Research-Focused</span>
            </div>
          </div>

          <div style={styles.scholarshipCard}>
            <div style={styles.scholarshipIcon}>🌍</div>
            <h3 style={styles.scholarshipCardTitle}>Community Impact</h3>
            <p style={styles.scholarshipCardDescription}>
              Scholarships for students demonstrating significant community service.
            </p>
            <div style={styles.scholarshipDetails}>
              <span style={styles.scholarshipBadge}>Avg. Award: $4,000</span>
              <span style={styles.scholarshipBadge}>Service-Based</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.applicationProcess}>
        <h2 style={styles.sectionTitle}>Application Process</h2>
        <div style={styles.processSteps}>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>1</div>
            <h3 style={styles.stepTitle}>Create Profile</h3>
            <p style={styles.stepDescription}>
              Set up your personalized student profile with academic and personal details.
            </p>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>2</div>
            <h3 style={styles.stepTitle}>Browse Scholarships</h3>
            <p style={styles.stepDescription}>
              Explore scholarships tailored to your academic background and interests.
            </p>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>3</div>
            <h3 style={styles.stepTitle}>Submit Application</h3>
            <p style={styles.stepDescription}>
              Complete and submit scholarship applications with required documents.
            </p>
          </div>
          <div style={styles.processStep}>
            <div style={styles.stepNumber}>4</div>
            <h3 style={styles.stepTitle}>Track Progress</h3>
            <p style={styles.stepDescription}>
              Monitor your application status and receive notifications.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.statsSection}>
        <h2 style={styles.sectionTitle}>Our Impact</h2>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>$50M+</h3>
            <p style={styles.statDescription}>Total Scholarships Awarded</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>10,000+</h3>
            <p style={styles.statDescription}>Students Supported</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>500+</h3>
            <p style={styles.statDescription}>Scholarship Programs</p>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <ul style={styles.footerList}>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerTitle}>Support</h4>
            <ul style={styles.footerList}>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerTitle}>Connect</h4>
            <ul style={styles.footerList}>
              <li>Email: support@scholarconnect.gov</li>
              <li>Phone: 1-800-SCHOLAR</li>
            </ul>
          </div>
        </div>
        <div style={styles.copyrightSection}>
          <p>© 2024 ScholarConnect. Empowering Education, Transforming Lives.</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f8f9fa",
    color: "#333",
    lineHeight: "1.6",
  },
  navbar: {
    backgroundColor: "#2c3e50",
    padding: "15px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  brandName: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
  heroSection: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "80px 0",
    textAlign: "center",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "42px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  heroDescription: {
    fontSize: "20px",
    marginBottom: "30px",
  },
  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  primaryButton: {
    display: "inline-block",
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "12px 25px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  secondaryButton: {
    display: "inline-block",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    padding: "12px 25px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  scholarshipOverview: {
    backgroundColor: "white",
    padding: "60px 20px",
    textAlign: "center",
  },
  scholarshipGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },
  scholarshipCard: {
    backgroundColor: "#f1f2f6",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  scholarshipIcon: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  scholarshipCardTitle: {
    fontSize: "22px",
    marginBottom: "15px",
  },
  scholarshipCardDescription: {
    color: "#666",
    marginBottom: "20px",
  },
  scholarshipDetails: {
    display: "flex",
    justifyContent: "space-between",
  },
  scholarshipBadge: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px",
  },
  applicationProcess: {
    backgroundColor: "#f8f9fa",
    padding: "60px 20px",
    textAlign: "center",
  },
  processSteps: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },
  processStep: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  stepNumber: {
    backgroundColor: "#3498db",
    color: "white",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  stepTitle: {
    fontSize: "20px",
    marginBottom: "15px",
  },
  stepDescription: {
    color: "#666",
  },
  statsSection: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "60px 20px",
    textAlign: "center",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "40px",
  },
  statCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "30px",
    borderRadius: "10px",
    width: "250px",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  statDescription: {
    color: "rgba(255,255,255,0.7)",
  },
  footer: {
    backgroundColor: "#34495e",
    color: "white",
    padding: "40px 20px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerColumn: {
    flex: 1,
    margin: "0 15px",
  },
  footerTitle: {
    fontSize: "18px",
    marginBottom: "20px",
    borderBottom: "2px solid #3498db",
    paddingBottom: "10px",
  },
  footerList: {
    listStyleType: "none",
    padding: 0,
  },
  footerList: {
    listStyleType: "none",
    padding: 0,
  },
  copyrightSection: {
    textAlign: "center",
    marginTop: "30px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
};

export default Home;