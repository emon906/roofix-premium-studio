import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/site/BeforeAfter";

import heroRoof from "@/assets/hero-roof.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import beforeRoof from "@/assets/before-roof.jpg";
import afterRoof from "@/assets/after-roof.jpg";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import textureCoating from "@/assets/texture-coating.jpg";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import processVideo from "@/assets/process-loop.mp4.asset.json";

const PHONE = "+61 493 741 674";
const PHONE_HREF = "tel:+61493741674";
const EMAIL = "roofcoatingss@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roofix Coatings | Roof Painting & Restoration Australia" },
      {
        name: "description",
        content:
          "Roofix Coatings restores and protects Aussie roofs — roof painting, high-pressure cleaning, re-bedding and repointing. Free quotes Australia-wide.",
      },
      { property: "og:title", content: "Roofix Coatings | Roof Painting & Restoration" },
      {
        property: "og:description",
        content: "Restoring and protecting Aussie roofs. Premium coatings, cleaning and repairs with a 10-year workmanship warranty.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Transformation />
        <BeforeAfterSection />
        <WhyUs />
        <Process />
        <Showcase />
        <Results />
        <Testimonials />
        <ServiceCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Services", "#services"],
    ["Transformation", "#transformation"],
    ["Process", "#process"],
    ["Work", "#work"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <span className="display text-xl leading-none">R</span>
          </span>
          <span className="display text-2xl tracking-wide">
            ROOFIX <span className="text-primary">COATINGS</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-bold text-foreground transition-colors hover:text-primary sm:block"
          >
            {PHONE}
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-primary px-4 py-2.5 text-xs font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Free Quote
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            <span className="display text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-semibold text-muted-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grain">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroRoof}
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
      />
      <div className="absolute inset-0 bg-background/35" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Australian Roof Specialists</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.86] tracking-tight">
                RESTORING &<br />
                <span className="text-gradient-accent">PROTECTING</span>
                <br />
                AUSSIE ROOFS
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Roofix Coatings brings a 4-stage restoration system to tired tile and
                metal roofs — deep cleaned, repaired, primed and sealed with premium
                membrane coatings built for the Australian sun.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  Get a Free Quote
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 rounded-sm border border-primary/50 bg-background/40 px-7 py-4 text-sm font-extrabold tracking-[0.16em] text-foreground uppercase backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/10"
                >
                  Call Now
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={420}>
            <div className="rounded-lg border border-border bg-background/55 p-6 backdrop-blur-xl shadow-panel">
              <div className="hairline mb-5" />
              <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6">
                {[
                  ["1,200+", "Roofs restored"],
                  ["10 yr", "Workmanship warranty"],
                  ["4.9★", "Average client rating"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="display text-3xl text-primary lg:text-4xl">{n}</dt>
                    <dd className="mt-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float-slow flex-col items-center gap-2 lg:flex">
        <span className="text-[0.65rem] font-bold tracking-[0.3em] text-muted-foreground uppercase">
          Scroll
        </span>
        <span className="h-10 w-px bg-primary/60" />
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */

function Marquee() {
  const items = [
    "Roof Painting",
    "Membrane Coating",
    "High-Pressure Cleaning",
    "Re-Bedding",
    "Repointing",
    "Tile Replacement",
    "Gutter Clean",
    "Colour Consultation",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-bold tracking-[0.22em] text-muted-foreground uppercase"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Section header ---------------- */

function SectionHead({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[0.92]">{title}</h2>
      </Reveal>
      {copy && (
        <Reveal delay={180}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{copy}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  const services = [
    {
      img: servicePainting,
      title: "Roof Painting & Coating",
      copy: "Three-coat heat-reflective membrane system, spray applied for a factory-smooth finish that resists UV, salt and storm.",
      points: ["Primer + 2 top coats", "60+ colour options", "Heat reflective"],
    },
    {
      img: serviceCleaning,
      title: "High-Pressure Cleaning",
      copy: "4000 PSI strip-back of moss, lichen and decades of grime, followed by a biocide treatment so regrowth stays away.",
      points: ["Moss & lichen kill", "Gutter flush", "Safe run-off control"],
    },
    {
      img: serviceRepair,
      title: "Repairs, Re-Bedding & Pointing",
      copy: "Cracked tiles swapped, ridge caps re-bedded and flexible pointing applied so the roof is watertight before a drop of paint lands.",
      points: ["Tile replacement", "Ridge re-bedding", "Flexible pointing"],
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              A COMPLETE ROOF
              <br />
              <span className="text-primary">RESTORATION SUITE</span>
            </>
          }
        />
        <Reveal delay={200}>
          <a
            href="#contact"
            className="text-sm font-bold tracking-[0.18em] text-primary uppercase underline-offset-8 hover:underline"
          >
            Book an inspection →
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <article className="group h-full overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-panel">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/25 to-transparent" />
                <span className="display absolute bottom-3 left-5 text-5xl text-primary/70">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-foreground/85">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Transformation (video) ---------------- */

function Transformation() {
  return (
    <section id="transformation" className="relative overflow-hidden">
      <div className="relative min-h-[85svh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={textureCoating}
        >
          <source src={processVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/70" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
        />

        <div className="relative mx-auto flex min-h-[85svh] max-w-7xl items-center px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <SectionHead
              eyebrow="The roof transformation"
              title={
                <>
                  FROM WEATHERED
                  <br />
                  TO <span className="text-gradient-accent">SHOWROOM</span>
                </>
              }
              copy="Watch the coat go down. Every roof is stripped, repaired and sealed in a single continuous run — no half-finished jobs, no second visits, no mess left behind."
            />
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6">
              {[
                ["-7°C", "Cooler roof cavity"],
                ["3 Days", "Typical turnaround"],
                ["15 Yrs", "Coating life expectancy"],
                ["100%", "Licensed & insured crew"],
              ].map(([n, l], i) => (
                <Reveal key={l} delay={i * 90}>
                  <div className="rounded-lg border border-border bg-background/50 p-5 backdrop-blur-md">
                    <p className="display text-4xl text-primary">{n}</p>
                    <p className="mt-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {l}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Before & After ---------------- */

function BeforeAfterSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHead
            eyebrow="Before & after"
            title={
              <>
                DRAG THE LINE.
                <br />
                <span className="text-primary">SEE THE DIFFERENCE.</span>
              </>
            }
            copy="A 1990s terracotta roof in Western Sydney — moss-choked and porous — reborn in Monument satin membrane. Same roof, same week."
          />
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-sm bg-primary px-6 py-3.5 text-sm font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                Get a Free Quote
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-sm border border-border px-6 py-3.5 text-sm font-extrabold tracking-[0.16em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
              >
                Call Now
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <BeforeAfter
            before={beforeRoof}
            after={afterRoof}
            beforeAlt="Weathered terracotta tile roof covered in moss before restoration"
            afterAlt="Same roof after Roofix Coatings restoration with dark slate membrane coating"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */

function WhyUs() {
  const items = [
    ["Licensed & fully insured", "$20M public liability, height-safety certified crews on every job."],
    ["Premium coatings only", "Australian-made membrane systems rated for UV, salt spray and hail."],
    ["Fixed written quotes", "The number in your inbox is the number you pay. No variations."],
    ["10-year warranty", "Workmanship and product warranty issued in writing on completion."],
    ["Clean site guarantee", "Drop sheets, masked solar, gutters flushed and driveway washed down."],
    ["Local Aussie crew", "Owner-operated, no subcontractor lottery, same faces start to finish."],
  ];

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          eyebrow="Why Roofix"
          title={
            <>
              BUILT ON WORK
              <br />
              THAT <span className="text-primary">HOLDS UP</span>
            </>
          }
          align="center"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, c], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="group h-full bg-surface-2 p-8 transition-colors duration-500 hover:bg-card">
                <span className="display text-sm tracking-[0.3em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const steps = [
    ["Free inspection", "Drone survey and on-roof assessment. You get photos, findings and a fixed quote within 24 hours."],
    ["Deep clean", "4000 PSI strip-back plus biocide treatment. Gutters flushed, run-off contained, site protected."],
    ["Repair & prep", "Broken tiles replaced, ridge caps re-bedded, flexible pointing applied, valleys cleared."],
    ["Coat & seal", "Sealer primer plus two spray-applied membrane coats, then a final walk-through with you."],
  ];

  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        eyebrow="Our process"
        title={
          <>
            FOUR STAGES.
            <br />
            <span className="text-primary">ZERO SHORTCUTS.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <ol className="relative border-l border-border pl-8">
          {steps.map(([t, c], i) => (
            <Reveal as="li" key={t} delay={i * 110} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-background text-[0.6rem] font-extrabold text-primary">
                {i + 1}
              </span>
              <h3 className="text-3xl">{t}</h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{c}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200}>
          <div className="overflow-hidden rounded-lg border border-border shadow-panel">
            <img
              src={textureCoating}
              alt="Close-up of freshly coated roof tiles with water beading on the satin finish"
              loading="lazy"
              width={1400}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Showcase ---------------- */

function Showcase() {
  return (
    <section id="work" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          eyebrow="Work showcase"
          title={
            <>
              RECENT ROOFS
              <br />
              <span className="text-primary">WE'RE PROUD OF</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <figure className="group relative h-full min-h-[26rem] overflow-hidden rounded-lg border border-border">
              <img
                src={showcase1}
                alt="Modern Australian home at dusk with a restored dark roof"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/60 to-transparent p-6">
                <p className="eyebrow">Bella Vista, NSW</p>
                <p className="display mt-1 text-3xl">Monument satin membrane</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <figure className="group relative h-72 overflow-hidden rounded-lg border border-border">
              <img
                src={showcase2}
                alt="Roofer silhouetted on a roof ridge at sunset"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/50 to-transparent p-6">
                <p className="eyebrow">Geelong, VIC</p>
                <p className="display mt-1 text-3xl">Full restoration, 3 days</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={200}>
            <figure className="group relative h-72 overflow-hidden rounded-lg border border-border">
              <img
                src={servicePainting}
                alt="Roofer spray painting tiles with an airless sprayer"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/50 to-transparent p-6">
                <p className="eyebrow">Brisbane, QLD</p>
                <p className="display mt-1 text-3xl">Spray-applied top coat</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={280}>
            <figure className="group relative h-72 overflow-hidden rounded-lg border border-border">
              <img
                src={serviceCleaning}
                alt="High pressure cleaning stripping moss from roof tiles"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/50 to-transparent p-6">
                <p className="eyebrow">Adelaide, SA</p>
                <p className="display mt-1 text-3xl">Moss strip & biocide</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Results ---------------- */

function Results() {
  const stats = [
    ["1,200+", "Roofs restored across Australia"],
    ["98%", "Jobs completed inside quoted time"],
    ["-7°C", "Average roof cavity temperature drop"],
    ["15 yrs", "Expected coating service life"],
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
      <SectionHead
        eyebrow="Results"
        title={
          <>
            NUMBERS THAT
            <br />
            <span className="text-primary">SURVIVE THE SUN</span>
          </>
        }
        align="center"
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([n, l], i) => (
          <Reveal key={l} delay={i * 100}>
            <div className="h-full rounded-lg border border-border bg-card p-8 text-center transition-colors hover:border-primary/50">
              <p className="display text-[clamp(2.8rem,6vw,4rem)] leading-none text-gradient-accent">
                {n}
              </p>
              <div className="hairline my-5" />
              <p className="text-sm text-muted-foreground">{l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const quotes = [
    {
      q: "Our roof looked twenty years old. Three days later the neighbours were asking if we'd rebuilt the house. Spotless site, fixed price, no surprises.",
      n: "Danielle M.",
      l: "Kellyville, NSW",
    },
    {
      q: "They found two cracked valleys the last mob missed, fixed them, and still finished ahead of schedule. The upstairs bedrooms are noticeably cooler.",
      n: "Peter H.",
      l: "Newtown, VIC",
    },
    {
      q: "Quote arrived with drone photos and a full breakdown the same evening. Communication was better than any trade we've dealt with.",
      n: "Amira S.",
      l: "Carindale, QLD",
    },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          eyebrow="Testimonials"
          title={
            <>
              WHAT AUSSIE OWNERS
              <br />
              <span className="text-primary">SAY AFTERWARDS</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.n} delay={i * 120}>
              <blockquote className="flex h-full flex-col justify-between rounded-lg border border-border bg-surface-2 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
                <p className="text-primary">★★★★★</p>
                <p className="mt-5 text-base leading-relaxed text-foreground/90">"{t.q}"</p>
                <footer className="mt-8">
                  <div className="hairline mb-4" />
                  <p className="display text-2xl">{t.n}</p>
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {t.l}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Service CTA ---------------- */

function ServiceCTA() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroRoof}
        alt="Australian home with freshly restored dark roof at sunset"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full animate-ken-burns object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <Reveal>
          <p className="eyebrow">Servicing NSW · VIC · QLD · SA</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.9]">
            YOUR ROOF'S NEXT
            <br />
            <span className="text-gradient-accent">15 YEARS START HERE</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Free inspection, drone photos and a fixed written quote — usually back with
            you within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-primary px-8 py-4 text-sm font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              Get a Free Quote
            </a>
            <a
              href={PHONE_HREF}
              className="rounded-sm border border-primary/60 px-8 py-4 text-sm font-extrabold tracking-[0.16em] text-foreground uppercase transition-colors hover:bg-primary/10"
            >
              Call {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHead
            eyebrow="Get in touch"
            title={
              <>
                REQUEST YOUR
                <br />
                <span className="text-primary">FREE QUOTE</span>
              </>
            }
            copy="Tell us a little about your roof and we'll come out, inspect it properly and send a fixed written price. No pressure, no call-out fee."
          />
          <div className="mt-10 space-y-4">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-between rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Phone
              </span>
              <span className="display text-2xl text-primary">{PHONE}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Email
              </span>
              <span className="text-base font-semibold text-foreground">{EMAIL}</span>
            </a>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card p-5">
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Hours
              </span>
              <span className="text-base font-semibold text-foreground">Mon–Sat, 7am–6pm</span>
            </div>
          </div>
        </div>

        <Reveal delay={140}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-lg border border-border bg-surface-2 p-7 shadow-panel sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Jane Whitmore" required />
              <Field label="Phone" name="phone" type="tel" placeholder="0400 000 000" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="sm:col-span-2"
              />
              <Field
                label="Suburb"
                name="suburb"
                placeholder="Parramatta, NSW"
                className="sm:col-span-2"
              />
              <label className="sm:col-span-2">
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Roof type & what it needs
                </span>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Concrete tile roof, lots of moss, some cracked ridge caps…"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-sm bg-primary px-6 py-4 text-sm font-extrabold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              {sent ? "Request received — we'll call you" : "Get a Free Quote"}
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Prefer to talk? Call{" "}
              <a href={PHONE_HREF} className="font-bold text-primary">
                {PHONE}
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </label>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="display text-3xl">
              ROOFIX <span className="text-primary">COATINGS</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Restoring and protecting Aussie roofs.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href={PHONE_HREF} className="font-bold text-foreground hover:text-primary">
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="font-bold text-foreground hover:text-primary"
            >
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="hairline my-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Roofix Coatings. Licensed & fully insured.</p>
          <p>Roof painting · Restoration · Cleaning · Repointing — Australia wide</p>
        </div>
      </div>
    </footer>
  );
}
