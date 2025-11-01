import styles from './Gallery.module.css';

export default function Gallery() {
  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'First place at Regional Tech Hackathon 2024',
      date: '2024',
      category: 'Competition'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to multiple open-source projects',
      date: '2023-2024',
      category: 'Development'
    },
    {
      title: 'School Tech Lead',
      description: 'Leading the computer science club and organizing workshops',
      date: '2024',
      category: 'Leadership'
    },
    {
      title: 'Coding Certifications',
      description: 'Completed advanced JavaScript and React certifications',
      date: '2023',
      category: 'Education'
    },
  ];

  return (
    <section className={`gallery-section section ${styles.gallery}`} id="achievements">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>// LAP GALLERY</span>
          <h2 className={styles.title}>Achievements & Activities</h2>
        </div>
      </div>

      <div className={`gallery-container ${styles.container}`}>
        <svg className={styles.trackLine} viewBox="0 0 1000 2" preserveAspectRatio="none">
          <path
            className="track-line"
            d="M 0 1 L 1000 1"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className={styles.cardsWrapper}>
          {achievements.map((achievement, i) => (
            <div key={i} className={`gallery-card ${styles.card}`}>
              <div className="card-glow" />
              <div className={styles.cardCategory}>{achievement.category}</div>
              <h3 className={styles.cardTitle}>{achievement.title}</h3>
              <p className={styles.cardDescription}>{achievement.description}</p>
              <div className={styles.cardDate}>{achievement.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
