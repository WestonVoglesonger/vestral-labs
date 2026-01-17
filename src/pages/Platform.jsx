import { Link } from 'react-router-dom'

function Platform() {
  return (
    <>
      <section className="section pt-32">
        <div className="container">
          <div className="max-w-4xl space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                Flagship Platform
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              CORTEX
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Reproducible benchmarking framework for heterogeneous BCI kernels across real hardware.
              Config-driven runs. Standardized metrics. Artifact pipelines.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What CORTEX provides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                ),
                title: 'Kernel Harnesses',
                text: 'Standardized wrappers for BCI algorithms. Bring your decoder, we handle the instrumentation. Consistent entry/exit points, timing discipline, and resource measurement.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                ),
                title: 'Cross-Device Adapters',
                text: 'Abstract away hardware differences. Run the same benchmark on Blackrock, OpenBCI, or custom implants. Platform effects become measurable, not invisible.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                ),
                title: 'Telemetry Discipline',
                text: 'Precise timing, resource utilization, and performance metrics. Not just accuracy—latency distributions, jitter profiles, memory pressure. The full picture.'
              },
              {
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </>
                ),
                title: 'Config-Driven Runs',
                text: 'Declarative benchmark definitions. Version-controlled configurations. Reproducibility by design—share a config, reproduce a result.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                ),
                title: 'Artifact Pipelines',
                text: 'Automatic collection and storage of run artifacts. Datasets, models, metrics, and logs. Build an audit trail without manual curation.'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                ),
                title: 'Comparative Analytics',
                text: 'Side-by-side algorithm comparison. Historical trending. Platform-adjusted scoring. Finally answer "which decoder is better?"'
              }
            ].map((feature, index) => (
              <div key={index} className="card group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-6 mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
              <p className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                Architecture
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              CORTEX applies systems theory—specifically Butler Lampson's design principles—to
              create infrastructure that separates concerns: algorithm logic stays with researchers,
              measurement discipline and hardware abstraction stay with us.
            </p>
          </div>

          {/* CORTEX Architecture Diagram */}
          <div className="card bg-gradient-to-br from-dark-900/90 to-dark-800/90 border-dark-700/50 p-8 overflow-x-auto">
            <div className="min-w-[900px] space-y-6">
              
              {/* User Layer */}
              <div className="border-2 border-primary-500/30 rounded-xl p-6 bg-primary-500/5">
                <h3 className="text-sm font-mono text-primary-400 mb-4 uppercase tracking-wider">User Layer</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Algorithm Researcher', tech: 'Python/MATLAB' },
                    { label: 'Software Engineer', tech: 'C/C++' },
                    { label: 'Hardware Engineer', tech: 'Verilog/RTL' }
                  ].map((user, i) => (
                    <div key={i} className="bg-dark-800/50 border border-primary-500/20 rounded-lg p-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-300 mb-1">{user.label}</p>
                      <p className="text-xs text-gray-400 font-mono">{user.tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              </div>

              {/* CLI Layer */}
              <div className="border-2 border-accent-500/30 rounded-xl p-6 bg-accent-500/5">
                <h3 className="text-sm font-mono text-accent-400 mb-4 uppercase tracking-wider">CORTEX CLI</h3>
                <div className="bg-dark-800/50 border border-accent-500/20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-200 mb-2">cortex CLI</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['run', 'calibrate', 'validate', 'generate'].map((cmd, i) => (
                      <span key={i} className="px-2 py-1 bg-accent-500/20 text-accent-300 text-xs font-mono rounded">
                        {cmd}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-accent-500 to-primary-500"></div>
              </div>

              {/* Primitives Layer */}
              <div className="border-2 border-primary-500/30 rounded-xl p-6 bg-primary-500/5">
                <h3 className="text-sm font-mono text-primary-400 mb-4 uppercase tracking-wider">Primitives Layer</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { 
                      label: 'Kernels', 
                      desc: 'bandpass_fir, car, csp, ica, etc.',
                      items: ['v1/algorithm@precision', 'kernel.yaml', '*.c, *.so'],
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      )
                    },
                    { 
                      label: 'Configs', 
                      desc: 'cortex.yaml',
                      items: ['Global Params', 'Plugin List', 'Dataset Spec'],
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      )
                    },
                    { 
                      label: 'Datasets', 
                      desc: 'EEG/synthetic',
                      items: ['EEG Data', 'Synthetic Gen', 'Test Vectors'],
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                      )
                    }
                  ].map((prim, i) => (
                    <div key={i} className="bg-dark-800/50 border border-primary-500/20 rounded-lg p-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {prim.icon}
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-200 mb-1">{prim.label}</p>
                      <p className="text-xs text-gray-400 mb-2 font-mono">{prim.desc}</p>
                      <div className="space-y-1">
                        {prim.items.map((item, j) => (
                          <p key={j} className="text-xs text-gray-500 font-mono">• {item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              </div>

              {/* Orchestration Layer */}
              <div className="border-2 border-accent-500/30 rounded-xl p-6 bg-accent-500/5">
                <h3 className="text-sm font-mono text-accent-400 mb-4 uppercase tracking-wider">Orchestration Layer</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { 
                      label: 'Harness', 
                      desc: 'Scheduler, State Management',
                      color: 'from-yellow-500/20 to-yellow-600/20',
                      borderColor: 'border-yellow-500/30',
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      )
                    },
                    { 
                      label: 'Oracle Validator', 
                      desc: 'rtol=1e-5',
                      color: 'from-red-500/20 to-red-600/20',
                      borderColor: 'border-red-500/30',
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      )
                    },
                    { 
                      label: 'Telemetry', 
                      desc: 'NDJSON logging',
                      color: 'from-primary-500/20 to-primary-600/20',
                      borderColor: 'border-primary-500/30',
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      )
                    }
                  ].map((orch, i) => (
                    <div key={i} className={`bg-gradient-to-br ${orch.color} border ${orch.borderColor} rounded-lg p-4 text-center`}>
                      <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {orch.icon}
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-200 mb-1">{orch.label}</p>
                      <p className="text-xs text-gray-400 font-mono">{orch.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-accent-500 to-primary-500"></div>
              </div>

              {/* SDK Layer */}
              <div className="border-2 border-primary-500/30 rounded-xl p-6 bg-primary-500/5">
                <h3 className="text-sm font-mono text-primary-400 mb-4 uppercase tracking-wider">SDK Layer</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      label: 'Kernel SDK', 
                      desc: 'Plugin API, Calibration ABI',
                      items: ['Plugin API (init, exec, cleanup)', 'Calibration ABI v3', 'Validation Harness'],
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.11 7.25c.93-1.64 1.49-3.13 1.49-4.36 0-1.66-1.34-3-3-3-1.38 0-2.54.94-2.88 2.22A4.994 4.994 0 005 2C3.34 2 2 3.34 2 5c0 1.38.94 2.5 2.22 2.88A3 3 0 005 8c0 1.66 1.34 3 3 3 1.23 0 2.72-.56 4.36-1.49l.01.01z"/>
                      )
                    },
                    { 
                      label: 'Adapter SDK', 
                      desc: 'Transport, Protocol, Device Comm',
                      items: ['Protocol Layer (Framing, CRC32)', 'Transport Layer (SHM, Socket, SSH)', 'Device Interface'],
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      )
                    }
                  ].map((sdk, i) => (
                    <div key={i} className="bg-dark-800/50 border border-primary-500/20 rounded-lg p-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {sdk.icon}
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-200 mb-1">{sdk.label}</p>
                      <p className="text-xs text-gray-400 mb-2 font-mono">{sdk.desc}</p>
                      <div className="space-y-1">
                        {sdk.items.map((item, j) => (
                          <p key={j} className="text-xs text-gray-500">• {item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              </div>

              {/* Device Adapter Layer */}
              <div className="border-2 border-accent-500/30 rounded-xl p-6 bg-accent-500/5">
                <h3 className="text-sm font-mono text-accent-400 mb-4 uppercase tracking-wider">Device Adapter Layer</h3>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'x86 Loopback', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    )},
                    { label: 'ARM/Jetson', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    )},
                    { label: 'RPi SSH', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                    )},
                    { label: 'Custom HW', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    )}
                  ].map((adapter, i) => (
                    <div key={i} className="bg-dark-800/50 border border-accent-500/20 rounded-lg p-3 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-accent-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {adapter.icon}
                        </svg>
                      </div>
                      <p className="text-xs text-gray-300 font-mono">{adapter.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-accent-500 to-primary-500"></div>
              </div>

              {/* Platform Layer */}
              <div className="border-2 border-primary-500/30 rounded-xl p-6 bg-primary-500/5">
                <h3 className="text-sm font-mono text-primary-400 mb-4 uppercase tracking-wider">Platform Layer</h3>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'x86 Linux/macOS', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    )},
                    { label: 'ARM Jetson', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    )},
                    { label: 'Raspberry Pi', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    )},
                    { label: 'FPGA/ASIC', icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    ), future: true }
                  ].map((platform, i) => (
                    <div key={i} className={`bg-dark-800/50 border ${platform.future ? 'border-dashed border-gray-600/50' : 'border-primary-500/20'} rounded-lg p-3 text-center ${platform.future ? 'opacity-60' : ''}`}>
                      <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {platform.icon}
                        </svg>
                      </div>
                      <p className="text-xs text-gray-300 font-mono">{platform.label}</p>
                      {platform.future && <p className="text-xs text-gray-500 mt-1">Future</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              </div>

              {/* Analysis Layer */}
              <div className="border-2 border-accent-500/30 rounded-xl p-6 bg-accent-500/5">
                <h3 className="text-sm font-mono text-accent-400 mb-4 uppercase tracking-wider">Analysis Layer</h3>
                <div className="bg-dark-800/50 border border-accent-500/20 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-200 mb-2">Python Analysis Tools</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Latency', 'CDF', 'DVFS'].map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-accent-500/20 text-accent-300 text-xs font-mono rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Key Design Principles */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Separation of Concerns: Primitives ≠ Execution',
              'Platform Abstraction: Device adapters hide hardware',
              'Oracle Validation: Correctness first, speed second',
              'Versioning: Explicit kernel/adapter/ABI versions',
              'Reproducibility: Config + dataset + kernel → deterministic results',
              'Telemetry: Rich NDJSON logging for offline analysis'
            ].map((principle, i) => (
              <div key={i} className="card border-l-4 border-l-primary-500">
                <p className="text-sm text-gray-300 leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
                <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                  CORTEX Extension
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">NetBench</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Networked end-to-end benchmark suite measuring pipeline latency and jitter
                across distributed BCI systems. Because modern BCIs aren't monolithic—they're
                distributed.
              </p>

              <ul className="space-y-4 mt-8">
                {[
                  'Implant → Wearable latency profiling',
                  'Wearable → Edge compute timing',
                  'Edge → Host round-trip measurement',
                  'Full pipeline jitter analysis'
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="card bg-dark-900/90 border-dark-700/50 p-0 overflow-hidden">
                <div className="px-6 py-3 bg-dark-800/50 border-b border-dark-700/50">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Distributed Pipeline</span>
                </div>
                <div className="p-6">
                  <pre className="text-sm font-mono text-gray-300">
                    <code>{`Implant
   │
   │ ~1ms wireless
   ▼
Wearable (relay)
   │
   │ ~5-20ms BLE/WiFi
   ▼
Edge Compute
   │
   │ ~10-50ms network
   ▼
Host Application
   │
   ▼
User Feedback Loop`}</code>
                  </pre>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                NetBench measures each hop independently and the full round-trip,
                identifying where latency budgets are spent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-6 mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
              <p className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                Long-term Vision
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Project Shelob</h2>
          </div>

          <div className="card opacity-70 border-dashed border-2">
            <p className="text-gray-400 mb-6 leading-relaxed">
              The crown jewel that becomes inevitable once infrastructure exists.
            </p>

            <h4 className="text-xl font-semibold mb-4">Distributed Coordination Layer</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A coordination substrate linking implants, wearables, and edge compute.
              Not a single device—an architecture.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                'Minimal on-implant decoding (power/heat constraints)',
                'Distributed intelligence across the pipeline',
                'Dual stimulation/recording support'
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 leading-relaxed">
              Shelob is Phase 4. It becomes possible only after benchmarking credibility,
              networked measurement, and ecosystem gravity are established.
            </p>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shelob" className="btn btn-primary">
                Learn About Shelob →
              </Link>
              <Link to="/roadmap" className="btn btn-secondary">
                View Full Roadmap →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Platform
