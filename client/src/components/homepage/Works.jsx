import signie from "/src/assets/images/signie.webp";
import notrisk from "/src/assets/images/notrisk.webp";
import evinco from "/src/assets/images/evinco.webp";
import extract from "/src/assets/images/extract.webp";
import circuits from "/src/assets/images/circuits.webp";
// import memento from "/src/assets/images/memento-desktop.webp";
// import acc from "/src/assets/images/acc-square.webp";
// import daddy from "/src/assets/images/godaddy-desktop.webp";
// import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Nội dung" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/nikunjmathur08/Signie"
            img={signie}
            alt="Signie"
            name="Trong nền kinh tế số, dữ liệu cá nhân đang là &quot;mảnh đất&quot; màu mỡ tạo ra lợi nhuận khổng lồ. Nhưng liệu giá trị đó có được phân phối công bằng?"
            type="Project này sẽ cùng bạn khám phá cách thức hệ quả xoáy, và quyền lợi của chúng ta qua 4 khía cạnh chính:"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://not-risk.vercel.app"
            img={notrisk}
            alt="Dữ Liệu & Giá Trị Thặng Dư Mới"
            name="Dữ Liệu &amp; Giá Trị Thặng Dư Mới"
            type="1. Giá trị thặng dư là gì? Là phần giá trị do lao động tạo ra vượt quá tiền lương, bị nhà tư bản chiếm đoạt.

2. Dữ liệu là &quot;dầu mỏ mới&quot;: Các nền tảng (Google, Facebook) cung cấp dịch vụ miễn phí, đổi lại họ thu thập và xử lý dữ liệu hành vi thặng dư của người dùng.

3. Khai thác giá trị: Khi được phân tích bằng AI, kho dữ liệu này giúp doanh nghiệp tối ưu quảng cáo, dự đoán hành vi, và tạo ra lợi nhuận khổng lồ (giá trị thặng dư mới) vượt xa chi phí duy trì nền tảng.

4. Tính chất &quot;Địa tô&quot;: Giá trị này bị chiếm đoạt bởi bên sở hữu nền tảng, không phải người cung cấp dữ liệu. Chúng ta không phải là khách hàng, mà là sản phẩm."
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/nikunjmathur08/evinco"
            img={evinco}
            alt="Lao Động Số & Bóc Lột Kiểu Mới"
            name="Lao Động Số &amp; Bóc Lột Kiểu Mới"
            type="1. Lao động số: Mọi hoạt động của người dùng trên không gian số (đăng bài, tìm kiếm, đánh giá, tương tác) đều tạo ra dữ liệu và giá trị kinh tế.

2. &quot;Công nhân&quot; không lương: Người dùng bỏ thời gian, công sức sáng tạo, tương tác (lao động tự nguyện) để giữ chân người khác trên nền tảng, nhưng hầu hết không được trả thù lao.

3. Bóc lột sự chú ý: Các công ty thiết kế thuật toán để giữ người dùng (tăng sự chú ý). Mỗi giây phút ta lướt mạng là ta đang lao động cho nền tảng, cung cấp thêm dữ liệu để huấn luyện AI và tăng doanh thu quảng cáo.

4. Ví dụ điển hình: ChatGPT (AI) học từ nội dung do con người tạo ra mà không trả công tác giả; các nền tảng gig (Grab, Uber) chiết khấu cao vì kiểm soát thuật toán và dữ liệu."
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-7 md:pt-20">
          <Projects
            link="https://github.com/nikunjmathur08/Smart_Extractor"
            img={extract}
            alt="Quyền Sở Hữu Dữ Liệu & Bất Bình Đẳng"
            name="Quyền Sở Hữu Dữ Liệu &amp; Bất Bình Đẳng"
            type="1. Quyền lực tập trung: Dữ liệu, được coi là tư liệu sản xuất tối quan trọng của thế kỷ 21, đang tập trung vào tay một số ít tập đoàn công nghệ (FAANG).

2. Mất kiểm soát: Cá nhân gần như mất kiểm soát đối với dữ liệu mình tạo ra, không biết nó được mua bán ra sao và không được chia sẻ lợi nhuận.

3. Bất bình đẳng gia tăng: Sự tập trung dữ liệu tạo ra độc quyền, làm gia tăng bất bình đẳng kinh tế. Xã hội đang phân tầng thành &quot;giai cấp dữ liệu&quot; (người kiểm soát) và &quot;lao động dữ liệu&quot; (người cung cấp).

4. Hậu quả: Bê bối Cambridge Analytica cho thấy dữ liệu có thể bị lạm dụng để thao túng xã hội và chính trị."
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-5">
        <Projects
            link="https://dld.srmist.edu.in/eLogic/"
            img={circuits}
            alt="Quyền Riêng Tư & Nhân Phẩm Con Người"
            name="Quyền Riêng Tư &amp; Nhân Phẩm Con Người"
            type="1. Xâm phạm để trục lợi: Mô hình &quot;địa tô dữ liệu&quot; khuyến khích thu thập dữ liệu tối đa, dẫn đến xâm phạm quyền riêng tư của cá nhân.

2. Giám sát đại chúng: Sự theo dõi của doanh nghiệp và chính phủ tạo nên một &quot;Panopticon kỹ thuật số&quot;. Con người có nguy cơ mất tự do cá nhân, bị buộc phải tự kiểm duyệt hành vi.

3. Vật hóa con người: Dữ liệu cá nhân bị biến thành các điểm dữ liệu (hồ sơ, điểm tín dụng). Con người bị đánh giá và xếp hạng qua thuật toán thay vì nhân cách, làm tổn hại đến nhân phẩm và tính tự trị.

4. Trách nhiệm Công dân số: Chúng ta cần xem dữ liệu cá nhân là tài sản quý và quyền tự do cá nhân, đòi hỏi các công ty minh bạch, đồng thời ủng hộ các luật bảo vệ dữ liệu (như GDPR)."
          />
         
        </div>
      </div>
    </section>
  );
}