import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-dark px-4 text-center text-white">
      <p className="text-8xl font-bold text-brand-gold">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
      <p className="mt-2 text-white/60">الصفحة غير موجودة</p>
      <Link
        href="/ar"
        className="mt-8 rounded-xl bg-brand-blue px-6 py-3 font-semibold transition-colors hover:bg-primary-600"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
