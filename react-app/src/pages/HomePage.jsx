import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Download, CheckCircle, GraduationCap, Award, ChevronRight,
  ExternalLink, BookOpen
} from 'lucide-react';
import { LinkedinIcon } from '../components/BrandIcons';
import { businessData } from '../data/businessData';

export default function HomePage({ onOpenResume }) {
  return (
    <div className="space-y-20 lg:space-y-28 overflow-hidden pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-40 left-10 w-80 h-80 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-700">
                <span>Hello, I am a</span>
                <span className="text-base">🚀</span>
                <span className="font-semibold text-emerald-900 dark:text-emerald-200">MERN Stack Developer</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
                  <span className="block text-[#00c885]">Full Stack</span>
                  <span className="block text-slate-900 dark:text-white">Web Developer</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed pt-2">
                  Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">{businessData.name}</strong>, a passionate Full Stack Developer & MERN Specialist based in <span className="text-emerald-700 dark:text-emerald-400 font-medium">{businessData.location}</span>. I engineer fast, responsive web applications and scalable RESTful APIs.
                </p>
              </div>

              {/* Action Buttons matching reference */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/about"
                  className="px-7 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  View Profile
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 font-semibold text-sm transition-all bg-white dark:bg-slate-900"
                >
                  Contact me
                </Link>

                <button
                  onClick={onOpenResume}
                  className="px-5 py-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Download CV</span>
                </button>

                <a
                  href={businessData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 text-[#0077b5] dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-semibold text-sm transition-all flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>MERN Stack Certified (Code IT)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>15+ Web Applications</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>100% Cross-Device Responsive</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Portrait Card with Actual Photo (No 5.0 Rating Pill) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00c885]/20 via-teal-300/30 to-emerald-100 dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-transparent rounded-3xl transform rotate-2 scale-102 filter blur-xs" />

                <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100/80 dark:border-slate-800 overflow-hidden text-center transition-colors">
                  
                  {/* Floating speech bubble */}
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md animate-pulse flex items-center gap-1">
                    <span>Hi, I am Jatin!</span>
                    <span>👋</span>
                  </div>

                  {/* Avatar graphic with user photo */}
                  <div className="relative mx-auto w-52 h-52 sm:w-60 sm:h-60 mt-4 mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00c885] to-teal-600 p-1.5 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-900">
                        <img
                          src={businessData.avatarUrl}
                          alt={businessData.name}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quick role highlight */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    Full Stack MERN Developer
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Rajbiraj, Saptari — Nepal
                  </p>

                  {/* Floating side badges */}
                  <div className="mt-5 grid grid-cols-2 gap-2.5 text-left">
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Core Stack</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100">React • Node • Mongo</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Design & Code</div>
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">100% Responsive</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800 transition-colors">
          {businessData.stats.map((st, i) => (
            <div key={i} className="pt-4 lg:pt-0 first:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
                <span className="text-[#00c885]">{st.value}</span>
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{st.label}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{st.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME & ORBITING STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 sm:p-12 border border-emerald-100 dark:border-slate-800 shadow-md transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Circular Orbit Graphic matching reference with real photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#00c885]/40 animate-spin" style={{ animationDuration: '30s' }} />
                
                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 p-1.5 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-900">
                    <img
                      src={businessData.avatarUrl}
                      alt={businessData.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="absolute -top-2 left-2 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full shadow-lg border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-slate-800 dark:text-slate-200 badge-float">
                  <span className="text-emerald-600 dark:text-emerald-400">15+</span> Projects
                </div>

                <div className="absolute bottom-2 -right-2 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full shadow-lg border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-slate-800 dark:text-slate-200 badge-float-delayed">
                  <span className="text-emerald-600 dark:text-emerald-400">100%</span> Responsive
                </div>
              </div>
            </div>

            {/* About description */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00c885]">
                Who I Am
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
                About Me
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a full stack web developer with a keen eye for clean architecture and performant interfaces. With hands-on experience building end-to-end MERN stack web applications, I combine strong analytical problem-solving with structured coding best practices.
              </p>
              
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00c885]"></span>
                  <span>Currently pursuing <strong>BSc. CSIT</strong> at Gyandev Technical Academy (RJU).</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00c885]"></span>
                  <span>Certified <strong>MERN Full Stack Web Developer</strong> from Code IT.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00c885]"></span>
                  <span>Specialized in <strong>React.js, Node.js, Express, MongoDB & Tailwind CSS</strong>.</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-md transition-all"
                >
                  Contact me
                </Link>
                <button
                  onClick={onOpenResume}
                  className="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-600 font-semibold text-sm transition-all bg-white dark:bg-slate-900 cursor-pointer"
                >
                  Download CV
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLED SECTION WITH PERCENTAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-800 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00c885]">
                Skilled & Capable
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
                Creative Engineering Skills <br />
                <span className="text-slate-500 dark:text-slate-400 font-medium text-2xl sm:text-3xl">Experience on Key Tech</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I specialize in both client-side modern reactive interfaces and reliable server-side microservices. Every application is built with clean standards, cross-device responsiveness, and high speed.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right progress bars matching reference */}
            <div className="lg:col-span-7 space-y-4">
              {businessData.skills.slice(0, 5).map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                      {skill.name}
                    </span>
                    <span className="text-[#00c885] font-extrabold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: '#00c885'
                      }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="pt-2 text-right">
                <Link
                  to="/skills"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
                >
                  <span>View all technical competencies & tools</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATION SECTION (ADDED FROM RESUME - REPLACING SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00c885]">
            Academic & Professional Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
            Education & Certification
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Strong academic foundations in computer science and specialized professional MERN stack certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Degree 1: BSc. CSIT */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                In Progress
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                BSc. CSIT
              </h3>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Gyandev Technical Academy (RJU)
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Core coursework in algorithms, computer science, database management systems, and software engineering.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Bachelor of Science in CS & IT
            </div>
          </div>

          {/* Degree 2: +2 Science */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                GPA: 3.10
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                ISC (+2 Science)
              </h3>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Lali Guraas Sec. Boarding School
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Strong analytical foundation in physics, advanced mathematics, and computational logic.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Higher Secondary Education
            </div>
          </div>

          {/* Degree 3: SEE */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                GPA: 3.20
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                SEE Examination
              </h3>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                S.L.P.S. Ma. Vi., Pathargada
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Secondary level education with high distinction in science and mathematics.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Secondary Education Board
            </div>
          </div>

          {/* Certification Card: Code IT */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-xl border border-emerald-400 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                Certified
              </span>
              <h3 className="text-lg font-bold font-heading">
                MERN Full Stack Developer
              </h3>
              <p className="text-xs font-semibold text-emerald-200">
                Issued by Code IT
              </p>
              <p className="text-xs text-emerald-50 leading-relaxed">
                MongoDB, Express.js, React.js, Node.js, RESTful API architecture, JWT authentication, and full-stack cloud deployment.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-emerald-500/50 text-[11px] font-medium text-emerald-100 relative z-10">
              Professional Industry Certification
            </div>
          </div>
        </div>
      </section>

      {/* STRONG POINTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-50/60 via-white to-emerald-50/40 dark:from-slate-900/60 dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 sm:p-12 border border-purple-100/80 dark:border-slate-800 shadow-md transition-colors">
          <div className="max-w-2xl text-left space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Technical Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Strong Points About My Code
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Clean architecture, 100% responsiveness, and modern developer best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessData.strongPoints.map((pt, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-slate-800 hover:border-emerald-400 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {i + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                  {pt.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00c885]">
              Real-World Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Production web applications and end-to-end full stack MERN architectures.
            </p>
          </div>
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {businessData.projects.slice(0, 3).map((prj) => (
            <div
              key={prj.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {prj.category}
                  </span>
                  <a
                    href={prj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    title="GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                    {prj.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {prj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {prj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  {prj.metrics}
                </span>
                <Link
                  to="/projects"
                  className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Looking for a Skilled Full Stack Developer?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Based in Rajbiraj, Saptari, Nepal. Available for full-time roles, freelance projects, and software engineering contracts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-emerald-900 hover:bg-slate-100 font-bold text-sm shadow-lg transition-all"
            >
              Contact Me Directly
            </Link>
            <a
              href={businessData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0077b5] hover:bg-[#006097] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
