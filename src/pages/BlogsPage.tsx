import { useState } from "react";

const categories = ["All Posts", "Research", "Tutorials", "Robotics", "Automation"];

const blogPosts = [
  {
    id: 1,
    title: "Optimizing RL Agents for Real-world Robotics",
    description: "Exploring Sim2Real transfer techniques using Isaac Sim and domain randomization to bridge the gap between training and deployment.",
    category: "Robotics",
    date: "March 15, 2024",
    tags: ["Isaac Sim", "PyTorch", "PPO"],
    icon: "robot_2",
  },
  {
    id: 2,
    title: "Distributed Pipeline for Neural Architecture Search",
    description: "How to build a scalable Python-based automation layer for managing large-scale hyperparameter tuning across GPU clusters.",
    category: "Tutorials",
    date: "Feb 28, 2024",
    tags: ["Ray", "Kubernetes", "Python"],
    icon: "database",
  },
  {
    id: 3,
    title: "Edge-native Vision Transformers in ROS2",
    description: "Profiling the performance of quantized ViTs on Jetson Orin for real-time obstacle avoidance and spatial mapping.",
    category: "Research",
    date: "Feb 12, 2024",
    tags: ["TensorRT", "ROS2", "OpenCV"],
    icon: "visibility",
  },
  {
    id: 4,
    title: "Automated CI/CD for Embedded AI Systems",
    description: "Designing a robust pipeline that includes automated hardware-in-the-loop (HIL) testing for robotics firmware.",
    category: "Automation",
    date: "Jan 22, 2024",
    tags: ["Docker", "GitHub Actions", "Firmware"],
    icon: "terminal",
  },
  {
    id: 5,
    title: "State-Space Models for Control Sequences",
    description: "A mathematical deep-dive into using S4 models as an alternative to Transformers for long-sequence robotic sensor data.",
    category: "Research",
    date: "Jan 05, 2024",
    tags: ["Math", "PyTorch", "SSM"],
    icon: "analytics",
  },
  {
    id: 6,
    title: "Tactile Feedback Loops in Soft Robotics",
    description: "Integrating strain sensors with low-latency Python controllers for delicate object manipulation and adaptive gripping.",
    category: "Robotics",
    date: "Dec 18, 2023",
    tags: ["Sensors", "MicroPython", "Control Theory"],
    icon: "memory",
  },
];

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-grow pt-12 pb-20">
      <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter name-glow">
              Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Deep dives into Robotics, AI Automation, and Python engineering. Exploring the frontier of intelligent systems.
            </p>
          </div>
          <div className="w-full md:w-96">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary border border-border rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50 text-foreground"
                placeholder="Search technical articles..."
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-border pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground font-bold"
                  : "bg-secondary border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category === "Research" && <span className="material-symbols-outlined text-lg">science</span>}
              {category === "Tutorials" && <span className="material-symbols-outlined text-lg">terminal</span>}
              {category === "Robotics" && <span className="material-symbols-outlined text-lg">precision_manufacturing</span>}
              {category === "Automation" && <span className="material-symbols-outlined text-lg">auto_mode</span>}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group cursor-pointer">
              <div className="aspect-video w-full overflow-hidden relative bg-background">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full border border-primary/30 rounded flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <span className="material-symbols-outlined text-6xl text-primary/40">{post.icon}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-foreground">{post.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary border border-border rounded text-[10px] text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-muted-foreground/30">search_off</span>
            <p className="text-muted-foreground mt-4">No articles found matching your criteria.</p>
          </div>
        )}

        <div className="flex justify-center mt-20 gap-2">
          <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">1</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">2</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">3</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
