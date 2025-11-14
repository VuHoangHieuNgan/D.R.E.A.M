import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Lenis from "lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs, color }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const location = useLocation();
  const isGamePage = location.pathname === '/90-seconds';
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!navBar.current) return;

    const navBarEl = navBar.current;
    const tl = gsap.timeline();
    
    tl.to(navBarEl, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);


  useEffect(() => {
    if (!logo.current || !navBar.current || !cta.current || !sectionRefs) return;

    const logoEl = logo.current;
    const navBarEl = navBar.current;
    const ctaEl = cta.current;
    const triggers = [];

    sectionRefs.forEach((section) => {
      if (!section) return;
      
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(logoEl, { 
            backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            duration: 0.3
          }, 0)
          .to(navBarEl, { 
            backgroundColor: "rgba(17, 24, 39, 0.8)",
            borderColor: "rgba(55, 65, 81, 0.5)",
            duration: 0.3
          })
          .to(ctaEl, { 
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            duration: 0.3
          }, 0),

        toggleActions: "restart reverse restart reverse",
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, [sectionRefs]);

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50 px-5 py-3 shadow-sm"
    >
      {/* Logo with Icon */}
      <Link to="/" aria-label="Logo" className="z-50 flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">🌐</span>
        </div>
        <h1 
          ref={logo}
          className="font-grotesk text-2xl font-black tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          D.R.E.A.M
        </h1>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center space-x-6 font-grotesk text-sm font-medium">
        {!isGamePage && (
          <>
            <a href="#about" className="group relative hidden md:inline-block hover:text-blue-600 transition-colors">
              <span>About</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="#services" className="group relative hidden md:inline-block hover:text-blue-600 transition-colors">
              <span>Services</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="#works" className="group relative hidden md:inline-block hover:text-blue-600 transition-colors">
              <span>Projects</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </>
        )}
        
        {/* Game Button */}
        <Link
          to="/90-seconds"
          className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
        >
          <span className="text-lg">🎮</span>
          <span>90 Giây Game</span>
        </Link>

        {/* Contact Button */}
        {!isGamePage && (
          <a
            ref={cta}
            className="group relative px-5 py-2.5 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold transition-all duration-300"
            href="#contact"
          >
            <span className="relative w-fit flex items-center gap-2">
              <span>Let's Talk</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
        )}
      </nav>
    </header>
  );
}