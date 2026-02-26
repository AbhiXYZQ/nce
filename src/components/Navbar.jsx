"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Mail, ChevronDown, LogIn,
  Globe, Facebook, Youtube, Twitter, Linkedin,
  GraduationCap, BookOpen, Building2, Users,
  FlaskConical, Cpu, Zap, Wrench, Brain,
  Info, Calendar, FileText, Award, Newspaper,
  HelpCircle, MessageSquare, UserCircle, Briefcase,
} from "lucide-react";

// ─── NAV DATA ─────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Institute",
    children: [
      { label: "About NCE", href: "/about", icon: Info },
      { label: "Vision & Mission", href: "/vision", icon: Award },
      { label: "Administration", href: "/administration", icon: Users },
      { label: "Principal's Desk", href: "/principal", icon: UserCircle },
      { label: "IQAC", href: "/iqac", icon: FileText },
      { label: "NIRF Data", href: "/nirf", icon: Newspaper },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Programs Offered", href: "/academics", icon: GraduationCap },
      { label: "Academic Calendar", href: "/calendar", icon: Calendar },
      { label: "Syllabus", href: "/syllabus", icon: BookOpen },
      { label: "Examination", href: "/exam", icon: FileText },
      { label: "Results", href: "/results", icon: Award },
      { label: "Research", href: "/research", icon: FlaskConical },
    ],
  },
  { label: "Admission", href: "/admission" },
  {
    label: "Departments",
    children: [
      { label: "CSE", href: "/departments/cse", icon: Cpu },
      { label: "AI & ML", href: "/departments/aiml", icon: Brain },
      { label: "Electrical Engg.", href: "/departments/ee", icon: Zap },
      { label: "Mechanical Engg.", href: "/departments/me", icon: Wrench },
      { label: "Civil Engg.", href: "/departments/ce", icon: Building2 },
      { label: "ECE", href: "/departments/ece", icon: FlaskConical },
      { label: "IT", href: "/departments/it", icon: Cpu },
      { label: "Architecture", href: "/departments/arch", icon: Building2 },
    ],
  },
  { label: "T&P Cell", href: "/placement", isHighlight: true },
  {
    label: "Student Corner",
    children: [
      { label: "Student Login", href: "/student-login", icon: UserCircle },
      { label: "Clubs & Activities", href: "/clubs", icon: Users },
      { label: "Scholarships", href: "/scholarships", icon: Award },
      { label: "Grievance Cell", href: "/grievance", icon: MessageSquare },
      { label: "Anti-Ragging", href: "/anti-ragging", icon: HelpCircle },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const TICKER_NEWS = [
  "📢 Admission Registration Extended till 10th March 2026.",
  "🎓 TCS Campus Drive on 5th March 2026 – Register Now.",
  "📋 End-Semester Exam Date Sheet (Even Sem) has been released.",
  "🏆 NANO-26 Techno-Cultural Fest registrations are open.",
  "📚 NPTEL Certification Courses – Last date 28th February 2026.",
];

// ─── MOTION VARIANTS ──────────────────────────────────────────────────────────

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.95 },
  visible: {
    opacity: 1, y: 0, scaleY: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0, y: -6, scaleY: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.32, ease: [0.32, 0.72, 0, 1] } },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeIn" } },
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto", opacity: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    height: 0, opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// ─── DESKTOP NAV LINK (with animated underline) ───────────────────────────────

function DesktopNavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="relative group h-12 flex items-center px-3 lg:px-4 text-[12px] lg:text-[13px] font-semibold uppercase tracking-wider text-white/90 hover:text-white transition-colors"
    >
      {label}
      {/* Animated underline from center */}
      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
    </Link>
  );
}

// ─── DESKTOP DROPDOWN ─────────────────────────────────────────────────────────

function DesktopDropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative h-12 flex items-center">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="relative group h-12 flex items-center gap-1 px-3 lg:px-4 text-[12px] lg:text-[13px] font-semibold uppercase tracking-wider text-white/90 hover:text-white transition-colors"
      >
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={13} className="opacity-70" />
        </motion.span>
        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="absolute top-full left-0 mt-0 min-w-[220px] bg-white rounded-b-xl shadow-2xl border-t-[3px] border-[#c9a84c] z-50 overflow-hidden"
            style={{ transformOrigin: "top center" }}
          >
            {children.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#003366] transition-colors text-[13px] font-medium border-b border-slate-50 last:border-0 group"
                >
                  {Icon && (
                    <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[#003366]/10 transition-colors shrink-0">
                      <Icon size={14} className="text-slate-500 group-hover:text-[#003366]" />
                    </span>
                  )}
                  {item.label}
                  <ChevronDown size={10} className="ml-auto -rotate-90 opacity-30 group-hover:opacity-70 transition-opacity" />
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MOBILE ACCORDION ITEM ────────────────────────────────────────────────────

function MobileAccordionItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={`flex items-center justify-between py-3.5 px-5 border-b border-white/10 text-sm font-semibold tracking-wide transition-colors ${
          item.isHighlight
            ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
            : "text-white/90 hover:text-white hover:bg-white/10"
        }`}
      >
        {item.label}
        {item.isHighlight && <Briefcase size={14} className="opacity-80" />}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3.5 px-5 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors tracking-wide"
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} className="opacity-70" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            variants={accordionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden bg-black/20"
          >
            <div className="py-2 px-2">
              {item.children.map((child) => {
                const Icon = child.icon;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
                  >
                    {Icon && <Icon size={14} className="opacity-60 shrink-0" />}
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN NAVBAR ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <header className="w-full font-sans">

      {/* ───── LAYER 1: TOP UTILITY STRIP ───── */}
      <div className="bg-[#0f172a] text-slate-300 py-1.5 border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center">

          {/* Left: Contact info */}
          <div className="flex items-center gap-4">
            <a href="tel:06111295" className="hidden sm:flex items-center gap-1.5 hover:text-[#c9a84c] transition-colors text-[11px] font-bold tracking-wider uppercase">
              <Phone size={11} className="text-[#c9a84c]" />
              06111-295xxx
            </a>
            <a href="mailto:principal@ncechandi.ac.in" className="hidden md:flex items-center gap-1.5 hover:text-[#c9a84c] transition-colors text-[11px] font-bold tracking-wider uppercase">
              <Mail size={11} className="text-[#c9a84c]" />
              principal@ncechandi.ac.in
            </a>
            {/* Mobile: just phone */}
            <a href="tel:06111295" className="sm:hidden flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-300 uppercase">
              <Phone size={11} className="text-[#c9a84c]" /> 06111-295xxx
            </a>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Social links */}
            <div className="hidden lg:flex items-center gap-1.5">
              {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-[#c9a84c] transition-colors">
                  <Icon size={12} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-3 bg-white/20" />

            {/* Language toggle */}
            <button
              onClick={() => setLang((l) => (l === "EN" ? "HI" : "EN"))}
              className="flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-slate-300 hover:text-white transition-all"
            >
              <Globe size={10} className="text-[#c9a84c]" />
              {lang}
            </button>

            {/* Faculty Login */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#003366] to-[#004488] hover:from-[#004488] hover:to-[#0055aa] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full transition-all shadow-sm hover:shadow-blue-900/30"
            >
              <LogIn size={11} />
              Faculty Login
            </Link>
          </div>
        </div>
      </div>

      {/* ───── LAYER 2: BRANDING HEADER ───── */}
      <div className="bg-white border-b border-slate-100 shadow-sm py-2 md:py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-row items-center justify-between gap-2 md:gap-6 flex-nowrap">

            {/* LEFT LOGO */}
            <div className="flex-shrink-0">
              <Image
                src="/images/nce-logo.png"
                alt="NCE Logo"
                width={96} height={96}
                className="w-14 h-14 md:w-24 md:h-24 object-contain"
                priority
                unoptimized
              />
            </div>

            {/* CENTER TEXT */}
            <div className="flex-1 min-w-0 text-center px-1 md:px-2">
              <h1 className="font-playfair text-[15px] sm:text-xl md:text-[28px] lg:text-[32px] font-extrabold text-[#003366] uppercase leading-tight tracking-tight">
                Nalanda College of Engineering
              </h1>
              <h2 className="font-playfair text-[12px] sm:text-base md:text-xl lg:text-2xl font-bold text-[#d32f2f] mt-0.5 md:mt-1 leading-tight">
                नालंदा अभियंत्रण महाविद्यालय, चंडी
              </h2>
              <p className="hidden md:block text-[11px] lg:text-sm text-slate-500 font-medium mt-1 tracking-wide">
                Department of Science &amp; Technology, Govt. of Bihar &nbsp;|&nbsp; AICTE Approved
              </p>
              {/* Mobile subtitle */}
              <p className="md:hidden text-[9px] text-slate-500 font-medium mt-0.5 tracking-wide leading-tight">
                Dept. of Science &amp; Technology, Govt. of Bihar
              </p>
            </div>

            {/* RIGHT LOGO */}
            <div className="flex-shrink-0">
              <Image
                src="/images/bihar-logo.png"
                alt="Bihar Govt Logo"
                width={88} height={88}
                className="w-12 h-12 md:w-[88px] md:h-[88px] object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* ───── LAYER 3: MAIN NAV (STICKY) ───── */}
      <nav className="sticky top-0 z-50 bg-[#003366] border-b-[3px] border-[#c9a84c] shadow-lg shadow-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">

            {/* Desktop Links */}
            <div className="hidden md:flex items-center w-full justify-center gap-0">
              {NAV_ITEMS.map((item) => {
                if (item.isHighlight) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative flex items-center gap-1.5 h-12 px-4 text-[12px] lg:text-[13px] font-bold uppercase tracking-wider text-white overflow-hidden group"
                    >
                      {/* Red gradient bg with shine sweep */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#b91c1c] to-[#dc2626]" />
                      {/* Shine sweep on hover */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      <Briefcase size={13} className="relative z-10" />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  );
                }
                if (item.children) {
                  return (
                    <DesktopDropdown key={item.label} label={item.label} children={item.children} />
                  );
                }
                return <DesktopNavLink key={item.href} href={item.href} label={item.label} />;
              })}
            </div>

            {/* Mobile: Logo text + Hamburger */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Link href="/" className="text-[#c9a84c] font-extrabold text-sm tracking-widest uppercase font-playfair">
                NCE Chandi
              </Link>
              <button
                onClick={() => setDrawerOpen(true)}
                className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ───── MOBILE DRAWER ───── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[82vw] max-w-[340px] z-[70] flex flex-col shadow-2xl"
              style={{
                background: "linear-gradient(160deg, rgba(0,25,60,0.97) 0%, rgba(0,12,30,0.98) 100%)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div>
                  <p className="font-playfair text-white font-bold text-base">NCE Chandi</p>
                  <p className="text-slate-400 text-[10px] tracking-wider">Navigation Menu</p>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Drawer nav items */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {NAV_ITEMS.map((item) => (
                  <MobileAccordionItem key={item.label} item={item} onClose={() => setDrawerOpen(false)} />
                ))}
              </div>

              {/* Drawer footer */}
              <div className="px-5 py-4 border-t border-white/10">
                <Link
                  href="/login"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#003366] to-[#004a8f] hover:from-[#004a8f] hover:to-[#0060b8] text-white font-bold text-sm py-3 rounded-xl transition-all"
                >
                  <LogIn size={15} /> Faculty Login
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4">
                  {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-slate-500 hover:text-[#c9a84c] transition-colors">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <p className="text-center text-[10px] text-slate-600 mt-3 tracking-wider">
                  © 2026 NCE Chandi. All Rights Reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ───── NEWS TICKER ───── */}
      <div className="bg-[#fefce8] border-b border-yellow-200 flex items-center overflow-hidden h-8">
        <div className="shrink-0 bg-[#d32f2f] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest h-full flex items-center shadow-sm z-10">
          NEWS
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="marquee-track inline-flex items-center gap-0">
            {[...TICKER_NEWS, ...TICKER_NEWS].map((news, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[#003366] text-[11px] md:text-[12px] font-semibold whitespace-nowrap px-10"
              >
                {news}
              </span>
            ))}
          </div>
        </div>
      </div>

    </header>
  );
}