

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

// Updated experiences based on resume
const experiences = [
 {
    title: "Graduate Teaching and Research Assistant", // Removed course details
    company: "University of Maryland",
    location: "College Park, MD",
    duration: "Jan 2025 – Present",
    responsibilities: [
      "Led 10+ hands-on lab sessions on networking and system architecture, bridging theoretical concepts with real-world applications.",
      "Developed and refined 5+ lab exercises in collaboration with faculty, creating instructional materials on networking fundamentals, OSI layers, and the TCP/IP model, ensuring coursework remains industry-relevant.",
      "Conducted live demonstrations using Raspberry Pi, Wireshark, & network simulations, enhancing students technical understanding.",
      "Mentored 50+ students on networking protocols, IP addressing and subnetting, ensuring clarity in core networking principles.",
    ],
  },
  {
    title: "Security Operations and Engineering Intern", // Removed tools
    company: "City of Baltimore",
    location: "Baltimore, USA",
    duration: "Jun 2024 – Aug 2024",
    responsibilities: [
      "Identified and remediated 70+ vulnerabilities on public-facing IPs, hardening security posture and reducing attack surface exposure.",
      "Conducted vulnerability scanning and assessment activities across 5+ subnets, integrating risk management to prioritize vulnerabilities by severity, age, and impact using CVSS scoring and internal risk assessment frameworks.",
      "Audited, prioritized, and remediated outdated system configurations across 100+ servers and workstations, improving compliance with NIST CSF and CIS benchmarks and strengthening endpoint security using Tenable Nessus.",
      "Led security awareness for internal teams, educating them on cyber threats, phishing detection, social engineering, incident reporting, and secure password management, resulting in a 30% reduction in security incidents caused by human error.",
    ],
  },
  {
    title: "Security Operations & Incident Response Analyst", // Removed frameworks
    company: "PwC",
    location: "Remote",
    duration: "Jan 2022 – Aug 2023",
    responsibilities: [
      "Monitored security alerts from SIEM, EDR, XDR, firewalls, and endpoint security tools to detect potential threats, and investigated over 1,000 alerts, escalating incidents using cyber threat frameworks such as MITRE ATT&CK and the Cyber Kill Chain.",
      "Investigated and analyzed security events, triaged alerts to determine false positives or escalation needs, identified suspicious activities, and tracked trends in security events, reporting unusual activities and improving security posture by 30%.",
      "Performed root cause analysis, real-time log analysis, and data correlation to identify attack patterns as part of intrusion detection efforts on IDS/IPS, detecting and blocking 100+ malicious IPs to prevent breaches and strengthen SOC defenses.",
      "Developed and fine-tuned detection rules, use cases, and security automations while enhancing SOC playbooks & response efficiency.",
      "Collaborated with cross-functional teams to investigate and contain security incidents, prioritizing and mitigating 50+ incidents while documenting and communicating findings in clear, concise reports with remediation details.",
    ],
  },
  {
    title: "Threat Detection & Forensic Analyst", // Removed tools/concepts
    company: "PwC",
    location: "Remote",
    duration: "Jan 2022 – Aug 2023", // Assuming same timeframe as user didn't specify otherwise
    responsibilities: [
      "Conducted threat intelligence analysis from over 100 sources, performing pivot analysis to identify Indicators of Compromise (IOCs), malicious artifacts, and Tactics, Techniques, and Procedures (TTPs) to support proactive threat detection.",
      "Led threat hunting activities to uncover threats, threat actors, vectors, APTs, attack trends, and cyber threat groups, leveraging OSINT to improve incident response and security performance by 20%.",
      "Collaborated with internal teams to investigate and contain incidents, using host/network forensics, log analysis, and malware triage with tools like Autopsy, FTK, and Wireshark.",
      "Executed in-depth forensic investigations on compromised systems, performing disk and memory analysis, and analyzing network traffic patterns to identify potential C2 communications, map malware behavior, and detect anomalies.",
      "Reduced attack surface by 25% through global threat landscape monitoring and automated detection and response using SOAR tools.",
      "Contributed to MISP threat sharing by providing emerging IOCs and delivering intelligence and forensic reports to 10+ stakeholders.",
    ],
  },
   { // Added Stryker Internship
    title: "Product Security Intern",
    company: "Stryker",
    location: "Remote", // Removed /USA
    duration: "Jul 2021 – Dec 2021",
    responsibilities: [
      "Performed vulnerability assessments and resolved OWASP Top 10 vulnerabilities in web applications using Burp Suite and Nessus.",
      "Evaluated penetration testing results, producing detailed reports and scoring security issues using CVE and CVSS methodologies.",
      "Assisted in source code reviews to ensure secure coding practices and recommend mitigations aligned with industry best practices.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 pl-8 before:absolute before:left-[-5px] before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-accent">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                    <CardTitle className="text-xl font-semibold mb-1 sm:mb-0">{exp.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{exp.duration}</CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground gap-2 pt-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.company} - {exp.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside space-y-1 pl-5 text-sm text-foreground/80">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
