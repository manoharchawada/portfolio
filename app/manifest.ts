import type { MetadataRoute } from "next";
import { profile } from "@/data/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name.split(" ")[0],
    description:
      "Experienced React Native and Full Stack Developer with 3+ years of experience building scalable mobile and web applications using React Native, React.js, Node.js, Express.js, MongoDB, Firebase, AWS, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080c",
    theme_color: "#07080c",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
