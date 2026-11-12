import { Server, Cctv, Wifi, ShieldCheck, Building2, CheckCircle2, type LucideIcon } from "lucide-react";
import posterAsset from "@/assets/wollo-project-poster.jpg.asset.json";
import aisleAsset from "@/assets/wollo-data-center-aisle.jpg.asset.json";
import cctvAsset from "@/assets/wollo-cctv-control-room.jpg.asset.json";
import powerAsset from "@/assets/wollo-power-room.jpg.asset.json";
import inaugurationAsset from "@/assets/wollo-inauguration.jpg.asset.json";
import campusAsset from "@/assets/wollo-campus.jpg.asset.json";
import cablingAsset from "@/assets/wollo-network-cabling.jpg.asset.json";

export const wolloImages = {
  poster: posterAsset.url,
  aisle: aisleAsset.url,
  cctv: cctvAsset.url,
  power: powerAsset.url,
  inauguration: inaugurationAsset.url,
  campus: campusAsset.url,
  cabling: cablingAsset.url,
};

export const wolloProject = {
  eyebrow: "Case study · Higher education",
  title: "Wollo University Infrastructure Modernization",
  tagline: "Innovation Delivered. Excellence Proven.",
  intro:
    "Wollo University awarded Mehbub Technologies a major contract to design and build a complete ICT infrastructure across three campuses — Dessie, Kombolcha, and Tita. Officially inaugurated on June 27, 2026, this project stands as one of the most advanced university technology deployments in Ethiopia.",
  heroImage: { src: aisleAsset.url, alt: "Wollo University enterprise data center aisle with server racks", caption: "Enterprise data center" },
  facts: [
    { label: "Client", value: "Wollo University" },
    { label: "Campuses", value: "Dessie · Kombolcha · Tita" },
    { label: "Inaugurated", value: "27 June 2026" },
    { label: "Scope", value: "Design to commissioning" },
  ],
  highlights: [
    { icon: Server, label: "Enterprise Data Centers" },
    { icon: Cctv, label: "End-to-End CCTV" },
    { icon: Wifi, label: "Campus-Wide Wi-Fi" },
    { icon: ShieldCheck, label: "Secure ICT Infrastructure" },
    { icon: Building2, label: "Multi-Campus Deployment" },
    { icon: CheckCircle2, label: "Full Design-to-Commissioning" },
  ] as { icon: LucideIcon; label: string }[],
  story: [
    {
      label: "Challenge",
      text: "Wollo University needed a unified digital foundation to support three separate campuses. The existing setup lacked centralized security, reliable high-speed connectivity, and the enterprise-grade infrastructure required to support modern teaching, research, and administration at scale.",
    },
    {
      label: "Solution",
      text: "Mehbub Technologies designed and delivered a complete, integrated ICT ecosystem featuring modern enterprise data centers, centralized CCTV surveillance, campus-wide high-speed wireless coverage, and full systems integration — every component planned, installed, tested, and commissioned to work as one secure network.",
    },
    {
      label: "Outcome",
      text: "Upon completion, Wollo University gained a safer, faster, and more connected campus environment across all three sites. Students, faculty, and staff now benefit from seamless connectivity, centralized security monitoring, and infrastructure built to scale with the university’s future growth.",
    },
  ],
  poster: { src: posterAsset.url, alt: "Official Wollo University project poster showing the inauguration, data center, CCTV control room and campus" },
  gallery: [
    { src: cctvAsset.url, alt: "CCTV control room with a video wall of campus cameras", title: "Surveillance control room", text: "Centralized CCTV monitoring", className: "row-span-2" },
    { src: powerAsset.url, alt: "UPS and battery racks inside the data center", title: "Data center power", text: "UPS and battery systems", className: "row-span-2" },
    { src: inaugurationAsset.url, alt: "Speakers at the Wollo University inauguration ceremony", title: "Inauguration", text: "27 June 2026", className: "col-span-2", position: "50% 35%" },
    { src: cablingAsset.url, alt: "Structured network cabling and patch panels", title: "Structured cabling", text: "Network backbone", className: "" },
    { src: campusAsset.url, alt: "Wollo University campus buildings and grounds", title: "Campus", text: "Three connected sites", className: "" },
  ] as { src: string; alt: string; title: string; text: string; className: string; position?: string }[],
  services: [
    "Enterprise Data Center Design & Implementation",
    "Centralized CCTV Surveillance",
    "Campus-Wide Wireless Network Deployment",
    "ICT Infrastructure Integration",
    "Multi-Campus Project Management",
    "Testing & Commissioning",
  ],
  related: [
    { slug: "network-data-center", label: "Network & Data Center" },
    { slug: "electronic-security", label: "Electronic Security" },
  ],
};
