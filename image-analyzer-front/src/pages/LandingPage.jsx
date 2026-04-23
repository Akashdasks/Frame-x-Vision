const features = [
  {
    icon: '🎯',
    title: 'Object Detection',
    desc: 'Identifies every object with confidence scores and locations',
  },
  {
    icon: '👥',
    title: 'People Analysis',
    desc: 'Detects emotions, actions, age groups and clothing',
  },
  {
    icon: '🌍',
    title: 'Scene Understanding',
    desc: 'Weather, season, time of day and environment type',
  },
  {
    icon: '🎨',
    title: 'Visual Breakdown',
    desc: 'Colors, mood, lighting and composition analysis',
  },
  {
    icon: '🐾',
    title: 'Animal Detection',
    desc: 'Spots and identifies animals with their actions',
  },
  {
    icon: '📝',
    title: 'Text Extraction',
    desc: 'Reads any visible text, signs or labels in the image',
  },
];

const LandingPage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-10 z-0" />
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-10 z-0" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-gray-950 bg-opacity-80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-indigo-900">
            🧠
          </div>
          <div>
            <span className="text-white font-bold text-lg">FrameX Vision</span>
            <span className="ml-2 text-xs bg-indigo-900 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-700">
              AI Powered
            </span>
          </div>
        </div>
        <button
          onClick={onStart}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all shadow-lg shadow-indigo-900"
        >
          Try Now →
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 text-gray-300 text-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Powered by Multimodal AI Vision
        </div>

        <h1 className="text-5xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto">
          See Beyond the{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
            }}
          >
            Pixels
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Upload any photo and get an instant AI-powered breakdown — objects,
          people, emotions, environment, colors and more.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={onStart}
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-indigo-900 text-lg"
          >
            🔍 Analyze an Image
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mt-14 flex-wrap">
          {[
            { value: '10+', label: 'Data Points' },
            { value: 'AI', label: 'Vision Model' },
            { value: '100%', label: 'Free to Use' },
            { value: '<10s', label: 'Analysis Time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preview Card */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-gray-900 border border-gray-700 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-gray-500 text-xs">Frame x Vision</span>
          </div>
          <div
            onClick={onStart}
            className="bg-gray-800 rounded-2xl p-5 border border-dashed border-gray-600 flex flex-col items-center justify-center gap-3 py-12 cursor-pointer hover:border-indigo-500 transition-all"
          >
            <div className="text-5xl">🖼️</div>
            <p className="text-gray-300 font-semibold">Drop your image here</p>
            <p className="text-gray-500 text-sm">
              JPEG, PNG, WEBP — up to 10MB
            </p>
            <button className="mt-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all">
              Browse Files
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-3">
            Everything in One Analysis
          </h2>
          <p className="text-gray-400">
            Our AI extracts every detail from your image instantly
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-indigo-700 rounded-2xl p-5 transition-all group"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold mb-1 group-hover:text-indigo-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 text-center px-6 pb-20">
        <div
          className="bg-gray-900 border border-indigo-900 rounded-3xl p-10 max-w-2xl mx-auto"
          style={{ boxShadow: '0 0 60px rgba(99,102,241,0.1)' }}
        >
          <h2 className="text-3xl font-black text-white mb-3">
            Ready to Analyze?
          </h2>
          <p className="text-gray-400 mb-6">
            Upload any image and get results in seconds. No sign up required.
          </p>
          <button
            onClick={onStart}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl shadow-indigo-900 text-lg"
          >
            🚀 Get Started — It's Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 px-6 py-6 text-center">
        <p className="text-gray-600 text-sm">
          Built with React + Node.js + AI Vision •{' '}
          <span className="text-indigo-400">FrameX Vision</span>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
