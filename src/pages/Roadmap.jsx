import { Link } from 'react-router-dom'

function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      status: 'current',
      title: 'Benchmarking Credibility',
      period: '2025-2026',
      description: 'Build the CORTEX baseline benchmark suite. Prove it works on real hardware, produces reproducible results, and measures what matters. Establish credibility with early adopters and the research community.',
      milestones: [
        'Core benchmark framework implementation',
        'First hardware adapters (2-3 common platforms)',
        'Baseline benchmark suite v1.0',
        'Reproducibility validation with external partners',
        'First enterprise validation engagements',
        'Open-source harness spec + basic runner'
      ],
      deliverables: [
        'CORTEX v1.0 release',
        'Documented benchmark methodology',
        'Published validation results',
        'Early adopter case studies'
      ],
      color: 'primary',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      )
    },
    {
      phase: 'Phase 2',
      status: 'future',
      title: 'Networked Reality',
      period: '2026-2027',
      description: 'Launch CORTEX-NetBench for distributed system measurement. Expand from single-device benchmarking to full pipeline latency/jitter analysis. This is where "real-world BCI" performance becomes measurable.',
      milestones: [
        'NetBench protocol specification',
        'Distributed timing infrastructure',
        'End-to-end latency benchmarks',
        'CORTEX Pro platform licensing launch',
        'Multi-hop measurement capabilities',
        'Real-world deployment validation'
      ],
      deliverables: [
        'CORTEX-NetBench v1.0',
        'CORTEX Pro subscription platform',
        'Device adapter ecosystem expansion',
        'Enterprise telemetry dashboards'
      ],
      color: 'accent',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
      )
    },
    {
      phase: 'Phase 3',
      status: 'future',
      title: 'Ecosystem Gravity',
      period: '2027-2028',
      description: 'Roll out interoperability schemas, safety envelopes, and vendor integrations. Launch certification programs. Become the connective tissue that makes the BCI ecosystem function as an ecosystem—not a collection of silos.',
      milestones: [
        'Interoperability schema v1.0',
        'Safety envelope specifications',
        'Major vendor integrations (3+ partners)',
        'Certification program launch',
        'Industry working group formation',
        'Standards membership program'
      ],
      deliverables: [
        'Safety Envelopes v1.0',
        'Interoperability Schemas v1.0',
        'CORTEX Verified certification program',
        'Standards working groups active',
        'Vendor partner ecosystem'
      ],
      color: 'primary',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      )
    },
    {
      phase: 'Phase 4',
      status: 'future',
      title: 'Shelob Era',
      period: '2028+',
      description: 'The distributed coordination layer becomes possible. Project Shelob is a distributed BCI operating layer that turns implants, wearables, and edge compute into one coherent, safe, low-latency cognitive system. Minimal on-implant decoding, distributed intelligence, dual stim/recording. This isn\'t the first product—it\'s the crown jewel that becomes inevitable once infrastructure exists.',
      milestones: [
        'Distributed coordination substrate',
        'Neural Node (Implant) - high-fidelity sensing + stimulation',
        'Relay Node (Wearable) - local nervous system hub',
        'Edge Compute Node - heavy decoding + multi-modal fusion',
        'Minimal on-implant decoding',
        'Dual stimulation/recording support',
        'Safety enforcement across distributed system',
        'Ecosystem-wide coordination layer',
        'Production deployment'
      ],
      deliverables: [
        'Project Shelob v1.0',
        'Distributed BCI operating system',
        'Multi-node coordination platform (4-layer stack)',
        'Uplink/downlink/side-channel telemetry',
        'Hard + soft safety constraints',
        'Production-ready deployment'
      ],
      color: 'accent',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      ),
      future: true
    }
  ]

  return (
    <>
      <section className="section pt-32">
        <div className="container-narrow">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                Phased Approach
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Roadmap
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Infrastructure can't be rushed. Each phase builds credibility and ecosystem gravity
              that makes the next phase possible. We're playing the long game.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-l-4 border-primary-500 rounded-lg">
              <p className="text-gray-200 leading-relaxed italic">
                "If you can't measure it honestly, you can't engineer it."
              </p>
              <p className="text-sm text-gray-400 mt-2 font-mono uppercase tracking-wider">
                — Our guiding principle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="section">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Timeline Overview</h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
              Multi-year commitment to building BCI infrastructure the right way.
            </p>
          </div>

          <div className="card bg-gradient-to-br from-dark-900/90 to-dark-800/90 border-dark-700/50 p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex items-stretch gap-1">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-lg p-6 transition-all ${
                      phase.status === 'current'
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white'
                        : phase.future
                        ? 'bg-dark-800/50 border-2 border-dashed border-dark-600/50 opacity-60'
                        : 'bg-dark-800/50 border border-dark-700/50'
                    }`}
                  >
                    <p className={`text-xs font-mono mb-2 ${phase.status === 'current' ? 'text-white/70' : 'text-gray-400'}`}>
                      {phase.phase}
                    </p>
                    <p className={`font-semibold mb-2 ${phase.status === 'current' ? 'text-white' : 'text-gray-200'}`}>
                      {phase.title}
                    </p>
                    <p className={`text-xs ${phase.status === 'current' ? 'text-white/80' : 'text-gray-400'}`}>
                      {phase.period}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-400 mt-6">
                Timelines are estimates. Infrastructure timelines depend on ecosystem adoption, not just our execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Phases */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < phases.length - 1 && (
                  <div className={`absolute left-8 top-20 bottom-0 w-0.5 ${
                    phase.status === 'current' 
                      ? 'bg-gradient-to-b from-primary-500 to-accent-500' 
                      : 'bg-dark-700/50'
                  }`}></div>
                )}

                <div className="flex gap-8">
                  {/* Phase Marker */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      phase.status === 'current'
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600 ring-4 ring-primary-500/30'
                        : phase.future
                        ? 'bg-dark-800/50 border-2 border-dashed border-dark-600/50'
                        : 'bg-dark-800/50 border-2 border-dark-700/50'
                    }`}>
                      <svg className={`w-8 h-8 ${
                        phase.status === 'current' ? 'text-white' : 'text-gray-400'
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {phase.icon}
                      </svg>
                    </div>
                  </div>

                  {/* Phase Content */}
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`inline-block px-3 py-1 rounded-full border ${
                        phase.status === 'current'
                          ? 'bg-primary-500/20 border-primary-500/30'
                          : phase.future
                          ? 'bg-dark-800/50 border-dark-700/50'
                          : 'bg-accent-500/20 border-accent-500/30'
                      }`}>
                        <span className={`text-xs font-mono uppercase tracking-wider ${
                          phase.status === 'current'
                            ? 'text-primary-300'
                            : phase.future
                            ? 'text-gray-500'
                            : 'text-accent-300'
                        }`}>
                          {phase.phase} {phase.status === 'current' && '— Current'}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 font-mono">{phase.period}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    {/* Milestones */}
                    <div className={`card ${phase.future ? 'opacity-70 border-dashed' : ''} mb-6`}>
                      <h4 className="text-sm font-semibold text-gray-200 mb-4 uppercase tracking-wider">
                        Key Milestones
                      </h4>
                      <ul className="space-y-3">
                        {phase.milestones.map((milestone, i) => (
                          <li key={i} className="flex gap-3">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              phase.status === 'current'
                                ? 'bg-primary-500/20'
                                : 'bg-dark-700/50'
                            }`}>
                              <div className={`w-2 h-2 rounded-full ${
                                phase.status === 'current'
                                  ? 'bg-primary-400'
                                  : 'bg-gray-500'
                              }`}></div>
                            </div>
                            <p className={`text-sm leading-relaxed ${
                              phase.future ? 'text-gray-500' : 'text-gray-300'
                            }`}>
                              {milestone}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className={`card bg-gradient-to-br from-dark-800/50 to-dark-900/50 ${phase.future ? 'opacity-70 border-dashed' : ''}`}>
                      <h4 className="text-sm font-semibold text-gray-200 mb-4 uppercase tracking-wider">
                        Expected Deliverables
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.deliverables.map((deliverable, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              phase.status === 'current'
                                ? 'text-primary-400'
                                : phase.future
                                ? 'text-gray-600'
                                : 'text-accent-400'
                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            <p className={`text-sm ${
                              phase.future ? 'text-gray-500' : 'text-gray-300'
                            }`}>
                              {deliverable}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Phases Matter */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Phases Matter</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                It's tempting to try to build everything at once. But infrastructure credibility
                is earned, not declared. Each phase creates the foundation for the next:
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  transition: 'Phase 1 → Phase 2',
                  title: 'You can\'t measure distributed systems until you can measure single systems reproducibly.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  )
                },
                {
                  transition: 'Phase 2 → Phase 3',
                  title: 'Interoperability standards only matter if teams trust your measurement of what "interoperable" means.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  )
                },
                {
                  transition: 'Phase 3 → Phase 4',
                  title: 'Shelob requires an ecosystem that can actually coordinate. That ecosystem doesn\'t exist yet. Once standards, safety envelopes, and interoperability schemas are established, the distributed coordination layer becomes possible.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="card border-l-4 border-l-primary-500">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-mono text-primary-400 mb-2 uppercase tracking-wider">
                        {item.transition}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <strong className="text-white">{item.transition.split('→')[0].trim()}:</strong> {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phase Dependencies Visual */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Phase Dependencies</h2>
            <div className="card bg-gradient-to-br from-dark-900/90 to-dark-800/90 border-dark-700/50 p-8">
              <div className="space-y-6">
                {[
                  {
                    from: 'Phase 1',
                    to: 'Phase 2',
                    requirement: 'Single-system reproducibility',
                    enables: 'Distributed system measurement'
                  },
                  {
                    from: 'Phase 2',
                    to: 'Phase 3',
                    requirement: 'Trusted measurement standards',
                    enables: 'Interoperability schemas'
                  },
                  {
                    from: 'Phase 3',
                    to: 'Phase 4',
                    requirement: 'Ecosystem coordination capability + standards',
                    enables: 'Shelob distributed coordination layer (4-node stack)'
                  }
                ].map((dep, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className={`px-3 py-1 border rounded text-xs font-mono ${
                        i === 0 ? 'bg-primary-500/20 border-primary-500/30 text-primary-300' : 'bg-dark-800/50 border-dark-700/50 text-gray-400'
                      }`}>
                        {dep.from}
                      </div>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                    <div className="flex-shrink-0 text-center min-w-[200px]">
                      <p className="text-xs text-gray-400 mb-1">{dep.requirement}</p>
                      <svg className="w-6 h-6 mx-auto text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                      <p className="text-xs text-gray-300 font-semibold">{dep.enables}</p>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500"></div>
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className={`px-3 py-1 border rounded text-xs font-mono ${
                        i === 0 ? 'bg-accent-500/20 border-accent-500/30 text-accent-300' : 'bg-dark-800/50 border-dark-700/50 text-gray-400'
                      }`}>
                        {dep.to}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Alignment */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">How Phases Align with Business Model</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Each phase creates revenue opportunities while building toward the next phase.
            </p>

            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1',
                  revenue: 'Enterprise Benchmarking Engagements',
                  desc: 'Paid validation and performance audits fund platform development',
                  color: 'primary'
                },
                {
                  phase: 'Phase 2',
                  revenue: 'CORTEX Pro Platform Subscription',
                  desc: 'Recurring revenue from platform licensing and device packs',
                  color: 'accent'
                },
                {
                  phase: 'Phase 3',
                  revenue: 'Certification + Standards Membership',
                  desc: 'Authority-based revenue from certifications and working groups',
                  color: 'primary'
                },
                {
                  phase: 'Phase 4',
                  revenue: 'Shelob Platform + Ecosystem',
                  desc: 'Platform revenue from distributed coordination layer. The distributed BCI operating system becomes the infrastructure that enables the entire ecosystem.',
                  color: 'accent'
                }
              ].map((item, i) => (
                <div key={i} className={`card border-l-4 ${
                  item.color === 'primary' ? 'border-l-primary-500' : 'border-l-accent-500'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      item.color === 'primary' ? 'bg-primary-500/20' : 'bg-accent-500/20'
                    }`}>
                      <span className={`text-lg font-mono font-bold ${
                        item.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                      }`}>
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">{item.phase}</span>
                        <span className="text-lg font-semibold text-gray-200">{item.revenue}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shelob Deep Dive Section */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Shelob: The Destination</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Phase 4 isn't just another product—it's the distributed cognitive network that makes modern BCIs possible.
              </p>
            </div>

            <div className="card bg-gradient-to-br from-accent-500/10 to-primary-500/10 border-accent-500/30">
              <h3 className="text-2xl font-bold mb-4">What Shelob Is</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Project Shelob is a distributed coordination layer that links implants, wearables, and edge compute into a unified cognitive network.</strong> It's the connective architecture that turns "a neural signal" into a system that can learn, adapt, and run reliably across real devices in the real world.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The name fits: <strong className="text-accent-400">a web</strong>, not a single machine. Shelob isn't "a decoder model"—it's how decoding, control, stimulation, safety, and compute are orchestrated across hardware.
              </p>
              <Link to="/shelob" className="btn btn-primary inline-flex items-center gap-2">
                Learn More About Shelob
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="text-lg font-semibold mb-3">The Core Thesis</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Don't put the entire brain-compute stack inside the implant. Instead, push intelligence into a distributed system:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span><strong>Implant:</strong> High-fidelity sensing + stimulation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span><strong>Wearable:</strong> Compute bursts + adaptation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span><strong>Edge:</strong> Heavy inference + multi-modal fusion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-400">•</span>
                    <span><strong>System:</strong> Behaves like one coherent machine</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="text-lg font-semibold mb-3">The Four-Node Stack</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-mono text-xs">1.</span>
                    <div>
                      <strong className="text-white">Neural Node (Implant)</strong>
                      <p className="text-gray-400">High-quality recording, stimulation, tight timing</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-mono text-xs">2.</span>
                    <div>
                      <strong className="text-white">Relay Node (Wearable)</strong>
                      <p className="text-gray-400">Local hub, low-latency inference, safety enforcement</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-mono text-xs">3.</span>
                    <div>
                      <strong className="text-white">Edge Compute Node</strong>
                      <p className="text-gray-400">Heavy decoding, model swapping, personalization</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-mono text-xs">4.</span>
                    <div>
                      <strong className="text-white">Remote Compute (Optional)</strong>
                      <p className="text-gray-400">Long-horizon training, population learning</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-dark-800/50 border-l-4 border-l-accent-500">
              <h4 className="text-lg font-semibold mb-3">Why Shelob Matters</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-accent-400">•</span>
                  <span><strong>Real deployment behavior:</strong> Built for dropped packets, noisy environments, shifting electrode quality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-400">•</span>
                  <span><strong>True modularity:</strong> Swap decoders, feature extractors, schedulers without rebuilding the world</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-400">•</span>
                  <span><strong>Scalability:</strong> As models get bigger, Shelob stays stable because the implant stays lean</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-400">•</span>
                  <span><strong>Closed-loop neurotech:</strong> Designed for sense → decode → act → stimulate → measure loops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow the Journey</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            We're building in public. Lab Notes will document our progress, decisions,
            and learnings along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shelob" className="btn btn-primary">
              Learn About Shelob
            </Link>
            <Link to="/lab-notes" className="btn btn-secondary">
              Read Lab Notes
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Roadmap
