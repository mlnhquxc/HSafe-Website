import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "HSafe | Human Safety Goes First",
  description:
    "Giải pháp an toàn toàn diện cho con người và môi trường làm việc. Giám sát sức khỏe, an toàn, kiểm soát ra vào, PCCC và môi trường.",
  metadataBase: new URL("https://hsafe.vn"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/HSafe-mini-logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/images/HSafe-mini-logo.png" }],
  },
  keywords: [
    "HSafe",
    "an toàn lao động",
    "quan trắc môi trường",
    "pccc",
    "kiểm soát ra vào",
  ],
  openGraph: {
    title: "HSafe | Human Safety Goes First",
    description:
      "Hệ sinh thái giải pháp an toàn tích hợp: Health, Safety, Access, Fire Fighting, Environment.",
    url: "https://hsafe.vn",
    siteName: "HSafe",
    locale: "vi_VN",
    type: "website",
  },
};

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Giải pháp", href: "/solutions" },
  { label: "Giới thiệu", href: "/introduction" },
  { label: "Liên hệ", href: "/contact" },
];

const hsafeLetters = [
  {
    char: "H",
    title: "Health",
    detail: "Giám sát sức khỏe của người lao động, kịp thời phát hiện sự cố nguy hiểm để ứng cứu.",
    color: "#009fe3", // Blue - matching logo H
  },
  {
    char: "S",
    title: "Safety",
    detail: "Quản lý nhân sự, hỗ trợ công tác an toàn và hồ sơ lao động.",
    color: "#00a651", // Green - matching logo SAFE
  },
  {
    char: "A",
    title: "Access",
    detail: "Kiểm soát ra vào đúng quy trình làm việc, định danh nhân sự, phương tiện và máy móc trên công trường.",
    color: "#00a651", // Green - matching logo SAFE
  },
  {
    char: "F",
    title: "Fire Fighting",
    detail: "Giám sát các hệ thống báo cháy và chữa cháy, hỗ trợ sơ tán khi có sự cố cháy nổ.",
    color: "#00a651", // Green - matching logo SAFE
  },
  {
    char: "E",
    title: "Environment",
    detail: "Giám sát và kịp thời phát hiện các khu vực ô nhiễm hoặc bị nhiễm độc để bảo vệ môi trường và con người.",
    color: "#00a651", // Green - matching logo SAFE
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${beVietnamPro.variable} ${jetbrainsMono.variable} bg-white text-[var(--foreground)] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          {/* Header - Dark gradient background for logo white text visibility */}
          <header className="absolute left-0 right-0 top-0 z-50 bg-gradient-to-r from-[#0a3d62] to-[#0c5460]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
              {/* Logo - white tagline visible on dark bg */}
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-14 w-44">
                  <Image
                    src="/images/logo-HSafe.png"
                    alt="HSafe - Human safety goes first"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Nav - white text with highlighted button */}
              <nav className="hidden items-center gap-2 lg:flex">
                {/* Highlighted button for customers - temporarily hidden */}
                {/* <Link
                  href="/customers"
                  className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
                >
                  Dành cho khách hàng
                </Link> */}
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-white/90 transition-colors duration-150 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Auth buttons - white style */}
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-white/70 bg-transparent px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-[var(--accent)] px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
                  style={{ boxShadow: "0 4px 14px rgba(0,166,81,0.35)" }}
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </header>

          {/* HSAFE Sidebar - Dark Teal Glass matching header */}
          <aside className="fixed left-5 top-1/2 z-[60] hidden -translate-y-1/2 lg:block">
            <div 
              className="flex flex-col items-center gap-1.5 rounded-[32px] p-2.5"
              style={{
                background: 'linear-gradient(180deg, rgba(10,61,98,0.9) 0%, rgba(12,84,96,0.85) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {hsafeLetters.map((item) => (
                <div key={item.char} className="group relative">
                  {/* Glass Node */}
                  <div className="relative flex h-11 w-11 cursor-pointer items-center justify-center text-lg font-black transition-all duration-300 hover:scale-110">
                    {/* Semi-transparent background */}
                    <div 
                      className="absolute inset-0.5 rounded-full transition-all duration-300 group-hover:scale-105"
                      style={{ 
                        background: 'rgba(255,255,255,0.12)',
                        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.2)`,
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                    {/* Letter with glow */}
                    <span 
                      className="relative z-10 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        color: item.char === 'H' ? '#38bdf8' : '#4ade80', // Lighter blue/green for dark bg
                        fontWeight: 900,
                        textShadow: `0 0 12px ${item.char === 'H' ? 'rgba(56,189,248,0.5)' : 'rgba(74,222,128,0.5)'}`,
                      }}
                    >
                      {item.char}
                    </span>
                    {/* Hover glow ring */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                      style={{
                        boxShadow: `0 0 0 2px ${item.char === 'H' ? '#38bdf8' : '#4ade80'}, 0 0 20px ${item.char === 'H' ? 'rgba(56,189,248,0.4)' : 'rgba(74,222,128,0.4)'}`,
                      }}
                    />
                  </div>
                  
                  {/* Tooltip - Dark glass */}
                  <div 
                    className="pointer-events-none absolute left-14 top-1/2 w-72 -translate-y-1/2 rounded-2xl p-5 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-x-2 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(135deg, rgba(10,61,98,0.95) 0%, rgba(12,84,96,0.95) 100%)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`,
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Arrow */}
                    <div 
                      className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45"
                      style={{
                        background: 'rgba(10,61,98,0.95)',
                        borderLeft: '1px solid rgba(255,255,255,0.1)',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                    <h3 
                      className="mb-2 text-lg font-bold"
                      style={{ color: item.char === 'H' ? '#38bdf8' : '#4ade80' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-[#1a1a2e] py-12 text-white/80">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5 lg:px-10">
              <div className="space-y-4">
                <div className="relative h-14 w-44">
                  <Image
                    src="/images/logo-HSafe.png"
                    alt="HSafe"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                  Giải pháp truyền tin và cảnh báo sớm tai nạn lao động hàng đầu.
                </p>
              </div>
              <div>
                <h4 className="mb-4 font-semibold text-white">Giải pháp</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/solutions" className="hover:text-white">Giám sát Lone Worker</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">Giám sát nhà máy & công trường</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">Access Control & Chấm công</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold text-white">Sản phẩm</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>
                    <Link href="/products" className="hover:text-white">
                      HSafe Safety Helmet Tag
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-white">
                      HSafe Anchor
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-white">
                      HSafe Vehicle Tag
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold text-white">Công ty</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/introduction" className="hover:text-white">Giới thiệu</Link></li>
                  <li><Link href="/customers" className="hover:text-white">Khách hàng</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Liên hệ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold text-white">Liên hệ</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>50 Đường số 2, KDC Khang An, P. Long Trường, TP. Thủ Đức</li>
                  <li>Hotline: 028 7307 6661</li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:contact@hsafe.net"
                      className="text-white/80 hover:text-white underline underline-offset-2"
                    >
                      contact@hsafe.net
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/40 lg:px-10">
              © {new Date().getFullYear()} HSafe. Human safety goes first.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
