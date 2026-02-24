
It took me about seven hours to completely transform a dull-looking HTML and CSS website into a Next.js site. I may not have been the fastest, but I ensured the process was efficient and precise. I strictly used the same data and existing codebase, focusing only on transforming the structure and framework of the website without altering its core content.

Thank you to the Haxplore team for the opportunity and support.

# Kindway BioReZens ðŸ¦·

A modern, full-featured website for **Kindway BioReZens Medical Manufacturing** â€” a pioneering dental implant and biomaterials company based in India. This project is a complete migration of a static HTML/CSS website into a production-ready **Next.js** application.

ðŸŒ **Live Site:** [kindway-zeta.vercel.app](https://kindway-zeta.vercel.app)

---

## About the Project

Kindway BioReZens is a dental healthcare startup that designs and manufactures advanced dental implants, biomaterials, and surgical kits. Their platform also offers training workshops and medical camps for dental professionals across India.

This codebase represents a full framework migration from plain HTML/CSS to **Next.js 14 (App Router)**, with TypeScript and Tailwind CSS â€” preserving all original content while modernizing the architecture, performance, and developer experience.

**Key Stats:**
- 1500+ Workshops conducted
- 1160+ Dentists trained
- 1145+ Medical camps organized
- Operating since 2015

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Vercel](https://vercel.com) | Deployment & hosting |

---

## Project Structure

```
kindway/
â”œâ”€â”€ app/               # Next.js App Router pages & layouts
â”œâ”€â”€ components/        # Reusable UI components
â”œâ”€â”€ lib/               # Utility functions and helpers
â”œâ”€â”€ public/
â”‚   â””â”€â”€ images/        # Static image assets
â”œâ”€â”€ next.config.mjs    # Next.js configuration
â”œâ”€â”€ tailwind.config.ts # Tailwind CSS configuration
â””â”€â”€ tsconfig.json      # TypeScript configuration
```

---

## Pages

- **Home** â€” Hero, mission, vision, featured products & training overview
- **About** â€” Company story, founder profile (Dr. Rajesh Bansal, MDS, PhD)
- **Products** â€” Dental implants, bone grafts, surgical kits
- **Services** â€” Clinical and professional services
- **Training** â€” Workshop and course listings
- **Gallery** â€” Event and product gallery
- **Contact** â€” Contact form and details
- **Register** â€” Workshop booking

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
git clone https://github.com/Prajjwaldevops/kindway.git
cd kindway
npm install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push the repository to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure the build

For more details, see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Migration Notes

This project was migrated from a static HTML/CSS website to Next.js. The migration focused strictly on transforming the structure and framework â€” no content, copy, or design was altered. The process included:

- Converting static HTML pages to Next.js App Router page components
- Replacing inline CSS with Tailwind CSS utility classes
- Breaking the UI into reusable React components
- Optimizing images using `next/image`
- Adding TypeScript throughout for type safety

---

## Acknowledgements

Thanks to the **Haxplore team** for the opportunity and support during this migration challenge.

---

## License

This project is the intellectual property of **Kindway BioReZens Medical Manufacturing**. All rights reserved.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
