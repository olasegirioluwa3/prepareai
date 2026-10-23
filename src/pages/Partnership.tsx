import { useState, FormEvent } from "react";
import { Logo } from "../components/ui";
import { Building2, GraduationCap, Briefcase, Mail, MapPin, Phone, Send, Check } from "lucide-react";

export default function Partnership() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    partnershipType: "",
    country: "",
    message: ""
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Partnership form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      organization: "",
      partnershipType: "",
      country: "",
      message: ""
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

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
        <section className="relative isolate overflow-hidden bg-[#111827] pb-14 pt-14 text-white sm:pb-20 sm:pt-20 lg:min-h-[500px] lg:pb-0 lg:pt-24">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_-15%,#ea580c_0%,#334155_38%,#111827_72%)]" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-[.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Partner with ZED Prepare AI
              </h1>
              <p className="mt-6 text-lg leading-7 text-orange-50 sm:text-xl">
                Join our mission to transform education globally. We partner with schools, educational institutions, and investors who share our vision for accessible, intelligent learning.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
              Partnership Opportunities
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We offer flexible partnership models tailored to your organization's goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Schools & Educational Institutions",
                description: "Bring ZED to your school or institution. We provide comprehensive implementation support, teacher training, and ongoing assistance to ensure success."
              },
              {
                icon: Building2,
                title: "Educational Partners",
                description: "Content providers, curriculum developers, and educational technology companies can integrate with our platform to reach millions of learners worldwide."
              },
              {
                icon: Briefcase,
                title: "Investors",
                description: "Join us in scaling global education access. We welcome strategic investors who believe in the future of AI-powered learning."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Partnership Form */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.065em] text-slate-950 sm:text-4xl">
                  Start a Partnership
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Fill out the form below and our partnership team will get back to you within 48 hours.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">partnerships@prepareai.zionai.com.ng</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Phone</p>
                      <p className="text-sm text-slate-600">+234 XXX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Headquarters</p>
                      <p className="text-sm text-slate-600">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-bold text-slate-900">What to expect:</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Response within 48 hours",
                      "Initial discovery call",
                      "Customized partnership proposal",
                      "Dedicated partnership manager",
                      "Ongoing support and collaboration"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-[#f6f8fb] p-8 shadow-sm ring-1 ring-slate-200">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">Thank You!</h3>
                    <p className="mt-2 text-base text-slate-600">
                      Your partnership inquiry has been submitted. Our team will reach out to you within 48 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-slate-900 mb-2">
                        Organization/School Name *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        placeholder="Your organization or school name"
                      />
                    </div>

                    <div>
                      <label htmlFor="partnershipType" className="block text-sm font-semibold text-slate-900 mb-2">
                        Partnership Type *
                      </label>
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        required
                        value={formData.partnershipType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      >
                        <option value="">Select partnership type</option>
                        <option value="school">School / Educational Institution</option>
                        <option value="content">Content Provider / Educational Partner</option>
                        <option value="investor">Investor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-slate-900 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        placeholder="Your country"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                        Tell us about your partnership interest *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none"
                        placeholder="Describe your partnership goals and how you'd like to collaborate with ZED Prepare AI..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600 hover:-translate-y-0.5"
                    >
                      <Send className="h-4 w-4" />
                      Submit Partnership Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-[2rem] bg-orange-500 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,#fbbf24_0%,transparent_24%),radial-gradient(circle_at_80%_90%,#10b981_0%,transparent_23%)] opacity-80" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold leading-[.98] tracking-[-0.065em] sm:text-5xl">
              Ready to Make an Impact?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-orange-50">
              Join our growing network of partners who are transforming education worldwide.
            </p>
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
