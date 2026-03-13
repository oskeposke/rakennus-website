"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Etusivu", href: "#etusivu" },
  { label: "Palvelut", href: "#palvelut" },
  { label: "Referenssit", href: "#referenssit" },
  { label: "Galleria", href: "#galleria" },
  { label: "Ota yhteyttä", href: "#ota-yhteytta" },
];

const SERVICES = [
  {
    image: "/images/DSC_6247-1024x681.jpg",
    category: "Saneeraus",
    title: "Sanering",
    description:
      "Ammattitaitoista saneerauspalvelua kiinteistöjen kunnostamiseen vaurioiden tai kulumisen jälkeen. Erikoistumme vaativiin remonttikohteisiin.",
  },
  {
    image: "/images/DSC_3360-1024x681.jpg",
    category: "Uudisrakentaminen",
    title: "Nybyggnation",
    description:
      "Rakennamme uusia koteja, mökkejä ja muita rakennuksia ammattitaidolla ja tarkkuudella — avaimet käteen.",
  },
  {
    image: "/images/DSC_2929-1024x681.jpg",
    category: "Rakentaminen",
    title: "Rakennuspalvelut",
    description:
      "Kattoremontteja, kylpyhuoneremontteja, hirsimökkien rakentamista sekä sisä- ja ulkomaalausta. Laaja osaaminen kaikenlaisiin projekteihin.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Työn laatu erinomaista ja asiat tehdään niinkuin on sovittu!",
    name: "Ilari",
  },
  {
    quote:
      "Tack för det pålitliga jobbet både i bastun och i huset! Nu kan jag njuta av sommaren...",
    name: "Satu",
  },
];

const GALLERY_IMAGES = [
  "/images/DSC_5885-1024x681.jpg",
  "/images/DSC_6213-1024x681.jpg",
  "/images/DSC_2836-1024x681.jpg",
  "/images/DSC_6190-1024x681.jpg",
  "/images/DSC_2768-1024x681.jpg",
  "/images/DSC_2772-1024x681.jpg",
  "/images/DSC_5905-1024x681.jpg",
  "/images/DSC_6214-2.jpg",
  "/images/DSC_5924-scaled.jpg",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#0cc0df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#etusivu" className="text-xl font-bold text-gray-900 tracking-tight">
            Ny-Bygg
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0cc0df] transition-colors"
              >
                {link.label}
              </a>
            ))}
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-[#0cc0df]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="etusivu"
        className="relative h-screen flex items-center justify-center text-white"
      >
        <Image
          src="/images/DSC_2744-scaled.jpg"
          alt="Ny-Bygg hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Ny-Bygg
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Professionella byggtjänster för takbyte, nybyggnation och renovering
            med kvalitet i fokus
          </p>
          <a
            href="#ota-yhteytta"
            className="inline-block bg-[#0cc0df] hover:bg-[#0aa8c4] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Ota yhteyttä
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="palvelut" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Palvelut</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0cc0df]">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="referenssit" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Referenssit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
              >
                <svg
                  className="w-8 h-8 text-[#0cc0df] mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-lg italic mb-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-gray-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galleria" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Galleria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((src) => (
              <div
                key={src}
                className="relative aspect-[3/2] rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Ny-Bygg työnäyte"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="ota-yhteytta" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ota yhteyttä
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Kiitos viestistäsi! Otamme yhteyttä pian.");
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nimi
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sähköposti
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Aihe
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Viesti
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0cc0df] focus:border-transparent outline-none resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0cc0df] hover:bg-[#0aa8c4] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Lähetä viesti
            </button>
          </form>
          <p className="text-center mt-6 text-gray-600">
            Tai lähetä sähköpostia:{" "}
            <a
              href="mailto:info@ny-bygg.fi"
              className="text-[#0cc0df] hover:underline"
            >
              info@ny-bygg.fi
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-white">Ny-Bygg</p>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
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
            &copy; {new Date().getFullYear()} Ny-Bygg. Kaikki oikeudet
            pidätetään.
          </p>
        </div>
      </footer>
    </>
  );
}
