# Vestral Labs Website

Static website for Vestral Labs — BCI industry accelerator building infrastructure for brain-computer interfaces.

## Structure

```
vestral-labs/
├── index.html          # Home page
├── problem.html        # Why BCI infrastructure is broken
├── platform.html       # CORTEX platform deep-dive
├── standards.html      # Safety, validation, interoperability
├── services.html       # Business model and services
├── roadmap.html        # Phased timeline
├── lab-notes.html      # Blog index
├── about.html          # About Vestral Labs
├── team.html           # Team (placeholder)
├── pricing.html        # Pricing (placeholder)
├── contact.html        # Contact information
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Mobile nav toggle (minimal)
├── posts/
│   ├── template.html   # Blog post template
│   └── *.html          # Individual posts
├── assets/             # Images, icons (add as needed)
└── README.md           # This file
```

## Quick Start

### Local Development

Just open `index.html` in a browser. No build step required.

For live reload during development, use any simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have npx)
npx serve

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### Deployment

#### GitHub Pages

1. Push this folder to a GitHub repository
2. Go to Settings → Pages
3. Set source to "main" branch (or "gh-pages" if you prefer)
4. Site will be available at `https://yourusername.github.io/vestral-labs`

For a custom domain:
1. Add a `CNAME` file with your domain (e.g., `vestral.dev`)
2. Configure DNS with your registrar

#### Other Hosting

This is a static site. Upload to any web host:
- Netlify (drag & drop the folder)
- Vercel
- Cloudflare Pages
- Any traditional web host

## Adding Content

### New Blog Post

1. Copy `posts/template.html` to a new file:
   ```
   posts/2025-02-your-post-slug.html
   ```

2. Edit the new file:
   - Update `<title>` and `<meta name="description">`
   - Update the date, title, and tags in the header
   - Write your content in the `article__content` div

3. Add the post to `lab-notes.html`:
   ```html
   <li class="post-item">
     <p class="post-item__date">February 2025</p>
     <h2 class="post-item__title">
       <a href="posts/2025-02-your-post-slug.html">Your Post Title</a>
     </h2>
     <p class="post-item__excerpt">
       Brief description of the post.
     </p>
     <div class="post-item__tags">
       <span class="tag">Category</span>
     </div>
   </li>
   ```

4. Commit and push

### Editing Pages

All pages are plain HTML. Edit directly in any text editor.

Key sections to update as the company evolves:
- `team.html` — Add team members
- `pricing.html` — Add pricing tiers when ready
- `roadmap.html` — Update phase statuses
- `contact.html` — Update contact methods

## Design System

### Colors

| Variable | Value | Use |
|----------|-------|-----|
| `--color-bg-primary` | `#0a0f1a` | Main background |
| `--color-bg-secondary` | `#1a2332` | Card/section backgrounds |
| `--color-accent` | `#3d8b8b` | Links, highlights |
| `--color-text-primary` | `#e8eaed` | Headings |
| `--color-text-secondary` | `#9ca3af` | Body text |
| `--color-text-muted` | `#6b7280` | Subtle text |

### Typography

- Sans-serif: System fonts (Inter-like)
- Monospace: SF Mono / Fira Code for code and technical elements

### Components

See `css/style.css` for available classes:
- `.container` / `.container--narrow` — Layout wrappers
- `.section` / `.section--alt` — Page sections
- `.card` / `.card-grid` — Card layouts
- `.btn` / `.btn--primary` / `.btn--secondary` — Buttons
- `.callout` — Highlighted boxes
- `.code-block` — Code with labels
- `.timeline` — Roadmap timeline
- `.post-item` — Blog post entries

## Notes

- No build step. Pure HTML/CSS/JS.
- No dependencies. No npm. No bundler.
- System fonts only. No external font loading.
- Minimal JavaScript (just mobile nav toggle).
- Dark mode by default.

## License

Copyright 2025 Vestral Labs. All rights reserved.
