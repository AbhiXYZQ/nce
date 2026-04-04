"use client";

import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Quote, CheckCircle2, Award, BookOpen } from "lucide-react";
import Image from "next/image";

export default function PrincipalDeskPage() {
  return (
    <PageShell
      accentLabel="Administration"
      title="Principal's Desk"
      subtitle="A message from the Principal on fostering excellence, innovation, and leadership."
      bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "Principal's Desk" }]}
    >
      <section className="py-20 bg-slate-50 overflow-hidden relative">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-200/50 to-transparent pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

              {/* Left Column: Photo & Details Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full lg:w-1/3 shrink-0"
              >
                <div className="sticky top-32 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-blue-900/5 overflow-hidden group">
                  <div className="relative aspect-[4/5] w-full bg-slate-100 overflow-hidden">
                    {/* Placeholder for Principal Photo (Professional Portrait) */}
                    <Image
                      src="/images/faculties/principal.png"
                      alt="Dr Gopal Nandan"
                      fill
                      className="object-cover object-[center_top] filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/90 via-[#001a33]/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-2xl font-playfair font-bold text-white mb-1">Dr Gopal Nandan</p>
                      <p className="text-sm font-medium text-blue-200">Principal</p>
                      <p className="text-xs text-slate-300 mt-0.5">Nalanda College of Engineering</p>
                    </div>
                  </div>

                  <div className="p-6 bg-white shrink-0">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                          <Award size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Qualification</p>
                          <p className="text-sm font-bold text-slate-800">Ph.D.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Experience</p>
                          <p className="text-sm font-bold text-slate-800">Academic Leadership</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-2/3"
              >
                <div className="relative">
                  <Quote size={80} className="absolute -top-6 -left-8 text-slate-200/50 -rotate-12" />

                  <div className="relative z-10 pt-4">
                    <h2 className="text-3xl lg:text-4xl font-playfair font-extrabold text-[#003366] mb-8 leading-tight">
                      Message from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-yellow-600">Principal</span>
                    </h2>

                    <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed text-justify relative z-10">
                      <p className="font-medium text-slate-800 text-lg">
                        My Dear Students,
                      </p>
                      <p>
                        Welcome to Nalanda College of Engineering (NCE). Our aim is to provide you the best quality education. In fact, the education is hidden in the student itself, we just encourage them to explore and enjoy the learning.
                      </p>
                      <p>
                        Increasing diversity in needs and globalization have generated and enhanced the demand for competitive skills. So, the main purpose of Nalanda College of Engineering (NCE) is to provide such a platform where the needs can be fulfilled.
                      </p>
                      <p>
                        Nalanda College of Engineering (NCE) motivates the students to develop leadership skills. We encourage them to trust in themselves and achieve great heights. In-fact, they can do everything if they believe in their abilities.
                      </p>
                    </div>

                    <div className="mt-12 flex items-end gap-6 border-t border-slate-200 pt-8">
                      <div>
                        <p className="text-sm text-slate-500 font-medium mb-1">With Regards,</p>
                        <p className="text-2xl font-playfair font-extrabold text-[#003366]">Dr Gopal Nandan</p>
                        <p className="text-sm text-[#c9a84c] font-bold tracking-wide uppercase mt-1">Principal, Nce</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlight Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mt-16">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <BookOpen size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Quality Education</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Encouraging an environment where students explore, enjoy learning, and uncover their hidden potential.</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <Award size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Leadership & Skills</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Providing a platform to develop competitive skills, self-belief, and leadership capabilities.</p>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
