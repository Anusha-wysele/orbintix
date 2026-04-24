import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const highlights = [
        "Access your dashboard",
        "Continue your work seamlessly",
        "Stay connected with your team"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signin submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row relative overflow-hidden font-outfit">

            {/* Subtle Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(255,193,7,0.08),transparent)] pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Left Side: Branding & Message */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 z-10">
                <div className="max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to="/" className="inline-block mb-8 group">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#FFC107] flex items-center justify-center rounded-none shadow-[4px_4px_0px_#111111]">
                                    <span className="text-[#111111] font-black text-xl">O</span>
                                </div>
                                <span className="text-2xl font-black text-[#111111] tracking-tighter uppercase">Orbintix</span>
                            </div>
                        </Link>

                        <h1 className="text-5xl lg:text-7xl font-black text-[#111111] leading-[0.9] uppercase tracking-tighter mb-8">
                            Welcome <br />
                            <span className="text-[#FFC107]">Back</span>
                        </h1>

                        <p className="text-[#111111]/60 text-xl mb-8 font-medium leading-relaxed font-dm-sans max-w-md">
                            Sign in to continue building, growing, and innovating with us. Your elite workspace awaits.
                        </p>

                        <div className="space-y-6">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#FFC107]/10 flex items-center justify-center text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-white transition-colors duration-300">
                                        <Check size={14} strokeWidth={4} />
                                    </div>
                                    <span className="text-[#111111] font-bold text-lg tracking-tight uppercase">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Sign In Form */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-xl bg-white p-8 lg:p-10 rounded-none border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                    <div className="mb-6 text-center lg:text-left">
                        <h2 className="text-3xl font-black text-[#111111] uppercase tracking-tighter mb-2">Sign In</h2>
                        <p className="text-[#111111]/60 font-medium font-dm-sans">Elite access to your consulting dashboard.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-y-5">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-[#111111] uppercase tracking-widest ml-1 opacity-50">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FFC107] transition-colors" size={18} />
                                    <input
                                        required
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-none px-12 py-4 text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFC107]/10 focus:border-[#FFC107] transition-all font-dm-sans"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[10px] font-black text-[#111111] uppercase tracking-widest opacity-50">Password</label>
                                    <Link to="/forgot-password" size="sm" className="text-[10px] font-black text-[#FFC107] uppercase tracking-widest hover:text-[#E6AC00] transition-colors">
                                        Forgot?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FFC107] transition-colors" size={18} />
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-none px-12 py-4 text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFC107]/10 focus:border-[#FFC107] transition-all font-dm-sans"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#111111] transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center px-1">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        className="peer sr-only"
                                        checked={formData.rememberMe}
                                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                    />
                                    <div className="w-5 h-5 border-2 border-gray-200 rounded-none bg-gray-50 peer-checked:bg-[#FFC107] peer-checked:border-[#FFC107] transition-all" />
                                    <Check size={12} className="absolute text-[#111111] opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={4} />
                                </div>
                                <span className="text-xs font-black text-[#111111] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Remember me</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full relative group/btn py-5 bg-[#FFC107] text-[#111111] font-black uppercase text-xs tracking-[0.2em] rounded-none overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(255,193,7,0.3)] mt-4"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                                Sign In
                                <ArrowRight size={16} />
                            </span>
                        </button>
                    </form>

                    <p className="text-center mt-8 text-[#111111] font-medium font-dm-sans opacity-60">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-[#FFC107] font-black uppercase text-xs tracking-widest border-b border-[#FFC107]/20 hover:border-[#FFC107] transition-all ml-1 opacity-100">
                            Sign Up
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
