# Quick Start Guide

Get your F1-themed portfolio running in 5 minutes! 🏎️

## Step 1: Install Dependencies

```bash
cd darwin-portfolio
npm install
```

## Step 2: Customize Your Info

### Update Personal Details

Open `src/components/LinkShowcase.js` and update:
- Line 15: Change `@darwin#5555` to your Discord tag
- Line 18: Change the avatar letter "D" to your initial

Open `src/components/Contact.js` and update:
- Line 82: Change email to your email address
- Lines 86-101: Update social media links

Open `src/components/About.js` and update:
- Lines 6-9: Update your stats (age, projects, etc.)
- Lines 12-15: Update your tech stack
- Lines 42-52: Update your bio

### Update Hero Section

Open `src/components/Hero.js`:
- Line 6: Change `'DARWIN'` to your name
- Line 30: Update tagline
- Line 34: Update subtitle

## Step 3: Add Your Content

### Add a Blog Post

Create `content/blog/my-first-post.md`:

```markdown
---
title: "My First Blog Post"
excerpt: "This is my first post on my new portfolio!"
date: "2024-11-01"
readTime: "3 min read"
category: "Personal"
author: "Your Name"
---

# My First Blog Post

Welcome to my portfolio! Here's what I'm working on...
```

### Add a Project

Create `content/projects/my-project.md`:

```markdown
---
title: "My Awesome Project"
description: "A cool project I built"
tags: ["React", "Node.js"]
date: "2024-11-01"
featured: true
---

# My Awesome Project

This project does amazing things...
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 5: Customize Theme (Optional)

Edit `src/styles/variables.css` to change colors:

```css
:root {
  --accent: #2DA8FF; /* Change to your favorite color */
  --bg: #061226; /* Change background */
}
```

## Step 6: Build for Production

```bash
npm run build
```

Your static site is now in the `out/` directory!

## Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio is live! 🎉

## Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- All animations are in `src/animations/` with comments
- Each component has its own CSS module for easy styling

## Tips

- **Animations**: All timing values are in `src/styles/variables.css`
- **Colors**: Use CSS variables for consistent theming
- **Content**: Just add Markdown files to `content/` folders
- **Performance**: Images in `public/images/` are auto-optimized

Happy coding! 🚀
