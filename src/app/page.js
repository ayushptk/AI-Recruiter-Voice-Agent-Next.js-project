"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Bot, Brain, Sparkles, Rocket, ArrowRight, CheckCircle, Globe, Zap, Users, Shield, 
  Check, Plus, Minus, ChevronDown, Star, Twitter, Linkedin, Github, Facebook, Instagram 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// --- Components ---

const IntroScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <Bot size={80} className="relative z-10 text-white" />
        </div>
        <motion.h1
          className="mt-8 text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          AI Recruiter
        </motion.h1>
        <motion.div
          className="mt-4 h-1 w-32 bg-gray-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", onComplete }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Bot size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">RecruitAI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth">
            <Button variant="ghost" className="text-gray-300 hover:text-white hidden sm:flex hover:bg-white/10 cursor-pointer">
              Sign In
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-white text-black hover:bg-gray-200 transition-all rounded-full px-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-sm">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-300">New Generation AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Hire Smarter with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Autonomous AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Automate sourcing, screening, and scheduling. Let our AI agents handle the noise so you can focus on the best talent.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12 text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
              Start Hiring <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-black  rounded-full px-8 h-12 text-lg backdrop-blur-sm hover:border-white/40">
              View Demo 
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden relative">
                  <Image 
                    src={`/avatars/user${i}.jpg`}
                    alt={`User ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p>Trusted by 500+ innovative companies</p>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          className="relative lg:h-[600px] hidden lg:block"
        >
          {/* Dashboard Mockup 3D Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden backdrop-blur-xl"
            initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
            animate={{ rotateY: -10, rotateX: 5, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            style={{ perspective: 1000 }}
          >
             {/* Simple UI Mockup */}
             <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-500 font-mono">AI Match Score Analysis</div>
             </div>
             
             <div className="space-y-4">
               {[
                 { name: "Sarah Chen", role: "Sr. Frontend Dev", score: 98, color: "text-green-400", img: "/avatars/user2.jpg" },
                 { name: "Michael Ross", role: "Product Designer", score: 92, color: "text-green-400", img: "/avatars/user3.jpg" },
                 { name: "David Kim", role: "Backend Engineer", score: 85, color: "text-yellow-400", img: "/avatars/user5.jpg" },
               ].map((candidate, i) => (
                 <motion.div 
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 + (i * 0.2) }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                 >
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden relative border border-white/10 group-hover:border-blue-500/50 transition-colors">
                       <Image 
                         src={candidate.img}
                         alt={candidate.name}
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div>
                       <div className="font-medium text-white group-hover:text-blue-400 transition-colors">{candidate.name}</div>
                       <div className="text-xs text-gray-500">{candidate.role}</div>
                     </div>
                   </div>
                   <div className={`font-bold ${candidate.color} bg-white/5 px-3 py-1 rounded-full text-sm`}>{candidate.score}%</div>
                 </motion.div>
               ))}

               <motion.div
                 className="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-md"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 2.5 }}
               >
                 <div className="flex gap-3">
                   <Bot className="text-blue-400 shrink-0" />
                   <p className="text-sm text-blue-100">
                     Based on the technical assessment, <span className="font-semibold text-white">Sarah</span> shows exceptional proficiency in React and System Design. Recommended for interview.
                   </p>
                 </div>
               </motion.div>
             </div>
          </motion.div>
          
          {/* Floating card */}
          <motion.div
            className="absolute -bottom-10 -left-10 bg-gray-900/90 border border-white/10 p-4 rounded-xl shadow-xl z-20 backdrop-blur-md"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle size={20} className="text-green-500" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Interview Scheduled</div>
                <div className="text-xs text-gray-500">Tomorrow, 10:00 AM</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div 
      className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        <Icon size={28} className="text-blue-400 group-hover:text-blue-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { icon: Brain, title: "Intelligent Screening", desc: "Our AI analyzes resumes with human-like understanding to surface top talent instantly." },
    { icon: Zap, title: "Automated Outreach", desc: "Engage candidates with personalized sequences across email and LinkedIn on autopilot." },
    { icon: Users, title: "Unbiased Matching", desc: "Reduce unconscious bias with skills-first matching algorithms that verify capabilities." },
    { icon: Globe, title: "Global Sourcing", desc: "Scan millions of profiles across multiple platforms to find passive candidates globally." },
    { icon: Shield, title: "Enterprise Security", desc: "SOC2 Type II compliant platform ensuring your candidate data is always protected." },
    { icon: Rocket, title: "Fast Integration", desc: "Connects seamlessly with your existing ATS in minutes, not months." },
  ];

  return (
    <section id="features" className="py-24 bg-black relative">
       <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-20">
           <motion.h2 
             className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             Supercharge Your Hiring Analysis
           </motion.h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Everything you need to find, screen, and hire the best talent 10x faster.
           </p>
         </div>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {features.map((f, i) => (
             <FeatureCard key={i} {...f} delay={i * 0.1} />
           ))}
         </div>
       </div>
    </section>
  );
};

// --- New Components ---

const Testimonials = () => {
    const testimonials = [
        {
            name: "Emily Watson",
            role: "Head of Talent, TechFlow",
            content: "We reduced our time-to-hire by 60% within the first month. The AI candidates matching is eerily accurate.",
            image: "/avatars/user4.jpg",
            stars: 5
        },
        {
            name: "James Carter",
            role: "CTO, StartUp Inc",
            content: "Finally, a tool that understands technical requirements better than most recruiters. A game changer for us.",
            image: "/avatars/user1.jpg",
            stars: 5
        },
        {
            name: "Sofia Rodriguez",
            role: "HR Director, GlobalCorp",
            content: "The automated outreach feature alone saved us hundreds of hours. Highly recommended for scaling teams.",
            image: "/avatars/user2.jpg",
            stars: 5
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-zinc-900/30 relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
             </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Loved by Hiring Teams</h2>
                    <p className="text-gray-400 text-lg">Don't just take our word for it.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, s) => (
                                    <Star key={s} size={16} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/20">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-sm text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$0",
            period: "/forever",
            desc: "Perfect for reliable individual sourcing.",
            features: ["50 AI candidates/month", "Basic email sequencing", "LinkedIn extension", "Standard support"],
            cta: "Start for Free",
            popular: false
        },
        {
            name: "Growth",
            price: "$149",
            period: "/month",
            desc: "For growing teams that need to scale fast.",
            features: ["Unlimited AI candidates", "Advanced automated outreach", "Team collaboration", "ATS integration", "Priority support"],
            cta: "Get Started",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            desc: "Full power for large organizations.",
            features: ["Custom AI models", "Dedicated success manager", "SSO & Advanced Security", "Custom reporting", "SLA guarantees"],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Simple, Transparent Pricing
                    </motion.h2>
                    <p className="text-gray-400 text-lg">Choose the plan that fits your scaling needs.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                                plan.popular 
                                    ? "bg-white/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-105 z-10" 
                                    : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-500">{plan.period}</span>
                                </div>
                                <p className="text-gray-400 mt-4 text-sm">{plan.desc}</p>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, f) => (
                                    <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-blue-400" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                className={`w-full h-12 rounded-xl font-medium transition-all ${
                                    plan.popular 
                                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25" 
                                        : "bg-white text-black hover:bg-gray-200"
                                }`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQ = () => {
    const faqs = [
        { q: "How does the AI matching algorithm work?", a: "Our AI analyzes data points from resumes, portfolios, and coding repositories to create a comprehensive candidate profile. It then matches these profiles against your job descriptions using semantic search to find the best fit, not just keyword matches." },
        { q: "Can I integrate RecruitAI with my existing ATS?", a: "Yes! We support seamless 1-click integrations with all major ATS platforms including Greenhouse, Lever, Ashby, and Workday. Your data syncs in real-time." },
        { q: "Is the data secure and compliant?", a: "Absolutely. We are SOC2 Type II compliant and GDPR ready. Your data is encrypted at rest and in transit, and we never use your proprietary data to train our global models without permission." },
        { q: "Can I try it before I buy?", a: "Yes, our Starter plan is completely free forever. You can test out the core features and see the quality of candidates before upgrading to a paid plan." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-zinc-900/30">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium text-white text-lg">{faq.q}</span>
                                <ChevronDown 
                                    className={`text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} 
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="#" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <Bot size={20} className="text-white" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">RecruitAI</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            The future of hiring is autonomous. Join thousands of companies building better teams with AI.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {[
                        { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog", "Docs"] },
                        { title: "Company", links: ["About Us", "Careers", "Blog", "Contact", "Partners"] },
                        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"] }
                    ].map((col, i) => (
                        <div key={i}>
                            <h4 className="font-bold text-white mb-6">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link, l) => (
                                    <li key={l}>
                                        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-200">
                    <p>© 2026 AI Recruiter Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-200 text-gray-200">Privacy</a>
                        <a href="#" className="hover:text-gray-200 text-gray-200">Terms</a>
                        <a href="#" className="hover:text-gray-200 text-gray-200">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
      <AnimatePresence>
        {showIntro && (
          <IntroScreen onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <main className="relative z-0">
          <Navbar />
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQ />
          
          {/* CTA Section */}
          <section className="py-32 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20" />
             <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Ready to Transform Your Hiring?
                </motion.h2>
                <p className="text-xl text-gray-400 mb-10">
                  Join 500+ companies using AI to build world-class teams.
                </p>
                <Link href="/auth">
                  <Button className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100 hover:scale-105 transition-transform duration-200 cursor-pointer">
                    Start Your Free Trial
                  </Button>
                </Link>
             </div>
          </section>
          
          <Footer />
        </main>
      )}
    </div>
  );
}
