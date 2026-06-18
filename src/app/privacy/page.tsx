import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — TheDIYEdge',
  description: 'Privacy Policy for TheDIYEdge, operated by Media Stock LLC. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.thediyedge.com/privacy',
  },
}

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <div className="bg-site-bg">
      <section className="bg-primary-dark text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-border rounded-xl p-8 prose max-w-none">

          <div className="bg-primary-accent/5 border border-primary-accent/20 rounded-lg p-4 mb-8">
            <p className="text-sm text-primary-dark">
              <strong>Summary:</strong> Media Stock LLC dba TheDIYEdge is committed to protecting your privacy. We collect information you voluntarily provide (email, name, zip code), use cookies and analytics to improve our site, and never sell your personal data to third parties. We may share aggregate data with affiliate partners.
            </p>
          </div>

          <h2 className="text-xl font-bold text-primary-dark mt-6 mb-3">1. Who We Are</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            TheDIYEdge is operated by Media Stock LLC, a Covian Company, with its principal office at 131 Continental Dr Suite 305, Newark, DE 19713. When this Privacy Policy refers to "we," "us," or "our," it means Media Stock LLC and the TheDIYEdge website at www.thediyedge.com (the "Site").
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">2. Information We Collect</h2>

          <h3 className="text-base font-bold text-primary-dark mt-4 mb-2">2.1 Information You Provide Directly</h3>
          <p className="text-muted text-sm leading-relaxed mb-3">
            We collect information you voluntarily provide when you interact with our Site, including:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li>Email address (when you sign up for our newsletter or request a cost estimate)</li>
            <li>First and last name (when provided through our forms)</li>
            <li>Zip code or postal code (for localized cost estimates)</li>
            <li>Any other information you choose to submit through our contact forms</li>
          </ul>

          <h3 className="text-base font-bold text-primary-dark mt-4 mb-2">2.2 Information Collected Automatically</h3>
          <p className="text-muted text-sm leading-relaxed mb-3">
            When you visit our Site, we automatically collect certain technical information, including:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li>IP address and general geographic location</li>
            <li>Browser type, version, and operating system</li>
            <li>Pages viewed, time on page, and referral source</li>
            <li>Device type (desktop, mobile, tablet)</li>
            <li>Click behavior and interaction data</li>
          </ul>

          <h3 className="text-base font-bold text-primary-dark mt-4 mb-2">2.3 Cookies and Tracking Technologies</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We use cookies, web beacons, pixel tags, and similar tracking technologies to operate and improve the Site. These technologies help us:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li>Remember your preferences and settings</li>
            <li>Understand how visitors use the Site (analytics)</li>
            <li>Measure the effectiveness of our content and offers</li>
            <li>Serve relevant advertising through third-party advertising partners</li>
          </ul>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We use Google Analytics (with IP anonymization enabled) to understand Site usage. You may opt out of Google Analytics tracking by visiting <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-accent underline">Google's opt-out page</a>. We may also use Meta Pixel and Google Ads conversion tracking for advertising measurement.
          </p>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Most browsers allow you to control cookies through their settings preferences. However, disabling cookies may limit your ability to use certain features of our Site.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">3. How We Use Your Information</h2>
          <p className="text-muted text-sm leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li>Send you the free cost estimate, guide, or resource you requested</li>
            <li>Deliver our email newsletter and DIY guides (if you subscribed)</li>
            <li>Improve our Site content, user experience, and accuracy of cost estimates</li>
            <li>Communicate with you in response to inquiries or support requests</li>
            <li>Analyze trends and measure the effectiveness of our content</li>
            <li>Comply with applicable legal requirements</li>
            <li>Detect and prevent fraud or abuse of our Site</li>
          </ul>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">4. How We Share Your Information</h2>
          <p className="text-muted text-sm leading-relaxed mb-3">
            We do not sell your personal information to third parties. We may share your information with:
          </p>

          <h3 className="text-base font-bold text-primary-dark mt-4 mb-2">4.1 Service Providers</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We share information with trusted third-party service providers who help us operate the Site and deliver our services. These include email service providers (for sending newsletters), analytics platforms (Google Analytics), and web hosting providers (Vercel). These parties are contractually required to protect your information and may only use it to provide services to us.
          </p>

          <h3 className="text-base font-bold text-primary-dark mt-4 mb-2">4.2 Affiliate Partners</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Our Site includes affiliate links to products and services. When you click an affiliate link, the affiliated retailer may set cookies and collect data in accordance with their own privacy policies. We do not share your personal information with affiliate partners, but these partners may independently track your activity through their own technology.
          </p>

          <h3 className="text-base font-bold text-primary-dark mt-4 mb-2">4.3 Legal Requirements</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We may disclose your information if required to do so by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, or investigate fraud.
          </p>

          <h3 className="text-base font-bold text-primary-dark mt-4 mb-2">4.4 Business Transfers</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            In the event of a merger, acquisition, sale of assets, or similar corporate transaction, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">5. Data Retention</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to send you our newsletter (until you unsubscribe), comply with legal obligations, resolve disputes, and enforce our agreements. Email subscribers are retained until they unsubscribe. Analytics data is retained in accordance with Google Analytics default retention settings.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">6. Your Rights and Choices</h2>
          <p className="text-muted text-sm leading-relaxed mb-3">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request that we correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request that we delete your personal information</li>
            <li><strong>Opt-out of marketing:</strong> Unsubscribe from our emails at any time using the unsubscribe link in any email we send</li>
            <li><strong>Do Not Track:</strong> We currently do not respond to browser Do Not Track signals</li>
          </ul>
          <p className="text-muted text-sm leading-relaxed mb-4">
            California residents may have additional rights under the California Consumer Privacy Act (CCPA). Virginia residents may have rights under the Virginia Consumer Data Protection Act (VCDPA). To exercise your rights, contact us at privacy@thediyedge.com.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">7. Children's Privacy</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us at privacy@thediyedge.com and we will promptly delete it.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">8. Security</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no Internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security. We encourage you to use strong passwords and to notify us immediately if you believe your account has been compromised.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">9. Third-Party Links</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Our Site contains links to third-party websites, including affiliate retailer sites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit through our links.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">10. Changes to This Policy</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page with a new "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">11. Contact Us</h2>
          <p className="text-muted text-sm leading-relaxed mb-2">
            If you have questions about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <address className="not-italic text-muted text-sm leading-relaxed">
            <strong className="text-primary-dark">Media Stock LLC dba TheDIYEdge</strong><br />
            131 Continental Dr Suite 305<br />
            Newark, DE 19713<br />
            Email: privacy@thediyedge.com
          </address>
        </div>

        {/* Nav */}
        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/terms" className="text-primary-accent hover:underline">Terms of Service</Link>
          <Link href="/about" className="text-primary-accent hover:underline">About Us</Link>
          <Link href="/" className="text-primary-accent hover:underline">Home</Link>
        </div>
      </div>
    </div>
  )
}
