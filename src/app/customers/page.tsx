import Image from "@/components/Image";
import Link from "next/link";

const customers = [
  {
    name: "Công ty Hóa dầu ABC",
    industry: "Hóa dầu",
    logo: "/images/legacy/solutions/gp1.jpg",
    testimonial: "HSafe đã giúp chúng tôi giảm 60% tai nạn lao động trong năm đầu tiên triển khai.",
  },
  {
    name: "Nhà máy Thép XYZ",
    industry: "Luyện kim",
    logo: "/images/legacy/solutions/gp3.jpg",
    testimonial: "Hệ thống giám sát môi trường của HSafe giúp chúng tôi phát hiện sớm các nguy cơ ô nhiễm.",
  },
  {
    name: "Kho cảng Logistics",
    industry: "Logistics",
    logo: "/images/legacy/solutions/gp5.jpg",
    testimonial: "Kiểm soát ra vào thông minh giúp quản lý hiệu quả hàng nghìn nhân sự mỗi ngày.",
  },
];

const industries = [
  "Dầu khí",
  "Hóa chất",
  "Luyện kim",
  "Xây dựng",
  "Logistics",
  "Sản xuất",
];

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center text-white lg:px-10">
          <h1 className="hero-heading text-center">Khách hàng</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Được tin tưởng bởi hàng trăm doanh nghiệp hàng đầu tại Việt Nam
          </p>
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
            <span className="text-slate-800">Khách hàng</span>
          </nav>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Ngành nghề phục vụ
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="section-gap bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)]">
              Câu chuyện thành công
            </p>
            <h2 className="section-heading mt-3">
              Khách hàng nói gì về HSafe
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {customers.map((customer) => (
              <article
                key={customer.name}
                className="overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[var(--brand-blue)]">
                    {customer.industry}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[var(--foreground)]">
                    {customer.name}
                  </h3>
                  <p className="mt-3 text-sm italic leading-relaxed text-[var(--text-muted)]">
                    &ldquo;{customer.testimonial}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 lg:px-10">
          {[
            { value: "500+", label: "Khách hàng" },
            { value: "50+", label: "Dự án lớn" },
            { value: "98%", label: "Hài lòng" },
            { value: "24/7", label: "Hỗ trợ" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-[var(--brand-blue)]">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Trở thành khách hàng của HSafe
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Liên hệ ngay để nhận tư vấn miễn phí và demo sản phẩm.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-white px-8 py-4 font-bold text-[var(--brand-green)] shadow-lg transition hover:bg-gray-50">
              Đăng ký demo
            </Link>
            <Link href="/solutions" className="rounded-lg border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Xem giải pháp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

