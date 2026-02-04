import type { Metadata } from "next";
import Image from "@/components/Image";
import Link from "next/link";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import MobileNav from "@/components/MobileNav";
import HSafeSidebar from "@/components/HSafeSidebar";
import "./globals.css";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withBase = (path: string) =>
  assetBase ? `${assetBase}${path.startsWith("/") ? path : `/${path}`}` : path;

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
  icons: {
    icon: [
      { url: withBase("/favicon.ico") },
    ],
    shortcut: [{ url: withBase("/favicon.ico") }],
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
  { label: "TRANG CHỦ", href: "/" },
  { label: "SẢN PHẨM", href: "/products" },
  { label: "GIẢI PHÁP", href: "/solutions" },
  { label: "GIỚI THIỆU", href: "/introduction" },
  { label: "LIÊN HỆ", href: "/contact" },
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
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
              {/* Logo - white tagline visible on dark bg */}
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-12 w-36 sm:h-14 sm:w-44">
                  <Image
                    src="/images/logo-HSafe.png"
                    alt="HSafe - Human safety goes first"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Nav - white text with highlighted button */}
              <nav className="hidden items-center gap-2 lg:flex">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="px-4 py-2 text-base font-bold text-white/90 transition-colors duration-150 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Auth button */}
              <div className="hidden items-center gap-3 lg:flex">
                <Link
                  href="https://dashboard.hsafe.net/"
                  className="rounded-full border-2 border-white/70 bg-transparent px-6 py-2 text-base font-bold text-white transition hover:bg-white/10"
                >
                  ĐĂNG NHẬP
                </Link>
              </div>

              {/* Mobile Nav */}
              <MobileNav navLinks={navLinks} />
            </div>
          </header>

          {/* HSAFE Sidebar - Responsive (Vertical on desktop, Horizontal on mobile) */}
          <HSafeSidebar />

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-[#1a1a2e] py-10 text-white/80 sm:py-12">
            <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-10">
              <div className="space-y-3 md:col-span-2 lg:col-span-1 sm:space-y-4">
                <div className="relative h-12 w-40 sm:h-14 sm:w-44">
                  <Image
                    src="/images/logo-HSafe.png"
                    alt="HSafe"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-xs leading-relaxed text-white/60 sm:text-sm">
                  Giải pháp truyền tin và cảnh báo sớm tai nạn lao động hàng đầu.
                </p>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white sm:mb-4">Giải pháp</h4>
                <ul className="space-y-2 text-xs text-white/60 sm:text-sm">
                  <li><Link href="/solutions" className="hover:text-white transition-colors">Giám sát Lone Worker</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition-colors">Giám sát nhà máy & công trường</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition-colors">Access Control & Chấm công</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white sm:mb-4">Sản phẩm</h4>
                <ul className="space-y-2 text-xs text-white/60 sm:text-sm">
                  <li>
                    <Link href="/products" className="hover:text-white transition-colors">
                      HSafe Safety Helmet Tag
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-white transition-colors">
                      HSafe Anchor
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-white transition-colors">
                      HSafe Vehicle Tag
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white sm:mb-4">Công ty</h4>
                <ul className="space-y-2 text-xs text-white/60 sm:text-sm">
                  <li><Link href="/introduction" className="hover:text-white transition-colors">Giới thiệu</Link></li>
                  <li><Link href="/customers" className="hover:text-white transition-colors">Khách hàng</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white sm:mb-4">Liên hệ</h4>
                <ul className="space-y-2 text-xs text-white/60 sm:text-sm">
                  <li>50 Đường số 2, KDC Khang An, P. Long Trường, TP. Thủ Đức</li>
                  <li>Hotline: 028 7307 6661</li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:contact@hsafe.net"
                      className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
                    >
                      contact@hsafe.net
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/40 sm:mt-10 sm:px-6 lg:px-10">
              © {new Date().getFullYear()} HSafe. Human safety goes first.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
