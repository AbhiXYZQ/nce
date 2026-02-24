"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  return (
    <header className="w-full font-sans shadow-md bg-white">
      
      {/* 1. TOP STRIP */}
      <div className="bg-[#f1f1f1] text-[#212529] text-[11px] md:text-[12px] py-1.5 border-b border-gray-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-3 md:space-x-4 items-center">
             <a href="tel:06111295" className="flex items-center gap-1 hover:text-blue-700 font-medium">
                <Phone size={14}/> <span>06111-295xxx</span>
             </a>
             <a href="mailto:principal@ncechandi.ac.in" className="hidden sm:flex items-center gap-1 hover:text-blue-700 font-medium">
                <Mail size={14}/> <span>principal@ncechandi.ac.in</span>
             </a>
          </div>
          <div className="flex space-x-2 items-center font-semibold text-gray-600">
            <Link href="/login" className="bg-[#003366] text-white px-3 py-0.5 rounded text-[11px] hover:bg-blue-800 transition">Faculty Login</Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (FIXED: More Side Margin for Logos) */}
      <div className="bg-white py-2 md:py-4 border-b border-gray-100 md:border-none">
        
        {/* Change 1: px-4 kar diya taaki logos kinare se dur ho jayein */}
        <div className="container mx-auto px-4 md:px-6"> 
          
          {/* Change 2: gap-2 kar diya taaki logo aur text me thodi saans lene ki jagah ho */}
          <div className="flex flex-row items-center justify-between gap-2 md:gap-4 flex-nowrap">
            
            {/* LEFT: NCE Logo */}
            <div className="flex-shrink-0">
               <Image 
                 src="/images/nce-logo.png" 
                 alt="NCE Logo"
                 width={100} height={100}
                 // Logo size w-50px rakha hai taaki margin badhane par bhi fit aaye
                 className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] object-contain"
                 priority
                 unoptimized
               />
            </div>

            {/* CENTER: Text */}
            <div className="flex-grow text-center px-1">
              {/* English Name: Mobile Text 14px-15px (Balanced) */}
              <h1 className="text-[14px] sm:text-[18px] md:text-3xl font-extrabold text-[#003366] uppercase leading-tight font-serif tracking-tight">
                Nalanda College of Engineering
              </h1>
              {/* Hindi Name */}
              <h2 className="text-[12px] sm:text-[16px] md:text-2xl font-bold text-[#d32f2f] font-serif mt-0.5 md:mt-1 leading-tight">
                नालंदा अभियंत्रण महाविद्यालय, चंडी
              </h2>
              <p className="hidden md:block text-sm text-gray-600 font-medium mt-1">
                (Department of Science & Technology, Govt. of Bihar)
              </p>
            </div>

            {/* RIGHT: Bihar Govt Logo */}
            <div className="flex-shrink-0">
               <Image 
                 src="/images/bihar-logo.png" 
                 alt="Bihar Govt Logo"
                 width={100} height={100}
                 className="w-[45px] h-[45px] md:w-[85px] md:h-[85px] object-contain"
                 unoptimized
               />
            </div>

          </div>
          
          {/* Mobile Only Subtitle */}
          <div className="md:hidden text-center mt-2 border-t pt-1 border-gray-100">
            <p className="text-[10px] text-gray-600 font-medium leading-tight">
               Dept. of Science & Technology, Govt. of Bihar | Approved by AICTE
            </p>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <nav className="bg-[#003366] text-white border-t-4 border-[#ffcc00] sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12 md:h-12">
            
            {/* Desktop Menu */}
            <div className="hidden md:flex w-full justify-center text-[13px] lg:text-[14px] font-medium uppercase tracking-wide">
              <NavLink href="/" name="Home" />
              <NavDropdown title="Institute" />
              <NavDropdown title="Academics" />
              <NavLink href="/admission" name="Admission" />
              <NavDropdown title="Departments" />
              <Link href="/placement" className="px-4 h-12 flex items-center bg-[#d32f2f] text-white font-bold hover:bg-red-700 transition-colors border-r border-blue-800">
                T&P Cell
              </Link>
              <NavLink href="/student" name="Student Corner" />
              <NavLink href="/contact" name="Contact" />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex w-full justify-between items-center">
                <span className="font-bold text-[#ffcc00] text-sm tracking-wider">MENU</span>
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#002244] text-white border-t border-blue-800 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col">
              <MobileLink href="/" name="Home" onClick={() => setIsOpen(false)} />
              
              <div className="border-b border-blue-900">
                <button 
                  onClick={() => setAcademicsOpen(!academicsOpen)}
                  className="flex justify-between items-center w-full py-3 px-4 text-sm font-medium hover:bg-blue-800"
                >
                  ACADEMICS <ChevronDown size={14} className={`transition-transform ${academicsOpen ? 'rotate-180' : ''}`}/>
                </button>
                {academicsOpen && (
                   <div className="bg-[#001a33] px-6 py-2 space-y-2">
                      <Link href="/syllabus" className="block text-xs text-gray-300 py-1" onClick={() => setIsOpen(false)}>Syllabus</Link>
                   </div>
                )}
              </div>

              <MobileLink href="/departments" name="Departments" onClick={() => setIsOpen(false)} />
              <MobileLink href="/placement" name="Training & Placement" isHighlight onClick={() => setIsOpen(false)} />
              <MobileLink href="/contact" name="Contact Us" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </nav>
      
      {/* 4. NEWS TICKER */}
      <div className="bg-[#fff3cd] text-[#003366] py-1.5 flex items-center shadow-inner border-b border-yellow-200">
        <div className="bg-[#d32f2f] text-white text-[10px] font-bold px-2 py-1 ml-2 rounded uppercase tracking-wider shadow-sm z-10 shrink-0">
          News
        </div>
        <div className="flex-1 overflow-hidden relative h-5 md:h-6">
            <div className="absolute whitespace-nowrap animate-marquee flex items-center top-0 md:top-1">
                <span className="mx-4 font-semibold text-[11px] md:text-sm">
                   📢 Registration Extended till 25th Feb.
                </span>
            </div>
        </div>
      </div>

    </header>
  );
}

// --- SUB-COMPONENTS ---
function NavLink({ href, name }) {
  return <Link href={href} className="px-3 lg:px-4 h-12 flex items-center border-r border-blue-800 last:border-r-0 hover:bg-[#ffcc00] hover:text-[#003366]">{name}</Link>;
}

function NavDropdown({ title }) {
    return (
        <div className="relative group h-12 flex items-center px-3 lg:px-4 cursor-pointer hover:bg-[#ffcc00] hover:text-[#003366] border-r border-blue-800">
            <span>{title}</span>
            <ChevronDown size={14} className="ml-1 opacity-70 group-hover:opacity-100" />
        </div>
    )
}

function MobileLink({ href, name, isHighlight, onClick }) {
  return (
    <Link href={href} onClick={onClick} className={`block py-3 px-4 border-b border-blue-900 text-sm font-medium ${isHighlight ? "bg-red-600 text-white" : "hover:bg-blue-800"}`}>{name}</Link>
  );
}