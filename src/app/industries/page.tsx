import Image from "@/components/Image";
import Link from "next/link";

const industries = [
  {
    title: "Dầu khí & Hóa chất",
    description:
      "Hệ thống điều khiển, an toàn và giám sát cho nhà máy lọc dầu, kho cảng và nhà máy hóa chất.",
    image: "/images/legacy/solutions/gp1.jpg",
  },
  {
    title: "LPG & Năng lượng",
    description:
      "Trạm chiết nạp LPG, hệ thống đo lường và giám sát kho chứa khí hóa lỏng.",
    image: "/images/legacy/solutions/gp3.jpg",
  },
  {
    title: "Sản xuất & FMCG",
    description:
      "Dây chuyền đóng gói, filling machine và hệ thống MES cho nhà máy sản xuất.",
    image: "/images/legacy/solutions/gp5.jpg",
  },
  {
    title: "Điện lực",
    description:
      "Hệ thống SCADA, giám sát và điều khiển cho nhà máy điện và trạm biến áp.",
    image: "/images/legacy/solutions/gp2.jpg",
  },
];

const caseStudies = [
  {
    title: "Kho LPG miền Trung",
    sector: "Energy",
    result: "SIL2 fire & gas coverage với 0 phút dừng ngoài kế hoạch trong 18 tháng.",
  },
  {
    title: "Nhà máy FMCG – dây chuyền filling",
    sector: "Manufacturing",
    result: "MES + OEE cockpit giúp tăng 16% công suất đóng chai.",
  },
  {
    title: "Giám sát VOCs khu công nghiệp",
    sector: "Environment",
    result: "Hệ quan trắc online phủ 9km², cảnh báo trong 8 giây.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pb-20 pt-36 text-white lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Ngành công nghiệp
          </p>
          <h1 className="hero-heading mt-4 text-center">
            Giải pháp cho mọi ngành
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Chúng tôi phục vụ đa dạng các ngành công nghiệp với giải pháp được
            tùy chỉnh theo đặc thù riêng.
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
            <span className="text-slate-800">Ngành công nghiệp</span>
          </nav>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section-gap bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((ind) => (
              <article
                key={ind.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl md:flex-row"
              >
                <div className="relative h-56 w-full md:h-auto md:w-1/2">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {ind.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:underline"
                  >
                    Tìm hiểu thêm →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-gap bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">
              Dự án tiêu biểu
            </p>
            <h2 className="section-heading mt-2">Thành quả thực chiến</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <article
                key={cs.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">
                  {cs.sector}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--foreground)]">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {cs.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-gap text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Bạn thuộc ngành nào?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Hãy cho chúng tôi biết để nhận tư vấn giải pháp phù hợp nhất.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
