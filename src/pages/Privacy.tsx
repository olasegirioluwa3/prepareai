import { Logo } from "../components/ui";

export default function Privacy() {
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

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold leading-[.98] tracking-[-0.065em] text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Effective Date: July 8, 2026 | Last Updated: July 8, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-base leading-7 text-slate-600">
            This policy outlines how ZED Prepare AI manages and protects user data in compliance with Google Play Developer Program Policies.
          </p>

          <nav className="my-8 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-bold text-slate-900">Table of Contents</h2>
            <ol className="space-y-2 text-sm text-slate-600">
              <li><a href="#introduction" className="text-orange-600 hover:underline">1. Introduction</a></li>
              <li><a href="#locally-stored-data" className="text-orange-600 hover:underline">2. Locally Stored Data</a></li>
              <li><a href="#backend-transmitted-data" className="text-orange-600 hover:underline">3. Backend Transmitted Data</a></li>
              <li><a href="#artificial-intelligence" className="text-orange-600 hover:underline">4. Artificial Intelligence</a></li>
              <li><a href="#advertising" className="text-orange-600 hover:underline">5. Advertising</a></li>
              <li><a href="#third-party-services" className="text-orange-600 hover:underline">6. Third-Party Services</a></li>
              <li><a href="#childrens-privacy" className="text-orange-600 hover:underline">7. Children's Privacy</a></li>
              <li><a href="#data-security" className="text-orange-600 hover:underline">8. Data Security</a></li>
              <li><a href="#data-retention" className="text-orange-600 hover:underline">9. Data Retention</a></li>
              <li><a href="#international-processing" className="text-orange-600 hover:underline">10. International Processing</a></li>
              <li><a href="#policy-changes" className="text-orange-600 hover:underline">11. Policy Changes</a></li>
              <li><a href="#contact-us" className="text-orange-600 hover:underline">12. Contact Us</a></li>
              <li><a href="#google-play-compliance" className="text-orange-600 hover:underline">13. Google Play Compliance</a></li>
            </ol>
          </nav>

          <section id="introduction" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">1. Introduction</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              Welcome to ZED Prepare AI ("the App"), an educational mobile application developed by ZED Prepare AI.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              This Privacy Policy explains how we collect, use, store, process, and protect information when you use our application.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              Our goal is to provide a safe, secure, and personalized educational experience while respecting your privacy and complying with applicable laws and the Google Play Developer Program Policies.
            </p>
            <p className="text-base leading-7 text-slate-600">
              By using ZED Prepare AI, you agree to this Privacy Policy.
            </p>
          </section>

          <section id="locally-stored-data" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">2. Information Stored on Your Device</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              To provide a personalized and efficient learning experience, ZED Prepare AI stores certain information locally on your device.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              This information may include:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>Preferred name</li>
              <li>Year of birth</li>
              <li>Selected country</li>
              <li>Selected curriculum</li>
              <li>Selected class or grade</li>
              <li>Selected subject</li>
              <li>Selected topic</li>
              <li>Downloaded quiz content</li>
            </ul>
            <p className="mb-4 text-base leading-7 text-slate-600">
              This information is used only to:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>Personalize the application interface.</li>
              <li>Remember your learning preferences.</li>
              <li>Improve application performance.</li>
              <li>Reduce repeated configuration.</li>
              <li>Enable faster access to previously downloaded educational content.</li>
            </ul>
            <p className="text-base leading-7 text-slate-600">
              Unless otherwise stated in this Privacy Policy, this locally stored information is not transmitted to our servers.
            </p>
          </section>

          <section id="backend-transmitted-data" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">3. Information Sent to Our Backend</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              To provide educational services, the App sends only the minimum information necessary to retrieve appropriate educational content.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              Depending on the requested feature, the following information may be transmitted:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li><strong>Country:</strong> Used to determine available curricula</li>
              <li><strong>Curriculum:</strong> Used to determine available classes, subjects, topics, and quizzes</li>
              <li><strong>Class or Grade:</strong> Used to determine available subjects, topics, and quizzes</li>
              <li><strong>Subject:</strong> Used to determine available topics and quizzes</li>
              <li><strong>Topic:</strong> Used to retrieve the requested quiz</li>
            </ul>
            <p className="text-base leading-7 text-slate-600">
              This information is transmitted only when required to provide the requested educational content.
            </p>
            <p className="text-base leading-7 text-slate-600">
              Downloaded quiz content remains on your device after retrieval and is not uploaded back to our backend.
            </p>
          </section>

          <section id="artificial-intelligence" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">4. Artificial Intelligence</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              ZED Prepare AI uses artificial intelligence hosted on our backend infrastructure to generate and prepare educational quiz content.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              The AI service may receive educational information required to generate or retrieve quizzes, including:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>Curriculum</li>
              <li>Class or Grade</li>
              <li>Subject</li>
              <li>Topic</li>
            </ul>
            <p className="mb-4 text-base leading-7 text-slate-600">
              The AI service does not receive:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>Preferred name</li>
              <li>Year of birth</li>
            </ul>
            <p className="text-base leading-7 text-slate-600">
              The AI functionality is used solely to improve educational content and learning experiences.
            </p>
          </section>

          <section id="advertising" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">5. Advertising</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              ZED Prepare AI may display advertisements provided by third-party advertising partners, including Google Mobile Ads (AdMob).
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              Advertising providers may automatically collect certain technical information such as:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>Advertising Identifier</li>
              <li>Device information</li>
              <li>App interaction information</li>
              <li>Approximate location derived from IP address (where applicable)</li>
              <li>Diagnostic information</li>
            </ul>
            <p className="text-base leading-7 text-slate-600">
              This information is collected and processed by the advertising provider in accordance with its own privacy policies.
            </p>
            <p className="text-base leading-7 text-slate-600">
              ZED Prepare AI does not sell your personal information to advertisers.
            </p>
          </section>

          <section id="third-party-services" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">6. Third-Party Services</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              To provide our services, we may use trusted third-party providers, including:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>Amazon Web Services (AWS) for backend hosting and infrastructure.</li>
              <li>OpenAI for AI-powered educational content generation.</li>
              <li>Google Mobile Ads (AdMob) for advertising services.</li>
              <li>Google Play Services for essential platform functionality.</li>
            </ul>
            <p className="text-base leading-7 text-slate-600">
              These providers process information only as necessary to deliver their respective services.
            </p>
          </section>

          <section id="childrens-privacy" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">7. Children's Privacy</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              ZED Prepare AI is designed as an educational application and may be used by learners of different age groups.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              We encourage parents, guardians, teachers, and schools to supervise younger users when appropriate.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              We do not knowingly collect more personal information from children than is reasonably necessary to provide the educational services offered by the App.
            </p>
            <p className="text-base leading-7 text-slate-600">
              If you believe that a child has provided personal information contrary to applicable law, please contact us so that appropriate action can be taken.
            </p>
          </section>

          <section id="data-security" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">8. Data Security</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              We implement reasonable administrative, technical, and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              These measures include secure communication, protected backend infrastructure, and access controls.
            </p>
            <p className="text-base leading-7 text-slate-600">
              While we strive to protect your information, no method of electronic transmission or storage is completely secure.
            </p>
          </section>

          <section id="data-retention" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">9. Data Retention</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              Information transmitted to our backend is retained only for as long as necessary to provide the requested services, improve application performance, comply with legal obligations, or resolve disputes.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              Information stored locally remains on your device until:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>You clear the application's data,</li>
              <li>You uninstall the application, or</li>
              <li>The application removes cached educational content.</li>
            </ul>
          </section>

          <section id="international-processing" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">10. International Data Processing</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              Our backend infrastructure is hosted using Amazon Web Services (AWS).
            </p>
            <p className="text-base leading-7 text-slate-600">
              Information required to provide our services may be processed in countries where our service providers operate, subject to appropriate safeguards.
            </p>
          </section>

          <section id="policy-changes" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">11. Changes to This Privacy Policy</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              We may update this Privacy Policy from time to time to reflect improvements to our services, legal requirements, or operational changes.
            </p>
            <p className="mb-4 text-base leading-7 text-slate-600">
              When changes are made, we will update the "Last Updated" date shown at the top of this document.
            </p>
            <p className="text-base leading-7 text-slate-600">
              Continued use of the App after updates constitutes acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section id="contact-us" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">12. Contact Us</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-base leading-7 text-slate-600">
              <p><strong>ZED Prepare AI</strong></p>
              <p>
                Website: <a href="https://prepareai.zionai.com.ng" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">https://prepareai.zionai.com.ng</a>
              </p>
              <p>
                Email: <a href="mailto:o.olasegiri@zionai.com.ng" className="text-orange-600 hover:underline">o.olasegiri@zionai.com.ng</a>
              </p>
            </div>
          </section>

          <section id="google-play-compliance" className="mb-12 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">13. Google Play Compliance</h2>
            <p className="mb-4 text-base leading-7 text-slate-600">
              This Privacy Policy is intended to support compliance with the Google Play Developer Program Policies, including requirements relating to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-base leading-7 text-slate-600">
              <li>User Data</li>
              <li>Families Policy (where applicable)</li>
              <li>Data Safety</li>
              <li>Advertising</li>
              <li>Artificial Intelligence features</li>
              <li>User privacy and transparency</li>
            </ul>
          </section>

          <div className="mt-12 rounded-xl bg-slate-100 p-6 text-center">
            <p className="text-sm text-slate-600">
              © 2026 ZED Prepare AI. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
