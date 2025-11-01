import styles from './Blog.module.css';

export default function Blog() {
  const posts = [
    {
      title: 'Building a Real-Time F1 Telemetry Dashboard',
      excerpt: 'How I built a live F1 data visualization tool using WebSockets and React.',
      date: 'Oct 15, 2024',
      readTime: '5 min read',
      category: 'Tutorial'
    },
    {
      title: 'Why Carlos Sainz is the Smooth Operator',
      excerpt: 'Analyzing what makes Carlos Sainz one of the most consistent drivers in F1.',
      date: 'Sep 28, 2024',
      readTime: '3 min read',
      category: 'F1'
    },
    {
      title: 'GSAP Animation Tips for Smooth Web Experiences',
      excerpt: 'Best practices for creating buttery-smooth animations with GSAP and ScrollTrigger.',
      date: 'Sep 10, 2024',
      readTime: '7 min read',
      category: 'Development'
    },
  ];

  return (
    <section className={`blog-section section ${styles.blog}`} id="blog">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>// RACE CONTROL FEED</span>
          <h2 className={styles.title}>Blog</h2>
          <p className={styles.subtitle}>
            Thoughts on code, F1, and everything in between.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardCategory}>{post.category}</div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardMeta}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <a href="#" className={styles.readMore}>
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
