import PageShell from "@/components/PageShell";

export default function AdministrationPage() {
  return (
    <PageShell
      accentLabel="Administration"
      title="Governance & Administration"
      subtitle="The administrative structure of Nalanda College of Engineering ensures smooth academic operations, student welfare, and strict adherence to AICTE guidelines."
      bgImage="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2070&auto=format&fit=crop"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "Administration" }]}
      sections={[
        {
          title: "Institute Leadership",
          cards: [
            { 
              title: "Principal & Head of Institute", 
              kicker: "Leadership", 
              text: "The Principal acts as the academic and administrative head of NCE, guiding the institution's vision, strategies, and overall development.", 
              href: "/principal" 
            },
            { 
              title: "Registrar / Academic Office", 
              kicker: "Core Admin", 
              text: "Manages student admissions, university registrations, academic scheduling, and official records in coordination with BEU, Patna." 
            },
            { 
              title: "Examination Cell", 
              kicker: "Evaluations", 
              text: "Responsible for safely conducting mid-semester internal assessments and formatting end-semester university examinations." 
            },
          ],
        },
        {
          title: "Student Support & Services",
          cards: [
            { 
              title: "Grievance Redressal Cell", 
              kicker: "Student Welfare", 
              text: "A dedicated committee to address and resolve any academic or non-academic grievances raised by the students promptly.",
              href: "/grievance"
            },
            { 
              title: "Anti-Ragging Committee", 
              kicker: "Discipline", 
              text: "A statutory body strictly enforcing a zero-tolerance policy towards ragging to ensure a safe, welcoming campus environment.",
              href: "/anti-ragging"
            },
            { 
              title: "Scholarship & Office Helpdesk", 
              kicker: "Facilitation", 
              text: "Helps students in processing government scholarships, issuing bonafide certificates, CLCs, and other day-to-day office requests." 
            },
          ],
        },
        {
          title: "Institutional Committees",
          cards: [
            { 
              title: "Alumni Association Cell", 
              kicker: "Alumni", 
              text: "Fosters lifelong relationships between the institution and its alumni, organizing meets and mentorship drives.",
              href: "/alumni" 
            },
            { 
              title: "Training & Placement Cell", 
              kicker: "T&P", 
              text: "Actively bridging the gap between academia and industry, securing top-tier internships and campus opportunities.",
              href: "/placement"
            },
            { 
              title: "Women's Empowerment Cell", 
              kicker: "Equality", 
              text: "Dedicated to equipping female students and staff with equal opportunities and creating a robust empowering ecosystem." 
            },
          ],
        },
      ]}
    />
  );
}
