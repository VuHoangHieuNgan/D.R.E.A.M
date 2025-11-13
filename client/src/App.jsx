import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";Z

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import Game from "./game/Game";

const App = () => {
 
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {

    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          // markers: true,
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",

        });
        ScrollTrigger.refresh()
      });
    });
  }, []);

  

  // Show game if user wants to play
  if (showGame) {
    return <Game />;
  }

  return (
    <div className="bg-secondary-100">
      <NavBar sectionRefs={sectionRefs.current} />{" "}
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Game Button */}
      <button
        onClick={() => setShowGame(true)}
        className="fixed bottom-8 left-8 z-50 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
                   hover:from-purple-500 hover:to-blue-500 rounded-full font-bold text-white text-lg 
                   shadow-2xl transform transition-all duration-300 hover:scale-110 flex items-center gap-3"
        aria-label="Chơi game Thế Giới Dữ Liệu"
      >
        <span className="text-2xl">🎮</span>
        <span>Chơi Game</span>
      </button>
    </div>
  );
};

export default App;
