import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
      ═════════════════════════════════════════════════════════════ */}
      <section className="hero-gradient relative min-h-[700px] overflow-hidden lg:min-h-screen">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:items-center lg:px-10 lg:pt-36">
          {/* Left column — text content */}
          <div className="flex flex-col gap-8 text-white lg:max-w-xl text-left items-start">
            <h1 className="hero-heading text-left">
              <span className="text-safety text-shimmer inline-block">Giải pháp truyền tin</span>
              <br />
              <span className="text-white/90">& cảnh báo sớm </span>
              <span className="text-danger text-shimmer inline-block">tai nạn lao động</span>
            </h1>
            <p className="hero-subtext text-left">
              Giải pháp truyền tin và cảnh báo sớm tai nạn lao động
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link href="/contact" className="btn-primary">
                Liên hệ tư vấn
              </Link>
              <Link
                href="/solutions"
                className="btn-secondary"
              >
                Xem giải pháp
              </Link>
            </div>
          </div>

          {/* Right column — hero image only */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <div className="relative h-[400px] w-[320px] overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl lg:h-[520px] lg:w-[450px]">
              <Image
                src="/images/HSafe-hero-2.png"
                alt="HSafe - An toàn lao động"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full text-white">
            <path
              fill="currentColor"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA BANNER - LIÊN HỆ
      ═════════════════════════════════════════════════════════════ */}
      <section className="hero-gradient py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Sẵn sàng áp dụng giải pháp an toàn cho nhân lực của bạn?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ kỹ sư giàu kinh nghiệm.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link href="/contact" className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-[var(--brand-green)] shadow-lg transition hover:bg-gray-50 hover:-translate-y-0.5">
              Liên hệ ngay
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10 hover:border-white"
            >
              Xem giải pháp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
