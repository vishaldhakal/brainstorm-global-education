import Link from "next/link";
import {  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
              src="/images/white-logo.svg"
              alt="Logo"
              height={200}
              width={200}
              />
            </Link>
            <p className="text-sm opacity-80 mb-6">
              Your trusted partner for studying abroad. Turning dreams into reality since 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border-2 border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Study Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/countries/usa" className="opacity-80 hover:opacity-100 transition-opacity">Study in USA</Link></li>
              <li><Link href="/countries/uk" className="opacity-80 hover:opacity-100 transition-opacity">Study in UK</Link></li>
              <li><Link href="/countries/australia" className="opacity-80 hover:opacity-100 transition-opacity">Study in Australia</Link></li>
              <li><Link href="/countries/canada" className="opacity-80 hover:opacity-100 transition-opacity">Study in Canada</Link></li>
              <li><Link href="/countries/new-zealand" className="opacity-80 hover:opacity-100 transition-opacity">Study in New Zealand</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="/ielts-pte" className="opacity-80 hover:opacity-100 transition-opacity">IELTS & PTE Classes</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link href="/#services" className="opacity-80 hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link href="/#testimonials" className="opacity-80 hover:opacity-100 transition-opacity">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="opacity-80">Putalisadak, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+9771234567890" className="opacity-80 hover:opacity-100 transition-opacity">+977 1234567890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:info@brainstormglobal.edu.np" className="opacity-80 hover:opacity-100 transition-opacity">info@brainstormglobal.edu.np</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="opacity-80">© 2024 Brainstorm Global Education. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
