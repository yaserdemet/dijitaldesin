import Seo from "../utils/Seo";
import JsonLd from "../utils/JsonLd";
import HighlightText from "../utils/HighlightText";
import BlogCard from "../components/blog/BlogCard";
import { BLOG_POSTS } from "../components/blog/blogData";
import { SITE_URL, ORGANIZATION_SCHEMA } from "../utils/organizationSchema";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: `${SITE_URL}/blog`,
  name: "Dijitaldesin Blog",
  publisher: ORGANIZATION_SCHEMA,
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.isoDate,
  })),
};

const Blog = () => {
  return (
    <>
      <Seo
        title="Blog"
        description="Dijital pazarlama, e-ticaret entegrasyonları, SEO ve reklam yönetimi üzerine DijitalDesin ekibinden güncel yazılar."
      />
      <JsonLd data={blogJsonLd} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <HighlightText>Blog</HighlightText>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Dijital pazarlama, e-ticaret ve reklam yönetimi üzerine
              deneyimlerimizi ve önerilerimizi paylaşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
