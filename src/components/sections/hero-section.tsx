"use client"; // Add this directive for Framer Motion hooks and client-side interactions

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Typewriter } from '@/components/typewriter'; // Import the Typewriter component
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { cn } from '@/lib/utils'; // Import cn

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animation for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.6, // Delay slightly after text
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const iconHoverVariants = {
    hover: {
        scale: 1.15,
        boxShadow: "0 0 15px hsl(var(--accent))", // Glow effect using accent color
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
        }
    }
};

const photoHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px 5px hsl(var(--accent) / 0.5)", // Teal glow border pulse
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
    }
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  // Exact text from the image for the typewriter
  const rolesText = "Cybersecurity | SOC Operations | Digital Forensics | Incident Response | Threat Detection | Offensive Security Enthusiast";
  const descriptionText = "Cybersecurity professional with over 3 years of experience in SOC operations, Forensics, Incident Response, threat detection, and Penetration Testing across IT environments. Proficient in SIEM, EDR, and XDR for identifying and mitigating threats. Experienced in MITRE ATT&CK, vulnerability management, Web Application Security, Malware Analysis, and automation using Python. Certified in CEH, eJPT, Security+; pursuing OSCP and CDSA to expand offensive and defensive capabilities.";
  const [isMounted, setIsMounted] = useState(false); // Track mount state

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after component mounts
  }, []);

  // Simplified variants for reduced motion or before mount
  const reducedItemVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } }, // Almost instant fade-in
  };

  // Determine which variants to use based on motion preference and mount state
  const currentContainerVariants = !prefersReducedMotion && isMounted ? containerVariants : undefined;
  const currentItemVariants = !prefersReducedMotion && isMounted ? itemVariants : reducedItemVariants;
  const currentPhotoVariants = !prefersReducedMotion && isMounted ? photoVariants : reducedItemVariants;
  const currentIconHoverVariants = !prefersReducedMotion && isMounted ? iconHoverVariants : undefined;
  const currentPhotoHoverVariants = !prefersReducedMotion && isMounted ? photoHoverVariants : undefined;
  if (isMounted) {
    console.log("rolesText value:", rolesText);
  }
  return (
    // Added min-h-screen, flex, items-center and adjusted padding
    <section
      id="home"
      className="flex min-h-screen items-center py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10 overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* Text Content Column */}
        <motion.div
          className={cn("space-y-6 text-center md:text-left")}
          variants={currentContainerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"} // Animate only when mounted
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            variants={currentItemVariants}
          >
            Yaswanth Reddy Sunkara
          </motion.h1>

          {/* Use Typewriter for roles */}
           <motion.div className="text-lg md:text-xl text-accent font-semibold min-h-[3em]"
             variants={currentItemVariants}
            >
             {/* Conditional rendering based on isMounted and prefersReducedMotion */}
             {/* Log the value of rolesText just before using it */}
             {isMounted && !prefersReducedMotion && <Typewriter text={rolesText} delay={500} />}
             {/* Fallback for SSR/reduced motion */}
             {(!isMounted || prefersReducedMotion) && <span>{rolesText}</span>}
           </motion.div>


          <motion.p
            className="text-base md:text-lg text-foreground/80"
            variants={currentItemVariants}
          >
            {descriptionText} {/* Use the variable for description */}
          </motion.p>

          <motion.div className="flex justify-center md:justify-start space-x-4 pt-4"
             variants={currentItemVariants} // Apply variants to the container div
          >
             {/* Wrap each button for individual hover animation */}
            <motion.div variants={currentIconHoverVariants} whileHover={isMounted ? "hover" : {}}>
                <Button variant="outline" size="icon" asChild >
                <a href="https://github.com/yaswanth77" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </a>
                </Button>
            </motion.div>
             <motion.div variants={currentIconHoverVariants} whileHover={isMounted ? "hover" : undefined}>
                <Button variant="outline" size="icon" asChild >
                <a href="https://linkedin.com/in/yaswanthreddysunkara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
                </Button>
            </motion.div>
            <motion.div variants={currentIconHoverVariants} whileHover={isMounted ? "hover" : undefined}>
                <Button variant="outline" size="icon" asChild>
                <a href="mailto:sunkarayaswanthreddy@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                </a>
                </Button>
            </motion.div> 
            <motion.div variants={currentIconHoverVariants} whileHover={isMounted ? "hover" : undefined}>
                <Button variant="outline" size="icon" asChild>
                <a href="tel:+12409408567" aria-label="Phone">
                    <Phone className="h-5 w-5" />
                </a>
                </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profile Photo Column */}
        <motion.div
            className={cn("flex justify-center md:justify-end")}
            variants={currentPhotoVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"} // Animate only when mounted
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-accent/50"
            whileHover={
              isMounted
                ? {
                  scale: 1.05,
                  boxShadow: "0 0 25px 5px hsl(var(--accent) / 0.5)",
                  transition: {
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }
            : {}
          }
        >
             {/* Image rendering is handled inside the motion div */}
            {/* Render image only after mount to prevent potential hydration issues with layout/objectFit if server differs slightly */}
            {isMounted && (
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile-pic.jpg`}
                fill 
                alt="Yaswanth Reddy Sunkara Portrait"
                className="object-cover"
                priority
                unoptimized 
                />
            )}
            {!isMounted && <div className="w-full h-full bg-muted"></div>} {/* Placeholder */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}