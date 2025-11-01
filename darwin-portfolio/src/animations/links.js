import { gsap } from 'gsap';
import { makeTimeline, prefersReducedMotion, traceSVG, animateCounter } from './gsap-utils';

/**
 * Initialize Link Showcase (Digital Garage)
 * Each card has custom entrance with track-line trace → card slide → content fade
 * Stagger cards by 0.12s for rhythmic reveal
 */
export const initLinkShowcase = () => {
  if (prefersReducedMotion()) {
    gsap.set('.link-card', { opacity: 1 });
    return null;
  }

  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  const cards = gsap.utils.toArray('.link-card');

  const tl = makeTimeline();

  cards.forEach((card, i) => {
    const cardTl = makeTimeline();

    // Track line trace (if card has one)
    const trackLine = card.querySelector('.card-track-line');
    if (trackLine) {
      cardTl.add(traceSVG(trackLine, 0.6));
    }

    // Card entrance: slide + scale
    cardTl.fromTo(
      card,
      {
        y: 60,
        scale: 0.95,
        opacity: 0,
        skewY: -1.5,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        skewY: 0,
        duration: 0.84,
        ease: 'power4.out',
      },
      '-=0.4'
    );

    // Content fade in
    cardTl.fromTo(
      card.querySelector('.card-content'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.5'
    );

    // Add to master timeline with stagger
    tl.add(cardTl, i * 0.12);
  });

  ScrollTrigger.create({
    trigger: '.link-showcase-section',
    start: 'top 60%',
    animation: tl,
    toggleActions: 'play none none reverse',
  });

  return tl;
};

/**
 * Discord Profile Card Animation
 * Avatar + status ring pulse + bio reveal line-by-line
 */
export const initDiscordCard = () => {
  if (prefersReducedMotion()) return null;

  const card = document.querySelector('.discord-card');
  if (!card) return null;

  const tl = makeTimeline();

  // Avatar scale in with 3D rotate
  tl.fromTo(
    card.querySelector('.discord-avatar'),
    {
      scale: 0,
      rotateY: -180,
    },
    {
      scale: 1,
      rotateY: 0,
      duration: 0.84,
      ease: 'back.out(0.3)',
    }
  );

  // Status ring pulse (continuous loop)
  gsap.to(card.querySelector('.status-ring'), {
    scale: 1.1,
    opacity: 0.6,
    duration: 0.9,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  // Bio text reveal line-by-line
  tl.fromTo(
    card.querySelectorAll('.bio-line'),
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
    },
    '-=0.5'
  );

  return tl;
};

/**
 * Last Played Music Card Animation
 * Album art 3D rotate + waveform bars animate
 */
export const initMusicCard = () => {
  if (prefersReducedMotion()) return null;

  const card = document.querySelector('.music-card');
  if (!card) return null;

  const tl = makeTimeline();

  // Album art entrance with 3D rotate
  tl.fromTo(
    card.querySelector('.album-art'),
    {
      rotateY: -10,
      scale: 0.9,
      opacity: 0,
    },
    {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      duration: 0.84,
      ease: 'power4.out',
    }
  );

  // Waveform bars animate left to right
  tl.fromTo(
    card.querySelectorAll('.waveform-bar'),
    {
      scaleY: 0,
      transformOrigin: 'bottom center',
    },
    {
      scaleY: 1,
      duration: 0.6,
      stagger: 0.02,
      ease: 'power2.out',
    },
    '-=0.5'
  );

  // Pulse effect on beat (subtle scale)
  gsap.to(card.querySelector('.album-art'), {
    scale: 1.01,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  return tl;
};

/**
 * GitHub Calendar Animation
 * Contribution squares fill progressively (telemetry feel)
 */
export const initGitHubCalendar = () => {
  if (prefersReducedMotion()) {
    gsap.set('.contribution-square', { opacity: 1 });
    return null;
  }

  const squares = document.querySelectorAll('.contribution-square');
  if (squares.length === 0) return null;

  // Group squares by row for nested stagger
  const rows = {};
  squares.forEach((square) => {
    const row = square.dataset.row || 0;
    if (!rows[row]) rows[row] = [];
    rows[row].push(square);
  });

  const tl = makeTimeline();

  Object.values(rows).forEach((rowSquares, i) => {
    tl.fromTo(
      rowSquares,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.36,
        stagger: 0.02,
        ease: 'back.out(0.3)',
      },
      i * 0.06
    );
  });

  return tl;
};

/**
 * Hackatime Gauge Animation
 * Circular gauge strokeDashoffset + needle rotate + counter tick
 */
export const initHackatimeGauge = () => {
  if (prefersReducedMotion()) return null;

  const gauge = document.querySelector('.hackatime-gauge');
  if (!gauge) return null;

  const gaugePath = gauge.querySelector('.gauge-path');
  const needle = gauge.querySelector('.gauge-needle');
  const counter = gauge.querySelector('.gauge-counter');
  const percent = parseInt(gauge.dataset.percent || 75);

  const tl = makeTimeline();

  // Gauge fill animation
  const length = gaugePath.getTotalLength();
  const targetOffset = length - (length * percent) / 100;

  gsap.set(gaugePath, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  tl.to(gaugePath, {
    strokeDashoffset: targetOffset,
    duration: 1.2,
    ease: 'power2.out',
  });

  // Needle rotate with overshoot
  const targetRotation = (percent / 100) * 180 - 90;
  tl.fromTo(
    needle,
    { rotation: -90 },
    {
      rotation: targetRotation,
      duration: 1.2,
      ease: 'back.out(0.3)',
    },
    0
  );

  // Counter tick
  if (counter) {
    tl.add(animateCounter(counter, percent, 1.2), 0);
  }

  return tl;
};

/**
 * Link card hover effects
 * Elevation + glow ring on hover
 */
export const initLinkCardHovers = () => {
  const cards = document.querySelectorAll('.link-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (prefersReducedMotion()) return;

      gsap.to(card, {
        y: -6,
        boxShadow: '0 12px 40px rgba(45, 168, 255, 0.3)',
        duration: 0.36,
        ease: 'power2.out',
      });

      // Glow ring expand
      const glowRing = card.querySelector('.card-glow-ring');
      if (glowRing) {
        gsap.to(glowRing, {
          scale: 1.05,
          opacity: 1,
          duration: 0.36,
          ease: 'power2.out',
        });
      }
    });

    card.addEventListener('mouseleave', () => {
      if (prefersReducedMotion()) return;

      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        duration: 0.36,
        ease: 'power2.out',
      });

      const glowRing = card.querySelector('.card-glow-ring');
      if (glowRing) {
        gsap.to(glowRing, {
          scale: 1,
          opacity: 0,
          duration: 0.36,
        });
      }
    });
  });
};

/**
 * Connect button animation (Discord card)
 * Micro-bounce on hover
 */
export const initConnectButton = () => {
  const buttons = document.querySelectorAll('.connect-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      if (prefersReducedMotion()) return;

      gsap.to(btn, {
        scale: 1.06,
        duration: 0.3,
        ease: 'back.out(0.3)',
      });
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
