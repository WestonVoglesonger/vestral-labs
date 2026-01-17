import { Link } from 'react-router-dom'

function Shelob() {
  return (
    <>
      <section className="section pt-32">
        <div className="container-narrow">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
              <p className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                Phase 4 Vision
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Project Shelob
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The Distributed Cognitive Network for Brain Interfaces. A web, not a single machine.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-br from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-lg">
              <p className="text-lg text-gray-200 italic leading-relaxed">
                "Project Shelob is a distributed BCI operating layer that turns implants, wearables, and edge compute into one coherent, safe, low-latency cognitive system."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Shelob Is</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Project Shelob is a distributed coordination layer that links implants, wearables, and edge compute into a unified cognitive network.</strong> It's the connective architecture inside Vestral Labs — the thing that turns "a neural signal" into a <strong className="text-white">system</strong> that can learn, adapt, and run reliably across real devices in the real world.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The name fits: <strong className="text-accent-400">a web</strong>, not a single machine.
              </p>
              <div className="card bg-dark-800/50 border-l-4 border-l-accent-500">
                <p className="text-gray-200 leading-relaxed mb-2">
                  <strong>Shelob isn't "a decoder model."</strong>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Shelob is <strong className="text-white">how decoding, control, stimulation, safety, and compute are orchestrated across hardware</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Core Thesis</h2>
            <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Don't put the entire brain-compute stack inside the implant.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card bg-red-500/10 border-red-500/30">
                <h4 className="text-lg font-semibold mb-3 text-red-300">The Implant Should Be</h4>
                <ul className="space-y-2">
                  {['Small', 'Low power', 'Low heat', 'Stable', 'Safe'].map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-red-500/10 border-red-500/30">
                <h4 className="text-lg font-semibold mb-3 text-red-300">The Implant Should NOT Be</h4>
                <ul className="space-y-2">
                  {['Forced to run heavyweight models', 'Constant retraining', 'Complex UI logic', 'Massive feature pipelines'].map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card">
              <h4 className="text-lg font-semibold mb-4">Instead: Push Intelligence Into a Distributed System</h4>
              <div className="space-y-4">
                {[
                  { 
                    node: 'Implant', 
                    role: 'High-fidelity sensing + stimulation', 
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    )
                  },
                  { 
                    node: 'Nearby devices', 
                    role: 'Compute bursts + adaptation', 
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    )
                  },
                  { 
                    node: 'Edge nodes', 
                    role: 'Heavy inference + multi-modal fusion', 
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    )
                  },
                  { 
                    node: 'The system', 
                    role: 'Behaves like one coherent machine', 
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                    )
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-dark-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-200 mb-1">{item.node}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-300 leading-relaxed">
                This gives you <strong className="text-white">real performance without implant bloat</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Shelob Stack</h2>
            
            <div className="space-y-8">
              {[
                {
                  layer: '1',
                  name: 'Neural Node',
                  location: 'Implant',
                  description: 'The "front-end nerve ending" of the system',
                  roles: [
                    'High-quality neural recording',
                    'Stimulation delivery',
                    'Tight timing + deterministic behavior',
                    'Signal conditioning + basic compression / feature extraction'
                  ],
                  highlight: 'Dual stimulation/recording architecture — parts can dynamically switch between stimulation and recording modes',
                  color: 'primary',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  )
                },
                {
                  layer: '2',
                  name: 'Relay Node',
                  location: 'Wearable / Behind-the-ear / Pocket Device',
                  description: 'The local nervous system hub',
                  roles: [
                    'Manage the link to the implant',
                    'Run low-latency inference when needed',
                    'Packet shaping + timing correction',
                    'Buffer + protect data during dropouts',
                    'Enforce safety envelopes before commands reach the implant'
                  ],
                  highlight: 'Makes Shelob viable in real-world networking conditions',
                  color: 'accent',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                  )
                },
                {
                  layer: '3',
                  name: 'Edge Compute Node',
                  location: 'Phone / Laptop / Dedicated Box',
                  description: 'The "muscle" layer',
                  roles: [
                    'Heavy decoding (bigger models)',
                    'Rapid experimentation / swapping models',
                    'Fusing neural + IMU + eye tracking + context signals',
                    'Personalization loops (fine-tuning / calibration updates)',
                    'Recording telemetry for reproducibility'
                  ],
                  highlight: 'Scale capability without touching implant firmware every week',
                  color: 'primary',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  )
                },
                {
                  layer: '4',
                  name: 'Optional Remote Compute',
                  location: 'Cloud / Lab Station',
                  description: 'Not required, but valuable for advanced capabilities',
                  roles: [
                    'Long-horizon training',
                    'Population-level model learning',
                    'Large-scale evaluation',
                    'Fleet monitoring + updates'
                  ],
                  highlight: 'Shelob\'s philosophy is distributed-first, not cloud-dependent',
                  color: 'accent',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  ),
                  optional: true
                }
              ].map((node, i) => (
                <div key={i} className={`card ${node.optional ? 'opacity-80 border-dashed' : ''}`}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-4 ${
                        node.color === 'primary'
                          ? 'bg-primary-500/20 border-2 border-primary-500/30'
                          : 'bg-accent-500/20 border-2 border-accent-500/30'
                      }`}>
                        <svg className={`w-10 h-10 ${
                          node.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                        }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {node.icon}
                        </svg>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${
                        node.color === 'primary'
                          ? 'bg-primary-500/20 border border-primary-500/30 text-primary-300'
                          : 'bg-accent-500/20 border border-accent-500/30 text-accent-300'
                      }`}>
                        Layer {node.layer}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{node.name}</h3>
                      <p className={`text-sm font-mono mb-3 ${
                        node.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                      }`}>
                        {node.location}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-4 italic">
                        {node.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-200 mb-2 uppercase tracking-wider">Primary Roles</h4>
                        <ul className="space-y-2">
                          {node.roles.map((role, j) => (
                            <li key={j} className="flex gap-2 text-sm text-gray-300">
                              <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                node.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                              </svg>
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg border-l-4 ${
                        node.color === 'primary'
                          ? 'bg-primary-500/10 border-primary-500/50'
                          : 'bg-accent-500/10 border-accent-500/50'
                      }`}>
                        <p className="text-sm text-gray-200">
                          <strong>Key:</strong> {node.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Shelob's Real Product: Coordination</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Shelob's "secret sauce" isn't any single algorithm — it's <strong className="text-white">coordination</strong>.
            </p>

            <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
              <p className="text-xl text-gray-200 mb-6 text-center italic">
                "Shelob makes the BCI stack act like a real operating system for neural devices."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Routing',
                'Scheduling',
                'Synchronization',
                'Calibration state management',
                'Safety gating',
                'Telemetry + measurement discipline',
                'Hot-swapping pipelines without bricking anything'
              ].map((item, i) => (
                <div key={i} className="card text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Data That Flows Through the Web</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
              Shelob treats neural interaction like a closed-loop system with multiple streams.
            </p>

            <div className="space-y-6">
              {[
                {
                  direction: 'Uplink',
                  description: 'brain → system',
                  streams: [
                    'Raw / compressed neural samples',
                    'Features (spikes, bandpower, event markers, etc.)',
                    'Quality metrics (noise, dropout, impedance-ish signals if available)',
                    'Timing metadata (clock sync info)'
                  ],
                  color: 'primary',
                  icon: '↑'
                },
                {
                  direction: 'Downlink',
                  description: 'system → brain / device',
                  streams: [
                    'Stimulation commands (bounded + policy-checked)',
                    'Mode switching commands (record ↔ stim sections)',
                    'Adaptive control parameters (gain, filters, thresholds)',
                    'Calibration updates (state blobs)'
                  ],
                  color: 'accent',
                  icon: '↓'
                },
                {
                  direction: 'Side-channel Telemetry',
                  description: 'system → developer / evaluation',
                  streams: [
                    'End-to-end latency + jitter',
                    'Packet loss profiles',
                    'Decoder confidence + drift indicators',
                    'Safety events + constraint triggers'
                  ],
                  color: 'primary',
                  icon: '→'
                }
              ].map((flow, i) => (
                <div key={i} className={`card border-l-4 ${
                  flow.color === 'primary' ? 'border-l-primary-500' : 'border-l-accent-500'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-3xl font-bold ${
                      flow.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                    }`}>
                      {flow.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{flow.direction}</h3>
                      <p className="text-sm text-gray-400 font-mono">{flow.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {flow.streams.map((stream, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-300">
                        <span className={`${
                          flow.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                        }`}>•</span>
                        <span>{stream}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Safety: Shelob Must Be Paranoid by Design</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              In a distributed BCI system, you don't just need "accuracy." You need <strong className="text-white">control authority</strong> and <strong className="text-white">safety enforcement</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-red-500/10 border-red-500/30">
                <h3 className="text-xl font-bold mb-4 text-red-300">Hard Constraints (non-negotiable)</h3>
                <ul className="space-y-2">
                  {[
                    'Stimulation never exceeds validated bounds',
                    'Mode switching can\'t happen in unsafe states',
                    'Command authentication required',
                    'Fail-safe defaults when the network becomes unstable'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-yellow-500/10 border-yellow-500/30">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">Soft Constraints (adaptive)</h3>
                <ul className="space-y-2">
                  {[
                    'Throttle stimulation when signal quality drops',
                    'Degrade gracefully (fall back to simpler decoder)',
                    'Automatically widen safety margins under uncertainty'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card bg-red-500/10 border-l-4 border-l-red-500">
              <p className="text-lg text-gray-200 font-semibold">
                <strong className="text-red-300">The Rule:</strong> No node can "freestyle" stimulation. Every command is checked through policy gates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Shelob Is a Big Deal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Real Deployment Behavior',
                  desc: 'BCIs aren\'t lab toys. Shelob is built for dropped packets, noisy environments, shifting electrode quality, movement artifacts, thermal/power constraints, and real-time requirements.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  )
                },
                {
                  title: 'True Modularity',
                  desc: 'You can swap decoders, feature extractors, schedulers, and stimulation controllers without rebuilding the world.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"/>
                  )
                },
                {
                  title: 'Scalability of Intelligence',
                  desc: 'As models get bigger, Shelob stays stable because the implant stays lean and intelligence scales outward.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  )
                },
                {
                  title: 'Closed-Loop Neurotech',
                  desc: 'Shelob is designed from day one for sense → decode → act → stimulate → measure loops. That\'s where "serious" neurotech lives.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="card">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">How Shelob Relates to CORTEX</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-primary-500/10 border-primary-500/30">
                <h3 className="text-xl font-bold mb-3 text-primary-300">CORTEX</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  CORTEX is how Vestral proves performance. It provides:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    'Benchmark discipline',
                    'Latency/jitter truth',
                    'Reproducible testing'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card bg-accent-500/10 border-accent-500/30">
                <h3 className="text-xl font-bold mb-3 text-accent-300">Shelob</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Shelob is the future system that needs those proofs. It becomes the:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    'Distributed runtime those benchmarks target',
                    'Evaluation backbone (CORTEX-NetBench)',
                    'Real-world deployment platform'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Example Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Motor intent decoding (cursor / limb / exo control)',
                'Speech decoding pipelines (high compute, low implant complexity)',
                'Adaptive neurostimulation (closed-loop therapy logic)',
                'AR/VR neural interaction layer (low latency input + context fusion)',
                'Hybrid control (neural + eye tracking + IMU + EMG)'
              ].map((useCase, i) => (
                <div key={i} className="card">
                  <div className="flex gap-3">
                    <svg className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                    <p className="text-gray-300 leading-relaxed">{useCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Long Game</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Shelob is Phase 4. It becomes possible only after benchmarking credibility, networked measurement, and ecosystem gravity are established. This is the crown jewel that becomes inevitable once infrastructure exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roadmap" className="btn btn-primary">
              See Full Roadmap
            </Link>
            <Link to="/platform" className="btn btn-secondary">
              Learn About CORTEX
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shelob
