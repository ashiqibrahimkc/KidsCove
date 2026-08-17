import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kids covE School of Excellence",
    short_name: "Kids covE",
    description:
      "A nurturing Montessori & Primary school in Ozhukur, Malappuram, Kerala empowering young minds through curiosity, creativity, and compassion.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FF6B6B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
