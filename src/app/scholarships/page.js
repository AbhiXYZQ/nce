import PageShell from "@/components/PageShell";

export default function ScholarshipsPage() {
  return (
    <PageShell
      accentLabel="Student Corner"
      title="Scholarships"
      subtitle="Comprehensive scholarship schemes, eligibility criteria, and application guidance for NCE students."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Corner" }, { label: "Scholarships" }]}
      sections={[
        {
          title: "Post Matric Scholarship (PMS) Bihar",
          cards: [
            {
              title: "Eligibility Criteria",
              kicker: "QUALIFICATION",
              text: "For students belonging to SC, ST, BC, and EBC categories who are permanent residents of Bihar.",
              points: [
                "Must be a permanent resident (Domicile) of Bihar",
                "Category: SC, ST, BC, or EBC",
                "Family Income: Up to ₹3,00,000/annum",
                "Must be enrolled in a recognized Post-Matric course"
              ]
            },
            {
              title: "Required Documents",
              kicker: "CHECKLIST",
              points: [
                "Aadhaar Card & Bank Passbook (Aadhar Seeded)",
                "Caste, Income & Residential Certificate (Recent)",
                "Bonafide Certificate & Fee Receipt (Current Year)",
                "Last Passing Marksheet (10th/12th/Semester)",
                "Passport Size Photograph"
              ]
            },
            {
              title: "How to Apply",
              kicker: "APPLICATION",
              text: "Applications are submitted through the official PMS Bihar portal. Ensure all documents are scanned in PDF format (under 400KB).",
              href: "https://pmsonline.bihar.gov.in/"
            }
          ]
        },
        {
          title: "National Scholarship Portal (NSP)",
          cards: [
            {
              title: "Major Schemes for Engineering",
              kicker: "CENTRAL SCHEMES",
              points: [
                "AICTE - Pragati Scholarship (For Girls)",
                "AICTE - Saksham Scholarship (For Specially-Abled)",
                "AICTE - Swanath Scholarship (Orphans/Martyrs' Wards)",
                "Central Sector Scheme for College/University Students",
                "Post Matric Scholarships for Minorities"
              ]
            },
            {
              title: "Essential Requirements",
              kicker: "REGISTRATION",
              text: "NSP now requires One-Time Registration (OTR) and mandatory Aadhaar authentication.",
              points: [
                "One-Time Registration (OTR) using Aadhaar",
                "Bank Account must be seeded with Aadhaar",
                "Bonafide certificate from Institute's Nodal Officer",
                "Valid Mobile Number & Email for OTP"
              ]
            },
            {
              title: "Official Portal",
              kicker: "PORTAL LINK",
              text: "Apply or track your application status on the National Scholarship Portal.",
              href: "https://scholarships.gov.in/"
            }
          ]
        },
        {
          title: "Support & Help Desk",
          cards: [
            {
              title: "Campus Support",
              kicker: "INSTITUTE HELP",
              text: "For Bonafide certificates and application verification, contact the Student Section (Admin Block).",
              points: [
                "Location: Admin Building, Ground Floor",
                "Office Hours: 10:30 AM - 5:00 PM",
                "Document Verification Desk: Window No. 02"
              ]
            },
            {
              title: "NSP Official Support",
              kicker: "TECHNICAL QUERIES",
              text: "For technical issues on the National Scholarship Portal, use the official help desk.",
              points: [
                "Helpline: 0120-6619540",
                "Email: helpdesk@nsp.gov.in"
              ]
            }
          ]
        }
      ]}
    />
  );
}
