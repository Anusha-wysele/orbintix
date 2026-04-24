import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const highlights = [
        "Work on real-world projects",
        "Learn from industry experts",
        "Grow your career faster"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
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
                            Start Your <br />
                            <span className="text-[#FFC107]">Journey</span> <br />
                            With Us
                        </h1>

                        <p className="text-[#6B7280] text-xl mb-8 font-medium leading-relaxed font-dm-sans max-w-md">
                            Join a team that builds innovative solutions and grows together. Experience excellence in IT consulting.
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

                    {/* Decorative Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,193,7,0.05)_0%,transparent_70%)] -z-10 animate-pulse" />
                </div>
            </div>

            {/* Right Side: Sign Up Form */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-3xl bg-white p-8 lg:p-10 rounded-none border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-black text-[#111111] uppercase tracking-tighter mb-2">Create Account</h2>
                        <p className="text-[#111111]/60 font-medium font-dm-sans">Join the elite squad of innovators.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-[#111111] uppercase tracking-widest ml-1 opacity-50">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FFC107] transition-colors" size={18} />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-none px-12 py-4 text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFC107]/10 focus:border-[#FFC107] transition-all font-dm-sans"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                            </div>

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
                                <label className="text-[10px] font-black text-[#111111] uppercase tracking-widest ml-1 opacity-50">Password</label>
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

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-[#111111] uppercase tracking-widest ml-1 opacity-50">Confirm Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FFC107] transition-colors" size={18} />
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-none px-12 py-4 text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFC107]/10 focus:border-[#FFC107] transition-all font-dm-sans"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full relative group/btn py-5 bg-[#FFC107] text-[#111111] font-black uppercase text-xs tracking-[0.2em] rounded-none overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(255,193,7,0.3)] mt-6"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                                Create Account
                                <ArrowRight size={16} />
                            </span>
                        </button>
                    </form>



                    <p className="text-center mt-10 text-[#111111] font-medium font-dm-sans opacity-60">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-[#FFC107] font-black uppercase text-xs tracking-widest border-b border-[#FFC107]/20 hover:border-[#FFC107] transition-all ml-1 opacity-100">
                            Sign In
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
