"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Building2,
  Cpu,
  FlaskConical,
  Wrench,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Bell,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  ExternalLink,
  Trophy,
  Briefcase,
  Star,
  Brain,
  Layers,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Award as AwardIcon,
  Shield,
  Microscope,
  Library,
  Dumbbell,
  Home as HomeIcon,
  Landmark,
  ClipboardList,
  Link2,
  Music2,
} from "lucide-react";

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

function Section({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const BRAND = "#003366";
const GOLD = "#c9a84c";
const RED = "#d32f2f";

const heroContent = {
  eyebrow: "Nalanda College of Engineering, Chandi",
  headline: ["Forging Engineers,", "Shaping the Future."],
  sub: "Government Engineering College · AICTE Approved · Dept. of Science & Technology, Govt. of Bihar",
  cta1: { label: "Apply for Admission 2026", href: "/admission" },
  cta2: { label: "Explore Programs", href: "/academics" },
  stats: [
    { value: "3000+", label: "Alumni" },
    { value: "8", label: "Programs" },
    { value: "200+", label: "Recruiters" },
    { value: "15+", label: "Years" },
  ],
};

const statsData = [
  { icon: GraduationCap, value: 3000, suffix: "+", label: "Alumni Worldwide" },
  { icon: Users, value: 150, suffix: "+", label: "Expert Faculty" },
  { icon: BookOpen, value: 8, suffix: "", label: "B.Tech Programs" },
  { icon: Trophy, value: 50, suffix: "+", label: "Awards & Rankings" },
  { icon: Briefcase, value: 200, suffix: "+", label: "Placement Partners" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Excellence" },
];

const departments = [
  {
    icon: Cpu,
    name: "Computer Science & Engineering",
    short: "CSE",
    seats: 120,
    accent: "#2563eb",
    highlight: false,
    desc: "Algorithms, Systems & Software Engineering.",
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    short: "AI/ML",
    seats: 60,
    accent: "#7c3aed",
    highlight: true,
    desc: "Deep Learning, NLP, Computer Vision & Data Science.",
    tag: "New · Flagship",
  },
  {
    icon: Zap,
    name: "Electrical Engineering",
    short: "EE",
    seats: 60,
    accent: "#d97706",
    highlight: false,
    desc: "Power Systems, Control & Electronics.",
  },
  {
    icon: Wrench,
    name: "Mechanical Engineering",
    short: "ME",
    seats: 60,
    accent: "#64748b",
    highlight: false,
    desc: "Thermodynamics, Manufacturing & Design.",
  },
  {
    icon: Building2,
    name: "Civil Engineering",
    short: "CE",
    seats: 60,
    accent: "#16a34a",
    highlight: false,
    desc: "Structural, Geo-technical & Environmental.",
  },
  {
    icon: FlaskConical,
    name: "Electronics & Communication",
    short: "ECE",
    seats: 60,
    accent: "#db2777",
    highlight: false,
    desc: "VLSI, Signal Processing & Communication.",
  },
  {
    icon: Layers,
    name: "Information Technology",
    short: "IT",
    seats: 60,
    accent: "#0891b2",
    highlight: false,
    desc: "Cloud, Networks & Full-Stack Development.",
  },
  {
    icon: Building2,
    name: "Architecture",
    short: "ARCH",
    seats: 40,
    accent: "#be185d",
    highlight: false,
    desc: "Design, Sustainable & Urban Architecture.",
  },
];

const bentoNotices = {
  updates: [
    { date: "24 Feb 2026", title: "Admission Registration Extended till 10th March 2026", isNew: true },
    { date: "20 Feb 2026", title: "End-Semester Exam Date Sheet (Even Sem) Released", isNew: true },
    { date: "15 Feb 2026", title: "Smart India Hackathon 2026 – Internal Round Results", isNew: false },
    { date: "10 Feb 2026", title: "NPTEL Online Certification Courses – Last Date 28 Feb", isNew: false },
  ],
  events: [
    { date: "05 Mar", title: "TCS Campus Recruitment Drive", tag: "Placement" },
    { date: "10 Mar", title: "NANO-26 Techno-Cultural Fest", tag: "Event" },
    { date: "15 Mar", title: "End Semester Examinations Begin", tag: "Academic" },
    { date: "02 Apr", title: "Guest Lecture: AI & Future of Work", tag: "Academic" },
  ],
  circulars: [
    { title: "Anti-Ragging Committee Guidelines 2025-26", date: "Jan 2026" },
    { title: "IQAC Activity Report Submission Deadline", date: "Feb 2026" },
    { title: "Faculty Research Publication Incentive Scheme", date: "Feb 2026" },
  ],
};

const placementStats = [
  { value: 12, suffix: " LPA", label: "Highest Package" },
  { value: 92, suffix: "%", label: "Placement Rate" },
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 200, suffix: "+", label: "Hiring Companies" },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "HCL Technologies", "Cognizant",
  "Tech Mahindra", "L&T", "BHEL", "ONGC", "BSNL",
  "Accenture", "IBM", "Capgemini", "NIC", "DRDO",
];

const campusGrid = [
  { label: "Central Library", icon: Library, accent: "#1e40af", span: "row-span-2", desc: "25,000+ books, e-journals & digital resources accessible 24×7", stat: "25K+ Books" },
  { label: "AI / ML Laboratory", icon: Brain, accent: "#6d28d9", span: "", desc: "GPU clusters, research workstations & cloud compute nodes", stat: "40 Servers" },
  { label: "Sports Complex", icon: Dumbbell, accent: "#15803d", span: "", desc: "Cricket, Football, Badminton courts & fully equipped Gymnasium", stat: "5 Arenas" },
  { label: "Student Hostel", icon: HomeIcon, accent: "#b45309", span: "col-span-2", desc: "1000+ capacity — secured campus, Wi-Fi, dining hall & 24×7 staff", stat: "1000+ Beds" },
  { label: "Research Labs", icon: Microscope, accent: "#0f766e", span: "", desc: "40+ specialised laboratories across all engineering departments", stat: "40+ Labs" },
  { label: "Auditorium", icon: Music2, accent: "#be123c", span: "", desc: "1200-seat state-of-the-art multipurpose convention facility", stat: "1200 Seats" },
];

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#001122]">
      {/* Ken Burns background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="ken-burns absolute inset-[-5%] bg-cover bg-center"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 70% 50%, rgba(0,51,102,0.55) 0%, transparent 70%),
              linear-gradient(135deg, #001833 0%, #002244 40%, #003366 70%, #001122 100%)
            `,
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        {/* Dark gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-24 md:py-32 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          <AnimatePresence>
            {loaded && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-slate-300 text-xs font-medium px-4 py-1.5 rounded-full mb-7 tracking-wide"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {heroContent.eyebrow}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.25 }}
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                >
                  {heroContent.headline.map((line, i) => (
                    <span key={i} className={`block ${i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#f0d080]" : ""}`}>
                      {line}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.45 }}
                  className="text-slate-300 text-base md:text-lg leading-relaxed mb-9 max-w-lg"
                >
                  {heroContent.sub}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href={heroContent.cta1.href}
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#e8c86a] hover:from-[#b8963d] hover:to-[#d4b455] text-[#001122] font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-yellow-900/30 hover:shadow-xl hover:shadow-yellow-900/40 hover:-translate-y-0.5 text-sm"
                  >
                    {heroContent.cta1.label}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={heroContent.cta2.href}
                    className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all text-sm"
                  >
                    {heroContent.cta2.label}
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Glassmorphism Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.7 }}
          className="lg:flex-shrink-0 w-full lg:w-auto"
        >
          <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-7 shadow-2xl max-w-xs mx-auto lg:mx-0">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={14} className="text-[#c9a84c]" />
              <span className="text-white font-semibold text-sm">At a Glance</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {heroContent.stats.map(({ value, label }) => (
                <div key={label} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="font-playfair text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-slate-400 text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2">
              {[
                { icon: Shield, text: "AICTE Approved" },
                { icon: AwardIcon, text: "Govt. of Bihar" },
                { icon: Star, text: "Est. 2008, Nalanda" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-300 text-xs">
                  <Icon size={12} className="text-[#c9a84c] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── STATS ROW ────────────────────────────────────────────────────────────────

function StatsRow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-[#003366] py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {statsData.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-2 bg-white/10 p-2.5 rounded-lg">
                <Icon size={20} className="text-[#c9a84c]" />
              </div>
              <div className="font-playfair text-2xl md:text-3xl font-bold text-white">
                {inView ? <Counter target={value} suffix={suffix} /> : "0"}
              </div>
              <div className="text-blue-200 text-xs mt-0.5 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── BENTO NOTICES ────────────────────────────────────────────────────────────

function BentoNotices() {
  const [activeTab, setActiveTab] = useState("updates");
  const tabs = [
    { key: "updates", label: "Latest Updates", icon: Bell },
    { key: "events", label: "Events", icon: Calendar },
    { key: "circulars", label: "Circulars", icon: BookOpen },
  ];
  const tagColor = { Placement: "bg-emerald-100 text-emerald-700", Event: "bg-amber-100 text-amber-700", Academic: "bg-blue-100 text-blue-700" };

  return (
    <Section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left – Heading + tabs */}
          <div className="lg:col-span-1">
            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
                Stay Informed
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#003366] leading-tight">
                News &<br />Announcements
              </h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                The latest updates, upcoming events, and official circulars from NCE Chandi.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="flex flex-row lg:flex-col gap-2">
              {tabs.map(({ key, label, icon: Icon }) => (
                <motion.button
                  key={key}
                  variants={fadeUp}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                    activeTab === key
                      ? "bg-[#003366] text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Right – Bento content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid gap-3"
              >
                {activeTab === "updates" &&
                  bentoNotices.updates.map((n, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-100 p-5 flex items-start gap-4 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <div className={`mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${n.isNew ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500"}`}>
                        {n.isNew ? "NEW" : "•"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-800 text-sm font-medium leading-snug group-hover:text-[#003366] transition-colors">{n.title}</p>
                        <p className="text-slate-400 text-xs mt-1">{n.date}</p>
                      </div>
                      <ArrowRight size={14} className="text-slate-300 group-hover:text-[#003366] shrink-0 mt-0.5 transition-colors" />
                    </div>
                  ))}

                {activeTab === "events" &&
                  bentoNotices.events.map((ev, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <div className="bg-[#003366] text-white rounded-xl px-3 py-2 text-center leading-none shrink-0 min-w-[56px]">
                        <div className="text-[9px] font-bold uppercase opacity-70">{ev.date.split(" ")[1]}</div>
                        <div className="text-xl font-bold">{ev.date.split(" ")[0]}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 text-sm font-semibold group-hover:text-[#003366] transition-colors">{ev.title}</p>
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mt-1 ${tagColor[ev.tag]}`}>{ev.tag}</span>
                      </div>
                    </div>
                  ))}

                {activeTab === "circulars" &&
                  bentoNotices.circulars.map((c, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <BookOpen size={16} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 text-sm font-medium group-hover:text-[#003366] transition-colors">{c.title}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{c.date}</p>
                      </div>
                      <ExternalLink size={13} className="text-slate-300 group-hover:text-[#003366] shrink-0 transition-colors" />
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>

            <Link
              href="/notices"
              className="mt-4 inline-flex items-center gap-1.5 text-[#003366] text-sm font-semibold hover:text-[#c9a84c] transition-colors"
            >
              View all notices <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── DEPARTMENTS ──────────────────────────────────────────────────────────────

function DepartmentsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <Section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">Programs</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366]">
            Academic Departments
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Eight AICTE-approved B.Tech programs designed to produce industry-ready engineers.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={dept.short}
                variants={fadeUp}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative"
              >
                <Link
                  href={`/departments/${dept.short.toLowerCase()}`}
                  className={`group relative block rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                    dept.highlight
                      ? "border-violet-300 bg-gradient-to-br from-violet-50 to-purple-50"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  } hover:-translate-y-1.5 hover:shadow-xl`}
                  style={{ boxShadow: isHovered ? `0 20px 40px -10px ${dept.accent}30` : undefined }}
                >
                  {dept.highlight && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {dept.tag}
                    </div>
                  )}
                  <div className="p-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${dept.accent}15` }}
                    >
                      <Icon size={22} style={{ color: dept.accent }} />
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider mb-2 inline-block"
                      style={{ backgroundColor: `${dept.accent}12`, color: dept.accent }}
                    >
                      {dept.short}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug mt-1 mb-2">{dept.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{dept.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Intake:{" "}
                        <span className="font-semibold text-slate-600">{dept.seats}</span>
                      </span>
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                        style={{ color: dept.accent }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

// ─── PLACEMENT SECTION ────────────────────────────────────────────────────────

function PlacementSection() {
  return (
    <Section className="py-20 bg-[#001a33]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">Careers & Placements</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Placement Legacy
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Our Training & Placement Cell partners with leading organisations to launch careers.
          </p>
        </motion.div>

        {/* Stats counters */}
        <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {placementStats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/8 transition-all"
            >
              <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-1">
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee recruiters */}
        <motion.div variants={fadeIn} className="overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Our Recruiting Partners</p>
          <div className="flex">
            <div className="marquee-track flex gap-6 items-center">
              {[...recruiters, ...recruiters].map((r, i) => (
                <div
                  key={i}
                  className="shrink-0 px-7 py-3.5 bg-white/5 hover:bg-[#c9a84c]/15 border border-white/10 hover:border-[#c9a84c]/30 rounded-xl text-white/60 hover:text-white font-semibold text-sm cursor-pointer transition-all whitespace-nowrap"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="text-center mt-10">
          <Link
            href="/placement"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c86a] text-[#001122] font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-900/30 text-sm"
          >
            <Briefcase size={16} /> Explore T&P Cell
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}

// ─── CAMPUS LIFE GRID ─────────────────────────────────────────────────────────

function CampusGrid() {
  return (
    <Section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">Life at NCE</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366]">
            Campus &amp; Facilities
          </h2>
          <div className="flex items-center justify-center mt-4 gap-3">
            <div className="h-px w-16 bg-[#c9a84c]/40" />
            <p className="text-slate-500 text-sm">
              Purpose-built infrastructure for academic excellence and holistic development
            </p>
            <div className="h-px w-16 bg-[#c9a84c]/40" />
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-5"
        >
          {campusGrid.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                className={`relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer flex flex-col ${item.span || ""}`}
              >
                {/* Colored top accent bar */}
                <div className="h-[3px] w-full flex-shrink-0" style={{ background: item.accent }} />

                <div className="flex flex-col flex-1 p-5">
                  {/* Icon + stat row */}
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.accent}18` }}
                    >
                      <Icon size={22} style={{ color: item.accent }} strokeWidth={1.8} />
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full leading-none"
                      style={{ background: `${item.accent}12`, color: item.accent }}
                    >
                      {item.stat}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="font-bold text-slate-800 text-sm md:text-[15px] leading-snug mb-1.5">
                    {item.label}
                  </h3>

                  {/* Description — fades in on hover for short cards, always visible for tall */}
                  <p className="text-slate-500 text-[12px] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Read more arrow */}
                  <div className="mt-auto pt-3 flex items-center gap-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: item.accent }}>
                    Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Subtle background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 20% 80%, ${item.accent}08 0%, transparent 70%)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

// ─── IMPORTANT LINKS ──────────────────────────────────────────────────────────

function ImportantLinks() {
  const links = [
    { label: "BCECE Board", sub: "Bihar Combined Entrance Competitive Exam", href: "https://bceceboard.bihar.gov.in", icon: Landmark, accent: "#1e40af" },
    { label: "Bihar Govt.", sub: "Official Government of Bihar Portal", href: "https://state.bihar.gov.in", icon: Building2, accent: "#15803d" },
    { label: "AICTE", sub: "All India Council for Technical Education", href: "https://www.aicte-india.org", icon: ClipboardList, accent: "#b45309" },
    { label: "NPTEL", sub: "Online Courses & Certifications", href: "https://nptel.ac.in", icon: GraduationCap, accent: "#6d28d9" },
    { label: "UGC", sub: "University Grants Commission", href: "https://www.ugc.ac.in", icon: BookOpen, accent: "#0f766e" },
    { label: "NAD Portal", sub: "National Academic Depository", href: "https://nad.digilocker.gov.in", icon: Link2, accent: "#be123c" },
  ];

  return (
    <Section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-2">Resources</p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#003366]">
            Important Links
          </h2>
          <p className="text-slate-500 text-sm mt-2">Quick access to regulatory bodies and academic portals</p>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.label}
                variants={fadeUp}
                whileHover={{ y: -3, transition: { duration: 0.18, ease: "easeOut" } }}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-transparent hover:shadow-md bg-white hover:bg-slate-50 transition-all duration-200 group"
                style={{ "--hover-border": l.accent }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${l.accent}14` }}
                >
                  <Icon size={20} style={{ color: l.accent }} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#003366] transition-colors leading-snug">
                    {l.label}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-snug truncate mt-0.5">{l.sub}</p>
                </div>

                {/* Arrow */}
                <ExternalLink
                  size={14}
                  className="text-slate-300 group-hover:text-slate-500 flex-shrink-0 transition-colors duration-200"
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

// ─── QUICK LINKS BAR ──────────────────────────────────────────────────────────

function QuickLinksBar() {
  const links = [
    { label: "Admission 2026", href: "/admission", hot: true },
    { label: "Academic Calendar", href: "/calendar" },
    { label: "Exam Schedule", href: "/exam" },
    { label: "Results", href: "/results" },
    { label: "Fee Payment", href: "/fee" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "NIRF Report", href: "/nirf" },
    { label: "RTI", href: "/rti" },
  ];

  return (
    <div className="bg-[#001a33] border-b border-white/10">
      <div className="container mx-auto px-4 py-2.5 flex flex-wrap justify-center gap-1 text-xs font-medium">
        {links.map((q) => (
          <Link
            key={q.label}
            href={q.href}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-colors ${
              q.hot
                ? "bg-[#d32f2f] text-white hover:bg-red-700 font-bold"
                : "text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {q.hot && <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />}
            {q.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#000d1a] text-slate-400">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-playfair text-white font-bold text-xl mb-3">NCE Chandi</h3>
          <p className="text-sm leading-relaxed mb-5 text-slate-500">
            Nalanda College of Engineering — A premier Government Engineering Institute under Dept. of
            Science & Technology, Govt. of Bihar. Est. 2008.
          </p>
          <div className="flex gap-3">
            {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-[#c9a84c] hover:text-[#001122] text-slate-400 rounded-lg transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["About NCE", "Admission", "Academics", "Departments", "Faculty", "Research", "Student Corner", "Alumni"].map((l) => (
              <li key={l}>
                <Link
                  href={`/${l.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight size={10} className="opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Compliance</h4>
          <ul className="space-y-2 text-sm">
            {["Anti-Ragging Policy", "Grievance Redressal", "POSH Committee", "IQAC", "NIRF Data", "RTI", "Tenders", "Privacy Policy"].map((l) => (
              <li key={l}>
                <Link
                  href="#"
                  className="hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight size={10} className="opacity-40 group-hover:opacity-100 shrink-0" />
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-[#c9a84c] mt-0.5 shrink-0" />
              <span className="text-slate-500 leading-snug">NCE Campus, Chandi, Nalanda – 801503, Bihar, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-[#c9a84c] shrink-0" />
              <a href="tel:06111295" className="hover:text-[#c9a84c] transition-colors text-slate-500">06111 – 295xxx</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-[#c9a84c] shrink-0" />
              <a href="mailto:principal@ncechandi.ac.in" className="hover:text-[#c9a84c] transition-colors text-slate-500 text-xs">
                principal@ncechandi.ac.in
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe size={14} className="text-[#c9a84c] shrink-0" />
              <a href="https://ncechandi.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors text-slate-500">
                ncechandi.ac.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Nalanda College of Engineering, Chandi. All Rights Reserved.</span>
          <span>
            Designed by <span className="text-[#c9a84c] font-semibold">NCE Tech Team</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="font-sans bg-white antialiased">
      <HeroSection />
      <QuickLinksBar />
      <StatsRow />
      <BentoNotices />
      <DepartmentsSection />
      <PlacementSection />
      <CampusGrid />
      <ImportantLinks />
      <Footer />
    </div>
  );
}