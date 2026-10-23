import { Logo } from "../components/ui";
import { GraduationCap, BookOpen, UsersRound, Trophy, Zap, Target, Globe2, Check, BrainCircuit } from "lucide-react";

export default function HigherEducation() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <header className="border-b border-slate-200/70 bg-[#f6f8fb]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <Logo />
          </a>
          <a href="/" className="text-sm font-semibold text-slate-700 transition hover:text-orange-600">
            Back to home
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#111827] pb-14 pt-14 text-white sm:pb-20 sm:pt-20 lg:min-h-[600px] lg:pb-0 lg:pt-24">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_-15%,#ea580c_0%,#334155_38%,#111827_72%)]" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-[.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Higher Education, Elevated
              </h1>
              <p className="mt-6 text-lg leading-7 text-orange-50 sm:text-xl">
                Advanced learning tools for university students, college preparation, and professional development. Master complex subjects with AI-powered practice and global collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
              Why University Students Choose ZED
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From college prep to graduate studies, ZED provides the advanced tools you need to excel.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BrainCircuit,
                title: "AI-Powered Learning",
                description: "Advanced AI generates practice questions tailored to your field of study—whether it's engineering, medicine, business, or liberal arts."
              },
              {
                icon: Target,
                title: "Exam Preparation",
                description: "Prepare for SAT, ACT, GRE, GMAT, MCAT, and other standardized exams with targeted practice and performance analytics."
              },
              {
                icon: UsersRound,
                title: "Global Academic Network",
                description: "Connect with university students worldwide. Share research, discuss complex topics, and learn from diverse perspectives."
              },
              {
                icon: Zap,
                title: "Advanced Subject Mastery",
                description: "Deep-dive into complex topics with specialized content for STEM, humanities, social sciences, and professional programs."
              },
              {
                icon: Trophy,
                title: "Certification Tracks",
                description: "Earn verified certifications in specialized subjects to boost your resume and demonstrate expertise to employers."
              },
              {
                icon: BookOpen,
                title: "Research & Study Tools",
                description: "Organize study materials, create custom flashcards, and track mastery across multiple courses simultaneously."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Academic Levels */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
                For Every Academic Level
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  level: "College Prep",
                  description: "Prepare for university entrance exams and build foundational skills for college success."
                },
                {
                  level: "Undergraduate",
                  description: "Master course material, prepare for exams, and collaborate with peers across your field."
                },
                {
                  level: "Graduate & Professional",
                  description: "Advanced study tools for research, professional exams, and continuing education."
                }
              ].map((item, index) => (
                <div key={index} className="rounded-2xl bg-[#f6f8fb] p-6 ring-1 ring-slate-200">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item.level}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Areas */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
              Comprehensive Subject Coverage
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From STEM to humanities, we've got your academic needs covered.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Mathematics & Statistics",
              "Physics & Chemistry",
              "Biology & Life Sciences",
              "Computer Science",
              "Engineering",
              "Business & Economics",
              "Literature & Languages",
              "Social Sciences",
              "Psychology",
              "Medicine & Healthcare",
              "Law",
              "Arts & Design"
            ].map((subject, index) => (
              <div key={index} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{subject}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
                Benefits for Higher Education
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "AI-generated practice questions for your specific courses",
                "Collaborative study groups with university students worldwide",
                "Performance analytics to identify knowledge gaps",
                "Preparation for standardized tests and professional exams",
                "Verified certifications to enhance your CV",
                "Mobile learning—study anywhere, anytime"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-base leading-6 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-[2rem] bg-orange-500 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,#fbbf24_0%,transparent_24%),radial-gradient(circle_at_80%_90%,#10b981_0%,transparent_23%)] opacity-80" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold leading-[.98] tracking-[-0.065em] sm:text-5xl">
              Elevate Your Academic Journey
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-orange-50">
              Join university students worldwide who are mastering their subjects with ZED Prepare AI.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=ng.com.zionai.prepareai&hl=en"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50"
            >
              <GraduationCap className="h-4 w-4" />
              Start Learning Free
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#111827] py-14 text-orange-50 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-orange-200/70">© 2026 ZED Prepare AI. All rights reserved.</p>
            <div className="flex gap-6 text-[11px] text-orange-200/70">
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <a href="/" className="hover:text-white">Home</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
