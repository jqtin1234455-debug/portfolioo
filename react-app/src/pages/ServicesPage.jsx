import React, { useState } from 'react';
import { 
  Layers, Code2, Server, Palette, Zap, GraduationCap, CheckCircle2, 
  Calculator, ChevronDown, ChevronUp
} from 'lucide-react';
import { businessData } from '../data/businessData';

export default function ServicesPage({ onOpenEstimate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What makes your MERN Stack development service unique?",
      a: "I handle both the React frontend and the Node/Express/MongoDB backend architecture myself. This ensures zero communication gaps, seamless RESTful API contracts, and consistent database schema design with fast execution."
    },
    {
      q: "Do you design websites that are fully responsive on mobile devices?",
      a: "Yes, 100%! All websites are built mobile-first using Tailwind CSS and modern media queries. Your website will adapt smoothly to smartphones, tablets, laptops, and ultra-wide desktops."
    },
    {
      q: "Can I request custom features or third-party integrations?",
      a: "Certainly! I regularly integrate payment systems, authentication (JWT/OAuth), email notifications, LinkedIn profile integration, analytics, and custom administrative dashboards."
    },
    {
      q: "What is your typical project delivery timeline?",
      a: "Standard landing pages and portfolios take 4-7 days. Full stack MERN applications typically take 1-3 weeks depending on scope, database complexity, and feature set."
    },
    {
      q: "Do you provide student or corporate IT training?",
      a: "Yes! As an active instructor at Intellect Computer Training Center in Rajbiraj, I offer custom curriculums in MERN stack development, React, JavaScript, and computer fundamentals with practical real-time lab mentoring."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20 text-left">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
          <span>Our Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-heading">
          Services We Offer
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          From custom MERN web platforms to responsive UI design and corporate training, explore end-to-end digital engineering tailored to your requirements.
        </p>
      </div>

      {/* Services Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businessData.services.map((srv) => (
          <div
            key={srv.id}
            className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100 hover:border-emerald-300 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
                  {srv.id === 'mern-stack' && <Layers className="w-6 h-6" />}
                  {srv.id === 'frontend-react-vue' && <Code2 className="w-6 h-6" />}
                  {srv.id === 'api-backend' && <Server className="w-6 h-6" />}
                  {srv.id === 'ui-ux-design' && <Palette className="w-6 h-6" />}
                  {srv.id === 'performance-maintenance' && <Zap className="w-6 h-6" />}
                  {srv.id === 'it-training' && <GraduationCap className="w-6 h-6" />}
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${srv.badgeColor}`}>
                  {srv.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {srv.title}
                </h3>
                <p className="text-xs font-medium text-emerald-700 mt-1">
                  {srv.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Included Deliverables:
                </span>
                <ul className="space-y-2">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Pricing & Time</span>
                <span className="text-xs font-bold text-slate-900">{srv.priceEstimate}</span>
                <div className="text-[10px] text-slate-500">Timeline: {srv.timeline}</div>
              </div>

              <button
                onClick={onOpenEstimate}
                className="px-4 py-2 rounded-full bg-emerald-50 hover:bg-[#00c885] text-emerald-700 hover:text-white text-xs font-semibold transition-all"
              >
                Estimate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4-Step Engineering Workflow */}
      <div className="bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 rounded-3xl p-8 sm:p-12 border border-emerald-100 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00c885]">
            Our Methodology
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            How We Build & Deliver
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A clear, transparent lifecycle ensuring your application is delivered on-schedule and without surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Discovery & Scope',
              desc: 'Understanding your business targets, requirements, and database architecture requirements.'
            },
            {
              step: '02',
              title: 'UI/UX Prototyping',
              desc: 'Creating responsive wireframes and layout structures using Tailwind CSS and modern aesthetics.'
            },
            {
              step: '03',
              title: 'Full Stack Coding',
              desc: 'Developing React/Vue components, REST API endpoints with Node/Express, and MongoDB schemas.'
            },
            {
              step: '04',
              title: 'Testing & Handover',
              desc: 'Rigorous cross-device testing, deployment to production hosting, and training guidance.'
            }
          ].map((st, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-2">
              <span className="text-2xl font-black text-[#00c885] font-heading block">{st.step}</span>
              <h4 className="text-base font-bold text-slate-900 font-heading">{st.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00c885]">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cost Estimator Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-bold font-heading">
            Need an accurate price quotation for your website?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Use our interactive calculator to customize features, select page count, and receive a quote instantly.
          </p>
        </div>
        <button
          onClick={onOpenEstimate}
          className="px-6 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center gap-2 shrink-0"
        >
          <Calculator className="w-4 h-4" />
          <span>Launch Cost Calculator</span>
        </button>
      </div>
    </div>
  );
}
