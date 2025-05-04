
"use client"

import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu, Code } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' }, // Re-added Publications link
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Avoid hydration mismatch by checking window existence
    if (typeof window !== 'undefined') {
       setIsScrolled(window.scrollY > 10);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary transition-colors hover:text-accent">
            <Code className="h-6 w-6" />
            <span className="hidden sm:inline">YRS Cyberfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
           <ModeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6">
              <div className="flex flex-col space-y-6">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Code className="h-6 w-6" />
                    <span>YRS Cyberfolio</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-accent"
                    onClick={() => setIsMobileMenuOpen(false)} // Close sheet on link click
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex space-x-4 pt-6 border-t">
                   <Button variant="ghost" size="icon" asChild>
                     <a href="https://github.com/yaswanth77" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                       <Github className="h-5 w-5" />
                     </a>
                   </Button>
                   <Button variant="ghost" size="icon" asChild>
                     <a href="https://linkedin.com/in/yaswanthreddysunkara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                       <Linkedin className="h-5 w-5" />
                     </a>
                   </Button>
                   <Button variant="ghost" size="icon" asChild>
                     <a href="mailto:sunkarayaswanthreddy@gmail.com" aria-label="Email">
                       <Mail className="h-5 w-5" />
                     </a>
                   </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
