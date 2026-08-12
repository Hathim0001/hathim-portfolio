import { useState } from 'react'
import { GithubIcon, ExternalLinkIcon, SparklesIcon, CodeIcon } from './Icons'

const projects = [
  {
    num: '01',
    name: 'Interview with AI',
    tagline: 'AI-Powered Mock Interview & Evaluation Platform',
    desc: 'Production full-stack AI interview application with real-time video streaming, dynamic technical question generation powered by Google Gemini AI, and bot defense rate-limiting.',
    techs: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini AI', 'Stream Video', 'Clerk', 'Arcjet'],
    highlight: 'Real-time video interviews + AI question evaluation',
    github: 'https://github.com/Hathim0001/interview-with-ai',
    live: 'https://interview-ai-iota-ashen.vercel.app/',
    category: 'fullstack',
    visualType: 'interview',
  },
  {
    num: '02',
    name: 'CIFAKE Synthetic Image Detector',
    tagline: 'Deep Learning Pipeline & Adversarial Defense Analysis',
    desc: 'Computer vision framework detecting AI-generated synthetic images using ResNet-18 transfer learning, with adversarial evasion testing and model robustness benchmarks.',
    techs: ['PyTorch', 'ResNet-18', 'Torchvision', 'OpenCV', 'Scikit-Learn', 'NumPy', 'Matplotlib'],
    highlight: 'CIFAKE dataset + adversarial attack analysis',
    github: 'https://github.com/Hathim0001/cifake-detector',
    live: null,
    category: 'aiml',
    visualType: 'cifake',
  },
  {
    num: '03',
    name: 'Advisor ChatBot (Legal Risk AI)',
    tagline: 'Contract Clause Classification & Risk Assessment',
    desc: 'Hybrid NLP architecture pairing fine-tuned Legal-BERT for contract clause classification with GPT-4o for generating human-understandable risk severity summaries.',
    techs: ['PyTorch', 'Hugging Face', 'Legal-BERT', 'GPT-4o API', 'Streamlit', 'Python'],
    highlight: 'Fine-tuned Legal-BERT + hybrid LLM pipeline',
    github: 'https://github.com/Hathim0001/Adivsor-ChatBot',
    live: null,
    category: 'aiml',
    visualType: 'legal',
  },
  {
    num: '04',
    name: 'MLS Slot Booking System',
    tagline: 'Full-Stack Scheduling & Collision Prevention Engine',
    desc: 'High-concurrency slot booking system with FastAPI backend, 0.5-hour interval validation algorithms, atomic reservation locks, and a dark neon timeline UI.',
    techs: ['FastAPI', 'Python', 'SQLite', 'SQLAlchemy', 'React', 'Vite', 'Tailwind CSS'],
    highlight: '0.5h slot validation + collision prevention',
    github: 'https://github.com/Hathim0001/MLS-SLOT-BOOKING',
    live: 'https://mas-slot-booker.vercel.app/',
    category: 'fullstack',
    visualType: 'slot',
  },
  {
    num: '05',
    name: 'Real-Time TypeScript Chat',
    tagline: 'WebSocket Messaging with XSS Sanitization',
    desc: 'Type-safe messaging platform powered by Supabase WebSocket real-time channels, Next.js App Router, and client-side XSS protection via DOMPurify.',
    techs: ['Next.js 15', 'TypeScript', 'Supabase', 'React 19', 'DOMPurify', 'Tailwind CSS'],
    highlight: 'Supabase Realtime WebSockets + DOMPurify XSS defense',
    github: 'https://github.com/Hathim0001/chat-app-typescript',
    live: 'https://chat-app-typescript-two.vercel.app/',
    category: 'fullstack',
    visualType: 'chat',
  },
  {
    num: '06',
    name: 'HBO_HD Media Platform',
    tagline: 'MERN Stack Media Streaming & Session Management',
    desc: 'Full-stack media platform built with MERN stack featuring secure JWT authentication, HTTP-only cookie session management, and Express REST API backend.',
    techs: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Mongoose', 'Axios'],
    highlight: 'Full MERN auth + session management',
    github: 'https://github.com/Hathim0001/HBO_HD',
    live: 'https://hbo-hd.vercel.app',
    category: 'fullstack',
    visualType: 'hbo',
  },
  {
    num: '07',
    name: 'Heart Disease Predictive Modelling',
    tagline: 'End-to-End Supervised ML Pipeline & Inference UI',
    desc: 'Cardiac health risk prediction model covering exploratory data analysis, feature scaling, model selection (Random Forest & Logistic Regression), and Streamlit deployment.',
    techs: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Seaborn', 'Streamlit Cloud'],
    highlight: 'Full ML pipeline from EDA to live inference app',
    github: 'https://github.com/Hathim0001/ML_MODELLING',
    live: 'https://mlmodelling-m4zpx3x4dsqdiuuaerkmbd.streamlit.app/',
    category: 'aiml',
    visualType: 'ml',
  },
  {
    num: '08',
    name: 'Virtual Memory Simulator',
    tagline: 'Operating System Memory Management & Page Algorithms',
    desc: 'Low-level OS memory management simulator implementing virtual-to-physical address translation, FIFO & LRU page replacement, and page fault benchmark statistics.',
    techs: ['C', 'Operating Systems', 'Data Structures', 'Algorithm Analysis'],
    highlight: 'FIFO + LRU page replacement algorithm simulator',
    github: 'https://github.com/Hathim0001/Virtual-Memory-Simulation',
    live: null,
    category: 'systems',
    visualType: 'memory',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = projects.filter((p) =>
    activeFilter === 'all' ? true : p.category === activeFilter || (activeFilter === 'aiml' && p.category === 'aiml')
  )

  return (
    <section id="projects" className="py-24 relative bg-[#08090b]">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              <CodeIcon size={14} />
              <span>// FEATURED_PROJECTS</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Selected <span className="text-gradient">Engineering Work</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Verified repositories and applications built with clean code practices.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.08] w-fit">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'fullstack', label: 'Full Stack' },
              { id: 'aiml', label: 'AI / ML' },
              { id: 'systems', label: 'Systems' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === f.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-16">
          {filtered.map((p, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={p.name}
                className="glass-card p-6 sm:p-10 rounded-2xl border border-white/[0.08] relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className={`grid lg:grid-cols-12 gap-8 sm:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Text Details (7 cols or 6 cols) */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-indigo-400/80 tracking-tight">
                        {p.num}
                      </span>
                      {p.live && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          LIVE_DEMO
                        </span>
                      )}
                    </div>

                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-xs font-mono text-indigo-300 mt-1">{p.tagline}</p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed font-sans">{p.desc}</p>

                    {/* Highlight Box */}
                    <div className="p-3 rounded-lg bg-indigo-500/[0.04] border border-indigo-500/15">
                      <p className="text-xs font-mono text-indigo-300 flex items-center gap-2">
                        <span>⚡</span> {p.highlight}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.techs.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2"
                        >
                          <span>Live Demo</span>
                          <ExternalLinkIcon size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* CSS Interactive Visual Mockup (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ProjectMockup type={p.visualType} name={p.name} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Custom CSS-based Project Mockups
function ProjectMockup({ type, name }) {
  if (type === 'interview') {
    return (
      <div className="rounded-xl border border-white/[0.1] bg-[#0c0e14] p-4 space-y-3 font-mono text-xs shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-slate-200 font-semibold">AI Video Interview Session</span>
          </div>
          <span className="text-emerald-400">● STREAMING 720p</span>
        </div>

        <div className="grid grid-cols-2 gap-2 h-28">
          <div className="rounded-lg bg-indigo-950/40 border border-indigo-500/20 p-2 flex flex-col justify-between relative">
            <span className="text-[10px] text-indigo-300 bg-indigo-500/20 px-1.5 py-0.5 rounded w-fit">Candidate Cam</span>
            <div className="flex items-end gap-1 h-6">
              <span className="w-1 bg-indigo-400 h-3 animate-pulse" />
              <span className="w-1 bg-indigo-400 h-5 animate-pulse" />
              <span className="w-1 bg-indigo-400 h-2 animate-pulse" />
              <span className="w-1 bg-indigo-400 h-4 animate-pulse" />
            </div>
          </div>
          <div className="rounded-lg bg-purple-950/30 border border-purple-500/20 p-2 flex flex-col justify-between">
            <span className="text-[10px] text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded w-fit">Gemini AI Evaluator</span>
            <span className="text-[10px] text-slate-400">Analyzing voice pitch & response depth...</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] text-slate-300">
          <p className="text-indigo-400 font-semibold">Q2: System Architecture</p>
          <p className="text-slate-400 mt-1 font-sans text-xs">"Explain how you prevent race conditions in high-concurrency API calls?"</p>
        </div>
      </div>
    )
  }

  if (type === 'cifake') {
    return (
      <div className="rounded-xl border border-white/[0.1] bg-[#0c0e14] p-4 space-y-3 font-mono text-xs shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[11px]">
          <span className="text-purple-400 font-semibold">ResNet-18 Inference Pipeline</span>
          <span className="text-slate-400">Dataset: CIFAKE (60k images)</span>
        </div>

        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2">
          <div className="flex justify-between text-[11px]">
            <span>Model Confidence</span>
            <span className="text-purple-300">98.4% Synthetic</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex">
            <div className="w-[98.4%] bg-purple-500 h-full" />
            <div className="w-[1.6%] bg-emerald-500 h-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
          <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
            Adversarial Evasion: Evaluated
          </div>
          <div className="p-2 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            Transfer Learning: Active
          </div>
        </div>
      </div>
    )
  }

  if (type === 'legal') {
    return (
      <div className="rounded-xl border border-white/[0.1] bg-[#0c0e14] p-4 space-y-3 font-mono text-xs shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[11px]">
          <span className="text-pink-400 font-semibold">Legal-BERT Clause Analyzer</span>
          <span className="text-amber-400">HIGH RISK DETECTED</span>
        </div>

        <div className="p-2.5 rounded bg-pink-500/5 border border-pink-500/20 text-[11px] text-slate-300">
          <span className="text-pink-400 font-semibold">Contract Excerpt:</span>
          <p className="text-slate-400 mt-1 font-sans italic text-xs">"...Licensor retains unrestricted rights to terminate without prior written notice..."</p>
        </div>

        <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Classification:</span>
          <span className="text-pink-300 font-semibold">Indemnity / Termination Vulnerability</span>
        </div>
      </div>
    )
  }

  if (type === 'slot') {
    return (
      <div className="rounded-xl border border-white/[0.1] bg-[#0c0e14] p-4 space-y-3 font-mono text-xs shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[11px]">
          <span className="text-cyan-400 font-semibold">FastAPI Slot Booker Engine</span>
          <span className="text-emerald-400">200 OK (12ms)</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="p-1.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">09:00 AM</div>
          <div className="p-1.5 rounded bg-red-500/20 border border-red-500/30 text-red-300 opacity-60">09:30 AM</div>
          <div className="p-1.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">10:00 AM</div>
          <div className="p-1.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">10:30 AM</div>
        </div>

        <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300">
          Atomic Slot Validation: Prevents concurrent booking collisions
        </div>
      </div>
    )
  }

  // Fallback default clean dark window
  return (
    <div className="rounded-xl border border-white/[0.1] bg-[#0c0e14] p-4 space-y-3 font-mono text-xs shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[11px]">
        <span className="text-indigo-400 font-semibold">{name}</span>
        <span className="text-slate-400">Codebase Preview</span>
      </div>
      <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06] text-[11px] text-slate-300 space-y-1">
        <p className="text-indigo-300">// Verified repository module</p>
        <p className="text-slate-400">Built with modern design patterns and clean code standards.</p>
      </div>
    </div>
  )
}
