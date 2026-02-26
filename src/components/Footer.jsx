import Link from "next/link";
import {
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Clock,
  Building2,
  GraduationCap,
  BookOpen,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001a33] text-white/80 border-t border-white/10">
      {/* Top CTA band */}
      <div className="border-b border-white/10 bg-[#001a33]">
        <div className="container mx-auto px-6 py-9">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 md:px-10 md:py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Need Help?</p>
              <h3 className="font-playfair text-2xl md:text-3xl font-extrabold text-white mt-2">
                Admissions, Academics, Placements — get official guidance
              </h3>
              <p className="text-sm md:text-base text-white/65 mt-2 leading-relaxed">
                This website is structured for a premium experience. We can plug in official PDFs, faculty lists, labs,
                and notices to make every page complete.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#e8c86a] text-[#001122] font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-900/25"
              >
                <GraduationCap size={18} /> Admission
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                <ArrowRight size={18} /> Contact Office
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10">
          {/* Brand + socials */}
          <div className="xl:col-span-4">
            <p className="font-playfair text-2xl font-extrabold text-white">NCE Chandi</p>
            <p className="text-sm text-white/65 mt-3 leading-relaxed">
              Nalanda College of Engineering, Chandi — Government Engineering College under Dept. of Science & Technology,
              Govt. of Bihar. AICTE Approved.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold text-white">Academic</p>
                <p className="text-xs text-white/60 mt-1">Calendar, syllabus & exams</p>
                <Link className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a84c] hover:text-white transition-colors" href="/academics">
                  Open <ArrowRight size={14} />
                </Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold text-white">Placement</p>
                <p className="text-xs text-white/60 mt-1">T&P cell and recruiters</p>
                <Link className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a84c] hover:text-white transition-colors" href="/placement">
                  Open <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-[#c9a84c] hover:text-[#001122] text-white/70 flex items-center justify-center transition-all"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="xl:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Institute</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link className="hover:text-white transition-colors" href="/about">About</Link>
              <Link className="hover:text-white transition-colors" href="/vision">Vision & Mission</Link>
              <Link className="hover:text-white transition-colors" href="/administration">Administration</Link>
              <Link className="hover:text-white transition-colors" href="/principal">Principal's Desk</Link>
              <Link className="hover:text-white transition-colors" href="/iqac">IQAC</Link>
              <Link className="hover:text-white transition-colors" href="/nirf">NIRF Data</Link>
            </div>
          </div>

          <div className="xl:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Academics</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link className="hover:text-white transition-colors" href="/academics">Programs Offered</Link>
              <Link className="hover:text-white transition-colors" href="/calendar">Academic Calendar</Link>
              <Link className="hover:text-white transition-colors" href="/syllabus">Syllabus</Link>
              <Link className="hover:text-white transition-colors" href="/exam">Examination</Link>
              <Link className="hover:text-white transition-colors" href="/results">Results</Link>
              <Link className="hover:text-white transition-colors" href="/research">Research</Link>
            </div>
          </div>

          <div className="xl:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Student Corner</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link className="hover:text-white transition-colors" href="/student-login">Student Login</Link>
              <Link className="hover:text-white transition-colors" href="/clubs">Clubs & Activities</Link>
              <Link className="hover:text-white transition-colors" href="/scholarships">Scholarships</Link>
              <Link className="hover:text-white transition-colors" href="/grievance">Grievance Cell</Link>
              <Link className="hover:text-white transition-colors" href="/anti-ragging">Anti-Ragging</Link>
              <Link className="hover:text-white transition-colors" href="/notices">Notices</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="xl:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Contact</p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <p className="text-white/65 leading-snug">Chandi, Nalanda, Bihar (add full address)</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#c9a84c] shrink-0" />
                <a className="text-white/65 hover:text-white transition-colors" href="tel:06111295">
                  06111-295xxx
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#c9a84c] shrink-0" />
                <a className="text-white/65 hover:text-white transition-colors" href="mailto:principal@ncechandi.ac.in">
                  principal@ncechandi.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe size={16} className="text-[#c9a84c] shrink-0" />
                <a className="text-white/65 hover:text-white transition-colors" href="https://ncechandi.ac.in" target="_blank" rel="noreferrer">
                  ncechandi.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#c9a84c] shrink-0" />
                <p className="text-white/65">Office Hours: 10:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Departments chips */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Building2 size={16} className="text-[#c9a84c]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Departments</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "CSE", href: "/departments/cse", icon: BookOpen },
                { label: "AI & ML", href: "/departments/aiml", icon: BookOpen },
                { label: "Civil", href: "/departments/ce", icon: BookOpen },
                { label: "Mechanical", href: "/departments/me", icon: BookOpen },
                { label: "Aeronautical", href: "/departments/aero", icon: BookOpen },
                { label: "EEE", href: "/departments/eee", icon: BookOpen },
              ].map((d) => {
                const Icon = d.icon;
                return (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all text-sm font-semibold"
                  >
                    <Icon size={14} className="text-[#c9a84c]" />
                    {d.label}
                  </Link>
                );
              })}
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all text-sm font-bold"
              >
                <BookOpen size={14} className="text-[#c9a84c]" /> All Departments
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55">© {new Date().getFullYear()} Nalanda College of Engineering, Chandi. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <Link className="inline-flex items-center gap-1.5 hover:text-white transition-colors" href="/placement">
              <Briefcase size={14} className="text-[#c9a84c]" /> T&P Cell
            </Link>
            <Link className="inline-flex items-center gap-1.5 hover:text-white transition-colors" href="/anti-ragging">
              <ShieldCheck size={14} className="text-[#c9a84c]" /> Anti-Ragging
            </Link>
            <Link className="inline-flex items-center gap-1.5 hover:text-white transition-colors" href="/grievance">
              <ShieldCheck size={14} className="text-[#c9a84c]" /> Grievance
            </Link>
            <Link className="inline-flex items-center gap-1.5 hover:text-white transition-colors" href="/iqac">
              <ShieldCheck size={14} className="text-[#c9a84c]" /> IQAC
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
