
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'; // Import EffectCoverflow
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch, Lock, Cloud, Search, ShieldAlert, ChevronLeft, ChevronRight, Network } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Import cn

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // Import Coverflow effect CSS

// Project data remains the same
const projects = [
    {
      title: "PortMaster - Automated Port & Vulnerability Scanner",
      icon: Search,
      description: "Developed a Python tool automating network port scanning and vulnerability assessments using Nmap scripts. Integrated reporting modules to streamline security audits and enhance assessment consistency.",
      tags: ["Python", "Nmap", "Vulnerability Scanning", "Automation", "Network Security", "Reporting"],
      outcome: "Reduced manual scanning effort by approx. 40% and improved assessment consistency.",
      imageUrl: "/1-portmaster.jpg", // Corrected image URL
      imageHint: "network scan radar terminal",
    },
    {
      title: "Malware Forensics Investigation",
      icon: Lock,
      description: "Conducted full disk forensic analysis on a compromised system image using Autopsy and Volatility. Utilized Wireshark for network traffic analysis and VeraCrypt for accessing encrypted containers to extract malware payloads.",
      tags: ["Digital Forensics", "Malware Analysis", "Incident Response", "Autopsy", "Volatility", "Wireshark", "VeraCrypt"],
      outcome: "Successfully identified initial infection vector, extracted malware, and analyzed its behavior by decrypting hidden payloads.",
       imageUrl: "/2-malware-forensics.jpg", // Updated image URL
       imageHint: "malware forensics hard drive lock",
    },
     {
      title: "Active Directory Penetration Testing Lab",
      icon: GitBranch,
      description: "Constructed a virtual lab simulating a corporate Active Directory environment. Executed attacks including MS17-010 (EternalBlue) exploitation, privilege escalation, and AD object enumeration using Metasploit.",
      tags: ["Penetration Testing", "Active Directory", "Windows Security", "Metasploit", "EternalBlue (MS17-010)", "Privilege Escalation"],
      outcome: "Gained hands-on experience with common AD attack vectors, exploitation, and post-exploitation techniques.",
       imageUrl: "/3-AD.jpg",
       imageHint: "active directory pentest attack graph",
    },
    {
      title: "Cloud Security Hardening for Healthcare App (AWS)",
      icon: Cloud,
      description: "Designed and implemented robust security controls for a HIPAA-compliant healthcare application on AWS. Focused on hardening IAM, configuring Security Groups/NACLs, implementing CloudTrail/CloudWatch monitoring, and adhering to Zero Trust principles.",
      tags: ["Cloud Security", "AWS", "Infrastructure Security", "HIPAA Compliance", "IAM", "Security Groups", "NACLs", "CloudTrail", "CloudWatch", "Zero Trust"],
      outcome: "Enhanced application security posture and ensured alignment with HIPAA regulatory standards.",
       imageUrl: "/4-cloud.jpg",
       imageHint: "cloud security architecture aws",
    },
    {
      title: "Honeypot+",
      icon: ShieldAlert,
      description: "Built a lightweight tool emulating 30 services, optimizing resource usage and ensuring user-friendly deployment. Integrated Snort IDS for real-time attack detection and optimized log reporting to a centralized web portal, minimizing resource usage.",
      tags: ["Python", "Snort", "htop", "VS Code", "Ubuntu", "VirtualBox", "IDS", "Honeypot", "Network Security", "Log Analysis"],
      outcome: "Developed a resource-efficient honeypot with integrated IDS for real-time threat detection and centralized reporting.",
      imageUrl: "/5-honeypot.jpg",
      imageHint: "honeypot network security dashboard",
    },

];


export function ProjectsCarousel() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 relative"> {/* Adjust padding for edge visibility */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 px-4">Projects Showcase</h2>

        {/* Add a wrapper div for Swiper to control overflow and perspective */}
        <div className="relative project-swiper-wrapper">
             {/* Custom Navigation Arrows - Positioned outside Swiper container for better layout */}
              <button 
                ref={navigationPrevRef}
                aria-label="Previous Project"
                className="absolute top-1/2 left-2 md:left-4 lg:left-8 z-20 -translate-y-1/2 cursor-pointer p-2 rounded-full bg-background/60 hover:bg-accent/80 text-foreground hover:text-accent-foreground transition-colors duration-300 shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                 ref={navigationNextRef}
                 aria-label="Next Project"
                 className="absolute top-1/2 right-2 md:right-4 lg:right-8 z-20 -translate-y-1/2 cursor-pointer p-2 rounded-full bg-background/60 hover:bg-accent/80 text-foreground hover:text-accent-foreground transition-colors duration-300 shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]} // Added EffectCoverflow
              effect="coverflow" // Use coverflow effect
              grabCursor={true} // Add grab cursor effect
              centeredSlides={true} // Center the active slide
              slidesPerView={'auto'} // Show parts of next/prev slides, adjust based on desired look
            //   coverflowEffect={{ // Configure coverflow effect
            //     rotate: 0, // No rotation
            //     stretch: 0, // No stretch
            //     depth: 150, // Depth effect for side slides
            //     modifier: 1, // Effect multiplier
            //     slideShadows: false, // Disable slide shadows if not desired
            //   }}
             coverflowEffect={{
                rotate: 0, // Keep slides upright
                stretch: -20, // Negative stretch pulls slides closer, adjust as needed
                depth: 100, // How far back non-active slides appear
                modifier: 1.5, // Increases the effect intensity, scales slides down more
                slideShadows: false, // Optional: add shadows
             }}
              loop={true}
            //   autoplay={{ // Keep autoplay settings
            //     delay: 5000,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            //   }}
              pagination={{ // Keep pagination
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{ // Configure navigation using refs
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => { // Ensure refs are assigned
                // @ts-ignore TODO: Fix type Swiper definition does not include navigation properties directly
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                 // @ts-ignore
                swiper.params.navigation.nextEl = navigationNextRef.current;
                // @ts-ignore - Need to inform swiper instance about the elements after render
                swiper.navigation.update();
              }}
              className="project-swiper" // Keep class for potential custom Swiper styling
              style={{
                // Custom styles for pagination bullets
                // @ts-ignore
                '--swiper-pagination-color': 'hsl(var(--accent))',
                '--swiper-pagination-bullet-inactive-color': 'hsl(var(--muted-foreground))',
                '--swiper-pagination-bullet-inactive-opacity': '0.5',
                '--swiper-pagination-bullet-size': '10px',
                '--swiper-pagination-bullet-horizontal-gap': '6px',
                // Ensure enough padding if slidesPerView is not 'auto' to show neighbours
                 paddingTop: '1rem', // Add padding to prevent clipping shadows/glows
                 paddingBottom: '3rem', // Space for pagination
              }}
              breakpoints={{
                 // Mobile view (optional customization)
                 320: {
                   // slidesPerView: 1.5, // Example: Show 1 full and half of next
                   // spaceBetween: 15,
                    coverflowEffect: {
                       rotate: 0,
                       stretch: 0, // Less pronounced effect on mobile
                       depth: 100,
                       modifier: 1,
                       slideShadows: false,
                    },
                 },
                 // Tablet and Desktop
                 768: {
                   //slidesPerView: 'auto', // Use auto or set to 3
                    coverflowEffect: {
                       rotate: 0,
                       stretch: -20, // Adjust stretch for desktop
                       depth: 100,
                       modifier: 1.5, // Adjust modifier for desktop
                       slideShadows: false,
                    },
                 }
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="!w-[85%] sm:!w-[70%] md:!w-[55%] lg:!w-[45%] xl:!w-[35%] project-slide"> {/* Control slide width */}
                   {/* Apply scaling and opacity based on active state using CSS */}
                   <div className="h-full transition-transform duration-300 ease-in-out transform scale-90 opacity-60 slide-content">
                     <Card className="flex flex-col overflow-hidden shadow-md h-full border-border hover:border-accent/50 transition-colors duration-300">
                       <div className="relative h-48 sm:h-56 w-full"> {/* Adjusted height */}
                         <Image
                            src={project.imageUrl}
                            alt={`${project.title} visual representation`}
                            fill
                            data-ai-hint={project.imageHint}
                            className="transition-transform duration-300 object-cover"
                            priority={index < 3} // Prioritize first few images
                            unoptimized={project.imageUrl.startsWith('/')}
                          />
                       </div>
                       <CardHeader className="flex flex-row items-start gap-4 pt-4 pb-2">
                          <project.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                          <div>
                              <CardTitle className="text-lg sm:text-xl font-semibold">{project.title}</CardTitle> {/* Adjusted size */}
                              <CardDescription className="mt-1 text-xs sm:text-sm">{project.description}</CardDescription> {/* Adjusted size */}
                          </div>
                       </CardHeader>
                       <CardContent className="flex-grow flex flex-col justify-between pt-2">
                           <div>
                              <p className="text-xs sm:text-sm font-medium text-foreground mb-2">Key Outcome:</p>
                              <p className="text-xs sm:text-sm text-muted-foreground mb-4">{project.outcome}</p>
                           </div>
                           <div className="mt-auto pt-4 border-t border-border/50">
                             <p className="text-xs font-semibold text-muted-foreground mb-2">Technologies Used:</p>
                             <div className="flex flex-wrap gap-1 sm:gap-2">
                               {project.tags.map((tag, tIndex) => (
                                 <Badge key={tIndex} variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5">{tag}</Badge>
                               ))}
                             </div>
                           </div>
                       </CardContent>
                     </Card>
                   </div>
                </SwiperSlide>
              ))}

            </Swiper>
        </div>

      </div>
       {/* Add custom CSS for the scaling effect */}
       <style jsx global>{`
        .project-swiper-wrapper {
          /* Optional: Add perspective for a more 3D feel */
          /* perspective: 1200px; */
        }

        .project-swiper .swiper-slide {
          transition: transform 0.4s ease-out, opacity 0.4s ease-out;
          height: auto; /* Ensure slides adapt height */
          display: flex; /* Helps with vertical alignment if needed */
          align-items: stretch; /* Make slides fill height */
        }

        .project-swiper .swiper-slide .slide-content {
             transform: scale(0.85); /* Default scale for non-active slides */
             opacity: 0.6; /* Default opacity */
             transition: transform 0.4s ease-out, opacity 0.4s ease-out;
             height: 100%; /* Ensure content div takes full slide height */
             display: flex; /* Make card flex child */
        }


        .project-swiper .swiper-slide-active .slide-content {
          transform: scale(1); /* Active slide scale */
          opacity: 1; /* Active slide opacity */
           /* Optional: Add a subtle box-shadow or border to highlight */
           /* box-shadow: 0 0 20px hsl(var(--accent) / 0.3); */
        }

        .project-swiper .swiper-slide-next .slide-content,
        .project-swiper .swiper-slide-prev .slide-content {
           transform: scale(0.85); /* Ensure adjacent slides are also scaled down */
           opacity: 0.6;
        }

        /* Ensure pagination is below slides */
        .project-swiper .swiper-pagination {
           position: absolute;
           bottom: 0px !important; /* Adjust as needed */
           left: 50%;
           transform: translateX(-50%);
           width: auto;
        }

       `}</style>
    </section>
  );
}
