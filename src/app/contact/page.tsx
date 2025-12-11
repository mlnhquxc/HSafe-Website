"use client";

import Link from "next/link";

const contactMethods = [
  {
    title: "Hotline",
    detail: "028 7307 6661",
    action: "Gọi ngay",
    href: "tel:02873076661",
    gradient: "from-[#009fe3] to-[#0077b6]",
    iconBg: "bg-gradient-to-br from-[#009fe3] to-[#0077b6]",
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email",
    detail: "info@hsafe.vn",
    action: "Gửi email",
    href: "mailto:info@hsafe.vn",
    gradient: "from-[#00a651] to-[#008f45]",
    iconBg: "bg-gradient-to-br from-[#00a651] to-[#008f45]",
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Văn phòng",
    detail: "50 Đường số 2, KDC Khang An, P. Long Trường, TP. Thủ Đức",
    action: "Xem bản đồ",
    href: "https://maps.google.com/?q=50+duong+so+2+KDC+Khang+An+Long+Truong+Thu+Duc",
    gradient: "from-[#0a3d62] to-[#0c5460]",
    iconBg: "bg-gradient-to-br from-[#0a3d62] to-[#0c5460]",
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a3d62] via-[#0c5460] to-[#009fe3] pb-24 pt-36 text-white lg:pt-44">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#00a651]/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-white">Chúng tôi luôn sẵn sàng</span>
            <br />
            <span className="text-safety">hỗ trợ bạn</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Hãy liên hệ để nhận tư vấn miễn phí từ đội ngũ kỹ sư giàu kinh nghiệm về giải pháp an toàn lao động.
          </p>
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

      {/* Contact methods */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((m) => (
              <article
                key={m.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                
                {/* Icon */}
                <div className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${m.iconBg} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {m.icon}
                </div>
                
                <h3 className="relative mt-6 text-xl font-bold text-slate-800">
                  {m.title}
                </h3>
                <p className="relative mt-3 text-slate-600 leading-relaxed">
                  {m.detail}
                </p>
                <Link
                  href={m.href}
                  className={`relative mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${m.gradient} px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110`}
                >
                  {m.action}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-[#009fe3]/10 px-4 py-1.5 text-sm font-semibold text-[#009fe3]">
              ✉️ Gửi yêu cầu
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-800 md:text-4xl">
              Bảng yêu cầu tư vấn
            </h2>
            <p className="mt-3 text-slate-600">
              Điền thông tin để nhận tư vấn chi tiết về giải pháp phù hợp
            </p>
          </div>

          <form className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Họ và tên <span className="text-red-500">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition-all focus:border-[#009fe3] focus:ring-2 focus:ring-[#009fe3]/20 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Email <span className="text-red-500">*</span>
                </span>
                <input
                  type="email"
                  placeholder="email@congty.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition-all focus:border-[#009fe3] focus:ring-2 focus:ring-[#009fe3]/20 focus:outline-none"
                />
              </label>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Số điện thoại
                </span>
                <input
                  type="tel"
                  placeholder="0901 234 567"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition-all focus:border-[#009fe3] focus:ring-2 focus:ring-[#009fe3]/20 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Doanh nghiệp / Nhà máy
                </span>
                <input
                  type="text"
                  placeholder="Tên công ty"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition-all focus:border-[#009fe3] focus:ring-2 focus:ring-[#009fe3]/20 focus:outline-none"
                />
              </label>
            </div>
            
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                Giải pháp quan tâm
              </span>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition-all focus:border-[#009fe3] focus:ring-2 focus:ring-[#009fe3]/20 focus:outline-none">
                <option value="">-- Chọn giải pháp --</option>
                <option>Giám sát Lone Worker (làm việc một mình)</option>
                <option>Giám sát nhà máy & công trường</option>
                <option>Access Control & Chấm công</option>
                <option>Quản lý phương tiện & vật tư</option>
                <option>Khác</option>
              </select>
            </label>
            
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                Mô tả yêu cầu
              </span>
              <textarea
                rows={4}
                placeholder="Mô tả chi tiết về nhu cầu, quy mô nhà máy/công trường, số lượng nhân sự cần giám sát..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm transition-all focus:border-[#009fe3] focus:ring-2 focus:ring-[#009fe3]/20 focus:outline-none"
              />
            </label>
            
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#00a651] to-[#008f45] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110"
            >
              Gửi yêu cầu tư vấn
            </button>
            
            <p className="text-center text-xs text-slate-500">
              Bằng việc gửi form, bạn đồng ý với{" "}
              <Link href="/privacy" className="text-[#009fe3] hover:underline">
                chính sách bảo mật
              </Link>{" "}
              của chúng tôi.
            </p>
          </form>
        </div>
      </section>

      {/* Map / Additional CTA */}
      <section className="bg-gradient-to-br from-[#0a3d62] to-[#0c5460] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Cần hỗ trợ khẩn cấp?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ 24/7 cho các vấn đề khẩn cấp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:02873076661"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0a3d62] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              028 7307 6661
            </a>
            <a
              href="https://zalo.me/02873076661"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white/40 bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10 hover:border-white"
            >
              Chat Zalo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
