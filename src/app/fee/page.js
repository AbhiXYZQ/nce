import PageShell from "@/components/PageShell";
import { CreditCard, Receipt, Wallet, Banknote } from "lucide-react";

export default function FeePage() {
  return (
    <PageShell
      accentLabel="Support"
      title="Fee Structure"
      subtitle="Details for admission, semester, and other essential academic charges at NCE Chandi."
      bgImage="https://images.unsplash.com/photo-1554224155-16974a4ea2c8?q=80&w=2071&auto=format&fit=crop"
      patternType="academics"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fee Structure" }]}
      sections={[
        {
          title: "B.Tech Programs (General)",
          cards: [
            { title: "Admission Fee (One-time)", kicker: "B.Tech", text: "As per Govt. rules at the time of entry.", points: ["Approx. ₹2,500 - ₹5,000"] },
            { title: "Semester Tuition", kicker: "Academic", text: "Regular semester fees including lab and library access.", points: ["General/OBC: ₹1,500 - 2,200", "SC/ST: As per scholarships"] },
            { title: "Development Fee", kicker: "Building", text: "Contribution for campus upkeep.", points: ["₹2,500 per year"] },
          ]
        },
        {
          title: "Hostel & Mess Charges",
          cards: [
            { title: "Hostel Seat Rent", kicker: "Accommodation", text: "Affordable housing within the campus.", points: ["₹10,000 - ₹12,000 per year"] },
            { title: "Mess Charges", kicker: "Dining", text: "Monthly mess bill based on consumption.", points: ["Approx. ₹3,500 - ₹4,000 per month"] },
          ]
        },
        {
          title: "Payment Methods",
          cards: [
            { title: "Online Payment", kicker: "UPI/NetBanking", text: "Secure payments via the HDFC/SBI collective portal.", points: ["Fast & Auto-reporting"] },
            { title: "Bank Challan", kicker: "Offline", text: "Manual deposit at the local Chandi branch.", points: ["Requires office verification"] },
          ]
        }
      ]}
    >
      <div className="container mx-auto px-6 py-10">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-800 flex items-start gap-4">
           <Banknote size={24} className="shrink-0 mt-1" />
           <div>
             <p className="font-bold text-lg mb-1">Important Note</p>
             <p className="text-sm">Fees are subject to change as per the directives from the Department of Science & Technology, Government of Bihar. Fees once paid are typically non-refundable.</p>
           </div>
        </div>
      </div>
    </PageShell>
  );
}
