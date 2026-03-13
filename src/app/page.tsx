"use client";

import Image from "next/image";
import { useState } from "react";

type Lang = "sv" | "fi" | "en";

const t = {
  sv: {
    nav: {
      home: "Startsida",
      services: "Tjänster",
      references: "Referenser",
      gallery: "Galleri",
      contact: "Kontakta Oss",
    },
    hero: {
      heading: "Välkommen till Ny-Bygg",
      subheading:
        "Ny-Bygg – Din pålitlig partner för sanering, nybyggnation och renovering i Raseborg med omnejd",
      intro:
        "Välkommen till Ny-Bygg, ett mångsidigt byggföretag som erbjuder högkvalitativa byggtjänster inom sanering, nybyggnationer och renoveringar. Vi har en passion för att leverera skräddarsydda lösningar som möter dina behov och överträffar dina förväntningar. Vi är verksamma i Raseborg med omnejd och finns här för att hjälpa dig förverkliga dina byggprojekt.",
      cta: "Kontakta oss!",
    },
    services: {
      heading: "Tjänster",
      items: [
        {
          category: "Tjänster",
          title: "Sanering",
          description:
            "Vi erbjuder professionella saneringstjänster för att återställa fastigheter efter skador eller kontaminering. Vi är specialister på att lösa renoveringsutmaningar – stora som små – och ser till att arbetet blir tryggt och professionellt utfört.",
        },
        {
          category: "Tjänster",
          title: "Nybyggnationer",
          description:
            "Drömmer du om att bygga ett nytt hem eller en stuga? Ny-Bygg förverkligar dina byggdrömmar med expertis och noggrannhet. Oavsett om det gäller nybyggnation av ett hus, en stockstuga eller en annan byggnad, garanterar vi hållbara och kvalitativa resultat.",
        },
        {
          category: "Tjänster",
          title: "Byggtjänster",
          description:
            "Ny-Bygg erbjuder ett brett utbud av byggtjänster med fokus på kvalitet och hållbarhet. Vi har lång erfarenhet av takbyte, badrumsrenoveringar, stockstugor och målningsarbeten – både invändigt och utvändigt. Välj Ny-Bygg för pålitliga byggtjänster som varar.",
        },
      ],
    },
    references: {
      heading: "Referenser",
    },
    gallery: {
      heading: "Galleri",
    },
    contact: {
      heading: "Kontakta oss",
      intro:
        "Med Ny-Bygg som din byggpartner kan du lita på att varje projekt utförs med högsta kvalitet, noggrannhet och professionalism. Vår erfaren personal tar hand om alla detaljer och säkerställer att ditt hem eller din fastighet står stadigt för framtiden.",
      name: "Namn",
      email: "E-post",
      subject: "Ämne",
      message: "Meddelande",
      send: "Skicka meddelande",
      successMsg: "Tack för ditt meddelande! Vi kontaktar dig snart.",
    },
    footer: {
      rights: "Alla rättigheter förbehållna.",
    },
  },
  fi: {
    nav: {
      home: "Etusivu",
      services: "Palvelut",
      references: "Referenssit",
      gallery: "Galleria",
      contact: "Ota yhteyttä",
    },
    hero: {
      heading: "Tervetuloa Ny-Byggiin",
      subheading:
        "Ny-Bygg – Luotettava kumppanisi saneeraukseen, uudisrakentamiseen ja remontteihin Raaseporissa ja lähialueilla",
      intro:
        "Tervetuloa Ny-Byggiin, monipuoliseen rakennusyritykseen, joka tarjoaa korkealaatuisia rakennuspalveluja saneerauksessa, uudisrakentamisessa ja remonteissa. Meillä on intohimo tarjota räätälöityjä ratkaisuja, jotka vastaavat tarpeitasi ja ylittävät odotuksesi. Toimimme Raaseporissa ja lähialueilla ja olemme täällä auttamassa sinua toteuttamaan rakennusprojektisi.",
      cta: "Ota yhteyttä!",
    },
    services: {
      heading: "Palvelut",
      items: [
        {
          category: "Palvelut",
          title: "Saneeraus",
          description:
            "Tarjoamme ammattimaisia saneerauspalveluja kiinteistöjen kunnostamiseen vahinkojen tai kulumisen jälkeen. Olemme erikoistuneet ratkaisemaan remonttihaasteita – suuria ja pieniä – ja varmistamme, että työ tehdään turvallisesti ja ammattimaisesti.",
        },
        {
          category: "Palvelut",
          title: "Uudisrakentaminen",
          description:
            "Haaveiletko uuden kodin tai mökin rakentamisesta? Ny-Bygg toteuttaa rakennusunelmasi ammattitaidolla ja tarkkuudella. Olipa kyseessä talon, hirsimökin tai muun rakennuksen uudisrakentaminen, takaamme kestävät ja laadukkaat tulokset.",
        },
        {
          category: "Palvelut",
          title: "Rakennuspalvelut",
          description:
            "Ny-Bygg tarjoaa laajan valikoiman rakennuspalveluja laadun ja kestävyyden ollessa keskiössä. Meillä on pitkä kokemus kattoremontista, kylpyhuoneremontista, hirsimökeistä ja maalaustöistä – sekä sisällä että ulkona. Valitse Ny-Bygg luotettaviin rakennuspalveluihin.",
        },
      ],
    },
    references: {
      heading: "Referenssit",
    },
    gallery: {
      heading: "Galleria",
    },
    contact: {
      heading: "Ota yhteyttä",
      intro:
        "Ny-Bygg rakennuskumppanina voit luottaa siihen, että jokainen projekti toteutetaan korkeimmalla laadulla, tarkkuudella ja ammattimaisuudella. Kokenut henkilöstömme huolehtii kaikista yksityiskohdista ja varmistaa, että kotisi tai kiinteistösi seisoo vakaana tulevaisuutta varten.",
      name: "Nimi",
      email: "Sähköposti",
      subject: "Aihe",
      message: "Viesti",
      send: "Lähetä viesti",
      successMsg: "Kiitos viestistäsi! Otamme yhteyttä pian.",
    },
    footer: {
      rights: "Kaikki oikeudet pidätetään.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      references: "References",
      gallery: "Gallery",
      contact: "Contact Us",
    },
    hero: {
      heading: "Welcome to Ny-Bygg",
      subheading:
        "Ny-Bygg – Your reliable partner for remediation, new construction and renovation in Raseborg and surrounding areas",
      intro:
        "Welcome to Ny-Bygg, a versatile construction company offering high-quality building services in remediation, new construction and renovations. We are passionate about delivering tailored solutions that meet your needs and exceed your expectations. We operate in Raseborg and surrounding areas and are here to help you realise your building projects.",
      cta: "Contact us!",
    },
    services: {
      heading: "Services",
      items: [
        {
          category: "Services",
          title: "Remediation",
          description:
            "We offer professional remediation services to restore properties after damage or contamination. We specialise in solving renovation challenges – large and small – and ensure the work is carried out safely and professionally.",
        },
        {
          category: "Services",
          title: "New Construction",
          description:
            "Dreaming of building a new home or cottage? Ny-Bygg makes your building dreams a reality with expertise and precision. Whether it's a house, log cabin or other structure, we guarantee sustainable and quality results.",
        },
        {
          category: "Services",
          title: "Building Services",
          description:
            "Ny-Bygg offers a wide range of building services with a focus on quality and durability. We have extensive experience in roof replacements, bathroom renovations, log cabins and painting work – both interior and exterior. Choose Ny-Bygg for reliable building services that last.",
        },
      ],
    },
    references: {
      heading: "References",
    },
    gallery: {
      heading: "Gallery",
    },
    contact: {
      heading: "Contact Us",
      intro:
        "With Ny-Bygg as your building partner, you can trust that every project is carried out with the highest quality, precision and professionalism. Our experienced staff takes care of every detail and ensures that your home or property stands strong for the future.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      successMsg: "Thank you for your message! We will contact you soon.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

const TESTIMONIALS = [
  {
    quote: "Työn laatu erinomaista ja asiat tehdään niinkuin on sovittu!",
    name: "Ilari",
  },
  {
    quote:
      "Tack för det pålitliga jobbet både i bastun och i huset! Nu kan jag njuta av sommaren, då så mycket är renoverat i Bromarv. Jag hoppas kunna kontakta er även för framtida arbeten. Trevlig sommar!",
    name: "Satu",
  },
];

const SERVICE_IMAGES = [
  "/images/DSC_5924-scaled.jpg",
  "/images/DSC_6214-2.jpg",
  "/images/DSC_2929-1024x681.jpg",
];

const GALLERY_IMAGES = [
  "/images/DSC_6247-1024x681.jpg",
  "/images/DSC_3360-1024x681.jpg",
  "/images/DSC_5885-1024x681.jpg",
  "/images/DSC_6213-1024x681.jpg",
  "/images/DSC_2836-1024x681.jpg",
  "/images/DSC_6190-1024x681.jpg",
  "/images/DSC_2768-1024x681.jpg",
  "/images/DSC_2772-1024x681.jpg",
  "/images/DSC_5905-1024x681.jpg",
];

const LANG_LABELS: Record<Lang, string> = { sv: "SV", fi: "FI", en: "EN" };

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("sv");

  const c = t[lang];

  const navLinks = [
    { label: c.nav.home, href: "#home" },
    { label: c.nav.services, href: "#services" },
    { label: c.nav.references, href: "#references" },
    { label: c.nav.gallery, href: "#gallery" },
    { label: c.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#0cc0df]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-xl font-bold text-gray-900 tracking-tight"
          >
            Ny-Bygg
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-800 hover:text-[#0cc0df] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex border border-gray-300 rounded overflow-hidden ml-2">
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === l
                      ? "bg-[#0cc0df] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-gray-800 hover:text-[#0cc0df]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setMenuOpen(false);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                    lang === l
                      ? "bg-[#0cc0df] text-white"
                      : "border border-gray-300 text-gray-600"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {c.hero.heading}
          </h1>
          <a
            href="#contact"
            className="inline-block bg-[#0cc0df] hover:bg-[#0aa8c4] text-white font-semibold px-8 py-3 rounded transition-colors text-lg mb-8"
          >
            {c.hero.cta}
          </a>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            {c.hero.subheading}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {c.hero.intro}
          </p>
        </div>
        <div className="relative w-full aspect-[16/7]">
          <Image
            src="/images/DSC_2744-scaled.jpg"
            alt="Ny-Bygg"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {c.services.heading}
          </h2>
          <div className="space-y-20">
            {c.services.items.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                    <Image
                      src={SERVICE_IMAGES[i]}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-sm font-semibold text-[#0cc0df] uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-1 mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References / Testimonials */}
      <section id="references" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {c.references.heading}
          </h2>
          <div className="space-y-8">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.name}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="font-semibold text-gray-900">
                  — {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {c.gallery.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Ny-Bygg"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            {c.contact.heading}
          </h2>
          <p className="text-gray-600 leading-relaxed text-center mb-10">
            {c.contact.intro}
          </p>

          <p className="text-center mb-10">
            <a
              href="mailto:info@ny-bygg.fi"
              className="text-[#0cc0df] hover:underline font-semibold text-lg"
            >
              info@ny-bygg.fi
            </a>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(c.contact.successMsg);
            }}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {c.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {c.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {c.contact.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {c.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0cc0df] hover:bg-[#0aa8c4] text-white font-semibold py-3 rounded transition-colors"
            >
              {c.contact.send}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-white">Ny-Bygg</p>
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ny-Bygg. {c.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
