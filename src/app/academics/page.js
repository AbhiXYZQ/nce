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
    >
      <div className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          {/* B.Tech Section */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-24">
            <div className="flex items-center gap-4 mb-2">
              <span className="w-12 h-1 bg-[#003366] rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Undergraduate</p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-black text-slate-900 mb-4">
              B.Tech Programs
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              4-year full-time degree programs equipping students with fundamental knowledge, hands-on experience, and industry relevance. All programs are affiliated to Bihar Engineering University, Patna.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BTECH_PROGRAMS.map((prog, idx) => (
                <Link key={idx} href={prog.href} className="block group h-full focus:outline-none focus:ring-4 focus:ring-blue-500/20 rounded-3xl">
                  <motion.div 
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-3xl border border-slate-200/60 p-6 flex flex-col h-full shadow-lg shadow-blue-900/5 relative overflow-hidden"
                  >
                    {/* Subtle Gradient Hover bg */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${prog.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color} p-[1px] relative`}>
                        <div className="absolute inset-0 bg-white rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-90 mix-blend-multiply">
                          <prog.icon size={24} className="text-slate-800" />
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                         <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Intake</span>
                         <span className="text-2xl font-black text-slate-800 mt-1">{prog.seats}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 leading-tight mb-3 group-hover:text-[#003366] transition-colors">{prog.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{prog.desc}</p>

                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#c9a84c] group-hover:text-[#003366] transition-colors">
                      Explore Department <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* M.Tech Section */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-2">
              <span className="w-12 h-1 bg-[#b91c1c] rounded-full"></span>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b91c1c]">Postgraduate</p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-black text-slate-900 mb-4">
              M.Tech Programs
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              2-year full-time master's programs focused on advanced research, highly specialized technical training, and industry-ready leadership skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MTECH_PROGRAMS.map((prog, idx) => (
                <Link key={idx} href={prog.href} className="block group cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/20 rounded-3xl">
                  <div className="bg-white rounded-3xl border border-slate-200/60 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-lg shadow-blue-900/5 hover:shadow-xl transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                       <prog.icon size={120} />
                    </div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                       <prog.icon size={28} />
                    </div>
                    <div className="relative z-10 flex-1 text-center sm:text-left">
                       <div className="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Intake: {prog.seats} Seats</div>
                       <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-2 group-hover:text-[#b91c1c] transition-colors">{prog.name}</h3>
                       <p className="text-sm text-slate-500 leading-relaxed mb-4">{prog.desc}</p>
                       
                       <div className="inline-flex items-center gap-2 text-sm font-bold text-[#003366] group-hover:text-[#c9a84c] transition-colors relative z-20">
                          View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
}
