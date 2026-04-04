"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Quote,
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
  eyebrow: "Under Construction 😊, NCE",
  headline: ["Forging Engineers,", "Shaping the Future."],
  sub: "Government Engineering College · AICTE Approved · Dept. of Science & Technology, Govt. of Bihar",
  cta1: { label: "Admission Procedure 2026", href: "/admission" },
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
    bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    short: "AI & ML",
    slug: "aiml",
    seats: 60,
    accent: "#7c3aed",
    highlight: false,
    desc: "Deep Learning, NLP, Computer Vision & Data Science.",
    bgImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2070&auto=format&fit=crop"
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
    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
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
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
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
    bgImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop"
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
    icon: Cpu,
    name: "M.Tech. in Computer Science & Engineering",
    short: "M.Tech. CSE",
    slug: "mtech-cse",
    seats: 30,
    accent: "#3b82f6",
    highlight: false,
    desc: "Advanced research in computing, algorithms and systems.",
    tag: "PG Program",
  },
  {
    icon: Zap,
    name: "M.Tech. in Power Systems",
    short: "M.Tech. PS",
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
    { title: "Annual Activity Report Submission Deadline", date: "Feb 2026" },
    { title: "Faculty Research Publication Incentive Scheme", date: "Feb 2026" },
  ],
};


const campusGrid = [
  { label: "Academic & Study", icon: Library, accent: "#1e40af", bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop", desc: "Central Library (10,000+ books, 80+ journals), Computer Centre, laboratories for every branch, Smart Classrooms, and a Wi-Fi enabled campus.", stat: "Smart Infra", span: "md:col-span-2 md:row-span-2 row-span-2" },
  { label: "Hostel Facilities", icon: HomeIcon, accent: "#b45309", bgImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop", desc: "In-campus Boys & Girls hostels with single/double/triple sharing. Equipped with TV rooms, study areas, Mess (Veg/Non-veg), and 24×7 security.", stat: "Secure Stay", span: "md:col-span-1 md:row-span-2 row-span-2" },
  { label: "T&P Cell", icon: Briefcase, accent: "#0f766e", bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", desc: "Active Training & Placement Cell providing corporate relations, internship support, soft skill development, and career resources.", stat: "200+ Recruiters", span: "md:col-span-1 md:row-span-2 row-span-2" },
  { label: "Sports & Activities", icon: Trophy, accent: "#15803d", desc: "UMANG annual fest, large grounds for major sports, indoor arenas, and vibrant dynamic student clubs.", stat: "Clubs & Fests", span: "md:col-span-1 md:row-span-1" },
  { label: "Food & Daily Needs", icon: Building2, accent: "#be123c", desc: "Hygienic Canteen & Mess. Basic daily items are easily available around the campus.", stat: "Canteen & Shops", span: "md:col-span-1 md:row-span-1" },
  { label: "Basic Services", icon: Landmark, accent: "#6d28d9", desc: "A 24/7 ATM facility is available directly and securely inside the college campus for all students.", stat: "On-Campus ATM", span: "md:col-span-2 md:row-span-1" },
];

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function Counter({ target, suffix, prefix = "" }) {
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
      {prefix}{count}{suffix}
    </span>
  );
}

const heroSlides = [
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhllkEHGFKH1BoTjUS6lWEZ12t4z_E77JS-9ruOUVm8zD5GZBQxQ6RwHosUR6woG2WLvN39do9rt65R19bZRyZEs4OwyfkXLtnObeWcNAF0EXHfloeAsVvMJZVEhMKYgNqnNQ4Ggi-1Pz11/w1200-h630-p-k-no-nu/Untitled11.png",
    eyebrow: "Welcome to NCE",
    headline: ["Forge Your", "Destiny"],
    sub: "Nalanda College of Engineering · Est. 2008",
    buttons: [
      { label: "Admission 2026", href: "/admission", style: "bg-[#c9a84c] text-[#001122] hover:bg-[#b5953e] border-none" }
    ]
  },
  {
    image: "https://www.collegebatch.com/static/clg-gallery/nalanda-college-of-engineering-chandi-nalanda-351897.webp",
    eyebrow: "Excellence in Engineering",
    headline: ["Innovation", "Meets Heritage"],
    sub: "State-of-the-Art Infrastructure across 65 Acres",
    buttons: [
      { label: "Explore Campus", href: "/campus", style: "bg-[#001E36] text-white hover:bg-[#001122] border-none" }
    ]
  },
  {
    image: "https://www.collegebatch.com/static/clg-gallery/nalanda-college-of-engineering-chandi-nalanda-351896.webp",
    eyebrow: "Advanced Learning",
    headline: ["Leading &", "Empowering"],
    sub: "Top tier academic growth with experienced faculty",
    buttons: [
      { label: "Our Facilities", href: "/facilities", style: "bg-[#c9a84c] text-[#001122] hover:bg-[#b5953e] border-none" }
    ]
  },
  {
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1563170019Capture.PNG",
    eyebrow: "Future Ready",
    headline: ["Pioneering", "Research"],
    sub: "Cultivating tech leaders of tomorrow in Bihar",
    buttons: [
      { label: "T&P Cell", href: "/placement", style: "bg-[#961b1b] text-white hover:bg-[#7a1515] border-none" }
    ]
  }
];

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const getSlideStyle = (index) => {
    let distance = index - currentSlide;
    const total = heroSlides.length;
    // Calculate shortest path for infinite scrolling effect
    if (distance > total / 2) distance -= total;
    if (distance < -total / 2) distance += total;

    if (distance === 0) {
      return { x: "0%", scale: 1, opacity: 1, zIndex: 30, filter: "brightness(1)" };
    } else if (distance === 1) { // Next slide (Right)
      return { x: "75%", scale: 0.85, opacity: 0.7, zIndex: 20, filter: "brightness(0.7)" };
    } else if (distance === -1) { // Previous slide (Left)
      return { x: "-75%", scale: 0.85, opacity: 0.7, zIndex: 20, filter: "brightness(0.7)" };
    } else { // Hidden slides
      const sign = Math.sign(distance);
      return { x: `${sign * 100}%`, scale: 0.7, opacity: 0, zIndex: 10 };
    }
  };

  return (
    <section className="relative min-h-[45vh] md:min-h-[85vh] w-full flex flex-col justify-center items-center overflow-hidden bg-slate-900 isolation-isolate">

      {/* 1. BACKGROUND: Ambient light derived from current slide */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="absolute inset-0 will-change-opacity"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt="Ambient Background"
              fill
              priority
              quality={75}
              className="object-cover blur-[40px] scale-110 opacity-60 brightness-[0.5]"
              sizes="10vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#001122]/40 backdrop-brightness-75 pointer-events-none" />
      </div>

      {/* 2. GALLERY CAROUSEL: Left, Center, Right Peeking Slides */}
      <div className="relative z-10 w-full h-[32vh] sm:h-[70vh] md:h-[75vh] flex justify-center items-center mt-0 md:mt-4 px-0 pb-0 will-change-transform">
        {heroSlides.map((slide, index) => {
          const style = getSlideStyle(index);
          const isCenter = index === currentSlide;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={style}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="absolute w-[92%] sm:w-[85%] md:w-[75%] lg:w-[60%] h-full sm:h-auto aspect-[4/3] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer bg-slate-800/20 backdrop-blur-md border border-white/10 will-change-transform"
              onClick={() => !isCenter && setCurrentSlide(index)}
            >
              <Image src={slide.image} fill quality={75} priority={index === 0} className="object-cover" alt="Gallery View Slide" sizes="(max-width: 768px) 95vw, 60vw" />

              {/* Inner Drop Shadow for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none transition-opacity duration-500" style={{ opacity: isCenter ? 1 : 0 }} />

              <AnimatePresence>
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12 flex flex-col items-center text-center"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-[#c9a84c] border border-[#c9a84c]/30 font-bold tracking-widest text-[9px] md:text-sm uppercase mb-3 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                      {slide.eyebrow}
                    </div>

                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-playfair leading-[1.1] drop-shadow-lg mb-3">
                      {slide.headline.join(" ")}
                    </h1>

                    <p className="text-slate-200 text-sm md:text-lg font-medium max-w-xl drop-shadow mb-6 md:mb-8 opacity-90">
                      {slide.sub}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                      {slide.buttons.map((btn, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = btn.href;
                          }}
                          className="group relative px-6 md:px-8 py-3.5 flex items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white transition-all duration-300"
                        >
                          <span className="relative z-10 flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest transition-colors duration-300 group-hover:text-black">
                            {btn.label} <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                          </span>
                          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      <style>{`
        @keyframes swing {
          20% { transform: rotate(15deg); }
          40% { transform: rotate(-10deg); }
          60% { transform: rotate(5deg); }
          80% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-swing {
           animation: swing 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

// ─── STATS ROW ────────────────────────────────────────────────────────────────

function StatsRow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const customStats = [
    { value: 6000, suffix: "+", label: "Alumni Worldwide", prefix: "" },
    { value: 50, suffix: "+", label: "Expert Faculties", prefix: "" },
    { value: 8, suffix: "", label: "Engineering Programs", prefix: "" },
    { value: 5, suffix: "", label: "in BEU Rankings", prefix: "Top " },
    { value: 15, suffix: "+", label: "Years of Excellence", prefix: "" },
  ];

  return (
    <div ref={ref} className="py-12 md:py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Title Area */}
          <div className="md:w-1/3 shrink-0 text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-playfair font-black text-[#001122] mb-5 leading-[1.1]">
              Excellence<br />in Numbers
            </h2>
            <div className="w-16 h-1 bg-[#c9a84c] mb-6 mx-auto md:mx-0" />
            <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed">
              A celebrated legacy of delivering world-class engineering education and shaping the state's brightest future leaders.
            </p>
          </div>

          {/* Right Grid Area */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 w-full">
            {customStats.map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }
                }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-col border-l-2 border-[#003366]/10 pl-5"
              >
                <span className="font-playfair text-4xl lg:text-5xl font-black text-[#003366] mb-1 tracking-tight">
                  {inView ? <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} /> : "0"}
                </span>
                <span className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-[0.15em] leading-snug mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

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
    <Section className="py-12 md:py-20 bg-slate-50">
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
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${activeTab === key
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
        className="relative h-full"
      >
        <Link
          href={`/departments/${dept.slug}`}
          className={`group relative h-full flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 ${dept.highlight
            ? "border-violet-300 bg-gradient-to-br from-violet-50 to-purple-50"
            : "border-slate-100 bg-white hover:border-slate-200"
            } hover:-translate-y-1.5 hover:shadow-xl`}
          style={{ boxShadow: isHovered ? `0 20px 40px -10px ${dept.accent}30` : undefined }}
        >
          {/* Background Image / Giant Watermark Icon */}
          {dept.bgImage ? (
            <div className="absolute inset-0 z-0 overflow-hidden mix-blend-multiply">
              <Image
                src={dept.bgImage}
                alt={dept.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-[0.08] grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-[0.15] transition-all duration-[0.8s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="absolute -bottom-6 -right-6 text-slate-100 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none z-0">
              <Icon size={160} strokeWidth={1.5} style={{ color: dept.accent, opacity: 0.05 }} className="group-hover:opacity-10 transition-opacity duration-700" />
            </div>
          )}

          {dept.highlight && (
            <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">
              Popular
            </div>
          )}
          {dept.tag && !dept.highlight && (
            <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">
              {dept.tag}
            </div>
          )}

          <div className="p-6 relative z-10 flex flex-col flex-1">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-white"
              style={{ border: `1px solid ${dept.accent}30`, boxShadow: `0 4px 12px ${dept.accent}10` }}
            >
              <Icon size={22} style={{ color: dept.accent }} />
            </div>
            <div>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider mb-2 inline-block bg-white drop-shadow-sm"
                style={{ border: `1px solid ${dept.accent}20`, color: dept.accent }}
              >
                {dept.short}
              </span>
              <h3 className="text-[15px] font-bold text-slate-800 leading-snug mt-1 mb-2 drop-shadow-sm group-hover:text-[#003366] transition-colors">{dept.name}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4 flex-1 drop-shadow-sm">{dept.desc}</p>
            </div>

            <div className="mt-auto flex items-center justify-between text-xs font-semibold pt-3 border-t" style={{ borderColor: `${dept.accent}20` }}>
              <span className="text-slate-500">
                Intake: <span className="font-bold" style={{ color: dept.accent }}>{dept.seats}</span>
              </span>
              <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: dept.accent }}>
                View <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <Section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
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
              Undergraduate <span className="text-[#003366] block sm:inline">(B.Tech.)</span>
            </h3>
            <div className="h-px w-full bg-slate-100" />
          </div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {btechPrograms.map((dept, i) => renderCard(dept, i, i))}
          </motion.div>
        </div>

        {/* PG Section */}
        <div>
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <h3 className="flex-shrink-0 font-playfair text-xl font-bold text-slate-400 uppercase tracking-widest">
              Postgraduate <span className="text-[#003366] block sm:inline">(M.Tech.)</span>
            </h3>
            <div className="h-px w-full bg-slate-100" />
          </div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
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
    <Section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
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
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-5"
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
                {/* Background Image / Giant Watermark Icon */}
                {item.bgImage ? (
                  <div className="absolute inset-0 z-0 overflow-hidden bg-white">
                    <Image
                      src={item.bgImage}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-15 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-25 transition-all duration-[0.8s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="absolute -bottom-8 -right-8 text-slate-100 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none z-0">
                    <Icon size={200} strokeWidth={1} style={{ color: item.accent, opacity: 0.05 }} className="group-hover:opacity-10 transition-opacity duration-700" />
                  </div>
                )}

                {/* Colored top accent bar */}
                <div className="h-[3px] w-full flex-shrink-0 z-10" style={{ background: item.accent }} />

                <div className="flex flex-col flex-1 p-5 md:p-6 lg:p-7 relative z-10">
                  {/* Icon + stat row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm bg-white"
                      style={{ border: `1px solid ${item.accent}30` }}
                    >
                      <Icon size={24} style={{ color: item.accent }} strokeWidth={1.8} />
                    </div>
                    <span
                      className="text-[10px] font-bold px-3 py-1.5 rounded-full leading-none tracking-widest uppercase shadow-sm bg-white"
                      style={{ border: `1px solid ${item.accent}30`, color: item.accent }}
                    >
                      {item.stat}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="font-bold text-slate-800 text-base md:text-[17px] leading-snug mb-2.5 group-hover:text-[#003366] transition-colors drop-shadow-sm">
                    {item.label}
                  </h3>

                  {/* Description — dynamically clamps based on row height */}
                  <p className="text-slate-600 font-medium text-[13px] md:text-sm leading-relaxed max-h-full overflow-hidden flex-1 drop-shadow-sm">
                    {item.desc}
                  </p>

                  {/* Read more arrow (unclamps or just looks nice) */}
                  <div className="mt-auto pt-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: item.accent }}>
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Subtle background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-0"
                  style={{ background: `radial-gradient(ellipse at 80% 0%, ${item.accent}0a 0%, transparent 60%)` }}
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
    { label: "RTI", href: "/rti" },
  ];

  return (
    <div className="bg-[#001a33] border-b border-white/10">
      <div className="container mx-auto px-4 py-2.5 flex flex-wrap justify-center gap-1 text-xs font-medium">
        {links.map((q) => (
          <Link
            key={q.label}
            href={q.href}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-colors ${q.hot
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

// ─── PRINCIPAL MESSAGE ────────────────────────────────────────────────────────

function PrincipalMessage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-white border-b border-slate-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#003366]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 mx-auto max-w-sm lg:max-w-none">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-[#003366]/20 border-[6px] border-white bg-slate-100 group"
                >
                  <Image
                    src="/images/faculties/principal.JPG"
                    alt="Dr Gopal Nandan"
                    fill
                    quality={75}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001122]/90 via-[#001122]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-playfair text-2xl md:text-3xl font-bold leading-tight drop-shadow-md">Dr Gopal Nandan</p>
                    <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mt-2 drop-shadow-sm">Principal, NCE</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-[#c9a84c] to-[#e8c86a] -z-10 shadow-xl opacity-80"
                />
                <div className="absolute -top-6 -left-6 w-full h-full rounded-[2.5rem] border border-[#003366]/10 -z-20" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="relative">
                <Quote className="absolute -top-10 -left-6 md:-left-10 text-[#c9a84c]/20 w-24 h-24 md:w-32 md:h-32 rotate-180 -z-10 transition-transform hover:scale-110 duration-500" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-4">Leadership Vision</p>
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] leading-[1.15] mb-8">
                  Empowering minds to <br className="hidden md:block" />
                  <span className="relative inline-block mt-2 md:mt-0">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#b8963d]">redefine the future.</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#c9a84c]/10 -z-10 rounded-sm"></span>
                  </span>
                </h2>

                <div className="space-y-5 text-slate-500 font-sans text-[15px] md:text-base lg:text-[17px] leading-relaxed">
                  <p>
                    "Rooted in the historic land of Nalanda—a beacon of global learning—Nalanda College of Engineering proudly carries forward this monumental legacy. Our mission extends far beyond imparting technical education; we are here to forge brilliant innovators equipped with unshakable ethical values and a profound sense of social responsibility."
                  </p>
                  <p>
                    "We offer a dynamic, state-of-the-art academic environment where students transform their curiosities into groundbreaking technologies. I warmly welcome you to join our visionary campus and take your place among the next generation of global engineering leaders."
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="font-playfair italic font-bold text-xl md:text-2xl text-slate-800">Dr Gopal Nandan</p>
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mt-1.5">Ph.D. / Principal</p>
                  </div>

                  <Link href="/principal" className="flex items-center gap-3 group">
                    <span className="text-sm font-bold text-[#003366] uppercase tracking-wider opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">Read Message</span>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#003366] group-hover:text-white group-hover:scale-110 group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="font-sans bg-white antialiased">
      <HeroSection />
      <QuickLinksBar />
      <BentoNotices />
      <PrincipalMessage />
      <DepartmentsSection />
      <CampusGrid />
      <StatsRow />
      <ImportantLinks />
    </div>
  );
}