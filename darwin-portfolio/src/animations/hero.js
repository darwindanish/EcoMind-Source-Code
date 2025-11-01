import { gsap } from 'gsap';
import { makeTimeline, prefersReducedMotion, traceSVG } from './gsap-utils';

/**
 * Initialize Hero Section Animations
 * Race Start Sequence:
 * 1. Loader bar (0.6s)
 * 2. Race lights sequence (5 lights, stagger 0.15s each)
 * 3. Green burst flash (0.18s)
 * 4. Name reveal with mask (0.45s with letter stagger)
 * 5. Tagline slide up with parallax (0.6s)
 * 
 * Timeline is pinned and scrubs on scroll for launch sequence feel
 */
export const initHero = () => {
  if (prefersReducedMotion()) {
    // Fallback: just show everything
    gsap.set('.hero-content', { opacity: 1 });
    gsap.set('.race-lights', { opacity: 0 });
    return null;
  }

  const tl = makeTimeline({ paused: false });

  // Step 1: Loader bar animation (simulates preload)
  tl.fromTo(
    '.loader-bar',
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set('.loader-bar', { opacity: 0 });
      },
    }
  );

  // Step 2: Race lights sequence (5 lights)
  // Each light goes from dim (scale 0.6, opacity 0) to bright (scale 1.1, opacity 1)
  tl.fromTo(
    '.race-light',
    {
      scale: 0.6,
      opacity: 0,
      filter: 'brightness(0.3)',
    },
    {
      scale: 1.1,
      opacity: 1,
      filter: 'brightness(1.5)',
      duration: 0.18,
      stagger: 0.15,
      ease: 'power2.out',
    },
    '+=0.2'
  );

  // Step 3: Green burst flash (DRS activation feel)
  tl.fromTo(
    '.green-burst',
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 3,
      opacity: 1,
      duration: 0.18,
      ease: 'power2.out',
    },
    '+=0.1'
  )
  .to('.green-burst', {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
  })
  .set('.race-lights', { opacity: 0 }, '-=0.2');

  // Step 4: Name reveal with clip-path mask
  // Mask slides across, then letters stagger in
  tl.fromTo(
    '.hero-name',
    {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0,
    },
    {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      duration: 0.45,
      ease: 'power4.out',
    },
    '-=0.1'
  );

  // Letter-by-letter stagger (each letter wrapped in span)
  tl.fromTo(
    '.hero-name .letter',
    {
      opacity: 0,
      y: 20,
      rotationX: -90,
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.36,
      stagger: 0.04,
      ease: 'back.out(0.25)',
    },
    '-=0.3'
  );

  // Step 5: Tagline slide up with subtle parallax
  tl.fromTo(
    '.hero-tagline',
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power4.out',
    },
    '-=0.2'
  );

  // Subtitle and CTA
  tl.fromTo(
    '.hero-subtitle',
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power4.out',
    },
    '-=0.4'
  );

  tl.fromTo(
    '.hero-cta',
    {
      scale: 0.9,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(0.3)',
    },
    '-=0.3'
  );

  // Background particles parallax
  tl.fromTo(
    '.hero-particles',
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 0.6,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    },
    '-=1.2'
  );

  return tl;
};

/**
 * Hero scroll animation - pin and scrub through launch sequence
 */
export const initHeroScroll = () => {
  if (prefersReducedMotion()) return null;

  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  
  return ScrollTrigger.create({
    trigger: '.hero-section',
    start: 'top top',
    end: '+=380',
    pin: true,
    scrub: 0.8,
    onUpdate: (self) => {
      // Add motion blur effect on fast scroll
      const velocity = Math.abs(self.getVelocity());
      if (velocity > 1000) {
        gsap.to('.hero-name', {
          filter: `blur(${Math.min(velocity / 500, 4)}px)`,
          duration: 0.1,
        });
      } else {
        gsap.to('.hero-name', {
          filter: 'blur(0px)',
          duration: 0.3,
        });
      }
    },
  });
};

/**
 * Hero CTA button hover animation
 */
export const initHeroCTA = () => {
  const buttons = document.querySelectorAll('.hero-cta');
  
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      if (prefersReducedMotion()) return;
      
      gsap.to(btn, {
        scale: 1.06,
        duration: 0.3,
        ease: 'back.out(0.3)',
      });
      
      // Glow sweep effect
      gsap.fromTo(
        btn.querySelector('.cta-glow'),
        { x: '-100%' },
        {
          x: '100%',
          duration: 0.6,
          ease: 'power2.inOut',
        }
      );
    });
    
    btn.addEventListener('mouseleave', () => {
      if (prefersReducedMotion()) return;
      
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};
