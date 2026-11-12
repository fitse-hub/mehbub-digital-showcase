import {
  DatabaseBackup, FlaskConical, Gauge, Lock, RadioTower, Rocket, Server, ShieldCheck, Target, TrendingUp, Users, Zap, type LucideIcon,
} from "lucide-react";
import teamGroup from "@/assets/team-group.jpg.asset.json";
import teamDatacenter from "@/assets/team-datacenter-engineer.jpg.asset.json";
import teamField from "@/assets/team-field-engineer.jpg.asset.json";

export const aboutImages = {
  team: { src: teamGroup.url, alt: "The Mehbub Technologies team in branded polo shirts" },
  datacenter: { src: teamDatacenter.url, alt: "Mehbub engineer with a laptop in a data center aisle" },
  field: { src: teamField.url, alt: "Mehbub field engineer in safety gear on an installation site" },
};

export const aboutHero = {
  eyebrow: "Company",
  title: "17+ Years of Engineering Excellence.",
  intro:
    "Established in 2009 G.C., Mehbub General Trading PLC (Mehbub Technologies) is an experienced ICT solutions provider delivering reliable, scalable, and enterprise-grade technology solutions.",
};

export const aboutStats = [
  { value: "17+", label: "Years in ICT" },
  { value: "2009", label: "Established (G.C.)" },
  { value: "9", label: "Core service areas" },
  { value: "24/7", label: "Support availability" },
];

export const whoWeAre = {
  title: "Who We Are",
  paragraphs: [
    "With more than 17 years of industry experience, we combine deep technical expertise, practical operational knowledge, and a results-driven approach to help organizations address complex technology challenges.",
    "We specialize in designing, implementing, and supporting end-to-end technology solutions tailored to modern business requirements. Our expertise spans IT infrastructure, cybersecurity, enterprise applications, digital communication, and smart technology solutions.",
  ],
  areasTitle: "Our Core Service Areas",
  areas: [
    { label: "Network & Data Center Solutions", slug: "network-data-center" },
    { label: "Cybersecurity Solutions", slug: "cybersecurity" },
    { label: "Digital Signage & Queue Management Systems", slug: "digital-signage-qms" },
    { label: "Electronic Security Systems", slug: "electronic-security" },
    { label: "Collaboration Solutions", slug: "collaboration" },
    { label: "Managed IT Services", slug: "managed-it-services" },
    { label: "Service, Audit & Compliance", slug: "service-compliance" },
    { label: "Custom Application Development", slug: "application-development" },
    { label: "Smart Technology Solutions (Smart X)", slug: "smart-technology" },
  ],
};

export const coreValues = [
  { name: "Integrity", text: "We uphold the highest standards of honesty, transparency, and accountability. We honor our commitments and build lasting relationships based on trust and mutual respect." },
  { name: "Teamwork", text: "We believe in the power of collaboration. We foster an inclusive environment where every individual is respected, valued, and empowered to contribute toward shared success." },
  { name: "Creativity", text: "We embrace innovation, curiosity, and forward-thinking. We continuously explore new ideas and technologies to develop impactful, practical, and future-ready solutions." },
];

export const strength: { intro: string; outro: string; items: { title: string; text: string; icon: LucideIcon }[] } = {
  intro:
    "At Mehbub Technologies, our capabilities are supported by a strong and reliable technical infrastructure designed to meet complex and evolving technology demands.",
  outro:
    "These capabilities enable us to deliver technology solutions with a strong focus on reliability, security, scalability, and performance.",
  items: [
    { title: "Advanced Technology Infrastructure", text: "Modern, high-performance hardware and properly licensed software to support reliable enterprise operations.", icon: Server },
    { title: "Secure System Architecture", text: "Controlled access environments and security-focused infrastructure designed to protect critical systems and information.", icon: Lock },
    { title: "Advanced Testing Environments", text: "Dedicated testing and deployment environments that support quality, reliability, and operational readiness.", icon: FlaskConical },
    { title: "Reliable Communication Infrastructure", text: "Dependable communication systems that enable efficient connectivity and collaboration.", icon: RadioTower },
    { title: "Skilled Technical Teams", text: "Dedicated, experienced, and scalable technical professionals capable of handling diverse technology requirements.", icon: Users },
    { title: "Data Protection & Redundancy", text: "Backup and redundancy systems designed to improve data availability, resilience, and business continuity.", icon: DatabaseBackup },
  ],
};

export const experience = {
  title: "Our Experience",
  paragraphs: [
    "With more than 17 years of experience in the ICT industry, we understand not only our clients' technical requirements but also the operational challenges and expectations of the people and organizations they serve.",
    "This understanding enables us to develop practical, reliable, and forward-looking solutions that address real business needs.",
    "Throughout our journey, we have remained committed to advancing technology standards and introducing innovative approaches across the ICT and cybersecurity sectors.",
  ],
  principlesIntro: "Every solution we deliver is guided by three essential principles:",
  principles: [
    { icon: Zap as LucideIcon, title: "Efficiency", text: "Improving business processes and making technology work more effectively." },
    { icon: ShieldCheck as LucideIcon, title: "Security", text: "Protecting systems, infrastructure, and critical information through reliable security practices." },
    { icon: Target as LucideIcon, title: "Business Value", text: "Delivering solutions that address real challenges and contribute to measurable organizational goals." },
  ],
  outro:
    "Our experience, technical capabilities, and commitment to continuous innovation position us as a reliable technology partner for organizations navigating an increasingly digital world.",
};

export const deliver: { intro: string; lead: string; items: { title: string; text: string; icon: LucideIcon }[] } = {
  intro:
    "At Mehbub Technologies, we don't simply provide technology. We deliver value-driven solutions that help organizations strengthen their operations, overcome challenges, and achieve sustainable growth.",
  lead: "Our solutions empower businesses to:",
  items: [
    { title: "Improve Operational Efficiency", text: "Optimize processes, streamline workflows, and improve productivity through intelligent technology solutions.", icon: Gauge },
    { title: "Enhance Security & Reliability", text: "Strengthen infrastructure, protect critical information, and establish dependable technology environments.", icon: ShieldCheck },
    { title: "Scale with Confidence", text: "Build flexible and scalable systems that adapt to changing business requirements and future growth.", icon: TrendingUp },
    { title: "Stay Ahead Through Innovation", text: "Adopt emerging technologies and modern digital solutions to remain competitive in a rapidly evolving technological landscape.", icon: Rocket },
  ],
};

export const commitment = {
  lines: ["Engineering reliable technology.", "Securing digital operations.", "Empowering business growth."],
  text: "At Mehbub Technologies, we are committed to building lasting technology partnerships and delivering solutions that create meaningful, long-term value for our clients.",
};

