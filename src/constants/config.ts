const config = {
  SITE_NAME: "Cloudflare Next.js Template",
  SITE_DESCRIPTION: "A starter template for building a Next.js app with Cloudflare Pages.",
  NAME: "nextjs-template",
  MAIN_BRANCH: "master",
  HEADER: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
  FOOTER: [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Features", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Advertise", href: "#" },
        { name: "Privacy", href: "#" },
      ],
    },
  ],
  SOCIAL_LINKS: [
    {
      name: "twitter",
      url: "https://twitter.com/driselamri",
    },
    {
      name: "github",
      url: "https://github.com/dris-e",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/driselamri",
    },
  ],
} as const;

export default config;
