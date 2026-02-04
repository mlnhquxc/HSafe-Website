"use client";

import Image from "@/components/Image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -bottom-1/2 -left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl sm:h-96 sm:w-96" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-10">
          <h1 className="hero-heading text-center">
            <span className="text-highlight-gold">Sản phẩm</span>
            <span className="text-white"> công nghệ</span>
            <br />
            <span className="text-white">cho </span>
            <span className="text-safety">an toàn lao động</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:mt-8 sm:text-lg md:text-xl">
            Thiết bị IoT thông minh được thiết kế riêng cho môi trường công nghiệp — 
            bền bỉ, chính xác và đáng tin cậy.
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 50L60 45.7C120 41.3 240 32.7 360 30.8C480 29 600 34 720 42.3C840 50.7 960 62.3 1080 64.2C1200 66 1320 57 1380 52.8L1440 48.7V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Breadcrumb below hero */}
      <section className="py-3">
        <div className="mx-auto flex max-w-7xl items-center px-4 text-xs font-medium text-slate-500 sm:px-6 lg:px-10">
          <nav className="flex flex-wrap items-center gap-2">
            <Link href="/" className="transition-colors hover:text-slate-900">
              Trang chủ
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800">Sản phẩm</span>
          </nav>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[var(--brand-blue)]/30"
              >
                {/* Image - Fixed height */}
                <div className="relative h-52 w-full flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-slate-800 group-hover:text-[var(--brand-blue)] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Short description */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {product.shortDescription}
                  </p>

                  {/* CTA Button - Always at bottom */}
                  <div className="mt-auto pt-4">
                    <div
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand-green)] to-[#008f45] px-5 py-3 text-sm font-semibold text-white shadow-md transition group-hover:brightness-110 group-hover:-translate-y-0.5"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Xem chi tiết sản phẩm
                    </div>
                  </div>
                </div>
              </Link>
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
