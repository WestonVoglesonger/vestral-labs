export const posts = [
  {
    slug: '2025-01-why-vestral',
    date: 'January 2025',
    title: 'Why Vestral Labs Exists',
    excerpt: 'The founding thesis: BCI development is still custom science projects, not repeatable engineering. What we\'re building and why it matters.',
    tags: ['Vision', 'Founding'],
    content: `
      <p>
        BCI development is still a custom science project. Not repeatable engineering.
        Every team builds bespoke infrastructure from scratch, losing months to problems
        that should have been solved once.
      </p>

      <p>
        This is the problem Vestral Labs exists to solve.
      </p>

      <h2>The pattern I kept seeing</h2>

      <p>
        Researchers optimize algorithms in isolation. Each team develops sophisticated
        signal processing, decoder architectures, and evaluation methods. Brilliant work
        happens in labs around the world.
      </p>

      <p>
        But none of it transfers. There's no shared performance ground truth. A "90% accuracy"
        claim from Lab A can't be compared to a "92% accuracy" claim from Lab B, because they
        used different datasets, different preprocessing, different evaluation schemes,
        and different hardware.
      </p>

      <p>
        I call this <strong>unrequited specialization</strong>: deep expertise that can't
        compound because there's no common substrate to build on.
      </p>

      <h2>What other fields have</h2>

      <p>
        Chip design has SPICE. Machine learning has MLPerf. Web development has Lighthouse.
        Even video games have standardized benchmarks that let you compare GPUs meaningfully.
      </p>

      <p>
        These aren't just nice-to-haves. They're what turned those fields from artisanal
        craft into repeatable engineering. When you can measure things consistently,
        you can optimize systematically. When results are comparable, progress compounds.
      </p>

      <p>
        BCI doesn't have this yet. And it needs to.
      </p>

      <h2>What we're building</h2>

      <p>
        Vestral Labs is a BCI industry accelerator—a lab + product engine building
        the missing infrastructure layer:
      </p>

      <ul>
        <li><strong>Benchmarking</strong>: CORTEX, a reproducible framework for evaluating BCI algorithms across real hardware</li>
        <li><strong>Safety standards</strong>: Safety envelopes, validation primitives, signal quality thresholds</li>
        <li><strong>Interoperability</strong>: Common schemas so devices and software can actually work together</li>
        <li><strong>Deployment tooling</strong>: End-to-end latency measurement for distributed systems</li>
      </ul>

      <p>
        We're not building a headset. We're not building an implant. We're building
        the factory that makes many BCIs possible.
      </p>

      <h2>Why now</h2>

      <p>
        The BCI industry is at an inflection point. Investment is flowing in.
        Multiple companies are approaching clinical viability. The technology is maturing.
      </p>

      <p>
        But without infrastructure, the industry will fragment into incompatible silos—
        like early mobile platforms, but with devices in people's brains.
        That's not acceptable.
      </p>

      <p>
        Someone needs to build the boring stuff that enables everything else.
        That's us.
      </p>

      <h2>The long game</h2>

      <p>
        Infrastructure credibility is earned, not declared. We're not trying to
        ship a platform next month and declare victory. We're building for the long term.
      </p>

      <p>
        Phase 1 is benchmarking credibility. Prove CORTEX works. Get results that
        researchers trust. Build slowly, build right.
      </p>

      <p>
        Phase 2 is networked measurement. Phase 3 is ecosystem gravity. Phase 4 is
        something called Project Shelob—but that's a story for later.
      </p>

      <p>
        For now, we're focused on the foundation.
      </p>

      <blockquote>
        "If you can't measure it honestly, you can't engineer it."
      </blockquote>

      <p>
        That's the principle. That's why Vestral Labs exists.
      </p>
    `
  }
]

export function getPost(slug) {
  return posts.find(post => post.slug === slug)
}

export function getAllPosts() {
  return posts.sort((a, b) => {
    // Sort by date descending (newest first)
    return b.date.localeCompare(a.date)
  })
}
