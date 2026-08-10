import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { GithubIcon, ExternalLinkIcon } from './Icons'

const roles = ['Full Stack Developer', 'Backend Engineer', 'AI/ML Developer', 'Software Engineer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout
    if (!isDeleting && charIdx < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx + 1)); setCharIdx((c) => c + 1) }, 80)
    } else if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx((c) => c - 1) }, 40)
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false)
      setRoleIdx((r) => (r + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, roleIdx])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 60; i++) {
      particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, r: Math.random() * 1.5 + 0.3, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4, opacity: Math.random() * 0.5 + 0.1 })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(129,140,248,${p.opacity})`; ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[120px] animate-blob-delay pointer-events-none" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-[100px] animate-blob-delay2 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="fade-up-1 inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>
            5th-Year Integrated M.Sc. Software Systems @ PSG College of Technology
          </span>
        </div>

        <h1 className="fade-up-2 text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Mohammed <span className="gradient-text">Hathim</span>
        </h1>

        <div className="fade-up-3 h-12 mb-6 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-semibold text-slate-300" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {displayed}<span className="cursor-blink text-indigo-400 ml-0.5">|</span>
          </span>
        </div>

        <p className="fade-up-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build <span className="text-indigo-300 font-medium">full-stack web applications</span>,{' '}
          <span className="text-purple-300 font-medium">backend systems</span>, and{' '}
          <span className="text-cyan-300 font-medium">AI-powered software</span> that solves real-world problems.
        </p>

        <div className="fade-up-4 flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects" className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base">
            View Projects <ExternalLinkIcon size={16} />
          </a>
          <a href="https://github.com/Hathim0001" target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 text-slate-200 font-semibold px-7 py-3.5 rounded-xl text-base border border-white/10">
            <GithubIcon size={18} /> GitHub
          </a>
          <a href="#contact" className="btn-ghost inline-flex items-center gap-2 text-slate-200 font-semibold px-7 py-3.5 rounded-xl text-base border border-white/10">
            Connect →
          </a>
        </div>

        <div className="fade-up-4 mx-auto max-w-lg glass rounded-xl border border-white/5 text-left overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-slate-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>hathim@dev ~ portfolio</span>
          </div>
          <div className="px-4 py-3 text-sm space-y-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <p><span className="text-indigo-400">$</span> <span className="text-emerald-400">whoami</span></p>
            <p className="text-slate-300">Mohammed Hathim</p>
            <p className="text-slate-500"># Full Stack · Backend · AI/ML Developer</p>
            <p><span className="text-indigo-400">$</span> <span className="text-emerald-400">cat</span> <span className="text-cyan-400">skills.txt</span></p>
            <p className="text-slate-300">Next.js | FastAPI | PyTorch | PostgreSQL</p>
            <p><span className="text-indigo-400">$</span> <span className="text-slate-400 cursor-blink">_</span></p>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-400 transition-colors animate-bounce">
        <ChevronDown size={24} />
      </a>
    </section>
  )
}
