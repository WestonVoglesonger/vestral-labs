import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <>
      <section className="section pt-32">
        <div className="container-narrow">
          <div className="space-y-6 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                Pricing
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We offer multiple engagement models to fit your needs, from one-time audits to ongoing platform subscriptions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Enterprise Benchmarking */}
            <div className="card border-2 border-accent-500/30">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-4">
                  <span className="text-xs font-mono text-accent-400 uppercase">One-Time</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Enterprise Benchmarking</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Performance audits, deployment readiness evaluations, and reproducible benchmark reports.
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$15k</span>
                  <span className="text-gray-400"> - $100k</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">per engagement</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Latency/jitter/throughput analysis',
                  'Stability testing',
                  'Cross-platform evaluation',
                  'Regression tracking',
                  'Deployment readiness report'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-dark-700">
                <p className="text-sm text-gray-400 mb-4">Retainer option available:</p>
                <p className="text-lg font-semibold text-gray-200">$5k - $25k/month</p>
                <p className="text-xs text-gray-400">for continuous evaluation</p>
              </div>
            </div>

            {/* CORTEX Pro */}
            <div className="card border-2 border-primary-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="mb-6 mt-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
                  <span className="text-xs font-mono text-primary-400 uppercase">Subscription</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">CORTEX Pro</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Full platform access: harness, adapters, telemetry, CI integration, and artifact storage.
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$99</span>
                  <span className="text-gray-400"> - $499</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">per user/month</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'CORTEX harness + adapters',
                  'Telemetry dashboards',
                  'CI/CD integration',
                  'Reproducible configs',
                  'Artifact storage',
                  'Standardized reports',
                  'Device pack add-ons'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-dark-700">
                <p className="text-sm text-gray-400 mb-2">Enterprise pricing:</p>
                <p className="text-lg font-semibold text-gray-200">$10k - $200k/year</p>
                <p className="text-xs text-gray-400">per organization</p>
              </div>
            </div>

            {/* Certification */}
            <div className="card border-2 border-accent-500/30">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-4">
                  <span className="text-xs font-mono text-accent-400 uppercase">Certification</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Device Certification</h3>
                <p className="text-gray-400 text-sm mb-4">
                  "CORTEX Verified" badges for hardware vendors and integrators.
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$20k</span>
                  <span className="text-gray-400"> - $250k</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">per certification</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Latency/jitter profile validation',
                  'Pipeline stability testing',
                  'Adapter + telemetry spec verification',
                  'CORTEX Verified badge',
                  'Annual renewal included',
                  'Optional revenue share model'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Standards Membership</h3>
                <p className="text-gray-400 mb-4">
                  Access to interoperability schemas, measurement standards, and safety envelopes.
                </p>
                <div className="p-4 bg-dark-800/50 rounded-lg">
                  <p className="text-2xl font-bold text-white mb-1">$5k - $50k</p>
                  <p className="text-sm text-gray-400">per year</p>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Higher tiers include voting rights, early access, and working group participation.
                </p>
              </div>

              <div className="card opacity-80">
                <h3 className="text-xl font-semibold mb-3">NetBench Usage</h3>
                <p className="text-gray-400 mb-4">
                  Pay-per-run distributed benchmarking (coming in Phase 2).
                </p>
                <div className="p-4 bg-dark-800/50 rounded-lg">
                  <p className="text-2xl font-bold text-white mb-1">$0.50 - $10</p>
                  <p className="text-sm text-gray-400">per run</p>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Pricing varies by hardware target and run duration. Per-hour remote benchmarking also available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
            <h2 className="text-2xl font-bold mb-4">Open-Core Model</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We believe in open-source core infrastructure. The CORTEX harness spec and basic runner are open source.
              CORTEX Pro adds enterprise features: adapters, device packs, telemetry dashboards, CI integration,
              managed runs, and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform" className="btn btn-primary">
                Learn About CORTEX
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure What You Need?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Every engagement starts with understanding your goals. Whether you need a one-time audit,
            ongoing validation, or full platform access, we'll work with you to find the right fit.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default Pricing
