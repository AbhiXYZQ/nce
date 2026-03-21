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
  Plane,
  Microscope,
  Library,
  Dumbbell,
  Home as HomeIcon,
  Landmark,
  ClipboardList,
  Link2,
  Music2,
  Lightbulb,
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
  eyebrow: "Engineering Excellence · Est. 2008 · Nalanda",
  headline: ["Innovating Today,", "Defining Tomorrow."],
  sub: "A Premier Government Engineering Institution under the Dept. of Science & Technology, Govt. of Bihar. AICTE Approved & Affiliated to Bihar Engineering University.",
  cta1: { label: "Admission 2026", href: "/admission" },
  cta2: { label: "Our Programs", href: "/academics" },
  stats: [
    { value: "4000+", label: "Alumni" },
    { value: "08", label: "Specializations" },
    { value: "100%", label: "Govt. Institution" },
    { value: "15+", label: "Years of Legacy" },
  ],
};

const statsData = [
  { icon: GraduationCap, value: 4000, suffix: "+", label: "Alumni Worldwide" },
  { icon: Users, value: 150, suffix: "+", label: "Expert Faculty" },
  { icon: BookOpen, value: 8, suffix: "", label: "Programs (UG & PG)" },
  { icon: Trophy, value: 50, suffix: "+", label: "Awards & Rankings" },
  { icon: Briefcase, value: 200, suffix: "+", label: "Placement Partners" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Excellence" },
];

const departments = [
  {
    icon: Cpu,
    name: "Computer Science & Engineering",
    short: "CSE",
    slug: "cse",
    seats: 60,
    accent: "#2563eb",
    highlight: false,
    desc: "Algorithms, Systems & Software Engineering.",
  },
  {
    icon: Zap,
    name: "Electrical & Electronics Engineering",
    short: "EEE",
    slug: "eee",
    seats: 60,
    accent: "#d97706",
    highlight: false,
    desc: "Power Systems, Control & Electronics.",
  },
  {
    icon: Building2,
    name: "Civil Engineering",
    short: "CE",
    slug: "ce",
    seats: 60,
    accent: "#16a34a",
    highlight: false,
    desc: "Structural, Geo-technical & Environmental.",
  },
  {
    icon: Wrench,
    name: "Mechanical Engineering",
    short: "ME",
    slug: "me",
    seats: 60,
    accent: "#64748b",
    highlight: false,
    desc: "Thermodynamics, Manufacturing & Design.",
  },
  {
    icon: Plane,
    name: "Aeronautical Engineering",
    short: "AERO",
    slug: "aero",
    seats: 60,
    accent: "#0ea5e9",
    highlight: false,
    desc: "Aerodynamics, Propulsion & Aircraft Structures.",
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    short: "AI & ML",
    slug: "aiml",
    seats: 60,
    accent: "#7c3aed",
    highlight: true,
    desc: "Deep Learning, NLP, Computer Vision & Data Science.",
    tag: "New · Flagship",
  },
  {
    icon: Cpu,
    name: "M.Tech in Computer Science & Engineering",
    short: "M.Tech CSE",
    slug: "mtech-cse",
    seats: 30,
    accent: "#3b82f6",
    highlight: false,
    desc: "Advanced research in computing, algorithms and systems.",
    tag: "PG Program",
  },
  {
    icon: Zap,
    name: "M.Tech in Power Systems",
    short: "M.Tech PS",
    slug: "mtech-ps",
    seats: 30,
    accent: "#f59e0b",
    highlight: false,
    desc: "Advanced studies in electrical power generation and distribution.",
    tag: "PG Program",
  },
];

const bentoNotices = {
  updates: [
    { date: "24 Feb 2026", title: "BCECE/UGEAC Counseling Registration Extended", isNew: true },
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


const campusGrid = [
  { 
    label: "Central Library", 
    icon: Library, 
    accent: "#1e40af", 
    span: "row-span-2", 
    desc: "25,000+ books, e-journals & digital resources accessible 24×7", 
    stat: "25K+ Books",
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070" 
  },
  { 
    label: "AI / ML Laboratory", 
    icon: Brain, 
    accent: "#6d28d9", 
    span: "", 
    desc: "GPU clusters, research workstations & cloud compute nodes", 
    stat: "40 Servers",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
  },
  { 
    label: "Sports Complex", 
    icon: Dumbbell, 
    accent: "#15803d", 
    span: "", 
    desc: "Cricket, Football, Badminton courts & fully equipped Gymnasium", 
    stat: "5 Arenas",
    image: "https://images.unsplash.com/photo-1541252260737-0402bb7d8caf?auto=format&fit=crop&q=80&w=2070"
  },
  { 
    label: "Student Hostel", 
    icon: HomeIcon, 
    accent: "#b45309", 
    span: "col-span-1 md:col-span-2", 
    desc: "1000+ capacity — secured campus, Wi-Fi, dining hall & 24×7 staff", 
    stat: "1000+ Beds",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2070"
  },
  { 
    label: "Research Labs", 
    icon: Microscope, 
    accent: "#0f766e", 
    span: "", 
    desc: "40+ specialised laboratories across all engineering departments", 
    stat: "40+ Labs",
    image: "https://images.unsplash.com/photo-1532187875323-ce432d664539?auto=format&fit=crop&q=80&w=2070"
  },
  { 
    label: "Innovation Hub", 
    icon: Lightbulb, 
    accent: "#7c3aed", 
    span: "col-span-2 md:col-span-2", 
    desc: "A creative incubator for student startups, patent support & multidisciplinary projects", 
    stat: "10+ Startups",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070"
  },
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

const sliderImages = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhllkEHGFKH1BoTjUS6lWEZ12t4z_E77JS-9ruOUVm8zD5GZBQxQ6RwHosUR6woG2WLvN39do9rt65R19bZRyZEs4OwyfkXLtnObeWcNAF0EXHfloeAsVvMJZVEhMKYgNqnNQ4Ggi-1Pz11/w1200-h630-p-k-no-nu/Untitled11.png",
  "https://www.collegebatch.com/static/clg-gallery/nalanda-college-of-engineering-chandi-nalanda-351897.webp",
  "https://www.collegebatch.com/static/clg-gallery/nalanda-college-of-engineering-chandi-nalanda-351896.webp",
  "https://image-static.collegedunia.com/public/college_data/images/campusimage/1563170019Capture.PNG",
];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#001122]">
      {/* Dynamic Slide Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sliderImages[currentSlide]})` }}
          >
            {/* Overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001122]/90 via-[#001122]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#001122]/80" />
            
            {/* Glass Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
            <div className="absolute inset-0 bg-[#001122]/30" />
          </motion.div>
        </AnimatePresence>

        {/* Floating dust particles / Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
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
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
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

        {/* Slide Indicators */}
        <div className="absolute bottom-10 right-10 flex gap-2 z-20">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-[#c9a84c] w-6" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

// ─── PRINCIPAL'S DESK SECTION (NEW) ──────────────────────────────────────────

function PrincipalDesk() {
  return (
    <Section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Principal Image with Decorative Elements */}
          <motion.div variants={fadeIn} className="relative group flex-shrink-0 w-full lg:w-5/12">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50 transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="/images/principal.png"
                alt="Principal, NCE"
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#003366] to-transparent p-8">
                <h4 className="text-white font-bold text-xl mb-0.5">Dr. Gopal Nandan</h4>
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em]">Principal, NCE Chandi</p>
              </div>
            </div>
            {/* Shapes behind image */}
            <div className="absolute top-10 -left-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-0" />
            <div className="absolute top-1/2 -right-4 w-12 h-12 border-2 border-[#c9a84c] rounded-full hidden lg:block" />
          </motion.div>

          {/* Principal Message Content */}
          <div className="flex-1">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-4">Leadership Voice</p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#003366] mb-8 leading-tight">
                From the Principal&apos;s Desk
              </h2>
              
              <div className="relative">
                <span className="absolute -top-10 -left-6 text-slate-100 text-9xl font-serif select-none pointer-events-none">&ldquo;</span>
                <div className="space-y-6 text-slate-700 font-medium leading-[1.8] italic text-lg relative z-10">
                  <p className="text-xl text-[#003366] not-italic font-bold mb-4">My Dear Students,</p>
                  <p>
                    Welcome to Nalanda College of Engineering (NCE). Our aim is to provide you the best quality education. In fact, the education is hidden in the student itself; we just encourage them to explore and enjoy the learning. 
                  </p>
                  <p>
                    Increasing diversity in needs and globalization have generated and enhanced the demand for competitive skills. So, the main purpose of NCE is to provide such a platform where the needs can be fulfilled. We motivate students to develop leadership skills and encourage them to trust in themselves to achieve great heights.
                  </p>
                  <p className="text-[#003366] font-bold not-italic border-l-4 border-[#c9a84c] pl-4 py-1">
                    &quot;In fact, they can do everything if they believe in their abilities.&quot;
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-[#003366] font-bold text-xl">Dr. Gopal Nandan</p>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Principal, NCE Chandi</p>
                    <a href="mailto:nceprincipalchandi@gmail.com" className="text-[#c9a84c] text-sm font-medium hover:underline mt-1 block tracking-tight">
                      nceprincipalchandi@gmail.com
                    </a>
                  </div>
                  <Link href="/principal" className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5">
                    Read Full Message <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── RECRUITERS MARQUEE (NEW) ────────────────────────────────────────────────

const recruiters = [
  "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Accenture", "L&T", "BYJU's", "Prism Cement", "Oracle",
];

function RecruitersMarquee() {
  return (
    <Section className="py-12 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <motion.div variants={fadeUp}>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c9a84c] mb-2">Placement Excellence</p>
          <h2 className="font-playfair text-lg md:text-xl font-bold text-[#003366] mb-3 uppercase tracking-tight">
            Our Students are Recruited By
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto opacity-30 rounded-full" />
        </motion.div>
      </div>
      <div className="relative overflow-hidden w-full whitespace-nowrap group">
        <div className="marquee-track inline-flex items-center gap-12 lg:gap-20 py-4">
          {[...recruiters, ...recruiters, ...recruiters, ...recruiters].map((name, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-30 hover:opacity-100 transition-all duration-500 cursor-pointer transform hover:scale-105 px-2">
               <span className="font-playfair text-xl lg:text-2xl font-black text-[#003366]/20 group-hover:text-[#003366]/40 hover:!text-[#003366] uppercase tracking-tighter transition-colors">
                 {name}
               </span>
            </div>
          ))}
        </div>
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10" />
      </div>
    </Section>
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
                The latest updates, upcoming events, and official circulars from NCE.
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

  const btechPrograms = departments.filter((d) => d.tag !== "PG Program");
  const mtechPrograms = departments.filter((d) => d.tag === "PG Program");

  const renderCard = (dept, i, globalIdx) => {
    const Icon = dept.icon;
    const isHovered = hoveredIdx === globalIdx;
    return (
      <motion.div
        key={dept.slug}
        variants={fadeUp}
        onMouseEnter={() => setHoveredIdx(globalIdx)}
        onMouseLeave={() => setHoveredIdx(null)}
        className="relative"
      >
        <Link
          href={`/departments/${dept.slug}`}
          className={`group relative h-full block rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
            dept.highlight
              ? "border-violet-300 bg-gradient-to-br from-violet-50 to-purple-50"
              : "border-slate-100 bg-white hover:border-slate-200"
          } hover:-translate-y-1.5 hover:shadow-xl`}
          style={{ boxShadow: isHovered ? `0 20px 40px -10px ${dept.accent}30` : undefined }}
        >
          {dept.highlight && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Popular
            </div>
          )}
          {dept.tag && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
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
                Intake: <span className="font-semibold text-slate-600">{dept.seats}</span>
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
  };

  return (
    <Section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">Programs</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366]">
            Academic Departments
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base max-w-xl mx-auto">
            AICTE-approved Undergraduate and Postgraduate programs designed to produce industry-ready engineers.
          </p>
        </motion.div>

        {/* UG Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <h3 className="flex-shrink-0 font-playfair text-xl font-bold text-slate-400 uppercase tracking-widest">
              Undergraduate <span className="text-[#003366] block sm:inline">(B.Tech)</span>
            </h3>
            <div className="h-px w-full bg-slate-100" />
          </div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {btechPrograms.map((dept, i) => renderCard(dept, i, i))}
          </motion.div>
        </div>

        {/* PG Section */}
        <div>
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <h3 className="flex-shrink-0 font-playfair text-xl font-bold text-slate-400 uppercase tracking-widest">
              Postgraduate <span className="text-[#003366] block sm:inline">(M.Tech)</span>
            </h3>
            <div className="h-px w-full bg-slate-100" />
          </div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
            {mtechPrograms.map((dept, i) => renderCard(dept, i, btechPrograms.length + i))}
          </motion.div>
        </div>
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
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>

                {/* Colored top accent bar */}
                <div className="h-[4px] w-full flex-shrink-0 relative z-10" style={{ background: item.accent }} />

                <div className="flex flex-col flex-1 p-6 relative z-10">
                  {/* Icon + stat row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ background: `white`, border: `1px solid ${item.accent}30` }}
                    >
                      <Icon size={24} style={{ color: item.accent }} strokeWidth={2} />
                    </div>
                    <span
                      className="text-[10px] font-bold px-3 py-1 rounded-full leading-none shadow-sm"
                      style={{ background: `white`, color: item.accent, border: `1px solid ${item.accent}20` }}
                    >
                      {item.stat}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="font-playfair font-bold text-slate-900 text-lg md:text-xl leading-snug mb-2 group-hover:text-[#003366] transition-colors">
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


// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="font-sans bg-white antialiased">
      <HeroSection />
      <BentoNotices />
      <PrincipalDesk />
      <DepartmentsSection />
      <CampusGrid />
      <ImportantLinks />
      <StatsRow />
      <RecruitersMarquee />
    </main>
  );
}