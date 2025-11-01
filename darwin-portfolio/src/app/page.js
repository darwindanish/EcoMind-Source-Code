'use client';

import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import LinkShowcase from '../components/LinkShowcase';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  useEffect(() => {
    // Initialize all animations after mount
    const initAnimations = async () => {
      const { initHero, initHeroScroll, initHeroCTA } = await import('../animations/hero');
      const { initGallery, initTrackLine, initGalleryCardHovers } = await import('../animations/gallery');
      const {
        initLinkShowcase,
        initDiscordCard,
        initMusicCard,
        initGitHubCalendar,
        initHackatimeGauge,
        initLinkCardHovers,
        initConnectButton,
      } = await import('../animations/links');
      const { fadeInOnScroll } = await import('../animations/gsap-utils');

      // Initialize hero animations
      initHero();
      initHeroScroll();
      initHeroCTA();

      // Initialize gallery
      initGallery();
      initTrackLine();
      initGalleryCardHovers();

      // Initialize link showcase
      initLinkShowcase();
      initDiscordCard();
      initMusicCard();
      initGitHubCalendar();
      initHackatimeGauge();
      initLinkCardHovers();
      initConnectButton();

      // Fade in other sections
      fadeInOnScroll('.about-section');
      fadeInOnScroll('.projects-section');
      fadeInOnScroll('.blog-section');
      fadeInOnScroll('.contact-section');
    };

    initAnimations();

    // Cleanup on unmount
    return () => {
      const { cleanupScrollTriggers } = require('../animations/gsap-utils');
      cleanupScrollTriggers();
    };
  }, []);

  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <Gallery />
        <LinkShowcase />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
