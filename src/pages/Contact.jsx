import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: ''
      })
    }, 3000)
  }

  const contactReasons = [
    {
      title: 'Enterprise Benchmarking',
      desc: 'Need a performance audit or validation engagement?',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      )
    },
    {
      title: 'CORTEX Pro Platform',
      desc: 'Interested in platform access or enterprise licensing?',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      )
    },
    {
      title: 'Device Certification',
      desc: 'Want to get your hardware CORTEX Verified?',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      )
    },
    {
      title: 'Standards Membership',
      desc: 'Join working groups or standards initiatives?',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      )
    },
    {
      title: 'Partnership Opportunities',
      desc: 'Exploring collaboration or integration?',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      )
    },
    {
      title: 'General Inquiry',
      desc: 'Questions about Vestral or CORTEX?',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                Get In Touch
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you need a performance audit, want to explore CORTEX Pro, or are interested
              in certification, we're here to help you build credible BCI infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              {submitted ? (
                <div className="card bg-accent-500/10 border-accent-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-accent-300">Message sent!</h3>
                  </div>
                  <p className="text-gray-300">
                    We'll get back to you as soon as possible. Typically within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your company or institution"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="enterprise-benchmarking">Enterprise Benchmarking</option>
                      <option value="cortex-pro">CORTEX Pro Platform</option>
                      <option value="certification">Device Certification</option>
                      <option value="standards">Standards Membership</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your needs, timeline, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Reasons */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Common inquiries</h2>
              <div className="space-y-4 mb-8">
                {contactReasons.map((reason, i) => (
                  <div key={i} className="card hover:border-primary-500/30 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {reason.icon}
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-200 mb-1">{reason.title}</h3>
                        <p className="text-sm text-gray-400">{reason.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/30">
                <h3 className="font-semibold text-gray-200 mb-3">Response time</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  We typically respond within 1-2 business days. For urgent enterprise inquiries,
                  please mention your timeline in your message.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Standard response: 1-2 business days
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Enterprise inquiries: Priority handling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <div className="card bg-gradient-to-br from-accent-500/10 to-primary-500/10 border-accent-500/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you need a one-time audit, ongoing validation, or full platform access,
              we'll work with you to find the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#form" className="btn btn-primary">
                Send a Message
              </a>
              <a href="/pricing" className="btn btn-secondary">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
