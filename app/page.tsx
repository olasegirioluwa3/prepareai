"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaGraduationCap,
  FaBrain,
  FaChartBar,
  FaBookOpen,
  FaCheck,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaFileAlt,
  FaLightbulb,
  FaSun,
  FaMoon
} from "react-icons/fa";

// Mock Exam Database
interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface SubjectQuiz {
  topic: string;
  questions: Question[];
}

interface QuizDatabase {
  [level: string]: {
    [subject: string]: SubjectQuiz;
  };
}

const quizDatabase: QuizDatabase = {
  "JAMB Prep": {
    "Mathematics": {
      topic: "Algebra & Calculus",
      questions: [
        {
          id: 1,
          question: "Find the sum to infinity of the geometric progression: 1, 1/2, 1/4, 1/8, ...",
          options: ["1.5", "2", "3", "Infinity"],
          correct: 1,
          explanation: "The sum to infinity (S∞) of a geometric progression is given by a / (1 - r), where 'a' is the first term (1) and 'r' is the common ratio (1/2). S∞ = 1 / (1 - 0.5) = 1 / 0.5 = 2."
        },
        {
          id: 2,
          question: "Solve for x in the equation: log_10(2x + 1) - log_10(x - 2) = 1.",
          options: ["2.5", "3.5", "2.625", "2.875"],
          correct: 2,
          explanation: "Using the log division rule: log_10((2x+1)/(x-2)) = 1. This means (2x+1)/(x-2) = 10^1. Solving for x: 2x + 1 = 10(x - 2) => 2x + 1 = 10x - 20 => 8x = 21 => x = 21/8 = 2.625."
        },
        {
          id: 3,
          question: "If dy/dx of y = 3x^2 - 4x + 5 is evaluated at x = 2, find the gradient of the curve.",
          options: ["8", "6", "10", "12"],
          correct: 0,
          explanation: "Differentiating y with respect to x gives dy/dx = 6x - 4. Evaluating this at x = 2: dy/dx = 6(2) - 4 = 12 - 4 = 8. The gradient of the curve at that point is 8."
        }
      ]
    },
    "Physics": {
      topic: "Optics & Waves",
      questions: [
        {
          id: 1,
          question: "Which of the following phenomena is a direct proof of the transverse wave nature of light?",
          options: ["Interference", "Diffraction", "Polarization", "Refraction"],
          correct: 2,
          explanation: "Polarization restricts wave vibrations to a single plane. Only transverse waves can be polarized; longitudinal waves (like sound) cannot. Therefore, polarization is direct proof that light is a transverse wave."
        },
        {
          id: 2,
          question: "An object is placed 15 cm in front of a concave mirror of focal length 10 cm. Find the image distance.",
          options: ["15 cm", "20 cm", "30 cm", "6 cm"],
          correct: 2,
          explanation: "Using the mirror formula: 1/f = 1/u + 1/v. Here, f = 10 and u = 15. So, 1/10 = 1/15 + 1/v => 1/v = 1/10 - 1/15 = (3 - 2)/30 = 1/30. Thus, image distance v = 30 cm."
        },
        {
          id: 3,
          question: "The refractive index of a medium is 1.5. Calculate the speed of light in this medium. (Speed of light in vacuum = 3 x 10^8 m/s)",
          options: ["2.0 x 10^8 m/s", "4.5 x 10^8 m/s", "1.5 x 10^8 m/s", "2.5 x 10^8 m/s"],
          correct: 0,
          explanation: "Refractive index (n) = Speed of light in vacuum (c) / Speed of light in medium (v). Rearranging, v = c / n = (3 x 10^8) / 1.5 = 2.0 x 10^8 m/s."
        }
      ]
    }
  },
  "WAEC Prep": {
    "Physics": {
      topic: "Mechanics & Motion",
      questions: [
        {
          id: 1,
          question: "A car accelerates uniformly from rest at 3 m/s^2. Calculate the distance covered in 5 seconds.",
          options: ["15 m", "37.5 m", "75 m", "30 m"],
          correct: 1,
          explanation: "Using the equation of motion: s = ut + 0.5at^2. Since the car starts from rest, initial velocity u = 0. Thus, s = 0 + 0.5 * 3 * 5^2 = 1.5 * 25 = 37.5 meters."
        },
        {
          id: 2,
          question: "Which of the following is a scalar quantity?",
          options: ["Momentum", "Displacement", "Electric Potential", "Acceleration"],
          correct: 2,
          explanation: "Scalar quantities have only magnitude and no specific direction. Momentum, displacement, and acceleration are all vector quantities. Electric potential is scalar."
        },
        {
          id: 3,
          question: "A radioactive isotope has a half-life of 4 hours. What fraction of the original sample remains after 12 hours?",
          options: ["1/2", "1/4", "1/8", "1/16"],
          correct: 2,
          explanation: "The number of half-lives elapsed is 12 / 4 = 3. The fraction of the original sample remaining is (1/2)^3 = 1/8."
        }
      ]
    },
    "Chemistry": {
      topic: "Atomic Structure & Bonding",
      questions: [
        {
          id: 1,
          question: "Which of the following elements has the highest electronegativity?",
          options: ["Chlorine", "Fluorine", "Oxygen", "Nitrogen"],
          correct: 1,
          explanation: "Fluorine is the most electronegative element on the periodic table due to its small atomic radius and high nuclear charge, attracting shared electrons strongly."
        },
        {
          id: 2,
          question: "What volume of oxygen at s.t.p. is required to burn completely 11.2 dm^3 of carbon (II) oxide? [2CO + O2 -> 2CO2]",
          options: ["5.6 dm^3", "11.2 dm^3", "22.4 dm^3", "44.8 dm^3"],
          correct: 0,
          explanation: "From the reaction equation, 2 volumes of CO react with 1 volume of O2. Therefore, the volume of O2 needed is half the volume of CO: 11.2 / 2 = 5.6 dm^3."
        },
        {
          id: 3,
          question: "Which type of chemical bonding involves the sharing of electrons between two non-metals?",
          options: ["Ionic bonding", "Covalent bonding", "Metallic bonding", "Coordinate bonding"],
          correct: 1,
          explanation: "Covalent bonding involves the sharing of electron pairs between non-metal atoms that have similar electronegativities, allowing both to achieve a stable octet structure."
        }
      ]
    }
  },
  "Primary 4-6": {
    "Mathematics": {
      topic: "Numbers & Basic Arithmetic",
      questions: [
        {
          id: 1,
          question: "Find the Least Common Multiple (LCM) of 8 and 12.",
          options: ["4", "24", "48", "96"],
          correct: 1,
          explanation: "Multiples of 8: 8, 16, 24, 32, 40... Multiples of 12: 12, 24, 36, 48... The smallest common multiple they share is 24."
        },
        {
          id: 2,
          question: "What is the Roman Numeral for 49?",
          options: ["XLIX", "LXIX", "XXXIX", "LIX"],
          correct: 0,
          explanation: "40 is written as XL (10 before 50) and 9 is written as IX (1 before 10). Combining them gives XLIX."
        },
        {
          id: 3,
          question: "A rectangle has a length of 12 cm and a width of 5 cm. What is its perimeter?",
          options: ["60 cm", "17 cm", "34 cm", "24 cm"],
          correct: 2,
          explanation: "Perimeter of a rectangle = 2 * (length + width) = 2 * (12 + 5) = 2 * 17 = 34 cm."
        }
      ]
    },
    "English Language": {
      topic: "Parts of Speech",
      questions: [
        {
          id: 1,
          question: "Identify the pronoun in this sentence: 'Ade went to the market and he bought some books.'",
          options: ["Ade", "market", "he", "books"],
          correct: 2,
          explanation: "A pronoun is a word used in place of a noun. In this sentence, 'he' is used instead of repeating the noun 'Ade'."
        },
        {
          id: 2,
          question: "Choose the correct verb to complete the sentence: 'The team of players ______ arriving tomorrow.'",
          options: ["is", "are", "were", "have"],
          correct: 0,
          explanation: "The subject 'team' is a collective noun acting as a single unit. Therefore, it takes the singular verb 'is'."
        },
        {
          id: 3,
          question: "What is the antonym of the word 'Generous'?",
          options: ["Kind", "Selfish", "Happy", "Polite"],
          correct: 1,
          explanation: "An antonym is an opposite word. 'Generous' means willing to give or share, and its opposite is 'Selfish' (stinky or holding back)."
        }
      ]
    }
  }
};

// FAQ Questions
const faqs = [
  {
    q: "How does ZED Prepare AI create exercises?",
    a: "The app leverages advanced curriculum-trained AI models. It looks at the specific country, regional exam targets (e.g. JAMB syllabus, WAEC standards), and the current lesson topic, then generates questions, options, and step-by-step diagnostic solutions tailored to the student's current proficiency level."
  },
  {
    q: "What class levels and exams are supported?",
    a: "We support primary school (Primary 1-6), junior secondary (JSS 1-3), and senior secondary (SSS 1-3). The app contains tailored preparation modules for terminal school examinations as well as external certification exams like WAEC, NECO, and JAMB."
  },
  {
    q: "How do teachers use ZED Prepare AI?",
    a: "Teachers can generate quick tests or homework exercises, assign them to students, and receive detailed analytical dashboards. It reveals exactly what percentage of the class failed a specific topic (e.g. 'Quadratic Equations'), helping teachers adapt lesson plans without manual grading."
  },
  {
    q: "Is the app free to use during Early Access?",
    a: "Yes! The first 100 community members who join our WhatsApp Early Access group will have complete, unlimited access to the application for free as pioneer testers."
  },
  {
    q: "When is the Google Play Store release?",
    a: "Our first official early access version will be released on the Google Play Store this Wednesday. Pioneer testers in the WhatsApp community will receive the direct link first."
  }
];

// Confetti Particle Component
function ConfettiEffect() {
  const [particles, setParticles] = useState<{ id: number; left: number; color: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const colors = ["#f97316", "#fb923c", "#fdba74", "#f43f5e", "#fb7185", "#38bdf8", "#4ade80"];
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 1.5,
      duration: 2.5 + Math.random() * 2
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full w-2 h-2 sm:w-3 sm:h-3 opacity-80 animate-fall"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            top: "-10px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            animationIterationCount: 1,
            animationFillMode: "forwards"
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  // Navigation & Tabs
  const [activeTab, setActiveTab] = useState<"quiz" | "dashboard" | "about">("quiz");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Selection state
  const [selectedLevel, setSelectedLevel] = useState<string>("JAMB Prep");
  const [selectedSubject, setSelectedSubject] = useState<string>("Mathematics");

  // Quiz running state
  const [quizState, setQuizState] = useState<"idle" | "generating" | "active" | "finished">("idle");
  const [loadingText, setLoadingText] = useState<string>("");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentTopic, setCurrentTopic] = useState<string>("");

  // Active Question running state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Accordions
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Auto subject adjustment when level changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const availableSubjects = Object.keys(quizDatabase[selectedLevel]);
    if (!availableSubjects.includes(selectedSubject)) {
      setSelectedSubject(availableSubjects[0]);
    }
  }, [selectedLevel]);

  // Simulate AI Quiz Generation
  const handleGenerateQuiz = () => {
    setQuizState("generating");
    const steps = [
      "Connecting to ZED Prepare AI engine...",
      `Checking curriculum standards for ${selectedLevel}...`,
      `Retrieving syllabus matching ${selectedSubject}...`,
      "Generating unique exercise challenges...",
      "Drafting step-by-step diagnostic solutions...",
      "Practice quiz ready!"
    ];

    let currentStep = 0;
    setLoadingText(steps[0]);

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setLoadingText(steps[currentStep]);
      } else {
        clearInterval(timer);
        // Load data
        const quizData = quizDatabase[selectedLevel]?.[selectedSubject] || quizDatabase["JAMB Prep"]["Mathematics"];
        setCurrentQuestions(quizData.questions);
        setCurrentTopic(quizData.topic);
        setCurrentQuestionIndex(0);
        setSelectedOptionIndex(null);
        setScore(0);
        setQuizState("active");
        setShowConfetti(false);
      }
    }, 600);
  };

  const handleSelectOption = (optionIndex: number) => {
    if (selectedOptionIndex !== null) return; // Answered already
    setSelectedOptionIndex(optionIndex);

    const currentQuestion = currentQuestions[currentQuestionIndex];
    if (optionIndex === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
    } else {
      setQuizState("finished");
      const isPerfectScore = score + (selectedOptionIndex === currentQuestions[currentQuestionIndex].correct ? 1 : 0) === currentQuestions.length;
      if (isPerfectScore) {
        setShowConfetti(true);
      }
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Subjects lists helper
  const availableSubjects = Object.keys(quizDatabase[selectedLevel] || {});

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans pb-16 selection:bg-orange-500 selection:text-white ${isDarkMode ? 'bg-[#070b13] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {showConfetti && <ConfettiEffect />}

      {/* Top Banner / Early Access Info */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white text-center py-2.5 px-4 text-sm font-semibold tracking-wide flex flex-wrap items-center justify-center gap-2 shadow-lg">
        <span className="bg-black/20 text-white text-xs px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
          Pioneer Testers Needed
        </span>
        <span>🔥 Join the ZED Prepare AI Early Access.</span>
        <a
          href="https://play.google.com/apps/internaltest/4701712521080049218"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/30 px-3 py-1 rounded-lg font-bold hover:bg-black/50 transition inline-flex items-center gap-1 shrink-0 ml-1 text-xs"
        >
          🚀 Install Android App
        </a>
        <a
          href="https://chat.whatsapp.com/K4Q6a3nRE4d18u19LUTZ0Z?s=cl&p=a&ilr=2"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-orange-100 transition inline-flex items-center gap-1 shrink-0 ml-1"
        >
          <FaWhatsapp className="text-lg" /> Join WhatsApp Group
        </a>
      </div>

      {/* Header */}
      <header className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between border-b gap-4 transition-colors duration-300 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-200'}`}>
        <div className="flex items-center gap-3">
          <Image
            src="/images/prepareailogo.jpeg"
            alt="ZED Prepare AI Logo"
            width={44}
            height={44}
            className="rounded-xl shadow-lg shadow-orange-500/10 shrink-0 object-cover"
            priority
          />
          <div>
            <h1 className={`text-xl sm:text-2xl font-black tracking-tight flex items-center gap-1.5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              ZED <span className="text-orange-500">Prepare AI</span>
            </h1>
            <p className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Custom Study Platform</p>
          </div>
        </div>

        {/* Navigation & Theme Switcher */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <nav className={`flex items-center p-1 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200 ${activeTab === "quiz"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/10"
                : isDarkMode ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Practice Playground
            </button>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200 ${activeTab === "dashboard"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/10"
                : isDarkMode ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Diagnostics Demo
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200 ${activeTab === "about"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/10"
                : isDarkMode ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Why ZED?
            </button>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-xl border transition-all duration-200 ${isDarkMode
              ? 'bg-slate-900 border-slate-800 text-orange-400 hover:text-orange-300'
              : 'bg-white border-slate-200 text-orange-600 hover:bg-slate-100 shadow-sm'
              }`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">

        {/* TAB 1: QUIZ PLAYGROUND */}
        {activeTab === "quiz" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Hero & Config column */}
            <div className="lg:col-span-5 space-y-8 animate-slide-in">
              <div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 glow-orange-sm transition-colors duration-300 ${isDarkMode ? 'bg-orange-950/50 text-orange-400 border border-orange-900/60' : 'bg-orange-50 text-orange-600 border border-orange-200'}`}>
                  <FaBrain className="text-orange-500 animate-pulse" /> Android App Pioneer Testing Phase
                </span>
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Practice Class Exercises <span className="text-gradient-orange">Completely Created by AI</span>
                </h2>
                <p className={`mt-4 leading-relaxed text-sm sm:text-base transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Get personalized curriculum-aligned study materials at the tap of a button. Prepare smarter for school termly exams, WAEC, NECO, and JAMB.
                </p>

                {/* Download Button */}
                <div className="mt-6">
                  <a
                    href="https://play.google.com/apps/internaltest/4701712521080049218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.98] text-sm"
                  >
                    🚀 Download Android App (Google Play Internal Test)
                  </a>
                </div>
              </div>

              {/* Generator Configuration Form */}
              <div className={`border p-6 shadow-xl rounded-2xl relative overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-[#101624] border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl animate-pulse" />
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className="w-1.5 h-3 bg-orange-500 rounded-sm" /> Generate AI Practice Set
                </h3>

                <div className="space-y-4">
                  {/* Select Level */}
                  <div>
                    <label className={`block text-xs font-bold mb-2 uppercase tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Select Education Target / Exam
                    </label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      disabled={quizState === "generating"}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50 ${isDarkMode ? 'bg-[#161d30] border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                    >
                      {Object.keys(quizDatabase).map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  {/* Select Subject */}
                  <div>
                    <label className={`block text-xs font-bold mb-2 uppercase tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Select Topic Subject
                    </label>
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      disabled={quizState === "generating"}
                      className={`w-full border rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50 ${isDarkMode ? 'bg-[#161d30] border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                    >
                      {availableSubjects.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleGenerateQuiz}
                    disabled={quizState === "generating"}
                    className="w-full mt-6 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold py-3.5 px-6 rounded-xl transition duration-200 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.98] flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <FaBrain /> {quizState === "generating" ? "Generating Custom Quiz..." : "✨ Generate AI Practice Quiz"}
                  </button>
                </div>
              </div>

              {/* Group CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://chat.whatsapp.com/K4Q6a3nRE4d18u19LUTZ0Z?s=cl&p=a&ilr=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 border p-4 rounded-2xl flex items-center gap-4 transition duration-200 group ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}
                >
                  <div className="bg-emerald-950 text-emerald-400 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold group-hover:text-orange-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>WhatsApp Community</h4>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Access play store link early & give feedback</p>
                  </div>
                </a>

                <a
                  href="https://forms.gle/H6DE9Ubg5BAU3f6x6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 border p-4 rounded-2xl flex items-center gap-4 transition duration-200 group ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}
                >
                  <div className="bg-orange-950/60 text-orange-400 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FaFileAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold group-hover:text-orange-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Feedback Google Form</h4>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Tell our development team what you think</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Simulator Card Column */}
            <div className="lg:col-span-7 animate-slide-in">
              <div className={`border rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[480px] transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800 glow-orange-sm' : 'bg-white border-slate-200 shadow-xl'}`}>

                {/* Simulator Tab Header Bar */}
                <div className={`border-b px-6 py-4 flex items-center justify-between shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0d16] border-slate-800/80' : 'bg-slate-100 border-slate-200'}`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className={`text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full border transition-colors duration-300 ${isDarkMode ? 'bg-[#121826] border-slate-800 text-slate-400' : 'bg-slate-200 border-slate-300 text-slate-600'}`}>
                    {quizState === "active" ? `QUIZ IN PROGRESS: ${selectedSubject}` : "AI SIMULATOR MODULE"}
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'text-emerald-400 bg-emerald-950/40 border-emerald-900/50' : 'text-emerald-600 bg-emerald-50 border-emerald-200'}`}>
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                    ZED-AI Online
                  </div>
                </div>

                {/* Simulated Content Render */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">

                  {/* STATE 1: IDLE */}
                  {quizState === "idle" && (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center mx-auto shadow-md">
                        <FaBrain className="text-orange-500 text-3xl animate-bounce" style={{ animationDuration: '3s' }} />
                      </div>
                      <div className="max-w-md mx-auto space-y-2">
                        <h4 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Select Subject and Generate!</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          Select the target exam and subject on the left, then click generating. ZED Prepare AI will custom curate questions based on your curriculum.
                        </p>
                      </div>
                      <button
                        onClick={handleGenerateQuiz}
                        className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 font-bold py-2 px-5 rounded-xl border border-orange-500/20 transition text-xs"
                      >
                        Launch Default Demo
                      </button>
                    </div>
                  )}

                  {/* STATE 2: GENERATING (LOADING) */}
                  {quizState === "generating" && (
                    <div className="text-center py-16 space-y-6 max-w-sm mx-auto">
                      <div className="relative w-14 h-14 mx-auto">
                        {/* Glowing orange spinner */}
                        <div className="absolute inset-0 border-4 border-slate-800 rounded-full" />
                        <div className="absolute inset-0 border-4 border-t-orange-500 rounded-full animate-spin" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold tracking-widest text-orange-500 uppercase">ZED AI Engine</h4>
                        <p className={`text-sm font-mono min-h-[40px] flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {loadingText}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* STATE 3: QUIZ RUNNING */}
                  {quizState === "active" && currentQuestions.length > 0 && (
                    <div className="space-y-6 flex-1 flex flex-col justify-between">
                      {/* Topic & Progress */}
                      <div className={`flex items-center justify-between border-b pb-4 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                        <div>
                          <p className="text-xs text-orange-500 uppercase tracking-widest font-bold">Topic Practice</p>
                          <h4 className={`text-sm sm:text-base font-bold mt-0.5 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{currentTopic}</h4>
                        </div>
                        <div className="text-right shrink-0">
                          <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Question</p>
                          <p className={`text-xs sm:text-sm font-bold mt-0.5 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                            {currentQuestionIndex + 1} of {currentQuestions.length}
                          </p>
                        </div>
                      </div>

                      {/* Question Content */}
                      <div className="space-y-4 flex-1 py-4">
                        <p className={`text-base sm:text-lg font-semibold leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                          {currentQuestions[currentQuestionIndex].question}
                        </p>

                        {/* Options List */}
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {currentQuestions[currentQuestionIndex].options.map((option, idx) => {
                            const isCorrect = idx === currentQuestions[currentQuestionIndex].correct;
                            const isSelected = selectedOptionIndex === idx;

                            let optionClass = isDarkMode
                              ? "bg-[#141b2c] border-slate-800 hover:border-slate-700 text-slate-200"
                              : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700";

                            if (selectedOptionIndex !== null) {
                              if (isCorrect) {
                                optionClass = "bg-emerald-950/40 border-emerald-500 text-emerald-300";
                              } else if (isSelected) {
                                optionClass = "bg-rose-950/40 border-rose-500 text-rose-300";
                              } else {
                                optionClass = isDarkMode
                                  ? "bg-[#141b2c]/50 border-slate-800/50 text-slate-500 opacity-60"
                                  : "bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-50";
                              }
                            }

                            return (
                              <button
                                key={idx}
                                disabled={selectedOptionIndex !== null}
                                onClick={() => handleSelectOption(idx)}
                                className={`text-left p-4 rounded-xl border text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-3 ${optionClass}`}
                              >
                                <span>{option}</span>
                                {selectedOptionIndex !== null && isCorrect && (
                                  <span className="bg-emerald-500 text-slate-900 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs">
                                    <FaCheck />
                                  </span>
                                )}
                                {selectedOptionIndex !== null && isSelected && !isCorrect && (
                                  <span className="bg-rose-500 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs">
                                    <FaTimes />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* AI Explanation Accordion */}
                        {selectedOptionIndex !== null && (
                          <div className={`border rounded-xl p-4 mt-4 animate-scale-up space-y-2 ${isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-orange-50 border-orange-100 text-orange-950'}`}>
                            <div className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-wide">
                              <FaLightbulb /> ZED AI Explanation
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed">
                              {currentQuestions[currentQuestionIndex].explanation}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Next / Actions footer */}
                      <div className={`border-t pt-4 flex justify-between items-center shrink-0 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {selectedOptionIndex === null ? (
                            <span className="italic flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" /> Choose an option above
                            </span>
                          ) : (
                            <span className="text-emerald-500 font-semibold">Answer recorded</span>
                          )}
                        </div>
                        <button
                          onClick={handleNextQuestion}
                          disabled={selectedOptionIndex === null}
                          className="bg-orange-500 hover:bg-orange-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:opacity-50 text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-xl transition duration-200"
                        >
                          {currentQuestionIndex < currentQuestions.length - 1 ? "Next Question" : "View Results"}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STATE 4: QUIZ FINISHED */}
                  {quizState === "finished" && (
                    <div className="text-center py-6 space-y-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                        <FaGraduationCap className="text-white text-3xl" />
                      </div>
                      <div className="space-y-2">
                        <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Practice Set Completed!</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          You scored <span className="text-orange-500 font-bold text-lg">{score}</span> out of <span className="font-bold">{currentQuestions.length}</span> correct answers.
                        </p>
                      </div>

                      {/* Diagnostic Score Card */}
                      <div className={`border rounded-xl p-4 max-w-sm mx-auto text-left space-y-3 ${isDarkMode ? 'bg-[#141b2c] border-slate-800' : 'bg-slate-100/80 border-slate-200 shadow-sm'}`}>
                        <p className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <FaChartBar className="text-orange-500" /> AI Diagnostic Feedback
                        </p>
                        <div className="space-y-1">
                          <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            <strong>Level:</strong> {selectedLevel}
                          </p>
                          <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            <strong>Subject:</strong> {selectedSubject}
                          </p>
                          <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            <strong>Focus Topic:</strong> {currentTopic}
                          </p>
                          <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            <strong>Diagnostic:</strong> {score === currentQuestions.length
                              ? "Excellent recall! Ready for examinations on this module."
                              : "Solid attempt. Focus on review explanations to correct conceptual gaps."}
                          </p>
                        </div>
                      </div>

                      {/* Play Again & Join beta buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                        <button
                          onClick={handleGenerateQuiz}
                          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs"
                        >
                          Practice Again
                        </button>
                        <a
                          href="https://chat.whatsapp.com/K4Q6a3nRE4d18u19LUTZ0Z?s=cl&p=a&ilr=2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`border font-bold py-2.5 px-6 rounded-xl text-xs flex items-center justify-center gap-1.5 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200 shadow-sm'}`}
                        >
                          <FaWhatsapp className="text-emerald-400 text-sm" /> Join WhatsApp Group
                        </a>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DIAGNOSTICS DEMO */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-slide-in max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className={`text-3xl font-black transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>The Teacher & Student Diagnostic Loop</h2>
              <p className={`text-sm max-w-xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                No more guessing. With ZED Prepare AI, quizzes instantly generate performance metrics that show teachers exactly what to reteach and students what to revise.
              </p>
            </div>

            {/* Dashboard Mock Grid */}
            <div className={`border rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6 transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800' : 'bg-white border-slate-200'}`}>

              {/* Profile Card Header */}
              <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-6 gap-4 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border shadow-inner ${isDarkMode ? 'bg-slate-800 border-slate-700 text-orange-500' : 'bg-slate-100 border-slate-200 text-orange-600'}`}>
                    JD
                  </div>
                  <div>
                    <h3 className={`text-base font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>John Doe (WAEC & JAMB Candidate)</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Class: Senior Secondary 3 • Lagos, Nigeria</p>
                  </div>
                </div>
                <div className={`border px-4 py-2 rounded-xl text-xs transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Active Syllabus Standard:</span> <strong className="text-orange-500 ml-1">WAEC / JAMB 2026</strong>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`p-4 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-[#151b2c] border-slate-800/80' : 'bg-slate-50 border-slate-200/80 shadow-sm'}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Total Questions Completed</p>
                  <p className={`text-3xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-850'}`}>482</p>
                  <p className="text-[10px] text-orange-500 font-semibold mt-1">▲ 24% increase from last week</p>
                </div>
                <div className={`p-4 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-[#151b2c] border-slate-800/80' : 'bg-slate-50 border-slate-200/80 shadow-sm'}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Average Practice Score</p>
                  <p className={`text-3xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-850'}`}>78.5%</p>
                  <p className="text-[10px] text-emerald-500 font-semibold mt-1">▲ 3.2% performance improvement</p>
                </div>
                <div className={`p-4 rounded-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-[#151b2c] border-slate-800/80' : 'bg-slate-50 border-slate-200/80 shadow-sm'}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Mock Exam Readiness</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-850'}`}>82%</p>
                    <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded">HIGH READINESS</span>
                  </div>
                  <p className={`text-[10px] mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Comparing JAMB 2018-2025 thresholds</p>
                </div>
              </div>

              {/* Strengths & Weaknesses breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Left: Strength Panel */}
                <div className={`border rounded-2xl p-5 space-y-4 transition-colors duration-300 ${isDarkMode ? 'bg-[#141b2c]/60 border-slate-800' : 'bg-slate-50/50 border-slate-200 shadow-sm'}`}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Verified Academic Strengths
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Physics: Light Waves & Geometrical Optics</span>
                        <span className="text-emerald-500 font-bold">92%</span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "92%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Chemistry: Gaseous Laws & Calculations</span>
                        <span className="text-emerald-500 font-bold">88%</span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "88%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Mathematics: Algebra & Matrices</span>
                        <span className="text-emerald-500 font-bold">85%</span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Weakness Panel */}
                <div className={`border rounded-2xl p-5 space-y-4 transition-colors duration-300 ${isDarkMode ? 'bg-[#141b2c]/60 border-slate-800' : 'bg-slate-50/50 border-slate-200 shadow-sm'}`}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" /> Highlighted Revision Gaps
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Mathematics: Calculus & Derivatives</span>
                        <span className="text-orange-500 font-bold">54% Accuracy</span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: "54%" }} />
                      </div>
                      <p className={`text-[10px] mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>AI Recommendation: Generate 15 basic derivative practice questions.</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Physics: Electromagnetic Induction</span>
                        <span className="text-orange-500 font-bold">58% Accuracy</span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: "58%" }} />
                      </div>
                      <p className={`text-[10px] mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>AI Recommendation: Read electromagnetic theory card and attempt exercise.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnostic CTA */}
              <div className={`border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300 ${isDarkMode ? 'bg-orange-500/5 border-orange-500/20' : 'bg-orange-50 border-orange-100'}`}>
                <p className={`text-xs sm:text-sm text-center sm:text-left leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-650'}`}>
                  Want to access complete diagnostics, track strengths, and download targeted worksheets? Join our WhatsApp Early Access beta group!
                </p>
                <a
                  href="https://chat.whatsapp.com/K4Q6a3nRE4d18u19LUTZ0Z?s=cl&p=a&ilr=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold py-2 px-4 rounded-xl text-xs shadow hover:shadow-orange-500/20 transition shrink-0"
                >
                  Join Beta Community
                </a>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: WHY CHOOSE ZED (ABOUT) */}
        {activeTab === "about" && (
          <div className="space-y-12 animate-slide-in">
            {/* Mission Statement */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className={`text-3xl sm:text-4xl font-black transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Why We Built ZED Prepare AI</h2>
              <p className={`leading-relaxed text-sm sm:text-base transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Our mission is to help every student succeed academically through personalized, curriculum-aligned, AI-powered practice. Leveling the academic playing field for primary and secondary learners globally.
              </p>
            </div>

            {/* Core Values / Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className={`border rounded-2xl p-6 space-y-4 relative group transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800 hover:border-orange-500/30' : 'bg-white border-slate-200 hover:border-orange-500/30 shadow-md'}`}>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 text-orange-500 text-xl font-bold">
                  <FaGraduationCap />
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Stay Current with Standards</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Global and regional curricula change fast. The app keeps both teachers and students aligned so nobody is teaching or studying outdated material. Fully compatible with WAEC, NECO, and JAMB syllabus.
                </p>
              </div>

              {/* Card 2 */}
              <div className={`border rounded-2xl p-6 space-y-4 relative group transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800 hover:border-orange-500/30' : 'bg-white border-slate-200 hover:border-orange-500/30 shadow-md'}`}>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 text-orange-500 text-xl font-bold">
                  <FaBrain />
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>No More Gatekeeping</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Historically, elite private schools had exclusive prep resources, mocks, and review cards. Now, anyone with this application has access to the exact same premium standard of questions, reviews, and explanations.
                </p>
              </div>

              {/* Card 3 */}
              <div className={`border rounded-2xl p-6 space-y-4 relative group transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800 hover:border-orange-500/30' : 'bg-white border-slate-200 hover:border-orange-500/30 shadow-md'}`}>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 text-orange-500 text-xl font-bold">
                  <FaChartBar />
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Teacher Feedback Loop</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Quizzes show you exactly where your class is struggling. Instead of guessing, you get direct aggregate data on topics to reteach or reinforce. Less prep time, more targeted, high-impact teaching.
                </p>
              </div>

              {/* Card 4 */}
              <div className={`border rounded-2xl p-6 space-y-4 relative group transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800 hover:border-orange-500/30' : 'bg-white border-slate-200 hover:border-orange-500/30 shadow-md'}`}>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 text-orange-500 text-xl font-bold">
                  <FaBookOpen />
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Know Where You Stand</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Get a clear read on your unique strengths and gaps. Benchmark yourself against national averages: &quot;Am I ready for the upcoming jamb exam or national competitions?&quot; without waiting for school mocks.
                </p>
              </div>

              {/* Card 5 */}
              <div className={`border rounded-2xl p-6 space-y-4 relative group transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800 hover:border-orange-500/30' : 'bg-white border-slate-200 hover:border-orange-500/30 shadow-md'}`}>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 text-orange-500 text-xl font-bold">
                  <FaStar />
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Active Brain Training</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Regular curriculum quizzing improves recall, speed, and critical thinking. Teachers get sharper at diagnosing class syllabus blockages, and students get sharper at applying their learning.
                </p>
              </div>

              {/* Card 6 */}
              <div className={`border rounded-2xl p-6 space-y-4 relative group transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800 hover:border-orange-500/30' : 'bg-white border-slate-200 hover:border-orange-500/30 shadow-md'}`}>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 text-orange-500 text-xl font-bold">
                  <FaLightbulb />
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Targeted Practice</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Turns study from &quot;do more random past questions&quot; into &quot;do the right practice, on the right concept gaps, at the right time.&quot; Save energy and boost retention rates with personalized AI curation.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* FAQ Accordion Section */}
        <section className="mt-20 max-w-4xl mx-auto space-y-8 animate-slide-in">
          <div className="text-center space-y-2">
            <h3 className={`text-2xl sm:text-3xl font-black transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Frequently Asked Questions</h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Everything you need to know about ZED Prepare AI and our tester group.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-[#0f1422] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base transition-colors ${isDarkMode ? 'text-white hover:text-orange-400' : 'text-slate-800 hover:text-orange-650'}`}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <FaChevronUp className="text-slate-400 text-xs shrink-0" /> : <FaChevronDown className="text-slate-400 text-xs shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className={`px-6 pb-5 text-xs sm:text-sm leading-relaxed border-t pt-4 animate-scale-up ${isDarkMode ? 'text-slate-400 border-slate-800/40' : 'text-slate-600 border-slate-200'}`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* WhatsApp & Sign up Callout Banner */}
        <section className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-600/90 to-amber-600/90 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl shadow-orange-600/10 relative overflow-hidden border border-orange-500/20">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-full blur-2xl" />

            <div className="max-w-2xl mx-auto space-y-4">
              <span className="bg-black/25 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-extrabold">
                Join 100 Pioneers
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Ready to Prepare Smarter?
              </h3>
              <p className="text-orange-100 text-xs sm:text-sm leading-relaxed">
                If you are a primary/secondary school student, a parent, a young teacher, an educator, or preparing for WAEC, NECO, and JAMB, install the app on Google Play to test it out, and join our pioneer community group. Share early-access feedback directly with our dev team and unlock free premium study materials!
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto pt-2">
              <a
                href="https://play.google.com/apps/internaltest/4701712521080049218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-white text-orange-600 hover:bg-slate-100 font-bold py-3.5 px-8 rounded-xl transition shadow flex items-center justify-center gap-2 text-sm active:scale-95 shrink-0"
              >
                🚀 Download Android App
              </a>

              <a
                href="https://chat.whatsapp.com/K4Q6a3nRE4d18u19LUTZ0Z?s=cl&p=a&ilr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-black/30 hover:bg-black/45 border border-white/20 text-white font-bold py-3.5 px-8 rounded-xl transition flex items-center justify-center gap-2 text-sm active:scale-95 shrink-0"
              >
                <FaWhatsapp className="text-lg text-emerald-400" /> Join WhatsApp Group
              </a>

              <a
                href="https://forms.gle/H6DE9Ubg5BAU3f6x6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-black/30 hover:bg-black/45 border border-white/20 text-white font-bold py-3.5 px-8 rounded-xl transition flex items-center justify-center gap-2 text-sm active:scale-95 shrink-0"
              >
                Submit Feedback Form
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className={`mt-24 border-t pt-10 pb-8 transition-colors duration-300 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Top: Logo + Links */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
            {/* Logo & Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/prepareailogo.jpeg"
                  alt="ZED Prepare AI Logo"
                  width={48}
                  height={48}
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

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-xs font-semibold">
              <div className="space-y-2">
                <p className={`uppercase tracking-widest text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Get the App</p>
                <a href="https://play.google.com/apps/internaltest/4701712521080049218" target="_blank" rel="noopener noreferrer" className={`block hover:text-orange-500 transition ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  🚀 Download on Android
                </a>
              </div>
              <div className="space-y-2">
                <p className={`uppercase tracking-widest text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Community</p>
                <a href="https://chat.whatsapp.com/K4Q6a3nRE4d18u19LUTZ0Z?s=cl&p=a&ilr=2" target="_blank" rel="noopener noreferrer" className={`block hover:text-orange-500 transition ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  WhatsApp Group
                </a>
                <a href="https://forms.gle/H6DE9Ubg5BAU3f6x6" target="_blank" rel="noopener noreferrer" className={`block hover:text-orange-500 transition ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Feedback Form
                </a>
              </div>
              <div className="space-y-2">
                <p className={`uppercase tracking-widest text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Legal</p>
                <a href="/policy" className={`block hover:text-orange-500 transition ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom: Copyright */}
          <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
              © {new Date().getFullYear()} ZED Prepare AI. Designed for every student who wants to succeed.
            </p>
            <div className="flex items-center gap-4">
              <p className={`text-xs ${isDarkMode ? 'text-slate-700' : 'text-slate-300'}`}>
                Prepared for WAEC · NECO · JAMB · School Exams
              </p>
              <a href="/policy" className={`text-xs hover:text-orange-500 transition-colors ${isDarkMode ? 'text-slate-600 hover:text-orange-400' : 'text-slate-400'}`}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
