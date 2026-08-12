import { GithubIcon, ArrowUpRightIcon, CodeIcon } from './Icons'

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 relative bg-[#08090b]">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <CodeIcon size={14} />
            <span>// GITHUB_ACTIVITY</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Open Source & <span className="text-gradient">Code Metrics</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Live contribution activity and language distribution from my GitHub profile.
          </p>
        </div>

        {/* GitHub Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Main GitHub Stats Widget */}
          <div className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col items-center justify-center">
            <p className="text-xs font-mono text-slate-500 mb-4">// GITHUB_OVERVIEW</p>
            <img
              src="https://github-readme-stats.vercel.app/api?username=Hathim0001&show_icons=true&hide_border=true&bg_color=00000000&rank_icon=github&text_color=94a3b8&title_color=818cf8&icon_color=a78bfa"
              alt="Mohammed Hathim's GitHub Stats"
              className="w-full max-w-sm rounded-lg opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>

          {/* Top Languages Widget */}
          <div className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col items-center justify-center">
            <p className="text-xs font-mono text-slate-500 mb-4">// TOP_LANGUAGES</p>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=Hathim0001&layout=compact&hide_border=true&bg_color=00000000&text_color=94a3b8&title_color=818cf8"
              alt="Top Languages"
              className="w-full max-w-sm rounded-lg opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contribution Streak Widget */}
        <div className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col items-center justify-center mb-10">
          <p className="text-xs font-mono text-slate-500 mb-4">// CONTRIBUTION_STREAK</p>
          <img
            src="https://streak-stats.demolab.com?user=Hathim0001&theme=transparent&hide_border=true&stroke=818cf8&ring=a78bfa&fire=c084fc&currStreakLabel=94a3b8&sideLabels=94a3b8&dates=64748b"
            alt="GitHub Streak"
            className="w-full max-w-xl rounded-lg opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2"
          >
            <GithubIcon size={16} />
            <span>Explore All 30+ Repositories @Hathim0001</span>
            <ArrowUpRightIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
