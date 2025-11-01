# Darwin's F1 × Coding Portfolio

A cinematic, GSAP-driven personal portfolio website for Darwin — a 16-year-old computer engineering student and huge F1 fan (Carlos Sainz #55 🏎️).

## 🏁 Features

- **Cinematic Animations**: Smooth, purposeful transitions using GSAP Timeline + ScrollTrigger
- **F1-Themed Design**: Deep dark blue palette with bright blue accents, inspired by racing telemetry
- **Fully Responsive**: Optimized for desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Performance Optimized**: GPU-safe transforms, lazy loading, 90+ Lighthouse score
- **Accessible**: Keyboard navigation, prefers-reduced-motion support, ARIA labels
- **Easy Content Editing**: Blog posts and projects load from Markdown files

## 🎨 Sections

1. **Hero (Race Start)**: Animated race lights sequence with name reveal
2. **About (Telemetry)**: HUD-style panels with stats and skills
3. **Achievements (Lap Gallery)**: Horizontal scrolling gallery with track traces
4. **Link Showcase (Digital Garage)**: Discord profile, music, GitHub calendar, Hackatime gauge
5. **Projects (Pit Stop Zone)**: Project cards with SVG border animations
6. **Blog (Race Control Feed)**: Easy-to-edit blog posts from Markdown
7. **Contact (Finish Line)**: Contact form with checkered flag animation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Navigate to project directory
cd darwin-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Export static site
npm run export
```

The static site will be in the `out/` directory, ready to deploy.

## 📝 Editing Content

### Adding Blog Posts

1. Create a new Markdown file in `content/blog/`
2. Add frontmatter with metadata:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2024-11-01"
readTime: "5 min read"
category: "Development"
author: "Darwin"
---

# Your Post Title

Your content here...
```

3. The post will automatically appear in the blog section

### Adding Projects

1. Create a new Markdown file in `content/projects/`
2. Add frontmatter:

```markdown
---
title: "Project Name"
description: "Brief description"
tags: ["React", "Node.js", "MongoDB"]
date: "2024-11-01"
featured: true
---

# Project Name

Detailed project description...
```

### Updating Personal Info

Edit the following files:

- **Discord Tag**: `src/components/LinkShowcase.js` (line with `@darwin#5555`)
- **Email**: `src/components/Contact.js` (mailto link)
- **Social Links**: `src/components/Contact.js` (GitHub, Discord, Twitter URLs)
- **About Section**: `src/components/About.js` (bio text and stats)

## 🎭 Animation System

All animations are modular and located in `src/animations/`:

- **`gsap-utils.js`**: Reusable animation utilities
- **`hero.js`**: Hero section race start sequence
- **`gallery.js`**: Achievements gallery animations
- **`links.js`**: Link showcase card animations
- **`page-transitions.js`**: Page and section transitions

### Animation Timing (Rhythmic Orchestration)

The site uses consistent timing motifs:

- **Micro**: 0.12s (quick interactions)
- **Short**: 0.36s (card entrances)
- **Medium**: 0.84s (section reveals)
- **Long**: 1.2s (cinematic sequences)

### Customizing Animations

Each animation function is well-commented. To adjust timing:

```javascript
// In src/animations/hero.js
tl.fromTo(
  '.hero-name',
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.45, // ← Change this value
    ease: 'power4.out', // ← Or change easing
  }
);
```

## 🎨 Theme Customization

Edit `src/styles/variables.css` to change colors:

```css
:root {
  --bg: #061226; /* Background color */
  --accent: #2DA8FF; /* Accent color */
  --accent-strong: #1E90FF; /* Stronger accent */
  /* ... more variables */
}
```

## 🔧 Tech Stack

- **Framework**: Next.js 14 (React)
- **Animations**: GSAP 3.12 with ScrollTrigger
- **Styling**: CSS Modules + CSS Variables
- **Content**: Markdown with gray-matter
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 📁 Project Structure

```
darwin-portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.js     # Root layout
│   │   └── page.js       # Home page
│   ├── components/       # React components
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Gallery.js
│   │   ├── LinkShowcase.js
│   │   ├── Projects.js
│   │   ├── Blog.js
│   │   ├── Contact.js
│   │   ├── Navigation.js
│   │   └── ThemeToggle.js
│   ├── animations/       # GSAP animation modules
│   │   ├── gsap-utils.js
│   │   ├── hero.js
│   │   ├── gallery.js
│   │   ├── links.js
│   │   └── page-transitions.js
│   └── styles/           # Global styles
│       ├── variables.css
│       └── globals.css
├── content/              # Markdown content
│   ├── projects/
│   └── blog/
├── public/               # Static assets
│   └── images/
├── package.json
├── next.config.js
└── README.md
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

```bash
npm run build
```

Upload the `out/` directory to Netlify.

### Deploy to GitHub Pages

1. Update `next.config.js` with your repo name:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: { unoptimized: true },
};
```

2. Build and deploy:

```bash
npm run build
# Push the out/ directory to gh-pages branch
```

## ⚡ Performance Tips

- Images are lazy-loaded by default
- GSAP animations use GPU-accelerated properties
- CSS variables enable smooth theme transitions
- ScrollTrigger is optimized with `scrub` values
- Reduced motion fallbacks for accessibility

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- **Design Inspiration**: F1 telemetry systems and racing aesthetics
- **Animations**: GSAP by GreenSock
- **Framework**: Next.js by Vercel
- **Dedicated to**: Carlos Sainz Jr. #55 — The Smooth Operator 🏎️

## 💬 Contact

- **Email**: darwin@example.com
- **Discord**: @darwin#5555
- **GitHub**: [Your GitHub]
- **Twitter**: [Your Twitter]

---

Built with ❤️, Next.js, GSAP, and lots of ☕ by Darwin
