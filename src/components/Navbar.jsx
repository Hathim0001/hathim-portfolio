import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { GithubIcon, ArrowUpRightIcon } from './Icons'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI / ML', href: '#aiml' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = links.map((l) => l.href.substring(1))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i])
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090b]/80 border-b border-white/[0.08] backdrop-blur-md py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] group-hover:scale-125 transition-transform" />
          <span className="text-sm font-semibold tracking-wider uppercase text-slate-100 font-mono">
            Hathim<span className="text-indigo-400">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1 rounded-full backdrop-blur-md">
          {links.map((l) => {
            const isActive = activeSection === l.href.substring(1)
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </nav>

        {/* GitHub CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs px-3.5 py-1.5 rounded-full inline-flex items-center gap-2"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
            <ArrowUpRightIcon size={12} className="opacity-60" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0c10]/95 border-b border-white/[0.08] backdrop-blur-xl px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-300 hover:text-white text-sm font-medium py-2 border-b border-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center text-xs py-2.5 rounded-lg inline-flex items-center justify-center gap-2 mt-4"
          >
            <GithubIcon size={14} />
            <span>GitHub Profile ↗</span>
          </a>
        </div>
      )}
    </header>
  )
}
