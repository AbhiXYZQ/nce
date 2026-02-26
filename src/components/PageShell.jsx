"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Section({ title, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-5">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#003366]">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
}

function Breadcrumbs({ items }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/70">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${it.href ?? it.label}-${idx}`} className="flex items-center gap-1">
              {it.href && !isLast ? (
                <Link href={it.href} className="hover:text-white transition-colors">
                  {it.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white font-semibold" : ""}>{it.label}</span>
              )}
              {!isLast && <ChevronRight size={12} className="opacity-50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function PageShell({
  eyebrow = "Nalanda College of Engineering, Chandi",
  title,
  subtitle,
  breadcrumbs,
  quickLinks,
  sections,
  accentLabel = "Explore",
  children,
}) {
  const normalizedSections = useMemo(() => sections?.filter(Boolean) ?? [], [sections]);

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <motion.header
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden"
      >
        <div className="relative bg-gradient-to-br from-[#001a33] via-[#003366] to-[#001a33]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#c9a84c]/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 py-14 md:py-16">
            <motion.div variants={fadeUp} className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c] mb-3">
                {accentLabel}
              </p>
              <h1 className="font-playfair text-3xl md:text-5xl font-extrabold text-white leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/80 mt-4 text-sm md:text-base leading-relaxed">
                  {subtitle}
                </p>
              )}
              <div className="mt-6 flex flex-col gap-3">
                <p className="text-white/65 text-xs font-semibold tracking-wide">{eyebrow}</p>
                <Breadcrumbs items={breadcrumbs} />
              </div>

              {!!quickLinks?.length && (
                <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-2">
                  {quickLinks.map((l) => (
                    <Link
                      key={`${l.href}-${l.label}`}
                      href={l.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 hover:text-white transition-all text-sm font-semibold"
                    >
                      {l.label} <ArrowRight size={14} className="opacity-80" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Sections */}
      {normalizedSections.map((sec) => (
        <Section key={sec.title} title={sec.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {(sec.cards ?? []).map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-2">
                  {card.kicker ?? ""}
                </p>
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                {card.text && <p className="text-sm text-slate-500 mt-2 leading-relaxed">{card.text}</p>}
                {!!card.points?.length && (
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {card.href && (
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[#003366] font-semibold text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    Open <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {sec.note && (
            <div className="mt-5 rounded-2xl bg-white/60 backdrop-blur border border-slate-200/70 p-5 text-sm text-slate-600">
              {sec.note}
            </div>
          )}
        </Section>
      ))}

      {children}

      {/* Footer CTA */}
      <section className="py-14 bg-transparent border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-white/75 backdrop-blur border border-slate-200/70 p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-2">Next Steps</p>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#003366]">
                Want us to fill real content?
              </h3>
              <p className="text-slate-500 mt-2 text-sm md:text-base">
                This page is scaffolded with a modern structure. We can plug in official text, PDFs, faculty data, labs, and photos.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#e8c86a] text-[#001122] font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-900/25"
              >
                Contact Office <ArrowRight size={16} />
              </Link>
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 border border-slate-200 bg-white/80 hover:bg-white text-slate-900 font-bold px-6 py-3 rounded-xl transition-all"
              >
                Admission Info <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
