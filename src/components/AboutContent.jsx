"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import {
  Building2,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Landmark,
  Target,
  Sparkles,
  Library,
  Cpu,
  Dumbbell,
  Home,
  MapPin,
  Plane,
  Train,
} from "lucide-react";

import { principal } from "@/lib/facultyPeople";

const DEFAULT_LOGO_SRC = "/images/nce-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function RevealSection({ kicker, title, subtitle, children, tone = "light" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const wrapperClass =
    tone === "dark"
      ? "py-12 bg-gradient-to-br from-[#001a33] via-[#003366] to-[#001a33]"
      : "py-12";

  return (
    <section className={wrapperClass}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            {kicker && (
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
                  tone === "dark" ? "text-[#c9a84c]" : "text-[#c9a84c]"
                }`}
              >
                {kicker}
              </p>
            )}
            <h2
              className={`font-playfair text-2xl md:text-3xl font-extrabold mt-2 ${
                tone === "dark" ? "text-white" : "text-[#003366]"
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`mt-3 text-sm md:text-base leading-relaxed ${
                  tone === "dark" ? "text-white/75" : "text-slate-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7">
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">{label}</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-2">{value}</p>
          {hint && <p className="text-sm text-slate-500 mt-1">{hint}</p>}
        </div>
        <span className="h-11 w-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-[#003366]" />
        </span>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-[#003366]" />
        </span>
        <div>
          <p className="text-base font-extrabold text-slate-900">{title}</p>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

function InitialAvatar({ name }) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  const initials = (first + last).toUpperCase() || "NA";

  return (
    <div className="h-24 w-24 md:h-28 md:w-28 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur flex items-center justify-center p-4">
      <Image
        src={DEFAULT_LOGO_SRC}
        alt="Nalanda College of Engineering logo"
        width={88}
        height={88}
        className="object-contain"
        priority
      />
      <span className="sr-only">{initials}</span>
    </div>
  );
}

function LogoTile({ src, alt, label, fallback }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
          {src ? (
            <Image src={src} alt={alt} width={44} height={44} className="object-contain" />
          ) : (
            fallback
          )}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Official</p>
          <p className="text-base font-extrabold text-slate-900 mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutContent() {
  const facts = useMemo(
    () => ({
      establishedYear: "2008 (verify)",
      under: "DST, Government of Bihar",
      campusAcres: "To be updated",
      nearestRailway: "To be updated",
      nearestAirport: "To be updated",
    }),
    []
  );

  const introStats = useMemo(
    () => [
      { icon: Landmark, label: "Established", value: facts.establishedYear, hint: "College establishment year" },
      { icon: Building2, label: "Under", value: "Govt. of Bihar", hint: facts.under },
      { icon: MapPin, label: "Campus", value: facts.campusAcres, hint: "Area in acres" },
    ],
    [facts]
  );

  return (
    <div className="bg-transparent">
      <RevealSection
        kicker="Introduction & History"
        title="Nalanda College of Engineering, Chandi"
        subtitle="A brief, official-friendly introduction — establishment, governance, and campus snapshot."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {introStats.map((s) => (
            <StatCard key={s.label} icon={s.icon} label={s.label} value={s.value} hint={s.hint} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-3xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Brief</p>
            <p className="text-lg md:text-xl font-extrabold text-slate-900 mt-2">A trusted government institute</p>
            <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
              Nalanda College of Engineering, Chandi is a Government Engineering College under {facts.under}. This About page
              is structured for official content — replace placeholders with verified details from the college office.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/60 backdrop-blur p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Quick Links</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link className="font-bold text-[#003366] hover:text-[#c9a84c] transition-colors" href="/vision">
                Vision & Mission
              </Link>
              <Link className="font-bold text-[#003366] hover:text-[#c9a84c] transition-colors" href="/faculty">
                Faculty
              </Link>
              <Link className="font-bold text-[#003366] hover:text-[#c9a84c] transition-colors" href="/departments">
                Departments
              </Link>
              <Link className="font-bold text-[#003366] hover:text-[#c9a84c] transition-colors" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        kicker="Vision & Mission"
        title="Drishikone aur Lakshya"
        subtitle="Vision defines the ultimate goal. Mission defines the actions we take to achieve it."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                <Target size={18} className="text-[#003366]" />
              </span>
              <div>
                <p className="text-base font-extrabold text-slate-900">Vision</p>
                <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
                  To develop competent, ethical, and industry-ready engineers who contribute to society through knowledge,
                  innovation, and excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                <Sparkles size={18} className="text-[#003366]" />
              </span>
              <div>
                <p className="text-base font-extrabold text-slate-900">Mission</p>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                    <span>Deliver strong fundamentals with hands-on learning and modern pedagogy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                    <span>Promote research, innovation, and problem-solving through projects and labs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                    <span>Build professional ethics, discipline, and leadership qualities in students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                    <span>Strengthen industry linkage for internships, training, and placements.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        kicker="Affiliations & Approvals"
        title="AICTE Approved • BEU, Patna Affiliated"
        subtitle="These are the most important credibility markers. Add/confirm official reference documents as needed."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <LogoTile
            src={DEFAULT_LOGO_SRC}
            alt="AICTE logo"
            label="AICTE Approved"
            fallback={<span className="text-[#003366] font-extrabold text-sm">AICTE</span>}
          />
          <LogoTile
            src="/images/beu-logo.avif"
            alt="BEU logo"
            label="Affiliated to BEU, Patna"
            fallback={<span className="text-[#003366] font-extrabold text-sm">BEU</span>}
          />
        </div>

        <div className="mt-5 rounded-3xl border border-slate-200/70 bg-white/60 backdrop-blur p-6 md:p-8">
          <p className="text-sm text-slate-600 leading-relaxed">
            Note: Replace placeholder logos with official ones when ready.
          </p>
        </div>
      </RevealSection>

      <RevealSection
        kicker="Leadership / Principal's Desk"
        title="Message from the Principal"
        subtitle="A short welcome note with a professional profile card."
      >
        <div className="rounded-3xl border border-slate-200/70 bg-white/75 backdrop-blur p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="shrink-0">
              {principal?.photo ? (
                <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
                  <Image src={principal.photo} alt={principal.name} fill className="object-cover" sizes="112px" />
                </div>
              ) : (
                <InitialAvatar name={principal?.name} />
              )}
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Welcome</p>
              <p className="text-xl md:text-2xl font-extrabold text-slate-900 mt-2">{principal?.name ?? "Principal"}</p>
              <p className="text-sm text-slate-600 mt-1">{principal?.designation ?? "Principal"}</p>

              <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
                Welcome to Nalanda College of Engineering, Chandi. We believe in strong fundamentals, discipline, and hands-on
                engineering practice — supported by research, innovation, and ethical values. Our focus is to help students
                grow into competent professionals and responsible citizens.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#e8c86a] text-[#001122] font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-900/25"
                >
                  Contact Office <MapPin size={16} />
                </Link>
                <Link
                  href="/principal"
                  className="inline-flex items-center gap-2 border border-slate-200 bg-white/80 hover:bg-white text-slate-900 font-bold px-6 py-3 rounded-xl transition-all"
                >
                  Principal's Desk <ShieldCheck size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        kicker="Infrastructure & Facilities"
        title="Quick highlights"
        subtitle="Professional snapshot — classrooms, labs, library, hostels, and sports."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <FeatureCard
            icon={GraduationCap}
            title="Smart Classrooms"
            text="Modern teaching aids and structured academic delivery (update with official counts)."
          />
          <FeatureCard
            icon={Cpu}
            title="High-Tech Labs (AI/ML Focus)"
            text="Computing facilities and departmental labs with emphasis on emerging technologies."
          />
          <FeatureCard
            icon={Library}
            title="Central Library"
            text="Print and digital resources with study-friendly spaces (update timings and resources)."
          />
          <FeatureCard
            icon={Home}
            title="Hostels"
            text="Boys & Girls hostel facilities (update capacity, rules, and amenities)."
          />
          <FeatureCard
            icon={Dumbbell}
            title="Sports Facilities"
            text="Outdoor/indoor sports and student fitness activities (update list)."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Safety & Discipline"
            text="Clear policies to support a respectful, student-first environment."
          />
        </div>
      </RevealSection>

      <RevealSection
        kicker="Location"
        title="How to reach"
        subtitle="A quick map + nearest rail/airport information."
        tone="dark"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <iframe
                title="NCE Chandi Map"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Nalanda%20College%20of%20Engineering%20Chandi&output=embed"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Nearest</p>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <Train size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Railway Station</p>
                  <p className="text-white/75">{facts.nearestRailway}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Plane size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Airport</p>
                  <p className="text-white/75">{facts.nearestAirport}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-white/75">Chandi, Nalanda, Bihar (add full address)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
