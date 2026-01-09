"use client";

import Image from "@/components/Image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { getImagePath } from "@/lib/image-path";

function AutoPlayVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !videoEl) return;

        if (entry.isIntersecting) {
          videoEl.play().catch(() => {
            // Ignore autoplay blocking errors
          });
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const resolvedSrc = getImagePath(src);
  const resolvedPoster = poster ? getImagePath(poster) : undefined;

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      src={resolvedSrc}
      muted
      loop
      playsInline
      poster={resolvedPoster}
    />
  );
}

const solutions = [
  {
    id: 1,
    name: "Giám sát nhân sự làm việc một mình",
    description:
      "Giải pháp bảo vệ công nhân làm việc đơn lẻ tại các khu vực nguy hiểm. Tự động phát hiện té ngã, bất động và gửi cảnh báo SOS khi có sự cố.",
    features: [
      "Phát hiện té ngã",
      "Cảnh báo va chạm",
      "Nút SOS khẩn cấp",
      "Định vị thời gian thực",
      "Theo dõi sinh trắc học",
    ],
    image: "/images/HSafe-giam-sat-nhan-su-lam-viec-1-minh.jpeg",
  },
  {
    id: 2,
    name: "Giám sát tập trung nhà máy & công trường",
    description:
      "Hệ thống giám sát toàn diện cho nhà máy, cảng, công trình xây dựng. Theo dõi vị trí và trạng thái của toàn bộ nhân sự trên một nền tảng tập trung.",
    features: [
      "Dashboard giám sát tập trung",
      "Định vị toàn bộ nhân sự",
      "Cảnh báo vùng nguy hiểm / vùng cấm",
      "Thống kê, báo cáo tự động",
      "Đa nền tảng quản lý (Web, App)",
    ],
    image: "/images/HSafe-tap-trung.jpg",
  },
  {
    id: 3,
    name: "Access Control & Chấm công",
    description:
      "Giải pháp kiểm soát ra vào kết hợp chấm công tự động và camera nhận diện. Quản lý chặt chẽ ai được phép vào khu vực nào.",
    features: [
      "Chấm công tự động",
      "Nhận diện khuôn mặt",
      "Kết hợp camera AI",
      "Phân quyền khu vực",
      "Báo cáo thời gian làm việc",
    ],
    image: "/images/HSafe_chamcong.JPG",
  },
  {
    id: 4,
    name: "Giám sát phương tiện & lộ trình",
    description:
      "Theo dõi và quản lý toàn bộ phương tiện ra vào công trường. Giám sát lộ trình, tốc độ và hành vi lái xe.",
    features: [
      "GPS tracking phương tiện",
      "Lịch sử di chuyển",
      "Cảnh báo vi phạm tốc độ",
      "Quản lý nhiên liệu",
      "Báo cáo hành trình",
    ],
    image: "/images/HSafe-giam-sat-phuong-tien-lo-trinh.png",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pb-24 pt-36">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          {/* Network lines decoration */}
          <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 text-center text-white lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-highlight-gold">Giải pháp</span>
            <span className="text-white"> giám sát</span>
            <br />
            <span className="text-white">trọn vẹn</span>
            <span className="text-safety"> an toàn</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
            Giải pháp toàn diện cho nhà máy, cảng biển, công trường — 
            kiểm soát chủ động mọi rủi ro trên 1 dashboard duy nhất.
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
            <span className="text-slate-800">Giải pháp</span>
          </nav>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg lg:h-96">
                    {solution.image ? (
                      <Image
                        src={solution.image}
                        alt={solution.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-20 w-20 text-slate-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                            />
                          </svg>
                          <p className="mt-3 text-sm text-slate-400">
                            Hình ảnh giải pháp
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Decorative element */}
                  <div
                    className={`absolute -z-10 h-full w-full rounded-2xl bg-[var(--brand-blue)]/10 ${
                      index % 2 === 1
                        ? "-right-4 -top-4"
                        : "-left-4 -top-4"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                    {solution.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-green)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="rounded-full bg-[var(--brand-green)] px-6 py-2.5 font-semibold text-white shadow-md transition hover:brightness-110"
                    >
                      Liên hệ tư vấn
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="hero-gradient py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Bạn cần giải pháp tùy chỉnh?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Đội ngũ kỹ sư HSafe sẵn sàng thiết kế giải pháp phù hợp với quy mô và đặc thù doanh nghiệp bạn.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[var(--brand-green)] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Nhận tư vấn miễn phí
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10 hover:border-white"
            >
              Xem sản phẩm
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
