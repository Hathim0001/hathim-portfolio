import { useEffect, useRef, useState } from 'react'
import { GithubIcon, ArrowRightIcon, ArrowUpRightIcon, TerminalIcon, CodeIcon, SparklesIcon } from './Icons'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('overview')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const canvasRef = useRef(null)

  // Mouse move spotlight listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Subtle background particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha})`
        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center bg-grid overflow-hidden"
    >
      {/* Background Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.07), transparent 80%)`,
        }}
      />

      {/* Top Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-cyan-500/8 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Education Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
          <span className="text-xs text-slate-300 font-mono">
            5th-Year Integrated M.Sc. Software Systems · PSG College of Technology
          </span>
        </div>

        {/* Main Name Heading */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight mb-4"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Mohammed <span className="text-gradient">Hathim</span>
        </h1>

        {/* Role Subtitle */}
        <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-medium text-slate-300 mb-6">
          <span className="text-indigo-400 font-mono font-semibold">Software Developer</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400 font-mono text-lg sm:text-xl">Full Stack · Backend · AI/ML</span>
        </div>

        {/* Value Proposition */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Building full-stack products, robust backend systems, and domain-specific AI applications with clean architecture and modern engineering standards.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center gap-2.5 shadow-lg group"
          >
            <span>View Projects</span>
            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2.5 group"
          >
            <GithubIcon size={16} />
            <span>GitHub Profile</span>
            <ArrowUpRightIcon size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Developer Terminal Code Card Widget */}
        <div className="max-w-2xl mx-auto glass-card rounded-xl text-left border border-white/[0.08] overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f15]/80 border-b border-white/[0.07]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded-md text-xs font-mono">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'overview' ? 'bg-white/10 text-indigo-300' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                profile.ts
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'stack' ? 'bg-white/10 text-indigo-300' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                stack.json
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'terminal' ? 'bg-white/10 text-indigo-300' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                terminal.sh
              </button>
            </div>
          </div>

          {/* Code Window Content */}
          <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed bg-[#08090b]/90 text-slate-300 min-h-[160px]">
            {activeTab === 'overview' && (
              <div className="space-y-1.5">
                <p><span className="text-purple-400">export const</span> <span className="text-amber-300">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-indigo-300">name</span>: <span className="text-emerald-400">'Mohammed Hathim'</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">education</span>: <span className="text-emerald-400">'PSG College of Technology'</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">program</span>: <span className="text-emerald-400">'5th Year Integrated M.Sc. Software Systems'</span>,</p>
                <p className="pl-4"><span className="text-indigo-300">roles</span>: [<span className="text-emerald-400">'Full Stack'</span>, <span className="text-emerald-400">'Backend'</span>, <span className="text-emerald-400">'AI/ML'</span>],</p>
                <p className="pl-4"><span className="text-indigo-300">status</span>: <span className="text-cyan-400">'Available for Full-Time & Internship Opportunities'</span></p>
                <p>&#125;;</p>
              </div>
            )}

            {activeTab === 'stack' && (
              <div className="space-y-1.5 text-slate-300">
                <p>&#123;</p>
                <p className="pl-4"><span className="text-indigo-300">"core"</span>: [<span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"C++"</span>, <span className="text-emerald-400">"SQL"</span>],</p>
                <p className="pl-4"><span className="text-indigo-300">"frameworks"</span>: [<span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"FastAPI"</span>, <span className="text-emerald-400">"Node.js"</span>],</p>
                <p className="pl-4"><span className="text-indigo-300">"ai_ml"</span>: [<span className="text-emerald-400">"PyTorch"</span>, <span className="text-emerald-400">"Hugging Face"</span>, <span className="text-emerald-400">"OpenCV"</span>, <span className="text-emerald-400">"Scikit-Learn"</span>],</p>
                <p className="pl-4"><span className="text-indigo-300">"databases"</span>: [<span className="text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-400">"MongoDB"</span>, <span className="text-emerald-400">"Prisma"</span>]</p>
                <p>&#125;</p>
              </div>
            )}

            {activeTab === 'terminal' && (
              <div className="space-y-2 text-slate-300">
                <p className="text-slate-500"># Check recent repository builds</p>
                <p><span className="text-indigo-400">$</span> <span className="text-emerald-400">gh repo list Hathim0001 --limit 3</span></p>
                <p className="text-slate-400">interview-with-ai &nbsp;&nbsp;<span className="text-indigo-400">TypeScript / Next.js 16</span></p>
                <p className="text-slate-400">cifake-detector &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">Python / PyTorch</span></p>
                <p className="text-slate-400">Adivsor-ChatBot &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">Legal-BERT / GPT-4o</span></p>
                <p><span className="text-indigo-400">$</span> <span className="text-slate-400 animate-pulse">_</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
