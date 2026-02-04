import Link from "next/link";

const services = [
  {
    icon: "⚙️",
    title: "Thiết kế hệ thống",
    description:
      "Khảo sát, lập bản vẽ P&ID, thiết kế logic điều khiển và mô phỏng trước khi triển khai.",
  },
  {
    icon: "🔌",
    title: "Lắp đặt & Tích hợp",
    description:
      "Lắp đặt thiết bị, đấu nối hệ thống và tích hợp OT/IT theo chuẩn ISA-95.",
  },
  {
    icon: "🧪",
    title: "FAT / SAT",
    description:
      "Kiểm tra nghiệm thu tại xưởng (FAT) và tại công trường (SAT) đảm bảo chất lượng.",
  },
  {
    icon: "📡",
    title: "Giám sát từ xa",
    description:
      "Trung tâm điều khiển 24/7 giám sát và cảnh báo sớm các sự cố vận hành.",
  },
  {
    icon: "🛠️",
    title: "Bảo trì dự đoán",
    description:
      "Phân tích dữ liệu vận hành để dự đoán và ngăn ngừa hỏng hóc trước khi xảy ra.",
  },
  {
    icon: "🎓",
    title: "Đào tạo vận hành",
    description:
      "Chương trình đào tạo thực hành cho đội ngũ vận hành và bảo trì tại nhà máy.",
  },
];

const process = [
  { step: "01", title: "Khảo sát", description: "Đánh giá hiện trạng và yêu cầu" },
  { step: "02", title: "Thiết kế", description: "Lập phương án và mô phỏng" },
  { step: "03", title: "Triển khai", description: "Lắp đặt và tích hợp hệ thống" },
  { step: "04", title: "Vận hành", description: "Hỗ trợ và bảo trì liên tục" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pb-20 pt-36 text-white lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Dịch vụ
          </p>
          <h1 className="hero-heading mt-4 text-center">
            Dịch vụ kỹ thuật toàn diện
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Từ thiết kế đến vận hành, chúng tôi đồng hành cùng bạn trong mọi
            giai đoạn của dự án.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full text-white">
            <path
              fill="currentColor"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Breadcrumb below hero */}
      <section className="py-3">
        <div className="mx-auto flex max-w-7xl items-center px-6 text-xs font-medium text-slate-500 lg:px-10">
          <nav className="flex flex-wrap items-center gap-2">
            <Link href="/" className="transition-colors hover:text-slate-900">
              Trang chủ
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800">Dịch vụ</span>
          </nav>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-gap bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-light)] text-2xl">
                  {s.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-gap bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">
              Quy trình
            </p>
            <h2 className="section-heading mt-2">Cách chúng tôi làm việc</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand)] text-xl font-bold text-white">
                  {p.step}
                </span>
                <h3 className="mt-4 font-semibold text-[var(--foreground)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-gap text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Cần hỗ trợ kỹ thuật?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Đội ngũ kỹ sư của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
