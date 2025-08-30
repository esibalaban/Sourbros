// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* Replace with your logo in /public later */}
            <span className="inline-block h-8 w-8 rounded-xl bg-slate-900" />
            <span className="font-semibold tracking-tight">SourBros</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-70">Features</a>
            <a href="#updates" className="hover:opacity-70">Updates</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
            <a
              href="#waitlist"
              className="rounded-xl border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white transition"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Like Strava — but for cooking 🍳
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Track your cooks, log recipes, and share with friends. Discover new dishes from people you trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="rounded-xl bg-slate-900 text-white px-5 py-3 hover:opacity-90"
              >
                Join the waitlist
              </a>
              <a
                href="#features"
                className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-white"
              >
                See features
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              iOS + Android coming soon.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {/* Replace /app-screenshot.png with your own in /public */}
            <Image
              src="/app-screenshot.png"
              alt="SourBros app preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-7 w-7 rounded-xl bg-slate-900" />
              <span className="font-semibold">SourBros</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              © {new Date().getFullYear()} SourBros. All rights reserved.
            </p>
          </div>
          <div className="flex md:justify-end items-center gap-4 text-sm">
            <a href="#" className="hover:opacity-70">Instagram</a>
            <a href="#" className="hover:opacity-70">X</a>
            <a href="#" className="hover:opacity-70">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
