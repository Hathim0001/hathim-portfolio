import { CheckIcon, SparklesIcon } from './Icons'

const quickSpecs = [
  { label: 'EDUCATION', value: 'PSG College of Technology' },
  { label: 'PROGRAM', value: 'Integrated M.Sc. Software Systems' },
  { label: 'TIMELINE', value: '5th Year Student (Final Year)' },
  { label: 'FOCUS AREAS', value: 'Full Stack · Backend · AI/ML' },
  { label: 'REPOSITORIES', value: '30+ Public Codebases' },
  { label: 'STATUS', value: 'Open for Full-Time & Internship Roles' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#08090b]">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              <SparklesIcon size={14} />
              <span>// ABOUT_ME</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Architecting systems with <span className="text-gradient">precision & scale</span>
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed font-normal">
              <p>
                I am <span className="text-slate-100 font-semibold">Mohammed Hathim</span>, a final-year Integrated M.Sc. Software Systems student at{' '}
                <span className="text-indigo-300 font-medium">PSG College of Technology</span>. My academic curriculum combines rigorous theoretical computer science with hands-on enterprise software development.
              </p>
              <p>
                Over the past several years, I have engineered full-stack web applications, scalable REST APIs, database architectures, and applied machine learning models.
              </p>
              <p>
                Whether it's building a real-time AI mock interview platform with WebSockets, fine-tuning Legal-BERT transformers for contract risk classification, or implementing virtual memory operating system algorithms in C, I focus on writing clean, maintainable, and high-performance code.
              </p>
            </div>

            {/* Developer Philosophy Quote Card */}
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-xs text-slate-500 font-mono">// DEV_PHILOSOPHY</p>
                  <p className="text-slate-200 font-mono text-sm font-semibold">
                    "Build → Test → Benchmark → Optimize → Repeat"
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold">
                  ⚡
                </div>
              </div>
            </div>
          </div>

          {/* Right Structured Spec Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl pointer-events-none rounded-full" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="text-sm font-bold tracking-wider text-slate-200 uppercase font-mono">
                  DEVELOPER_SPECS.json
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                {quickSpecs.map((spec) => (
                  <div key={spec.label} className="space-y-1">
                    <p className="text-slate-500 text-[10px] sm:text-xs tracking-wider uppercase">
                      {spec.label}
                    </p>
                    <p className="text-slate-200 font-medium font-sans text-sm">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Status Badge */}
              <div className="pt-2">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckIcon size={14} className="text-emerald-400 shrink-0" />
                  <span>Targeting Software Engineering & Developer Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
