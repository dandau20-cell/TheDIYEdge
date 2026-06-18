import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-cta font-bold text-lg">⚒</span>
              <span className="font-bold text-lg">
                <span className="text-white">The</span>
                <span className="text-cta">DIY</span>
                <span className="text-primary-accent">Edge</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-2">A Covian Company</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Helping homeowners make smarter decisions on every home improvement project through honest guides, real cost data, and expert recommendations.
            </p>
          </div>

          {/* Links column */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors">DIY Guides</Link></li>
              <li><Link href="/offers/free-cost-calculator" className="text-sm hover:text-white transition-colors">Free Cost Calculator</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">Company</h3>
            <address className="not-italic text-sm text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Media Stock LLC</strong><br />
              131 Continental Dr Suite 305<br />
              Newark, DE 19713
            </address>
            <p className="text-xs text-gray-500 mt-3">
              TheDIYEdge.com is a property of Media Stock LLC, a Covian Company. We may earn affiliate commissions on purchases made through links on this site.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Media Stock LLC dba TheDIYEdge. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
