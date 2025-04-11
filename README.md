# Cloudflare Next.js Static

A starter template for building a static site with Next.js and Cloudflare Pages.

Sponsored by [Formscale](https://formscale.com).

## Included

- Next.js
- TypeScript
- ESLint
- Prettier
- Shadcn
- Tailwind CSS

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Formscale/cloudflare-nextjs-static.git
```

Install dependencies:

```bash
pnpm install
```

Set a site name, name, and branch name in the `src/constants/config.ts` file.

```ts
const config = {
  SITE_NAME: "Cloudflare Next.js Static",
  NAME: "nextjs-static",
  MAIN_BRANCH: "master",
} as const;

export default config;
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the page.

## Add Custom Color

Add a custom color to the `globals.css` file.

```css
@theme inline {
  --color-custom: var(--color-custom); /* Change "custom" to your desired color name */
}

:root {
  --color-custom: #ffce00; /* Custom color */
}
```

Use the custom color in your components.

```tsx
<h1 className="text-custom-color">Custom Color</h1>
```

## Add Custom Font

### Using Google Fonts

Import any font from Google Fonts using the `next/font/google` package in the `layout.tsx` file.

```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

Add the font variables to the `html` tag.

```tsx
<html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  {/* ... */}
</html>
```

Update the `globals.css` file to include the font variables.

```css
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

Use the font variables in your components.

```tsx
<h1 className="font-sans">Custom Font</h1>
```

### Using Local Fonts

Add a font and its variants (in ttf format) to the `public/assets/fonts` folder.

Example:

```
/public/assets/fonts/
InstrumentSerif/
  /InstrumentSerif-Italic.ttf
  /InstrumentSerif-Regular.ttf
```

Add the font to the "layout.tsx" file.

```tsx
import localFont from "next/font/local";

const instrumentSerif = localFont({
  src: [
    {
      path: "../../public/assets/fonts/InstrumentSerif/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/InstrumentSerif/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
});
```

Add the font variable to the `html` tag.

```tsx
<html lang="en" className={`${instrumentSerif.variable} antialiased`}>
  {/* ... */}
</html>
```

Update the `globals.css` file to include the font variable.

```css
@theme inline {
  --font-serif: var(--font-instrument-serif);
}
```

Use the font variable in your components.

```tsx
<h1 className="font-serif">Custom Font</h1>
```

## Adding Metadata

### Changing favicon

Convert your favicon to a ico format and add it to the `src/app` folder. (Use [this tool](https://svg-to-png-jpeg-favicon.vercel.app/) to generate an ico file.)

```
/src/app/
favicon.ico
```

### Adding OG Image

Add an OG image to the `public/assets` folder in 1200x630px size, PNG format, and named `og-image.png`.

```
/public/assets/
og-image.png
```

### Changing metadata

Edit the `metadata.ts` file.

```ts
export const metadata: Metadata = {
  // Edit with your own metadata
  title: "Cloudflare Next.js Static",
  description: "A template for building a static site with Cloudflare Next.js",
  keywords: ["cloudflare", "next.js", "static"],
  robots: "index, follow",
  metadataBase: new URL("https://cloudflare-nextjs-static.com"),
  // ...
};
```

## Add Shadcn Components

```bash
pnpm dlx shadcn@latest add
```

Select the components you'd like to add by pressing "Space" to select/deselect or "a" to select all.

## Deploy on Cloudflare

```bash
pnpm run deploy
```
