import '../styles/globals.css';

export const metadata = {
  title: 'Darwin - Computer Engineering Student & F1 Enthusiast',
  description: 'Personal portfolio of Darwin, a 16-year-old computer engineering student and Carlos Sainz fan. Explore projects, achievements, and racing-inspired code.',
  keywords: 'Darwin, Computer Engineering, F1, Carlos Sainz, Portfolio, Web Development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <div className="page-transition-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--accent)',
          transformOrigin: 'top center',
          transform: 'scaleY(0)',
          zIndex: 9999,
          pointerEvents: 'none',
        }} />
      </body>
    </html>
  );
}
