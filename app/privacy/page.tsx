"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  HardDrive, 
  CloudLightning, 
  Sparkles, 
  Megaphone, 
  Layers, 
  Users, 
  Lock, 
  Calendar, 
  Globe, 
  RefreshCw, 
  Mail, 
  Play,
  ArrowLeft,
  Sun,
  Moon
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
}

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initial theme detection from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const sections: Section[] = [
    { id: "introduction", title: "1. Introduction", icon: BookOpen },
    { id: "local-data", title: "2. Locally Stored Data", icon: HardDrive },
    { id: "backend-data", title: "3. Backend Transmitted Data", icon: CloudLightning },
    { id: "ai-features", title: "4. Artificial Intelligence", icon: Sparkles },
    { id: "advertising", title: "5. Advertising", icon: Megaphone },
    { id: "third-party", title: "6. Third-Party Services", icon: Layers },
    { id: "children-privacy", title: "7. Children's Privacy", icon: Users },
    { id: "data-security", title: "8. Data Security", icon: Lock },
    { id: "data-retention", title: "9. Data Retention", icon: Calendar },
    { id: "intl-processing", title: "10. International Processing", icon: Globe },
    { id: "policy-changes", title: "11. Policy Changes", icon: RefreshCw },
    { id: "contact-us", title: "12. Contact Us", icon: Mail },
    { id: "google-play", title: "13. Google Play Compliance", icon: Play },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 font-sans ${isDarkMode ? 'bg-[#070b13] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* SOLID HEADER */}
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800/80' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02] active:scale-95">
            <Image
              src="/images/prepareailogo.jpeg"
              alt="ZED Prepare AI Logo"
              width={40}
              height={40}
              className="rounded-xl shadow-md object-cover"
              priority
            />
            <div>
              <span className={`text-xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                ZED <span className="text-orange-500">Prepare AI</span>
              </span>
              <p className={`text-[9px] uppercase tracking-widest font-semibold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Custom Study Platform</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${isDarkMode ? 'text-slate-400 hover:text-orange-400' : 'text-slate-500 hover:text-orange-500'}`}
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-200 ${isDarkMode
                ? 'bg-slate-900 border-slate-800 text-orange-400 hover:text-orange-300'
                : 'bg-white border-slate-200 text-orange-600 hover:bg-slate-100 shadow-sm'
                }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-16 px-6 relative overflow-hidden">
        {/* Solid SVG accents in background */}
        <div className="absolute right-10 bottom-0 opacity-10 pointer-events-none">
          <svg width="250" height="250" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="50,15 90,85 10,85" />
          </svg>
        </div>
        <div className="absolute left-10 top-0 opacity-10 pointer-events-none">
          <svg width="180" height="180" viewBox="0 0 100 100" fill="currentColor">
            <rect x="20" y="20" width="60" height="60" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block bg-orange-800/40 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4">
            Legal Document
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-orange-100 mt-2 font-medium text-base md:text-lg max-w-2xl">
            This policy outlines how ZED Prepare AI manages and protects user data in compliance with Google Play Developer Program Policies.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs text-orange-200">
            <span className="font-semibold bg-orange-800/30 px-3 py-1.5 rounded-lg border border-orange-400/20">
              Effective Date: July 8, 2026
            </span>
            <span className="font-semibold bg-orange-800/30 px-3 py-1.5 rounded-lg border border-orange-400/20">
              Last Updated: July 8, 2026
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className={`hidden lg:block lg:col-span-3 sticky top-28 border rounded-2xl p-4 shadow-sm max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-thin transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}>
            <h2 className={`text-xs font-black uppercase tracking-widest mb-4 px-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Table of Contents
            </h2>
            <nav className="space-y-1">
              {sections.map((sec) => {
                const IconComponent = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold transition-all ${
                      isActive
                        ? "bg-orange-500 text-white shadow-sm"
                        : isDarkMode
                          ? "text-slate-300 hover:bg-slate-800/50 hover:text-orange-400"
                          : "text-slate-600 hover:bg-slate-100 hover:text-orange-500"
                    }`}
                  >
                    <IconComponent size={16} className={isActive ? "text-white" : isDarkMode ? "text-slate-500 group-hover:text-orange-400" : "text-slate-400 group-hover:text-orange-500"} />
                    <span className="truncate">{sec.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* POLICY CONTENT */}
          <div className="col-span-1 lg:col-span-9 space-y-6">
            
            {/* Section 1 */}
            <section
              id="introduction"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <BookOpen size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  1. Introduction
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Welcome to <strong>ZED Prepare AI</strong> (&quot;the App&quot;), an educational mobile application developed by ZED Prepare AI.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, process, and protect information when you use our application.
                </p>
                <p>
                  Our goal is to provide a safe, secure, and personalized educational experience while respecting your privacy and complying with applicable laws and the Google Play Developer Program Policies.
                </p>
                <p>
                  By using ZED Prepare AI, you agree to this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="local-data"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <HardDrive size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  2. Information Stored on Your Device
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  To provide a personalized and efficient learning experience, ZED Prepare AI stores certain information locally on your device.
                </p>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  This information may include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
                  <li>Preferred name</li>
                  <li>Year of birth</li>
                  <li>Selected country</li>
                  <li>Selected curriculum</li>
                  <li>Selected class or grade</li>
                  <li>Selected subject</li>
                  <li>Selected topic</li>
                  <li>Downloaded quiz content</li>
                </ul>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  This information is used only to:
                </p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>Personalize the application interface.</li>
                  <li>Remember your learning preferences.</li>
                  <li>Improve application performance.</li>
                  <li>Reduce repeated configuration.</li>
                  <li>Enable faster access to previously downloaded educational content.</li>
                </ul>
                <p className={`border-t pt-4 mt-2 text-xs italic ${isDarkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'}`}>
                  Unless otherwise stated in this Privacy Policy, this locally stored information is not transmitted to our servers.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="backend-data"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <CloudLightning size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  3. Information Sent to Our Backend
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  To provide educational services, the App sends only the minimum information necessary to retrieve appropriate educational content.
                </p>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Depending on the requested feature, the following information may be transmitted:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Country:</strong> Used to determine available curricula</li>
                  <li><strong>Curriculum:</strong> Used to determine available classes, subjects, topics, and quizzes</li>
                  <li><strong>Class or Grade:</strong> Used to determine available subjects, topics, and quizzes</li>
                  <li><strong>Subject:</strong> Used to determine available topics and quizzes</li>
                  <li><strong>Topic:</strong> Used to retrieve the requested quiz</li>
                </ul>
                <p>
                  This information is transmitted only when required to provide the requested educational content.
                </p>
                <p>
                  Downloaded quiz content remains on your device after retrieval and is not uploaded back to our backend.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="ai-features"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Sparkles size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  4. Artificial Intelligence
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  ZED Prepare AI uses artificial intelligence hosted on our backend infrastructure to generate and prepare educational quiz content.
                </p>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  The AI service may receive educational information required to generate or retrieve quizzes, including:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
                  <li>Curriculum</li>
                  <li>Class or Grade</li>
                  <li>Subject</li>
                  <li>Topic</li>
                </ul>
                <p className={`font-semibold ${isDarkMode ? 'text-red-400' : 'text-red-500'}`}>
                  The AI service does not receive:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
                  <li>Preferred name</li>
                  <li>Year of birth</li>
                </ul>
                <p>
                  The AI functionality is used solely to improve educational content and learning experiences.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="advertising"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Megaphone size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  5. Advertising
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  ZED Prepare AI may display advertisements provided by third-party advertising partners, including Google Mobile Ads (AdMob).
                </p>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Advertising providers may automatically collect certain technical information such as:
                </p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>Advertising Identifier</li>
                  <li>Device information</li>
                  <li>App interaction information</li>
                  <li>Approximate location derived from IP address (where applicable)</li>
                  <li>Diagnostic information</li>
                </ul>
                <p>
                  This information is collected and processed by the advertising provider in accordance with its own privacy policies.
                </p>
                <p>
                  <strong>ZED Prepare AI does not sell your personal information to advertisers.</strong>
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="third-party"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Layers size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  6. Third-Party Services
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  To provide our services, we may use trusted third-party providers, including:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Amazon Web Services (AWS)</strong> for backend hosting and infrastructure.</li>
                  <li><strong>OpenAI</strong> for AI-powered educational content generation.</li>
                  <li><strong>Google Mobile Ads (AdMob)</strong> for advertising services.</li>
                  <li><strong>Google Play Services</strong> for essential platform functionality.</li>
                </ul>
                <p>
                  These providers process information only as necessary to deliver their respective services.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section
              id="children-privacy"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Users size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  7. Children&apos;s Privacy
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  ZED Prepare AI is designed as an educational application and may be used by learners of different age groups.
                </p>
                <p>
                  We encourage parents, guardians, teachers, and schools to supervise younger users when appropriate.
                </p>
                <p>
                  We do not knowingly collect more personal information from children than is reasonably necessary to provide the educational services offered by the App.
                </p>
                <p>
                  If you believe that a child has provided personal information contrary to applicable law, please contact us so that appropriate action can be taken.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section
              id="data-security"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Lock size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  8. Data Security
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  We implement reasonable administrative, technical, and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  These measures include secure communication, protected backend infrastructure, and access controls.
                </p>
                <p>
                  While we strive to protect your information, no method of electronic transmission or storage is completely secure.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section
              id="data-retention"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Calendar size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  9. Data Retention
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Information transmitted to our backend is retained only for as long as necessary to provide the requested services, improve application performance, comply with legal obligations, or resolve disputes.
                </p>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Information stored locally remains on your device until:
                </p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>You clear the application&apos;s data,</li>
                  <li>You uninstall the application, or</li>
                  <li>The application removes cached educational content.</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section
              id="intl-processing"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Globe size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  10. International Data Processing
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  Our backend infrastructure is hosted using Amazon Web Services (AWS).
                </p>
                <p>
                  Information required to provide our services may be processed in countries where our service providers operate, subject to appropriate safeguards.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section
              id="policy-changes"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <RefreshCw size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  11. Changes to This Privacy Policy
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  We may update this Privacy Policy from time to time to reflect improvements to our services, legal requirements, or operational changes.
                </p>
                <p>
                  When changes are made, we will update the &quot;Last Updated&quot; date shown at the top of this document.
                </p>
                <p>
                  Continued use of the App after updates constitutes acceptance of the revised Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section
              id="contact-us"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Mail size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  12. Contact Us
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className={`border rounded-xl p-4 space-y-2 ${isDarkMode ? 'bg-[#070b13] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <p className={`font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    ZED Prepare AI
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://prepareai.zionai.com.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                       https://prepareai.zionai.com.ng
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:o.olasegiri@zionai.com.ng"
                      className="text-orange-500 hover:underline"
                    >
                      o.olasegiri@zionai.com.ng
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section
              id="google-play"
              className={`border rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <Play size={24} />
                <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  13. Google Play Compliance
                </h2>
              </div>
              <div className={`space-y-4 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  This Privacy Policy is intended to support compliance with the Google Play Developer Program Policies, including requirements relating to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5">
                  <li>User Data</li>
                  <li>Families Policy (where applicable)</li>
                  <li>Data Safety</li>
                  <li>Advertising</li>
                  <li>Artificial Intelligence features</li>
                  <li>User privacy and transparency</li>
                </ul>
              </div>
            </section>

            {/* Copyright Note */}
            <div className={`text-center pt-8 text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <p>&copy; 2026 ZED Prepare AI. All rights reserved.</p>
            </div>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className={`mt-24 border-t pt-10 pb-8 transition-colors duration-300 ${isDarkMode ? 'bg-[#090d16] border-slate-800/80 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/prepareailogo.jpeg"
                  alt="ZED Prepare AI Logo"
                  width={40}
                  height={40}
                  className="rounded-xl shadow-md object-cover"
                />
                <div>
                  <p className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    ZED <span className="text-orange-500">Prepare AI</span>
                  </p>
                  <p className={`text-[10px] uppercase tracking-widest font-semibold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Custom Study Platform</p>
                </div>
              </div>
              <p className={`text-xs leading-relaxed max-w-xs text-center md:text-left ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                AI-powered exam practice for primary, secondary school students and candidates for WAEC, NECO &amp; JAMB.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-xs font-semibold">
              <div className="space-y-2">
                <p className={`uppercase tracking-widest text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Get the App</p>
                <a href="https://play.google.com/apps/internaltest/4701712521080049218" target="_blank" rel="noopener noreferrer" className="block hover:text-orange-500 transition">
                  🚀 Download on Android
                </a>
              </div>
              <div className="space-y-2">
                <p className={`uppercase tracking-widest text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Community</p>
                <a href="https://chat.whatsapp.com/K4Q6a3nRE4d18u19LUTZ0Z?s=cl&p=a&ilr=2" target="_blank" rel="noopener noreferrer" className="block hover:text-orange-500 transition">
                  WhatsApp Group
                </a>
              </div>
              <div className="space-y-2">
                <p className={`uppercase tracking-widest text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Legal</p>
                <Link href="/privacy" className="block hover:text-orange-500 transition">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <p className="text-xs font-medium text-slate-400 dark:text-slate-600">
              © 2026 ZED Prepare AI. Designed for every student who wants to succeed.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-slate-300 dark:text-slate-700">
                Prepared for WAEC · NECO · JAMB · School Exams
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
