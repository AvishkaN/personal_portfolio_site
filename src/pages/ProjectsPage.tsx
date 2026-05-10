import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const categories = ["All Systems", "Robotics", "Computer Vision", "AI Agents"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Systems");

  const filteredProjects = activeCategory === "All Systems"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="mb-8 md:mb-12">
        <h1 className="text-foreground text-3xl md:text-6xl font-bold leading-tight tracking-tight font-display mb-4 md:mb-6">
          Project Gallery
        </h1>
        <p className="text-muted-foreground text-base md:text-xl max-w-3xl leading-relaxed">
          Exploring the frontiers of Robotics and AI. A showcase of autonomous systems, computer vision pipelines, and large-scale automation frameworks.
        </p>
      </div>
      
      <div className="mb-8 md:mb-12 border-b border-border">
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-0 md:gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative py-3 md:py-4 px-4 md:px-8 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all border-b-2 text-center ${
                activeCategory === category
                  ? "nav-tab-active border-primary"
                  : "text-muted-foreground border-transparent hover:text-primary hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row w-full min-h-[480px] overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 transition-all group"
          >
            <div className="lg:w-[55%] relative overflow-hidden bg-background">
              {project.featured && (
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <div className="bg-primary px-3 py-1 text-primary-foreground text-[10px] font-bold rounded tracking-tighter uppercase">Featured</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent z-10"></div>
              <div
                className="w-full h-full min-h-[300px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
            </div>
            <div className="lg:w-[45%] p-10 md:p-14 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-[10px] font-bold rounded uppercase tracking-widest ${
                      project.featured
                        ? "bg-primary/10 border border-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-foreground text-3xl font-bold leading-tight mb-6 font-display">{project.title}</h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-primary-foreground text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  View Case Study
                </Link>
                <button className="github-btn-glow flex items-center justify-center gap-2 rounded-lg h-12 px-6 border border-border text-muted-foreground text-sm font-bold hover:border-primary/50 hover:text-primary transition-all">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 md:p-16 rounded-3xl bg-primary text-primary-foreground flex flex-col lg:flex-row justify-between items-center text-center lg:text-left shadow-2xl shadow-primary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 lg:max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to build the future?</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 lg:mb-0">
            Open for collaborations in Robotics, AI Engineering, and Machine Learning systems architecture. Let's discuss your next breakthrough.
          </p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="bg-background text-primary px-10 py-4 rounded-xl font-bold hover:bg-background/90 transition-all text-sm shadow-md"
          >
            Get in Touch
          </Link>
          <button className="bg-primary/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-xl font-bold hover:bg-primary/30 transition-all text-sm">
            GitHub Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
