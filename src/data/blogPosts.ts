export interface BlogPost {
  id: number;
  category: string;
  tags: string[];
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Research",
    tags: ["Research", "Quant"],
    title: "Building a Factor Model from Scratch",
    excerpt: "A deep dive into constructing multi-factor equity models using Python and open-source data, from signal generation to portfolio optimization.",
    author: "Sarah Chen",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Engineering",
    tags: ["Engineering", "Infrastructure"],
    title: "Low-Latency Data Pipelines with Kafka",
    excerpt: "How we architected our real-time market data ingestion system to handle 100k+ messages per second with minimal lag.",
    author: "Marcus Rodriguez",
    date: "Feb 21, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Career",
    tags: ["Career"],
    title: "Breaking into Quant: A Junior's Guide",
    excerpt: "Practical advice on recruiting timelines, technical prep, and what top firms actually look for in undergraduate candidates.",
    author: "Emily Park",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Research",
    tags: ["Markets", "Research"],
    title: "Volatility Regimes and Regime Detection",
    excerpt: "Exploring hidden Markov models for identifying market regimes and adapting strategy exposure dynamically.",
    author: "James Liu",
    date: "Feb 7, 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    category: "Engineering",
    tags: ["Engineering", "Python"],
    title: "Optimizing Python for Backtesting at Scale",
    excerpt: "Techniques we used to achieve 50x speedups in our backtesting engine using Numba, vectorization, and clever memory management.",
    author: "Alex Kim",
    date: "Jan 31, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Engineering",
    tags: ["Engineering", "Infrastructure"],
    title: "Building a Real-Time Order Management System",
    excerpt: "Architecture deep-dive into our OMS: handling order routing, position tracking, and risk checks with sub-millisecond latency.",
    author: "Marcus Rodriguez",
    date: "Jan 24, 2026",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 7,
    category: "Engineering",
    tags: ["Engineering", "DevOps"],
    title: "CI/CD for Quantitative Research",
    excerpt: "How we set up automated testing and deployment pipelines for research code, ensuring reproducibility and rapid iteration.",
    author: "Jordan Lee",
    date: "Jan 17, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 8,
    category: "Engineering",
    tags: ["Engineering", "Data"],
    title: "Time-Series Database Selection: Our Journey",
    excerpt: "Comparing TimescaleDB, InfluxDB, and QuestDB for tick data storage. Benchmarks, trade-offs, and our final choice.",
    author: "Priya Sharma",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    featured: false,
  },
];

export const categoryColors: Record<string, string> = {
  Research: "bg-hqg-umber/15 text-hqg-umber",
  Engineering: "bg-eng-cyan/15 text-eng-cyan dark:bg-eng-cyan/20 dark:text-eng-cyan",
  Career: "bg-hqg-terracotta/15 text-hqg-terracotta",
  Markets: "bg-hqg-patina/15 text-hqg-patina",
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter((post) => post.tags.includes(tag));
};

export const getEngineeringPosts = (): BlogPost[] => {
  return getPostsByTag("Engineering");
};
