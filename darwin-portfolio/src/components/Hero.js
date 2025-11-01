import styles from './Hero.module.css';

export default function Hero() {
  // Split name into letters for stagger animation
  const name = 'DARWIN';
  const letters = name.split('').map((letter, i) => (
    <span key={i} className="letter" style={{ display: 'inline-block' }}>
      {letter}
    </span>
  ));

  return (
    <section className={`hero-section ${styles.hero}`} id="home">
      {/* Loader Bar */}
      <div className={`loader-bar ${styles.loaderBar}`} />

      {/* Race Lights */}
      <div className={`race-lights ${styles.raceLights}`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`race-light ${styles.raceLight}`} />
        ))}
      </div>

      {/* Green Burst */}
      <div className={`green-burst ${styles.greenBurst}`} />

      {/* Background Particles */}
      <div className={`hero-particles ${styles.particles}`}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }} />
        ))}
      </div>

      {/* Hero Content */}
      <div className={`hero-content ${styles.content}`}>
        <div className="container">
          <h1 className={`hero-name ${styles.name}`}>
            {letters}
          </h1>
          
          <p className={`hero-tagline ${styles.tagline}`}>
            Computer Engineering Student × F1 Enthusiast
          </p>
          
          <p className={`hero-subtitle ${styles.subtitle}`}>
            16 years old • Carlos Sainz Fan • Building the future, one lap at a time
          </p>
          
          <div className={`hero-cta ${styles.ctaContainer}`}>
            <button className={styles.cta}>
              <span className={`cta-glow ${styles.ctaGlow}`} />
              <span className={styles.ctaText}>Start Your Engines</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollWheel} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
