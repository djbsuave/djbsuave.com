// Centralised portfolio data. Each card opens `highlightsUrl` in a new tab when
// clicked. Instagram does not allow Stories / Highlights to play inline on
// external sites (Meta restriction) — clicking through to Instagram is the
// supported, professional way to showcase them.
//
// If you later post the same clips as individual reels, drop the reel URL into
// `embedUrl` (format: https://www.instagram.com/reel/{ID}/embed) and that card
// will play inline instead.

const HIGHLIGHTS_URL =
  "https://www.instagram.com/stories/highlights/17938570219657584/";

export const portfolioItems = [
  {
    id: "gig-01",
    title: "Opening for Wu-Tang Clan",
    venue: "La Santa · Santa Ana",
    year: "2025",
    span: "md:col-span-2 md:row-span-2",
    poster:
      "https://customer-assets.emergentagent.com/job_dj-gigs-1/artifacts/30uulql9_la%20santa%20dj%20gig.png",
    embedUrl: "",
    highlightsUrl: HIGHLIGHTS_URL,
  },
  {
    id: "gig-02",
    title: "Wedding Reception",
    venue: "Irvine, CA",
    year: "2024",
    span: "",
    poster:
      "https://customer-assets.emergentagent.com/job_dj-gigs-1/artifacts/d36b6rkt_dj%20wedding%20set%20up.jpg",
    embedUrl: "",
    highlightsUrl: HIGHLIGHTS_URL,
  },
  {
    id: "gig-03",
    title: "Opening for The Pharcyde",
    venue: "La Santa · Santa Ana",
    year: "2024",
    span: "",
    poster:
      "https://customer-assets.emergentagent.com/job_dj-gigs-1/artifacts/be9bqsuc_djing%20at%20la%20santa%20with%20sign.png",
    embedUrl: "",
    highlightsUrl: HIGHLIGHTS_URL,
  },
  {
    id: "gig-04",
    title: "Rooftop Party",
    venue: "Sky Terrace",
    year: "2024",
    span: "md:col-span-2",
    poster:
      "https://images.unsplash.com/photo-1574391884720-bbc049ec09ad?auto=format&fit=crop&w=1400&q=80",
    embedUrl: "",
    highlightsUrl: HIGHLIGHTS_URL,
  },
  {
    id: "gig-05",
    title: "Birthday Bash",
    venue: "Private Estate",
    year: "2023",
    span: "",
    poster:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    embedUrl: "",
    highlightsUrl: HIGHLIGHTS_URL,
  },
  {
    id: "gig-06",
    title: "Beachside Set",
    venue: "Costa Beach Club",
    year: "2024",
    span: "",
    poster:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
    embedUrl: "",
    highlightsUrl: HIGHLIGHTS_URL,
  },
  {
    id: "gig-07",
    title: "Anniversary Mashup",
    venue: "The Loft",
    year: "2023",
    span: "md:col-span-2",
    poster:
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=1400&q=80",
    embedUrl: "",
    highlightsUrl: HIGHLIGHTS_URL,
  },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "B-Suave read the crowd like a book. People who said they'd leave by 10 stayed until 2am. Genuinely the best DJ we've ever booked.",
    author: "Marcus & Elena",
    event: "Wedding · 2024",
  },
  {
    id: "t2",
    quote:
      "The mashups were unreal. He blended Bollywood, House and 90s hip-hop in a way that made every guest feel seen. Magic.",
    author: "Priya Shah",
    event: "Birthday · 2023",
  },
  {
    id: "t3",
    quote:
      "Booked him for our company offsite and our CEO is still talking about it. Professional, punctual and the floor was packed all night.",
    author: "Daniel Ortega",
    event: "Corporate · 2024",
  },
  {
    id: "t4",
    quote:
      "21 years of experience shows. He kept the energy peaked through a 6 hour set without a single dead moment.",
    author: "Sienna Walsh",
    event: "Club Night · 2024",
  },
  {
    id: "t5",
    quote:
      "Hands down the easiest vendor we worked with. Listened, delivered, and elevated the entire vibe.",
    author: "Jamal Reed",
    event: "Wedding · 2023",
  },
];

export const services = [
  {
    id: "s1",
    title: "Weddings",
    description:
      "From the first dance to the last call — curated sets that move the whole room, every generation, every culture.",
    icon: "Heart",
  },
  {
    id: "s2",
    title: "Clubs & Lounges",
    description:
      "Residency-grade open formats. Mashups, edits and unreleased blends that you won't hear anywhere else.",
    icon: "Disc3",
  },
  {
    id: "s3",
    title: "Corporate Events",
    description:
      "Cocktail receptions, product launches, galas. Professional rig, on-brand energy, zero rookie surprises.",
    icon: "Building2",
  },
  {
    id: "s4",
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, rooftops, estates. Bring the night — bring the requests — I'll bring the floor.",
    icon: "PartyPopper",
  },
];

export const contactInfo = {
  whatsapp: "+17147289655",
  whatsappDisplay: "+1 (714) 728-9655",
  phone: "+17147289655",
  phoneDisplay: "(714) 728-9655",
  email: "b.suave92@gmail.com",
  instagram: "https://instagram.com/b_suavee",
  instagramHandle: "@b_suavee",
};
