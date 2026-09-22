import { useParams, Link, Navigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Seo from "../utils/Seo";
import JsonLd from "../utils/JsonLd";
import { BLOG_POSTS } from "../components/blog/blogData";
import { SITE_URL, ORGANIZATION_SCHEMA } from "../utils/organizationSchema";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    articleSection: post.category,
    articleBody: post.content.join(" "),
    author: ORGANIZATION_SCHEMA,
    publisher: ORGANIZATION_SCHEMA,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <JsonLd data={postJsonLd} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
          >
            <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
            Bloga Dön
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs mb-4">
              <span className="font-semibold text-gray-700 bg-gray-200 rounded-full px-3 py-1">
                {post.category}
              </span>
              <span className="text-gray-400">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            <div className="w-14 h-14 rounded-xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <Icon icon={post.icon} className="w-7 h-7" />
            </div>
          </header>

          <div className="space-y-6">
            {post.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-gray-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
