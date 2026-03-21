"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { 
  ArrowRight, ChevronRight,
  Cpu, Code2, Database, Network, Terminal, 
  Brain, Sparkles, Binary, Layers,
  Building2, Landmark, Compass, Ruler, Hammer,
  Wrench, Settings, PenTool, Truck, Cylinder,
  Plane, Wind, Navigation, Rocket, Globe,
  Zap, CircuitBoard, Bolt, BatteryCharging,
  Users, Award, GraduationCap, BookOpen
} from "lucide-react";

const PATTERN_MAP = {
  cse: [Cpu, Code2, Database, Network, Terminal],
  aiml: [Brain, Sparkles, Binary, Layers, Cpu],
  ce: [Building2, Landmark, Compass, Ruler, Hammer],
  me: [Wrench, Settings, PenTool, Truck, Cylinder],
  aero: [Plane, Wind, Navigation, Rocket, Globe],
  eee: [Zap, CircuitBoard, Bolt, BatteryCharging, Cpu],
  about: [GraduationCap, BookOpen, Building2, Award],
  faculty: [Users, Award, BookOpen, GraduationCap],
  mtech: [Cpu, Zap, GraduationCap, BookOpen]
};

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

function GalleryCarousel({ gallery }) {
  const [index, setIndex] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  const numItems = gallery.length;

  const handleNext = () => setIndex((prev) => (prev + 1) % numItems);
  const handlePrev = () => setIndex((prev) => (prev - 1 + numItems) % numItems);

  return (
    <div className="relative w-full h-[320px] md:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden py-4 text-[#001a33]">
      <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
        {gallery.map((img, i) => {
          let offset = i - index;
          if (offset > Math.floor(numItems / 2)) {
            offset -= numItems;
          } else if (offset < -Math.floor(numItems / 2)) {
            offset += numItems;
          }

          const isActive = offset === 0;

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                x: `${offset * 85}%`,
                scale: isActive ? 1 : 0.8,
                opacity: Math.abs(offset) > 1 ? 0 : offset === 0 ? 1 : 0.6,
                filter: isActive ? "blur(0px) brightness(1.1)" : "blur(4px) brightness(0.6)",
                zIndex: 10 - Math.abs(offset),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8,
              }}
              onClick={() => {
                if (offset === 1) handleNext();
                if (offset === -1) handlePrev();
              }}
              className="absolute shrink-0 flex items-center justify-center w-[75%] sm:w-[60%] md:w-[50%] lg:w-[45%] h-full cursor-pointer pointer-events-auto"
            >
              <div className="relative inline-flex items-center justify-center max-w-full max-h-full rounded-2xl md:rounded-3xl drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                <img 
                  src={img} 
                  alt="Gallery view" 
                  className="max-w-full max-h-full object-contain rounded-2xl md:rounded-3xl" 
                />
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#001122]/90 to-transparent pointer-events-none flex flex-col justify-end p-5 md:p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-b-2xl md:rounded-b-3xl">
                    <span className="text-white text-sm md:text-base font-bold uppercase tracking-widest drop-shadow-md flex items-center gap-2">
                      <Sparkles size={16} className="text-[#c9a84c]" /> Highlight
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 sm:px-4 md:px-12 z-30 pointer-events-none">
        <button 
          onClick={handlePrev} 
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/40 hover:bg-white border border-white/50 backdrop-blur-md flex items-center justify-center text-[#001a33] shadow-xl pointer-events-auto transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight size={28} className="rotate-180" />
        </button>
        <button 
          onClick={handleNext} 
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/40 hover:bg-white border border-white/50 backdrop-blur-md flex items-center justify-center text-[#001a33] shadow-xl pointer-events-auto transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

export default function PageShell({
  eyebrow = "Nalanda College of Engineering",
  title,
  subtitle,
  breadcrumbs,
  quickLinks,
  sections,
  accentLabel = "Explore",
  patternType = null,
  bgImage = null,
  gallery = [],
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
        <div className="relative min-h-[300px] md:min-h-[380px] bg-[#001a33] flex items-center">
          {/* Background Image with Overlay */}
          {bgImage && (
            <div className="absolute inset-0 z-0">
              <img 
                src={bgImage} 
                alt={title} 
                className="w-full h-full object-cover opacity-40 select-none pointer-events-none"
              />
              {/* Very strong dark overlap on the left for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001122] via-[#001122]/90 to-transparent" />
              {/* Subtle darkening from bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001122]/80 via-transparent to-transparent" />
            </div>
          )}

          {/* Fallback Sleek Floating Decor if no image */}
          {!bgImage && patternType && PATTERN_MAP[patternType] && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
              <div className="relative h-full w-full opacity-20">
                {(() => {
                  const icons = PATTERN_MAP[patternType];
                   return (
                    <>
                      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 opacity-[0.2] blur-[1px] rotate-12 text-white">
                        {(() => { const Icon = icons[0]; return <Icon size={200} />; })()}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#c9a84c]/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 py-14 md:py-16 relative z-10">
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
      {normalizedSections.map((sec, idx) => (
        <Section key={`${sec.title}-${idx}`} title={sec.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {(sec.cards ?? []).map((card, cIdx) => (
              <div
                key={`${card.title}-${cIdx}`}
                className="rounded-2xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-2">
                  {card.kicker ?? ""}
                </p>
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                {card.text && <p className="text-sm text-slate-500 mt-2 leading-relaxed">{card.text}</p>}
                {!!card.points?.length && (
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {card.points.map((p, pIdx) => (
                      <li key={`${p}-${pIdx}`} className="flex items-start gap-2">
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

      {/* Gallery Section */}
      {gallery.length > 0 && (
        <Section title="Explore Our Environment">
          <div className="relative -mx-6 px-6 md:-mx-4 md:px-4">
            <GalleryCarousel gallery={gallery} />
          </div>
        </Section>
      )}

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
