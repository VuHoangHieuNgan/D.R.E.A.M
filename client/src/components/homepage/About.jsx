import { useEffect, useRef } from "react";
import aboutImg from "/src/assets/images/about.png";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const about = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    // Check if refs are available
    if (!aboutSection.current || !heading.current || !body.current) {
      return;
    }

    // Save ref values for cleanup
    const aboutSectionEl = aboutSection.current;
    const headingEl = heading.current;
    const bodyEl = body.current;

    const trigger = ScrollTrigger.create({
      trigger: aboutSectionEl,
      start: "top 20%",
      // markers: true,
      animation: gsap
        .timeline()
        .to(
          headingEl,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          bodyEl,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <section ref={aboutSection} aria-label="about me" className="relative">
      <div className="relative z-10">
        <Heading title="vấn đề" />
      </div>
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={about}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={aboutImg}
            width="600"
            height="800"
            alt="about image"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-6xl font-inter font-bold leading-tight opacity-0"
            >
              Địa Tô Dữ Liệu: Giá Trị Thặng Dư Thời Đại 4.0
            </h3>
            <p ref={body} className="translate-y-10 text-body-1 2xl:text-4xl font-roboto font-light opacity-0">
              Trong kinh tế chính trị Marx-Lenin, địa tô là lợi nhuận thu được từ việc sở hữu đất đai – tư liệu sản xuất khan hiếm. Ngày nay, dữ liệu cá nhân của hàng tỷ người đã trở thành &quot;mảnh đất&quot; màu mỡ mới.

              <br></br>
              <br></br>
              Địa tô dữ liệu là thuật ngữ chỉ khoản lợi nhuận khổng lồ các tập đoàn công nghệ thu về từ việc sở hữu và kiểm soát dữ liệu, thay vì trực tiếp tạo ra nó. Điều này tạo nên một cơ chế bóc lột và bất bình đẳng kiểu mới trong chủ nghĩa tư bản kỹ thuật số.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
