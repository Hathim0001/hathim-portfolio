import { GithubIcon as Github, ExternalLinkIcon as ExternalLink } from './Icons'
import { useState } from 'react'

const projects = [
  {
    name: 'Interview with AI',
    emoji: '🤖',
    type: 'Full Stack AI Platform',
    typeColor: 'indigo',
    desc: 'AI-powered mock interview platform with real-time video streaming, dynamic question generation via Google Gemini AI, and bot-defense security.',
    techs: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini AI', 'Stream Video', 'Clerk Auth', 'Arcjet'],
    highlight: 'Real-time video interviews + AI question generation',
    github: 'https://github.com/Hathim0001/interview-with-ai',
    live: 'https://interview-ai-iota-ashen.vercel.app/',
    categories: ['fullstack', 'aiml'],
  },
  {
    name: 'CIFAKE Synthetic Image Detector',
    emoji: '🛡️',
    type: 'Computer Vision & ML',
    typeColor: 'purple',
    desc: 'Deep learning pipeline detecting AI-generated synthetic images using ResNet-18 transfer learning, with adversarial evasion and robustness defense analysis.',
    techs: ['PyTorch', 'ResNet-18', 'Torchvision', 'OpenCV', 'Scikit-Learn', 'NumPy', 'Matplotlib'],
    highlight: 'CIFAKE dataset + adversarial attack experiments',
    github: 'https://github.com/Hathim0001/cifake-detector',
    live: null,
    categories: ['aiml'],
  },
  {
    name: 'Advisor ChatBot',
    emoji: '📜',
    type: 'NLP & Legal AI',
    typeColor: 'pink',
    desc: 'Automated legal contract clause classification and risk assessment using fine-tuned Legal-BERT for classification and GPT-4o for risk explanation generation.',
    techs: ['PyTorch', 'Hugging Face Transformers', 'Legal-BERT', 'GPT-4o API', 'Streamlit', 'Datasets'],
    highlight: 'Fine-tuned Legal-BERT + hybrid LLM pipeline',
    github: 'https://github.com/Hathim0001/Adivsor-ChatBot',
    live: null,
    categories: ['aiml'],
  },
  {
    name: 'MLS Slot Booking System',
    emoji: '📅',
    type: 'Full Stack Admin System',
    typeColor: 'emerald',
    desc: 'Full-stack scheduling platform with FastAPI backend, 0.5-hour slot validation, collision prevention algorithms, and a dynamic neon-dark admin timeline UI.',
    techs: ['FastAPI', 'Python', 'SQLite', 'SQLAlchemy', 'React', 'Vite', 'Tailwind CSS', 'Prisma'],
    highlight: 'Collision prevention + availability timeline',
    github: 'https://github.com/Hathim0001/MLS-SLOT-BOOKING',
    live: 'https://mas-slot-booker.vercel.app/',
    categories: ['fullstack'],
  },
  {
    name: 'Real-Time TypeScript Chat',
    emoji: '💬',
    type: 'Real-Time Web App',
    typeColor: 'cyan',
    desc: 'Type-safe real-time chat application using Supabase WebSocket subscriptions, Next.js App Router architecture, and client-side XSS protection with DOMPurify.',
    techs: ['Next.js 15', 'TypeScript', 'Supabase', 'React 19', 'DOMPurify', 'Tailwind CSS v4'],
    highlight: 'Supabase Realtime WebSockets + TypeScript-first',
    github: 'https://github.com/Hathim0001/chat-app-typescript',
    live: 'https://chat-app-typescript-two.vercel.app/',
    categories: ['fullstack'],
  },
  {
    name: 'HBO_HD Movie Platform',
    emoji: '🎬',
    type: 'MERN Stack',
    typeColor: 'yellow',
    desc: 'Full-stack media streaming and browsing platform built with MERN stack featuring JWT authentication, HTTP-only cookie sessions, and Express REST backend.',
    techs: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Cookie-Parser', 'Mongoose', 'Axios'],
    highlight: 'Full MERN auth + session management',
    github: 'https://github.com/Hathim0001/HBO_HD',
    live: 'https://hbo-hd.vercel.app',
    categories: ['fullstack'],
  },
  {
    name: 'Heart Disease Prediction (ML Modelling)',
    emoji: '🫀',
    type: 'ML Analytics Platform',
    typeColor: 'rose',
    desc: 'End-to-end machine learning workflow for cardiac risk prediction covering EDA, feature engineering, model evaluation, and interactive real-time inference deployment.',
    techs: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Streamlit Cloud'],
    highlight: 'Full ML pipeline from EDA to deployment',
    github: 'https://github.com/Hathim0001/ML_MODELLING',
    live: 'https://mlmodelling-m4zpx3x4dsqdiuuaerkmbd.streamlit.app/',
    categories: ['aiml', 'systems'],
  },
  {
    name: 'Virtual Memory Simulator',
    emoji: '🧠',
    type: 'Systems Programming',
    typeColor: 'sky',
    desc: 'Low-level OS virtual memory management simulator implementing page tables, FIFO and LRU page replacement algorithms, and page fault rate analysis.',
    techs: ['C', 'Data Structures', 'Operating Systems', 'Memory Algorithms'],
    highlight: 'FIFO + LRU page replacement simulation',
    github: 'https://github.com/Hathim0001/Virtual-Memory-Simulation',
    live: null,
    categories: ['systems'],
  },
]

const filters = ['all', 'fullstack', 'aiml', 'systems']

const typeColorMap = {
  indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  yellow: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  sky: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
}

const filterLabels = { all: 'All Projects', fullstack: 'Full Stack', aiml: 'AI / ML', systems: 'Systems' }

// Wrapper to match usage as JSX <Github size={N} />  
const GithubWrapper = ({ size }) => <Github size={size} />
const ExternalLinkWrapper = ({ size }) => <ExternalLink size={size} />

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = projects.filter((p) =>
    active === 'all' ? true : p.categories.includes(active)
  )

  return (
    <section id="projects" className="py-28 relative">
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">// featured_projects</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Real applications from my GitHub — verified repositories with actual code.
          </p>
        </div>

        {/* Filter bar */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === f
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-[0_4px_14px_rgba(99,102,241,0.35)]'
                  : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <div
              key={p.name}
              className="project-card glass rounded-2xl border border-white/6 p-6 flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl">{p.emoji}</span>
                  <span
                    className={`ml-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${typeColorMap[p.typeColor]}`}
                  >
                    {p.type}
                  </span>
                </div>
                {p.live && (
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

              {/* Highlight */}
              <div className="bg-indigo-500/5 border border-indigo-500/15 rounded-lg px-3 py-2 mb-4">
                <p className="text-xs font-mono text-indigo-300">⚡ {p.highlight}</p>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="tech-badge text-xs px-2 py-0.5 rounded border border-white/8 bg-white/4 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/4 text-slate-300 hover:bg-white/8 hover:text-white transition-all text-sm font-medium"
                >
                  <Github size={15} /> Code
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all text-sm font-medium"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="reveal text-center mt-12">
          <a
            href="https://github.com/Hathim0001?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 text-slate-300 font-semibold px-8 py-3.5 rounded-xl border border-white/10 text-base hover:text-white"
          >
            <Github size={18} /> View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
