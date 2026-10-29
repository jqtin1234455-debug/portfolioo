import React from 'react';
import { 
  Code2, Server, Terminal
} from 'lucide-react';
import { businessData } from '../data/businessData';

export default function SkillsPage() {
  const skillGroups = [
    {
      title: "Languages & Frontend",
      icon: Code2,
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-400",
      skills: [
        { name: "React.js", level: "Advanced", desc: "Hooks, Context API, React Router, Reusable Components", pct: 94 },
        { name: "Vue.js 3", level: "Proficient", desc: "Composition API, Vue Router, Reactive State Management", pct: 85 },
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, Promises, Closures, DOM Manipulation", pct: 95 },
        { name: "Tailwind CSS", level: "Advanced", desc: "Utility-first Design, Dark Mode, Responsive Grids", pct: 92 },
        { name: "HTML5 & CSS3", level: "Mastery", desc: "Semantic Markup, Modern Flexbox & Grid Systems", pct: 96 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Server,
      color: "text-purple-600 bg-purple-50 dark:bg-purple-950/60 dark:text-purple-400",
      skills: [
        { name: "Node.js", level: "Advanced", desc: "Event-driven runtime, NPM ecosystem, Server architecture", pct: 88 },
        { name: "Express.js", level: "Advanced", desc: "RESTful Endpoints, Middleware pipelines, Error handling", pct: 90 },
        { name: "MongoDB", level: "Advanced", desc: "Document modeling, Aggregation pipelines, Atlas Cloud", pct: 86 },
        { name: "RESTful API Design", level: "Advanced", desc: "CRUD contracts, JSON specifications, Postman testing", pct: 92 },
        { name: "Authentication (JWT)", level: "Proficient", desc: "Token verification, bcrypt hashing, Protected routes", pct: 87 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Terminal,
      color: "text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400",
      skills: [
        { name: "Git & GitHub", level: "Advanced", desc: "Branching strategies, Merge management, Pull requests", pct: 89 },
        { name: "Microsoft Excel", level: "Proficient", desc: "Data analysis, Formulas, Structured Sheets", pct: 90 },
        { name: "VS Code & Postman", level: "Advanced", desc: "Debugging, API stress tests, Extensions ecosystem", pct: 93 },
        { name: "Cloud Deployment", level: "Proficient", desc: "Vercel, Render, MongoDB Atlas configuration", pct: 88 }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-700">
          <span>Technical Proficiency</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
          Skills & Technical Matrix
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Comprehensive overview of technologies, frameworks, backend architectures, and tooling mastered through academic coursework, certifications, and hands-on projects.
        </p>
      </div>

      {/* Visual Skill Percentage Cards */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 dark:border-slate-800 space-y-8 transition-colors">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00c885]">
            Core Proficiency Levels
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
            Key Technology Mastery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessData.skills.map((skill, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color }} />
                  {skill.name}
                </span>
                <span className="text-[#00c885] font-black text-sm">{skill.percentage}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200/80 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: '#00c885'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Skill Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillGroups.map((grp, i) => {
          const Icon = grp.icon;
          return (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 dark:border-slate-800 space-y-5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${grp.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">{grp.title}</h3>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{grp.skills.length} Core Areas</span>
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                {grp.skills.map((sk, sIdx) => (
                  <div key={sIdx} className="border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-slate-900 dark:text-slate-100">{sk.name}</span>
                      <span className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                        {sk.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{sk.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
