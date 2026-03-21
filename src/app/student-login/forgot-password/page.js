"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, ArrowRight, ArrowLeft, Loader2, CheckCircle2, ShieldAlert, KeyRound, MailCheck, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1); // 1: Request Reset, 2: Verify & New Password
  
  const [regNo, setRegNo] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleRequestReset = (e) => {
    e.preventDefault();
    if (!regNo) {
      setError("Please enter your University Registration number.");
      return;
    }
    
    setError("");
    setIsLoading(true);

    // Simulate looking up user & sending OTP
    setTimeout(() => {
      setIsLoading(false);
      if (regNo.length < 5) {
        setError("Account not found. Ensure the Registration No. is correct.");
        return;
      }
      // Move to step 2
      setStep(2);
    }, 1500);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!otp || !newPassword || !confirmPassword) {
      setError("Please fill in all the required fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulate password change
    setTimeout(() => {
      setIsLoading(false);
      if (otp !== "123456") { // Dummy validation to show error
         // Ideally OTP can be anything for demo, but let's just let it pass or show dummy logic
      }
      setSuccess(true);
      
      // Redirect back to login
      setTimeout(() => {
         router.push("/student-login");
      }, 3000);
    }, 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 relative flex items-center justify-center pt-24 pb-12 overflow-hidden selection:bg-[#003366] selection:text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] z-0" style={{ backgroundImage: 'radial-gradient(circle, #003366 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-red-400/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="w-full max-w-[500px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200">
           
           {/* Header Banner */}
           <div className="bg-[#001a33] px-8 py-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay" />
              <div className="w-16 h-16 bg-white/5 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-5 backdrop-blur-md shadow-lg shadow-black/20">
                <KeyRound size={28} className="text-amber-400" />
              </div>
              <h2 className="text-2xl font-black font-playfair text-white mb-2 tracking-tight">Recover Password</h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                Securely reset your portal access credentials in two simple steps.
              </p>
           </div>

           {/* Dynamic Form Area */}
           <div className="p-8 md:p-10 relative bg-white min-h-[400px]">
             
             {error && (
               <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600 text-sm font-semibold animate-pulse">
                 <span className="shrink-0 text-lg">⚠️</span> {error}
               </motion.div>
             )}
             
             <AnimatePresence mode="wait">
               
               {success ? (
                 <motion.div key="success" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="py-6 text-center flex flex-col items-center">
                   <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 size={40} />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-2">Password Reset!</h3>
                   <p className="text-slate-500 leading-relaxed text-sm">
                     Your new password has been successfully configured. Returning you to the Student Gateway...
                   </p>
                 </motion.div>
               ) : step === 1 ? (
                 <motion.form key="step1" variants={fadeUp} initial="hidden" animate="visible" exit="exit" onSubmit={handleRequestReset} className="space-y-6">
                   
                   <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100 mb-6">
                     <ShieldAlert size={20} className="text-amber-500 shrink-0" />
                     <p className="text-xs text-amber-700 font-medium leading-relaxed">Enter your registered University ID. An OTP will be dispatched to your registered email and mobile number instantly.</p>
                   </div>

                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Registration No.</label>
                     <div className="relative group">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                         <User size={18} />
                       </div>
                       <input 
                         type="text" 
                         value={regNo}
                         onChange={(e) => setRegNo(e.target.value)}
                         placeholder="Ex: 21102126005"
                         className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all bg-white shadow-sm"
                       />
                     </div>
                   </div>

                   <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-100">
                      <Link href="/student-login" className="flex items-center gap-2 text-slate-500 font-bold hover:text-[#003366] transition-colors text-sm order-2 sm:order-1 px-2 py-3">
                         <ArrowLeft size={16} /> Cancel
                      </Link>
                      
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244] text-white font-bold py-3.5 px-8 rounded-xl shadow-xl shadow-[#003366]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none order-1 sm:order-2"
                      >
                        {isLoading ? (
                          <>Scanning <Loader2 size={18} className="animate-spin" /></>
                        ) : (
                          <>Proceed <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                   </div>
                 </motion.form>
               ) : (
                 <motion.form key="step2" variants={fadeUp} initial="hidden" animate="visible" exit="exit" onSubmit={handleResetPassword} className="space-y-6">
                   
                   <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100 mb-6 font-medium">
                     <MailCheck size={20} className="text-blue-500 shrink-0" />
                     <div className="text-xs text-blue-700 leading-relaxed">
                        OTP dispatched. Verify and create a strong new password to regain access.
                     </div>
                   </div>

                   {/* OTP Field */}
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Received OTP</label>
                     <input 
                       type="text" 
                       value={otp}
                       onChange={(e) => setOtp(e.target.value)}
                       placeholder="Enter 6-digit code"
                       className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-bold tracking-widest placeholder:tracking-normal placeholder:font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all focus:bg-white shadow-sm text-center text-lg"
                       maxLength={6}
                     />
                   </div>

                   {/* New Password */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">New Password</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                          <Lock size={18} />
                        </div>
                        <input 
                          type={showPassword ? "text" : "password"} 
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="At least 6 characters"
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

                   {/* Confirm Password */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Confirm New Password</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                          <Lock size={18} />
                        </div>
                        <input 
                          type={showPassword ? "text" : "password"} 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Re-enter to confirm"
                          className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all focus:bg-white shadow-sm"
                        />
                      </div>
                   </div>

                   {/* Actions */}
                   <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-100">
                      <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 text-slate-500 font-bold hover:text-[#003366] transition-colors text-sm px-2 py-3 order-2 sm:order-1">
                         <ArrowLeft size={16} /> Go Back
                      </button>
                      
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none order-1 sm:order-2"
                      >
                        {isLoading ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <>Reset Password <CheckCircle2 size={18} /></>
                        )}
                      </button>
                   </div>
                 </motion.form>
               )}
             </AnimatePresence>
             
           </div>
        </div>
      </div>
    </div>
  );
}
