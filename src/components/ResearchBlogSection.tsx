import { motion } from "framer-motion";
import { blogPosts, categoryColors } from "@/data/blogPosts";
import { ArrowUpRight } from "lucide-react";

export default function ResearchBlogSection() {
  // Filter posts that have the "Research" tag
  const researchPosts = blogPosts.filter((post) =>
    post.tags.includes("Research")
  );
  const featuredPost = researchPosts.find((post) => post.featured);
  const otherPosts = researchPosts.filter((post) => !post.featured);

  return (
    <section id="research-posts" className="py-16 lg:py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-hqg-umber" />
            <span className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-hqg-umber">
              Research Blog
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-[-0.01em] text-foreground mb-2">
                Latest Research
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Deep dives into quantitative methods, market analysis, and strategy development
                from our research team.
              </p>
            </div>
            <a
              href="/blog"
              className="font-ui text-sm font-medium text-hqg-umber hover:text-hqg-terracotta transition-colors flex items-center gap-1"
            >
              View all posts
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Posts grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured post - larger card */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 group"
            >
              <a href={`/blog/${featuredPost.id}`} className="block">
                <div className="aspect-[16/10] bg-gradient-to-br from-hqg-parchment to-hqg-ivory dark:from-background dark:to-card rounded-sm border border-hqg-umber/10 mb-6 overflow-hidden relative">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <pattern id="research-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-hqg-umber/20" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#research-grid)" />
                      {/* Abstract data visualization */}
                      <path
                        d="M 50 200 Q 100 150, 150 180 T 250 140 T 350 160"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-hqg-umber/40"
                      />
                      <circle cx="50" cy="200" r="4" className="fill-hqg-umber/60" />
                      <circle cx="150" cy="180" r="4" className="fill-hqg-umber/60" />
                      <circle cx="250" cy="140" r="4" className="fill-hqg-umber/60" />
                      <circle cx="350" cy="160" r="4" className="fill-hqg-umber/60" />
                    </svg>
                  </div>
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-hqg-umber text-white text-xs font-ui font-bold uppercase tracking-wider rounded-sm">
                      Featured
                    </span>
                  </div>
                  {/* Figure number */}
                  <div className="absolute bottom-4 right-4">
                    <span className="font-mono text-xs text-hqg-umber/60 bg-background/80 backdrop-blur-sm px-2 py-1 border border-hqg-umber/20 rounded-sm">
                      [ Fig. 1 ]
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded-sm text-xs font-medium ${categoryColors[featuredPost.category]}`}
                    >
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featuredPost.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground group-hover:text-hqg-umber transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-base leading-[1.7] text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-7 h-7 rounded-full bg-hqg-umber/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-hqg-umber">
                        {featuredPost.author.charAt(0)}
                      </span>
                    </div>
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

          {/* Other posts list */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 pb-4 border-b border-border mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                More Research
              </span>
              <span className="text-xs text-hqg-umber/60 font-mono">
                ({otherPosts.length})
              </span>
            </div>
            <div className="space-y-1">
              {otherPosts.map((post, i) => (
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
                    className="block p-4 -mx-4 rounded-sm hover:bg-background transition-colors border-b border-border/50 last:border-0"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-2 py-0.5 rounded-sm text-xs font-medium ${categoryColors[post.category]}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-foreground group-hover:text-hqg-umber transition-colors mb-1.5">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-[1.6] text-muted-foreground line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-foreground">
                          {post.author}
                        </span>
                        <span className="text-muted-foreground text-xs">·</span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-hqg-umber transition-colors" />
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>

            {/* Empty state if no other posts */}
            {otherPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-sm">
                  More research posts coming soon.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground mb-4">
            Interested in contributing to our research?
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-6 py-3 font-ui font-semibold text-sm uppercase tracking-[0.06em] bg-hqg-umber/10 text-hqg-umber border border-hqg-umber/20 hover:bg-hqg-umber hover:text-white transition-colors duration-200 rounded-sm"
          >
            Join Our Research Team
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
