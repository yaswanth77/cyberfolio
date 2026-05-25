// Single source of truth for portfolio content.
// Reconciled from portfolio.md (master CV + proof points), compiled 2026-05-25.

export const identity = {
  name: "Yaswanth Reddy Sunkara",
  shortName: "Yaswanth Sunkara",
  handle: "yaswanth",
  headline: "Security Engineer · Penetration Tester · AI Security Researcher",
  tagline:
    "Offensive Security · AppSec · Cloud · AI/LLM & Agentic-AI Security · SOC & Incident Response",
  heroLine: "I break and build things.",
  pitch:
    "Cybersecurity professional with 3+ years across penetration testing, application security, AI/LLM security, incident response, and vulnerability management spanning enterprise, government, healthcare, and Big Four environments. I find critical vulnerabilities, build tools that automate the boring parts of security, and red-team the new class of AI systems.",
  ctaLine: "Open to interesting problems, collaborations & good conversations.",
  email: "yaswanthrs007@gmail.com",
  github: "https://github.com/yaswanth77",
  githubHandle: "github.com/yaswanth77",
  linkedin: "https://linkedin.com/in/yaswanthreddysunkara",
  linkedinHandle: "linkedin.com/in/yaswanthreddysunkara",
};

export const stats = [
  { value: "3+", label: "Years in cybersecurity" },
  { value: "50+", label: "Penetration tests executed" },
  { value: "120+", label: "Vulnerabilities found & fixed" },
  { value: "1,000+", label: "Security alerts triaged" },
  { value: "3+", label: "Open-source security tools" },
  { value: "4.00", label: "M.Eng. GPA (UMD)" },
];

export const aboutText = [
  "I'm a cybersecurity professional with 3+ years of hands-on experience spanning offensive and defensive security. My work covers penetration testing, application security, AI/LLM security, incident response, threat detection, and vulnerability management across enterprise and hybrid cloud environments.",
  "I have a proven track record of uncovering and remediating critical vulnerabilities, leading incident response, and translating complex findings into actionable insights for both technical and executive stakeholders. I build custom tools and automation in Python and Bash to make security faster and more reliable.",
  "Most recently I've focused on the security of AI systems: red-teaming large language models, building adversarial datasets, and pentesting AI/LLM applications, while continuing offensive engagements as a security consultant.",
];

export const focusAreas = [
  {
    icon: "Crosshair",
    title: "Offensive Security & Pentesting",
    body: "Web, network, AD, mobile, and cloud pentesting. Burp Suite, Metasploit, Nessus, Nmap, Kali. CVE/CWE/CVSS/OWASP WSTG.",
  },
  {
    icon: "Code2",
    title: "Application Security",
    body: "Secure code review, SAST/DAST in the SDLC, OWASP Top 10, threat modeling, and API testing.",
  },
  {
    icon: "BrainCircuit",
    title: "AI / LLM Security",
    body: "Adversarial testing, prompt injection, jailbreak research, AI/LLM app pentesting, OWASP Top 10 for LLMs, MITRE ATLAS.",
  },
  {
    icon: "Cloud",
    title: "Cloud Security",
    body: "AWS IAM hardening, Zero Trust, misconfiguration auditing with Prowler, CloudTrail, and security groups.",
  },
  {
    icon: "Bug",
    title: "Bug Bounty & Vuln Research",
    body: "HackerOne, Bugcrowd, and Wordfence. CVE research and real-world responsible disclosure.",
  },
  {
    icon: "Radar",
    title: "SOC, IR & Forensics",
    body: "SIEM/EDR triage, malware analysis, disk and memory forensics, MITRE ATT&CK, and threat hunting.",
  },
];

export type Experience = {
  title: string;
  company: string;
  duration: string;
  current?: boolean;
  tag?: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    title: "Cybersecurity Consultant",
    company: "Gaming Laboratories International",
    duration: "Nov 2025 - Present",
    current: true,
    tag: "Offensive",
    points: [
      "Executed 10+ internal and external penetration tests across corporate networks and web applications, uncovering 5+ critical vulnerabilities (authentication bypasses, SQLi, XSS, RCE, IDOR) using Burp Suite and custom automation.",
      "Leveraged offensive tools (Burp Suite, Metasploit, Nessus, Nmap, Kali) across 15+ engagements, analyzing findings via CVE, CWE, CVSS, and OWASP WSTG to deliver remediation reports.",
      "Performed static analysis on Android apps with MobSF and APK Tool, identifying insecure data storage, hardcoded credentials, and cryptographic weaknesses.",
      "Led vulnerability management across 10+ engagements covering 30+ findings, and built internal Python/Bash tooling that cut manual effort by 40%.",
    ],
  },
  {
    title: "AI Security Researcher (Contract)",
    company: "Handshake",
    duration: "Nov 2025 - Mar 2026",
    current: true,
    tag: "AI Security",
    points: [
      "Conducted adversarial testing on large language models to identify jailbreak techniques and bypass scenarios across high-risk cybersecurity prompts.",
      "Designed multi-turn prompt strategies simulating real attacker behavior (roleplaying, context manipulation, progressive narrowing), exposing weaknesses in model safety mechanisms.",
      "Developed adversarial attacks (prompt injection, jailbreaking, context leakage, input manipulation) against AI-integrated product workflows.",
      "Built high-quality adversarial datasets to train models to detect and refuse harmful or dual-use requests, tracking OWASP Top 10 for LLMs, MITRE ATLAS, and tooling like Garak and ART.",
    ],
  },
  {
    title: "Cybersecurity Engineer",
    company: "Cybertrust America",
    duration: "May 2025 - Nov 2025",
    tag: "AI Security",
    points: [
      "Led penetration testing for an AI/LLM application, identifying 4+ high-impact vulnerabilities including Denial-of-Wallet, prompt injection, and access-control flaws.",
      "Performed static analysis on LLM components for prompt injection and data leakage, uncovering hardcoded keys and exfiltration vectors.",
      "Built an automated phishing detection pipeline evaluating 40+ signals (SPF/DKIM/DMARC) correlated with VirusTotal/AbuseIPDB intel to reduce false negatives.",
      "Implemented a Python risk engine (DOM inspection, client fingerprinting) for credential-harvesting detection, cutting MTTD by 60% through passive DNS infrastructure analysis.",
    ],
  },
  {
    title: "Graduate Teaching Assistant (INST346)",
    company: "University of Maryland",
    duration: "Aug 2024 - May 2025",
    tag: "Networking",
    points: [
      "Taught networking and security concepts to 500+ students across three lab sections (TCP/IP, routing, troubleshooting with Wireshark).",
      "Co-designed a 'mini Internet model' lab with enterprise networking gear and security labs on traffic analysis, VLAN segmentation, and firewall policies.",
    ],
  },
  {
    title: "Security Operations & Engineering Analyst",
    company: "City of Baltimore",
    duration: "Jun 2024 - Aug 2024",
    tag: "Blue / VM",
    points: [
      "Identified and remediated 70+ vulnerabilities on public-facing IPs, hardening posture and reducing attack surface.",
      "Performed vulnerability scanning and red-teaming on 100+ Linux/Windows systems with Nessus and Nmap, prioritizing by CVSS, asset criticality, and exploitability.",
      "Audited and remediated outdated configurations on 100+ servers/workstations, aligning with NIST CSF and CIS controls.",
      "Led security awareness sessions on phishing and social engineering, reducing user-related incidents by 30%.",
    ],
  },
  {
    title: "Incident Response Analyst / Security Engineer",
    company: "PwC",
    duration: "Jan 2022 - Aug 2023",
    tag: "Offensive / DFIR",
    points: [
      "Executed 20+ penetration tests across corporate networks, AWS, and web applications, uncovering 50+ vulnerabilities including SQLi, XSS, RCE, IDOR, and access-control flaws.",
      "Enhanced application security automation using SAST/DAST tooling in the SDLC, reducing detection-to-fix time by 30% and enabling faster, more secure code delivery.",
      "Monitored, triaged, and responded to 1,000+ alerts using SIEM (Splunk, QRadar), EDR (CrowdStrike Falcon), IDS/IPS, and firewall logs, escalating via MITRE ATT&CK and the Cyber Kill Chain.",
      "Performed host/network forensics and malware analysis on disk images, memory dumps, and PCAPs to uncover C2 activity, persistence, and lateral movement, extracting IoCs mapped to MITRE ATT&CK.",
    ],
  },
  {
    title: "Security Analyst",
    company: "Stryker",
    duration: "Jul 2021 - Dec 2021",
    tag: "AppSec",
    points: [
      "Conducted vulnerability assessments, penetration testing, and API testing; identified OWASP Top 10 issues and recommended secure-coding mitigations.",
      "Participated in secure code reviews and delivered remediation guidance aligned with secure SDLC principles.",
      "Researched threat intel and OSINT from 100+ sources to extract IoCs and map threat-actor TTPs, enhancing product security posture by 60%.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  repo?: string;
  featured?: boolean;
  ai?: boolean;
  icon: string;
  image?: string;
  caseStudy?: { challenge: string; approach: string; result: string };
};

export const projects: Project[] = [
  {
    title: "PhishLens",
    blurb:
      "Open-source email threat-analysis platform correlating 40+ risk signals across 8 threat-intel APIs (VirusTotal, AbuseIPDB, URLhaus, urlscan.io, PhishTank, ThreatFox, Hybrid Analysis, WHOIS/DNS) at once. Adds SPF/DKIM/DMARC/ARC/BIMI validation and an LLM layer for content scoring. Cuts manual email investigation from 30 minutes to 60 seconds.",
    stack: ["TypeScript", "Python", "Flask", "React", "Docker", "LLM"],
    repo: "https://github.com/yaswanth77/safe-mail-vision",
    featured: true,
    ai: true,
    icon: "ScanSearch",
    caseStudy: {
      challenge:
        "Modern phishing slips past Google and Microsoft gateways, and analysts burn ~30 minutes manually checking each suspicious email across a dozen tools.",
      approach:
        "Fan a single email out across 8 threat-intel APIs and 40+ signals in parallel, validate SPF/DKIM/DMARC/ARC/BIMI, run domain-age analysis, and layer an LLM for content scoring.",
      result:
        "Triage drops from 30 minutes to ~60 seconds with zero data retention, catching BEC and zero-day infrastructure that static gateways miss.",
    },
  },
  {
    title: "ReconX",
    blurb:
      "AI-powered 16-stage automated reconnaissance orchestrator for bug-bounty hunters and pentesters. AI generates subdomain/directory candidates from discovered tech stacks, selects Nuclei templates, scores parameters by injection risk, and triages findings to kill false positives. Strict dedup, alive-gating, and scope enforcement at every stage.",
    stack: ["Python", "Ollama", "OpenAI", "Groq", "Nuclei", "Subfinder"],
    repo: "https://github.com/yaswanth77/ReconX",
    featured: true,
    ai: true,
    icon: "Radar",
    caseStudy: {
      challenge:
        "Static-wordlist recon is noisy and slow, and drowns bug-bounty hunters in false positives across large scopes.",
      approach:
        "A 16-stage orchestrator where AI generates context-aware subdomain and directory candidates from discovered tech stacks, selects relevant Nuclei templates, scores parameters by injection risk, and triages findings.",
      result:
        "Tighter scope enforcement and far fewer false positives, with Burp/JSONL/markdown/CSV outputs and Python-native fallbacks for zero external-tool dependency.",
    },
  },
  {
    title: "Honeypot+",
    blurb:
      "Lightweight honeypot emulating 30 services (HTTP(S), DNS) with optimized resource usage and easy deployment. Integrated Snort IDS for real-time attack detection with centralized web-portal log reporting.",
    stack: ["Python", "Snort", "Ubuntu", "VirtualBox"],
    repo: "https://github.com/yaswanth77/Honeypot",
    featured: true,
    icon: "ShieldAlert",
    image: "/cyberfolio/5-honeypot.jpg",
    caseStudy: {
      challenge:
        "Traditional honeypots are heavyweight, resource-hungry, and awkward to deploy for quick attack-surface monitoring.",
      approach:
        "A lightweight tool emulating 30 services (HTTP(S), DNS) with Snort IDS wired in and logs reported to a centralized web portal.",
      result:
        "Real-time attack detection with a minimal footprint and a deployment simple enough to stand up in minutes.",
    },
  },
  {
    title: "Cloud Security Hardening (AWS)",
    blurb:
      "Identified infrastructure gaps and proposed a new security architecture for a HIPAA-aligned healthcare app, mitigating 80% of misconfigurations. Hardened IAM policies (cut excessive permissions by 40%), audited security groups, and enforced Zero Trust with CloudTrail monitoring.",
    stack: ["AWS", "CloudFormation", "Prowler", "IAM", "S3"],
    icon: "Cloud",
    image: "/cyberfolio/4-cloud.jpg",
    caseStudy: {
      challenge:
        "A HIPAA-aligned healthcare app on AWS with sprawling IAM permissions and misconfigured network controls.",
      approach:
        "Audited the environment with Prowler and CloudTrail, redesigned the security architecture, and enforced least privilege and Zero Trust across IAM and security groups.",
      result:
        "Mitigated 80% of misconfigurations and cut excessive IAM permissions by 40%, with continuous CloudTrail monitoring.",
    },
  },
  {
    title: "PortMaster",
    blurb:
      "Custom Nmap/NSE-based scanner automating TCP/UDP scanning across 100+ services with Safe (passive) and Intrusive (active) modes. Granular post-scan follow-ups improved detection accuracy by 25% and cut manual enumeration effort by 40%.",
    stack: ["Python", "Nmap", "NSE"],
    icon: "Search",
    image: "/cyberfolio/1-portmaster.jpg",
    caseStudy: {
      challenge:
        "Manual Nmap enumeration across 100+ services is repetitive, slow, and inconsistent between engagements.",
      approach:
        "A custom NSE-driven scanner with Safe (passive) and Intrusive (active) modes plus granular, scriptable post-scan follow-ups.",
      result:
        "Cut manual enumeration effort by 40% and improved detection accuracy by 25% across scans.",
    },
  },
  {
    title: "Malware Forensics Investigation",
    blurb:
      "Full disk forensic analysis using Autopsy and Volatility with network traffic analysis in Wireshark. Identified infection vectors and extracted malware artifacts from a compromised system image.",
    stack: ["Autopsy", "Volatility", "Wireshark", "VeraCrypt"],
    icon: "Lock",
    image: "/cyberfolio/2-malware-forensics.jpg",
    caseStudy: {
      challenge:
        "A compromised system image hiding malware payloads inside encrypted containers.",
      approach:
        "Full disk and memory forensics with Autopsy and Volatility, network analysis of PCAPs in Wireshark, and VeraCrypt to reach the encrypted containers.",
      result:
        "Identified the initial infection vector and extracted and analyzed the malware artifacts and behavior.",
    },
  },
];

export const aiSecurity = [
  {
    icon: "Bot",
    title: "LLM Red-Teaming",
    org: "Handshake",
    body: "Adversarial testing of LLMs to discover jailbreak and bypass techniques across high-risk cybersecurity prompts, using multi-turn attack strategies that simulate real attacker behavior.",
  },
  {
    icon: "ScanSearch",
    title: "AI App Pentesting",
    org: "Cybertrust America",
    body: "Pentested an AI/LLM application: found Denial-of-Wallet, prompt injection, and access-control flaws; static analysis of LLM components for prompt injection and data leakage.",
  },
  {
    icon: "ShieldCheck",
    title: "AI Safety / Defensive",
    org: "Research",
    body: "Built adversarial datasets to train models to refuse harmful and dual-use requests, and risk-classified model outputs by actionability and real-world impact.",
  },
  {
    icon: "Library",
    title: "Frameworks & Tooling",
    org: "Methodology",
    body: "OWASP Top 10 for LLMs, MITRE ATLAS, and adversarial ML tooling: Foolbox, CleverHans, ART, and Garak.",
  },
];

export const bugBounty = {
  platforms: ["HackerOne", "Bugcrowd", "Wordfence"],
  points: [
    "Active across HackerOne, Bugcrowd, and Wordfence programs.",
    "CVE research and real-world responsible vulnerability disclosure.",
    "WordPress and plugin security auditing via Wordfence Intelligence.",
  ],
};

export const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "Bash", "SQL", "PHP", "JavaScript/TypeScript", "Java", "C", "HTML/CSS"],
  },
  {
    label: "Offensive / Pentest",
    items: ["Metasploit", "Burp Suite", "ZAP", "Nmap", "sqlmap", "BloodHound", "Mimikatz", "Responder", "Nikto", "Hydra", "Hashcat", "John the Ripper"],
  },
  {
    label: "Vulnerability / AppSec",
    items: ["Nessus", "Acunetix", "Semgrep", "SonarQube", "Veracode", "OWASP Top 10", "CVE/CWE/CVSS 3.1"],
  },
  {
    label: "AI Security",
    items: ["Prompt injection", "Jailbreak testing", "OWASP Top 10 for LLMs", "MITRE ATLAS", "Garak", "ART", "Foolbox", "CleverHans"],
  },
  {
    label: "Cloud",
    items: ["AWS IAM", "S3", "CloudTrail", "CloudFormation", "Prowler", "Zero Trust"],
  },
  {
    label: "SIEM / Forensics",
    items: ["Splunk", "Wireshark", "Autopsy", "IDA Pro", "Ghidra", "Volatility"],
  },
  {
    label: "Recon / OSINT",
    items: ["Subfinder", "httpx", "gau", "waybackurls", "ParamSpider", "Arjun", "theHarvester", "Nuclei", "Shodan"],
  },
  {
    label: "Frameworks & Other",
    items: ["MITRE ATT&CK", "Cyber Kill Chain", "Docker", "Playwright", "Active Directory", "Threat Modeling", "Reverse Engineering"],
  },
];

export const certifications = {
  achieved: [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council" },
    { name: "Junior Penetration Tester (eJPT)", issuer: "INE" },
    { name: "Practical Ethical Hacking (PEH)", issuer: "TCM Security" },
    { name: "CompTIA Security+", issuer: "CompTIA" },
    { name: "AWS Cloud Practitioner (CCP)", issuer: "AWS" },
  ],
  inProgress: [
    { name: "OSCP", issuer: "OffSec" },
    { name: "CDSA", issuer: "Hack The Box" },
    { name: "CBBH", issuer: "Hack The Box" },
  ],
};

export const education = [
  {
    degree: "M.Eng., Cybersecurity Engineering",
    school: "University of Maryland, College Park",
    duration: "Aug 2023 - May 2025",
    gpa: "4.00 / 4.00",
    coursework:
      "Hacking of C Programs & Unix Binaries, Cloud Security, Reverse Engineering, Digital Forensics, Incident Response, Cryptography.",
  },
  {
    degree: "B.Tech., Computer Science & Engineering",
    school: "Vellore Institute of Technology (VIT)",
    duration: "Jun 2018 - Jul 2022",
    gpa: "3.75 / 4.00",
    coursework: "Operating Systems, Information Security, Networks & Security Protocols, Cloud Computing.",
  },
];

export const publications = [
  {
    title: "Comprehensive Survey of Web Security Threats in 2024",
    authors: "Yaddala, M. N., & Sunkara, Y. R.",
    venue: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    year: 2024,
    link: "https://ijsrem.com/download/comprehensive-survey-of-web-security-threats-in-2024/",
    tags: ["Web Security", "Threat Detection", "XSS", "SQL Injection", "DDoS", "Cloud Security"],
  },
];

// How I operate: an engagement walked through phase by phase.
export const methodology = [
  {
    id: "recon",
    title: "Recon & Scoping",
    icon: "Radar",
    summary: "Map the target and agree the rules of engagement before touching anything.",
    points: [
      "Passive and active asset discovery, subdomain and tech-stack enumeration.",
      "Define scope, success criteria, and risk boundaries with stakeholders.",
    ],
    tools: ["Subfinder", "httpx", "theHarvester", "Shodan", "Nmap"],
  },
  {
    id: "enum",
    title: "Enumeration & Mapping",
    icon: "Network",
    summary: "Fingerprint services and map the full attack surface.",
    points: [
      "Service/version fingerprinting and content/parameter discovery.",
      "Build a mental model of trust boundaries and data flows.",
    ],
    tools: ["Nmap NSE", "gau", "waybackurls", "ParamSpider", "Burp Suite"],
  },
  {
    id: "analysis",
    title: "Vulnerability Analysis",
    icon: "ScanSearch",
    summary: "Combine automation with manual review against OWASP WSTG and Top 10.",
    points: [
      "Triage automated findings, then hunt the logic flaws scanners miss.",
      "SAST/DAST and secure code review across the SDLC.",
    ],
    tools: ["Burp Suite", "Nuclei", "Nessus", "Semgrep"],
  },
  {
    id: "exploit",
    title: "Exploitation & Impact",
    icon: "Crosshair",
    summary: "Safely prove real impact: from injection to access to AD and AI.",
    points: [
      "SQLi, XSS, RCE, IDOR, auth bypass, AD attacks, and LLM prompt injection.",
      "Demonstrate privilege escalation and business impact, not just theory.",
    ],
    tools: ["sqlmap", "Metasploit", "BloodHound", "Custom scripts"],
  },
  {
    id: "report",
    title: "Reporting & Remediation",
    icon: "FileText",
    summary: "Turn findings into clear, prioritized, fixable guidance.",
    points: [
      "CVSS-scored writeups for both technical and executive audiences.",
      "Concrete remediation steps and retesting to confirm the fix.",
    ],
    tools: ["CVSS 3.1", "CWE", "OWASP WSTG"],
  },
];

// Capability matrix. Levels: Expert | Proficient | Competent.
export const proficiency = [
  { domain: "Penetration Testing", level: "Expert" },
  { domain: "Web Application Security", level: "Expert" },
  { domain: "Vulnerability Assessment", level: "Expert" },
  { domain: "Security Automation (Python)", level: "Proficient" },
  { domain: "AI / LLM Security", level: "Proficient" },
  { domain: "Bug Bounty & Recon", level: "Proficient" },
  { domain: "Cloud Security (AWS)", level: "Proficient" },
  { domain: "Incident Response & DFIR", level: "Proficient" },
  { domain: "Active Directory & Network", level: "Proficient" },
  { domain: "Secure Code Review (SAST/DAST)", level: "Competent" },
  { domain: "Malware Analysis & RE", level: "Competent" },
  { domain: "Mobile (Android) Security", level: "Competent" },
] as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#approach", label: "Approach" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-security", label: "AI Security" },
  { href: "#skills", label: "Skills" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];
