import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const BlogCard = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="border-2 border-gray-200 rounded-2xl bg-white p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
        <Icon icon={post.icon} className="w-6 h-6" />
      </div>

      <div className="flex items-center gap-3 text-xs">
        <span className="font-semibold text-gray-700 bg-gray-100 rounded-full px-3 py-1">
          {post.category}
        </span>
        <span className="text-gray-400">{post.date}</span>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <span className="mt-auto text-sm font-semibold text-gray-900 inline-flex items-center gap-1">
        Devamını Oku
        <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
      </span>
    </Link>
  );
};

export default BlogCard;
