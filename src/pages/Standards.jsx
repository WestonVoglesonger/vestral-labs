import { Link } from 'react-router-dom'

function Standards() {
  const initiatives = [
    {
      name: 'Safety Envelopes',
      tagline: 'Guardrails that teams can actually use',
      description: 'Operational safety boundaries that are measurable + enforceable. This is a BCI safety spec that plugs into a pipeline, not a vague ethics PDF.',
      deliverables: [
        {
          title: 'Stimulation / Recording Constraints',
          items: [
            'Hard limits + recommended ranges',
            'Don\'t-cross conditions under certain signal states',
            'Enforceable guardrails in pipeline execution'
          ]
        },
        {
          title: 'Signal Quality Thresholds',
          items: [
            'Minimum viable SNR / artifact tolerance',
            'Electrode contact / impedance sanity checks',
            'Real-time quality monitoring'
          ]
        },
        {
          title: 'Acceptable Operating Regions',
          items: [
            'Pipeline stability under X–Y latency/jitter',
            'Z packet loss tolerance',
            'A noise level boundaries'
          ]
        }
      ],
      color: 'red',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      )
    },
    {
      name: 'Validation Framework',
      tagline: 'Reproducible proof, not vibes',
      description: 'Can you prove your system behaves the same way repeatedly, across targets? This ties straight into CORTEX with standardized measurement and reporting.',
      deliverables: [
        {
          title: 'Standardized Metrics',
          items: [
            'Latency / jitter / throughput measurement',
            'Stability testing over time (drift / degradation)',
            'Regression tracking (did a new model make things worse?)'
          ]
        },
        {
          title: 'Enterprise Performance Audits',
          items: [
            'Clean reports for partners, boards, investors',
            'Cross-platform validation',
            'Deployment readiness certification'
          ]
        },
        {
          title: 'Reproducibility Guarantees',
          items: [
            'Config + dataset + kernel → deterministic results',
            'Version-controlled benchmark definitions',
            'Artifact pipelines for audit trails'
          ]
        }
      ],
      color: 'primary',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      )
    },
    {
      name: 'Interoperability Schemas',
      tagline: 'So teams can plug together',
      description: 'Shared standards for data + pipeline interfaces. This turns the industry from custom one-offs into something modular.',
      deliverables: [
        {
          title: 'Metadata Schemas',
          items: [
            'Session context, device config, sampling rates',
            'Filter specifications, calibration parameters',
            'Standardized pipeline metadata'
          ]
        },
        {
          title: 'I/O Contracts',
          items: [
            'Data shape specifications between pipeline stages',
            'Timing guarantees and latency budgets',
            'Compatibility layers for component swapping'
          ]
        },
        {
          title: 'Interface Standards',
          items: [
            'Plug-and-play component architecture',
            'Versioned schema evolution',
            'Backward compatibility guarantees'
          ]
        }
      ],
      color: 'accent',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      )
    },
    {
      name: 'CORTEX Verified Certification',
      tagline: 'The business-side weapon',
      description: 'Certification badges that create both monetization and moat. Once people want the badge, your test harness becomes default.',
      deliverables: [
        {
          title: 'Latency / Jitter Profile',
          items: [
            'CORTEX Verified: latency/jitter profile',
            'Measured performance characteristics',
            'Cross-platform consistency validation'
          ]
        },
        {
          title: 'Pipeline Stability',
          items: [
            'CORTEX Verified: pipeline stability',
            'Long-term reliability testing',
            'Degradation resistance validation'
          ]
        },
        {
          title: 'Adapter + Telemetry Compliance',
          items: [
            'CORTEX Verified: adapter + telemetry compliance',
            'Protocol specification adherence',
            'Measurement accuracy certification'
          ]
        }
      ],
      color: 'primary',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      )
    }
  ]

  return (
    <>
      <section className="section pt-32">
        <div className="container-narrow">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                Infrastructure Standards
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Standards & Validation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              This is how Vestral becomes infrastructure instead of "another lab with cool demos."
              Measurable, enforceable standards that teams can actually use.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Four Pillars</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Safety, validation, interoperability, and certification. Together, these create the scaffolding
              that makes distributed BCI systems possible—and makes Vestral the measurement layer for the industry.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card bg-gradient-to-br from-dark-900/90 to-dark-800/90 border-dark-700/50">
                <div className="space-y-6">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${
                        initiative.color === 'red'
                          ? 'bg-red-500/20 border-2 border-red-500/30'
                          : initiative.color === 'primary'
                          ? 'bg-primary-500/20 border-2 border-primary-500/30'
                          : 'bg-accent-500/20 border-2 border-accent-500/30'
                      }`}>
                        <svg className={`w-10 h-10 ${
                          initiative.color === 'red'
                            ? 'text-red-400'
                            : initiative.color === 'primary'
                            ? 'text-primary-400'
                            : 'text-accent-400'
                        }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {initiative.icon}
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{initiative.name}</h3>
                      <p className={`text-sm font-mono uppercase tracking-wider mb-4 ${
                        initiative.color === 'red'
                          ? 'text-red-400'
                          : initiative.color === 'primary'
                          ? 'text-primary-400'
                          : 'text-accent-400'
                      }`}>
                        {initiative.tagline}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-dark-700/50">
                    {initiative.deliverables.map((deliverable, i) => (
                      <div key={i} className="bg-dark-800/50 rounded-lg p-5 border border-dark-700/50">
                        <h4 className="text-base font-semibold text-gray-200 mb-3">
                          {deliverable.title}
                        </h4>
                        <ul className="space-y-2">
                          {deliverable.items.map((item, j) => (
                            <li key={j} className="flex gap-2 text-sm text-gray-300">
                              <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                initiative.color === 'red'
                                  ? 'text-red-400'
                                  : initiative.color === 'primary'
                                  ? 'text-primary-400'
                                  : 'text-accent-400'
                              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                              </svg>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why This Matters for Shelob</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              All of this becomes the scaffolding for <Link to="/shelob" className="text-primary-400 hover:text-primary-300 underline">Project Shelob</Link> later:
            </p>
            
            <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Distributed Pipelines Need Standards</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Distributed pipelines (implant → wearable → edge) need NetBench + safety envelopes + interface standards.
                    Without them, it turns into integration hell.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-primary-400">•</span>
                      <span>NetBench measures distributed latency, but needs safety envelopes to know when to throttle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary-400">•</span>
                      <span>Interoperability schemas let components swap without rewriting entire pipelines</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary-400">•</span>
                      <span>Certification creates trust that distributed systems will actually work together</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Standards Create Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Measurable, Not Vague',
                  desc: 'Safety envelopes are code, not PDFs. They plug into pipelines and enforce boundaries.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  )
                },
                {
                  title: 'Reproducible Proof',
                  desc: 'Validation isn\'t "trust us"—it\'s config + dataset + kernel → same result every time.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  )
                },
                {
                  title: 'Modular, Not Custom',
                  desc: 'Interoperability schemas turn one-off integrations into plug-and-play components.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"/>
                  )
                },
                {
                  title: 'Badge Value = Moat',
                  desc: 'Once teams want "CORTEX Verified," your test harness becomes the default.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="card">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="card bg-gradient-to-br from-accent-500/10 to-primary-500/10 border-accent-500/30">
            <h2 className="text-2xl font-bold mb-4">Standards Membership</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Join the working groups that define these standards. Membership includes early access,
              voting rights on specifications, and participation in interoperability working groups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing" className="btn btn-primary">
                View Membership Pricing
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Join Working Groups
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Infrastructure Play</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            If you own how performance is measured, what "good" means, and how teams prove it,
            you become infrastructure. And infrastructure prints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/platform" className="btn btn-primary">
              Explore CORTEX
            </Link>
            <Link to="/roadmap" className="btn btn-secondary">
              See Roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Standards
