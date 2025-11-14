
export default function Role({forwardedRef}) {
  return (
    <section ref={forwardedRef} id="about" className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-inter font-bold text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
          {/* Dữ liệu đang là &apos;Đất đai&apos; mới.
          <br />
          Nhưng ai là &apos;Địa chủ&apos;?
          <br />
          Hiểu và chiến đấu cho Quyền Dữ Liệu của bạn. */}
          Dữ liệu là Tài Sản. Đừng để nó trở thành Địa Tô.
        </h1>
      </div>
    </section>
  );
}
