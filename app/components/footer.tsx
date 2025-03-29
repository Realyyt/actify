import Link from 'next/link';
import { Facebook, Linkedin, Instagram, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mx-auto">actify</h1>
        </div>
        <div className="flex justify-center space-x-6 mb-10">
          <Link href="https://facebook.com" aria-label="Facebook">
            <div className="p-3 rounded-full transition-colors">
              <Facebook className="w-6 h-6" />
            </div>
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <div className="p-3 rounded-full transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <div className="p-3 rounded-full transition-colors">
              <Instagram className="w-6 h-6" />
            </div>
          </Link>
        </div>
        <p className="mb-8 text-gray-400">© 2025 MG LLC D/B/A TRANZACT. ALL RIGHTS RESERVED.</p>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm">
          <Link href="/privacy-notice" className="hover:underline">Privacy Notice</Link>
          <div className="flex items-center">
            <Link href="/your-privacy-choices" className="hover:underline">Your Privacy Choices</Link>
            <ShieldCheck className="w-4 h-4 ml-1" />
          </div>
          <Link href="/consumer-health-data-privacy-notice" className="hover:underline">Tranzact Consumer Health Data Privacy Notice</Link>
          <Link href="/site-map" className="hover:underline">Site Map</Link>
        </div>
      </div>
    </footer>
  );
}
