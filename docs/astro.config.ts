import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SVDM",
      favicon: "/favicon.png",
      logo: {
        light: "./src/assets/svdm-logo.svg",
        dark: "./src/assets/svdm-logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/lilingxi01/svdm",
      },
      head: [
        // Add ICO favicon fallback for Safari.
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "256x256",
          },
        },
      ],
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Getting Started",
          autogenerate: { directory: "logistics" },
        },
        {
          label: "Usages",
          autogenerate: { directory: "usages" },
        },
      ],
    }),
  ],
});
