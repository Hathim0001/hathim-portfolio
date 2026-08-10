import { GithubIcon as Github, ExternalLinkIcon as ExternalLink } from './Icons'

export default function GitHubSection() {
  return (
    <section id="github" className="py-28 relative">
      <div className="section-divider mb-0" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">// github_activity</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            GitHub <span className="gradient-text">Activity</span>
          </h2>
        </div>

        <div className="reveal grid md:grid-cols-2 gap-6 mb-8">
          {/* Stats card */}
          <div className="glass rounded-2xl border border-white/6 p-6 flex flex-col items-center">
            <p className="text-xs font-mono text-slate-500 mb-3">// github_stats</p>
            <img
              src="https://github-readme-stats.vercel.app/api?username=Hathim0001&show_icons=true&hide_border=true&theme=transparent&rank_icon=github&text_color=94a3b8&title_color=818cf8&icon_color=a78bfa"
              alt="GitHub Stats"
              className="w-full max-w-sm rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Top langs card */}
          <div className="glass rounded-2xl border border-white/6 p-6 flex flex-col items-center">
            <p className="text-xs font-mono text-slate-500 mb-3">// top_languages</p>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hathim0001&layout=compact&hide_border=true&theme=transparent&text_color=94a3b8&title_color=818cf8"
              alt="Top Languages"
              className="w-full max-w-sm rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Streak stats */}
        <div className="reveal glass rounded-2xl border border-white/6 p-6 flex flex-col items-center mb-8">
          <p className="text-xs font-mono text-slate-500 mb-3">// contribution_streak</p>
          <img
            src="https://streak-stats.demolab.com?user=Hathim0001&theme=transparent&hide_border=true&stroke=818cf8&ring=a78bfa&fire=c084fc&currStreakLabel=94a3b8&sideLabels=94a3b8&dates=64748b"
            alt="GitHub Streak"
            className="w-full max-w-2xl rounded-lg"
            loading="lazy"
          />
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-xl text-base"
          >
            <Github size={20} />
            View Full GitHub Profile
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
