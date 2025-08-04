

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

// Updated experiences based on resume
const experiences = [
 {
    title: "Graduate Teaching and Research Assistant", // Removed course details
    company: "University of Maryland",
    location: "College Park, MD",
    duration: "Aug 2024 – Jun 2025",
    responsibilities: [
      "Led 10+ hands-on lab sessions on networking, computer hardware, and system architecture, bridging theoretical concepts with real-world applications.",
      "Developed and refined 5+ lab exercises in collaboration with faculty, creating instructional materials on networking fundamentals, OSI layers, and the TCP/IP model, ensuring coursework remains industry-relevant.",
      "Conducted live demonstrations using Raspberry Pi, Wireshark, and network simulations, enhancing students’ understanding of system architecture and networking principles.",
      "Mentored 50+ students, guiding them in understanding key networking protocols and IP addressing concepts, ensuring clarity in core networking principles.",
    ],
  },
  {
    title: "Security Operations and Engineering Analyst", // Removed tools
    company: "City of Baltimore",
    location: "Baltimore, USA",
    duration: "Jun 2024 – Aug 2024",
    responsibilities: [
      "Identified and remediated 70+ vulnerabilities on public-facing IPs, hardening security posture and reducing attack surface exposure.",
      "Performed vulnerability scanning and security assessments across 5+ subnets, using CVSS scoring to prioritize remediation by severity, exploitability, asset criticality, and industry best practices.",
      "Audited, prioritized, and remediated outdated configurations on 100+ servers and workstations, improving compliance with NIST CSF and CIS controls and strengthening endpoint security using Tenable Nessus. ",
      "Led security awareness for internal teams, educating on phishing detection, social engineering, incident reporting, and secure password practices, resulting in a 30% reduction in security incidents caused by human error. ",
    ],
  },
  {
    title: "Security Operations & Incident Response Analyst", // Removed frameworks
    company: "PwC",
    location: "Remote",
    duration: "Jan 2022 – Aug 2023",
    responsibilities: [
       "Monitored and triaged 1,000+ security alerts from SIEM, EDR, XDR, IDS/IPS, and firewalls to detect potential threats, escalating incidents using cyber threat frameworks including MITRE ATT&CK and the Cyber Kill Chain.",
       "Investigated and analyzed security events to determine false positives, detect suspicious activities, and report anomalies, resulting in a 30% improvement in overall security posture.",
       "Conducted log analysis, root cause investigations and threat data correlation to uncover attack patterns, blocked 100+ malicious IPs and strengthened SOC intrusion detection capabilities.",
       "Developed and fine-tuned detection rules, use cases, and SOC playbooks while leveraging SOAR tools for automated detection and response, reducing the attack surface by 25% through continuous threat monitoring.",
       "Executed host and network forensic investigations on compromised systems by analyzing disk images, memory dumps, and network traffic (PCAP) to uncover C2 communications, identify malicious artifacts, and support incident containment.",
       "Collaborated with cross-functional teams to investigate and contain over 20 security incidents, documenting findings and remediation steps to strengthen post-incident analysis and response.",
       "Conducted threat intelligence analysis using 100+ sources including news, blogs, and threat feeds to identify IOCs and map TTPs through pivot analysis, enhancing detection of emerging threats and evolving attack vectors.",
    ],
  },
  {
    title: "Security Engineer", // Removed tools/concepts
    company: "PwC",
    location: "Remote",
    duration: "Jan 2022 – Aug 2023", // Assuming same timeframe as user didn't specify otherwise
    responsibilities: [
      "Executed 20+ internal and external penetration tests across corporate networks, cloud platforms (AWS), and web applications, uncovering critical vulnerabilities and weaknesses that could lead to unauthorized access and data breaches. ",
      "Identified and reported 50+ critical web application flaws including SQL Injection, XSS, RCE, Command Injection, and IDOR, achieving an 85% success rate using Burp Suite, SQLmap, and custom scripts.",
      "Developed Python and Bash exploitation scripts, reducing manual testing effort by 40% and improving repeatability and reliability.",
      "Collaborated with cross-functional teams to identify potential weaknesses, prioritize and mitigate threats, and produce detailed reports with findings and remediation steps, enhancing security posture by 60% in alignment with OWASP Top 10. ",
      "Leveraged offensive security tools such as Burp Suite, Metasploit, Wireshark, and Kali Linux to assess enterprise networks, cloud environments, and web applications, discovering high-risk vulnerabilities across 20+ engagements. ",
    ],
  },
   { // Added Stryker Internship
    title: "Security Analyst",
    company: "Stryker",
    location: "Remote", // Removed /USA
    duration: "Jul 2021 – Dec 2021",
    responsibilities: [
      "Performed vulnerability assessments and API testing, identifying OWASP Top 10 issues, authentication bypasses, token leaks, and rate-limiting flaws, resulting in the remediation of critical vulnerabilities across enterprise applications. ",
      "Contributed to secure code reviews, recommending mitigation strategies aligned with best practices in secure development.",
      "Analyzed penetration test findings and prioritized vulnerabilities using CVE, CWE, and CVSS, delivering actionable technical reports and staying current with emerging threats and exploitation trends to guide mitigation strategies. ",
      "Performed front-line analysis using SIEM dashboards to identify and investigate log data for signs of malicious activity, providing timely escalation support to senior analysts. ",
      "Supported threat hunting activities using OSINT to uncover threats, detect anomalies, identify APTs, TTPs, and attack trends, improving incident response by 20%. ",
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
