import { Building2 } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";

export function Footer() {
  const footerLinks = {
    company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Security", href: "#security" },
    ],
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "API", href: "#api" },
      { label: "Documentation", href: "#docs" },
    ],
  };

  const socialLinks = [
    {
      icon: SiLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: SiX,
      href: "https://x.com",
      label: "X (Twitter)",
      color: "hover:text-foreground",
    },
    {
      icon: SiFacebook,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-[#1877F2]",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent to-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Vertex
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Modern property management, simplified for the digital age.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  className={`text-muted-foreground transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`link-product-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`link-company-${link.label.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Vertex Property Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
