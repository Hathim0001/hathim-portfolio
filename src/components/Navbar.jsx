import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { GithubIcon } from './Icons'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI/ML', href: '#aiml' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050810]/95 border-b border-indigo-500/20 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-bold text-xl tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <span className="text-indigo-400">&lt;</span>
          <span className="text-white">Hathim</span>
          <span className="text-indigo-400"> /&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-2"
          >
            <GithubIcon size={15} /> GitHub
          </a>
        </nav>

        <button className="md:hidden text-slate-300 hover:text-white transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mobile-menu-enter bg-[#0a0f1e]/97 border-t border-white/5 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-300 hover:text-white py-2 text-base font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="block btn-primary text-white text-sm font-semibold px-4 py-2 rounded-lg text-center mt-2"
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  )
}
