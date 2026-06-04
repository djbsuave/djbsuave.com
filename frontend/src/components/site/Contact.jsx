import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";
import { contactInfo } from "../../data/site";

const contactBg =
  "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBuaWdodGNsdWIlMjBjcm93ZCUyMGxhc2VyfGVufDB8fHx8MTc4MDUyMjM4M3ww&ixlib=rb-4.1.0&q=85";

export default function Contact() {
  const waLink = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi B-Suave, I'd like to book you for an event.")}`;
  const telLink = `tel:${contactInfo.phone}`;
  const mailLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Booking enquiry")}`;

  const buttons = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      sub: contactInfo.whatsappDisplay,
      href: waLink,
      icon: MessageCircle,
      external: true,
      accent: "#FF2D95",
    },
    {
      id: "phone",
      label: "Call",
      sub: contactInfo.phoneDisplay,
      href: telLink,
      icon: Phone,
      external: false,
      accent: "#00E5FF",
    },
    {
      id: "email",
      label: "Email",
      sub: contactInfo.email,
      href: mailLink,
      icon: Mail,
      external: false,
      accent: "#FFFFFF",
    },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className="absolute inset-0 bg-[#050505]/85 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#FF2D95]" />
          <span className="text-xs capitalize tracking-[0.3em] text-[#FF2D95] font-bold">
            Contact
          </span>
        </div>
        <h2
          data-testid="contact-heading"
          className="font-display text-5xl md:text-6xl lg:text-8xl capitalize tracking-tighter text-white leading-[0.9] max-w-4xl"
        >
          Let's build
          <br />
          <span className="text-[#FF2D95]">your night.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-zinc-300 font-light">
          Dates fill fast — especially weekends. Send a message with your date,
          location and vibe and I'll come back within 24 hours.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-4 md:gap-6">
          {buttons.map((b) => {
            const Icon = b.icon;
            return (
              <a
                key={b.id}
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel={b.external ? "noopener noreferrer" : undefined}
                data-testid={`contact-${b.id}-button`}
                className="group border border-white/15 hover:border-white bg-[#0a0a0a]/70 backdrop-blur-md p-8 md:p-10 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={32}
                    style={{ color: b.accent }}
                    strokeWidth={1.5}
                  />
                  <span className="text-xs capitalize tracking-[0.25em] text-zinc-500 group-hover:text-white transition-colors">
                    Open →
                  </span>
                </div>
                <div className="mt-12">
                  <div className="font-display text-3xl md:text-4xl capitalize tracking-tight text-white">
                    {b.label}
                  </div>
                  <div className="mt-2 text-sm text-zinc-400 break-all">
                    {b.sub}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-instagram-link"
            className="inline-flex items-center gap-2 hover:text-[#00E5FF] transition-colors"
          >
            <Instagram size={18} />
            @b_suavee
          </a>
          <span className="text-zinc-700">·</span>
          <span>Available worldwide · Based for travel</span>
        </div>
      </div>
    </section>
  );
}
