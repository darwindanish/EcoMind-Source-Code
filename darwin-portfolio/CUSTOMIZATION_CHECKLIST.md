# Customization Checklist

Use this checklist to personalize your portfolio! Check off each item as you complete it.

## 🎯 Essential Customizations (Do These First!)

### Personal Information

- [ ] **Hero Section** (`src/components/Hero.js`)
  - [ ] Line 6: Change `'DARWIN'` to your name
  - [ ] Line 30: Update tagline (Computer Engineering Student × F1 Enthusiast)
  - [ ] Line 34: Update subtitle (age, favorite driver, etc.)

- [ ] **About Section** (`src/components/About.js`)
  - [ ] Lines 6-9: Update telemetry stats (age, projects, code lines)
  - [ ] Lines 12-15: Update your tech stack/skills
  - [ ] Lines 42-52: Rewrite bio paragraphs with your story

- [ ] **Contact Section** (`src/components/Contact.js`)
  - [ ] Line 82: Change email to your email
  - [ ] Line 86: Update GitHub link
  - [ ] Line 90: Update Discord link
  - [ ] Line 94: Update Twitter/X link

- [ ] **Link Showcase** (`src/components/LinkShowcase.js`)
  - [ ] Line 15: Change Discord username `@darwin#5555`
  - [ ] Line 18: Change avatar letter "D" to your initial
  - [ ] Lines 30-32: Update Discord bio lines
  - [ ] Line 106: Update GitHub stats text

### Content

- [ ] **Add Your Projects**
  - [ ] Create at least 3 project files in `content/projects/`
  - [ ] Include title, description, tags, date in frontmatter
  - [ ] Add detailed project descriptions

- [ ] **Add Blog Posts**
  - [ ] Create at least 2 blog posts in `content/blog/`
  - [ ] Include title, excerpt, date, category in frontmatter
  - [ ] Write engaging content

- [ ] **Update Achievements** (`src/components/Gallery.js`)
  - [ ] Lines 6-23: Replace with your real achievements
  - [ ] Update titles, descriptions, dates, categories

## 🎨 Optional Customizations

### Branding

- [ ] **Logo** (`src/components/Navigation.js`)
  - [ ] Line 27: Change logo text from "D"
  - [ ] Line 28: Change number from "55" (Carlos Sainz's number)

- [ ] **Favicon**
  - [ ] Add your favicon to `public/favicon.ico`
  - [ ] Update `src/app/layout.js` if needed

- [ ] **Colors** (`src/styles/variables.css`)
  - [ ] Line 4: Change `--bg` (background color)
  - [ ] Line 18: Change `--accent` (primary accent color)
  - [ ] Experiment with different color schemes

### Content Enhancements

- [ ] **Add Project Images**
  - [ ] Create `public/images/projects/` folder
  - [ ] Add screenshots for each project
  - [ ] Update `src/components/Projects.js` to use real images

- [ ] **Add Profile Photo**
  - [ ] Add photo to `public/images/`
  - [ ] Update Discord avatar in LinkShowcase
  - [ ] Consider adding to About section

- [ ] **Customize Music Card**
  - [ ] Connect to Spotify API (optional)
  - [ ] Or manually update with your favorite playlist
  - [ ] Update album art image

### Advanced Customizations

- [ ] **GitHub Calendar**
  - [ ] Connect to GitHub API for real data
  - [ ] Or keep the placeholder visualization

- [ ] **Hackatime Gauge**
  - [ ] Connect to WakaTime/Hackatime API
  - [ ] Update percentage based on real data

- [ ] **Contact Form**
  - [ ] Set up form backend (Formspree, Netlify Forms, etc.)
  - [ ] Add form validation
  - [ ] Configure email notifications

## 🚀 Pre-Deployment Checklist

### Testing

- [ ] Test all sections on desktop
- [ ] Test all sections on mobile
- [ ] Test theme toggle (dark/light mode)
- [ ] Test all navigation links
- [ ] Test all external links
- [ ] Test animations (check for smoothness)
- [ ] Test with reduced motion enabled
- [ ] Test in different browsers (Chrome, Firefox, Safari)

### SEO & Meta

- [ ] Update `src/app/layout.js` metadata
  - [ ] Change title
  - [ ] Update description
  - [ ] Add your keywords

- [ ] Add Open Graph images
  - [ ] Create social share image (1200×630px)
  - [ ] Add to `public/og-image.png`
  - [ ] Update metadata in layout.js

### Performance

- [ ] Run Lighthouse audit
  - [ ] Aim for 90+ Performance
  - [ ] Aim for 90+ Accessibility
  - [ ] Aim for 90+ Best Practices
  - [ ] Aim for 90+ SEO

- [ ] Optimize images
  - [ ] Compress all images
  - [ ] Use WebP format when possible
  - [ ] Add proper alt text

### Final Checks

- [ ] Remove placeholder content
- [ ] Check for typos and grammar
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Review privacy policy (if collecting data)
- [ ] Add Google Analytics (optional)

## 📦 Deployment Checklist

- [ ] Push code to GitHub
- [ ] Create repository (public or private)
- [ ] Add README with project description
- [ ] Deploy to Vercel/Netlify
- [ ] Test deployed site
- [ ] Add custom domain (optional)
- [ ] Set up SSL certificate (automatic on Vercel/Netlify)
- [ ] Share with friends! 🎉

## 🎓 Learning Checklist

- [ ] Read through `ANIMATIONS.md` to understand animations
- [ ] Experiment with changing animation timings
- [ ] Try customizing colors in variables.css
- [ ] Add a new section (challenge yourself!)
- [ ] Explore GSAP documentation
- [ ] Share your portfolio on social media

## 💡 Ideas for Future Enhancements

- [ ] Add a projects filter/search
- [ ] Create blog post detail pages
- [ ] Add a resume/CV download button
- [ ] Implement dark/light mode auto-detection
- [ ] Add more F1-themed elements
- [ ] Create a "Now" page (what you're currently working on)
- [ ] Add testimonials section
- [ ] Implement a guestbook
- [ ] Add language switcher (if multilingual)
- [ ] Create a custom 404 page

## 📝 Notes

Use this space to track your customizations:

```
Date: ___________
Changes made:
- 
- 
- 

Next steps:
- 
- 
- 
```

---

**Remember**: This is YOUR portfolio. Make it reflect your personality, skills, and passion!

Good luck, and happy coding! 🚀
