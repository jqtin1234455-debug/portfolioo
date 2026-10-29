import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { businessData } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio with JK Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00c885] to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-black text-lg tracking-tight font-heading">
                JK
              </div>
              <span className="text-xl font-bold text-white font-heading">
                JK Dev • {businessData.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Crafting responsive, scalable, and high-performance web applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {businessData.linkedin && (
                <a
                  href={businessData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0077b5] text-white hover:bg-[#006097] flex items-center justify-center transition-colors shadow-sm"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {businessData.github && (
                <a
                  href={businessData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Education & Certification (From Resume) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education & Certs</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-slate-400">
                <strong className="text-slate-200 block">BSc. CSIT (In Progress)</strong>
                <span className="text-[11px] text-slate-500">Gyandev Technical Academy, RJU</span>
              </li>
              <li className="text-slate-400">
                <strong className="text-slate-200 block">ISC (+2 Science) • GPA: 3.10</strong>
                <span className="text-[11px] text-slate-500">Lali Guraas Sec. Boarding School</span>
              </li>
              <li className="text-slate-400">
                <strong className="text-slate-200 block">SEE • GPA: 3.20</strong>
                <span className="text-[11px] text-slate-500">S.L.P.S. Ma. Vi., Pathargada</span>
              </li>
              <li className="pt-1 text-slate-400">
                <strong className="text-emerald-400 block flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>MERN Certified</span>
                </strong>
                <span className="text-[11px] text-slate-500">Code IT Institute</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Page Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home (Overview & Education)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Me & Bio
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Projects & Portfolio
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Skills & Technical Matrix
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {businessData.name} (JK Dev). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-medium">Full Stack Developer</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
