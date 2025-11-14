import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "/src/assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null)

  useEffect(() => {
    // Check if refs are available
    if (!scrollLine.current || !imgContainer.current || !img.current || !scroll.current) {
      return;
    }

    // Save ref values to variables for cleanup
    const scrollLineEl = scrollLine.current;
    const imgContainerEl = imgContainer.current;
    const imgEl = img.current;
    const scrollEl = scroll.current;
    const titlesEls = titles.current;

    const ScrollTl = gsap.timeline({ repeat: -1 });
    ScrollTl.fromTo(
      scrollLineEl,
      { translateX: -40 },
      { translateX: 40, duration: 1.5, ease: "power4.inOut" }
    );

    const mainTl = gsap.timeline();

    gsap.set(imgContainerEl, { scale: 0.9 });
    gsap.set(imgEl, { scale: 1.5 });

    mainTl.to(imgContainerEl, {
      scale: 1,
      duration: 3.25,
      ease: "power3.inOut"
    })
    .to(
      imgEl,
      { scale: 1, duration: 3.2, ease: "power4.inOut" },
      "-=3.1"
    )
    .to(
      titlesEls,
      { y: 0, duration: 2, ease: "power4.inOut" },
      "-=2.5"
    )
    .fromTo(
      scrollEl,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "out" },
      "-=2"
    );

    return () => {
      ScrollTl.kill();
      mainTl.kill();
      // Clear props using saved variables
      if (imgContainerEl && imgEl) {
        gsap.set([imgContainerEl, imgEl], { clearProps: "all" });
      }
    };
  }, []);

  return (
    <section id="hero" className="hero relative flex w-full h-screen select-none items-center justify-center" aria-label="hero">
      <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[7vw] 2xl:space-y-16 font-inter font-bold  uppercase text-accent-300">
        <div className="title 2xl:py-16">
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-visible">
            Hey, We&apos;re D.R.E.A.M
          </h1>
        </div>
        <div className=" title 2xl:py-16">
        <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96 font-outline-3 md:font-outline-4 text-transparent overflow-visible">
            Hey, We&apos;re D.R.E.A.M
          </h1>
        </div>
        <div className=" title 2xl:py-16">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
            Hey, We&apos;re D.R.E.A.M
          </h1>
        </div>
      </div>
      <div
        ref={imgContainer}
        className="absolute mx-auto  w-[55%] overflow-hidden rounded-md"
      >
        <img
          ref={img}
          className=" scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
      <div ref={scroll} className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
        <span className="rotate-90 text-body-3 font-roboto font-light">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
