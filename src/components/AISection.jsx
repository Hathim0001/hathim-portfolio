import { SparklesIcon, CpuIcon, LayersIcon, ShieldIcon, DatabaseIcon } from './Icons'

const aiWork = [
  {
    icon: CpuIcon,
    title: 'Computer Vision & Deep Learning',
    desc: 'Convolutional neural network classification pipelines utilizing ResNet-18 transfer learning, OpenCV frame pre-processing, and synthetic dataset detection.',
    techs: ['PyTorch', 'ResNet-18', 'OpenCV', 'Torchvision'],
    project: 'CIFAKE Synthetic Image Detector',
    github: 'https://github.com/Hathim0001/cifake-detector',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: LayersIcon,
    title: 'NLP & Domain Transformers',
    desc: 'Fine-tuning Legal-BERT on legal document domain corpora for clause identification, paired with GPT-4o for risk severity extraction.',
    techs: ['Hugging Face', 'Legal-BERT', 'GPT-4o API', 'Transformers'],
    project: 'Advisor ChatBot (Legal AI)',
    github: 'https://github.com/Hathim0001/Adivsor-ChatBot',
    color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  },
  {
    icon: SparklesIcon,
    title: 'LLM Application Architecture',
    desc: 'Integrating state-of-the-art LLMs (Google Gemini AI, OpenAI GPT-4o) into production Next.js full-stack applications with prompt engineering and structured JSON output schema validation.',
    techs: ['Google Gemini AI', 'OpenAI API', 'Next.js 16', 'Structured Output'],
    project: 'Interview with AI Platform',
    github: 'https://github.com/Hathim0001/interview-with-ai',
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: ShieldIcon,
    title: 'Adversarial Machine Learning',
    desc: 'Evaluating model robustness against adversarial noise and image perturbations to measure evasion vulnerability in deep learning inference systems.',
    techs: ['PyTorch', 'Adversarial Evasion', 'Robustness Analysis'],
    project: 'CIFAKE Detector (Phase 2 & 3)',
    github: 'https://github.com/Hathim0001/cifake-detector',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: DatabaseIcon,
    title: 'Supervised ML & Predictive Modeling',
    desc: 'Complete supervised machine learning workflows including exploratory data analysis, feature scaling, model comparison (Random Forest, Logistic Regression), and interactive Streamlit web deployment.',
    techs: ['Scikit-Learn', 'Pandas', 'NumPy', 'Seaborn', 'Streamlit'],
    project: 'Heart Disease Prediction',
    github: 'https://github.com/Hathim0001/ML_MODELLING',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
]

export default function AISection() {
  return (
    <section id="aiml" className="py-24 relative bg-[#08090b]">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <SparklesIcon size={14} />
            <span>// AI_ML_DISCIPLINE</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Applied Intelligence, <span className="text-gradient">Not Just API Calls</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Demonstrating technical depth in machine learning algorithms, model fine-tuning, computer vision, and LLM integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiWork.map((item) => {
            const IconComp = item.icon
            return (
              <div
                key={item.title}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${item.color}`}>
                      <IconComp size={18} />
                    </div>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-500 hover:text-indigo-300 transition-colors"
                    >
                      Repo ↗
                    </a>
                  </div>

                  <h3 className="font-bold text-white text-lg font-sans group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 space-y-3 border-t border-white/[0.06] mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techs.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 font-mono">
                    Project: <span className="text-slate-300">{item.project}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
