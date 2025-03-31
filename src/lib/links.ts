import {
  FaBluesky,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaLastfm,
  FaRegEnvelope,
} from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

export const Links = [
  // { href: "/blog", label: "Blog" },
  { href: "https://opium.bio/k", label: "Opium" },
  { href: "/archium", label: "Archium" },
  { href: "https://github.com/q4ow/slop.sh", label: "Source", external: true },
];

export const Images = [
  "/mozart/image1.jpg",
  "/mozart/image2.jpg",
  "/mozart/image3.jpg",
  "/mozart/image4.jpg",
  "/mozart/image7.jpg",
  "/mozart/image8.jpg",
  "/mozart/image9.jpg",
  "/mozart/image10.jpg",
  "/mozart/image11.jpg",
  "/mozart/image12.jpg",
  "/mozart/image13.jpg",
  "/mozart/image14.jpg",
  "/mozart/image15.jpg",
  "/mozart/image16.jpg",
];

export const SocialLinks = [
  { icon: FaGithub, href: "/github", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com/_keirandev", label: "Twitter" },
  {
    icon: FaDiscord,
    href: "https://discord.com/users/1230319937155760131",
    label: "Discord",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@KeiranScript",
    label: "YouTube",
  },
  {
    icon: FaBluesky,
    href: "https://bsky.app/profile/keiran.cc",
    label: "Bluesky",
  },
  {
    icon: FaLastfm,
    href: "https://www.last.fm/user/Kuuichi2",
    label: "Last.fm",
  },
  {
    icon: SiBuymeacoffee,
    href: "https://www.buymeacoffee.com/keiran",
    label: "Buy me a coffee",
  },
  { icon: FaRegEnvelope, href: "mailto:hi@slop.sh", label: "Email" },
];

export const redirectLinks: Record<string, string> = {
  github: "https://github.com/q4ow",
  discord: "https://discord.com/users/1230319937155760131",
  discord2: "https://discord.com/users/1353861908427702284",
  namemc: "https://namemc.com/profile/keirancc.1",
  lastfm: "https://www.last.fm/user/Kuuichi2",
}
