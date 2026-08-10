import { GithubIcon as Github, ExternalLinkIcon as ExternalLink } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="section-divider mb-0" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/8 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <div className="reveal">
          <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">// get_in_touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg mb-2 leading-relaxed">
            I'm a 5th-year software engineering student actively looking for{' '}
            <span className="text-white font-medium">Software Engineering</span>,{' '}
            <span className="text-indigo-300 font-medium">Full Stack</span>,{' '}
            <span className="text-purple-300 font-medium">Backend</span>, and{' '}
            <span className="text-cyan-300 font-medium">AI/ML Developer</span> roles and internships.
          </p>
          <p className="text-slate-500 mb-12">Feel free to explore my work on GitHub and reach out.</p>

          {/* Contact cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://github.com/Hathim0001"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-xl text-base"
            >
              <Github size={20} />
              Visit GitHub @Hathim0001
            </a>
          </div>

          {/* Info card */}
          <div className="glass rounded-2xl border border-white/6 p-8 text-left max-w-lg mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-lg">🎓</span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">education</p>
                  <p className="text-white font-semibold text-sm">Integrated M.Sc. Software Systems</p>
                  <p className="text-slate-400 text-xs">PSG College of Technology</p>
                </div>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-lg">💼</span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">open_to</p>
                  <p className="text-white font-semibold text-sm">Software Dev · Full Stack · Backend · AI/ML</p>
                  <p className="text-slate-400 text-xs">Internships & Full-Time Positions</p>
                </div>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-lg">💻</span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">github_profile</p>
                  <a
                    href="https://github.com/Hathim0001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-indigo-200 font-semibold text-sm flex items-center gap-1 transition-colors"
                  >
                    github.com/Hathim0001 <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
