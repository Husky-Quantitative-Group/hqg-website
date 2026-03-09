import { motion } from "framer-motion";
import { blogPosts, categoryColors, BlogPost } from "@/data/blogPosts";
import { ArrowUpRight, Calendar, Clock, User, BookOpen } from "lucide-react";

interface BlogListSectionProps {
  activeCategory: string | null;
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group col-span-full lg:col-span-2"
    >
      <a href={`/blog/${post.id}`} className="block">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8 bg-card border border-border rounded-sm hover:border-hqg-umber/30 transition-colors">
          {/* Left side - decorative visualization */}
          <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-hqg-parchment to-hqg-ivory dark:from-background dark:to-card/50 rounded-sm border border-hqg-umber/10 overflow-hidden relative">
            {/* Abstract pattern based on category */}
            <div className="absolute inset-0 opacity-40">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id="featured-grid"
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.3"
                      className="text-hqg-umber/30"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#featured-grid)" />
                {/* Data flow lines */}
                <path
                  d="M 20 180 Q 80 120, 150 160 T 280 100 T 380 140"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-hqg-umber/50"
                />
                <path
                  d="M 20 220 Q 100 180, 180 200 T 300 160 T 380 180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-hqg-verdigris/40"
                />
                {/* Data points */}
                <circle cx="150" cy="160" r="5" className="fill-hqg-umber/60" />
                <circle cx="280" cy="100" r="4" className="fill-hqg-umber/40" />
                <circle cx="180" cy="200" r="4" className="fill-hqg-verdigris/50" />
                <circle cx="300" cy="160" r="3" className="fill-hqg-verdigris/40" />
              </svg>
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-hqg-umber text-white text-xs font-ui font-bold uppercase tracking-wider rounded-sm">
                <BookOpen className="w-3 h-3" />
                Featured
              </span>
            </div>

            {/* Figure notation */}
            <div className="absolute bottom-4 right-4">
              <span className="font-mono text-xs text-hqg-umber/60 bg-background/80 backdrop-blur-sm px-2 py-1 border border-hqg-umber/20 rounded-sm">
                [ Fig. {post.id} ]
              </span>
            </div>
          </div>

          {/* Right side - content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-2.5 py-1 rounded-sm text-xs font-medium ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {post.date}
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-display font-semibold text-foreground group-hover:text-hqg-umber transition-colors mb-4 leading-tight">
              {post.title}
            </h2>

            <p className="text-base leading-[1.7] text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-hqg-umber/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-hqg-umber">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground block">
                    {post.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-sm font-ui font-semibold text-hqg-umber group-hover:gap-2 transition-all">
                Read Article
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <a
        href={`/blog/${post.id}`}
        className="block h-full p-6 bg-card border border-border rounded-sm hover:border-hqg-umber/30 hover:shadow-sm transition-all"
      >
        {/* Header with category and date */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-2.5 py-1 rounded-sm text-xs font-medium ${categoryColors[post.category]}`}
          >
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-hqg-umber transition-colors mb-3 leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-[1.65] text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer with author info */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User className="w-3.5 h-3.5" />
            <span className="font-medium text-foreground">{post.author}</span>
            <span className="text-border">|</span>
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>

          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-hqg-umber transition-colors" />
        </div>

        {/* Tags */}
        {post.tags.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {post.tags
              .filter((tag) => tag !== post.category)
              .map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-ui font-bold uppercase tracking-[0.04em] px-2 py-0.5 bg-secondary/50 text-muted-foreground rounded-sm"
                >
                  {tag}
                </span>
              ))}
          </div>
        )}
      </a>
    </motion.article>
  );
}

export default function BlogListSection({
  activeCategory,
}: BlogListSectionProps) {
  // Filter posts based on active category
  const filteredPosts = activeCategory
    ? blogPosts.filter(
        (post) =>
          post.category === activeCategory ||
          post.tags.includes(activeCategory)
      )
    : blogPosts;

  // Get featured post (only show if viewing all or it matches the filter)
  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 pb-4 border-b border-border"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
              {activeCategory ? `/ ${activeCategory}` : "/ All Posts"}
            </span>
          </div>
          <span className="font-mono text-xs text-muted-foreground/60">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-muted-foreground/40" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              No posts found
            </h3>
            <p className="text-muted-foreground">
              No articles in this category yet. Check back soon.
            </p>
          </motion.div>
        )}

        {/* Posts grid */}
        {filteredPosts.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured post takes full width */}
            {featuredPost && <FeaturedPostCard post={featuredPost} />}

            {/* Regular posts */}
            {regularPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 p-8 lg:p-12 bg-card border border-border rounded-sm text-center"
        >
          <div className="max-w-xl mx-auto">
            <span className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-hqg-umber mb-4 block">
              Stay Updated
            </span>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
              Subscribe to our research digest
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest research insights, engineering deep-dives, and quant
              career advice delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@university.edu"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-sm text-sm font-ui placeholder:text-muted-foreground/50 focus:outline-none focus:border-hqg-umber/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 font-ui font-semibold text-sm uppercase tracking-[0.04em] bg-hqg-umber text-white hover:bg-hqg-terracotta transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-muted-foreground/60 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
