import { GithubIcon, ArrowUpRightIcon, CheckIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#08090b] overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
          <span>// GET_IN_TOUCH</span>
        </div>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Let's <span className="text-gradient">build something</span>.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          I am a 5th-year M.Sc. Software Systems student actively looking for engineering roles and internships in:
        </p>

        <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto font-mono text-xs">
          {['Software Engineering', 'Full Stack Development', 'Backend Engineering', 'AI / ML Engineering'].map((role) => (
            <span
              key={role}
              className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://github.com/Hathim0001"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-7 py-3.5 rounded-xl inline-flex items-center gap-2.5 shadow-lg"
          >
            <GithubIcon size={18} />
            <span>GitHub Profile @Hathim0001</span>
            <ArrowUpRightIcon size={14} />
          </a>
        </div>

        {/* Credentials Card */}
        <div className="max-w-md mx-auto glass-card p-6 rounded-2xl border border-white/[0.08] text-left text-xs font-mono space-y-3 mt-10">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-400">
            <span>COLLEGE</span>
            <span className="text-slate-200">PSG College of Technology</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-400">
            <span>DEGREE</span>
            <span className="text-slate-200">Integrated M.Sc. Software Systems</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span>AVAILABILITY</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <CheckIcon size={12} /> Open to Offers
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
