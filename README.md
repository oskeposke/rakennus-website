# Ny-Bygg — Rakennus Website

A single-page website for Ny-Bygg, a Finnish building contractor based in Raseborg. Built with Next.js and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Swapping Photos and Text

### Images

All images are in `public/images/`. To replace them:

1. Drop your new images into `public/images/`
2. Update the references in `src/app/page.tsx`:
   - **Hero image**: change the `src` in the Hero `<Image>` component (~line 130)
   - **Service cards**: update the `image` field in the `SERVICES` array (~line 14)
   - **Gallery**: update the `GALLERY_IMAGES` array (~line 56)

### Text Content

All text is defined at the top of `src/app/page.tsx`:

- **Navigation links**: `NAV_LINKS` array
- **Service descriptions**: `SERVICES` array — edit `category`, `title`, and `description`
- **Testimonials**: `TESTIMONIALS` array — edit `quote` and `name`
- **Hero tagline**: inside the Hero `<section>` JSX
- **Contact email**: search for `info@ny-bygg.fi` and replace

### Colors

The accent color (`#0cc0df`) is used inline throughout the components. Search and replace to change the brand color.

## Deployment

```bash
vercel --prod
```

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript
