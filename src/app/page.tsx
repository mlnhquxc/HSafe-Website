import Image from "@/components/Image";
import Link from "next/link";

// Modern SVG Icons Component
function FeatureIcon({ iconId }: { iconId: number }) {
  const iconClass = "w-7 h-7";
  
  switch (iconId) {
    case 1: // Working Area Monitoring - Location/GPS
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 2: // History Location - Chart/History
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case 3: // Request Help Signal - SOS/Alert
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case 4: // Fully Report - Document/Report
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 5: // Zone Supervision - Building/Zone
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 6: // Contractor Supervision - Checkmark/Attendance
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 7: // Rescue Supervision - Medical/Rescue
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 8: // Height Supervision - Measurement/Height
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    default:
      return null;
  }
}

const features = [
  {
    id: 1,
    title: "Giám sát khu vực làm việc",
    titleEn: "Working Area Monitoring",
    description:
      "Giám sát vị trí real-time của từng công nhân trên công trường với độ chính xác dưới 1 mét (vượt trội so với hệ thống GPS thông thường). Có thể quan sát qua giao diện web hoặc ứng dụng di động.",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 2,
    title: "Lưu lịch sử vị trí",
    titleEn: "History Location Captured",
    description:
      "Lưu trữ dữ liệu vị trí chính xác của công nhân trên công trường theo thời gian (trực quan hóa bằng bản đồ điểm hoặc bản đồ nhiệt).",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    title: "Tín hiệu cầu cứu",
    titleEn: "Request Help Signal",
    description:
      "Trong trường hợp khẩn cấp, công nhân có thể kích hoạt cảnh báo khẩn cấp. Đội ngũ an toàn và bảo vệ tại chỗ sẽ hỗ trợ ngay lập tức.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 4,
    title: "Báo cáo tự động",
    titleEn: "Fully Report",
    description:
      "Tự động trích xuất dữ liệu báo cáo theo lịch trình định kỳ hoặc theo yêu cầu.",
    color: "from-red-500 to-red-600",
  },
  {
    id: 5,
    title: "Giám sát vùng",
    titleEn: "Zone Supervision",
    description:
      "Định nghĩa vùng làm việc, vùng cấm và vùng nguy hiểm để cảnh báo công nhân và giám sát; đảm bảo nhà thầu phụ hoạt động trong khu vực quy định, giảm thiểu mất mát tài sản và đảm bảo an ninh, an toàn.",
    color: "from-gray-700 to-gray-800",
  },
  {
    id: 6,
    title: "Giám sát nhà thầu",
    titleEn: "Contractor Supervision",
    description:
      "Tự động ghi nhận chấm công dựa trên thời gian ra vào công trường, tích hợp liền mạch với dữ liệu làm việc tại chỗ.",
    color: "from-red-600 to-orange-600",
  },
  {
    id: 7,
    title: "Giám sát cứu hộ",
    titleEn: "Rescue Supervision",
    description:
      "Tự động nhận diện công nhân gặp tình huống nguy hiểm đến tính mạng như điện giật, tiếp xúc khí độc, té ngã, bất tỉnh... khi họ có thể không thể kích hoạt cảnh báo.",
    color: "from-blue-700 to-blue-800",
  },
  {
    id: 8,
    title: "Giám sát độ cao",
    titleEn: "Height Supervision",
    description:
      "Tính năng giám sát và ghi nhận độ cao thực tế của nơi làm việc theo thời gian thực.",
    color: "from-amber-700 to-amber-800",
  },
];

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
      ═════════════════════════════════════════════════════════════ */}
      <section className="hero-gradient relative min-h-[600px] overflow-hidden sm:min-h-[700px] lg:min-h-screen">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl sm:h-[500px] sm:w-[500px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 pb-24 pt-24 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-32 lg:grid-cols-2 lg:items-center lg:px-10 lg:pt-36">
          {/* Left column — text content */}
          <div className="flex flex-col gap-6 text-white sm:gap-8 lg:max-w-xl text-left items-start">
            <h1 className="hero-heading text-left">
              <span className="text-safety text-shimmer inline-block">Giải pháp truyền tin</span>
              <br />
              <span className="text-white/90">& cảnh báo sớm </span>
              <span className="text-danger text-shimmer inline-block">tai nạn lao động</span>
            </h1>
            <p className="hero-subtext text-left">
              Giải pháp truyền tin và cảnh báo sớm tai nạn lao động
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:gap-5 sm:pt-4">
              <Link href="/contact" className="btn-primary">
                Liên hệ tư vấn
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Xem giải pháp
              </Link>
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <div className="relative h-[350px] w-[280px] overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl sm:h-[400px] sm:w-[320px] lg:h-[520px] lg:w-[450px]">
              <Image
                src="/images/HSafe-hero.JPG"
                alt="HSafe - Giải pháp truyền tin và cảnh báo sớm tai nạn lao động"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full text-white" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHAT IS HSAFE SECTION
      ═════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl">
              HSafe là gì?
            </h2>
          </div>
          
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left column - Text content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg font-semibold leading-relaxed text-[var(--foreground)] sm:text-xl md:text-2xl">
                HSafe là giải pháp truyền tin và cảnh báo sớm tai nạn lao động được thiết kế đặc biệt cho môi trường công trường, 
                nhà máy và các khu vực làm việc có rủi ro cao.
              </p>
              <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Với công nghệ IoT tiên tiến và độ chính xác định vị dưới 1 mét, HSafe cung cấp giải pháp toàn diện để quản lý và bảo vệ người lao động.
              </p>
              <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Hệ thống không chỉ giám sát vị trí real-time mà còn tự động phát hiện các tình huống nguy hiểm, 
                cảnh báo kịp thời và hỗ trợ công tác cứu hộ. Tất cả dữ liệu được tích hợp trên một dashboard duy nhất, 
                giúp doanh nghiệp quản lý nhân lực hiệu quả và đảm bảo an toàn tuyệt đối cho người lao động.
              </p>
              <div className="pt-2 sm:pt-4">
                <Link href="/solutions" className="inline-flex items-center text-[var(--brand-blue)] font-semibold hover:underline">
                  Tìm hiểu thêm về giải pháp
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right column - Definition image */}
            <div className="relative h-[300px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/HSafe_dinhnghia.JPG"
                alt="Thiết bị HSafe triển khai tại công trường"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          8 KEY FEATURES SECTION
      ═════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)] sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4">
              8 Tính năng chính
            </p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Giải pháp toàn diện cho công trường
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="group relative rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-[var(--brand-blue)]/20 sm:p-6"
              >
                {/* Icon */}
                <div className={`mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl sm:mb-4 sm:h-16 sm:w-16`}>
                  <FeatureIcon iconId={feature.id} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-[var(--foreground)] group-hover:text-[var(--brand-blue)] transition-colors duration-300 sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mb-2 text-xs font-semibold text-[var(--brand-blue)] uppercase tracking-wide sm:mb-3">
                  {feature.titleEn}
                </p>

                {/* Description */}
                <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BENEFITS SECTION
      ═════════════════════════════════════════════════════════════ */}
      <section className="hero-gradient py-12 text-white sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Lợi ích của HSafe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl">
            Quản lý chi tiết và chính xác nhân sự trên công trường một cách kịp thời đóng vai trò quan trọng 
            trong việc đảm bảo tiến độ, an ninh, an toàn và hiệu quả kinh tế của dự án.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          VISION SECTION
      ═════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl">
                Tầm nhìn
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:mt-6 sm:text-lg md:text-xl">
                Trở thành doanh nghiệp hàng đầu trong việc cung cấp và thiết lập tiêu chuẩn an toàn 
                cho các dự án xây dựng và nhà máy, HSafe đảm bảo khách hàng nhận được các quy trình tự động hóa 
                và kiểm soát công việc liên quan đến <strong>HSE (Health - Safety - Environment)</strong>.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-3xl border-2 border-[var(--brand-blue)]/20 bg-slate-100 shadow-xl sm:h-80 lg:h-96">
              <Image
                src="/images/HSafe_tamnhin.jpg"
                alt="Hệ thống HSafe bao quát toàn cảnh công trường"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA BANNER - LIÊN HỆ
      ═════════════════════════════════════════════════════════════ */}
      <section className="hero-gradient py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Sẵn sàng áp dụng giải pháp an toàn cho nhân lực của bạn?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg md:text-xl">
            Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ kỹ sư giàu kinh nghiệm.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:gap-5">
            <Link href="/contact" className="rounded-lg bg-white px-6 py-3 text-base font-bold text-[var(--brand-green)] shadow-lg transition hover:bg-gray-50 hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-lg">
              Liên hệ ngay
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border-2 border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white sm:px-8 sm:py-4 sm:text-lg"
            >
              Xem giải pháp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
