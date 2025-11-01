import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Create a GSAP timeline with default settings
 * @param {object} opts - Timeline options
 * @returns {gsap.core.Timeline}
 */
export const makeTimeline = (opts = {}) => {
  const defaults = {
    defaults: {
      ease: 'power4.out',
      duration: 0.84,
    },
  };
  
  return gsap.timeline({ ...defaults, ...opts });
};

/**
 * Animate elements with stagger from a starting state
 * @param {string|Element|Element[]} elements - Elements to animate
 * @param {object} fromProps - Starting properties
 * @param {object} toProps - Ending properties
 * @param {number} stagger - Stagger amount
 * @returns {gsap.core.Tween}
 */
export const staggeredFrom = (elements, fromProps, toProps, stagger = 0.12) => {
  if (prefersReducedMotion()) {
    return gsap.set(elements, toProps);
  }
  
  return gsap.fromTo(
    elements,
    { ...fromProps },
    {
      ...toProps,
      stagger: stagger,
      ease: 'power4.out',
    }
  );
};

/**
 * Animate SVG path stroke (trace effect)
 * @param {string|Element} path - SVG path element
 * @param {number} duration - Animation duration
 * @param {object} opts - Additional options
 * @returns {gsap.core.Tween}
 */
export const traceSVG = (path, duration = 1.2, opts = {}) => {
  if (prefersReducedMotion()) {
    return gsap.set(path, { strokeDashoffset: 0 });
  }
  
  const pathElement = typeof path === 'string' ? document.querySelector(path) : path;
  if (!pathElement) return null;
  
  const length = pathElement.getTotalLength();
  
  gsap.set(pathElement, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });
  
  return gsap.to(pathElement, {
    strokeDashoffset: 0,
    duration: duration,
    ease: 'power2.inOut',
    ...opts,
  });
};

/**
 * Gear Shift Transition - compress and slide out current, slide in next
 * @param {Element} currentSection - Current section element
 * @param {Element} nextSection - Next section element
 * @param {object} opts - Options
 * @returns {gsap.core.Timeline}
 */
export const gearShiftTransition = (currentSection, nextSection, opts = {}) => {
  const tl = makeTimeline();
  
  if (prefersReducedMotion()) {
    tl.set(currentSection, { opacity: 0 })
      .set(nextSection, { opacity: 1 });
    return tl;
  }
  
  tl.to(currentSection, {
    scaleY: 0.98,
    skewY: -2,
    x: '-8%',
    opacity: 0,
    duration: 0.9,
    ease: 'power4.out',
  })
  .fromTo(
    nextSection,
    {
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
  
  return tl;
};

/**
 * DRS Burst - quick emphasis reveal with radial sweep
 * @param {Element} element - Element to emphasize
 * @returns {gsap.core.Timeline}
 */
export const drsBurst = (element) => {
  const tl = makeTimeline();
  
  if (prefersReducedMotion()) {
    return tl.set(element, { scale: 1 });
  }
  
  tl.to(element, {
    scale: 1.02,
    duration: 0.12,
    ease: 'power2.out',
  })
  .to(element, {
    scale: 1,
    duration: 0.12,
    ease: 'power2.in',
  });
  
  return tl;
};

/**
 * Counter animation - count from 0 to target value
 * @param {Element} element - Element containing the number
 * @param {number} target - Target number
 * @param {number} duration - Animation duration
 * @returns {gsap.core.Tween}
 */
export const animateCounter = (element, target, duration = 1.2) => {
  if (prefersReducedMotion()) {
    element.textContent = target;
    return gsap.set(element, {});
  }
  
  const obj = { value: 0 };
  
  return gsap.to(obj, {
    value: target,
    duration: duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value);
    },
  });
};

/**
 * Card entrance animation - slide, rotate, and fade in
 * @param {Element} card - Card element
 * @param {object} opts - Options (delay, direction)
 * @returns {gsap.core.Timeline}
 */
export const animateCard = (card, opts = {}) => {
  const { delay = 0, direction = 'up' } = opts;
  const tl = makeTimeline();
  
  if (prefersReducedMotion()) {
    return tl.set(card, { opacity: 1 });
  }
  
  const yStart = direction === 'up' ? 60 : direction === 'down' ? -60 : 0;
  const xStart = direction === 'left' ? 60 : direction === 'right' ? -60 : 0;
  
  tl.fromTo(
    card,
    {
      y: yStart,
      x: xStart,
      opacity: 0,
      rotationX: -6,
      scale: 0.95,
    },
    {
      y: 0,
      x: 0,
      opacity: 1,
      rotationX: 0,
      scale: 1,
      duration: 0.84,
      ease: 'back.out(0.3)',
      delay: delay,
    }
  );
  
  return tl;
};

/**
 * Parallax effect on scroll
 * @param {string|Element} element - Element to parallax
 * @param {number} speed - Parallax speed (0.5 = half speed, 2 = double speed)
 * @param {object} opts - ScrollTrigger options
 */
export const parallaxOnScroll = (element, speed = 0.5, opts = {}) => {
  if (prefersReducedMotion()) return null;
  
  return gsap.to(element, {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: 0,
      ...opts,
    },
  });
};

/**
 * Pin section while animations play
 * @param {string|Element} trigger - Trigger element
 * @param {object} opts - ScrollTrigger options
 */
export const pinSection = (trigger, opts = {}) => {
  if (prefersReducedMotion()) return null;
  
  return ScrollTrigger.create({
    trigger: trigger,
    pin: true,
    start: 'top top',
    end: '+=100%',
    scrub: 1,
    ...opts,
  });
};

/**
 * Fade in elements on scroll
 * @param {string|Element|Element[]} elements - Elements to fade in
 * @param {object} opts - Options
 */
export const fadeInOnScroll = (elements, opts = {}) => {
  if (prefersReducedMotion()) {
    return gsap.set(elements, { opacity: 1 });
  }
  
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.84,
      stagger: 0.12,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: elements,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        ...opts,
      },
    }
  );
};

/**
 * Cleanup all ScrollTriggers
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

/**
 * Refresh ScrollTrigger (call after DOM changes)
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
