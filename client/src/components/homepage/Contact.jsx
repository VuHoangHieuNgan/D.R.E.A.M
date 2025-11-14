import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
  const heading1 = useRef(null)
  const body1 = useRef(null)
  const heading2 = useRef(null)
  const body2 = useRef(null)
  const contactSection = useRef(null)

  useEffect(() => {
    // Check if refs are available
    if (!contactSection.current || !heading1.current || !body1.current || !heading2.current || !body2.current) {
      return;
    }

    // Save ref values for cleanup
    const contactSectionEl = contactSection.current;
    const heading1El = heading1.current;
    const body1El = body1.current;
    const heading2El = heading2.current;
    const body2El = body2.current;

    const trigger = ScrollTrigger.create({
      trigger: contactSectionEl,
      start:"180px bottom",
      // markers: true,
      animation: gsap
        .timeline()
        .to(heading1El, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body1El, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2)
        .to(heading2El, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.4)
        .to(body2El, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.6),

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
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      
      
      <Heading title="Thông Điệp" />
      <div ref={contactSection} className="mt-10 max-w-5xl mx-auto space-y-16">
        {/* Phần 1: Khẳng Định Chung */}
        <div className="space-y-6">
          <h3 ref={heading1} className="text-heading-3 2xl:text-6xl font-inter font-bold leading-tight translate-y-10 opacity-0 text-black">
            ⚡ Tương Lai Dữ Liệu: Chúng Ta Có Còn Là Chủ?
          </h3>
          <p ref={body1} className="text-body-1 2xl:text-2xl font-roboto font-light leading-relaxed translate-y-10 opacity-0 text-black">
            Từ học thuyết Marx về Địa tô đất đai, chúng ta nhận ra rằng trong nền kinh tế số, tài sản cá nhân và sức lao động của hàng tỷ người đang bị biến thành nguồn lợi nhuận tập trung (Địa tô Dữ liệu). Việc chúng ta tiêu thụ nội dung, tương tác, và thậm chí chỉ là sự chú ý, đều đang nuôi dưỡng một cơ chế tích lũy tư bản mới, gây ra bất bình đẳng về kinh tế, quyền lực và tự do cá nhân.
          </p>
        </div>

        {/* Phần 2: Kêu Gọi Trách Nhiệm */}
        <div className="space-y-6">
          <h3 ref={heading2} className="text-heading-3 2xl:text-6xl font-inter font-bold leading-tight translate-y-10 opacity-0 text-black">
            🔑 Đòi Hỏi Quyền Dữ Liệu Cá Nhân
          </h3>
          <p ref={body2} className="text-body-1 2xl:text-2xl font-roboto font-light leading-relaxed translate-y-10 opacity-0 text-black">
            Chúng ta không thể tiếp tục là nạn nhân vô thức. Đòi hỏi quyền Dữ liệu cá nhân cũng quan trọng như đòi hỏi quyền lợi lao động hay quyền con người trong các thời đại trước. Chỉ khi đó, chúng ta mới có thể định hình tương lai số: làm sao để công nghệ và dữ liệu được sử dụng minh bạch, công bằng, phục vụ lợi ích chung của toàn xã hội, thay vì chỉ làm giàu cho một nhóm nhỏ tinh hoa.
          </p>
        </div>
      </div>
    </section>
  );
}
