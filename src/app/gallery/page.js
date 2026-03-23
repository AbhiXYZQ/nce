"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Camera, MapPin, Calendar, Microscope } from "lucide-react";

const CATEGORIES = ["All", "Campus", "Events", "Labs", "Sports"];

const GALLERY_IMAGES = [
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhllkEHGFKH1BoTjUS6lWEZ12t4z_E77JS-9ruOUVm8zD5GZBQxQ6RwHosUR6woG2WLvN39do9rt65R19bZRyZEs4OwyfkXLtnObeWcNAF0EXHfloeAsVvMJZVEhMKYgNqnNQ4Ggi-1Pz11/w1200-h630-p-k-no-nu/Untitled11.png",
    title: "Main Entrance",
    category: "Campus",
    desc: "The iconic entrance of Nalanda College of Engineering."
  },
  {
    src: "https://www.collegebatch.com/static/clg-gallery/nalanda-college-of-engineering-chandi-nalanda-351897.webp",
    title: "Academic Block",
    category: "Campus",
    desc: "A view of our modern academic infrastructure."
  },
  {
    src: "https://www.collegebatch.com/static/clg-gallery/nalanda-college-of-engineering-chandi-nalanda-351896.webp",
    title: "College Library",
    category: "Campus",
    desc: "Our central library with vast resources."
  },
  {
    src: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1563170019Capture.PNG",
    title: "Campus Aerial View",
    category: "Campus",
    desc: "Sprawling green campus across 65 acres."
  },
  {
    src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2070&auto=format&fit=crop",
    title: "Annual Sports Meet",
    category: "Sports",
    desc: "Students participating in track and field events."
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    title: "Techno-Cultural Fest",
    category: "Events",
    desc: "Highlights from our annual flagship festival."
  },
  {
    src: "https://images.unsplash.com/photo-1581093191605-a1d23e59a3c6?q=80&w=2070&auto=format&fit=crop",
    title: "Advanced AI Lab",
    category: "Labs",
    desc: "Modern computing facilities for research and development."
  },
  {
    src: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=2070&auto=format&fit=crop",
    title: "Robotics Workshop",
    category: "Labs",
    desc: "Innovation hub where students build future tech."
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    title: "Seminar Hall",
    category: "Campus",
    desc: "State-of-the-art hall for guest lectures and events."
  },
  {
    src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop",
    title: "Cultural Performance",
    category: "Events",
    desc: "A musical night at the open-air theater."
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <PageShell
      accentLabel="Campus Life"
      title="Institutional Gallery"
      subtitle="A visual journey through our academic halls, vibrant fests, state-of-the-art labs, and sports excellence."
      bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
      patternType="faculty"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
    >
      <div className="container mx-auto px-6 py-12">

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${filter === cat
                  ? "bg-[#003366] text-white border-transparent shadow-lg shadow-[#003366]/20 scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all border border-slate-200"
                onClick={() => setSelectedImg(img)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-[#c9a84c] text-white text-[9px] font-black uppercase tracking-widest">
                      {img.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{img.title}</h3>
                  <p className="text-white/70 text-xs mt-1 line-clamp-2">{img.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-white/60 text-[10px] flex items-center gap-1">
                      <Camera size={12} /> Institutional Archives
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white/70 hover:text-white p-2 z-[110]">
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-full flex flex-col md:flex-row bg-[#0A1118] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side */}
              <div className="relative flex-1 bg-black/40">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  fill
                  className="object-contain"
                  quality={90}
                />
              </div>

              {/* Sidebar Info */}
              <div className="w-full md:w-[350px] p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 bg-gradient-to-br from-[#0A1118] to-[#001E36]">
                <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-[10px] font-black uppercase tracking-widest mb-6">
                  {selectedImg.category} Archives
                </div>

                <h2 className="font-playfair text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  {selectedImg.title}
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  {selectedImg.desc}
                </p>

                <div className="space-y-5 border-t border-white/10 pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin size={18} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Location</p>
                      <p className="text-sm font-semibold text-white/90 mt-0.5">NCE Chandi Campus, Nalanda</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Calendar size={18} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Archive Date</p>
                      <p className="text-sm font-semibold text-white/90 mt-0.5">February 2026</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => setSelectedImg(null)}
                    className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all"
                  >
                    Close View
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageShell>
  );
}
