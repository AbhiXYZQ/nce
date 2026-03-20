"use client";
import { useState, useEffect, useRef } from "react";
import PageShell from "@/components/PageShell";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";

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

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function Counter({ target, suffix }) {
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
      {count}
      {suffix}
    </span>
  );
}

const placementStats = [
  { value: 12, suffix: " LPA", label: "Highest Package" },
  { value: 92, suffix: "%", label: "Placement Rate" },
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 200, suffix: "+", label: "Hiring Companies" },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "HCL Technologies", "Cognizant",
  "Tech Mahindra", "L&T", "BHEL", "ONGC", "BSNL",
  "Accenture", "IBM", "Capgemini", "NIC", "DRDO",
];

export default function PlacementPage() {
  const placementProcess = [
    {
      title: "Corporate Engagement",
      desc: "We share the talent pool, eligible branches, and the drive calendar.",
    },
    {
      title: "Role & Eligibility",
      desc: "JD, compensation, eligibility, and selection rounds are finalized.",
    },
    {
      title: "Student Registration",
      desc: "Eligible students register and submit resumes through the T&P Cell.",
    },
    {
      title: "Pre-Placement Talk",
      desc: "Company presents role, growth path, and selection roadmap.",
    },
    {
      title: "Assessment & Interviews",
      desc: "Online test, technical rounds, HR round (as per company process).",
    },
    {
      title: "Offer & Onboarding",
      desc: "Offer release, documentation, and joining formalities support.",
    },
  ];

  const trainingRoadmap = [
    {
      title: "Aptitude & Reasoning",
      points: ["Quant + LR practice", "Speed tests", "Daily worksheets"],
    },
    {
      title: "Communication & Soft Skills",
      points: ["GD/PI readiness", "Email & workplace etiquette", "Confidence building"],
    },
    {
      title: "Technical Foundation",
      points: ["Core CS / Core branch fundamentals", "Problem solving", "Mini projects"],
    },
    {
      title: "Resume & LinkedIn",
      points: ["ATS-friendly resume", "Project storytelling", "Profile optimization"],
    },
    {
      title: "Mock Interviews",
      points: ["Tech mock rounds", "HR mock rounds", "Actionable feedback"],
    },
    {
      title: "Industry Exposure",
      points: ["Guest lectures", "Workshops", "Internship guidance"],
    },
  ];

  return (
    <PageShell
      accentLabel="Placements"
      title="Training & Placement Cell"
      subtitle="A dedicated cell that prepares students for careers through training, industry connect, and campus recruitment support."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Training & Placement Cell" }]}
      quickLinks={[
        { label: "For Recruiters", href: "/placement" },
        { label: "For Students", href: "/placement" },
        { label: "Placement Process", href: "/placement" },
        { label: "Contact", href: "/contact" },
      ]}
      sections={[
        {
          title: "What We Do",
          cards: [
            {
              title: "Career Readiness",
              kicker: "Training",
              text: "A structured roadmap for aptitude, communication, technical fundamentals, resumes, and interviews.",
            },
            {
              title: "Campus Recruitment",
              kicker: "Placement",
              text: "End-to-end coordination for drives: scheduling, registration, logistics, and smooth execution.",
            },
            {
              title: "Industry Connect",
              kicker: "Industry",
              text: "Guest talks, workshops, mentorship, and internship guidance aligned with emerging roles.",
            },
          ],
        },
        {
          title: "For Recruiters",
          cards: [
            {
              title: "Why Hire from NCE",
              kicker: "Hiring",
              text: "Industry-ready students, strong fundamentals, and a transparent drive process with dedicated coordination.",
            },
            {
              title: "Engagement Models",
              kicker: "Connect",
              points: [
                "Campus hiring drives",
                "Internship + PPO",
                "Workshops & guest lectures",
                "Industry projects & mentorship",
              ],
            },
            {
              title: "Schedule a Drive",
              kicker: "Next",
              text: "Share JD and preferred dates — we’ll align eligible branches and the drive plan.",
              href: "/contact",
            },
          ],
        },
        {
          title: "For Students",
          cards: [
            {
              title: "Placement Readiness Checklist",
              kicker: "Ready",
              points: [
                "Resume + projects updated",
                "Aptitude basics covered",
                "Core fundamentals revised",
                "Mock interview practice",
              ],
            },
            {
              title: "Resources",
              kicker: "Support",
              points: [
                "Resume templates (to be updated)",
                "Coding practice plan (to be updated)",
                "Company-wise prep (to be updated)",
              ],
              href: "/student-login",
            },
            {
              title: "Notices & Drives",
              kicker: "Updates",
              text: "Stay updated with campus drives, pre-placement talks, and registration timelines.",
              href: "/notices",
            },
          ],
        },
      ]}
    >
      {/* Placement Legacy Section (Moved from Home) */}
      <Section className="py-20 bg-[#001a33]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">Careers & Placements</p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Placement Legacy
            </h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
              Our Training & Placement Cell partners with leading organisations to launch careers.
            </p>
          </motion.div>

          {/* Stats counters */}
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {placementStats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/8 transition-all"
              >
                <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-1">
                  <Counter target={value} suffix={suffix} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Marquee recruiters */}
          <motion.div variants={fadeIn} className="overflow-hidden">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Our Recruiting Partners</p>
            <div className="flex">
              <div className="marquee-track flex gap-6 items-center">
                {[...recruiters, ...recruiters].map((r, i) => (
                  <div
                    key={i}
                    className="shrink-0 px-7 py-3.5 bg-white/5 hover:bg-[#c9a84c]/15 border border-white/10 hover:border-[#c9a84c]/30 rounded-xl text-white/60 hover:text-white font-semibold text-sm cursor-pointer transition-all whitespace-nowrap"
                  >
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process + Roadmap */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-slate-100 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Process</p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#003366] mt-2">
                A smooth campus hiring journey
              </h2>
              <div className="mt-6 space-y-4">
                {placementProcess.map((s, idx) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="flex-none">
                      <div className="w-10 h-10 rounded-xl bg-[#003366] text-white font-extrabold flex items-center justify-center">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{s.title}</p>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-100 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Training</p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#003366] mt-2">
                Training roadmap for job readiness
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                This roadmap makes the page feel like a dedicated T&P portal. Replace each module with your actual schedule.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trainingRoadmap.map((m) => (
                  <div key={m.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <p className="font-bold text-slate-900">{m.title}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                          <span className="leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="/clubs"
                  className="inline-flex items-center justify-center rounded-xl bg-[#003366] text-white font-bold px-5 py-3 hover:bg-[#00274d] transition-colors"
                >
                  See Student Activities
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Request Training Plan Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="rounded-3xl bg-gradient-to-br from-[#001a33] via-[#003366] to-[#001a33] p-8 md:p-10 text-white overflow-hidden">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Recruiters</p>
              <h2 className="font-playfair text-2xl md:text-4xl font-extrabold mt-2">
                Let’s build your next hiring batch
              </h2>
              <p className="text-white/80 mt-3 text-sm md:text-base leading-relaxed">
                Share your role details and preferred dates. We’ll coordinate eligibility, student registration, and drive logistics.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-[#001122] font-extrabold px-6 py-3 hover:bg-white/90 transition-colors"
                >
                  Contact T&P Cell
                </a>
                <a
                  href="/departments"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white font-bold px-6 py-3 hover:bg-white/15 transition-colors"
                >
                  Explore Departments
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
