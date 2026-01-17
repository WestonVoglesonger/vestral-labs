import { Link } from 'react-router-dom'
import { getAllPosts } from '../data/posts'

function LabNotes() {
  const posts = getAllPosts()

  return (
    <>
      <section className="section pt-32">
        <div className="container-narrow">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm font-mono text-primary-400 tracking-wider uppercase">
                Building in Public
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Lab Notes
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Progress, decisions, and learnings from building CORTEX and the Vestral infrastructure.
              We're documenting the journey as we go.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                We're just getting started. Lab Notes will document our progress, technical decisions,
                and learnings as we build CORTEX and establish Vestral as BCI infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn btn-primary">
                  Get Updates
                </Link>
                <Link to="/roadmap" className="btn btn-secondary">
                  See Roadmap
                </Link>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="card group hover:border-primary-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-sm font-mono text-gray-400">
                          {post.date}
                        </time>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs font-mono bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                        <Link to={`/lab-notes/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      <Link
                        to={`/lab-notes/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm group/link"
                      >
                        Read more
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
            <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Lab Notes will cover technical deep-dives, architectural decisions, benchmark results,
              and the occasional philosophical reflection on building infrastructure for an emerging industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'CORTEX implementation details',
                'Benchmark methodology and results',
                'Hardware adapter development',
                'Standards and interoperability work',
                'Lessons learned from engagements',
                'Industry observations and analysis'
              ].map((topic, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <p className="text-sm text-gray-300">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Want to be notified when we publish new Lab Notes? Get in touch or follow our progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
            <Link to="/roadmap" className="btn btn-secondary">
              View Roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default LabNotes
