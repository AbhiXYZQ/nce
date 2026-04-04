"use client";

import PageShell from "@/components/PageShell";
import { 
  Building2, LineChart, Cpu, Mail, Phone, 
  CheckCircle2, ArrowUpRight, GraduationCap, 
  TrendingUp, Users, Target, Briefcase, 
  Newspaper, Globe, Award
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function Counter({ target, suffix, prefix = "" }) {
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
      {prefix}{count}{suffix}
    </span>
  );
}
const RECRUITERS = [
  { name: "Blinkit", category: "Product / Logistics", domain: "blinkit.com", logo: "/images/company_logos/blinkit.png" },
  { name: "Zomato", category: "Product / Logistics", domain: "zomato.com", logo: "/images/company_logos/Zomato.png" },
  { name: "SIMS", category: "IT / Services", domain: "sims.com", logo: "/images/company_logos/sims.png" },
  { name: "Indian Oil", category: "Public Sector (PSU)", domain: "iocl.com", logo: "/images/company_logos/indianOil.png" },
  { name: "MRF", category: "Manufacturing / Core", domain: "mrftyres.com", logo: "/images/company_logos/mrf.png" },
  { name: "DRDO", category: "Research / Govt", domain: "drdo.gov.in", logo: "/images/company_logos/drdo.png" },
  { name: "Glowlogics", category: "IT / Services", domain: "glowlogics.com", logo: "/images/company_logos/glowlogics.png" }
];

export default function PlacementPage() {
  return (
    <PageShell
      accentLabel="T&P Cell"
      title="Bridging Talent with Global Opportunity"
      subtitle="The Training & Placement Cell at NCE Chandi is dedicated to transforming students into industry-ready leaders through rigorous training, internship facilitation, and strategic corporate partnerships."
      bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
      patternType="admission"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Placement" }]}
      quickLinks={[
        { label: "Placement Reports", href: "/notices" },
        { label: "Training Modules", href: "/academics" },
        { label: "Our Partners", href: "#recruiters" },
      ]}
      sections={[
        {
          title: "Executive Placement Statistics",
          cards: [
            {
              title: "Highest Package",
              kicker: "Elite Milestone",
              text: "A testament to our high academic standards and student competence in national competitions.",
              points: ["LPA: 12.5+", "Domain: Software Engineering", "Recruiter: Top Product MNC"]
            },
            {
              title: "Placement Rate",
              kicker: "Consistency",
              text: "Maintained a strong upward trajectory in total offers even during global economic shifts.",
              points: ["Success Rate: 85%+", "Total Offers: 180+", "Companies Visited: 45+"]
            },
            {
              title: "Industrial Training",
              kicker: "Exposure",
              text: "Mandatory internships and industrial visits at premier organizations like DRDO, BHEL, and IOCL.",
              points: ["Winter Internships", "Summer Projects", "Live Industry Case-Studies"]
            },
            {
              title: "Average CTC",
              kicker: "Benchmark",
              text: "Competitive entry-level packages reflecting the quality of our engineering talent.",
              points: ["LPA: 4.8 - 6.2 (Avg)", "Median: 5.5 LPA", "Core sector growth: 22%"]
            }
          ]
        },
        {
          title: "Our Selection Process",
          cards: [
            {
              title: "Phase 1: Registration",
              kicker: "Onboarding",
              text: "Companies register via our T&P portal and share Job Descriptions (JD) and Eligibility Criteria.",
              points: ["Online Portal Access", "Resume Filtering", "Batch Selection"]
            },
            {
              title: "Phase 2: Pre-Placement Talk",
              kicker: "Interaction",
              text: "Organizations interact with students, discussing corporate culture, roles, and growth paths.",
              points: ["Offline/Online PPT", "Q&A Sessions", "Direct Interaction"]
            },
            {
              title: "Phase 3: Assessments",
              kicker: "Evaluation",
              text: "Rigorous testing including Aptitude, Coding rounds, and Technical Assessments.",
              points: ["Mock Tests", "Labs Access", "Controlled Environment"]
            },
            {
              title: "Phase 4: Interviews",
              kicker: "Selection",
              text: "Final rounds of Technical and HR interviews to finalize the future leaders of the industry.",
              points: ["Personal Interviews", "Group Discussions", "Final Offer Letters"]
            }
          ]
        },
        {
          title: "Top Recruiting Partners",
          id: "recruiters",
          customContent: (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {RECRUITERS.map((r, i) => {
                const isIT = r.category.includes("IT") || r.category.includes("Software") || r.category.includes("Product");
                const isPSU = r.category.includes("Public") || r.category.includes("Research");
                
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-2xl h-48 md:h-56 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 ${
                      isIT ? "bg-blue-500" : isPSU ? "bg-red-500" : "bg-emerald-500"
                    }`} />
                    
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 w-full">
                       <div className="relative w-16 h-16 md:w-20 md:h-20 transition-all duration-500 opacity-60 group-hover:opacity-100">
                          <img 
                            src={r.logo || `https://logo.clearbit.com/${r.domain}`} 
                            alt={r.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div className="hidden absolute inset-0 flex items-center justify-center">
                             <Award size={32} className="text-slate-200" />
                          </div>
                       </div>
                      <span className="text-sm md:text-base font-black text-slate-800 group-hover:text-[#003366] transition-colors tracking-tight leading-tight max-w-[140px]">
                        {r.name}
                      </span>
                    </div>
                    
                    <div className={`mt-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border transition-colors ${
                       isIT 
                        ? "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white" 
                        : isPSU 
                          ? "bg-red-50 text-red-600 border-red-100 group-hover:bg-red-600 group-hover:text-white"
                          : "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white"
                    }`}>
                      {r.category}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )
        }
      ]}
    >
      {/* Editorial TPO Message */}
      <div id="message" className="py-24">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative border border-white/5">
           {/* Abstract Background Decor */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c]/10 rounded-full blur-[120px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative">
                  <div className="absolute inset-0 bg-[#c9a84c] rounded-[2.5rem] rotate-6 scale-95 opacity-20" />
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                    <Image 
                      src="/images/faculties/avinash_Machenical.JPG" 
                      fill 
                      alt="TPO Officer" 
                      className="object-cover" 
                      unoptimized 
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center p-4">
                     <div className="text-center">
                        <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Industrial</p>
                        <p className="text-xl font-bold text-[#c9a84c]">Relations</p>
                     </div>
                  </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-3 mb-6 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                   <Target size={18} className="text-[#c9a84c]" />
                   <span className="text-[10px] font-black text-white uppercase tracking-[0.25em]">Leadership Note</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-playfair font-black text-white mb-8 leading-[1.1] tracking-tight">
                  "Empowering minds to excel in the <span className="text-[#c9a84c]">competitive global</span> landscape."
                </h2>
                
                <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-12 italic border-l-2 border-[#c9a84c]/40 pl-8">
                  <p>
                    At Nalanda College of Engineering, we don't just provide degrees; we shape careers. Our mission is to bridge the gap between academic theory and industry reality. We work tirelessly to ensure our students are not only technically proficient but also possess the soft skills and ethical grounding required by the world's most prestigious organizations.
                  </p>
                  <p>
                    I cordially invite industry leaders to collaborate with us and witness first-hand the brilliance and dedication of our students.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
                  <div>
                    <h4 className="text-2xl font-black text-white font-playfair tracking-tight">Prof. Avinash Kumar</h4>
                    <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.2em] mt-2">Training & Placement Officer (TPO)</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                     <a href="mailto:tpo@ncechandi.ac.in" className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 hover:bg-[#c9a84c] text-white hover:text-slate-900 transition-all duration-300 border border-white/10">
                        <Mail size={20} />
                     </a>
                     <a href="tel:06111295" className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 hover:bg-white text-white hover:text-slate-900 transition-all duration-300 border border-white/10">
                        <Phone size={20} />
                     </a>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </PageShell>
  );
}
