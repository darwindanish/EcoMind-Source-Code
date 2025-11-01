# Animation Customization Guide

Complete guide to understanding and customizing the GSAP animations in your portfolio.

## 🎬 Animation Philosophy

This portfolio uses **contextual transitions** — not just animating elements in, but transitioning the entire visual context (background, lighting, content motion) to create a cinematic experience.

### Core Principles

1. **Rhythmic Orchestration**: Consistent timing creates a musical cadence
2. **GPU Acceleration**: Only animate transform and opacity for 60fps
3. **Accessibility First**: Respect `prefers-reduced-motion`
4. **State Continuity**: Visual anchors across transitions

## ⏱️ Timing System

All animations use consistent timing values defined in `src/styles/variables.css`:

```css
--timing-micro: 0.12s;    /* Quick interactions */
--timing-short: 0.36s;    /* Card entrances */
--timing-medium: 0.84s;   /* Section reveals */
--timing-long: 1.2s;      /* Cinematic sequences */
--timing-cinematic: 2s;   /* Hero animations */
```

### When to Use Each Timing

- **Micro (0.12s)**: Hover effects, button clicks, small UI changes
- **Short (0.36s)**: Card reveals, list items, tooltips
- **Medium (0.84s)**: Section transitions, modal opens, page changes
- **Long (1.2s)**: Hero sequences, complex animations, scroll effects
- **Cinematic (2s)**: Race start sequence, major page transitions

## 🎯 Animation Modules

### 1. Hero Animations (`src/animations/hero.js`)

#### Race Start Sequence

```javascript
// Timing breakdown:
// 1. Loader bar: 0.6s
// 2. Race lights: 5 lights × 0.15s stagger = 0.75s
// 3. Green burst: 0.18s
// 4. Name reveal: 0.45s
// 5. Tagline: 0.6s
// Total: ~2.5s
```

**Customize the race lights:**

```javascript
// Change number of lights
{[1, 2, 3, 4, 5].map((i) => ...)}  // Change to [1, 2, 3] for 3 lights

// Change light color
.raceLight {
  background: radial-gradient(circle, var(--racing-red) 0%, #8B0000 100%);
  // Change to: var(--racing-green) for green lights
}

// Change stagger timing
stagger: 0.15,  // Increase for slower sequence, decrease for faster
```

**Customize name reveal:**

```javascript
// Change reveal direction
clipPath: 'inset(0 100% 0 0)',  // Left to right
// Change to:
clipPath: 'inset(0 0 0 100%)',  // Right to left
clipPath: 'inset(100% 0 0 0)',  // Top to bottom
```

### 2. Gallery Animations (`src/animations/gallery.js`)

#### Horizontal Scroll (Desktop)

```javascript
// Adjust scroll speed
scrub: 1,  // 1 = normal, 0.5 = faster, 2 = slower

// Change card entrance angle
rotation: -6,  // Negative = tilt left, positive = tilt right

// Adjust hover elevation
y: -12,  // Increase for more lift, decrease for subtle
```

#### Track Line Animation

```javascript
// Change trace speed
duration: 2,  // Increase for slower trace

// Change line style in CSS
stroke="var(--accent)"
strokeWidth="2"  // Increase for thicker line
```

### 3. Link Showcase (`src/animations/links.js`)

#### Discord Card

```javascript
// Adjust avatar entrance
rotateY: -180,  // Change angle of 3D rotation

// Change status ring pulse speed
duration: 0.9,  // Increase for slower pulse
```

#### GitHub Calendar

```javascript
// Adjust fill speed
stagger: 0.02,  // Decrease for faster fill, increase for slower

// Change row stagger
i * 0.06  // Increase for more delay between rows
```

#### Hackatime Gauge

```javascript
// Change gauge fill duration
duration: 1.2,  // Increase for slower fill

// Adjust needle overshoot
ease: 'back.out(0.3)',  // Increase 0.3 for more overshoot
```

### 4. Page Transitions (`src/animations/page-transitions.js`)

#### Gear Shift Transition

```javascript
// Adjust compression amount
scaleY: 0.98,  // Decrease for more compression (0.95)

// Change skew angle
skewY: -2,  // Increase for more dramatic skew

// Adjust slide distance
x: '-8%',  // Increase for longer slide
```

## 🎨 Easing Functions

Defined in `src/styles/variables.css`:

```css
--ease-power4: cubic-bezier(0.77, 0, 0.175, 1);  /* Smooth, natural */
--ease-expo: cubic-bezier(0.87, 0, 0.13, 1);     /* Fast start, slow end */
--ease-back: cubic-bezier(0.68, -0.3, 0.32, 1.3); /* Overshoot */
```

### Common GSAP Easings

```javascript
ease: 'power4.out'     // Smooth deceleration (default)
ease: 'power2.inOut'   // Balanced acceleration/deceleration
ease: 'expo.out'       // Dramatic slow-down
ease: 'back.out(0.3)'  // Gentle overshoot
ease: 'elastic.out'    // Bouncy (use sparingly!)
ease: 'none'           // Linear (for scroll scrubbing)
```

## 🔧 Common Customizations

### Change Animation Speed Globally

Edit `src/animations/gsap-utils.js`:

```javascript
export const makeTimeline = (opts = {}) => {
  const defaults = {
    defaults: {
      ease: 'power4.out',
      duration: 0.84,  // Change this to speed up/slow down all animations
    },
  };
  return gsap.timeline({ ...defaults, ...opts });
};
```

### Disable Specific Animations

```javascript
// In src/app/page.js, comment out the animation you don't want:

// initHero();           // Disable hero animations
// initGallery();        // Disable gallery animations
// initLinkShowcase();   // Disable link showcase animations
```

### Add Custom Animation

Create a new function in the appropriate animation file:

```javascript
// In src/animations/hero.js

export const customHeroAnimation = () => {
  const tl = makeTimeline();
  
  tl.fromTo(
    '.my-element',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.84 }
  );
  
  return tl;
};
```

Then call it in `src/app/page.js`:

```javascript
import { customHeroAnimation } from '../animations/hero';

useEffect(() => {
  customHeroAnimation();
}, []);
```

## 📱 Mobile Optimizations

Animations automatically adjust for mobile in several ways:

### Reduced Complexity

```javascript
const isMobile = window.innerWidth < 768;

if (isMobile) {
  // Simpler animation for mobile
  gsap.to(element, { opacity: 1, duration: 0.6 });
} else {
  // Complex animation for desktop
  gsap.to(element, { opacity: 1, scale: 1, rotate: 0, duration: 0.84 });
}
```

### Shorter Durations

Mobile animations are typically 20-30% faster:

```javascript
duration: isMobile ? 0.6 : 0.84
```

## ♿ Accessibility

### Reduced Motion Support

All animations check for user preference:

```javascript
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Usage:
if (prefersReducedMotion()) {
  gsap.set(element, { opacity: 1 });  // Instant
} else {
  gsap.to(element, { opacity: 1, duration: 0.84 });  // Animated
}
```

### Testing Reduced Motion

**Chrome DevTools:**
1. Open DevTools (F12)
2. Press Cmd/Ctrl + Shift + P
3. Type "Rendering"
4. Check "Emulate CSS prefers-reduced-motion"

**System Settings:**
- **Mac**: System Preferences → Accessibility → Display → Reduce motion
- **Windows**: Settings → Ease of Access → Display → Show animations

## 🐛 Debugging Animations

### View Timeline Progress

```javascript
const tl = makeTimeline();
// ... add animations

// Log progress
tl.eventCallback('onUpdate', () => {
  console.log('Progress:', tl.progress());
});
```

### Slow Down All Animations

```javascript
// Add to src/app/page.js
gsap.globalTimeline.timeScale(0.5);  // 50% speed
```

### Pause/Resume Animations

```javascript
// Pause all
gsap.globalTimeline.pause();

// Resume all
gsap.globalTimeline.resume();
```

### Kill Specific Animation

```javascript
// Kill all animations on an element
gsap.killTweensOf('.my-element');

// Kill all ScrollTriggers
ScrollTrigger.getAll().forEach(trigger => trigger.kill());
```

## 🎓 Advanced Techniques

### Stagger with Custom Distribution

```javascript
stagger: {
  each: 0.1,
  from: 'center',  // or 'start', 'end', 'edges', 'random'
  grid: [3, 4],    // For grid layouts
  ease: 'power2.inOut'
}
```

### Animate Along Path

```javascript
gsap.to('.element', {
  motionPath: {
    path: '.my-svg-path',
    align: '.my-svg-path',
    autoRotate: true,
  },
  duration: 2,
});
```

### Scroll-Linked Animation

```javascript
scrollTrigger: {
  trigger: '.section',
  start: 'top center',
  end: 'bottom center',
  scrub: 1,
  markers: true,  // Show debug markers
  onEnter: () => console.log('Entered'),
  onLeave: () => console.log('Left'),
}
```

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [Easing Visualizer](https://greensock.com/ease-visualizer/)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)

## 💡 Tips

1. **Start Simple**: Get basic animations working before adding complexity
2. **Use Timelines**: Easier to manage than individual tweens
3. **Test Performance**: Use Chrome DevTools Performance tab
4. **Mobile First**: Test on actual devices, not just DevTools
5. **Respect Users**: Always provide reduced-motion fallbacks

Happy animating! 🎬
