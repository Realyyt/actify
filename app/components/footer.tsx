import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Impact Delivery Group</h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              We build strong, locally run public services, infrastructure networks, and economic frameworks in emerging communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/who-we-are" className="text-gray-600 hover:text-gray-900 transition-colors">Who We Are</Link></li>
              <li><Link href="/what-we-do" className="text-gray-600 hover:text-gray-900 transition-colors">What We Do</Link></li>
              <li><Link href="/capabilities" className="text-gray-600 hover:text-gray-900 transition-colors">Capabilities</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/disclaimer" className="text-gray-600 hover:text-gray-900 transition-colors">Disclaimer</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2025 Impact Delivery Group LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
