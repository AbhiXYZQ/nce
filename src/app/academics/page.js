"use client";

import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Cpu, Brain, Building2, Wrench, Plane, Zap, GraduationCap, ArrowRight, Microchip, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BTECH_PROGRAMS = [
  { name: "Computer Science & Engineering", seats: 60, icon: Cpu, href: "/departments/cse", color: "from-blue-500 to-cyan-500", desc: "Software, Systems, Computing" },
  { name: "AI & Machine Learning", seats: 60, icon: Brain, href: "/departments/aiml", color: "from-purple-500 to-indigo-500", desc: "Neural Networks, Deep Learning, Data Science" },
  { name: "Civil Engineering", seats: 60, icon: Building2, href: "/departments/ce", color: "from-emerald-500 to-teal-500", desc: "Structural, Environmental, Geotechnical" },
  { name: "Mechanical Engineering", seats: 60, icon: Wrench, href: "/departments/me", color: "from-amber-500 to-orange-500", desc: "Design, Thermodynamics, Mfg" },
  { name: "Aeronautical Engineering", seats: 60, icon: Plane, href: "/departments/aero", color: "from-sky-500 to-blue-600", desc: "Aerodynamics, Propulsion, Space Tech" },
  { name: "Electrical & Electronics Engineering", seats: 60, icon: Zap, href: "/departments/eee", color: "from-yellow-500 to-amber-600", desc: "Power Systems, Core Electronics" },
];

const MTECH_PROGRAMS = [
  { name: "Computer Science & Engineering", seats: 18, icon: Microchip, href: "/departments/mtech-cse", desc: "Advanced Computing & Systems" },
  { name: "Power Systems", seats: 18, icon: Lightbulb, href: "/departments/mtech-ps", desc: "Advanced Electrical Grids & Machinery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AcademicsPage() {
  return (
    <PageShell
      accentLabel="Academics"
      title="Programs Offered"
      subtitle="Discover rigorous, AICTE-approved undergraduate and postgraduate programs designed to build tomorrow's technology leaders."
      bgImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }, { label: "Programs Offered" }]}
      quickLinks={[
        { label: "Academic Calendar", href: "/calendar" },
        { label: "Syllabus", href: "/syllabus" },
        { label: "Examination", href: "/exam" },
      ]}
      sections={[
        {
          title: "B.Tech Programs",
          cards: BTECH_PROGRAMS.map(prog => ({
            title: prog.name,
            kicker: "Bachelor of Technology",
            text: prog.desc,
            href: prog.href,
            points: [`Approved Intake: ${prog.seats} Seats`, "4-Year Full-Time", "BEU Affiliated"]
          }))
        },
        {
          title: "M.Tech Programs",
          cards: MTECH_PROGRAMS.map(prog => ({
            title: prog.name,
            kicker: "Master of Technology",
            text: prog.desc,
            href: prog.href,
            points: [`Approved Intake: ${prog.seats} Seats`, "2-Year Specialized Research"]
          }))
        }
      ]}
    >
      <div className="py-12 bg-slate-50/30 rounded-3xl p-8 border border-slate-100 mb-12">
        <h3 className="text-2xl font-playfair font-black text-[#003366] mb-4">Academic Excellence</h3>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          At Nalanda College of Engineering, our academic programs are designed to provide a perfect balance between theoretical foundations and practical applications. With state-of-the-art laboratories and a curriculum aligned with industry standards, we ensure our graduates are ready for the challenges of the modern world.
        </p>
      </div>
    </PageShell>
  );
}
