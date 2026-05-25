import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ConsoleEasterEgg } from '@/components/console-easter-egg';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yaswanth Reddy Sunkara - Security Engineer & Pentester',
  description:
    'Portfolio of Yaswanth Reddy Sunkara: Security Engineer, Penetration Tester, and AI Security Researcher. Offensive security, AppSec, cloud, and LLM red-teaming.',
  keywords: [
    'Penetration Testing',
    'Application Security',
    'AI Security',
    'LLM Red Teaming',
    'Offensive Security',
    'Cybersecurity',
  ],
  authors: [{ name: 'Yaswanth Reddy Sunkara' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Easter egg for the curious: try the browser console ;) */}
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ConsoleEasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
