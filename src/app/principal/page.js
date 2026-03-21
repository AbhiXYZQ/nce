import PageShell from "@/components/PageShell";

export default function PrincipalDeskPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="Principal's Desk"
      subtitle="Message from the Principal and the institute’s priorities for excellence in engineering education."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "Principal's Desk" }]}
      sections={[
        {
          title: "Principal's Message",
          cards: [
            { 
              title: "My Dear Students", 
              kicker: "Welcome", 
              text: "Welcome to Nalanda College of Engineering (NCE). Our aim is to provide you the best quality education. In fact, the education is hidden in the student itself; we just encourage them to explore and enjoy the learning." 
            },
            { 
              title: "Leadership & Skills", 
              kicker: "Mission", 
              text: "Increasing diversity in needs and globalization have generated and enhanced the demand for competitive skills. We provide a platform where these needs are fulfilled and motivate students to develop leadership skills." 
            },
            { 
              title: "Contact Dr. Gopal Nandan", 
              kicker: "Direct Office", 
              text: "Official inquiries: nceprincipalchandi@gmail.com. Office hours: 10:00 AM – 5:00 PM.", 
              href: "mailto:nceprincipalchandi@gmail.com" 
            },
          ],
        },
      ]}
    />
  );
}
