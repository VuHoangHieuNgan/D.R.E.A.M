import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs, color }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
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
          .to(logoEl, { fill: "#DDDDD5"}, 0)
          .to(navBarEl, { color: "#DDDDD5" })
          .to(ctaEl, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

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
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between backdrop-blur-md px-5 py-3"
    >
      {/* logo */}
      <a aria-label="Logo" className="z-50">
        <h1 
          ref={logo}
          className="font-grotesk text-2xl font-bold tracking-wider"
          style={{ color: color }}
        >
          D.R.E.A.M
        </h1>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute top-4 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let's Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}