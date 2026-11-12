import { company } from "./company";
import { edu } from "./solutions";
import { wolloImages } from "./projects";
import eduAppLearnPlay from "@/assets/edu-app-learn-play.webp.asset.json";
import heroEducationalBanner from "@/assets/hero-educational-banner.webp.asset.json";
import teamAsset from "@/assets/mehbub-team-hero.webp.asset.json";
import datacenterAsset from "@/assets/datacenter.jpg.asset.json";
import socAsset from "@/assets/soc-operations.jpg.asset.json";
import wolloCampusAsset from "@/assets/wollo-university-campus.jpg.asset.json";
import cablingAsset from "@/assets/cabling.jpg.asset.json";

export const hero = {
  eyebrow: "Engineering the Digital Future",
  titleLead: "Transforming ideas into",
  titleAccent: "intelligent technology.",
  text: "Mehbub Technologies delivers intelligent ICT infrastructure, advanced cybersecurity, enterprise software, and future-ready digital solutions that empower organizations to operate, innovate, and grow.",
  primaryCta: "Explore Our Solutions",
  secondaryCta: "Talk to Our Experts",
  imageAlt: "Mehbub network engineer reviewing systems in a data center",
  stats: [
    { value: company.experience, label: "Years of experience" },
    { value: "10", label: "Integrated disciplines" },
    { value: company.hours.split(" ")[0], label: "Support availability" },
  ],
  highlight: { kicker: "Featured project", title: "Wollo University", text: "3 campuses modernized" },
};

export type HeroSlide = {
  image: string;
  alt: string;
  position: string;
  positionSm?: string;
  kicker: string;
  title: string;
};

export const heroSlides: HeroSlide[] = [
  { image: teamAsset.url, alt: "The Mehbub Technologies team", position: "center 30%", kicker: "Since 2009", title: "Engineering the digital future." },
  { image: datacenterAsset.url, alt: "Enterprise data center with server racks", position: "center", kicker: "Infrastructure", title: "Data centers built to scale." },
  { image: socAsset.url, alt: "Security operations center", position: "center 40%", kicker: "Cybersecurity", title: "Protection that never sleeps." },
  { image: cablingAsset.url, alt: "Structured network cabling", position: "center", kicker: "Networks", title: "Connected, everywhere." },
  { image: wolloCampusAsset.url, alt: "Wollo University campus", position: "center 60%", kicker: "Wollo University", title: "Three campuses. One network." },
  { image: heroEducationalBanner.url, alt: "Educational Super App — learn in 7 languages including Amharic, Afaan Oromoo and Tigrigna", position: "center", positionSm: "right center", kicker: "Educational Super App", title: "Learning that speaks their language." },
];

export const heroFeature = {
  kicker: "Educational Super App",
  title: "Learn in 7 languages",
  text: "Ethiopia's first in-house educational super app — built for children, parents and educators.",
  image: {
    src: eduAppLearnPlay.url,
    alt: "Educational Super App screens — choose an account and start learning and playing",
  },
  playStore: edu.playStore,
};

export const featuredProject = {
  eyebrow: "Featured project",
  title: "Wollo University Infrastructure Modernization",
  text: "Innovation delivered. Excellence proven. A complete ICT infrastructure designed and built across three university campuses — officially inaugurated on 27 June 2026.",
  campuses: ["Dessie", "Kombolcha", "Tita"],
  cta: "Read the case study",
  slides: [
    {
      label: "Data center",
      title: "Enterprise data centers",
      text: "Modern enterprise data centers designed and implemented to host the university's core systems, built to scale with future growth.",
      tags: ["Design", "Implementation", "Scalable"],
      image: wolloImages.aisle,
      alt: "Wollo University enterprise data center aisle with server racks",
    },
    {
      label: "Power",
      title: "Data center power",
      text: "UPS and battery systems installed inside the data center so core services stay online across all three campuses.",
      tags: ["UPS", "Battery racks", "Resilience"],
      image: wolloImages.power,
      alt: "UPS and battery racks inside the Wollo University data center",
    },
    {
      label: "Surveillance",
      title: "Centralized CCTV monitoring",
      text: "End-to-end CCTV consolidated into one control room, giving security teams a single view across Dessie, Kombolcha and Tita.",
      tags: ["End-to-end CCTV", "Video wall", "Central monitoring"],
      image: wolloImages.cctv,
      alt: "CCTV control room with a video wall of campus cameras",
    },
    {
      label: "Inauguration",
      title: "Handed over and inaugurated",
      text: "Data centers, CCTV and campus-wide Wi-Fi planned, installed, tested and commissioned — officially inaugurated on 27 June 2026.",
      tags: ["Campus-wide Wi-Fi", "Commissioning", "27 June 2026"],
      image: wolloImages.inauguration,
      alt: "Speakers at the Wollo University inauguration ceremony",
    },
  ],
};
