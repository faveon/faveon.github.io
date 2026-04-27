import React from "react";

export default function App() {
  return (
    <div style={{padding:40,fontFamily:"Inter"}}>
      <h1 style={{fontFamily:"Playfair Display",fontSize:48}}>
        fave:on is live 🚀
      </h1>
      <p>import React, { useEffect, useRef, useState } from "react";

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

const contentSlots = [
  {
    url: "https://www.instagram.com/",
    embedUrl: "",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23ffffff'/><stop offset='100%' stop-color='%23e9efe9'/></linearGradient></defs><rect width='800' height='1000' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.45'>Video / Image</text></svg>",
  },
  {
    url: "https://www.tiktok.com/",
    embedUrl: "",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><rect width='800' height='1000' fill='%23f2f2f2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.45'>Video / Image</text></svg>",
  },
  {
    url: "https://www.youtube.com/",
    embedUrl: "",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><rect width='800' height='1000' fill='%23eeeeee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.45'>Video / Image</text></svg>",
  },
  {
    url: "https://www.instagram.com/",
    embedUrl: "",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><rect width='800' height='1000' fill='%23f5f5f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.45'>Video / Image</text></svg>",
  },
  {
    url: "https://www.instagram.com/",
    embedUrl: "",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><rect width='800' height='1000' fill='%23e9efe9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.45'>Video / Image</text></svg>",
  },
  {
    url: "https://www.tiktok.com/",
    embedUrl: "",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><rect width='800' height='1000' fill='%23f2f2f2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.45'>Video / Image</text></svg>",
  },
];

const imageSlots = [
  {
    title: "Brand Activation",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'><rect width='1200' height='700' fill='%23f2f2f2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.5'>Add image</text></svg>",
  },
  {
    title: "Creator Community",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'><rect width='1200' height='700' fill='%23f2f2f2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.5'>Add image</text></svg>",
  },
  {
    title: "Beauty Discovery",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'><rect width='1200' height='700' fill='%23f2f2f2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='%23000000' opacity='0.5'>Add image</text></svg>",
  },
];

const events = [
  {
    month: "MAY",
    day: "17",
    year: "2026",
    title: "Hershy's Grad Cafe",
    location: "Los Angeles",
    cta: "Learn more",
    href: "#contact",
  },
  {
    month: "JUN",
    day: "TBD",
    year: "2026",
    title: "K-culture Night with Hanbok, K-pop, and More",
    location: "Los Angeles",
    cta: "Coming soon",
    href: "#events",
  },
];

const blogPosts = [
  {
    title: "How K-Beauty Brands Can Use Creator Events Without Overproducing Content",
    tag: "Strategy",
  },
  {
    title: "What Product Testers Actually Reveal Before a Beauty Launch",
    tag: "Beauty Intel",
  },
  {
    title: "Live Commerce Is Not Just Selling, It Is Trust Building",
    tag: "Creator Economy",
  },
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

  const closeMenu = () => setMenuOpen(false);

  const scrollContentRail = (direction) => {
    if (!contentRailRef.current) return;
    contentRailRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#fbfbf7] text-black selection:bg-black selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .marquee-track { animation: marquee 24s linear infinite; }
        .fade-up { animation: fadeUp 800ms ease both; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .brand-serif { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
        .media-frame { aspect-ratio: 4 / 5; }
      `}</style>

      <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#fbfbf7]/90 backdrop-blur-xl border-b border-black/10" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" onClick={closeMenu} className="flex items-center">
            <img src="/logo.png" alt="fave:on logo" className="h-8 md:h-10 object-contain" />
          </a>

          <div className="hidden items-center gap-7 text-sm uppercase tracking-[0.18em] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:opacity-50">{item.label}</a>
            ))}
          </div>

          <button className="md:hidden rounded-full border border-black px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-black/10 bg-[#fbfbf7] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em]">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-16 md:px-8 md:pt-36">
        <div className="absolute right-[-120px] top-24 h-[280px] w-[280px] rounded-full blur-3xl md:h-[480px] md:w-[480px]" style={{ background: ACCENT, opacity: 0.45 }} />

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-up">

            <h1 className="brand-serif max-w-5xl text-[11vw] leading-[0.92] tracking-[-0.055em] md:text-[6.4vw] lg:text-[84px]">
              <span>A creator agency with </span>
              <span className="italic">strategy, taste,</span><br />
              <span className="italic">and operational backbone.</span>
            </h1>

            <p className="mt-10 max-w-xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
              We connect creators, brands, and communities to build partnerships, experiences, and impact.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#brands" className="rounded-full px-6 py-3 text-sm font-medium text-black" style={{ background: ACCENT }}>
                Work with us ↗
              </a>
              <a href="#creators" className="text-sm underline underline-offset-4">
                For creators ↗
              </a>
            </div>
          </div>

          <div className="relative fade-up">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop"
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="absolute bottom-6 right-6 h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-l-[10px] border-l-black border-y-[6px] border-y-transparent ml-1" />
            </button>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-black py-3 text-black" style={{ background: ACCENT }}>
        <div className="marquee-track flex w-[200%] whitespace-nowrap text-xs font-medium uppercase tracking-[0.08em] md:text-sm">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 pr-6">
              {[
                "K-Beauty",
                "Creator Campaigns",
                "Live Commerce",
                "Brand Engagements",
                "Events",
                "Affiliate Growth",
                "Product Testing",
              ].map((term) => (
                <React.Fragment key={term}>
                  <span>{term}</span>
                  <span className="text-xl leading-none">*</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <p className="text-sm uppercase tracking-[0.25em]">About fave:on</p>
          <div>
            <h2 className="brand-serif text-5xl leading-[0.95] tracking-[-0.05em] md:text-8xl">A creator agency with strategy, taste, and operational backbone.</h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
              We connect brands with creators in ways that feel native, culturally relevant, and commercially useful. From creator sourcing to event concepts, product testing, live commerce, and campaign operations, fave:on is designed for brands that want more than one-off sponsored posts.
            </p>
          </div>
        </div>
      </section>

      <section id="creators" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em]">Creators</p>
              <h2 className="mt-4 brand-serif text-5xl tracking-[-0.05em] md:text-8xl">Build influence that lasts.</h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-black/70">For creators ready to grow their platform, sharpen positioning, and build stronger brand opportunities.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {creatorServices.map((service, index) => (
              <article key={service.title} className="group rounded-[2rem] border border-black bg-[#fbfbf7] p-7 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-black text-sm group-hover:border-white" style={{ background: index === 1 ? ACCENT : "transparent", color: "black" }}>
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-black/65 group-hover:text-white/70">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="sticky top-28 h-fit">
            <p className="text-sm uppercase tracking-[0.25em]">Brands</p>
            <h2 className="mt-4 brand-serif text-5xl tracking-[-0.05em] md:text-8xl">Make culture feel shoppable, shareable, and real.</h2>
          </div>

          <div className="grid gap-4">
            {brandServices.map((service, index) => (
              <div key={service} className="group flex items-center justify-between rounded-full border border-black bg-white px-6 py-5 transition hover:bg-black hover:text-white md:px-8">
                <span className="text-xl md:text-3xl">{service}</span>
                <span className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] group-hover:text-black" style={{ background: ACCENT }}>
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Selected Work</p>
              <h2 className="mt-4 brand-serif text-5xl tracking-[-0.05em] md:text-8xl">Brand partnerships and collaborations.</h2>
            </div>
            <div className="max-w-md">
              <p className="text-lg leading-8 text-white/60">
                Add video embeds when available. If a platform does not allow embedding, use a thumbnail image and link the card to the original post.
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => scrollContentRail("left")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-white hover:text-black"
                  aria-label="Scroll content left"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollContentRail("right")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-white hover:text-black"
                  aria-label="Scroll content right"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div
            ref={contentRailRef}
            className="flex gap-5 overflow-x-auto pb-6 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {contentSlots.map((slot, index) => (
              <article key={index} className="group min-w-[78vw] overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 md:min-w-[360px] lg:min-w-[390px]">
                <a href={slot.url} target="_blank" rel="noreferrer" className="block">
                  <div className="media-frame relative overflow-hidden bg-white/10">
                    {slot.embedUrl ? (
                      <iframe
                        src={slot.embedUrl}
                        title={`Brand partnership content ${index + 1}`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img src={slot.image} alt={`Brand partnership content ${index + 1}`} className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
                        <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:scale-110">
                          ▶
                        </div>
                      </>
                    )}
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em]">Events</p>
            <h2 className="mt-4 brand-serif text-5xl tracking-[-0.05em] md:text-8xl">Community-first moments.</h2>
          </div>
        </div>

        <div className="grid gap-4">
          {events.map((event) => (
            <div key={event.title} className="grid gap-5 rounded-[2rem] border border-black bg-white p-6 md:grid-cols-[140px_1fr_160px] md:items-center md:p-8">
              <div className="flex items-center gap-4 md:block">
                <p className="text-sm uppercase tracking-[0.25em] text-black/50">{event.month}</p>
                <p className="brand-serif text-5xl tracking-[-0.05em]">{event.day}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-black/40">{event.year}</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl">{event.title}</h3>
                <p className="mt-2 text-black/60">{event.location}</p>
              </div>
              <a href={event.href} className="w-fit rounded-full border border-black px-4 py-2 text-sm transition hover:bg-black hover:text-white" style={event.cta === "Learn more" ? { background: ACCENT } : {}}>
                {event.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/*
      <section id="blog" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em]">Blog</p>
              <h2 className="mt-4 brand-serif text-5xl tracking-[-0.05em] md:text-8xl">Signals, rankings, and creator intel.</h2>
            </div>
            <div className="rounded-[2rem] border border-black p-5 md:w-[360px]" style={{ background: ACCENT }}>
              <p className="text-sm uppercase tracking-[0.2em]">Future Module</p>
              <p className="mt-3 text-lg">Beauty product real-time ranking can live here as an API-powered widget.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-[2rem] border border-black bg-[#fbfbf7] p-7 transition hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] flex flex-col h-full">
                <p className="text-xs uppercase tracking-[0.22em] text-black/50">{post.tag}</p>
                <h3 className="mt-8 text-2xl leading-tight tracking-tight">{post.title}</h3>
                <button className="mt-auto rounded-full border border-black px-5 py-3 text-sm">Read soon</button>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      <section id="contact" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-black p-8 text-white md:p-14">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Contact Us</p>
              <h2 className="mt-4 brand-serif text-6xl leading-[0.9] tracking-[-0.06em] md:text-9xl">Let’s turn something on.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-white/65">For brand partnerships, creator management, events, product testing, or content collaborations, send us a note.</p>
              <a href="mailto:hello@faveonagency.com" className="mt-8 inline-flex rounded-full px-6 py-4 font-medium text-black transition hover:scale-95" style={{ background: ACCENT }}>hello@faveonagency.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-black/60 md:flex-row">
          <p>© 2026 fave:on. All rights reserved.</p>
          <p>Creator agency for beauty, lifestyle, entertainment, and culture.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
</p>
    </div>
  );
}
