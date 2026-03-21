"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useMemo, useState } from "react";
import { Mail, Phone, MapPin, BadgeCheck, ChevronDown } from "lucide-react";

const DEFAULT_LOGO_SRC = "/images/nce-logo.png";

function initials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase() || "NA";
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Avatar({ person, size = "md" }) {
  const sizeClass =
    size === "2xl"
      ? "h-40 w-40 md:h-48 md:w-48"
      : size === "xl"
        ? "h-32 w-32 md:h-40 md:w-40"
        : size === "lg"
          ? "h-20 w-20 md:h-24 md:w-24"
          : "h-16 w-16 md:h-20 md:w-20";

  const imageSize = size === "2xl" ? 192 : size === "xl" ? 160 : size === "lg" ? 96 : 80;

  if (person?.photo) {
    return (
      <div className={`relative ${sizeClass} rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-50 shadow-inner`}>
        <Image
          src={person.photo}
          alt={person.name}
          fill
          quality={85}
          className="object-cover object-[center_top]"
          sizes="(max-width: 768px) 256px, 384px"
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} rounded-[2rem] border border-slate-200 bg-white shadow-sm flex items-center justify-center p-6`}>
      <Image
        src={DEFAULT_LOGO_SRC}
        alt="Nalanda College of Engineering logo"
        width={imageSize - 32}
        height={imageSize - 32}
        className="object-contain"
        priority={size === "2xl" || size === "xl"}
      />
    </div>
  );
}

function PersonMeta({ person }) {
  return (
    <div className="mt-4 grid gap-2 text-sm">
      {person?.email && (
        <a
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#003366] transition-colors"
          href={`mailto:${person.email}`}
        >
          <Mail size={16} className="text-[#c9a84c]" />
          <span className="truncate">{person.email}</span>
        </a>
      )}
      {person?.phone && (
        <a
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#003366] transition-colors"
          href={`tel:${person.phone.replace(/\s+/g, "")}`}
        >
          <Phone size={16} className="text-[#c9a84c]" />
          <span>{person.phone}</span>
        </a>
      )}
      {person?.office && (
        <div className="inline-flex items-start gap-2 text-slate-600">
          <MapPin size={16} className="text-[#c9a84c] mt-0.5" />
          <span className="leading-snug">{person.office}</span>
        </div>
      )}
    </div>
  );
}

function Areas({ areas }) {
  if (!areas?.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {areas.map((a) => (
        <span
          key={a}
          className="text-xs font-semibold px-3 py-1 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700"
        >
          {a}
        </span>
      ))}
    </div>
  );
}

function PersonCard({ person, variant = "default", tag, size }) {
  const isFeatured = variant === "featured";
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const panelId = useMemo(() => `faculty-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`, [reactId]);

  const previewAreas = useMemo(() => {
    const list = Array.isArray(person?.areas) ? person.areas : [];
    return list.slice(0, 2);
  }, [person?.areas]);

  return (
    <motion.div variants={fadeUp}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group rounded-[28px] p-[1px] bg-gradient-to-br from-[#c9a84c]/40 via-slate-200 to-[#003366]/35 shadow-sm hover:shadow-xl transition-all"
      >
        <div className={`rounded-[27px] bg-white ${isFeatured ? "p-8 md:p-10" : "p-6"}`}>
          <div className={`flex ${isFeatured ? "flex-col lg:flex-row lg:items-center" : "flex-col"} gap-10`}>
            <div className={isFeatured ? "shrink-0 flex justify-center" : ""}>
              <Avatar person={person} size={size ?? (isFeatured ? "xl" : "lg")} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <p className={`${isFeatured ? "text-xl md:text-2xl" : "text-base"} font-extrabold text-[#003366] leading-tight`}>
                  {person?.name}
                </p>
                {(tag || person?.designation) && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full bg-[#c9a84c]/10 text-[#7a5a12] border border-[#c9a84c]/20">
                    <BadgeCheck size={12} strokeWidth={3} /> {tag ?? person?.designation}
                  </span>
                )}
              </div>

              {person?.department && (
                <p className={`${isFeatured ? "text-base" : "text-sm"} text-slate-500 font-medium mt-1`}>
                  {person.department}
                </p>
              )}

              {/* Show direct details for featured cards */}
              {isFeatured ? (
                <div className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Contact Details</p>
                      <PersonMeta person={person} />
                    </div>
                    <div className="sm:col-span-2 space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Expertise & Focus</p>
                      <Areas areas={person?.areas} />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {!!previewAreas.length && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {previewAreas.map((a) => (
                        <span
                          key={a}
                          className="text-xs font-semibold px-3 py-1 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700"
                        >
                          {a}
                        </span>
                      ))}
                      {Array.isArray(person?.areas) && person.areas.length > 2 && (
                        <span className="text-xs font-bold px-3 py-1 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500">
                          +{person.areas.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">Quick preview detail</p>
                    <button
                      type="button"
                      onClick={() => setOpen((v) => !v)}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#003366] hover:text-[#c9a84c] transition-colors"
                    >
                      {open ? "Show less" : "Learn more"}
                      <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18 }}>
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          {person?.qualification && (
                            <p className="text-sm text-slate-600">
                              <span className="font-semibold text-slate-900">Qualification:</span> {person.qualification}
                            </p>
                          )}
                          <PersonMeta person={person} />
                          <Areas areas={person?.areas} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FacultyPeople({ principal, departments }) {
  return (
    <div className="bg-transparent">
      <section className="py-10">
        <div className="container mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }}>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Leadership</p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#003366] mt-2">Principal</h2>
              <p className="text-slate-500 mt-2 text-sm md:text-base leading-relaxed">
                Official leadership profile and contact details.
              </p>
            </motion.div>

            <div className="mt-6">
              <PersonCard person={principal} variant="featured" size="2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-transparent border-y border-white/10">
        <div className="container mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }}>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Faculty</p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#003366] mt-2">Department-wise Faculty</h2>
              <p className="text-slate-500 mt-2 text-sm md:text-base leading-relaxed">
                Heads of Department and Assistant Professors — update with official names, emails, and photos.
              </p>
            </motion.div>

            <div className="mt-6 grid gap-10">
              {(departments ?? []).map((dept) => (
                <motion.div
                  key={dept.key}
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                >
                  <motion.div variants={fadeUp} className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Department</p>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1">{dept.title}</h3>
                    </div>
                    <span className="hidden md:inline-flex text-xs font-bold px-3 py-1 rounded-2xl bg-white border border-slate-200 text-slate-700">
                      HOD & Assistants
                    </span>
                  </motion.div>

                  <div className="mt-4">
                    <PersonCard person={dept.head} variant="featured" tag="Head of Department" />
                  </div>

                  {!!dept.assistants?.length && (
                    <motion.div variants={stagger} className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                      {dept.assistants.map((p) => (
                        <PersonCard
                          key={`${dept.key}-${p.email ?? p.name}`}
                          person={p}
                          variant="default"
                          tag={p.designation ?? "Assistant Professor"}
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
