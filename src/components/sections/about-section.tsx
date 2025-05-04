import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Added CardDescription
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Wrench, Award, CheckCircle } from 'lucide-react';

// Updated Data based on resume
const education = [
  {
    degree: "Master of Engineering (M.Eng.) in Cybersecurity", // Updated degree name
    institution: "University of Maryland, College Park",
    years: "Aug 2023 – May 2025", // Updated dates
    gpa: "4.00 / 4.00", // Updated GPA format
    location: "College Park, MD", // Added location
    coursework: "Hacking of C Programs & Unix Binaries, Cloud Security, Reverse Engineering, Digital Forensics, and Incident Response", // Added coursework
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering", // Updated degree name
    institution: "Vellore Institute of Technology", // Removed (VIT) abbreviation for consistency
    years: "Jun 2018 – Jul 2022", // Updated dates
    gpa: "3.75 / 4.00", // Updated GPA format
    location: "Amaravati, AP", // Added location
    coursework: "Cryptography, Operating Systems, Information Security, Networks and Security Protocols, and Cloud Computing", // Added coursework
  },
];

// Updated Tools & Tech based on resume and existing list, consolidated and refined
const toolsTech = [
  "Programming (Python, Bash, SQL, Java, C, HTML, CSS)",
  "SIEM & Monitoring (Splunk, IBM QRadar, ArcSightESM, Securonix, Elastic Stack)",
  "EDR/XDR (Cortex XDR, CrowdStrike Falcon)",
  "Security Tools (RSA Archer, IBM X-Force, SolarWinds, ServiceNow, ITSM)",
  "Vulnerability Scanning & Assessment (Nessus, Qualys, OpenVAS, Nikto, Acunetix, BloodHound)",
  "Penetration Testing & Exploitation (Burp Suite, OWASP ZAP, Metasploit Framework, SQLmap, Nmap)",
  "Network Security & Recon (Wireshark, Shodan, Nmap, SolarWinds, Firewalls)",
  "Digital Forensics & Malware Analysis (Autopsy, Volatility, FTK Imager, IDA Pro, Ghidra, VeraCrypt)",
  "Password Cracking & Post-Exploitation (Hashcat, John the Ripper, Hydra, Mimikatz, Responder)",
  "Cloud Security (AWS)",
  "Threat Intelligence & Frameworks (MITRE ATT&CK, Cyber Kill Chain, CTI)",
  "Threat Analysis & Sandbox Tools (VirusTotal, urlscan.io, ANY.RUN)",
  "Compliance & Governance (NIST CSF, ISO 27001, OWASP Top 10, HIPAA, PCI DSS)",
  "Operating Systems (Windows, Kali Linux, Ubuntu, macOS, Android, REMnux, SIFT)",
  "Development & Productivity Tools (VS Code, Office 365)",
];

// Updated Certifications based on resume
const certifications = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "Achieved" },
  { name: "eLearnSecurity Junior Penetration Tester (eJPT)", issuer: "INE", status: "Achieved" },
  { name: "CompTIA Security+", issuer: "CompTIA", status: "Achieved" },
 // Removed PEH as it's not explicitly on the resume
  { name: "AWS Certified Cloud Practitioner (CCP)", issuer: "AWS", status: "Achieved" },
  { name: "Offensive Security Certified Professional (OSCP)", issuer: "Offensive Security", status: "Pursuing" },
  { name: "Certified Detection and Response Analyst (CDSA)", issuer: "Hack The Box", status: "Pursuing" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Education Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
              <CardTitle className="text-2xl font-semibold">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6"> {/* Increased space */}
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution} - {edu.location}</p> {/* Added location */}
                  <p className="text-sm text-muted-foreground">{edu.years} | CGPA: {edu.gpa}</p> {/* Updated format */}
                  <p className="text-xs text-muted-foreground/80 mt-1">
                    <span className="font-medium">Coursework:</span> {edu.coursework}
                  </p> {/* Added coursework */}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Tech Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Wrench className="h-8 w-8 text-accent" />
              <CardTitle className="text-2xl font-semibold">Technical Skills</CardTitle> {/* Renamed */}
            </CardHeader>
            <CardContent>
               <CardDescription className="mb-4 text-sm">Proficient in a wide range of cybersecurity tools and technologies.</CardDescription> {/* Added description */}
              <div className="flex flex-wrap gap-2">
                {toolsTech.map((tool, index) => (
                  <Badge key={index} variant="secondary">{tool}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Award className="h-8 w-8 text-accent" />
              <CardTitle className="text-2xl font-semibold">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-grow pr-4">
                     <p className="font-medium text-sm">{cert.name}</p>
                     <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>

                  <Badge variant={cert.status === 'Achieved' ? 'default' : 'outline'} className={`whitespace-nowrap text-xs ${cert.status === 'Achieved' ? 'bg-green-600/20 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-600/30' : ''}`}>
                    {cert.status === 'Achieved' ? <CheckCircle className="mr-1 h-3 w-3" /> : null}
                    {cert.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
