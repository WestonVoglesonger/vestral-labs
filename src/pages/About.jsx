import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="page">
        <div className="container container--narrow">
          <div className="section-header">
            <p className="section-header__eyebrow">About</p>
            <h1 className="section-header__title">Vestral Labs</h1>
            <p className="section-header__subtitle">
              A for-profit BCI industry accelerator—a lab + product engine building the missing
              infrastructure layer for modern brain-computer interfaces.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <h2>What we are</h2>
          <p>
            Vestral Labs is not a BCI company. We don't build headsets, implants, or consumer devices.
            We build the infrastructure that makes those things possible to develop, validate, and deploy
            at scale.
          </p>
          <p>
            Think of us as the AWS of neural interfaces: the foundation layer that serious teams
            build on, not a competitor to what they're building.
          </p>

          <blockquote style={{marginTop: 'var(--space-2xl)'}}>
            We're not "one headset"—we're the factory that makes many BCIs possible.
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2>What we build</h2>

          <ul className="feature-list" style={{marginTop: 'var(--space-xl)'}}>
            <li className="feature-list__item">
              <svg className="feature-list__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <p className="feature-list__text">
                <strong>Benchmarking infrastructure</strong> — CORTEX, a reproducible benchmarking
                framework for BCI algorithms across real hardware
              </p>
            </li>
            <li className="feature-list__item">
              <svg className="feature-list__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <p className="feature-list__text">
                <strong>Safety and validation standards</strong> — safety envelopes, validation primitives,
                and regulatory-ready documentation
              </p>
            </li>
            <li className="feature-list__item">
              <svg className="feature-list__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <p className="feature-list__text">
                <strong>Interoperability schemas</strong> — common data formats and protocols so devices
                can actually work together
              </p>
            </li>
            <li className="feature-list__item">
              <svg className="feature-list__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <p className="feature-list__text">
                <strong>Deployment tooling</strong> — end-to-end latency measurement for distributed
                BCI systems via CORTEX-NetBench
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <h2>Philosophy</h2>

          <div className="callout" style={{marginTop: 'var(--space-xl)'}}>
            <p className="callout__title" style={{fontSize: '1.125rem'}}>"If you can't measure it honestly, you can't engineer it."</p>
            <p className="callout__text">
              This is our guiding principle. BCI development has been held back by the inability to
              compare results across labs, platforms, and methods. We're building the measurement
              infrastructure that makes real engineering possible.
            </p>
          </div>

          <p style={{marginTop: 'var(--space-xl)'}}>
            We apply systems theory—specifically Butler Lampson's design principles—to create
            infrastructure that separates concerns: algorithm logic stays with researchers,
            measurement discipline and hardware abstraction stay with us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2>Why "Vestral"?</h2>
          <p>
            From the Latin <em>vestibulum</em>—an entrance hall or threshold. In neuroscience,
            the vestibular system is the sensory foundation for spatial orientation and balance.
          </p>
          <p>
            We're building the vestibule for the BCI industry: the foundation you pass through
            before entering the main structure. The infrastructure that makes everything else stable.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container text-center">
          <h2>Learn more</h2>
          <p style={{maxWidth: '500px', margin: 'var(--space-lg) auto var(--space-xl)'}}>
            Explore what we're building, or get in touch if you want to be part of it.
          </p>
          <div style={{display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/platform" className="btn btn--primary">Explore CORTEX</Link>
            <Link to="/contact" className="btn btn--secondary">Contact</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
