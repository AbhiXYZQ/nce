"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook, Youtube, Twitter, Linkedin,
  MapPin, Phone, Mail, Globe, ArrowRight, Clock,
  Building2, GraduationCap, BookOpen, Briefcase, ShieldCheck,
} from "lucide-react";

// Robust staggering and fade up animation variants
const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 24,
      mass: 0.8,
    },
  },
};

const scaleUpItem = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // trigger slightly early when scrolling down
      className="bg-[#001a33] text-white/80 border-t border-white/10 relative overflow-hidden font-sans"
    >
      {/* Decorative subtle background glows for premium feel */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#c9a84c]/5 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-white/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 py-14 relative z-10">
        <motion.div variants={fadeUpContainer} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand + socials */}
          <motion.div variants={fadeUpItem} className="xl:col-span-4">
            <p className="font-playfair text-4xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Building2 className="text-[#c9a84c]" size={32} /> NCE
            </p>
            <p className="text-sm text-white/65 mt-5 leading-relaxed max-w-sm">
              Nalanda College of Engineering — Government Engineering College under Dept. of Science & Technology, Govt. of Bihar. AICTE Approved.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <motion.div whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)" }} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg transition-all duration-300">
                <p className="text-xs font-bold text-white flex items-center gap-1.5"><GraduationCap size={14} className="text-[#c9a84c]"/> Academic</p>
                <p className="text-xs text-white/50 mt-1.5 leading-snug">Calendar, syllabus & exams</p>
                <Link className="mt-4 w-fit inline-flex items-center gap-1.5 text-xs font-semibold text-[#c9a84c] hover:text-white transition-colors group" href="/academics">
                  Explore <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)" }} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg transition-all duration-300">
                <p className="text-xs font-bold text-white flex items-center gap-1.5"><Briefcase size={14} className="text-[#c9a84c]"/> Placement</p>
                <p className="text-xs text-white/50 mt-1.5 leading-snug">T&P cell and recruiters</p>
                <Link className="mt-4 w-fit inline-flex items-center gap-1.5 text-xs font-semibold text-[#c9a84c] hover:text-white transition-colors group" href="/placement">
                  Explore <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  variants={scaleUpItem}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-[#c9a84c] hover:text-[#001122] text-white/70 flex items-center justify-center shadow-lg transition-colors border border-white/10"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links columns mapping */}
          {[
            {
              title: "Institute",
              links: [
                { label: "About", href: "/about" },
                { label: "Vision & Mission", href: "/vision" },
                { label: "Administration", href: "/administration" },
                { label: "Faculty", href: "/faculty" },
                { label: "Principal's Desk", href: "/principal" }
              ]
            },
            {
              title: "Academics",
              links: [
                { label: "Programs Offered", href: "/academics" },
                { label: "Academic Calendar", href: "/calendar" },
                { label: "Syllabus", href: "/syllabus" },
                { label: "Examination", href: "/exam" },
                { label: "Results", href: "/results" },
                { label: "Research", href: "/research" }
              ]
            },
            {
              title: "Student Corner",
              links: [
                { label: "Student Login", href: "/student-login" },
                { label: "Clubs & Activities", href: "/clubs" },
                { label: "Scholarships", href: "/scholarships" },
                { label: "Grievance Cell", href: "/grievance" },
                { label: "Anti-Ragging", href: "/anti-ragging" },
                { label: "Notices", href: "/notices" }
              ]
            }
          ].map((col, cIdx) => (
            <motion.div variants={fadeUpItem} key={cIdx} className="xl:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#c9a84c] animate-pulse"></span> {col.title}
              </p>
              <div className="grid gap-3.5 text-sm">
                {col.links.map((lnk) => (
                  <Link key={lnk.href} className="text-white/60 hover:text-white flex items-center gap-2 group transition-colors" href={lnk.href}>
                    <span className="w-0 h-px bg-[#c9a84c] transition-all duration-300 group-hover:w-2"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{lnk.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact Details */}
          <motion.div variants={fadeUpItem} className="xl:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#c9a84c] animate-pulse"></span> Contact
            </p>
            <div className="grid gap-4 text-sm">
              <div className="flex items-start gap-4 group cursor-default">
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#c9a84c] group-hover:text-[#001122] transition-colors border border-white/5">
                  <MapPin size={16} />
                </div>
                <p className="text-white/65 pt-1.5 leading-snug group-hover:text-white transition-colors">
                  Nalanda College of Engineering<br/>
                  Chandi – Jalalpur Road, Gokhulpur<br/>
                  Chandi, Nalanda, Bihar – 803108
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#c9a84c] group-hover:text-[#001122] transition-colors border border-white/5">
                  <Phone size={16} />
                </div>
                <a className="text-white/65 hover:text-white transition-colors" href="tel:06111295">06111-295xxx</a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#c9a84c] group-hover:text-[#001122] transition-colors border border-white/5">
                  <Mail size={16} />
                </div>
                <a className="text-white/65 hover:text-white transition-colors" href="mailto:example@ncechandi.ac.in">example@ncechandi.ac.in</a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Departments chips block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="mt-14 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20">
              <BookOpen size={18} className="text-[#c9a84c]" />
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c]">Explore Departments</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: "CSE", href: "/departments/cse" },
                { label: "AI & ML", href: "/departments/aiml" },
                { label: "Civil", href: "/departments/ce" },
                { label: "Mechanical", href: "/departments/me" },
                { label: "Aeronautical", href: "/departments/aero" },
                { label: "EEE", href: "/departments/eee" },
              ].map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#c9a84c] border border-white/10 hover:border-transparent text-white/80 hover:text-[#001122] transition-all text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  {d.label}
                </Link>
              ))}
              <Link
                href="/departments"
                className="px-6 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#001122] border border-white/20 hover:border-transparent transition-all text-sm font-bold flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                All Explore <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <p className="text-xs text-white/50 tracking-wider">© {new Date().getFullYear()} Nalanda College of Engineering. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-wider">
            <Link className="inline-flex items-center gap-2 text-white/60 hover:text-[#c9a84c] transition-transform hover:-translate-y-0.5" href="/placement">
               T&P Cell
            </Link>
            <Link className="inline-flex items-center gap-2 text-white/60 hover:text-[#c9a84c] transition-transform hover:-translate-y-0.5" href="/anti-ragging">
               Anti-Ragging
            </Link>
            <Link className="inline-flex items-center gap-2 text-white/60 hover:text-[#c9a84c] transition-transform hover:-translate-y-0.5" href="/grievance">
               Grievance
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
