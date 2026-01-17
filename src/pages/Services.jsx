import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      <section className="section pt-32">
        <div className="container-narrow">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                Business Model
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              How We Deliver Value
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Vestral wins by becoming the measurement + validation layer for BCIs.
              If you own how performance is measured, what "good" means, and how teams prove it,
              you become infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We're Actually Selling</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We're not selling "benchmarks." We're selling:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Confidence',
                  'Credibility',
                  'Faster iteration',
                  'Lower failure risk',
                  'Proof for investors/partners'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary-500/10 border-l-4 border-primary-500 rounded-lg">
                <p className="text-gray-200 italic leading-relaxed">
                  "Every BCI team eventually runs into the same wall: Is this real and will it still work outside the demo? Vestral is the answer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Revenue Streams</h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
              Our business model is designed to start with services, evolve into products, and create platform gravity.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Enterprise Benchmarking */}
            <div className="card border-l-4 border-l-accent-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-3">
                    <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">Primary Revenue</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise Benchmarking + Validation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Performance audits, reproducible benchmark reports, deployment readiness evaluations,
                    and regression tracking across model/pipeline versions.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-dark-800/50 rounded-lg">
                <p className="text-sm font-semibold text-gray-200 mb-2">Pricing</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>$15k–$100k per engagement (scope + hardware targets)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>Retainer option: $5k–$25k/month for continuous evaluation</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Companies need external credibility for partnerships, fundraising, and internal decision-making.
                This is how we fund the platform without starving.
              </p>
            </div>

            {/* CORTEX Pro */}
            <div className="card border-l-4 border-l-primary-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-3">
                    <span className="text-xs font-mono text-primary-400 uppercase tracking-wider">Platform Revenue</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">CORTEX Pro Platform Subscription</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The CORTEX harness + adapters + telemetry tooling, standardized reports,
                    run orchestration (CI-like), reproducible configs, and artifact storage.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-dark-800/50 rounded-lg">
                <p className="text-sm font-semibold text-gray-200 mb-2">Pricing Options</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span><strong>Per seat:</strong> $99–$499/user/month</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span><strong>Per org:</strong> $10k–$200k/year (enterprise)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span><strong>Device packs:</strong> Add-ons for Jetson/ARM/FPGA targets</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                CORTEX becomes the thing teams run every week: "Did we get faster? Did we break something? What changed?"
              </p>
            </div>

            {/* Certification */}
            <div className="card border-l-4 border-l-accent-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-3">
                    <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">Authority Play</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Hardware/Device Partner Certification</h3>
                  <p className="text-gray-300 leading-relaxed">
                    "CORTEX Verified" badges for latency/jitter profiles, pipeline stability,
                    and supported adapter + telemetry specs.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-dark-800/50 rounded-lg">
                <p className="text-sm font-semibold text-gray-200 mb-2">Pricing</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>$20k–$250k per certification + annual renewal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>Optional revenue share on verified hardware sales</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Classic "Intel Inside" style move. Device vendors, integrators, and labs pay for credibility.
              </p>
            </div>

            {/* Standards Membership */}
            <div className="card border-l-4 border-l-primary-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-3">
                    <span className="text-xs font-mono text-primary-400 uppercase tracking-wider">Industry Gravity</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Standards + Interop Membership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Interoperability schemas, measurement and reporting standards, safety envelopes.
                    The "boring authority" tier that creates network effects.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-dark-800/50 rounded-lg">
                <p className="text-sm font-semibold text-gray-200 mb-2">Pricing</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>$5k–$50k/year membership</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>Higher tier: voting rights, early access, working groups</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Once multiple teams adopt, switching costs go up. This creates the moat.
              </p>
            </div>

            {/* NetBench Usage */}
            <div className="card border-l-4 border-l-accent-500 opacity-80">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-3">
                    <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">Scale Play</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Usage-Based Compute / NetBench</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Per-run pricing, per-hour remote benchmarking on Vestral-managed devices,
                    hosted telemetry + report history.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-dark-800/50 rounded-lg">
                <p className="text-sm font-semibold text-gray-200 mb-2">Pricing</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>$0.50–$10 per run (hardware/length dependent)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>Per-hour remote benchmarking on managed devices</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Optional early, but great later. This is the scale play once NetBench is mature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Target Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'VC-Backed Neurotech Startups',
                  desc: 'Desperate for speed + proof. Need credibility for fundraising and partnerships.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  )
                },
                {
                  title: 'Defense / DARPA Contractors',
                  desc: 'Need procurement-friendly validation and risk control.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  )
                },
                {
                  title: 'Medical Device Companies',
                  desc: 'Exploring neural interfaces. Need regulatory-ready validation.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  )
                },
                {
                  title: 'Big Tech BCI Groups',
                  desc: 'Internal teams needing standardized measurement infrastructure.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  )
                }
              ].map((customer, i) => (
                <div key={i} className="card">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {customer.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{customer.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{customer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Open-Core Strategy</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're taking an open-core approach to maximize adoption while building a sustainable business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-primary-500/5 border-primary-500/20">
                <h3 className="text-lg font-semibold mb-3 text-primary-300">Open Source</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>Harness spec + basic runner</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>Core benchmarking framework</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span>Standards become ours by default</span>
                  </li>
                </ul>
              </div>
              
              <div className="card bg-accent-500/5 border-accent-500/20">
                <h3 className="text-lg font-semibold mb-3 text-accent-300">CORTEX Pro</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-accent-400">•</span>
                    <span>Adapters + device packs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400">•</span>
                    <span>Telemetry dashboards</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400">•</span>
                    <span>CI integration + managed runs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400">•</span>
                    <span>Enterprise support</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Why open-core works: adoption spreads faster (devs trust it), standards become yours by default,
              and the paid layer is still valuable and hard to replicate.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">The Smart Phase Order</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you try to go SaaS-only on day one, you'll starve. Here's the proven path:
            </p>

            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Revenue',
                  desc: 'Paid benchmarking engagements',
                  color: 'from-accent-500/20 to-accent-600/20',
                  borderColor: 'border-accent-500/30'
                },
                {
                  phase: 'Phase 2',
                  title: 'Product',
                  desc: 'Turn repeated work into CORTEX Pro',
                  color: 'from-primary-500/20 to-primary-600/20',
                  borderColor: 'border-primary-500/30'
                },
                {
                  phase: 'Phase 3',
                  title: 'Authority',
                  desc: 'Certification + standards membership',
                  color: 'from-accent-500/20 to-accent-600/20',
                  borderColor: 'border-accent-500/30'
                },
                {
                  phase: 'Phase 4',
                  title: 'Ecosystem',
                  desc: 'NetBench + device marketplace + spinouts',
                  color: 'from-primary-500/20 to-primary-600/20',
                  borderColor: 'border-primary-500/30'
                }
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.color} border ${item.borderColor} rounded-lg p-6`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-dark-800/50 flex items-center justify-center">
                      <span className="text-lg font-mono font-bold text-gray-300">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{item.phase}</span>
                        <span className="text-lg font-semibold text-gray-200">{item.title}</span>
                      </div>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary-500/10 border-l-4 border-primary-500 rounded-lg">
              <p className="text-gray-200 leading-relaxed">
                <strong className="text-primary-300">Classic playbook:</strong> Services fund product; product creates platform; platform creates monopoly-like gravity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why This Creates a Moat</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            Vestral becomes sticky when we create these lock-ins:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Benchmark history: "we\'ve tracked our regressions here for 18 months"',
              'Standard report formats used in board decks + partner meetings',
              'Hardware adapter ecosystem',
              'Certification badge value',
              'Shared language: "CORTEX score", "NetBench profile"',
              'Once Vestral becomes "how the industry talks," you win'
            ].map((item, i) => (
              <div key={i} className="card text-left">
                <p className="text-sm text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Whether you need a performance audit, want to explore CORTEX Pro, or are interested in certification,
            we're here to help you build credible BCI infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
            <Link to="/platform" className="btn btn-secondary">
              Explore CORTEX
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
