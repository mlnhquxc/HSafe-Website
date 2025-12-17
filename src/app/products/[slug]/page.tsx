import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAllProductSlugs,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";

// Icon component helper
function FeatureIcon({ iconName }: { iconName: string }) {
  const iconClass = "h-5 w-5";
  
  switch (iconName) {
    case "network":
      // Master/Slave network hierarchy icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "signal":
      // Signal/coverage icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      );
    case "shield":
      // Shield/protection icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "settings":
      // Settings/configuration icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "location":
      // Location/GPS icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "warning":
      // Warning/alert icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "battery":
      // Battery icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      );
    case "sos":
      // SOS/emergency icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "gps":
      // GPS icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "scan":
      // Scan/QR icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      );
    case "fence":
      // Geofencing icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "report":
      // Report icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "asset":
      // Asset tracking icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "alert":
      // Alert icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "warehouse":
      // Warehouse icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "health":
      // Health monitoring icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "fall":
      // Fall detection icon
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    default:
      // Fallback to first 2 letters
      return (
        <span className="text-sm font-bold uppercase">
          {iconName.slice(0, 2)}
        </span>
      );
  }
}

type ProductRouteParams = {
  slug: string;
};

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<ProductRouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Sản phẩm | HSafe",
    };
  }

  const title = `${product.name} | HSafe`;
  const description = product.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: product.image
        ? [
            {
              url: product.image,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<ProductRouteParams>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="hero-gradient flex min-h-[320px] items-center justify-center px-6 pt-28 text-center text-white lg:px-10">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold md:text-4xl">
              Sản phẩm không tồn tại
            </h1>
            <p className="mt-4 text-white/80">
              Có thể liên kết bạn truy cập đã cũ hoặc sản phẩm đã được cập nhật.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/products"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-green)] shadow hover:bg-slate-50"
              >
                Quay lại danh sách sản phẩm
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <section className="py-3">
        <div className="mx-auto flex max-w-7xl items-center px-6 text-xs font-medium text-slate-500 lg:px-10">
          <nav className="flex flex-wrap items-center gap-2">
            <Link href="/" className="transition-colors hover:text-slate-900">
              Trang chủ
            </Link>
            <span className="text-slate-400">›</span>
            <Link
              href="/products"
              className="transition-colors hover:text-slate-900"
            >
              Sản phẩm
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 line-clamp-1">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Top section - product image left, info right */}
      <section className="border-b border-slate-200 bg-white/80 pb-12 pt-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-stretch lg:px-10 lg:pt-4">
          {/* Left: Image card */}
          <div className="w-full lg:w-[46%]">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-64 w-full bg-slate-100 sm:h-80 lg:h-96">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-sm text-slate-500">
                      Hình ảnh sản phẩm đang được cập nhật
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              {product.shortDescription}
            </p>

            {/* Key specs (tags) */}
            <div className="mt-5 flex flex-wrap gap-2">
              {product.specs.slice(0, 4).map((spec, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-4 lg:mt-auto lg:pt-6">
              <Link href="/contact" className="btn-primary">
                Liên hệ tư vấn sản phẩm
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Xem ứng dụng trong giải pháp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            {/* Left: Description & features */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Tổng quan sản phẩm
              </h2>
              <div className="mt-4 space-y-4 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                {product.fullDescription}
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold text-slate-900">
                  Tính năng nổi bật
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex gap-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm"
                    >
                      <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                        <FeatureIcon iconName={feature.icon} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Specs card */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">
                  Thông số & đặc điểm chính
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-green)]" />
                      <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6">
                <h3 className="text-base font-semibold text-emerald-900">
                  Cần demo hoặc báo giá?
                </h3>
                <p className="mt-2 text-sm text-emerald-800">
                  Hãy để lại thông tin, đội ngũ HSafe sẽ liên hệ tư vấn giải
                  pháp phù hợp với quy mô và môi trường sản xuất của bạn.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="/contact" className="btn-primary w-full">
                    Đặt lịch demo & tư vấn
                  </Link>
                  <Link
                    href="/contact"
                    className="text-center text-xs font-medium text-emerald-900 underline underline-offset-4"
                  >
                    Hoặc gửi yêu cầu báo giá chi tiết
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50/60 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-xl font-bold text-slate-900">
                Kết hợp cùng hệ sinh thái HSafe
              </h2>
              <Link
                href="/products"
                className="text-sm font-semibold text-[var(--brand-blue)] hover:underline"
              >
                Xem tất cả sản phẩm
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProducts.map((item) => (
              <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)]/40 hover:shadow-lg"
                >
                  <div className="relative h-40 w-full bg-slate-100">
                    {item.image ? (
                  <Image
                        src={item.image}
                        alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-[var(--brand-blue)]">
                      {item.name}
                  </h3>
                    <p className="mt-2 line-clamp-3 text-xs text-slate-600">
                      {item.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[var(--brand-green)]">
                      <span>Xem chi tiết</span>
                      <span>→</span>
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA bottom */}
      <section className="hero-gradient py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">
            Muốn tích hợp {product.name} vào nhà máy của bạn?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            HSafe đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số an
            toàn lao động và giám sát con người.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-4 text-sm font-bold text-[var(--brand-green)] shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Liên hệ đội ngũ HSafe
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Xem các giải pháp liên quan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


