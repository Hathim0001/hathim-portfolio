const interests = [
  { icon: '🌐', label: 'Full Stack Development' },
  { icon: '⚙️', label: 'Backend Engineering' },
  { icon: '🤖', label: 'Applied AI & ML' },
  { icon: '👁️', label: 'Computer Vision' },
  { icon: '🧠', label: 'NLP & LLM Applications' },
  { icon: '🔁', label: 'Systems & Algorithms' },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold font-mono mb-3 tracking-widest uppercase">
              // about_me
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Building software that{' '}
              <span className="gradient-text">matters</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Mohammed Hathim</span>, a
                5th-year Integrated M.Sc. Software Systems student at{' '}
                <span className="text-indigo-300 font-medium">PSG College of Technology</span>, preparing
                for a career in software engineering, full-stack development, and AI/ML.
              </p>
              <p>
                I work across the full development lifecycle — from designing REST APIs and relational database schemas to
                building responsive Next.js interfaces and fine-tuning transformer models on domain-specific datasets.
              </p>
              <p>
                My work spans practical applications: a real-time AI interview platform, a legal contract risk evaluator using
                fine-tuned Legal-BERT, synthetic image detection with adversarial robustness analysis, and several deployed
                full-stack applications.
              </p>
            </div>

            {/* Dev philosophy */}
            <div className="mt-8 glass rounded-xl border border-white/5 p-5">
              <p className="text-xs text-slate-500 mb-2 font-mono">// philosophy</p>
              <p className="text-indigo-300 font-semibold text-lg" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                "Build → Break → Learn → Improve → Repeat"
              </p>
            </div>
          </div>

          {/* Interests grid */}
          <div>
            <p className="text-slate-500 text-sm mb-5 font-mono">// areas_of_focus</p>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl border border-white/5 p-4 flex items-center gap-3 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { num: '30+', label: 'Repositories' },
                { num: '8+', label: 'Live Projects' },
                { num: '5th', label: 'Year M.Sc.' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl border border-white/5 p-4">
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {s.num}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
