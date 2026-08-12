import { CodeIcon, CpuIcon, DatabaseIcon, ShieldIcon, LayersIcon, SparklesIcon, TerminalIcon } from './Icons'

const categories = [
  {
    title: 'Languages',
    icon: CodeIcon,
    accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    techs: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: LayersIcon,
    accent: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    techs: ['React 19', 'Next.js (15/16)', 'Vite', 'Tailwind CSS', 'Shadcn UI', 'Radix UI'],
  },
  {
    title: 'Backend & APIs',
    icon: CpuIcon,
    accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    techs: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Server Actions'],
  },
  {
    title: 'Databases & ORMs',
    icon: DatabaseIcon,
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    techs: ['PostgreSQL', 'MongoDB', 'SQLite', 'Supabase', 'Prisma ORM', 'SQLAlchemy', 'Mongoose'],
  },
  {
    title: 'AI / Machine Learning',
    icon: SparklesIcon,
    accent: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    techs: ['PyTorch', 'Hugging Face Transformers', 'Legal-BERT', 'GPT-4o API', 'Gemini API', 'OpenCV', 'ResNet-18', 'Scikit-Learn', 'NumPy', 'Pandas'],
  },
  {
    title: 'Security & Auth',
    icon: ShieldIcon,
    accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    techs: ['Clerk Auth', 'JWT', 'Supabase Auth', 'Arcjet Security', 'DOMPurify', 'Cookie-Parser'],
  },
  {
    title: 'Tools & Infrastructure',
    icon: TerminalIcon,
    accent: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    techs: ['Git', 'GitHub', 'Vercel', 'Render', 'Streamlit Cloud', 'Postman', 'Stream Video SDK'],
  },
]

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative bg-[#08090b]">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <CpuIcon size={14} />
            <span>// TECH_STACK</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Verified <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified technologies actively used across my open-source projects and codebases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComp = cat.icon
            return (
              <div
                key={cat.title}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${cat.accent}`}>
                      <IconComp size={18} />
                    </div>
                    <h3 className="font-bold text-white text-base font-sans group-hover:text-indigo-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300 font-sans hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-200 transition-all cursor-default"
                      >
                        {t}
                      </span>
                    ))}
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
