export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Social Media Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Artificial Engagement
          <span className="text-[#58a6ff]"> Before It Spreads</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyze voting and engagement patterns across social platforms using statistical algorithms. Get real-time alerts for coordinated manipulation attempts and suspicious spikes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["99.2%", "Detection Accuracy"],
            ["<2s", "Alert Latency"],
            ["50+", "Pattern Signatures"],
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold text-white">Pro Plan</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-2 py-0.5 rounded">POPULAR</span>
          </div>
          <div className="text-4xl font-bold text-white mb-1">
            $29<span className="text-base font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to protect your community.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Real-time engagement monitoring",
              "Statistical anomaly detection",
              "Automated alerts & reports",
              "API integrations (Reddit, X, Discord)",
              "50+ manipulation pattern signatures",
              "Priority email support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the detection work?",
              "We apply statistical models — including z-score analysis, velocity checks, and graph clustering — to identify coordinated or bot-driven engagement that deviates from organic baselines.",
            ],
            [
              "Which platforms are supported?",
              "Currently Reddit, X (Twitter), and Discord via their official APIs. Additional integrations are added regularly based on demand.",
            ],
            [
              "Can I cancel my subscription?",
              "Yes. Cancel anytime from your billing portal with no penalties or hidden fees. You keep access until the end of your billing period.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Engagement Detector. All rights reserved.
      </footer>
    </main>
  );
}
