const areas = [
  { label: 'Full Stack Development', icon: '🌐', desc: 'Next.js, React, Vite, TypeScript', level: 90 },
  { label: 'Backend Engineering', icon: '⚙️', desc: 'FastAPI, Express.js, Node.js, REST APIs', level: 85 },
  { label: 'Database Design', icon: '🗄️', desc: 'PostgreSQL, MongoDB, Prisma, SQLAlchemy', level: 82 },
  { label: 'Authentication & Security', icon: '🔐', desc: 'Clerk, JWT, Supabase Auth, Arcjet', level: 80 },
  { label: 'Machine Learning', icon: '🧠', desc: 'PyTorch, Scikit-Learn, Model Training', level: 78 },
  { label: 'Computer Vision', icon: '👁️', desc: 'OpenCV, ResNet-18, Transfer Learning', level: 72 },
  { label: 'NLP & Transformers', icon: '📜', desc: 'Hugging Face, Legal-BERT, GPT-4o API', level: 74 },
  { label: 'Real-Time Systems', icon: '⚡', desc: 'Supabase Realtime, Stream Video, WebSockets', level: 76 },
  { label: 'System Algorithms', icon: '🔁', desc: 'Data Structures, OS Concepts, Memory Mgmt', level: 80 },
  { label: 'Cloud & Deployment', icon: '☁️', desc: 'Vercel, Render, Streamlit Cloud', level: 78 },
]

const colorLevel = (l) => {
  if (l >= 85) return 'from-indigo-500 to-purple-500'
  if (l >= 78) return 'from-cyan-500 to-indigo-500'
  return 'from-purple-500 to-pink-500'
}

export default function Engineering() {
  return (
    <section id="engineering" className="py-28 relative">
      <div className="section-divider mb-0" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-cyan-400 text-sm font-mono mb-3 tracking-widest uppercase">// engineering_areas</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Engineering <span className="gradient-text-cyan">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Areas of software engineering I actively work in, based on actual project implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {areas.map((a, i) => (
            <div
              key={a.label}
              className="reveal glass rounded-2xl border border-white/6 p-5 hover:border-cyan-500/20 hover:bg-cyan-500/3 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{a.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {a.label}
                    </h3>
                    <p className="text-xs text-slate-500">{a.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">{a.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${colorLevel(a.level)} skill-bar`}
                  style={{ width: `${a.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
