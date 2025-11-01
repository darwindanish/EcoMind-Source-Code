import styles from './About.module.css';

export default function About() {
  const telemetryData = [
    { label: 'Age', value: '16', unit: 'years' },
    { label: 'Projects', value: '25', unit: '+' },
    { label: 'Code Lines', value: '50K', unit: '+' },
    { label: 'Coffee Cups', value: '∞', unit: '' },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Python', 'Node.js', 'GSAP', 'Git',
    'HTML/CSS', 'Tailwind', 'MongoDB', 'Express'
  ];

  return (
    <section className={`about-section section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>// TELEMETRY</span>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            16-year-old computer engineering student with a passion for F1 racing and clean code.
            Huge fan of Carlos Sainz — his precision and consistency inspire my approach to development.
          </p>
        </div>

        {/* Telemetry Panels */}
        <div className={styles.telemetryGrid}>
          {telemetryData.map((item, i) => (
            <div key={i} className={styles.telemetryPanel}>
              <div className={styles.panelGlow} />
              <div className={styles.panelContent}>
                <div className={styles.telemetryValue}>
                  <span className={styles.value}>{item.value}</span>
                  <span className={styles.unit}>{item.unit}</span>
                </div>
                <div className={styles.telemetryLabel}>{item.label}</div>
              </div>
              <div className={styles.panelBorder} />
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Tech Stack</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, i) => (
              <div key={i} className={styles.skillChip}>
                <span className={styles.skillDot} />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className={styles.bio}>
          <p className="bio-line">
            I'm a computer engineering student who loves building fast, beautiful, and functional web experiences.
          </p>
          <p className="bio-line">
            When I'm not coding, you'll find me watching F1 races, analyzing telemetry data, or dreaming about
            the perfect racing line — both on track and in code.
          </p>
          <p className="bio-line">
            My hero is Carlos Sainz Jr. (#55) — his smooth operator style and relentless pursuit of perfection
            mirror my approach to software development.
          </p>
        </div>
      </div>
    </section>
  );
}
