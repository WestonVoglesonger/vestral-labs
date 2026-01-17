import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-dark-950 to-accent-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                BCI Industry Accelerator
              </p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              The infrastructure layer for{' '}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-pulse-slow">
                brain-computer interfaces
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We build the missing foundation for modern BCIs: benchmarking, safety standards,
              interoperability, and deployment tooling. We're not "one headset"—we're the factory
              that makes many BCIs possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/platform" className="btn btn-primary">
                Explore CORTEX
              </Link>
              <Link to="/problem" className="btn btn-secondary">
                Why This Matters
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Snapshot */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
              <p className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                The Problem
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              BCI development is still a custom science project
            </h2>
            <p className="text-xl text-gray-300">
              Not repeatable engineering. Teams lose months to problems that infrastructure should solve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-5xl font-bold font-mono bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
                0
              </div>
              <p className="text-sm text-gray-400">
                Shared benchmarks for cross-platform evaluation
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl font-bold font-mono bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
                Months
              </div>
              <p className="text-sm text-gray-400">
                Lost to validation gaps & interoperability chaos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                What We Build
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Infrastructure, not applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Benchmark</h3>
              <p className="text-gray-400 leading-relaxed">
                CORTEX: Reproducible benchmarking framework for heterogeneous BCI kernels.
                Kernel harnesses, cross-device adapters, config-driven runs.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-500/20 to-accent-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Standardize</h3>
              <p className="text-gray-400 leading-relaxed">
                Safety envelopes, validation primitives, signal quality thresholds, interoperability schemas.
                The boring stuff everyone needs.
              </p>
            </div>

            <div className="card group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deploy</h3>
              <p className="text-gray-400 leading-relaxed">
                CORTEX-NetBench: End-to-end latency measurement across distributed systems.
                Implant to wearable to edge to host.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section-alt">
        <div className="container-narrow">
          <blockquote className="border-l-4 border-primary-500 pl-8 py-4 text-2xl md:text-3xl font-medium italic text-gray-200">
            "If you can't measure it honestly, you can't engineer it."
          </blockquote>
          <p className="text-center text-gray-400 mt-8 text-lg">
            BCI teams shouldn't spend months building bespoke validation infrastructure.
            They should be advancing neuroscience. We build the foundation so they can focus on what matters.
          </p>
        </div>
      </section>

      {/* Shelob Teaser */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
                <p className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                  Long-term Vision
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Project Shelob</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                The crown jewel that becomes inevitable once infrastructure exists: a distributed
                coordination layer linking implants, wearables, and edge compute.
              </p>
              <p className="text-gray-400">
                Minimal on-implant decoding. Distributed intelligence. Dual stim/recording.
                Not the first product—the destination.
              </p>
              <div className="mt-6">
                <Link to="/shelob" className="btn btn-primary">
                  Learn About Shelob →
                </Link>
              </div>
            </div>
            <div className="card opacity-60 border-dashed">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-4">
                <p className="text-xs font-mono text-accent-400 tracking-wider uppercase">
                  Phase 4
                </p>
              </div>
              <h4 className="text-xl font-semibold mb-3">Shelob Era</h4>
              <p className="text-gray-400 leading-relaxed">
                Distributed coordination becomes possible only after benchmarking credibility,
                networked measurement, and ecosystem gravity are established.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Building the foundation</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            We're in Phase 1—establishing benchmarking credibility. Follow our progress in Lab Notes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roadmap" className="btn btn-primary">
              View Roadmap
            </Link>
            <Link to="/lab-notes" className="btn btn-secondary">
              Read Lab Notes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
