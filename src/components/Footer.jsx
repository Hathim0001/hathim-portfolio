import { GithubIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8 bg-[#08090b]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-slate-500">
          © {new Date().getFullYear()} <span className="text-slate-300 font-medium">Mohammed Hathim</span> · Built with React, Vite & Tailwind CSS
        </p>

        <div className="flex items-center gap-4 text-slate-500 font-mono">
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
          >
            <GithubIcon size={14} />
            <span>Hathim0001</span>
          </a>
          <span>·</span>
          <span>PSG Tech</span>
        </div>
      </div>
    </footer>
  )
}
