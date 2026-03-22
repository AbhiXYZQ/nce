"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, BadgeCheck, GraduationCap, ArrowRight } from "lucide-react";
import { useState } from "react";

const DEFAULT_LOGO_SRC = "/images/nce-logo.png";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

function PremiumAreas({ areas }) {
  if (!areas?.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-1.5 w-full">
      {areas.map((a) => (
        <span
          key={a}
          className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/10 text-white/90 border border-white/20"
        >
          {a}
        </span>
      ))}
    </div>
  );
}

// ───── ADVANCED HOD / PRINCIPAL CARD (FEATURED SQUARE) ─────
function FeaturedCard({ person, titleLabal = "Head of Department" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={fadeUp} className="w-full">
      <div 
        className="relative group rounded-[2rem] overflow-hidden bg-[#001E36] border border-white/10 shadow-[0_20px_50px_rgba(0,30,54,0.1)] flex flex-col md:flex-row"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />

        {/* Big Square Photo Section */}
        <div className="w-full md:w-[400px] aspect-square relative overflow-hidden shrink-0 z-10 border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.name}
              fill
              className="object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-12 opacity-30">
              <Image src={DEFAULT_LOGO_SRC} alt="NCE" width={120} height={120} className="object-contain" />
            </div>
          )}
          
          <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xl">
            <BadgeCheck size={14} className="text-[#c9a84c]" />
            <span className="text-[10px] uppercase font-black tracking-widest text-white">{titleLabal}</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#001E36] to-transparent block md:hidden pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10 w-full md:min-h-[400px]">
          <motion.div animate={{ x: hovered ? 10 : 0 }} transition={{ duration: 0.4 }}>
            <h3 className="font-playfair text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-md">
              {person.name}
            </h3>
            
            {(person.designation || person.department) && (
              <p className="text-[#c9a84c] text-sm md:text-base font-bold tracking-widest uppercase mt-2">
                {person.designation} {person.department ? `• ${person.department}` : ""}
              </p>
            )}

            <div className="w-16 h-1 bg-[#c9a84c] mt-6 mb-8 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {person.qualification && (
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-[#c9a84c]/50 group-hover/item:bg-[#c9a84c]/10 transition-colors">
                    <GraduationCap size={18} className="text-slate-300 group-hover/item:text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Qualification</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{person.qualification}</p>
                  </div>
                </div>
              )}

              {person.email && (
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-[#c9a84c]/50 group-hover/item:bg-[#c9a84c]/10 transition-colors">
                    <Mail size={16} className="text-slate-300 group-hover/item:text-[#c9a84c]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Address</p>
                    <a href={`mailto:${person.email}`} className="text-sm font-semibold text-white mt-0.5 truncate block hover:text-[#c9a84c] transition-colors">
                      {person.email}
                    </a>
                  </div>
                </div>
              )}

              {person.phone && person.phone !== "-" && (
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-[#c9a84c]/50 group-hover/item:bg-[#c9a84c]/10 transition-colors">
                    <Phone size={16} className="text-slate-300 group-hover/item:text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone Number</p>
                    <a href={`tel:${person.phone.replace(/\s+/g, "")}`} className="text-sm font-semibold text-white mt-0.5 hover:text-[#c9a84c] transition-colors block">
                      {person.phone}
                    </a>
                  </div>
                </div>
              )}

              {person.office && (
                <div className="flex items-start gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-[#c9a84c]/50 group-hover/item:bg-[#c9a84c]/10 transition-colors">
                    <MapPin size={16} className="text-slate-300 group-hover/item:text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office</p>
                    <p className="text-sm font-semibold text-white mt-0.5 leading-snug">{person.office}</p>
                  </div>
                </div>
              )}
            </div>
            
            {person.areas && person.areas.length > 0 && person.areas[0] !== "-" && (
              <div className="mt-8 border-t border-white/10 pt-4">
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Area of Expertise</p>
                 <PremiumAreas areas={person.areas} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ───── ADVANCED ASSISTANT PROFESSOR CARD (SQUARE TOP) ─────
function PortraitCard({ person, tag }) {
  return (
    <motion.div variants={fadeUp} className="w-full h-full flex">
      <div className="group relative w-full flex flex-col rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#0A1118] border border-white/5 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(201,168,76,0.15)] transition-all duration-500">
        
        {/* Glow behind card */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Perfect Square Image */}
        <div className="relative w-full aspect-square shrink-0 overflow-hidden bg-white/5">
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.name}
              fill
              className="object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[800ms] ease-out"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center opacity-20">
              <Image src={DEFAULT_LOGO_SRC} alt="NCE" width={60} height={60} className="object-contain md:w-20 md:h-20" />
            </div>
          )}
          
          <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-md px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-lg border border-white/20 z-10 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-[8px] md:text-[9px] uppercase font-black tracking-widest text-[#001E36]">Profile Details</span>
          </div>
        </div>

        {/* Card Info Content */}
        <div className="flex-1 flex flex-col p-4 md:p-6 z-10 bg-gradient-to-b from-transparent to-[#001E36]/30">
          <span className="inline-flex self-start items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20 text-[8px] md:text-[9px] uppercase font-black tracking-widest mb-3 md:mb-4">
             {tag || person.designation || "Assistant Professor"}
          </span>

          <h3 className="font-playfair text-base sm:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-md">
            {person.name}
          </h3>
          
          {person.qualification && (
            <p className="text-slate-400 text-[9px] md:text-[10px] font-bold tracking-wider uppercase mt-1 md:mt-1.5 mb-3 md:mb-5 flex items-center gap-1.5">
               <GraduationCap size={13} className="text-[#c9a84c]" /> {person.qualification}
            </p>
          )}

          <div className="w-full h-px bg-white/10 mt-auto mb-3 md:mb-5" />

          {/* Quick Contacts Area */}
          <div className="space-y-2.5 md:space-y-3 shrink-0">
             {person.email && (
                <a href={`mailto:${person.email}`} className="flex items-center gap-2 md:gap-3 text-slate-300 hover:text-white transition-colors group/link">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover/link:bg-[#c9a84c]/20 border border-white/5 transition-colors">
                    <Mail size={12} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] xl:text-xs font-medium truncate">{person.email}</span>
                </a>
              )}
              {person.office && (
                <div className="flex items-start gap-2 md:gap-3 text-slate-300 group/link">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                     <MapPin size={12} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] xl:text-xs font-medium leading-tight mt-0.5 md:mt-1 truncate group-hover/link:whitespace-normal group-hover/link:overflow-visible transition-all">{person.office}</span>
                </div>
              )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function FacultyPeople({ principal, departments }) {
  return (
    <div className="bg-slate-50 relative overflow-hidden">
      {/* Background Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#001E36]/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* ─── PRINCIPAL SECTION ─── */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeUp} className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#7a5a12] text-xs font-black uppercase tracking-widest mb-4">
                <BadgeCheck size={14} /> Leadership & Vision
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-black text-[#001E36] leading-tight drop-shadow-sm">
                From the Desk of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#9a7b2c]">Principal</span>
              </h2>
            </motion.div>

            <FeaturedCard person={principal} titleLabal="Principal" />
          </motion.div>
        </div>
      </section>

      {/* ─── DEPARTMENT FACULTIES ─── */}
      <section className="py-16 md:py-24 bg-white relative z-10 border-t border-slate-200/60 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeUp} className="max-w-4xl mb-16 mx-auto text-center">
               <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#7a5a12] text-xs font-black uppercase tracking-widest mb-4">
                <GraduationCap size={14} /> Elite Academia
              </div>
              <h2 className="font-playfair text-4xl md:text-6xl font-black text-[#001E36] leading-tight">
                Our Esteemed Faculty
              </h2>
              <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Discover the brilliant minds leading research, cultivating innovation, and guiding the next generation of engineers across our cutting-edge departments.
              </p>
            </motion.div>

            <div className="space-y-24 md:space-y-32">
              {(departments ?? []).map((dept) => (
                <motion.div
                  key={dept.key}
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  <motion.div variants={fadeUp} className="mb-10 text-center relative z-20">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                       <h3 className="font-playfair text-[80px] md:text-[120px] font-black uppercase whitespace-nowrap overflow-hidden text-center text-[#001E36]">
                         {dept.title.split(' ')[0]}
                       </h3>
                    </div>
                    <p className="text-[#c9a84c] text-xs font-black uppercase tracking-[0.2em] mb-3">Academic Department</p>
                    <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#001E36] relative inline-block">
                      {dept.title}
                      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent rounded-full" />
                    </h3>
                  </motion.div>

                  <div className="mt-16 relative z-20">
                    <FeaturedCard person={dept.head} titleLabal="Head of Department" />
                  </div>

                  {!!dept.assistants?.length && (
                    <motion.div variants={stagger} className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative z-20">
                      {dept.assistants.map((p) => (
                        <PortraitCard
                          key={`${dept.key}-${p.email ?? p.name}`}
                          person={p}
                          tag={p.designation}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
