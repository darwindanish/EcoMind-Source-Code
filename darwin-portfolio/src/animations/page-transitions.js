import { gsap } from 'gsap';
import { makeTimeline, prefersReducedMotion } from './gsap-utils';

/**
 * Page Transition Out
 * Compress and fade current view
 * Duration: 0.6s
 */
export const pageTransitionOut = (callback) => {
  if (prefersReducedMotion()) {
    if (callback) callback();
    return null;
  }

  const tl = makeTimeline();

  tl.to('main', {
    scale: 0.98,
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: 'power4.in',
    onComplete: callback,
  });

  // Background sweep
  tl.fromTo(
    '.page-transition-overlay',
    {
      scaleY: 0,
      transformOrigin: 'top center',
    },
    {
      scaleY: 1,
      duration: 0.6,
      ease: 'power4.inOut',
    },
    0
  );

  return tl;
};

/**
 * Page Transition In
 * Scale from 0.98 → 1 + layered background sweep
 * Duration: 0.6s
 */
export const pageTransitionIn = () => {
  if (prefersReducedMotion()) {
    gsap.set('main', { opacity: 1, scale: 1 });
    return null;
  }

  const tl = makeTimeline();

  // Background sweep out
  tl.to(
    '.page-transition-overlay',
    {
      scaleY: 0,
      transformOrigin: 'bottom center',
      duration: 0.6,
      ease: 'power4.inOut',
    },
    0
  );

  // Content scale in
  tl.fromTo(
    'main',
    {
      scale: 0.98,
      opacity: 0,
      y: 20,
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power4.out',
    },
    0.2
  );

  return tl;
};

/**
 * Section Transition (Gear Shift)
 * Used when navigating between major sections
 * Compresses current, slides in next with skew
 */
export const sectionTransition = (currentSection, nextSection) => {
  if (prefersReducedMotion()) {
    gsap.set(currentSection, { display: 'none' });
    gsap.set(nextSection, { display: 'block', opacity: 1 });
    return null;
  }

  const tl = makeTimeline();

  // Current section: compress + skew + slide out
  tl.to(currentSection, {
    scaleY: 0.98,
    skewY: -2,
    x: '-8%',
    opacity: 0,
    duration: 0.9,
    ease: 'power4.out',
  });

  // Next section: slide in + scale
  tl.fromTo(
    nextSection,
    {
      display: 'block',
      x: '8%',
      scale: 1.02,
      opacity: 0,
    },
    {
      x: '0%',
      scale: 1,
      opacity: 1,
      duration: 0.9,
      ease: 'power4.out',
    },
    '-=0.6'
  );

  // Background tone shift
  tl.to(
    'body',
    {
      backgroundColor: nextSection.dataset.bgColor || 'var(--bg)',
      duration: 0.9,
      ease: 'power2.inOut',
    },
    0
  );

  return tl;
};

/**
 * Blog Post Detail Transition
 * List shrinks + slides left, detail expands with fade
 */
export const blogDetailTransition = (listView, detailView) => {
  if (prefersReducedMotion()) {
    gsap.set(listView, { display: 'none' });
    gsap.set(detailView, { display: 'block', opacity: 1 });
    return null;
  }

  const tl = makeTimeline();

  // List view exit
  tl.to(listView, {
    scaleY: 0.98,
    x: '-20%',
    opacity: 0,
    duration: 0.6,
    ease: 'power4.in',
  });

  // Detail view entrance
  tl.fromTo(
    detailView,
    {
      display: 'block',
      x: '20%',
      scale: 0.95,
      opacity: 0,
    },
    {
      x: '0%',
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'power4.out',
    },
    '-=0.3'
  );

  return tl;
};

/**
 * Modal Open Animation
 * Scale up with backdrop fade
 */
export const modalOpen = (modal) => {
  if (prefersReducedMotion()) {
    gsap.set(modal, { display: 'flex', opacity: 1 });
    return null;
  }

  const tl = makeTimeline();

  gsap.set(modal, { display: 'flex' });

  // Backdrop fade
  tl.fromTo(
    modal.querySelector('.modal-backdrop'),
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.36,
      ease: 'power2.out',
    }
  );

  // Modal content scale + fade
  tl.fromTo(
    modal.querySelector('.modal-content'),
    {
      scale: 0.9,
      opacity: 0,
      y: 40,
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(0.3)',
    },
    '-=0.2'
  );

  return tl;
};

/**
 * Modal Close Animation
 * Scale down with backdrop fade
 */
export const modalClose = (modal, callback) => {
  if (prefersReducedMotion()) {
    gsap.set(modal, { display: 'none' });
    if (callback) callback();
    return null;
  }

  const tl = makeTimeline();

  // Modal content scale down
  tl.to(modal.querySelector('.modal-content'), {
    scale: 0.9,
    opacity: 0,
    y: 40,
    duration: 0.36,
    ease: 'power2.in',
  });

  // Backdrop fade
  tl.to(
    modal.querySelector('.modal-backdrop'),
    {
      opacity: 0,
      duration: 0.36,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(modal, { display: 'none' });
        if (callback) callback();
      },
    },
    '-=0.2'
  );

  return tl;
};

/**
 * Smooth scroll to section with easing
 */
export const smoothScrollTo = (target, offset = 0) => {
  if (prefersReducedMotion()) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView();
    }
    return null;
  }

  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return null;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;

  return gsap.to(window, {
    scrollTo: { y: targetPosition, autoKill: true },
    duration: 1.2,
    ease: 'power4.inOut',
  });
};
