import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import EmailCapture from '@/components/EmailCapture'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.thediyedge.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | TheDIYEdge`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'TheDIYEdge',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TheDIYEdge',
      url: 'https://www.thediyedge.com',
    },
    url: `https://www.thediyedge.com/blog/${post.slug}`,
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== params.slug)

  return (
    <div className="bg-site-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <section className="bg-primary-dark text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-accent/20 text-primary-accent text-xs font-bold px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>By TheDIYEdge Editorial Team</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article body */}
          <article className="lg:col-span-2">
            <div
              className="prose-content text-site-text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post footer */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs text-muted italic mb-6">
                Affiliate Disclosure: TheDIYEdge is reader-supported. When you purchase through links on our site, we may earn an affiliate commission. This does not affect our editorial opinions or the products we recommend. See our{' '}
                <Link href="/terms" className="text-primary-accent">Terms of Service</Link>{' '}
                for full disclosure.
              </p>
              <EmailCapture
                title="Get More DIY Tips in Your Inbox"
                subtitle="Join thousands of homeowners who get our best guides, cost data, and product recommendations every week."
                buttonText="Subscribe Free"
                context={`blog-post-${post.slug}`}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Posts */}
            <div className="bg-white border border-border rounded-xl p-5">
              <h3 className="font-bold text-primary-dark text-base mb-4">More Guides</h3>
              <div className="space-y-4">
                {otherPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block group no-underline"
                  >
                    <div className="text-xs text-primary-accent font-semibold mb-0.5">{related.category}</div>
                    <div className="text-sm font-semibold text-primary-dark group-hover:text-primary-accent transition-colors leading-snug">
                      {related.title}
                    </div>
                    <div className="text-xs text-muted mt-1">{related.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cost calculator CTA */}
            <div className="bg-primary-dark text-white rounded-xl p-5">
              <h3 className="font-bold text-base mb-2">Free Cost Estimate</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get a personalized cost estimate for your specific project and zip code.
              </p>
              <Link
                href="/offers/free-cost-calculator"
                className="block bg-cta hover:bg-yellow-500 text-white text-center text-sm font-bold py-2.5 px-4 rounded-lg transition-colors no-underline"
              >
                Get Free Estimate →
              </Link>
            </div>

            {/* State guides CTA */}
            <div className="bg-white border border-border rounded-xl p-5">
              <h3 className="font-bold text-primary-dark text-base mb-2">Local Cost Guides</h3>
              <p className="text-muted text-sm mb-3">
                Find accurate 2026 pricing for your state.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['texas', 'california', 'florida', 'new-york', 'georgia'].map((slug) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="text-xs bg-gray-100 text-primary-dark hover:bg-primary-accent hover:text-white px-2.5 py-1 rounded-full capitalize transition-colors no-underline"
                  >
                    {slug.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <nav className="text-sm text-muted">
          <Link href="/" className="hover:text-primary-accent">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-primary-accent">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-dark font-medium">{post.title}</span>
        </nav>
      </div>
    </div>
  )
}
