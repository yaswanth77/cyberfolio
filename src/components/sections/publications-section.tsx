
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Link as LinkIcon } from 'lucide-react'; // Using LinkIcon to avoid naming conflict

// Updated publications data based on user input
const publications = [
  {
    title: "Comprehensive Survey of Web Security Threats in 2024",
    authors: "Yaddala, M. N., & Sunkara, Y. R.", // As per image
    venue: "International Journal of Scientific Research in Engineering and Management", // As per image
    year: 2024, // As per image
    link: "https://ijsrem.com/download/comprehensive-survey-of-web-security-threats-in-2024/", // Provided link
    tags: [
        "Web Security",
        "Threat Detection",
        "Data Privacy",
        "Cross-Site Scripting (XSS)",
        "SQL Injection",
        "DDoS Attacks",
        "Zero-Trust Architecture",
        "Quantum-Resistant Encryption",
        "Cloud Security",
        "Machine Learning in Security"
     ], // Updated keywords from image
    status: "Published", // Assuming published based on journal context
  },
  // Remove other placeholders if they are not actual publications
  // {
  //   title: "Blockchain Applications in Secure Data Sharing",
  //   authors: "Sunkara, Y. R., Doe, J.",
  //   venue: "International Conference on Financial Cryptography and Data Security (FC)",
  //   year: 2023,
  //   link: "#",
  //   tags: ["Blockchain", "Cryptography", "Data Security", "Privacy"],
  //   status: "Published",
  // },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Publications & Research</h2>
        {/* Updated grid layout: single column, centered items, max-width */}
        <div className="grid grid-cols-1 gap-8 justify-items-center max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col w-full"> {/* Ensure card takes full width of grid cell */}
              <CardHeader>
                <div className="flex items-start gap-4">
                   <BookOpen className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                   <div>
                       <CardTitle className="text-xl font-semibold leading-tight">{pub.title}</CardTitle>
                       <CardDescription className="text-sm text-muted-foreground mt-1">
                           {pub.authors} ({pub.year})
                       </CardDescription>
                       <p className="text-sm font-medium text-foreground/90 mt-1">{pub.venue}</p>
                   </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                {/* Top part of content for status and link */}
                <div className="flex justify-between items-center mb-4">
                   <Badge variant={pub.status === 'Published' ? 'default' : 'outline'} className={`text-xs ${pub.status === 'Published' ? 'bg-blue-600/20 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-600/30' : ''}`}>
                    {pub.status}
                  </Badge>
                  {pub.link && pub.link !== "#" && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-accent hover:underline">
                      <LinkIcon className="h-4 w-4 mr-1" />
                      View Publication
                    </a>
                  )}
                </div>
                {/* Bottom part of content for tags */}
                <div className="mt-auto pt-4 border-t">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Keywords:</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tIndex) => (
                      <Badge key={tIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         {/* Optional: Add a message if no publications */}
         {publications.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">No publications to display at this time.</p>
         )}
      </div>
    </section>
  );
}
