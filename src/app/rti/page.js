import PageShell from "@/components/PageShell";
import { Scale, FileText, ClipboardList, ShieldAlert } from "lucide-react";

export default function RTIPage() {
  return (
    <PageShell
      accentLabel="Transparency"
      title="Right to Information (RTI)"
      subtitle="Ensuring accountability and transparency in institutional administration under the RTI Act 2005."
      bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
      patternType="faculty"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "RTI" }]}
      sections={[
        {
          title: "Public Information Officers (PIO)",
          cards: [
            { 
              title: "Institutional PIO", 
              kicker: "Public Relations", 
              text: "Designated Public Information Officer for official inquiries.", 
              points: ["Professor In-charge (Administration)", "NCE Chandi"] 
            },
            { 
              title: "First Appellate Authority", 
              kicker: "Legal", 
              text: "Principal, Nalanda College of Engineering, Chandi.", 
              points: ["Principal Office", "Higher Inquiries"] 
            },
          ]
        },
        {
          title: "How to File an RTI",
          cards: [
            { title: "Application Fee", kicker: "₹10", text: "Standard application fee via Postal Order or Cash.", points: ["₹10 Basic Fee"] },
            { title: "Online Submission", kicker: "Portal", text: "File via the official RTI Online portal of Bihar Govt.", points: ["rti.online.bihar.gov.in"] },
            { title: "Offline Submission", kicker: "Post", text: "Address letters clearly to PIO, NCE Chandi.", points: ["Register/Speed Post"] },
          ]
        },
        {
          title: "Rules & Regulation",
          cards: [
             { title: "Bihar RTI Rules", kicker: "State Rules", text: "Governed by Bihar RTI rules and Central Act.", points: ["Act 2005 Compliant"] },
          ]
        }
      ]}
    >
      <div className="container mx-auto px-6 py-10">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-700 flex items-start gap-4 shadow-sm">
           <ShieldAlert size={28} className="shrink-0 mt-1 text-slate-400" />
           <div>
             <p className="font-bold text-lg mb-1">Accountability Matters</p>
             <p className="text-sm">Information which is personal, exempt under Section 8 of the RTI Act, or would disproportionately divert resources may not be provided. Processing time is usually 30 days.</p>
           </div>
        </div>
      </div>
    </PageShell>
  );
}
