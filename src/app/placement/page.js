"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, LineChart, Cpu, Mail, Phone, CheckCircle2, ChevronRight, Newspaper, ArrowUpRight, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
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
    <span ref={ref} className="tabular-nums font-black tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

const recruiters = [
  "TCS", "Infosys", "Wipro", "HCL", "Cognizant",
  "Tech Mahindra", "L&T", "BHEL", "ONGC", "BSNL",
  "Accenture", "IBM", "Capgemini", "Amazon", "DRDO"
];

export default function PlacementPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#003366] selection:text-white">
      
      {/* ─── EXECUTIVE HERO SECTION ─── */}
      <section className="relative w-full overflow-hidden bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl pt-16 pb-32 md:pt-24 md:pb-40 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex-1 w-full relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#003366] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
              Training & Placement Cell
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#001122] tracking-tighter leading-[1.05] mb-6 font-playfair">
              Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0055aa]">Talent</span><br/>
              with Opportunity.
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              We facilitate the transition from academia to professional life. NCE Chandi transforms students into highly capable, industry-ready professionals ready to tackle global challenges.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#message" className="w-full sm:w-auto px-8 py-4 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group">
                Contact the Cell <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link href="/notices" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                View Notices
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full relative"
          >
            {/* Elegant Image Collage / Accent Graphic */}
            <div className="relative w-full aspect-square md:aspect-[4/5] max-w-md mx-auto">
               <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[6px] border-white">
                 <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" fill alt="Students Training" className="object-cover" unoptimized/>
               </div>
               <div className="absolute bottom-10 left-0 w-[60%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl z-30 border-[6px] border-white">
                 <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" fill alt="Corporate Environment" className="object-cover" unoptimized/>
               </div>
               
               {/* Pattern Element */}
               <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(circle, #003366 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(circle, #c9a84c 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATISTICS BANNER (OVERLAPPING) ─── */}
      <section className="relative z-30 -mt-16 md:-mt-20">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative overflow-hidden">
             {/* Decorative line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003366] via-[#c9a84c] to-[#003366]" />
             
             {[
               { val: 150, suf: "+", label: "On-Campus Offers" },
               { val: 30, suf: "+", label: "Placement Drives" },
               { val: 50, suf: "+", label: "Hiring Partners" },
               { val: 400, suf: "+", label: "Students Trained" }
             ].map((stat, i) => (
                <div key={i} className="text-center md:text-left relative flex flex-col justify-center">
                  {i !== 0 && <div className="hidden lg:block absolute left-[-24px] top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200" />}
                  <div className={`text-4xl md:text-5xl font-black text-[#003366] mb-2`}>
                    <Counter target={stat.val} suffix={stat.suf} />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-400">{stat.label}</div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* ─── TRUSTED PARTNERS GRID ─── */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden">
         <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#003366]/5 text-[#003366] text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Network</span>
              <h2 className="text-3xl md:text-5xl font-playfair font-black text-[#001122]">
                Trusted By Top Industry Leaders
              </h2>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {recruiters.map((r, i) => (
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }} 
                   whileInView={{ opacity: 1, y: 0 }} 
                   viewport={{ once: true }} 
                   transition={{ delay: i * 0.05 }}
                   key={i} 
                   className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col items-center justify-center text-center hover:border-[#003366]/30 hover:shadow-xl hover:shadow-[#003366]/5 hover:-translate-y-1 transition-all duration-300 group cursor-default h-28"
                 >
                    <span className="text-lg md:text-xl font-black text-slate-400 group-hover:text-[#003366] tracking-wider transition-colors drop-shadow-sm">
                       {r}
                    </span>
                 </motion.div>
              ))}
           </div>
         </div>
      </section>

      {/* ─── 3 PILLARS: WHY NCE ─── */}
      <section className="py-24 bg-white border-y border-slate-200/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-black text-[#001122] leading-tight mb-4">
              Cultivating the <span className="text-[#c9a84c]">Engineering Elite</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Companies recruit from NCE primarily due to our uncompromising focus on foundational depth, state-of-the-art facilities, and practical problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="group rounded-3xl bg-slate-50 border border-slate-200 p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden">
                <div className="w-14 h-14 bg-[#003366]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#003366]/10 text-[#003366] group-hover:scale-110 transition-transform">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-playfair">Curriculum Excellence</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Rigorous academic standards strictly aligned with Bihar Engineering University, focusing on practical learning and real-world problem-solving skills to build critical thinkers.</p>
             </div>

             <div className="group rounded-3xl bg-slate-50 border border-slate-200 p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden">
                <div className="w-14 h-14 bg-[#c9a84c]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#c9a84c]/20 text-[#be9c40] group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-playfair">Leading Tech Stacks</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Our modern labs and high-speed campus equip students to master the exact tools, architectures, and stacks actively used in the enterprise, from AI to full-stack tech.</p>
             </div>

             <div className="group rounded-3xl bg-slate-50 border border-slate-200 p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-playfair">Top Tier Intellect</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Students admitted are purely the topmost rankers from national exams like JEE Main, ensuring that every batch consists of high-capacity fast learners with extreme agility.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ─── T&P OFFICER MESSAGE (EDITORIAL STYLE) ─── */}
      <section id="message" className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-[3rem] shadow-sm border border-slate-200 p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl rotate-1 group hover:rotate-0 transition-transform duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                fill 
                alt="TPO Officer" 
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                unoptimized
              />
            </div>

            <div className="flex-1 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 mb-4">
                 <Newspaper size={18} className="text-[#c9a84c]" />
                 <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">Official Note</span>
               </div>
               
               <h2 className="text-3xl md:text-5xl font-playfair font-black text-slate-900 mb-8 leading-tight">
                 "Bridging the Gap Between Academia and the Global Industry."
               </h2>
               
               <p className="text-slate-600 leading-relaxed mb-10 text-lg border-l-4 border-slate-200 pl-6">
               At Nalanda College of Engineering, we strongly believe in shaping young minds into highly competent engineering professionals and future innovators. Our highly active T&P cell works relentlessly around the clock. We cordially invite esteemed core companies and IT giants to visit our campus and witness the immense potential of our diligent students.
               </p>

               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-slate-100 pt-8">
                 <div>
                   <h4 className="font-black text-slate-900 text-2xl font-playfair">Prof. Avinash Kumar</h4>
                   <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">Training & Placement Officer</p>
                 </div>
                 
                 <div className="flex items-center gap-4 text-sm font-medium text-slate-600 justify-center lg:justify-end">
                    <a href="mailto:tpo@ncechandi.ac.in" className="hover:text-[#003366] hover:bg-slate-50 transition-colors flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm"><Mail size={18} /></a>
                    <a href="tel:06111295" className="hover:text-[#c9a84c] hover:bg-slate-50 transition-colors flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm"><Phone size={18} /></a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
