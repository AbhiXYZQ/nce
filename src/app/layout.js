import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // <-- Yahan Navbar import kiya

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NCE Chandi | Government Engineering College", // <-- Updated Title
  description: "Official Website of Nalanda College of Engineering", // <-- Updated Description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Navbar sabse upar rahega */}
        <Navbar />
        
        {/* Baaki pages ka content yahan aayega */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}