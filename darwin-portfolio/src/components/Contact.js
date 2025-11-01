import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={`contact-section section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>// FINISH LINE</span>
          <h2 className={styles.title}>Reach Me</h2>
          <p className={styles.subtitle}>
            Let's build something amazing together. Drop me a message!
          </p>
        </div>

        {/* Checkered Flag Animation */}
        <svg className={styles.checkeredFlag} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="checkers" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="var(--text-primary)" />
              <rect x="20" y="20" width="20" height="20" fill="var(--text-primary)" />
              <rect x="20" y="0" width="20" height="20" fill="var(--grey-700)" />
              <rect x="0" y="20" width="20" height="20" fill="var(--grey-700)" />
            </pattern>
          </defs>
          <path
            d="M 50 50 Q 70 40, 90 50 T 130 50 Q 150 60, 170 50 L 170 150 Q 150 140, 130 150 T 90 150 Q 70 160, 50 150 Z"
            fill="url(#checkers)"
            className={styles.flagPath}
          />
        </svg>

        <div className={styles.content}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span className={styles.btnGlow} />
              <span className={styles.btnText}>Join the Race</span>
            </button>
          </form>

          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Connect With Me</h3>
            <div className={styles.links}>
              <a href="mailto:darwin@example.com" className={styles.link}>
                <span className={styles.linkIcon}>📧</span>
                <span>darwin@example.com</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>🐙</span>
                <span>GitHub</span>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>💬</span>
                <span>Discord</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2024 Darwin. Built with Next.js, GSAP, and lots of ☕</p>
        <p className={styles.dedication}>Dedicated to Carlos Sainz #55 — The Smooth Operator 🏎️</p>
      </footer>
    </section>
  );
}
