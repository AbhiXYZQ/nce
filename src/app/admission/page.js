"use client";

import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { ChevronRight, FileCheck, Landmark, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdmissionPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageShell
      accentLabel="Join Us"
      title="Admission Process"
      subtitle="Your pathway to Nalanda College of Engineering. Admission primarily operates through the counseling conducted by the BCECE Board based on JEE Main / BCECE scores."
      bgImage="https://images.unsplash.com/photo-1523050335456-c38447d0d93f?q=80&w=2070&auto=format&fit=crop"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admission" }]}
    >
      <div className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-[-5%] w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-[#003366] mb-6">How to get into NCE?</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Admission to the B.Tech. programs at NCE is exclusively processed through the centralized
              counselling conducted by the <span className="font-bold text-slate-800">Bihar Combined Entrance Competitive Examination Board (BCECEB)</span>.
              There are two primary routes available for students.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">

            {/* Main Route: JEE Main */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border-2 border-emerald-500/20 shadow-2xl shadow-emerald-900/5 relative overflow-hidden group hover:border-emerald-500/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm uppercase tracking-wider mb-6 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Main Route 🔥
              </div>

              <h3 className="text-3xl font-playfair font-black text-slate-900 mb-4 relative z-10">JEE Main → UGEAC</h3>
              <p className="text-slate-600 mb-8 relative z-10 leading-relaxed font-medium">
                The primary and most important method to secure admission. The majority of B.Tech. seats across all branches at NCE are filled through this route.
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 shrink-0 shadow-sm text-slate-600 font-bold">1</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">JEE Main Examination</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">Appear and qualify in the JEE Main exam conducted by NTA at the national level.</p>
                  </div>
                </div>

                <div className="pl-5"><div className="w-0.5 h-6 bg-slate-200" /></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 shrink-0 shadow-sm text-slate-600 font-bold">2</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">UGEAC Registration</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">Register for Under Graduate Engineering Admission Counseling (UGEAC) on the BCECEB official portal using your JEE Main score.</p>
                  </div>
                </div>

                <div className="pl-5"><div className="w-0.5 h-6 bg-slate-200" /></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-200 shrink-0 shadow-sm text-emerald-600 font-bold">3</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">Choice Filling & Allotment</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed"><strong className="text-slate-700">Fill NCE Chandi</strong> as your top preference. Based on your JEE rank, seats will be allotted.</p>
                  </div>
                </div>

                <div className="pl-5"><div className="w-0.5 h-6 bg-slate-200" /></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200 shrink-0 shadow-sm text-blue-600 font-bold">4</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">Admission at NCE</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">Report to the college with your original documents and allotment letter to confirm your admission.</p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Alternative Route: BCECE Exam */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border-2 border-amber-500/20 shadow-2xl shadow-amber-900/5 relative overflow-hidden group hover:border-amber-500/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-bold text-sm uppercase tracking-wider mb-6 relative z-10">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Alternative Route
              </div>

              <h3 className="text-3xl font-playfair font-black text-slate-900 mb-4 relative z-10">BCECE Exam</h3>
              <p className="text-slate-600 mb-8 relative z-10 leading-relaxed font-medium">
                The state-level entrance examination. Only the seats left vacant after the UGEAC counselling process are filled via this specific route.
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 shrink-0 shadow-sm text-slate-600 font-bold">1</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">BCECE Examination</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">Apply and appear for the Bihar Combined Entrance Competitive Examination (BCECE) for engineering.</p>
                  </div>
                </div>

                <div className="pl-5"><div className="w-0.5 h-6 bg-slate-200" /></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 shrink-0 shadow-sm text-slate-600 font-bold">2</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">Rank Card & Registration</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">Obtain your BCECE Rank and register for the exclusive BCECE counselling rounds.</p>
                  </div>
                </div>

                <div className="pl-5"><div className="w-0.5 h-6 bg-slate-200" /></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 shrink-0 shadow-sm text-amber-600 font-bold">3</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">Counselling & Allotment</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">Fill choices based on available vacant seats. Select NCE Chandi and secure your allotment.</p>
                  </div>
                </div>

                <div className="pl-5"><div className="w-0.5 h-6 bg-slate-200" /></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200 shrink-0 shadow-sm text-blue-600 font-bold">4</div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">Final Admission</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">Present yourself at the college premises with the allotment letter and required verified documents.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Bottom Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-blue-900/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Documents required on Reporting</h4>
                <p className="text-sm text-slate-500 mt-1">10th/12th Marksheets, CLC/SLC, Caste Certificate, Domicile, Allotment Letter, Aadhar, Photos.</p>
              </div>
            </div>
            <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="shrink-0 bg-[#003366] hover:bg-[#002244] text-white px-8 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#003366]/20">
              Visit BCECEB Website <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
}
