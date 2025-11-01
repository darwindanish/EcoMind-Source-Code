import styles from './LinkShowcase.module.css';

export default function LinkShowcase() {
  return (
    <section className={`link-showcase-section section ${styles.showcase}`} id="links">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>// DIGITAL GARAGE</span>
          <h2 className={styles.title}>Link Showcase</h2>
        </div>

        <div className={styles.grid}>
          {/* Discord Card */}
          <div className={`link-card discord-card ${styles.card} ${styles.discordCard}`}>
            <div className="card-content">
              <div className={styles.discordHeader}>
                <div className={styles.discordAvatar}>
                  <div className="discord-avatar" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: 'white'
                  }}>D</div>
                  <div className={`status-ring ${styles.statusRing}`} />
                </div>
                <div className={styles.discordInfo}>
                  <h3>Darwin</h3>
                  <p className={styles.discordTag}>@darwin#5555</p>
                  <div className={styles.statusBadge}>
                    <span className={styles.statusDot} />
                    Online
                  </div>
                </div>
              </div>
              <div className={styles.discordBio}>
                <p className="bio-line">16 • Computer Engineering Student</p>
                <p className="bio-line">F1 Fan • Carlos Sainz #55</p>
                <p className="bio-line">Building cool stuff with code 🚀</p>
              </div>
              <button className={`connect-btn ${styles.connectBtn}`}>
                Connect on Discord
              </button>
            </div>
          </div>

          {/* Music Card */}
          <div className={`link-card music-card ${styles.card} ${styles.musicCard}`}>
            <div className="card-content">
              <h3 className={styles.cardTitle}>Last Played</h3>
              <div className={styles.musicContent}>
                <div className="album-art" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  marginBottom: '1rem'
                }} />
                <div className={styles.musicInfo}>
                  <p className={styles.songTitle}>Racing Vibes Playlist</p>
                  <p className={styles.artist}>Spotify</p>
                </div>
                <div className={styles.waveform}>
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="waveform-bar" style={{
                      width: '3px',
                      height: `${Math.random() * 40 + 20}px`,
                      background: 'var(--accent)',
                      borderRadius: '2px'
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Calendar */}
          <div className={`link-card ${styles.card} ${styles.githubCard}`}>
            <div className="card-content">
              <h3 className={styles.cardTitle}>GitHub Activity</h3>
              <div className={styles.calendarGrid}>
                {[...Array(52)].map((_, week) => (
                  <div key={week} className={styles.calendarWeek}>
                    {[...Array(7)].map((_, day) => {
                      const intensity = Math.floor(Math.random() * 5);
                      return (
                        <div
                          key={day}
                          className="contribution-square"
                          data-row={day}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '2px',
                            background: intensity === 0 ? 'var(--grey-800)' : `rgba(45, 168, 255, ${intensity * 0.25})`,
                            margin: '1px'
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <p className={styles.githubStats}>500+ contributions this year</p>
            </div>
          </div>

          {/* Hackatime Gauge */}
          <div className={`link-card hackatime-gauge ${styles.card} ${styles.hackatimeCard}`} data-percent="75">
            <div className="card-content">
              <h3 className={styles.cardTitle}>Coding Time</h3>
              <svg className={styles.gauge} viewBox="0 0 200 120">
                <path
                  className="gauge-path"
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  stroke="var(--accent)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  className="gauge-needle"
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="40"
                  stroke="var(--racing-red)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ transformOrigin: '100px 100px' }}
                />
              </svg>
              <div className={styles.gaugeValue}>
                <span className="gauge-counter">75</span>
                <span className={styles.gaugeUnit}>hrs/week</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`link-card ${styles.card} ${styles.quickLink}`}>
            <div className="card-content">
              <div className={styles.linkIcon}>🐙</div>
              <h3 className={styles.linkTitle}>GitHub</h3>
              <p className={styles.linkDesc}>Check out my repositories</p>
            </div>
            <div className="card-glow-ring" />
          </a>

          <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className={`link-card ${styles.card} ${styles.quickLink}`}>
            <div className="card-content">
              <div className={styles.linkIcon}>🤗</div>
              <h3 className={styles.linkTitle}>HuggingFace</h3>
              <p className={styles.linkDesc}>AI/ML experiments</p>
            </div>
            <div className="card-glow-ring" />
          </a>
        </div>
      </div>
    </section>
  );
}
