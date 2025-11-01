---
title: "GSAP Animation Tips for Smooth Web Experiences"
excerpt: "Best practices for creating buttery-smooth animations with GSAP and ScrollTrigger."
date: "2024-09-10"
readTime: "7 min read"
category: "Development"
author: "Darwin"
---

# GSAP Animation Tips for Smooth Web Experiences

Creating smooth, performant animations is crucial for modern web experiences. Here are my top tips for using GSAP effectively.

## 1. Use GPU-Accelerated Properties

Always animate properties that can be GPU-accelerated:

```javascript
// Good ✅
gsap.to(element, { x: 100, y: 50, scale: 1.2, opacity: 0.5 });

// Bad ❌
gsap.to(element, { left: '100px', top: '50px', width: '200px' });
```

## 2. Leverage ScrollTrigger for Scroll Animations

ScrollTrigger makes scroll-based animations incredibly easy:

```javascript
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1,
  },
  x: 100,
  opacity: 1,
});
```

## 3. Respect Reduced Motion Preferences

Always provide fallbacks for users who prefer reduced motion:

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  gsap.set(element, { opacity: 1 }); // Instant
} else {
  gsap.to(element, { opacity: 1, duration: 1 }); // Animated
}
```

## 4. Use Timelines for Complex Sequences

Timelines make it easy to orchestrate multiple animations:

```javascript
const tl = gsap.timeline();
tl.to('.hero', { opacity: 1, duration: 1 })
  .to('.title', { y: 0, duration: 0.8 }, '-=0.5')
  .to('.cta', { scale: 1, duration: 0.6 }, '-=0.3');
```

## Conclusion

GSAP is an incredibly powerful tool for creating smooth, professional animations. Follow these tips to ensure your animations are both beautiful and performant!
