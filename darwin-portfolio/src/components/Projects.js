import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'F1 Telemetry Dashboard',
      description: 'Real-time F1 telemetry visualization with live race data, lap times, and driver comparisons.',
      tags: ['React', 'WebSocket', 'D3.js'],
      image: '🏎️',
      link: '#'
    },
    {
      title: 'AI Code Assistant',
      description: 'VS Code extension that provides intelligent code suggestions using machine learning.',
      tags: ['TypeScript', 'Python', 'TensorFlow'],
      image: '🤖',
      link: '#'
    },
    {
      title: 'Racing Line Optimizer',
      description: 'Algorithm to calculate optimal racing lines for different track configurations.',
      tags: ['Python', 'NumPy', 'Matplotlib'],
      image: '📊',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'This website! Built with Next.js and GSAP for smooth, cinematic animations.',
      tags: ['Next.js', 'GSAP', 'CSS'],
      image: '🎨',
      link: '#'
    },
  ];

  return (
    <section className={`projects-section section ${styles.projects}`} id="projects">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>// PIT STOP ZONE</span>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>
            A collection of my favorite builds — from F1 data analysis to AI experiments.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.card}>
              <svg className={styles.cardBorder} viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect
                  x="1"
                  y="1"
                  width="98"
                  height="98"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              
              <div className={styles.cardImage}>
                <span className={styles.emoji}>{project.image}</span>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <a href={project.link} className={styles.cardLink}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
