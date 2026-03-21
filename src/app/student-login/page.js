"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff, Loader2, GraduationCap, Sparkles, Building2, Bell, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StudentLoginPage() {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!regNo || !password) {
      setError("Please fill in both Registration No. and Password.");
      return;
    }
    setError("");
    setIsLoading(true);
    
    // Simulate Authentication Validation
    setTimeout(() => {
        setIsLoading(false);
        if(regNo.length < 5) {
            setError("Invalid University Registration No. Please verify.");
            return;
        }
        setSuccess(true);
        // Simulate redirect to dashboard
        setTimeout(() => {
            router.push("/");
        }, 1500);
    }, 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 relative flex items-center justify-center pt-24 pb-12 overflow-hidden selection:bg-[#003366] selection:text-white">
       
       {/* Ambient Backdrops */}
       <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
       <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none" />
       <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10 flex justify-center">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200 backdrop-blur-3xl">
             
             {/* Left Column / Image & Branding */}
             <div className="w-full md:w-5/12 bg-[#001a33] relative p-10 lg:p-14 flex flex-col justify-between items-start text-white overflow-hidden group">
               <Image 
                 src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                 fill 
                 alt="Library" 
                 className="object-cover opacity-20 filter grayscale mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-1000"
                 unoptimized
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#001122] via-[#001122]/80 to-transparent" />
               
               <div className="relative z-10 w-full mb-16 md:mb-0">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-900/50 -rotate-3 hover:rotate-0 transition-transform">
                     <GraduationCap size={32} className="text-[#003366]" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black font-playfair mb-4 leading-tight tracking-tight">
                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-amber-300">Gateway</span>
                  </h2>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    Access your academic records, class schedules, internal circulars, and the grievance redressal portal—all in one place.
                  </p>
               </div>

               <div className="relative z-10 w-full hidden md:block mt-8">
                 <div className="w-full h-px bg-white/10 mb-6" />
                 <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-emerald-400"><Sparkles size={14}/></div>
                      <span className="font-medium">Unified digital campus experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-blue-400"><Building2 size={14}/></div>
                      <span className="font-medium">Connect instantly with your department</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-amber-400"><Bell size={14}/></div>
                      <span className="font-medium">Real-time alerts and assignment notices</span>
                    </div>
                 </div>
               </div>
             </div>

             {/* Right Column / Login Form */}
             <div className="w-full md:w-7/12 bg-white p-10 lg:p-14 relative z-20">
               <div className="max-w-md mx-auto h-full flex flex-col justify-center">
                 
                 <div className="mb-10 text-center md:text-left">
                   <h3 className="text-2xl font-black text-slate-900 mb-2 font-playfair">Welcome back, Scholar!</h3>
                   <p className="text-slate-500 text-sm font-medium">Please enter your University ID and password to continue.</p>
                 </div>

                 {error && (
                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600 text-sm font-semibold animate-pulse">
                     <span className="shrink-0 text-lg">⚠️</span> {error}
                   </motion.div>
                 )}
                 
                 {success && (
                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3 text-emerald-600 text-sm font-bold shadow-lg shadow-emerald-500/10">
                     <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">✓</span> Authentication successful! Redirecting...
                   </motion.div>
                 )}

                 <form onSubmit={handleLogin} className="space-y-6">
                    {/* User ID Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">University Registration No.</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                          <User size={18} />
                        </div>
                        <input 
                          type="text" 
                          value={regNo}
                          onChange={(e) => setRegNo(e.target.value)}
                          placeholder="Ex: 21102126005"
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all focus:bg-white shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                       <div className="flex justify-between items-center ml-1">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Password</label>
                          <Link href="/student-login/forgot-password" className="text-sm font-bold text-[#003366] hover:text-[#0055aa] transition-colors hover:underline">Forgot Password?</Link>
                       </div>
                       <div className="relative group">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                           <Lock size={18} />
                         </div>
                         <input 
                           type={showPassword ? "text" : "password"} 
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter your password"
                           className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all focus:bg-white shadow-sm"
                         />
                         <button 
                           type="button" 
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#003366] transition-colors focus:outline-none"
                         >
                           {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                         </button>
                       </div>
                    </div>

                    {/* Action Area */}
                    <div className="pt-2">
                       <button 
                         type="submit" 
                         disabled={isLoading || success}
                         className="w-full bg-[#003366] hover:bg-[#002244] text-white font-bold py-4 rounded-xl shadow-xl shadow-[#003366]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"
                       >
                         {isLoading ? (
                           <>Authenticating <Loader2 size={18} className="animate-spin" /></>
                         ) : (
                           <>Secure Login <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                         )}
                       </button>
                    </div>
                 </form>

                 <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-500 text-sm font-medium">
                      First time user? <Link href="/student-login/activate" className="text-[#003366] font-bold hover:underline">Activate your account</Link>
                    </p>
                 </div>
               </div>
             </div>
          </motion.div>
       </div>
    </div>
  );
}
