import PageShell from "@/components/PageShell";

export default function LoginPage() {
  return (
    <PageShell
      accentLabel="Portal"
      title="Faculty Login"
      subtitle="Login page scaffold. Connect it with your authentication/provider later."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculty Login" }]}
      sections={[
        {
          title: "Access",
          note: "This is UI structure only — no authentication implemented yet.",
          cards: [
            { title: "Login", kicker: "Coming Soon", text: "Add a login form or integrate a portal link." },
            { title: "Forgot Password", kicker: "Support", text: "Password reset flow (if applicable)." },
            { title: "Help", kicker: "Contact", text: "For access issues, contact office.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
