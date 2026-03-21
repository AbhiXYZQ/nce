"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, Calendar, ShieldCheck, ArrowRight, ArrowLeft, Loader2, CheckCircle2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ActivateAccountPage() {
  const [formData, setFormData] = useState({
    regNo: "",
    dob: "",
    password: "",
    confirmPassword: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleActivation = (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.regNo || !formData.dob || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all mandatory fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulate API request to activate account
    setTimeout(() => {
      setIsLoading(false);
      
      // Simulate checking length to throw an example error
      if (formData.regNo.length < 5) {
          setError("Records not found for this Registration Number.");
          return;
      }

      setSuccess(true);
      
      // Redirect back to login after successful activation
      setTimeout(() => {
         router.push("/student-login");
      }, 2500);

    }, 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 relative flex items-center justify-center pt-24 pb-12 overflow-hidden selection:bg-[#003366] selection:text-white">
      
      {/* Ambient Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23003366\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200">
           
           {/* Header Banner */}
           <div className="bg-[#001a33] px-8 py-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <ShieldCheck size={32} className="text-emerald-400" />
              </div>
              <h2 className="text-3xl font-black font-playfair text-white mb-2">Activate Account</h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                First-time users must verify their identity using university records to set up access credentials.
              </p>
           </div>

           {/* Form Content */}
           <div className="p-8 md:p-12 relative bg-white">
             
             {error && (
               <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600 text-sm font-semibold animate-pulse">
                 <span className="shrink-0 text-lg">⚠️</span> {error}
               </motion.div>
             )}
             
             {success ? (
               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center flex flex-col items-center">
                 <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 size={40} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-2">Account Activated!</h3>
                 <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
                   Your student account has been successfully verified and activated. Preparing to redirect you to the Login Gateway...
                 </p>
               </motion.div>
             ) : (
               <form onSubmit={handleActivation} className="space-y-6">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {/* Reg No */}
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Registration No.</label>
                     <div className="relative group">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                         <User size={18} />
                       </div>
                       <input 
                         type="text" 
                         name="regNo"
                         value={formData.regNo}
                         onChange={handleInputChange}
                         placeholder="Ex: 21102126005"
                         className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all bg-white shadow-sm"
                       />
                     </div>
                   </div>

                   {/* Date of Birth */}
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Date of Birth</label>
                     <div className="relative group">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                         <Calendar size={18} />
                       </div>
                       <input 
                         type="date"
                         name="dob" 
                         value={formData.dob}
                         onChange={handleInputChange}
                         className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all bg-white shadow-sm"
                       />
                     </div>
                   </div>
                 </div>

                 {/* New Password */}
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Create Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Must be at least 6 characters"
                        className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all bg-white shadow-sm"
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
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Confirm Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#003366] transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Re-enter to confirm"
                        className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/50 focus:border-[#003366] transition-all bg-white shadow-sm"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#003366] transition-colors focus:outline-none"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                 </div>

                 {/* Actions */}
                 <div className="pt-6 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-slate-100">
                    <Link href="/student-login" className="flex items-center gap-2 text-slate-500 font-bold hover:text-[#003366] transition-colors w-full md:w-auto justify-center order-2 md:order-1 px-4 py-3">
                       <ArrowLeft size={18} /> Back to Login
                    </Link>
                    
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none order-1 md:order-2"
                    >
                      {isLoading ? (
                        <>Verifying <Loader2 size={18} className="animate-spin" /></>
                      ) : (
                        <>Activate Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </button>
                 </div>
               </form>
             )}
             
             {/* Security Note */}
             {!success && (
               <p className="text-center text-xs text-slate-400 mt-8 font-medium">
                 Secured by NCE Central Authentication System. Never share your passwords with anyone.
               </p>
             )}

           </div>
        </motion.div>
      </div>
    </div>
  );
}
