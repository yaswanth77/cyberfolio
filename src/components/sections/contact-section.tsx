import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contactDetails = [
  { icon: Mail, label: "Email", value: "sunkarayaswanthreddy@gmail.com", href: "mailto:sunkarayaswanthreddy@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 (240) 940-8567", href: "tel:+12409408567" },
  { icon: Github, label: "GitHub", value: "github.com/yaswanth77", href: "https://github.com/yaswanth77", target: "_blank" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yaswanthreddysunkara", href: "https://linkedin.com/in/yaswanthreddysunkara", target: "_blank" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <Card className="max-w-lg mx-auto shadow-lg border-accent/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              Feel free to reach out via email, phone, or connect with me on social platforms.
            </p>
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-4">
                <detail.icon className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                  <a
                    href={detail.href}
                    target={detail.target}
                    rel={detail.target ? "noopener noreferrer" : undefined}
                    className="text-base text-foreground hover:text-accent transition-colors break-all"
                  >
                    {detail.value}
                  </a>
                </div>
              </div>
            ))}
             {/* Optional: Add a contact form here later */}
             {/* <div className="pt-4 text-center">
               <Button>Send a Message (Form Coming Soon)</Button>
             </div> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
