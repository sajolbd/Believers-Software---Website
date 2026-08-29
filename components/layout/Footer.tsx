import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8 text-slate-600 relative z-10">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="Believers Software"
                width={200}
                height={60}
                className="h-8 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-[280px]">
              A full-service digital agency offering JavaScript &amp; WordPress development, website maintenance, SEO, digital &amp; social media marketing, and WordPress security under one roof.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">
              Services
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#web-dev" className="hover:text-primary transition-colors duration-150">
                  Website Design &amp; Development
                </a>
              </li>
              <li>
                <a href="#maintenance" className="hover:text-primary transition-colors duration-150">
                  Website Maintenance
                </a>
              </li>
              <li>
                <a href="#seo" className="hover:text-primary transition-colors duration-150">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#marketing" className="hover:text-primary transition-colors duration-150">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-primary transition-colors duration-150">
                  Security &amp; Malware Removal
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">
              Company
            </h5>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors duration-150">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors duration-150">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors duration-150">
                  Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-primary transition-colors duration-150">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-primary transition-colors duration-150">
                  Industries
                </a>
              </li>
              <li>
                <a href="#engagement" className="hover:text-primary transition-colors duration-150">
                  Work Models
                </a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-primary transition-colors duration-150">
                  Guarantee
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors duration-150">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">
              Contact
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@believerssoftware.com"
                  className="hover:text-primary transition-colors font-semibold text-slate-800"
                >
                  hello@believerssoftware.com
                </a>
              </li>
              <li className="text-slate-500">
                Available for remote projects worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200 text-xs text-slate-400">
          <span>© {currentYear} Believers Software. All rights reserved.</span>
          <span className="text-center md:text-right">
            Web Design &amp; Development · Maintenance · SEO · Social Media &amp; Digital Marketing · Security
          </span>
        </div>
      </div>
    </footer>
  );
}
