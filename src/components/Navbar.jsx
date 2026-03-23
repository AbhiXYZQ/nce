"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Mail, ChevronDown, LogIn,
  Globe, Facebook, Youtube, Twitter, Linkedin,
  GraduationCap, BookOpen, Building2, Users,
  FlaskConical, Cpu, Zap, Wrench, Brain,
  Plane,
  Info, Calendar, FileText, Award, Newspaper,
  HelpCircle, MessageSquare, UserCircle, Briefcase, Bell, Image as ImageIcon
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
      { label: "Faculty", href: "/faculty", icon: Users },
      { label: "Principal's Desk", href: "/principal", icon: UserCircle },
      { label: "Gallery", href: "/gallery", icon: ImageIcon },
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
      { label: "Computer Science & Engineering", href: "/departments/cse", icon: Cpu },
      { label: "Artificial Intelligence & Machine Learning", href: "/departments/aiml", icon: Brain },
      { label: "Civil Engineering", href: "/departments/ce", icon: Building2 },
      { label: "Mechanical Engineering", href: "/departments/me", icon: Wrench },
      { label: "Aeronautical Engineering", href: "/departments/aero", icon: Plane },
      { label: "Electrical & Electronics Engineering", href: "/departments/eee", icon: Zap },
      { label: "Applied Science & Humanities", href: "/departments/ash", icon: BookOpen },
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
      { label: "Alumni", href: "/alumni", icon: Users },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const TICKER_NEWS = [
  "📢 BCECE / UGEAC Counseling Registration Extended till 10th March 2026.",
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

// ─── DESKTOP NAV LINK ─────────────────────────────────────────────────────────

// ─── DESKTOP NAV LINK ─────────────────────────────────────────────────────────

function DesktopNavLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={`relative group px-3 lg:px-4 py-1.5 flex items-center text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
        active ? "text-[#c9a84c]" : "text-white/80 hover:text-white"
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span className={`absolute bottom-0 left-0 h-[2px] bg-[#c9a84c] transition-all duration-500 ease-out ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`} />
      <span className="absolute inset-0 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}

// ─── DESKTOP DROPDOWN ─────────────────────────────────────────────────────────

function DesktopDropdown({ label, children, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = children?.some((c) => pathname === c.href || pathname?.startsWith(`${c.href}/`));

  return (
    <div 
      ref={ref} 
      className="relative flex items-center h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={`relative group px-3 lg:px-4 py-1.5 flex items-center gap-1.5 text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
          isActive || open ? "text-[#c9a84c]" : "text-white/80 hover:text-white"
        }`}
      >
        <span className="relative z-10">{label}</span>
        <ChevronDown size={14} className={`relative z-10 transition-transform duration-300 ${open ? "rotate-180 text-[#c9a84c]" : "text-white/50 group-hover:text-white/80"}`} />
        
        <span className={`absolute bottom-0 left-0 h-[2px] bg-[#c9a84c] transition-all duration-500 ease-out ${
          isActive || open ? "w-full" : "w-0 group-hover:w-full"
        }`} />
        <span className={`absolute inset-0 bg-white/5 rounded-md transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[calc(100%+0px)] left-0 min-w-[280px] bg-[#001E36]/95 backdrop-blur-2xl rounded-b-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 p-3 z-50 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent opacity-50" />
            
            {children.map((item, i) => {
              const Icon = item.icon;
              const childActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                  key={item.href}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`relative flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all duration-300 text-[13px] font-semibold group overflow-hidden ${
                      childActive
                        ? "bg-[#c9a84c]/10 text-[#c9a84c]"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {Icon && (
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        childActive ? "bg-[#c9a84c]/20 text-[#c9a84c] shadow-[0_0_10px_rgba(201,168,76,0.2)]" : "bg-white/5 text-white/50 group-hover:bg-[#c9a84c]/20 group-hover:text-[#c9a84c]"
                      }`}>
                        <Icon size={15} className={childActive ? "" : "group-hover:scale-110 transition-transform duration-300"} />
                      </div>
                    )}
                    <span className="relative z-10">{item.label}</span>
                    <ChevronDown size={14} className="relative z-10 ml-auto -rotate-90 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#c9a84c]" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MOBILE ACCORDION ITEM ────────────────────────────────────────────────────

function MobileAccordionItem({ item, onClose, pathname }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const isActive = hasChildren
    ? item.children.some((c) => pathname === c.href || pathname?.startsWith(`${c.href}/`))
    : pathname === item.href || pathname?.startsWith(`${item.href}/`);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={`flex items-center justify-between py-3.5 px-5 border-b border-white/10 text-sm font-semibold tracking-wide transition-colors ${item.isHighlight
            ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
            : isActive
              ? "text-white bg-white/10"
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
        className={`w-full flex items-center justify-between py-3.5 px-5 text-sm font-semibold transition-colors tracking-wide ${isActive ? "text-white bg-white/10" : "text-white/90 hover:text-white hover:bg-white/10"
          }`}
        aria-expanded={open}
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
                const childActive = pathname === child.href || pathname?.startsWith(`${child.href}/`);
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 py-2.5 px-4 rounded-lg transition-colors text-sm font-medium ${childActive ? "text-white bg-white/10" : "text-white/75 hover:text-white hover:bg-white/10"
                      }`}
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
  const pathname = usePathname();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header className="w-full font-sans">
        {/* ───── LAYER 1: ELITE UTILITY STRIP ───── */}
        <div className="bg-[#020617] text-slate-300 py-1.5 border-b border-white/5 relative z-50">
          <div className="container mx-auto px-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
            <div className="flex items-center gap-5">
              <a href="tel:06111295" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors group">
                <Phone size={11} className="text-[#c9a84c] group-hover:animate-bounce" /> 06111-295xxx
              </a>
              <a href="mailto:info@ncechandi.ac.in" className="hidden md:flex items-center gap-2 hover:text-white transition-colors group">
                <Mail size={11} className="text-[#c9a84c] group-hover:scale-110 transition-transform" /> info@ncechandi.ac.in
              </a>
              <a href="tel:06111295" className="sm:hidden flex items-center gap-2 text-[#c9a84c]">
                <Phone size={11} /> 06111-295xxx
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3 mr-2 opacity-80">
                {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="hover:text-[#c9a84c] hover:scale-110 transition-all duration-300">
                    <Icon size={12} />
                  </a>
                ))}
              </div>
              <div className="hidden lg:block w-px h-3 bg-white/20" />
              <button onClick={() => setLang(l => l === "EN" ? "HI" : "EN")} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Globe size={11} className="text-[#c9a84c]" /> {lang}
              </button>
              <div className="w-px h-3 bg-white/20" />
              <Link href="/login" className="flex items-center gap-1.5 text-[#c9a84c] hover:text-white transition-colors">
                <LogIn size={11} /> FACULTY LOGIN
              </Link>
            </div>
          </div>
        </div>

        {/* ───── LAYER 2: GRAND BRANDING HEADER ───── */}
        <div className="bg-white relative z-40 overflow-hidden border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] py-2 md:py-3 lg:py-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.015)_100%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="flex items-center justify-between gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/nce-logo.png"
                  alt="NCE Logo"
                  width={84} height={84}
                  className="w-14 h-14 md:w-20 md:h-20 lg:w-[84px] lg:h-[84px] object-contain"
                  priority
                  unoptimized
                />
              </div>

              <div className="flex-1 text-center flex flex-col items-center justify-center space-y-0.5 md:space-y-1">
                <h1 className="font-playfair text-[16px] sm:text-xl md:text-2xl lg:text-[32px] font-black text-[#001E36] uppercase tracking-tight leading-none drop-shadow-sm">
                  Nalanda College of Engineering
                </h1>
                <h2 className="font-playfair text-[11px] sm:text-[13px] md:text-base lg:text-xl font-bold text-[#b91c1c] tracking-wide leading-tight drop-shadow-sm mt-0.5 border-b-2 border-[#b91c1c]/20 pb-0.5 px-3 inline-block">
                  नालंदा अभियंत्रण महाविद्यालय
                </h2>
                <div className="flex items-center gap-2 mt-1 md:mt-1.5 opacity-80 pt-0.5">
                  <div className="h-px w-6 md:w-12 bg-gradient-to-r from-transparent to-slate-400" />
                  <p className="text-[8.5px] md:text-[10px] lg:text-[11px] text-[#001E36] font-bold uppercase tracking-[0.1em] md:tracking-[0.15em]">
                    Govt. of Bihar &nbsp;|&nbsp; AICTE Approved
                  </p>
                  <div className="h-px w-6 md:w-12 bg-gradient-to-l from-transparent to-slate-400" />
                </div>
              </div>

              <div className="flex-shrink-0">
                <Image
                  src="/images/bihar-logo.png"
                  alt="Bihar Govt Logo"
                  width={84} height={84}
                  className="w-14 h-14 md:w-20 md:h-20 lg:w-[84px] lg:h-[84px] object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* ───── MAIN NAV (HYPER-PREMIUM STICKY BAR) ───── */}
      <nav className="sticky top-0 z-50 bg-[#001E36]/95 backdrop-blur-2xl border-y border-white/10 shadow-[0_10px_40px_rgba(0,30,54,0.15)] transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-12 md:h-14">

            <div className="hidden lg:flex items-center w-full justify-center gap-1 xl:gap-2 relative">
              {NAV_ITEMS.map((item) => {
                if (item.isHighlight) {
                  const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`ml-4 relative group overflow-hidden flex items-center gap-1.5 px-6 py-2 rounded-full text-[11px] lg:text-[12px] font-black uppercase tracking-[0.15em] transition-all duration-500 shadow-[0_5px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_25px_rgba(201,168,76,0.6)] hover:-translate-y-0.5 border border-[#f3e198]/50 ${
                        active 
                          ? "bg-gradient-to-r from-[#eecf6d] via-[#ffffff] to-[#eecf6d] text-[#001E36] bg-[length:200%_auto]" 
                          : "bg-gradient-to-r from-[#c9a84c] via-[#f3e198] to-[#c9a84c] text-[#001E36] bg-[length:200%_auto] hover:bg-right"
                      }`}
                    >
                      {/* Glass/Shine overlay */}
                      <span className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none" />
                      <Briefcase size={13} className="relative z-10" />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  );
                }
                if (item.children) {
                  return <DesktopDropdown key={item.label} label={item.label} children={item.children} pathname={pathname} />;
                }
                return <DesktopNavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href || pathname?.startsWith(`${item.href}/`)} />;
              })}
            </div>

            <div className="lg:hidden flex items-center justify-between w-full">
              <Link href="/" className="text-white font-black text-base md:text-lg tracking-widest uppercase font-playfair flex items-center gap-2 drop-shadow-md">
                <span className="text-[#c9a84c]">|</span> NCE
              </Link>
              <button
                onClick={() => setDrawerOpen(true)}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-sm focus:ring-2 ring-[#c9a84c]"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ───── NEWS TICKER (ADVANCED LIVE TICKER) ───── */}
      <div className="bg-white border-b border-slate-200 flex items-center overflow-hidden h-8 md:h-9 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] relative z-30">
        <div className="shrink-0 bg-[#001E36] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] px-4 md:px-5 h-full flex items-center justify-center relative shadow-[5px_0_15px_rgba(0,0,0,0.1)] z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          <span className="text-[#c9a84c]">LIVE</span> &nbsp;UPDATES
        </div>
        <div className="flex-1 overflow-hidden relative h-full bg-slate-50/50">
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="marquee-track inline-flex items-center h-full gap-0">
            {[...TICKER_NEWS, ...TICKER_NEWS].map((news, i) => (
              <span key={i} className="inline-flex items-center text-[#001E36] text-[11px] md:text-[12px] font-semibold tracking-wide whitespace-nowrap px-8">
                <span className="text-[#c9a84c] mr-2 font-black text-sm leading-none">•</span>
                {news}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* ───── MOBILE DRAWER ───── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />

            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[380px] z-[70] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)] bg-[#001E36] overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 bg-white/5 backdrop-blur-md relative z-10">
                <div>
                  <h2 className="font-playfair text-white font-black text-2xl tracking-wide">NCE</h2>
                  <p className="text-[#c9a84c] text-[9px] font-bold tracking-[0.25em] uppercase mt-1">Directory</p>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#c9a84c] hover:text-[#001E36] text-white transition-all duration-300 shadow-lg"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain py-2 relative z-10">
                {NAV_ITEMS.map((item) => (
                  <MobileAccordionItem
                    key={item.label}
                    item={item}
                    onClose={() => setDrawerOpen(false)}
                    pathname={pathname}
                  />
                ))}
              </div>

              <div className="px-6 py-6 border-t border-white/10 bg-white/5 relative z-10">
                <Link
                  href="/login"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#c9a84c] to-[#a88a38] text-white font-black tracking-[0.1em] uppercase text-xs py-4 rounded-xl shadow-[0_10px_20px_rgba(201,168,76,0.3)] transition-transform hover:-translate-y-1"
                >
                  <LogIn size={15} /> Faculty Login
                </Link>
                <div className="flex items-center justify-center gap-6 mt-6">
                  {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-white/40 hover:text-[#c9a84c] hover:scale-125 transition-all duration-300">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-center text-[9px] text-white/30 mt-6 font-bold tracking-[0.2em] uppercase">
                  © 2026 NCE Built by T&P Cell
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}