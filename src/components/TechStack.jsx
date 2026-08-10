const categories = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'indigo',
    techs: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'purple',
    techs: ['React 19', 'Next.js (15/16)', 'Vite', 'Tailwind CSS', 'Shadcn UI', 'Radix UI'],
  },
  {
    title: 'Backend',
    icon: '⚡',
    color: 'cyan',
    techs: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Next.js Server Actions'],
  },
  {
    title: 'Databases & ORMs',
    icon: '🗄️',
    color: 'emerald',
    techs: ['PostgreSQL', 'MongoDB', 'SQLite', 'Supabase', 'Prisma ORM', 'SQLAlchemy', 'Mongoose'],
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    color: 'pink',
    techs: ['PyTorch', 'Hugging Face Transformers', 'Legal-BERT', 'GPT-4o API', 'Gemini API', 'OpenCV', 'ResNet-18', 'Scikit-Learn', 'NumPy', 'Pandas'],
  },
  {
    title: 'Security & Auth',
    icon: '🔐',
    color: 'yellow',
    techs: ['Clerk Auth', 'JWT', 'Supabase Auth', 'Arcjet', 'DOMPurify', 'Cookie-Parser'],
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    color: 'sky',
    techs: ['Git', 'GitHub', 'Vercel', 'Render', 'Streamlit Cloud', 'Postman', 'Stream Video SDK'],
  },
]

const colorMap = {
  indigo: 'border-indigo-500/20 bg-indigo-500/5 text-indigo-300',
  purple: 'border-purple-500/20 bg-purple-500/5 text-purple-300',
  cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-300',
  emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-300',
  pink: 'border-pink-500/20 bg-pink-500/5 text-pink-300',
  yellow: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-300',
  sky: 'border-sky-500/20 bg-sky-500/5 text-sky-300',
}

const iconColor = {
  indigo: 'bg-indigo-500/15 border-indigo-500/25',
  purple: 'bg-purple-500/15 border-purple-500/25',
  cyan: 'bg-cyan-500/15 border-cyan-500/25',
  emerald: 'bg-emerald-500/15 border-emerald-500/25',
  pink: 'bg-pink-500/15 border-pink-500/25',
  yellow: 'bg-yellow-500/15 border-yellow-500/25',
  sky: 'bg-sky-500/15 border-sky-500/25',
}

export default function TechStack() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Section divider */}
      <div className="section-divider mb-0" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">// tech_stack</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Verified <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technologies confirmed from actual repository source code and dependency manifests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="reveal glass project-card rounded-2xl border border-white/6 p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg ${iconColor[cat.color]}`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`tech-badge text-xs px-2.5 py-1 rounded-md border font-medium cursor-default ${colorMap[cat.color]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
