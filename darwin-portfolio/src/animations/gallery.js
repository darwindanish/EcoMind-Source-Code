import { gsap } from 'gsap';
import { makeTimeline, prefersReducedMotion, traceSVG } from './gsap-utils';

/**
 * Initialize Achievements Gallery (Lap Gallery)
 * Cards animate with horizontal translate + rotation (overtake feel)
 * SVG track line traces across as cards enter
 * 
 * Desktop: horizontal scroll with pinning
 * Mobile: vertical stack with same transitions
 */
export const initGallery = () => {
  if (prefersReducedMotion()) {
    gsap.set('.gallery-card', { opacity: 1, rotation: 0 });
    return null;
  }

  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Mobile: vertical stacked cards
    return gsap.fromTo(
      '.gallery-card',
      {
        x: -60,
        rotation: -6,
        opacity: 0,
        scale: 0.95,
      },
      {
        x: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 0.84,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.gallery-container',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // Desktop: horizontal scroll
  const cards = gsap.utils.toArray('.gallery-card');
  const container = document.querySelector('.gallery-container');
  
  if (!container || cards.length === 0) return null;

  const tl = makeTimeline();

  // Horizontal scroll setup
  const scrollWidth = container.scrollWidth - window.innerWidth;

  tl.to(cards, {
    x: () => -scrollWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: '.gallery-section',
      pin: true,
      scrub: 1,
      end: () => `+=${scrollWidth}`,
      invalidateOnRefresh: true,
    },
  });

  // Individual card entrance animations
  cards.forEach((card, i) => {
    gsap.fromTo(
      card,
      {
        rotation: -6,
        opacity: 0,
        scale: 0.95,
        boxShadow: '0 0 0 rgba(45, 168, 255, 0)',
      },
      {
        rotation: 0,
        opacity: 1,
        scale: 1,
        boxShadow: '0 8px 32px rgba(45, 168, 255, 0.2)',
        duration: 0.84,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'left 80%',
          end: 'left 20%',
          scrub: 0.8,
          containerAnimation: tl,
        },
      }
    );
  });

  return tl;
};

/**
 * Animate track line trace
 * SVG path draws across as gallery scrolls
 */
export const initTrackLine = () => {
  if (prefersReducedMotion()) return null;

  const trackPath = document.querySelector('.track-line');
  if (!trackPath) return null;

  const { ScrollTrigger } = require('gsap/ScrollTrigger');

  return traceSVG(trackPath, 2, {
    scrollTrigger: {
      trigger: '.gallery-section',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
    },
  });
};

/**
 * Gallery card hover effects
 * Simulate "overtake" with quick scale and glow
 */
export const initGalleryCardHovers = () => {
  const cards = document.querySelectorAll('.gallery-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (prefersReducedMotion()) return;

      gsap.to(card, {
        y: -12,
        scale: 1.05,
        boxShadow: '0 16px 48px rgba(45, 168, 255, 0.4)',
        duration: 0.36,
        ease: 'power2.out',
      });

      // Glow ring animation
      gsap.fromTo(
        card.querySelector('.card-glow'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1.2,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    });

    card.addEventListener('mouseleave', () => {
      if (prefersReducedMotion()) return;

      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 8px 32px rgba(45, 168, 255, 0.2)',
        duration: 0.36,
        ease: 'power2.out',
      });

      gsap.to(card.querySelector('.card-glow'), {
        opacity: 0,
        duration: 0.3,
      });
    });
  });
};
