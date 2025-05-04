import { Code } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground px-4 sm:px-6 lg:px-8">
         <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="h-4 w-4" />
            <span>YRS Cyberfolio</span>
         </div>
        <p className="text-center md:text-right">
          &copy; {currentYear} Yaswanth Reddy Sunkara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
