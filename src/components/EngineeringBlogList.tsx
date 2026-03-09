import { getEngineeringPosts } from "@/data/blogPosts";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";

const BlogPostRow = ({
  title,
  excerpt,
  date,
  author,
  tags,
  readTime,
  index,
}: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  index: number;
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a
      href={`/blog/${title}`}
      className="group block border-b border-border py-6 sm:py-8 hover:bg-secondary/30 transition-colors -mx-6 sm:-mx-10 px-6 sm:px-10"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        {/* Index number */}
        <div className="hidden sm:block shrink-0 w-12">
          <span className="font-mono text-sm text-muted-foreground/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-base text-lg sm:text-xl font-semibold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors flex items-start gap-2">
            <span>{title}</span>
            <ArrowUpRight className="w-4 h-4 mt-1 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-ui">
              <User className="w-3 h-3" />
              {author}
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1 font-ui">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1 font-ui">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap sm:flex-col gap-1.5 shrink-0 sm:items-end">
          {tags
            .filter((t) => t !== "Engineering")
            .map((tag) => (
              <span
                key={tag}
                className="font-ui text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-0.5 rounded-sm border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </a>
  );
};

const BlogList = () => {
  const posts = getEngineeringPosts();

  return (
    <section className="max-w-[1400px] mx-auto px-6 sm:px-10 pb-8 sm:pb-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
            / Engineering Blog
          </span>
          <span className="font-mono text-[11px] text-hqg-terminal-green cursor-blink">
            ▌
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground/50">
          {posts.length} posts
        </span>
      </div>

      {/* Terminal-style filter bar */}
      <div className="flex items-center gap-2 mb-6 p-3 bg-secondary/50 rounded-sm border border-border font-mono text-xs text-muted-foreground">
        <span className="text-hqg-terminal-green">$</span>
        <span>hqg blog --filter</span>
        <span className="px-1.5 py-0.5 bg-primary/10 text-primary rounded-sm font-semibold">
          tag:engineering
        </span>
        <span className="text-muted-foreground/40">
          --sort date:desc
        </span>
      </div>

      {/* Posts */}
      <div>
        {posts.map((post, i) => (
          <BlogPostRow key={post.id} {...post} index={i} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
