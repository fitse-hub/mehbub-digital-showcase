import { Network, ShieldCheck, Radar, MonitorPlay, Wrench, Video, ClipboardCheck, Code2, Cctv, Cpu, type LucideIcon } from "lucide-react";
import datacenterAsset from "@/assets/datacenter.jpg.asset.json";
import cyberAsset from "@/assets/cybersecurity-assessment.jpg.asset.json";
import socOpsAsset from "@/assets/soc-operations.jpg.asset.json";
import signageAsset from "@/assets/digital-signage-queue.jpg.asset.json";
import mspAsset from "@/assets/team-datacenter-engineer.jpg.asset.json";
import collabAsset from "@/assets/collaboration-meeting-room.jpg.asset.json";
import auditAsset from "@/assets/it-audit-compliance.jpg.asset.json";
import appDevAsset from "@/assets/custom-app-development.jpg.asset.json";
import cctvAsset from "@/assets/cctv-surveillance-control.jpg.asset.json";
import smartAsset from "@/assets/smart-building-control.jpg.asset.json";

export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  purpose: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  /** Tailwind object-position class when the default center crop cuts the subject. */
  imagePosition?: string;
  audience: string[];
  challenges: string[];
  components: { name: string; text: string }[];
  outcomes: string[];
  considerations: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "network-data-center", num: "01", title: "Network & Data Center Architecture", icon: Network, image: datacenterAsset.url,
    imageAlt: "Aisle of server racks in a modern data center",
    audience: ["Banks & financial institutions", "Universities & campuses", "Government agencies", "Enterprises running on-premise data centers"],
    short: "Resilient, scalable networks and data centers for critical operations.",
    purpose: "Build resilient, secure, scalable and high-performance network and data center environments that support critical business operations — combining network design, infrastructure deployment, virtualization and security considerations.",
    challenges: ["Connectivity that cannot keep up with demanding workloads", "Disorganized racks, cabling and equipment that are hard to manage", "Infrastructure that cannot scale with the organization", "Disruption caused by poorly planned deployments"],
    components: [
      { name: "Data Center Design and Deployment", text: "Rack organization, equipment layout, cooling considerations, power and infrastructure planning, and scalability." },
      { name: "Network Virtualization", text: "Virtual networking to improve flexibility, resource utilization and support for demanding corporate workloads." },
      { name: "Structured Cabling and Switching", text: "Structured cabling and switching infrastructure for reliable, high-speed connectivity." },
      { name: "Enterprise Network Infrastructure", text: "Networks for organizations with demanding connectivity, availability and security requirements." },
      { name: "Infrastructure Integration", text: "Network, data center, wireless and security components integrated into one coherent operating environment." },
    ],
    outcomes: ["Reliable connectivity and improved network performance", "Scalable infrastructure that grows with requirements", "Better infrastructure organization and manageability", "Reduced operational disruption"],
    considerations: "Power, cooling and physical layout are planned alongside the logical network design, so capacity growth does not require re-architecture.",
    related: ["cybersecurity", "managed-it-services", "electronic-security"],
  },
  {
    slug: "cybersecurity", num: "02", title: "Cybersecurity Solutions", icon: ShieldCheck, image: cyberAsset.url,
    imageAlt: "Security analyst reviewing a network threat map and code on two monitors",
    audience: ["Financial services", "Government & public sector", "Telecom & utilities", "Organizations handling sensitive data"],
    short: "Proactive assessment, threat analysis and layered access protection.",
    purpose: "Identify, reduce and manage cyber risks through proactive security assessment, threat analysis and layered access protection — testing defenses against realistic attack scenarios rather than relying only on traditional antivirus tools.",
    challenges: ["Vulnerabilities and misconfigurations discovered only after exploitation", "Broad, implicit trust between users, devices and systems", "Limited visibility into real security exposure", "Unclear priorities for remediation"],
    components: [
      { name: "Threat Simulation and Intelligence", text: "Assess infrastructure against relevant attack techniques and threat scenarios to find weaknesses before they are exploited." },
      { name: "Backend Infrastructure Analysis", text: "Review network-connected systems, configurations and components for weaknesses and unauthorized access paths." },
      { name: "Zero-Trust Architecture", text: "Identity- and device-aware verification, least-privilege access and continuous access evaluation." },
      { name: "Security Assessment", text: "Examine security controls, exposure and weaknesses across relevant systems." },
      { name: "Security Recommendations", text: "Prioritized remediation guidance based on assessment findings." },
    ],
    outcomes: ["Earlier identification of vulnerabilities", "Stronger access control and reduced attack surface", "Better visibility into security risks", "A more resilient security posture"],
    considerations: "Testing methods, scope, authorization and deliverables are agreed in writing before any assessment or simulation begins.",
    related: ["managed-security", "service-compliance", "network-data-center"],
  },
  {
    slug: "managed-security", num: "03", title: "Managed Security Services", icon: Radar, image: socOpsAsset.url,
    imageAlt: "Analysts monitoring security dashboards in an operations center",
    audience: ["Organizations without an in-house SOC", "Regulated industries", "Multi-site enterprises"],
    short: "Continuous oversight, detection and incident response.",
    purpose: "Provide continuous oversight of digital environments and support timely detection of, and response to, security incidents.",
    challenges: ["Suspicious activity that goes unnoticed in logs", "Ad-hoc, unstructured incident handling", "Unpatched vulnerabilities accumulating over time", "Little ongoing visibility for security governance"],
    components: [
      { name: "Security Operations Center (SOC)", text: "Monitor relevant network activity, system logs and security events for suspicious behavior." },
      { name: "Incident Response", text: "Support investigation, containment and recovery when a security incident occurs." },
      { name: "Vulnerability Management", text: "Identify vulnerabilities and coordinate remediation, including appropriate patching." },
      { name: "Security Monitoring", text: "Maintain visibility into agreed systems and security signals." },
    ],
    outcomes: ["Improved detection of suspicious activity", "More organized incident handling", "Ongoing visibility into security risks", "Better support for security governance"],
    considerations: "Monitoring coverage, response times, operating hours and escalation paths are defined in the applicable service agreement.",
    related: ["cybersecurity", "managed-it-services", "service-compliance"],
  },
  {
    slug: "digital-signage-qms", num: "04", title: "Digital Signage & Queue Management", icon: MonitorPlay, image: signageAsset.url,
    imageAlt: "Bank service hall with a queue ticket kiosk and queue display screens",
    audience: ["Banks", "Public-service offices", "Hospitals & clinics", "Customer service centers"],
    short: "Organized customer flow and centrally managed displays.",
    purpose: "Improve customer flow, waiting-area organization and communication in environments such as banks, public-service facilities and offices.",
    challenges: ["Crowded, disorganized waiting areas", "Inconsistent information shown across branches", "No central control over screens and content", "Little insight into service-flow performance"],
    components: [
      { name: "Smart Queue Machines", text: "Automated ticketing kiosks that issue queue tickets and organize customer flow." },
      { name: "Queue Management", text: "Structured service queues and orderly customer calling." },
      { name: "Dynamic Displays", text: "LCD, LED and projection technologies for announcements, information, images and video." },
      { name: "Centralized Content Management", text: "Manage and distribute display content through a central control interface." },
      { name: "Operational Analytics", text: "Where supported by the deployed solution, information about service activity and queue performance." },
    ],
    outcomes: ["More organized customer service", "Clearer communication with visitors", "Centralized control of digital displays", "Better visibility into service flow"],
    considerations: "Kiosk placement, display technology and content workflows are selected around the physical layout of each service hall.",
    related: ["smart-technology", "application-development", "collaboration"],
  },
  {
    slug: "managed-it-services", num: "05", title: "Managed IT Services (MSP)", icon: Wrench, image: mspAsset.url, imagePosition: "object-[50%_15%]",
    imageAlt: "Mehbub engineer with a laptop in a server room",
    audience: ["Small and mid-sized organizations", "Teams with limited internal IT", "Multi-branch businesses"],
    short: "An external IT operations partner for your systems.",
    purpose: "Act as an external IT support and operations partner, maintaining technology systems so internal teams can focus on their primary responsibilities.",
    challenges: ["Issues found only once they cause disruption", "Poor visibility into hardware and software assets", "Overloaded internal IT staff", "Reactive, unplanned upgrades"],
    components: [
      { name: "Proactive Maintenance", text: "Monitor and maintain agreed systems to identify issues before significant disruption." },
      { name: "IT Asset Management", text: "Track hardware and software assets, their status and lifecycle requirements." },
      { name: "Help Desk Support", text: "Technical assistance by phone, chat and on-site support where included." },
      { name: "Operational Support", text: "Routine IT administration and infrastructure upkeep." },
      { name: "Maintenance Planning", text: "Plan upgrades, replacements and preventive maintenance." },
    ],
    outcomes: ["More consistent IT operations", "Better visibility into IT assets", "Structured support and issue resolution", "Reduced burden on internal IT"],
    considerations: "Coverage and response commitments — including any 24/7 monitoring — are confirmed in a signed SLA.",
    related: ["managed-security", "network-data-center", "service-compliance"],
  },
  {
    slug: "collaboration", num: "06", title: "Collaboration Solutions", icon: Video, image: collabAsset.url,
    imageAlt: "Team in a meeting room on a video call with remote colleagues",
    audience: ["Corporate headquarters", "Distributed & remote teams", "Education & training institutions"],
    short: "Connected workplaces through unified communication.",
    purpose: "Help organizations create connected workplaces through integrated communication and collaboration technologies.",
    challenges: ["Fragmented voice, video and messaging tools", "Meeting rooms that are difficult to use", "Insecure remote access to work resources", "Teams split across locations"],
    components: [
      { name: "Unified Communications", text: "Voice, video, messaging and file sharing integrated into one coordinated environment." },
      { name: "Video Conferencing Infrastructure", text: "Meeting-room and remote-conferencing environments." },
      { name: "Remote Work Enablement", text: "Secure remote access, such as VPN and appropriate cloud-access tools." },
      { name: "Consultation and Deployment", text: "Needs assessment, solution selection, deployment and integration." },
    ],
    outcomes: ["Easier communication across teams and locations", "More effective meetings", "Secure access to work resources", "Better organization-wide collaboration"],
    considerations: "Room acoustics, network capacity and identity integration are assessed before any conferencing hardware is specified.",
    related: ["network-data-center", "cybersecurity", "managed-it-services"],
  },
  {
    slug: "service-compliance", num: "07", title: "Service, Audit & Compliance", icon: ClipboardCheck, image: auditAsset.url,
    imageAlt: "Two IT auditors reviewing a checklist beside a server rack",
    audience: ["Financial institutions", "Public sector bodies", "Organizations preparing for audits or ISO alignment"],
    short: "Assessment, governance and standards alignment.",
    purpose: "Help organizations assess technology environments, improve governance and align IT operations with applicable standards and obligations.",
    challenges: ["Unknown control gaps and IT risks", "Unclear data-protection and sector obligations", "Service expectations that are never formally defined", "Unprepared for external assessments"],
    components: [
      { name: "IT Audit and Assessment", text: "Evaluate systems, configurations, processes and controls against agreed criteria." },
      { name: "Regulatory Compliance Support", text: "Understand and address relevant data-protection, security and sector requirements." },
      { name: "Standards Alignment", text: "Support toward relevant international standards, including ISO-related requirements where applicable." },
      { name: "SLA Management", text: "Define and monitor service levels, performance measures and support commitments." },
      { name: "Recommendations and Reporting", text: "Documented findings, risks and corrective actions." },
    ],
    outcomes: ["Better understanding of IT risks", "More structured technology governance", "Clearer service accountability", "Improved readiness for assessments"],
    considerations: "Advisory work supports readiness; certification and regulatory status require the relevant independent or authorized assessment.",
    related: ["cybersecurity", "managed-security", "managed-it-services"],
  },
  {
    slug: "application-development", num: "08", title: "Custom Application Development", icon: Code2, image: appDevAsset.url,
    imageAlt: "Developers reviewing a business dashboard and code on large monitors",
    audience: ["Organizations with unique workflows", "Education institutions", "Businesses integrating ERP or CRM"],
    short: "Software built around your processes and systems.",
    purpose: "Design and develop software around an organization's processes, requirements and existing technology environment.",
    challenges: ["Off-the-shelf tools that force unsuitable workflows", "Disconnected systems and duplicated data entry", "Interfaces users struggle to adopt", "Applications with no maintenance path"],
    components: [
      { name: "Custom Business Logic", text: "Software that reflects the client's operational workflows and business rules." },
      { name: "Interoperability", text: "Integration with existing platforms, including ERP and CRM, where technically feasible." },
      { name: "Requirements Gathering", text: "User needs, business processes, functional requirements and constraints." },
      { name: "UI/UX Design", text: "Usable interfaces and workflows for the target users." },
      { name: "Full-Cycle Development", text: "Development, testing, deployment and ongoing maintenance." },
    ],
    outcomes: ["Software aligned with real processes", "Less dependence on unsuitable workflows", "Better integration with existing systems", "A maintainable application lifecycle"],
    considerations: "Integration points and data ownership are mapped during requirements, before interface design begins.",
    related: ["digital-signage-qms", "service-compliance", "smart-technology"],
  },
  {
    slug: "electronic-security", num: "09", title: "Electronic Security Systems", icon: Cctv, image: cctvAsset.url,
    imageAlt: "Operator monitoring a video wall of campus security camera feeds",
    audience: ["University & school campuses", "Government facilities", "Commercial & industrial premises"],
    short: "Integrated electronic security and situational awareness.",
    purpose: "Strengthen physical security and situational awareness through integrated electronic security technologies — including centralized CCTV surveillance, as delivered across the Wollo University campuses.",
    challenges: ["Isolated cameras with no central view", "Large, multi-site premises that are hard to oversee", "Security systems disconnected from the wider ICT network"],
    components: [
      { name: "Centralized CCTV Surveillance", text: "Surveillance consolidated into a central environment, as delivered in the Wollo University project." },
      { name: "Network Integration", text: "Electronic security designed as part of the wider ICT infrastructure rather than a standalone system." },
    ],
    outcomes: ["Centralized oversight of premises", "Security integrated with core infrastructure", "Better situational awareness across sites"],
    considerations: "The full catalogue for this service — such as access control or intrusion detection — is scoped directly with our team for each project.",
    related: ["network-data-center", "smart-technology", "managed-security"],
  },
  {
    slug: "smart-technology", num: "10", title: "Smart Technology Solutions (Smart X)", icon: Cpu, image: smartAsset.url,
    imageAlt: "Smart office corridor with a wall control panel for lighting, climate and access",
    audience: ["City & municipal projects", "Corporate offices", "Residential developments"],
    short: "Connected, efficiently managed smart environments.",
    purpose: "Deliver smart technology solutions for connected and more efficiently managed environments — across smart city, smart home and smart office settings.",
    challenges: ["Building systems that operate in isolation", "Manual control of environments that could be automated", "No unified view across connected devices"],
    components: [
      { name: "Smart City", text: "Connected technology for urban and public environments." },
      { name: "Smart Office", text: "Connected, efficiently managed workplaces." },
      { name: "Smart Home", text: "Connected residential environments." },
    ],
    outcomes: ["More connected environments", "More efficient management", "A foundation for further automation"],
    considerations: "Platforms, protocols and integrations are defined with our team for each environment before any technical commitment.",
    related: ["electronic-security", "digital-signage-qms", "network-data-center"],
  },
];

export const deliveryProcess = [
  { step: "01", title: "Assess", text: "Understand your environment, requirements, constraints and priorities." },
  { step: "02", title: "Design", text: "Define the architecture, scope and a clear implementation plan." },
  { step: "03", title: "Deploy", text: "Install, configure, integrate and test with minimal disruption." },
  { step: "04", title: "Support", text: "Hand over documentation, train your team and provide ongoing support." },
];

export const servicesPage = {
  eyebrow: "Services",
  title: "Technology Infrastructure. Intelligent Solutions. Enterprise Excellence.",
  intro: "We design, deploy, integrate, and support technology systems that help organizations operate securely and efficiently.",
  listLabel: "All services",
  processLabel: "How we deliver",
  processTitle: "One clear method, from first assessment to ongoing support.",
};

export const serviceDetail = {
  sections: [
    { id: "challenges", label: "Challenges", title: "What this service solves" },
    { id: "capabilities", label: "Capabilities", title: "What's included" },
    { id: "approach", label: "Approach", title: "How we deliver it" },
    { id: "outcomes", label: "Outcomes", title: "What you can expect" },
    { id: "audience", label: "Who it's for", title: "Well suited for" },
  ],
  primaryCta: "Discuss this service",
  secondaryCta: "All services",
  onThisPage: "On this page",
  asideTitle: "Planning a project?",
  asideText: "Talk to an engineer about your requirements.",
  asideCta: "Contact us",
  noteLabel: "Implementation note",
  engagement: "Scoped per project",
  relatedLabel: "Related services",
  relatedTitle: "Often delivered together",
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);
