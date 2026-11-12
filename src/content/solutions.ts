import {
  BrainCircuit, Cable, CreditCard, Languages, LayoutDashboard, MonitorSmartphone, SlidersHorizontal, TrendingUp, Workflow,
  type LucideIcon,
} from "lucide-react";
import eduAppLearnPlay from "@/assets/edu-app-learn-play.webp.asset.json";
import eduAppLanguages from "@/assets/edu-app-languages.webp.asset.json";
import erpDashboard from "@/assets/ai-erp-dashboard.jpg.asset.json";
import familyLearning from "@/assets/solution-family-learning.jpg.asset.json";
import businessTeam from "@/assets/solution-business-team.jpg.asset.json";

export type Feature = { title: string; text: string; icon: LucideIcon };

export const solutionsHero = {
  eyebrow: "Solutions",
  title: "Our Innovative Technology Solutions.",
  intro:
    "From transforming education to modernizing enterprise operations, Mehbub Technologies develops intelligent solutions that address real-world challenges.",
};

export const edu = {
  id: "educational-super-app",
  num: "01",
  name: "Educational Super App",
  title: "Empowering the Next Generation Through Smarter Learning.",
  lead: "Introducing Ethiopia's First In-House Educational Super App.",
  paragraphs: [
    "Transform the way children learn, grow, and connect. Developed by Mehbub Technologies, our Educational Super App brings children, parents, and educators together through a safe, interactive, and bilingual digital learning environment.",
    "Designed to make education more accessible, engaging, and connected, the platform creates a seamless experience that supports learning both inside and beyond the classroom.",
  ],
  audience: ["Children", "Parents", "Educators"],
  features: [
    { title: "Bilingual Learning", icon: Languages, text: "Support engaging educational experiences through bilingual learning, making digital education more accessible to children." },
    { title: "Parent Dashboard", icon: LayoutDashboard, text: "Give parents a dedicated platform to stay connected with their children's learning activities and educational progress." },
    { title: "Multi-Device Accessibility", icon: MonitorSmartphone, text: "Access the platform across supported devices, providing flexibility for children, parents, and educators." },
    { title: "Secure Payments", icon: CreditCard, text: "Enable convenient and secure payment experiences through integrated payment functionality." },
  ] satisfies Feature[],
  vision: "Building a connected educational ecosystem that brings families, learners, and educators closer through technology.",
  image: {
    src: eduAppLanguages.url,
    alt: "Educational Super App — learn in 7 languages including Amharic, Affan Oromoo and Tigrigna",
  },
  gallery: [
    { src: eduAppLearnPlay.url, alt: "Educational Super App account selection screen — Learn, Play, and Grow Together" },
    { src: eduAppLanguages.url, alt: "Educational Super App language screen — learn in 7 languages including Amharic, Affan Oromoo and Tigrigna" },
  ],
  playStore: {
    url: "https://play.google.com/store/apps/details?id=com.app.yeethiopialijoch&pcampaignid=web_share",
    eyebrow: "Get it on",
    label: "Google Play",
  },
  photo: { src: familyLearning.url, alt: "A mother and daughter learning together on a tablet at home" },
  cta: "Ask About the App",
};

export const erp = {
  id: "intelligent-erp",
  num: "02",
  name: "Intelligent Business Management (ERP)",
  shortName: "AI-Powered ERP",
  titleLines: ["Business Intelligence.", "Intelligent Automation.", "Complete Control."],
  lead: "Software That Adapts to Your Business, Not the Other Way Around.",
  tagline: "Every business operates differently. Your software should reflect that.",
  paragraphs: [
    "Mehbub Technologies introduces an intelligent Business Management (ERP) solution designed around your organization's unique processes, operational requirements, and growth objectives.",
    "Combining customizable business modules with integrated Artificial Intelligence capabilities, our ERP solution helps organizations make informed decisions, streamline operations, automate workflows, and optimize resources.",
  ],
  features: [
    { title: "Fully Customizable Modules", icon: SlidersHorizontal, text: "Configure business modules and operational workflows according to your organization's specific requirements, without being restricted by rigid, predefined processes." },
    { title: "AI-Driven Analytics & Reporting", icon: BrainCircuit, text: "Transform business data into meaningful insights through intelligent analytics, reporting, and AI-powered decision-support capabilities." },
    { title: "Seamless System Integration", icon: Cable, text: "Connect with existing business applications and enterprise systems to improve data consistency, streamline information exchange, and create a more connected operational environment." },
    { title: "Intelligent Workflow Automation", icon: Workflow, text: "Reduce repetitive manual tasks and improve operational efficiency through configurable workflows and automation capabilities." },
    { title: "Business Resource Optimization", icon: TrendingUp, text: "Support better resource planning, operational visibility, and informed business decisions." },
  ] satisfies Feature[],
  vision: "Empowering organizations with intelligent, adaptable, and connected business management technology that evolves alongside their needs.",
  image: { src: erpDashboard.url, alt: "AI-powered ERP dashboard with sales analytics, supply chain and financial forecasting" },
  photo: { src: businessTeam.url, alt: "Two business professionals reviewing analytics in a modern office" },
  cta: "Request an ERP Demo",
};

export const impact = {
  eyebrow: "Technology That Creates Impact",
  text: "From transforming education to modernizing enterprise operations, Mehbub Technologies develops intelligent solutions that address real-world challenges.",
  lines: ["Innovating Today.", "Empowering Tomorrow."],
};
