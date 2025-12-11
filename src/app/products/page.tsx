"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Nón bảo hộ thông minh & Tag định vị",
    description: "Nón bảo hộ tích hợp tag định vị thông minh, giám sát an toàn và theo dõi vị trí người lao động theo thời gian thực.",
    specs: ["Tích hợp tag định vị", "Cảnh báo va chạm", "Pin sử dụng lâu", "Nhỏ gọn, nhẹ", "Nút SOS"],
    image: "/images/HSafe-helmet-with-tag.jpeg",
  },
  {
    id: 2,
    name: "Anchor (Trạm cố định)",
    description: "Thiết bị neo/trạm cố định để định vị chính xác vị trí của tag trong nhà máy và công trường.",
    specs: ["Hỗ trợ mạng LAN/WiFi", "Kết nối 4G", "Chống nước IP67", "Kết nối dây hoặc không dây"],
    image: "/images/HSafe-anchor.png",
  },
  {
    id: 3,
    name: "Tag xe & Quản lý lộ trình",
    description: "Thiết bị gắn trên phương tiện để quản lý, giám sát xe cộ ra vào công trường và theo dõi lộ trình di chuyển.",
    specs: ["Định vị GPS", "Nhận diện phương tiện", "Theo dõi lộ trình", "Lịch sử di chuyển", "Báo cáo tự động"],
    image: "/images/HSafe-vehicle-tag.jpeg",
  },
  {
    id: 4,
    name: "Tag vật tư (Pallet Tag)",
    description: "Thiết bị theo dõi và quản lý vật tư, pallet, thiết bị trên công trường.",
    specs: ["Định vị tài sản", "Cảnh báo di chuyển", "Quản lý kho", "Pin lâu dài"],
    image: "/images/HSafe-pallet-tag.jpeg",
  },
  {
    id: 5,
    name: "Đồng hồ thông minh",
    description: "Đồng hồ đeo tay tích hợp giám sát sức khỏe và định vị cho công nhân.",
    specs: ["Đo nhịp tim", "Phát hiện té ngã", "Định vị thời gian thực", "Nút SOS"],
    image: "/images/HSafe-watch.png",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pb-24 pt-36">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          {/* Floating tech elements */}
          <div className="absolute top-20 left-[10%] h-2 w-2 rounded-full bg-cyan-400/40 animate-float" />
          <div className="absolute top-40 right-[15%] h-3 w-3 rounded-full bg-green-400/30 animate-float delay-200" />
          <div className="absolute bottom-32 left-[20%] h-2 w-2 rounded-full bg-cyan-300/30 animate-float delay-300" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 text-center text-white lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-highlight-gold">Sản phẩm</span>
            <span className="text-white"> công nghệ</span>
            <br />
            <span className="text-white">cho </span>
            <span className="text-safety">an toàn lao động</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 md:text-xl">
            Thiết bị IoT thông minh được thiết kế riêng cho môi trường công nghiệp — 
            bền bỉ, chính xác và đáng tin cậy.
          </p>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45.7C120 41.3 240 32.7 360 30.8C480 29 600 34 720 42.3C840 50.7 960 62.3 1080 64.2C1200 66 1320 57 1380 52.8L1440 48.7V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[var(--brand-blue)]/30"
              >
                {/* Image - Fixed height */}
                <div className="relative h-52 w-full flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-200">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="mx-auto h-16 w-16 text-slate-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="mt-2 text-sm text-slate-400">Hình ảnh sản phẩm</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Title - Fixed height */}
                  <h3 className="h-14 text-lg font-bold text-slate-800 group-hover:text-[var(--brand-blue)] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Description - Fixed height */}
                  <p className="mt-2 h-16 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Specs - Fixed height */}
                  <div className="mt-3 h-20 flex flex-wrap content-start gap-1.5 overflow-hidden">
                    {product.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="h-fit rounded-full bg-[var(--brand-blue)]/10 px-2.5 py-1 text-xs font-medium text-[var(--brand-blue)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Contact Button - Always at bottom */}
                  <div className="mt-auto pt-4">
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand-green)] to-[#008f45] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 hover:-translate-y-0.5"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Liên hệ báo giá
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Cần tư vấn sản phẩm phù hợp?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Đội ngũ kỹ sư của chúng tôi sẵn sàng tư vấn thiết bị tối ưu cho quy mô doanh nghiệp của bạn.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[var(--brand-green)] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Liên hệ ngay
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10 hover:border-white"
            >
              Xem giải pháp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

