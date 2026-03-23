"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, ArrowRight, Home, Info, Award, Users, 
  UserCircle, Library, BookOpen, GraduationCap, Building2, 
  ShieldCheck, MapPin, Calendar, Heart, Globe, Briefcase
} from "lucide-react";

// ─── STYLES & VARIANTS ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const PATTERN_MAP = {
  faculty: [Users, UserCircle, Briefcase],
  about: [Library, Info, ShieldCheck],
  admission: [Award, BookOpen, Home],
  academics: [GraduationCap, Building2, Calendar]
};

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Breadcrumbs({ items = [] }) {
  if (!items?.length) return null;
  return (
    <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/50 overflow-x-auto no-scrollbar py-1">
      <Link href="/" className="hover:text-[#c9a84c] transition-colors flex items-center gap-1">
        <Home size={12} /> Home
      </Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 shrink-0">
          <ChevronRight size={10} className="text-white/30" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#c9a84c] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/90">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

function Section({ title, children, id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-12 md:py-16 scroll-mt-24 first:pt-8"
    >
      <div className="container mx-auto">
        <motion.div variants={fadeUp} className="max-w-3xl mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-extrabold text-[#003366]">
            {title}
          </h2>
          <div className="h-1 w-20 bg-[#c9a84c] mt-4 rounded-full" />
        </motion.div>
        <motion.div variants={fadeUp}>{children}</motion.div>
      </div>
    </motion.section>
  );
}

function GalleryCarousel({ gallery = [] }) {
  if (!gallery?.length) return null;
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
      {gallery.map((src, i) => (
        <div key={i} className="relative h-64 w-96 shrink-0 rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
          <Image src={src} alt={`Gallery ${i}`} fill className="object-cover" sizes="384px" />
        </div>
      ))}
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
  const [activeSection, setActiveSection] = useState("");
  
  const normalizedSections = useMemo(() => {
    return (sections?.filter(Boolean) ?? []).map((s, idx) => ({
      ...s,
      id: `${(s.title || "section").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${idx}`,
    }));
  }, [sections]);

  // Handle active section tracking on scroll
  useEffect(() => {
    if (normalizedSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: "-20% 0px -60% 0px" 
      }
    );

    normalizedSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [normalizedSections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-transparent min-h-screen">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#001122] via-[#001122]/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001122]/80 via-transparent to-transparent" />
            </div>
          )}

          {/* Decorative Particles / Icons */}
          {!bgImage && patternType && PATTERN_MAP[patternType] && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
              <div className="relative h-full w-full opacity-20">
                {(() => {
                  const icons = PATTERN_MAP[patternType];
                   return (
                    <div className="absolute top-1/2 right-[10%] -translate-y-1/2 rotate-12 text-white">
                       {(() => { const Icon = icons[0]; return <Icon size={200} />; })()}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#c9a84c]/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 py-10 md:py-16 relative z-10">
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

      {/* Main Content Area */}
      <div className="relative bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Sidebar Navigation */}
            {normalizedSections.length > 0 && (
              <aside className="lg:w-72 flex-shrink-0 pt-16 lg:sticky lg:top-24 h-fit">
                <div className="bg-slate-50/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/50 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 px-1">
                    <div className="w-1 h-3 bg-[#c9a84c] rounded-full" />
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#003366]/40">
                      On This Page
                    </p>
                  </div>
                  
                  <nav className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0 scrollbar-hide no-scrollbar relative">
                    {/* Vertical Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100 -z-10" />
                    
                    {normalizedSections.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => scrollTo(sec.id)}
                        className={`group relative flex items-center gap-4 px-3 py-2.5 rounded-xl transition-all text-left whitespace-nowrap lg:whitespace-normal ${
                          activeSection === sec.id
                            ? "bg-white text-[#003366] shadow-sm ring-1 ring-slate-100"
                            : "text-slate-500 hover:text-[#003366] hover:bg-white/50"
                        }`}
                      >
                        {/* Dot Indicator */}
                        <div className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 z-10 ${
                            activeSection === sec.id ? "bg-[#c9a84c] ring-4 ring-[#c9a84c]/10" : "bg-slate-200"
                        }`} />
                        <span className={`text-sm tracking-tight transition-all ${activeSection === sec.id ? "font-bold" : "font-medium"}`}>
                          {sec.title}
                        </span>

                        {activeSection === sec.id && (
                          <motion.div
                            layoutId="active-nav-glow"
                            className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </button>
                    ))}
                  </nav>

                  {/* Note for institution */}
                  <div className="hidden lg:block mt-10 pt-8 border-t border-slate-200/50">
                     <div className="flex items-center gap-3 mb-2">
                        <ShieldCheck size={16} className="text-[#c9a84c]" />
                        <span className="text-[10px] font-bold text-[#003366] uppercase tracking-wide">Verified Resources</span>
                     </div>
                     <p className="text-[11px] leading-relaxed text-slate-500">
                        Content curated based on official departmental academic protocols.
                     </p>
                  </div>
                </div>
              </aside>
            )}

            {/* Sections Content */}
            <div className="flex-1">
              {normalizedSections.map((sec, idx) => (
                <Section key={sec.id} id={sec.id} title={sec.title}>
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
                            Open Details <ArrowRight size={14} />
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

              {gallery.length > 0 && (
                <Section title="Gallery" id="gallery">
                  <GalleryCarousel gallery={gallery} />
                </Section>
              )}
              
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
