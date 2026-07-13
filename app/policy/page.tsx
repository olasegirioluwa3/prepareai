"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  FileText,
  Globe2,
  ShieldCheck,
  Database,
  Users,
  Lock,
  Calendar,
  UserCheck,
  Globe,
  RefreshCw,
  Mail,
  Play,
  Server,
  Scale,
  Handshake,
  ArrowLeft,
  Sun,
  Moon,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  icon: LucideIcon;
}

const sections: PolicySection[] = [
  { id: "introduction", title: "1. Introduction", icon: BookOpen },
  { id: "definitions", title: "2. Definitions", icon: FileText },
  { id: "scope", title: "3. Scope of Services", icon: Globe2 },
  { id: "roles", title: "4. Roles & Responsibilities", icon: Users },
  { id: "data-collection", title: "5. Data Collection", icon: Database },
  { id: "data-sources", title: "6. Data Sources", icon: Server },
  { id: "purpose", title: "7. Purpose of Processing", icon: ShieldCheck },
  { id: "student-app", title: "8. ZED Student App", icon: Play },
  { id: "data-sharing", title: "9. Data Sharing", icon: Globe },
  { id: "retention", title: "10. Data Retention", icon: Calendar },
  { id: "security", title: "11. Data Security", icon: Lock },
  { id: "user-rights", title: "12. User Rights", icon: UserCheck },
  { id: "children", title: "13. Children & Student Data", icon: Users },
  { id: "third-party", title: "14. Third-Party Services", icon: Handshake },
  { id: "intl-transfers", title: "15. International Transfers", icon: Globe2 },
  { id: "compliance", title: "16. Compliance", icon: Scale },
  { id: "policy-changes", title: "17. Policy Changes", icon: RefreshCw },
  { id: "contact", title: "18. Contact Information", icon: Mail },
  { id: "google-play", title: "19. Google Play Data Safety", icon: Play },
  { id: "consent", title: "20. Consent", icon: Handshake },
];

const cardClass = (dark: boolean) =>
  `rounded-2xl p-6 md:p-8 border shadow-sm transition-colors duration-300 ${dark
    ? "bg-[#0f1422] border-slate-800"
    : "bg-white border-slate-200 shadow-sm"
  }`;

const headingClass = (dark: boolean) =>
  `text-xl md:text-2xl font-black tracking-tight ${dark ? "text-white" : "text-slate-900"}`;

const bodyClass = (dark: boolean) =>
  `text-sm md:text-base leading-relaxed space-y-4 ${dark ? "text-slate-400" : "text-slate-600"}`;

const listClass = "list-disc pl-5 space-y-1";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isDark, setIsDark] = useState(false);

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 180;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const toggle = () => setIsDark((p) => !p);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? "bg-[#070b13] text-slate-100" : "bg-slate-50 text-slate-800"
        }`}
    >
      {/* ── HEADER ─────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${isDark ? "bg-[#070b13] border-slate-800/80" : "bg-white border-slate-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src="/images/prepareailogo.jpeg"
              alt="ZED Prepare AI Logo"
              width={38}
              height={38}
              className="rounded-xl object-cover shadow-md"
              priority
            />
            <div>
              <p className={`text-base font-black tracking-tight leading-none ${isDark ? "text-white" : "text-slate-900"}`}>
                ZED <span className="text-orange-500">Prepare AI</span>
              </p>
              <p className={`text-[9px] uppercase tracking-widest font-semibold ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                Custom Study Platform
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors hover:text-orange-500 ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              <ArrowLeft size={13} />
              Back to Home
            </Link>

            <button
              onClick={toggle}
              title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
              className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all border ${isDark
                  ? "bg-slate-900 border-slate-700 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-orange-500 to-orange-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute right-12 bottom-0 opacity-10 pointer-events-none">
          <svg width="260" height="260" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="50,10 95,90 5,90" />
          </svg>
        </div>
        <div className="absolute left-8 top-4 opacity-10 pointer-events-none">
          <svg width="160" height="160" viewBox="0 0 100 100" fill="currentColor">
            <rect x="15" y="15" width="70" height="70" rx="12" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-black/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <ShieldCheck size={11} /> Legal Document
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-orange-100 mt-3 font-medium text-base md:text-lg max-w-2xl leading-relaxed">
            This policy explains how Zion Reborn Limited handles student and institutional data across the ZED ecosystem, including the web platform and student mobile app.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-xs text-orange-200">
            <span className="font-semibold bg-black/20 px-3 py-1.5 rounded-lg border border-orange-300/20">
              Effective Date: March 17, 2026
            </span>
            <span className="font-semibold bg-black/20 px-3 py-1.5 rounded-lg border border-orange-300/20">
              Last Updated: March 17, 2026
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN ──────────────────────────────────────── */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* SIDEBAR */}
          <aside className={`hidden lg:block lg:col-span-3 sticky top-24 rounded-2xl border p-4 shadow-sm max-h-[calc(100vh-130px)] overflow-y-auto transition-colors duration-300 ${isDark ? "bg-[#0d1220] border-slate-800" : "bg-white border-slate-200"}`}>
            <p className={`text-[10px] font-black uppercase tracking-widest mb-4 px-2 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
              Table of Contents
            </p>
            <nav className="space-y-0.5">
              {sections.map((sec) => {
                const Icon = sec.icon;
                const active = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-bold transition-all ${active
                        ? "bg-orange-500 text-white shadow-sm"
                        : isDark
                          ? "text-slate-400 hover:bg-slate-800 hover:text-orange-400"
                          : "text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                  >
                    <Icon size={13} className={active ? "text-white" : ""} />
                    <span className="truncate leading-snug">{sec.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* CONTENT */}
          <div className="col-span-1 lg:col-span-9 space-y-5">

            {/* 1 · Introduction */}
            <section id="introduction" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <BookOpen size={22} />
                <h2 className={headingClass(isDark)}>1. Introduction</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p>
                  Zion Reborn Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of users of our products and services. This Privacy Policy applies to all services provided under the ZED ecosystem, including:
                </p>
                <ul className={listClass}>
                  <li>ZED Web Platform (Admin Portal)</li>
                  <li>ZED Web Platform (Staff Portal)</li>
                  <li>ZED Web Platform (Student Portal)</li>
                  <li>ZED Mobile Application for Students</li>
                </ul>
                <p>
                  By accessing or using any of our services, you agree to the terms of this Privacy Policy.
                </p>
              </div>
            </section>

            {/* 2 · Definitions */}
            <section id="definitions" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <FileText size={22} />
                <h2 className={headingClass(isDark)}>2. Definitions</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    ["ZED Platform", "The suite of web-based portals developed and operated by Zion Reborn Limited."],
                    ["ZED Student App", "The mobile application designed for students."],
                    ["User", "Students, staff, administrators, or any person using the platform."],
                    ["Institution", "Schools or organizations using ZED services."],
                    ["Personal Data", "Any information that identifies a student or user."],
                    ["Processing", "Collection, storage, retrieval, or use of data."],
                    ["Data Controller", "The institution that determines how data is used."],
                    ["Data Processor", "Zion Reborn Limited."],
                  ].map(([term, def]) => (
                    <li key={term} className="flex gap-2">
                      <ChevronRight size={14} className="text-orange-500 mt-1 shrink-0" />
                      <span><strong className={isDark ? "text-slate-200" : "text-slate-800"}>{term}:</strong> {def}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 3 · Scope */}
            <section id="scope" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Globe2 size={22} />
                <h2 className={headingClass(isDark)}>3. Scope of Services Covered</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p>This Privacy Policy applies to:</p>
                <ul className={listClass}>
                  <li>ZED Admin Portal (used by institutions)</li>
                  <li>ZED Staff Portal</li>
                  <li>ZED Student Portal</li>
                  <li>ZED Student Mobile Application</li>
                  <li>APIs and backend systems hosted on cloud infrastructure</li>
                  <li>Any future services developed by Zion Reborn Limited</li>
                </ul>
              </div>
            </section>

            {/* 4 · Roles */}
            <section id="roles" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Users size={22} />
                <h2 className={headingClass(isDark)}>4. Roles and Responsibilities</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <div className="space-y-5">
                  <div>
                    <p className={`font-bold mb-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>4.1 Zion Reborn Limited</p>
                    <ul className={listClass}>
                      <li>Acts primarily as a Data Processor.</li>
                      <li>Provides software infrastructure and hosting services.</li>
                      <li>Processes data only on instructions from institutions.</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-bold mb-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>4.2 Institutions (Schools)</p>
                    <ul className={listClass}>
                      <li>Act as Data Controllers.</li>
                      <li>Upload student data and ensure record accuracy.</li>
                      <li>Grant and manage access permissions.</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-bold mb-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>4.3 Users (Students)</p>
                    <ul className={listClass}>
                      <li>Can only access their own data.</li>
                      <li>Are responsible for safeguarding login credentials.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5 · Data Collection */}
            <section id="data-collection" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Database size={22} />
                <h2 className={headingClass(isDark)}>5. Data Collection Overview</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <div className="space-y-5">
                  <div>
                    <p className={`font-bold mb-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>5.1 Data Provided by Institutions</p>
                    <ul className={listClass}>
                      <li>Student name</li>
                      <li>Student ID or registration number</li>
                      <li>Academic results (scores, grades)</li>
                      <li>Class and course information</li>
                      <li>Attendance records (where applicable)</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-bold mb-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>5.2 Data Processed by ZED System</p>
                    <ul className={listClass}>
                      <li>Authentication credentials (username/password)</li>
                      <li>Session data (temporary)</li>
                    </ul>
                    <p className="mt-3 text-xs italic border-t pt-3 border-current/10">
                      All academic data is processed via secure APIs hosted on cloud infrastructure and is not stored permanently on user devices.
                    </p>
                  </div>
                  <div className={`rounded-xl border p-4 flex gap-3 items-start ${isDark ? "bg-green-950/40 border-green-800/50" : "bg-green-50 border-green-200"}`}>
                    <span className="text-green-500 text-lg shrink-0">✅</span>
                    <div>
                      <p className={`font-bold text-sm mb-1 ${isDark ? "text-green-400" : "text-green-700"}`}>5.3 No Personalized Advertising</p>
                      <p className={`text-sm ${isDark ? "text-green-300/80" : "text-green-700/80"}`}>
                        Users are <strong>never</strong> presented with personalized advertising. ZED does not use any collected data — academic, behavioral, or otherwise — for ad targeting, user profiling, or marketing purposes. No advertising networks or third-party trackers are embedded in any ZED platform or application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6 · Data Sources */}
            <section id="data-sources" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Server size={22} />
                <h2 className={headingClass(isDark)}>6. Data Sources</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p>Data within ZED originates from educational institutions and authorized school administrators.</p>
                <ul className={listClass}>
                  <li>Student accounts are created by schools or parents.</li>
                  <li>Accounts are linked to institutional records.</li>
                  <li>Students primarily log in to view results.</li>
                  <li>Students may update limited personal details.</li>
                </ul>
              </div>
            </section>

            {/* 7 · Purpose */}
            <section id="purpose" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <ShieldCheck size={22} />
                <h2 className={headingClass(isDark)}>7. Purpose of Data Processing</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p>Data is processed strictly for:</p>
                <ul className={listClass}>
                  <li>Displaying academic results to students</li>
                  <li>Enabling secure authentication</li>
                  <li>Maintaining platform security and integrity</li>
                  <li>Supporting institutional academic operations</li>
                </ul>
                <p className={`font-semibold mt-2 ${isDark ? "text-orange-400" : "text-orange-600"}`}>
                  Zion Reborn Limited does not use data for advertising, user profiling, or data monetization.
                </p>
              </div>
            </section>

            {/* 8 · Student App */}
            <section id="student-app" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Play size={22} />
                <h2 className={headingClass(isDark)}>8. ZED Student App – Result Viewing Policy</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p className={`font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>8.1 Purpose</p>
                <p>
                  The ZED Student App is designed solely to allow students to securely access their academic results.
                </p>
                <p className={`font-bold mt-4 ${isDark ? "text-slate-200" : "text-slate-800"}`}>8.7 Data Accuracy</p>
                <p>
                  Institutions are solely responsible for the accuracy of academic data.
                </p>
              </div>
            </section>

            {/* 9 · Data Sharing */}
            <section id="data-sharing" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Globe size={22} />
                <h2 className={headingClass(isDark)}>9. Data Sharing and Disclosure</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>Zion Reborn Limited does not sell user data.</li>
                  <li>Zion Reborn Limited does not share data with advertisers or external organizations.</li>
                  <li>Data may be disclosed only when required by law or legal processes, or to protect system security and integrity.</li>
                </ul>
              </div>
            </section>

            {/* 10 · Retention */}
            <section id="retention" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Calendar size={22} />
                <h2 className={headingClass(isDark)}>10. Data Retention Policy</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>Academic data is controlled and managed by the institution.</li>
                  <li>Zion Reborn Limited stores data on behalf of institutions as part of service delivery.</li>
                  <li>Data remains available until deleted by the institution or until service agreement termination.</li>
                  <li>Zion Reborn Limited does not retain data longer than necessary for operational purposes.</li>
                </ul>
              </div>
            </section>

            {/* 11 · Security */}
            <section id="security" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Lock size={22} />
                <h2 className={headingClass(isDark)}>11. Data Security Measures</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Secure authentication and authorization mechanisms</li>
                  <li>Role-based access control for institutions and users</li>
                  <li>Cloud infrastructure security (including AWS best practices)</li>
                  <li>Continuous monitoring, logging, and threat detection</li>
                </ul>
              </div>
            </section>

            {/* 12 · User Rights */}
            <section id="user-rights" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <UserCheck size={22} />
                <h2 className={headingClass(isDark)}>12. User Rights</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p>Users may request:</p>
                <ul className={listClass}>
                  <li>Access to their data</li>
                  <li>Correction or updates</li>
                  <li>Deletion through their institution</li>
                  <li>Withdrawal of access</li>
                </ul>
                <p>All requests are handled through the institution (Data Controller).</p>
              </div>
            </section>

            {/* 13 · Children */}
            <section id="children" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Users size={22} />
                <h2 className={headingClass(isDark)}>13. Children and Student Data</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>ZED is used by students, including minors.</li>
                  <li>Accounts are created by schools or parents.</li>
                  <li>Zion Reborn Limited does not independently collect data from children.</li>
                </ul>
              </div>
            </section>

            {/* 14 · Third-Party */}
            <section id="third-party" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Handshake size={22} />
                <h2 className={headingClass(isDark)}>14. Third-Party Services</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>Backend services are hosted on <strong>Amazon Web Services (AWS)</strong>.</li>
                  <li>Web platform may be hosted on <strong>Vercel</strong>.</li>
                  <li>Zion Reborn Limited does not share data with third parties for advertising or analytics at this time.</li>
                </ul>
              </div>
            </section>

            {/* 15 · International */}
            <section id="intl-transfers" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Globe2 size={22} />
                <h2 className={headingClass(isDark)}>15. International Data Transfers</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p>
                  Data may be processed on cloud servers located outside Nigeria. We implement appropriate safeguards in compliance with the Nigeria Data Protection Regulation (NDPR) and applicable international data protection standards.
                </p>
              </div>
            </section>

            {/* 16 · Compliance */}
            <section id="compliance" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Scale size={22} />
                <h2 className={headingClass(isDark)}>16. Compliance with Regulations</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>Nigeria Data Protection Regulation (NDPR)</li>
                  <li>Industry best practices for data protection</li>
                  <li>Applicable international standards where relevant</li>
                </ul>
              </div>
            </section>

            {/* 17 · Policy Changes */}
            <section id="policy-changes" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <RefreshCw size={22} />
                <h2 className={headingClass(isDark)}>17. Changes to This Privacy Policy</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <p>
                  This policy may be updated periodically. Updates will be communicated through the website and application.
                </p>
              </div>
            </section>

            {/* 18 · Contact */}
            <section id="contact" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Mail size={22} />
                <h2 className={headingClass(isDark)}>18. Contact Information</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <div className={`rounded-xl border p-5 space-y-2 ${isDark ? "bg-slate-900 border-slate-700" : "bg-orange-50 border-orange-100"}`}>
                  <p className={`font-black text-base ${isDark ? "text-white" : "text-slate-900"}`}>Zion Reborn Limited</p>
                  <p>No 2, Eyenkorin, Asa LGA, Kwara State, Nigeria</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:zionrebornlimited@gmail.com" className="text-orange-500 hover:underline">
                      zionrebornlimited@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+2347073248888" className="text-orange-500 hover:underline">+2347073248888</a>
                    {", "}
                    <a href="tel:+2347034341410" className="text-orange-500 hover:underline">+2347034341410</a>
                  </p>
                </div>
              </div>
            </section>

            {/* 19 · Google Play */}
            <section id="google-play" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Play size={22} />
                <h2 className={headingClass(isDark)}>19. Google Play Data Safety Alignment</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>Data is processed strictly for core application functionality.</li>
                  <li>No data is sold or shared with third parties.</li>
                  <li>The ZED Student App does not store academic data locally in permanent storage.</li>
                  <li>Data is securely processed via cloud infrastructure for authentication and result access.</li>
                </ul>
              </div>
            </section>

            {/* 20 · Consent */}
            <section id="consent" className={cardClass(isDark)}>
              <div className="flex items-center gap-3 mb-5 text-orange-500">
                <Handshake size={22} />
                <h2 className={headingClass(isDark)}>20. Consent</h2>
              </div>
              <div className={bodyClass(isDark)}>
                <ul className={listClass}>
                  <li>Users agree to this Privacy Policy by using ZED services.</li>
                  <li>Institutions agree through platform usage.</li>
                  <li>Students consent through login and continued use.</li>
                </ul>
              </div>
            </section>

            {/* Copyright */}
            <div className={`text-center pt-6 pb-2 text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>
              <p>&copy; {new Date().getFullYear()} Zion Reborn Limited. All rights reserved.</p>
            </div>

          </div>
        </div>
      </main>

      {/* ── MINI FOOTER ───────────────────────────────── */}
      <footer className={`border-t py-6 transition-colors duration-300 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className={isDark ? "text-slate-600" : "text-slate-400"}>
            &copy; {new Date().getFullYear()} ZED Prepare AI · Zion Reborn Limited
          </p>
          <Link
            href="/"
            className={`font-bold hover:text-orange-500 transition-colors ${isDark ? "text-slate-500" : "text-slate-400"}`}
          >
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
