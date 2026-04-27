import React, { useEffect, useRef, useState } from "react";

const ACCENT = "#DFFF3F";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Creators", href: "#creators" },
  { label: "Brands", href: "#brands" },
  { label: "Events", href: "#events" },
  { label: "Contact Us", href: "#contact" },
];

const creatorServices = [
  {
    title: "Talent Management",
    copy: "Representation and partnership development for creators with a strong point of view, culture relevance, and long-term brand potential.",
  },
  {
    title: "Creator Growth Program",
    copy: "A structured growth track for creators looking to improve content strategy, live streaming performance, monetization, and platform readiness.",
  },
  {
    title: "TikTok LIVE Support",
    copy: "Creator education, live content planning, operational support, and brand-safe activation development for live-first talent.",
  },
];

const brandServices = [
  "Creator Campaigns",
  "Brand Engagements",
  "Product Testers",
  "Live Commerce",
  "Affiliate Marketing",
  "Content Partnerships",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contentRailRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#fbfbf7] text-black">
      <style>{`
        html { scroll-behavior: smooth; }
        body { font-family: Inter, sans-serif; }
        .brand-serif { font-family: "Playfair Display", serif; }
      `}</style>

      <header className="fixed w-full bg-[#fbfbf7] border-b border-black/10 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between p-4">
          <img src="/logo.png" className="h-8" />
          <div className="hidden md:flex gap-6 text-sm uppercase">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
        </nav>
      </header>

      <section className="pt-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="brand-serif text-6xl leading-tight">
            A creator agency with <br />
            <i>strategy, taste,</i><br />
            <i>and operational backbone.</i>
          </h1>
          <p className="mt-6 text-black/60">
            We connect creators, brands, and communities to build partnerships, experiences, and impact.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
          className="rounded-2xl"
        />
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="brand-serif text-5xl mb-10">Creators</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {creatorServices.map((s) => (
            <div key={s.title} className="border p-6 rounded-xl">
              <h3 className="text-xl">{s.title}</h3>
              <p className="text-black/60 mt-2">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="brand-serif text-5xl mb-10">Brands</h2>
        <div className="grid gap-4">
          {brandServices.map((s) => (
            <div key={s} className="border px-6 py-4 rounded-full">
              {s}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t p-6 text-center text-black/60">
        © 2026 fave:on
      </footer>
    </main>
  );
}

export default App;
