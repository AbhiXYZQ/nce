import PageShell from "@/components/PageShell";
import { Globe, GraduationCap, Briefcase, Heart, MessageSquare, Handshake, Network } from "lucide-react";

export default function AlumniPage() {
  return (
    <PageShell
      accentLabel="Community"
      title="Global Alumni Portal"
      subtitle="A powerful network of 5,000+ professionals, innovators, and leaders worldwide. Reconnect, mentor, and grow together."
      bgImage="https://images.unsplash.com/photo-1523050335382-c5150a50114f?q=80&w=2070&auto=format&fit=crop"
      patternType="about"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Alumni" }]}
      sections={[
        {
          title: "The NCE Global Presence",
          cards: [
            { 
              title: "World-Class Impact", 
              kicker: "Global Footprint", 
              text: "Our alumni are part of top tier organizations like TCS, Wipro, Infosys, and leading government bodies.", 
              points: ["Fortune 500 Leaders", "State Government Technocrats", "International Researchers"] 
            },
            { 
              title: "Alumni Association", 
              kicker: "Official Body", 
              text: "Join the official Alumni Association to participate in voting, fests, and governance.", 
              points: ["Networking Meets", "Annual Alumni Day", "Regional Chapters"] 
            },
          ],
        },
        {
          title: "Alumni-Student Engagement",
          cards: [
            { 
              title: "Mentorship Program", 
              kicker: "Giving Back", 
              text: "Seasoned professionals guide the current students through mock interviews and technical workshops.", 
              points: ["Career Counseling", "Mock HR/Technical Rounds", "Industry Projects"] 
            },
            { 
              title: "Innovation Hub", 
              kicker: "Entrepreneurship", 
              text: "Alumni angel investors and founders helping student startups get off the ground.", 
              points: ["Seed Funding Guidance", "Technical Audits", "Startup Incubation"] 
            },
          ],
        },
        {
          title: "Registration & Reconnect",
          cards: [
            { 
              title: "Alumni Directory", 
              kicker: "Database", 
              text: "Register yourself to stay updated with college fests and networking opportunities.", 
              href: "/contact"
            },
            { 
              title: "Achievement Portal", 
              kicker: "Success Stories", 
              text: "Share your professional journey to inspire the next generation of engineers.", 
              href: "#"
            },
          ],
        },
      ]}
    >
      {/* Optional additional custom UI inside PageShell */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-[#001E36] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl border border-white/10">
           {/* Glow Effect */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                 <h2 className="font-playfair text-3xl md:text-5xl font-black text-white leading-tight">
                   Once an NCEian, <br/><span className="text-[#c9a84c]">Forever an NCEian.</span>
                 </h2>
                 <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
                   The Nalanda College of Engineering isn't just a four-year journey; it's a lifelong membership in an elite community of excellence.
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <button className="px-10 py-5 rounded-2xl bg-[#c9a84c] text-[#001122] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-yellow-950/40">
                   Join Association
                 </button>
                 <button className="px-10 py-5 rounded-2xl bg-white/10 text-white border border-white/20 font-black text-sm uppercase tracking-widest hover:bg-white/15 transition-all">
                   Check Events
                 </button>
              </div>
           </div>
        </div>
      </div>
    </PageShell>
  );
}
