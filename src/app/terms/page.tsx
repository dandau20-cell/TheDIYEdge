import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — TheDIYEdge',
  description: 'Terms of Service for TheDIYEdge, operated by Media Stock LLC. Includes affiliate disclosure, content disclaimer, and usage terms.',
  alternates: {
    canonical: 'https://www.thediyedge.com/terms',
  },
}

export default function TermsPage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <div className="bg-site-bg">
      <section className="bg-primary-dark text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-border rounded-xl p-8">

          {/* Affiliate Disclosure Box */}
          <div className="bg-cta/10 border border-cta/30 rounded-lg p-5 mb-8">
            <h2 className="text-base font-bold text-primary-dark mb-2">Affiliate Disclosure</h2>
            <p className="text-sm text-primary-dark leading-relaxed">
              TheDIYEdge is a participant in affiliate advertising programs including the Amazon Services LLC Associates Program, the Home Depot Affiliate Program, and others. As an affiliate, we earn fees from qualifying purchases made through links on our Site. This affiliate relationship does not influence our editorial content, product recommendations, or cost estimates. We only recommend products and services we believe provide genuine value.
            </p>
          </div>

          <h2 className="text-xl font-bold text-primary-dark mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            By accessing or using TheDIYEdge at www.thediyedge.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). These Terms are entered into between you and Media Stock LLC, a Covian Company ("Company," "we," "us," or "our"), with its principal office at 131 Continental Dr Suite 305, Newark, DE 19713. If you do not agree to these Terms, please do not use the Site.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">2. Description of Service</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            TheDIYEdge provides home improvement content including cost guides, DIY tutorials, product reviews, and affiliate product recommendations. The Site is designed to help homeowners make informed decisions about home improvement projects. We do not provide licensed contractor services, professional engineering services, or legal advice. All content is for informational purposes only.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">3. Affiliate Relationships and Compensation</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            TheDIYEdge participates in affiliate marketing programs. When you click on links to products or services on our Site and make a purchase, we may earn a commission. These commissions help support the Site and allow us to continue providing free content. Our affiliate relationships include but are not limited to:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li>Amazon Services LLC Associates Program</li>
            <li>Home Depot Affiliate Program</li>
            <li>Lowe's Affiliate Program</li>
            <li>Tool manufacturer and supplier affiliate programs</li>
            <li>Home improvement service referral programs</li>
          </ul>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Our editorial decisions, including product recommendations and cost estimates, are made independently of our affiliate relationships. We do not accept payment to review or recommend specific products. Affiliate links are identified in our content and do not affect the price you pay.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">4. Cost Estimates and Accuracy</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Cost estimates provided on TheDIYEdge are based on industry data, contractor surveys, and publicly available pricing information. These estimates are for informational purposes only and represent typical price ranges, not guaranteed quotes. Actual costs for your specific project will vary based on:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li>Your exact location and local labor market conditions</li>
            <li>Specific project scope, size, and complexity</li>
            <li>Materials selected and supply chain conditions at time of project</li>
            <li>Contractor availability and competitive pricing in your area</li>
            <li>Permit requirements specific to your municipality</li>
            <li>Unforeseen conditions discovered during project execution</li>
          </ul>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We strongly recommend obtaining at least three quotes from licensed, insured contractors before committing to any home improvement project. Our cost estimates should be used for general budgeting purposes only.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">5. Disclaimer of Professional Advice</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            The content on TheDIYEdge is for general informational and educational purposes only. Nothing on the Site constitutes professional advice, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-4 pl-2">
            <li><strong>Legal advice:</strong> Always consult a licensed attorney for legal questions regarding permits, contractor disputes, or property law.</li>
            <li><strong>Engineering advice:</strong> Always consult a licensed structural engineer before undertaking structural modifications to your home.</li>
            <li><strong>Electrical advice:</strong> Always consult a licensed electrician before undertaking electrical work. Improper electrical work is dangerous and illegal.</li>
            <li><strong>Plumbing advice:</strong> Always consult a licensed plumber for gas line work, which is regulated in all U.S. jurisdictions.</li>
            <li><strong>Financial advice:</strong> Cost information provided does not constitute financial planning or investment advice.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">6. User Content and Submissions</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            If you submit content to the Site, including comments, photos, project descriptions, or reviews, you grant Media Stock LLC a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, publish, and distribute such content in any media format. You represent that you own or have the necessary rights to submit such content and that it does not infringe any third-party rights.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">7. Intellectual Property</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            All content on TheDIYEdge, including text, graphics, logos, images, and software, is the property of Media Stock LLC or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our express written permission. You may share links to our content for personal, non-commercial purposes.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">8. Disclaimer of Warranties</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            THE SITE AND ALL CONTENT, SERVICES, AND PRODUCTS AVAILABLE THROUGH THE SITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. MEDIA STOCK LLC EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">9. Limitation of Liability</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MEDIA STOCK LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE OR RELIANCE ON ANY CONTENT. IN NO EVENT SHALL OUR AGGREGATE LIABILITY TO YOU EXCEED $100. SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF LIABILITY FOR CERTAIN TYPES OF DAMAGES; IN SUCH JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE MINIMUM EXTENT PERMITTED BY LAW.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">10. Indemnification</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless Media Stock LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of the Site, your violation of these Terms, or your violation of any third-party rights.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">11. Governing Law and Dispute Resolution</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any dispute arising from these Terms or your use of the Site shall be resolved through binding arbitration in accordance with the American Arbitration Association's Commercial Arbitration Rules, conducted in New Castle County, Delaware. You waive your right to participate in class action lawsuits.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">12. Modification of Terms</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Site after the posting of changes constitutes your acceptance of the modified Terms.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mt-8 mb-3">13. Contact Information</h2>
          <p className="text-muted text-sm leading-relaxed mb-2">
            For questions about these Terms, please contact:
          </p>
          <address className="not-italic text-muted text-sm leading-relaxed">
            <strong className="text-primary-dark">Media Stock LLC dba TheDIYEdge</strong><br />
            131 Continental Dr Suite 305<br />
            Newark, DE 19713<br />
            Email: legal@thediyedge.com
          </address>
        </div>

        {/* Nav */}
        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/privacy" className="text-primary-accent hover:underline">Privacy Policy</Link>
          <Link href="/about" className="text-primary-accent hover:underline">About Us</Link>
          <Link href="/" className="text-primary-accent hover:underline">Home</Link>
        </div>
      </div>
    </div>
  )
}
