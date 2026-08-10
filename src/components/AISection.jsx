const areas = [
  {
    icon: '👁️',
    title: 'Computer Vision',
    desc: 'Deep learning classification pipelines using ResNet-18 transfer learning, OpenCV processing, and adversarial robustness evaluation on synthetic image datasets.',
    project: 'CIFAKE Detector',
    link: 'https://github.com/Hathim0001/cifake-detector',
    badge: 'PyTorch · OpenCV · ResNet-18',
    color: 'purple',
  },
  {
    icon: '📜',
    title: 'NLP & Transformers',
    desc: 'Fine-tuning domain-specific Legal-BERT on contract clause datasets for classification, combined with GPT-4o for automated legal risk severity explanations.',
    project: 'Advisor ChatBot',
    link: 'https://github.com/Hathim0001/Adivsor-ChatBot',
    badge: 'Legal-BERT · Hugging Face · GPT-4o',
    color: 'pink',
  },
  {
    icon: '🤖',
    title: 'LLM Application Development',
    desc: 'Integrating large language model APIs (Google Gemini AI, OpenAI GPT-4o) into production full-stack applications for real-time AI-driven feature delivery.',
    project: 'Interview with AI',
    link: 'https://github.com/Hathim0001/interview-with-ai',
    badge: 'Gemini API · GPT-4o · Next.js',
    color: 'indigo',
  },
  {
    icon: '📊',
    title: 'Predictive ML & Analytics',
    desc: 'End-to-end supervised learning workflows: data preprocessing, exploratory analysis, feature engineering, model training, evaluation, and interactive deployment.',
    project: 'Heart Disease Prediction (ML Modelling)',
    link: 'https://github.com/Hathim0001/ML_MODELLING',
    badge: 'Scikit-Learn · Pandas · Streamlit',
    color: 'emerald',
  },
  {
    icon: '⚔️',
    title: 'Adversarial Robustness',
    desc: 'Adversarial evasion experimentation against deep learning image classifiers, with defense mechanism analysis and model vulnerability assessment at inference time.',
    project: 'CIFAKE Detector (Phase 2 & 3)',
    link: 'https://github.com/Hathim0001/cifake-detector',
    badge: 'PyTorch · Adversarial ML',
    color: 'rose',
  },
  {
    icon: '🔬',
    title: 'Model Evaluation',
    desc: 'Rigorous ML model validation using precision, recall, F1-score, confusion matrices, ROC curves, and comparative benchmark analysis across multiple architectures.',
    project: 'cifake-detector + ML_MODELLING',
    link: 'https://github.com/Hathim0001/ML_MODELLING',
    badge: 'Scikit-Learn · Matplotlib · Seaborn',
    color: 'amber',
  },
]

const colorMap = {
  purple: 'border-purple-500/25 bg-purple-500/8 text-purple-400',
  pink: 'border-pink-500/25 bg-pink-500/8 text-pink-400',
  indigo: 'border-indigo-500/25 bg-indigo-500/8 text-indigo-400',
  emerald: 'border-emerald-500/25 bg-emerald-500/8 text-emerald-400',
  rose: 'border-rose-500/25 bg-rose-500/8 text-rose-400',
  amber: 'border-amber-500/25 bg-amber-500/8 text-amber-400',
}

const iconBg = {
  purple: 'bg-purple-500/15 border-purple-500/20',
  pink: 'bg-pink-500/15 border-pink-500/20',
  indigo: 'bg-indigo-500/15 border-indigo-500/20',
  emerald: 'bg-emerald-500/15 border-emerald-500/20',
  rose: 'bg-rose-500/15 border-rose-500/20',
  amber: 'bg-amber-500/15 border-amber-500/20',
}

export default function AISection() {
  return (
    <section id="aiml" className="py-28 relative">
      <div className="section-divider mb-0" />

      {/* Ambient bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/6 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-purple-400 text-sm font-mono mb-3 tracking-widest uppercase">// ai_ml_work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Beyond <span className="gradient-text">CRUD Apps</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My AI/ML work spans computer vision, NLP, LLM integrations, adversarial machine learning, and end-to-end model deployment — not just standard applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal project-card glass rounded-2xl border border-white/6 p-6 flex flex-col group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl mb-4 ${iconBg[a.color]}`}>
                {a.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {a.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{a.desc}</p>
              <div className={`text-xs font-mono px-3 py-1.5 rounded-lg border w-fit ${colorMap[a.color]}`}>
                {a.badge}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Project: <span className="text-slate-400">{a.project}</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
