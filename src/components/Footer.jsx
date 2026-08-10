import { GithubIcon as Github } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 <span className="text-slate-300 font-medium">Mohammed Hathim</span> · Built with React, Vite & Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <Github size={16} /> Hathim0001
          </a>
          <span className="text-slate-700">·</span>
          <span className="text-slate-600 text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Build → Break → Learn → Improve
          </span>
        </div>
      </div>
    </footer>
  )
}
