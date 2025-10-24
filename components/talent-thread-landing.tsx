"use client"
import { useState } from "react"

import axios from "axios";

/**
 * Talent Thread — Polished Landing Page
 * Single-file React component (TailwindCSS)
 * Designed with a senior UI designer mindset (15 years experience):
 * - semantic markup
 * - improved accessibility
 * - responsive layout
 * - clear visual hierarchy and microcopy
 * - modular components for handoff
 *
 * Usage: Place this file inside a React + Tailwind project and render <TalentThreadLanding />.
 * Replace placeholder assets (illustrations, analytics keys, endpoints) before production.
 */

export default function TalentThreadLanding() {
  const [form, setForm] = useState({ name: "", email: "", portfolio: "", skills: "" })
  const [status, setStatus] = useState(null)

async function submitWaitlist(e: any) {
  e.preventDefault();
  setStatus("submitting");

  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbxf5NI90DZGIAcujiLseps-MVpblxvLObTZYHM949cYvlF98AdC8HkMmFZoWTrd8vE/exec",
      form, // automatically JSON.stringify handled by axios
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", response.data);

    setStatus("success");
    setForm({ name: "", email: "", portfolio: "", skills: "" });
  } catch (error: any) {
    console.error("Error submitting form:", error);
    setStatus("error");
  }
}


  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-slate-900 to-black text-slate-100 antialiased">
      {/* ====== TOP NAV ====== */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" aria-label="Talent Thread home">
          <Badge />
          <div className="leading-tight">
            <div className="font-bold">Talent Thread</div>
            <div className="text-xs text-slate-400">AI growth for designers</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300" aria-label="Primary">
          <a href="#why" className="hover:underline focus:outline-none">
            Why join
          </a>
          <a href="#community" className="hover:underline focus:outline-none">
            Community
          </a>
          <a href="#waitlist" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 shadow-lg">
            Pre-register
          </a>
        </nav>

        <div className="md:hidden">
          <MobileCTAs />
        </div>
      </header>

      {/* ====== HERO ====== */}
      <main>
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Shaping the future of design careers
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg">
              Talent Thread is an AI-powered growth ecosystem for designers — portfolio analysis, skill roadmaps,
              curated freelance projects, and a thriving community. Join as a founding member.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 shadow-xl font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Pre-register as Designer
              </a>

              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700 text-slate-100/90"
              >
                Join Our Community
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <MicroFeature title="AI Portfolio Review" desc="Instant objective feedback with improvement pointers." />
              <MicroFeature title="Skill Roadmaps" desc="Personalised learning paths based on market demand." />
              <MicroFeature title="Curated Projects" desc="High-quality, vetted opportunities for early members." />
            </div>

            <div className="mt-8 text-sm text-slate-400">
              Founding members receive priority onboarding, special community badges, and access to early projects.
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            {/* Illustration block: replace with Lottie/SVG for production */}
            <figure className="w-full max-w-lg rounded-3xl bg-gradient-to-tr from-indigo-900/40 to-slate-900/30 p-6 border border-slate-800 shadow-2xl">
              <MockIllustration />
              <figcaption className="mt-4 text-slate-400 text-sm">
                AI-powered portfolio analysis — visual-only mockup (replace with final art)
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ====== WHY JOIN ====== */}
        <section id="why" className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold">Why designers choose Talent Thread</h2>
            <p className="text-slate-400 mt-3 max-w-xl">
              We combine human curation and AI to help designers showcase better, learn faster, and connect with
              higher-quality clients.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCard
                title="Objective Reviews"
                desc="AI + human-curated checks against UX, visual design, and market fit."
              />
              <StatCard title="Growth Plans" desc="Short, focused learning sprints with portfolio checkpoints." />
              <StatCard title="Curated Projects" desc="Only projects that meet quality and payment standards." />
              <StatCard title="Verified Network" desc="Community-first hiring and mentorship channels." />
            </dl>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">19,248</div>
                  <div className="text-slate-400 text-sm">Active community members</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">👥</div>
              </div>

              <div className="mt-6 h-36 bg-gradient-to-tr from-indigo-900/20 to-slate-800/20 rounded-lg flex items-center justify-center text-slate-400">
                Activity sparkline / chart (replace with real data)
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#community"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 font-semibold"
                >
                  Join Discord
                </a>
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-700"
                >
                  Pre-register
                </a>
              </div>
            </div>

            <div className="mt-6 text-slate-400 text-sm">
              Community-first: live critiques, office hours, project channels, and design challenges.
            </div>
          </aside>
        </section>

        {/* ====== FEATURES DEEP DIVE ====== */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeatureDeep
              title="AI Portfolio Analysis"
              bullets={[
                "Automated scoring across layout, hierarchy, typography, and UX",
                "Context-aware suggestions: what to add/remove",
                "Benchmarking against similar designers in your domain",
              ]}
            />

            <FeatureDeep
              title="Skill Roadmaps"
              bullets={[
                "3-tier skill plans with checkpoints",
                "Portfolio tasks after each sprint",
                "Mentor review windows for top performers",
              ]}
            />

            <FeatureDeep
              title="Curated Projects"
              bullets={[
                "Verified clients and fair payment policies",
                "Project briefs matched to your skill level",
                "Support for scope & contracts",
              ]}
            />
          </div>
        </section>

        {/* ====== COMMUNITY CTA ====== */}
        <section id="community" className="max-w-7xl mx-auto px-6 py-12">
          <div className="rounded-3xl p-8 bg-gradient-to-br from-indigo-900/30 to-slate-900/30 border border-slate-800 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold">Design doesn't grow in isolation — it grows in threads.</h3>
              <p className="text-slate-400 mt-2">
                Join live critiques, portfolio jams, AMAs with agencies, and collaborations happening in Discord.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold shadow-lg"
              >
                Join the Community
              </a>
              <a href="#waitlist" className="px-6 py-3 rounded-2xl border border-slate-700">
                Pre-register
              </a>
            </div>
          </div>
        </section>

        {/* ====== WAITLIST FORM ====== */}
        <section id="waitlist" className="max-w-3xl mx-auto px-6 py-12">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-slate-800/60 border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold">Pre-register for early access</h3>
            <p className="text-slate-400 mt-2">
              Short form — we only ask what matters. We'll email when onboarding opens.
            </p>

            <form
              onSubmit={submitWaitlist}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              aria-label="Waitlist form"
            >
              <label className="flex flex-col">
                <span className="text-sm text-slate-300 mb-2">Full name</span>
                <input
                  required
                  aria-required="true"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="bg-slate-900/60 border border-slate-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-300 mb-2">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@studio.com"
                  className="bg-slate-900/60 border border-slate-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </label>

              <label className="flex flex-col sm:col-span-2">
                <span className="text-sm text-slate-300 mb-2">Portfolio (link)</span>
                <input
                  value={form.portfolio}
                  onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                  placeholder="Dribbble / Behance / Personal site"
                  className="bg-slate-900/60 border border-slate-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </label>

              <label className="flex flex-col sm:col-span-2">
                <span className="text-sm text-slate-300 mb-2">Primary skills (optional)</span>
                <input
                  value={form.skills}
                  onChange={(e) => setForm({ ...form, skills: e.target.value })}
                  placeholder="UI, UX, Motion, Illustration"
                  className="bg-slate-900/60 border border-slate-700 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </label>

              <div className="sm:col-span-2 flex items-center gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 font-medium shadow-lg"
                >
                  {status === "submitting" ? "Submitting..." : "Join the Waitlist"}
                </button>

                {status === "success" && (
                  <div className="text-green-400">Thanks — we’ll email you when onboarding opens.</div>
                )}
                {status === "error" && (
                  <div className="text-rose-400">Something went wrong. Please try again later.</div>
                )}
              </div>
            </form>

            <p className="mt-4 text-xs text-slate-500">
              We respect your privacy. Data is used only for product updates and onboarding invites.
            </p>
          </div>
        </section>
      </main>

      {/* ====== FOOTER ====== */}
      <footer className="max-w-7xl mx-auto px-6 py-10 text-slate-500 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Talent Thread — Built for designers.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="mailto:hello@talentthread.design" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ----------------- Small presentational components ----------------- */
function Badge() {
  return (
    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center shadow-md">
      <span className="font-bold text-white">TT</span>
    </div>
  )
}

function MobileCTAs() {
  return (
    <div className="flex items-center gap-3">
      <a href="#waitlist" className="px-3 py-2 rounded-lg bg-indigo-600 text-sm">
        Pre-register
      </a>
    </div>
  )
}

function MicroFeature({ title, desc }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-10 h-10 rounded-lg bg-slate-800/60 flex items-center justify-center">✨</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-slate-400 text-sm">{desc}</div>
      </div>
    </div>
  )
}

function MockIllustration() {
  // Simple SVG placeholder. Replace with Lottie or optimized PNG/SVG in production.
  return (
    <div className="w-full h-64 rounded-xl bg-gradient-to-br from-indigo-900/40 to-slate-800/20 flex items-center justify-center overflow-hidden">
      <svg width="280" height="180" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="272" height="128" rx="12" fill="url(#g)" />
        <rect x="24" y="28" width="232" height="14" rx="6" fill="#ffffff" fillOpacity="0.06" />
        <rect x="24" y="52" width="180" height="14" rx="6" fill="#ffffff" fillOpacity="0.06" />
        <rect x="24" y="76" width="120" height="10" rx="5" fill="#ffffff" fillOpacity="0.04" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2b2d42" />
            <stop offset="1" stopColor="#0f1724" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function StatCard({ title, desc }) {
  return (
    <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-700">
      <div className="font-semibold">{title}</div>
      <div className="text-slate-400 text-sm mt-2">{desc}</div>
    </div>
  )
}

function FeatureDeep({ title, bullets }) {
  return (
    <div className="rounded-lg p-6 bg-slate-900/40 border border-slate-800">
      <div className="font-semibold text-lg">{title}</div>
      <ul className="mt-4 space-y-2 text-slate-400 text-sm list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

/* ----------------- Design notes (for handoff) -----------------

1) Visual System
   - Primary palette: deep navy background + gradients (indigo → purple → pink)
   - Accent: indigo #6366F1, purple #7C3AED, cyan for micro accents
   - Neutral text: slate-100 for headings, slate-400 for body

2) Typography (recommended)
   - Heading: Inter/Space Grotesk/Proxima Nova (700/800)
   - Body: Inter / system-ui (400/500)
   - Scale: 16px base, 28-36px hero, modular scale for h2/h3

3) Accessibility
   - All tappable elements >= 44px.
   - Color contrast: ensure body text meets 4.5:1 on light sections.
   - Form labels explicit; aria-required used.

4) Animations & microinteractions
   - Subtle parallax on hero illustration.
   - Button hover: translateY(-3px) + soft shadow increase.
   - Use prefers-reduced-motion to reduce animations.

5) Assets to produce
   - Hero illustration (SVG/Lottie) — 3 breakpoints.
   - Micro-icons in 3 sizes (24/32/48).
   - Community activity sparkline SVG.

6) Analytics & Tracking
   - Track: waitlist_signups, discord_clicks, community_cta_clicks via GA4 + Segment.

7) SEO & Social
   - Meta title: Talent Thread — AI portfolio analysis & designer community
   - Meta description: Short summary (120-150 chars).
   - OG image: 1200x630 — bold headline + illustration.

8) Handoff checklist
   - Figma file: components (buttons, cards, form inputs)
   - Tokens: colors, spacing, type scale
   - Export: SVG icons + optimized PNGs
   - Dev notes: endpoints, rate limits, privacy policy link

-----------------------------------------------------------------*/
