import { CpuIcon, CodeIcon, DatabaseIcon, ShieldIcon, LayersIcon, SparklesIcon, TerminalIcon } from './Icons'

const capabilities = [
  {
    title: 'API Design & Integration',
    icon: CodeIcon,
    desc: 'Designing scalable RESTful endpoints, Next.js Server Actions, OpenAPI specifications, and structured request validation using FastAPI & Express.',
    tag: 'REST APIs · FastAPI · Express',
  },
  {
    title: 'Database Architecture & ORMs',
    icon: DatabaseIcon,
    desc: 'Relational and NoSQL database modeling, query optimization, migration management with Prisma ORM, SQLAlchemy, PostgreSQL, and MongoDB.',
    tag: 'PostgreSQL · MongoDB · Prisma',
  },
  {
    title: 'Authentication & System Security',
    icon: ShieldIcon,
    desc: 'Implementing secure JWT session tokens, Clerk Auth integration, Supabase RLS, DOMPurify XSS sanitization, and Arcjet bot rate-limiting.',
    tag: 'Clerk · JWT · DOMPurify · Arcjet',
  },
  {
    title: 'Real-Time Systems & Streaming',
    icon: LayersIcon,
    desc: 'Building low-latency real-time applications using Supabase WebSocket channels, live video streaming SDKs, and event-driven state updates.',
    tag: 'WebSockets · Supabase Realtime',
  },
  {
    title: 'Machine Learning Pipelines',
    icon: SparklesIcon,
    desc: 'End-to-end supervised learning workflows: exploratory data analysis, feature scaling, model selection, hyperparameter tuning, and inference APIs.',
    tag: 'PyTorch · Scikit-Learn · Pandas',
  },
  {
    title: 'Computer Vision & Transformers',
    icon: CpuIcon,
    desc: 'Convolutional neural network transfer learning with ResNet-18, OpenCV image processing, and fine-tuning domain-specific Legal-BERT models.',
    tag: 'ResNet-18 · OpenCV · Legal-BERT',
  },
  {
    title: 'Systems & Memory Algorithms',
    icon: TerminalIcon,
    desc: 'Low-level C systems programming, virtual memory address translation, FIFO and LRU page replacement algorithm benchmarking, and concurrency locks.',
    tag: 'C · Memory Management · OS',
  },
  {
    title: 'Cloud Deployment & Workflows',
    icon: CodeIcon,
    desc: 'Deploying production web applications to Vercel, Render, and Streamlit Cloud, with automated GitHub integration and zero-downtime hosting.',
    tag: 'Vercel · GitHub CI/CD · Render',
  },
]

export default function Engineering() {
  return (
    <section id="engineering" className="py-24 relative bg-[#08090b]">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <CpuIcon size={14} />
            <span>// ENGINEERING_CAPABILITIES</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Engineering <span className="text-gradient-cyan">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core software engineering competencies grounded in real project implementations.
          </p>
        </div>

        {/* Clean 8-Card Capability Grid (NO percentage bars) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => {
            const IconComp = cap.icon
            return (
              <div
                key={cap.title}
                className="glass-card p-5 rounded-2xl border border-white/[0.08] flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <IconComp size={16} />
                  </div>

                  <h3 className="font-bold text-white text-sm font-sans group-hover:text-cyan-200 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] mt-4">
                  <span className="text-[10px] font-mono text-slate-500 block">
                    {cap.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
