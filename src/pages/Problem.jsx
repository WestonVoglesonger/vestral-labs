import { Link } from 'react-router-dom'

function Problem() {
  return (
    <>
      <section className="section pt-32">
        <div className="container-narrow">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
              <p className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                The Problem
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              BCI development is still a custom science project
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Not repeatable engineering. Every team builds bespoke infrastructure from scratch,
              losing months to problems that should have been solved once.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Unrequited Specialization</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                BCI researchers optimize algorithms in isolation. Each team develops sophisticated
                signal processing, decoder architectures, and evaluation methods—but none of it
                transfers. There's no shared performance ground truth.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The result: brilliant work that can't be compared, reproduced, or built upon.
                Every lab reinvents the same wheels while the field moves slower than it should.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-6 mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                Five Failure Modes
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Where teams lose months</h2>
          </div>

          <ol className="space-y-6">
            {[
              {
                title: 'No shared performance ground truth',
                text: 'What does "90% accuracy" mean? On which dataset? Which preprocessing? Which hardware? Claims are incomparable because there\'s no standard to compare against.'
              },
              {
                title: 'Inconsistent evaluation methods',
                text: 'Cross-validation schemes, train/test splits, online vs. offline metrics—every lab does it differently. Published results don\'t replicate because the evaluation itself isn\'t reproducible.'
              },
              {
                title: 'Hard-to-compare results',
                text: 'Even when methods are similar, subtle differences in timing, filtering, and artifact rejection make direct comparison impossible. Good work gets lost because it can\'t be contextualized.'
              },
              {
                title: 'Safety and validation gaps',
                text: 'No standard safety envelopes. No shared validation primitives. Each team builds bespoke safety checks—or worse, skips them. Regulatory paths become longer because there\'s no established baseline.'
              },
              {
                title: 'Interoperability chaos',
                text: 'Implant A doesn\'t talk to software B. Wearable C uses a proprietary format. Every integration is a custom project. The ecosystem can\'t compound because nothing connects.'
              }
            ].map((item, index) => (
              <li key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <span className="text-sm font-mono text-primary-400 font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
              <p className="text-sm font-mono text-accent-400 tracking-wider uppercase">
                The Cost
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What this means for the industry</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Slower Progress', text: 'Teams spend 40% of engineering time on infrastructure that should exist. That\'s time not spent on actual neuroscience.' },
              { title: 'Wasted Capital', text: 'Investors fund the same infrastructure work at multiple companies. Duplicated effort across the industry.' },
              { title: 'Regulatory Friction', text: 'Without standard validation methods, every regulatory submission is a first-of-kind exercise. Approval timelines stretch.' },
              { title: 'Talent Bottleneck', text: 'Skilled engineers leave academia but can\'t transfer their methods. Institutional knowledge stays siloed.' }
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What should exist</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Other engineering disciplines have solved this. Chip design has SPICE.
              Machine learning has MLPerf. Web development has Lighthouse.
              Even video games have standardized benchmarks.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              BCI should have:
            </p>
          </div>

          <ul className="space-y-4 mb-12">
            {[
              { text: 'Reproducible benchmarks that run on real hardware with standardized datasets and metrics' },
              { text: 'Safety envelopes with validation primitives that accelerate regulatory approval' },
              { text: 'Interoperability schemas so devices and software can actually work together' },
              { text: 'End-to-end measurement for latency and jitter across distributed systems' }
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">{item.text.split(' ')[0]}</strong> {item.text.split(' ').slice(1).join(' ')}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link to="/platform" className="btn btn-primary">
              See How CORTEX Solves This
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem
