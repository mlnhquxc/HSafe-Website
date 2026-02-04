import Image from "@/components/Image";
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
          <h1 className="hero-heading text-center">
            <span className="text-white">An toàn con người là</span>
            <br />
            <span className="text-safety text-shimmer inline-block">trên hết</span>
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

      {/* Company Overview */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-10 pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl lg:order-2">
              <Image
                src="/images/legacy/solutions/gp1.jpg"
                alt="HSafe - Giải pháp an toàn lao động"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)]">
                Về chúng tôi
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
                Chuyên gia về an toàn lao động
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
                HSafe là đơn vị tiên phong trong việc phát triển và triển khai các hệ thống giám sát an toàn lao động 
                thời gian thực, được tối ưu hóa đặc biệt cho môi trường công trường và nhà máy.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
                Với công nghệ IoT tiên tiến và độ chính xác định vị dưới 1 mét, chúng tôi cung cấp nền tảng 
                quản lý nhân lực thông minh, giúp doanh nghiệp nâng cao hiệu quả vận hành và đảm bảo an toàn tuyệt đối 
                cho người lao động.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/solutions" className="text-[var(--brand-blue)] font-semibold hover:underline">
                  Khám phá giải pháp →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-blue)]/5 to-[var(--brand-green)]/5 p-8 lg:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue)]/80 text-3xl">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                Sứ mệnh
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
                Chúng tôi cam kết mang đến những giải pháp công nghệ hàng đầu, giúp các doanh nghiệp xây dựng 
                môi trường làm việc an toàn, lành mạnh và hiệu quả. Mỗi sản phẩm của HSafe đều được thiết kế với 
                mục tiêu tối đa hóa sự an toàn và phúc lợi của người lao động.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-green)]/5 to-[var(--brand-blue)]/5 p-8 lg:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-green)]/80 text-3xl">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
                Tầm nhìn
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
                Trở thành đối tác tin cậy hàng đầu trong lĩnh vực an toàn lao động tại khu vực Đông Nam Á, 
                thiết lập các tiêu chuẩn mới về quản lý HSE (Health - Safety - Environment) thông qua công nghệ 
                tự động hóa và trí tuệ nhân tạo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values - HSAFE */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)]">
              Giá trị cốt lõi
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] md:text-4xl lg:text-5xl">
              HSAFE - 5 trụ cột an toàn
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-muted)]">
              Mỗi chữ cái trong tên HSafe đại diện cho một trụ cột quan trọng trong hệ sinh thái giải pháp an toàn toàn diện của chúng tôi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { 
                letter: "H", 
                title: "Health", 
                desc: "Giám sát sức khỏe người lao động",
                detail: "Theo dõi các chỉ số sức khỏe quan trọng, phát hiện sớm các dấu hiệu bất thường và kịp thời ứng cứu khi có sự cố nguy hiểm đến tính mạng."
              },
              { 
                letter: "S", 
                title: "Safety", 
                desc: "Quản lý an toàn lao động",
                detail: "Hỗ trợ công tác quản lý nhân sự, xây dựng quy trình an toàn và duy trì hồ sơ lao động đầy đủ, chính xác."
              },
              { 
                letter: "A", 
                title: "Access", 
                desc: "Kiểm soát ra vào thông minh",
                detail: "Định danh và kiểm soát nhân sự, phương tiện và thiết bị trên công trường theo đúng quy trình làm việc đã được thiết lập."
              },
              { 
                letter: "F", 
                title: "Fire Fighting", 
                desc: "Giám sát hệ thống PCCC",
                detail: "Tích hợp giám sát các hệ thống báo cháy và chữa cháy, hỗ trợ công tác sơ tán và ứng phó khi có sự cố cháy nổ."
              },
              { 
                letter: "E", 
                title: "Environment", 
                desc: "Quan trắc môi trường",
                detail: "Giám sát và cảnh báo sớm các khu vực có nguy cơ ô nhiễm hoặc nhiễm độc để bảo vệ môi trường và sức khỏe con người."
              },
            ].map((item) => (
              <div key={item.letter} className="group rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-green)] text-2xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {item.letter}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[var(--brand-blue)]">{item.desc}</p>
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)]">
              Tại sao chọn HSafe
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] md:text-4xl lg:text-5xl">
              Giải pháp công nghệ vượt trội
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Độ chính xác cao",
                description: "Công nghệ định vị với độ chính xác dưới 1 mét, vượt trội so với GPS thông thường, đảm bảo giám sát chính xác từng vị trí công nhân."
              },
              {
                icon: "⚡",
                title: "Thời gian thực",
                description: "Hệ thống giám sát và cảnh báo hoạt động theo thời gian thực, giúp phản ứng nhanh chóng với mọi tình huống khẩn cấp."
              },
              {
                icon: "📊",
                title: "Báo cáo tự động",
                description: "Tự động trích xuất và phân tích dữ liệu, tạo báo cáo chi tiết theo lịch trình hoặc theo yêu cầu, tiết kiệm thời gian và công sức."
              },
              {
                icon: "🔒",
                title: "Bảo mật cao",
                description: "Dữ liệu được mã hóa và lưu trữ an toàn, đảm bảo quyền riêng tư và bảo mật thông tin của doanh nghiệp và người lao động."
              },
              {
                icon: "🌐",
                title: "Đa nền tảng",
                description: "Truy cập dễ dàng qua giao diện web và ứng dụng di động, quản lý mọi lúc mọi nơi một cách thuận tiện."
              },
              {
                icon: "💼",
                title: "Hỗ trợ chuyên nghiệp",
                description: "Đội ngũ kỹ sư giàu kinh nghiệm luôn sẵn sàng tư vấn, hỗ trợ triển khai và bảo trì hệ thống 24/7."
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[var(--brand-blue)]/50 hover:shadow-lg">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="hero-gradient py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                Công nghệ & Đổi mới
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">
                Ứng dụng IoT và AI trong an toàn lao động
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
                HSafe tích hợp công nghệ Internet of Things (IoT) và trí tuệ nhân tạo để tạo ra hệ thống 
                giám sát thông minh, có khả năng tự động phát hiện và cảnh báo các tình huống nguy hiểm 
                mà không cần sự can thiệp của con người.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/90 md:text-xl">
                Với việc sử dụng các cảm biến tiên tiến và thuật toán máy học, hệ thống của chúng tôi 
                không chỉ giám sát mà còn dự đoán và ngăn chặn các rủi ro tiềm ẩn trước khi chúng xảy ra.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl lg:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-4xl backdrop-blur-sm">
                    🚀
                  </div>
                  <p className="text-sm font-semibold text-white/90">
                    Innovation First
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl lg:text-5xl">
            Sẵn sàng đồng hành cùng HSafe?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
            Hãy để chúng tôi giúp bạn xây dựng môi trường làm việc an toàn và hiệu quả hơn. 
            Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia của chúng tôi.
          </p>
          <div className="mt-10">
            <Link 
              href="/contact" 
              className="inline-block rounded-lg bg-gradient-to-r from-[var(--brand-green)] to-[#008f45] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:brightness-110"
              style={{ boxShadow: '0 4px 15px rgba(0, 166, 81, 0.3)' }}
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

