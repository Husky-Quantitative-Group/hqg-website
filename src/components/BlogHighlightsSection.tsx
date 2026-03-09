import { motion } from "framer-motion";
import { blogPosts, categoryColors } from "@/data/blogPosts";

export default function BlogHighlightsSection() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

  return (
    <section id="blog" className="py-16 lg:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            From the Blog
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-foreground">
              Latest insights
            </h2>
            <a
              href="/blog"
              className="font-ui text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              View all posts →
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured post */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 group"
            >
              <a href={`/blog/${featuredPost.id}`} className="block">
                <div className="aspect-[16/9] bg-background rounded-sm border border-border mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-hqg-umber/10 via-transparent to-hqg-verdigris/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono-hqg text-6xl text-muted-foreground/20 select-none">
                      {"{ }"}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-sm text-xs font-medium ${categoryColors[featuredPost.category]}`}>
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featuredPost.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-base leading-[1.7] text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-6 h-6 rounded-full bg-hqg-stone/30" />
                    <span className="text-sm font-medium text-foreground">
                      {featuredPost.author}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          )}

          {/* Recent posts list */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="font-mono-hqg text-xs uppercase tracking-[0.1em] text-muted-foreground pb-3 border-b border-border">
              Recent Posts
            </h4>
            {recentPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <a
                  href={`/blog/${post.id}`}
                  className="block p-4 -mx-4 rounded-sm hover:bg-background transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded-sm text-xs font-medium ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-[1.6] text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs font-medium text-foreground">
                      {post.author}
                    </span>
                    <span className="text-muted-foreground text-xs">·</span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
