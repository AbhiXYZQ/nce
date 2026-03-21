import PageShell from "@/components/PageShell";

export default function VisionMissionPage() {
  return (
    <PageShell
      accentLabel="Institute Core"
      title="Vision & Mission"
      subtitle="The guiding principles and fundamental objectives that drive Nalanda College of Engineering towards academic and professional excellence."
      bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "Vision & Mission" }]}
      sections={[
        {
          title: "Our Vision",
          cards: [
            { 
              title: "Vision Statement", 
              kicker: "The Ultimate Goal", 
              text: "To develop competent, ethical, and industry-ready engineers who contribute to society through knowledge, innovation, and educational excellence." 
            },
            { 
              title: "Long-Term Aspirations", 
              kicker: "Future Ready", 
              text: "Transforming NCE into a premier center of technical education that fosters innovation and addresses the evolving challenges of the modern technology landscape." 
            },
            { 
              title: "Societal Impact", 
              kicker: "Contribution", 
              text: "Empowering talented minds from diverse backgrounds to create sustainable engineering solutions that benefit both local communities and the world at large." 
            },
          ],
        },
        {
          title: "Our Mission",
          cards: [
            { 
              title: "Academic Excellence", 
              kicker: "Core Competence", 
              text: "To deliver strong technical fundamentals merged with hands-on learning, encouraging students to master modern engineering pedagogy." 
            },
            { 
              title: "Research & Innovation", 
              kicker: "R&D", 
              text: "To cultivate a robust research culture and promote active innovation, critical thinking, and problem-solving through advanced laboratories and live projects." 
            },
            { 
              title: "Ethics & Leadership", 
              kicker: "Character Building", 
              text: "To build strong professional ethics, strict academic discipline, and essential leadership qualities, shaping students into responsible and capable citizens." 
            },
            { 
              title: "Industry Linkage", 
              kicker: "Employability", 
              text: "To strengthen industry-academia linkage through continuous interactions, guaranteeing vast opportunities for internships, extensive training, and top-tier placements." 
            },
          ],
        },
      ]}
    />
  );
}
