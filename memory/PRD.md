# DJ B-Suave — Mobile DJ Portfolio Site

## Original problem statement
> "i want to build a professional website offering my service of a mobile dj, showcasing my portfolio consisting of videos of my previous gigs i have posted on my instagram highlights."

## User choices (gathered Dec 2025)
- Brand: **DJ B-Suave** — tagline "21 years of genre bending mashup originality"
- Portfolio: Instagram reel / post **embed links** (user-supplied)
- Contact: WhatsApp + Phone + Email buttons only (no form, no backend)
- Sections: Hero, About, Services, Portfolio, Testimonials, Contact, Footer
- Aesthetic: Dark & moody nightclub — crimson (#FF2A4D) + amber (#FFB000) accents on near-black (#050505)

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + Lucide icons. Single-page scroll. Fonts: Cabinet Grotesk (display) + Outfit (body).
- **Backend**: FastAPI template untouched — only default `/api/` status endpoints. **No backend logic needed** for current scope (purely static portfolio with external links).
- **Data**: `/app/frontend/src/data/site.js` is the single source of truth for portfolio items, testimonials, services, contact info. User updates this file to add real Instagram URLs / phone / email.

## What's implemented (Dec 2025)
- Sticky glass header with smooth-scroll navigation + mobile menu
- Cinematic hero with brand wordmark, tagline, stats strip, dual CTAs
- About section with asymmetric image + capability tags
- Services grid (Weddings / Clubs / Corporate / Private)
- Portfolio bento grid (7 cards) — each accepts an `embedUrl` to render real Instagram iframe on click
- Testimonials marquee (5 quotes, infinite scroll, edge fades)
- Contact section with WhatsApp / Phone / Email action cards (real `wa.me`, `tel:`, `mailto:` links)
- Footer with massive wordmark + meta
- Noise/grain overlay, custom scrollbar, selection styling
- All interactive elements have kebab-case `data-testid` attributes
- Tested end-to-end: 100% pass on iteration_1.json

## Prioritized backlog
### P1 — User content
- Replace placeholder `contactInfo` in `/app/frontend/src/data/site.js` with real phone (+ WhatsApp number) and real email
- Populate each `portfolioItems[i].embedUrl` with real Instagram embed URLs (`https://www.instagram.com/reel/{ID}/embed`)
- Optionally swap `poster` images for actual gig stills

### P2 — Enhancements
- Add a Pricing / Packages section
- Add an availability calendar (shadcn calendar)
- SEO meta tags + Open Graph image
- Booking form (Resend/SendGrid) if user later wants inbound enquiries by email
- Press / logos strip ("Played at:")
- Audio mix embeds (SoundCloud / Mixcloud) alongside video

### P3 — Polish
- Lazy-load Instagram iframes only on viewport intersection
- Add light parallax to hero
- Custom favicon + manifest

## Next tasks
1. User supplies real phone, email, WhatsApp and Instagram embed URLs → drop into `site.js`
2. Decide whether to add a Pricing/Packages section
3. Buy a custom domain and connect via Emergent deployment
