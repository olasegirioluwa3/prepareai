import { Logo } from "../components/ui";
import { GraduationCap, BookOpen, UsersRound, Trophy, Zap, Target, Globe2, Check } from "lucide-react";

export default function K12() {
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
                K-12 Learning, Reimagined
              </h1>
              <p className="mt-6 text-lg leading-7 text-orange-50 sm:text-xl">
                Empowering students from kindergarten through 12th grade with curriculum-aligned practice, intelligent study tools, and a global learning community.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
              Why K-12 Students Love ZED
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Designed specifically for school-aged learners, ZED adapts to every grade level and curriculum.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Globe2,
                title: "Curriculum-Aligned Content",
                description: "Practice with lessons and quizzes that match your exact curriculum—whether it's WAEC, GCSE, Common Core, or 100+ other standards worldwide."
              },
              {
                icon: Target,
                title: "Grade-Level Personalization",
                description: "Content tailored to your specific grade, from elementary foundations to high school preparation. Every question builds on what you've learned."
              },
              {
                icon: UsersRound,
                title: "Study with Peers",
                description: "Connect with classmates and students across the world. Share study tips, explain concepts, and learn together in a safe, educational environment."
              },
              {
                icon: Zap,
                title: "Live Quiz Challenges",
                description: "Turn practice into excitement with real-time quiz battles. Compete with friends, earn rewards, and make studying an adventure."
              },
              {
                icon: Trophy,
                title: "Track Your Progress",
                description: "Celebrate every achievement with skills, certifications, and streaks. Watch your confidence grow as you master new topics."
              },
              {
                icon: BookOpen,
                title: "Subject Mastery",
                description: "Comprehensive coverage of core subjects—Mathematics, Science, English, Social Studies, and more—all organized by your curriculum."
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

        {/* How It Works */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
                How K-12 Students Get Started
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Choose Your Country",
                  description: "Select from 50+ countries to get curriculum-specific content"
                },
                {
                  step: "02",
                  title: "Pick Your Grade",
                  description: "Elementary, middle, or high school—we've got you covered"
                },
                {
                  step: "03",
                  title: "Select Subjects",
                  description: "Math, Science, English, and more—focused on your needs"
                },
                {
                  step: "04",
                  title: "Start Learning",
                  description: "Practice with quizzes, track progress, and connect with peers"
                }
              ].map((item, index) => (
                <div key={index} className="border-t border-slate-200 pt-6">
                  <span className="text-[11px] font-bold tracking-[0.12em] text-orange-600">{item.step}</span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits for Parents */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
              Trusted by Parents & Schools
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              ZED is designed with safety, quality, and educational value at its core.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Age-appropriate content that grows with your child",
              "Privacy-first design with parental controls",
              "Aligned with national and international curriculum standards",
              "Progress reports to track learning milestones",
              "Safe community for collaborative learning",
              "Used by thousands of schools worldwide"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="text-base leading-6 text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-[2rem] bg-orange-500 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,#fbbf24_0%,transparent_24%),radial-gradient(circle_at_80%_90%,#10b981_0%,transparent_23%)] opacity-80" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold leading-[.98] tracking-[-0.065em] sm:text-5xl">
              Ready to Transform K-12 Learning?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-orange-50">
              Join students around the world who are learning smarter with ZED Prepare AI.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=ng.com.zionai.prepareai&hl=en"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50"
            >
              <GraduationCap className="h-4 w-4" />
              Get Started Free
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
