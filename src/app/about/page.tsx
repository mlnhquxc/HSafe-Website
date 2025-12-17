import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero - Introduction */}
      <section className="hero-gradient relative overflow-hidden pb-24 pt-36">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 text-center text-white lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-highlight-gold">Giới thiệu</span>
            <span className="text-white"> về chúng tôi</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
            HSafe - Human Safety Goes First. Đồng hành cùng doanh nghiệp trong hành trình bảo vệ người lao động.
          </p>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45.7C120 41.3 240 32.7 360 30.8C480 29 600 34 720 42.3C840 50.7 960 62.3 1080 64.2C1200 66 1320 57 1380 52.8L1440 48.7V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
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
            <span className="text-slate-800">Giới thiệu</span>
          </nav>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white pt-10 pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
              <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
                Sứ mệnh bảo vệ con người
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
                HSafe được thành lập với sứ mệnh mang đến giải pháp an toàn toàn diện cho người lao động và môi trường làm việc tại Việt Nam.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
                Chúng tôi tin rằng mỗi người lao động đều xứng đáng được làm việc trong môi trường an toàn, được giám sát sức khỏe và được bảo vệ khỏi các nguy cơ tiềm ẩn.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Liên hệ ngay
                </Link>
                <Link href="/solutions" className="btn-secondary text-[var(--brand-blue)] border-[var(--brand-blue)]">
                  Xem giải pháp
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/legacy/solutions/gp1.jpg"
                alt="HSafe Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)]">
              Giá trị cốt lõi
            </p>
            <h2 className="section-heading mt-3">
              HSAFE - 5 trụ cột an toàn
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              { letter: "H", title: "Health", desc: "Giám sát sức khỏe người lao động" },
              { letter: "S", title: "Safety", desc: "Quản lý an toàn lao động" },
              { letter: "A", title: "Access", desc: "Kiểm soát ra vào thông minh" },
              { letter: "F", title: "Fire Fighting", desc: "Giám sát hệ thống PCCC" },
              { letter: "E", title: "Environment", desc: "Quan trắc môi trường" },
            ].map((item) => (
              <div key={item.letter} className="rounded-2xl bg-white p-6 text-center shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-green)] text-2xl font-black text-white">
                  {item.letter}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Sẵn sàng đồng hành cùng HSafe?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Liên hệ ngay để được tư vấn giải pháp phù hợp với doanh nghiệp của bạn.
          </p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-[var(--brand-green)] shadow-lg transition hover:bg-gray-50">
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </>
  );
}

