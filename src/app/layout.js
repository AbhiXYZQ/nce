import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Nalanda College of Engineering | NCE",
  description:
    "Official Website of Nalanda College of Engineering — A premier Government Engineering College under Dept. of Science & Technology, Govt. of Bihar. AICTE Approved.",
  keywords: "NCE, Nalanda College of Engineering, Government Engineering Bihar, AICTE",
  icons: {
    icon: "/images/nce-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${
          geistSans.variable
        } ${playfair.variable} font-sans antialiased bg-transparent text-slate-900 min-h-screen`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}