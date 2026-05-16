import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code2, CheckCircle2 } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-20 text-center">
        <h1 className="text-foreground text-3xl md:text-5xl font-bold font-display mb-4">
          Project Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  const allMedia = [project.image, ...project.gallery];

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-medium"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="mb-8 md:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-[10px] font-bold rounded uppercase tracking-widest bg-primary/10 border border-primary/20 text-primary">
            {project.category}
          </span>
          {project.status && (
            <span className="px-3 py-1 text-[10px] font-bold rounded uppercase tracking-widest bg-primary text-primary-foreground">
              {project.status}
            </span>
          )}
        </div>
        <h1 className="text-foreground text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-display mb-4 md:mb-6">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-base md:text-xl max-w-3xl leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} className="text-primary" />
            <span>{project.role}</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-card mb-4">
          <img
            src={allMedia[activeImage]}
            alt={`${project.title} screenshot ${activeImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {allMedia.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                activeImage === idx
                  ? "border-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {project.videoUrl && (
        <div className="mb-12">
          <h2 className="text-foreground text-2xl md:text-3xl font-bold font-display mb-6">
            Demo Video
          </h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-card">
            <iframe
              src={project.videoUrl}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {project.linkedInPostUrls && project.linkedInPostUrls.length > 0 && (
        <div className="mb-12">
          <h2 className="text-foreground text-2xl md:text-3xl font-bold font-display mb-6">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.linkedInPostUrls.map((url, idx) => (
              <div key={idx} className="flex justify-center w-full rounded-2xl overflow-hidden border border-border bg-card p-4 md:p-8">
                <iframe
                  src={url}
                  height="772"
                  width="504"
                  title={`Embedded LinkedIn post ${idx + 1}`}
                  className="max-w-full rounded-xl"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-foreground text-2xl md:text-3xl font-bold font-display mb-6">
            Overview
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>

          <h3 className="text-foreground text-xl md:text-2xl font-bold font-display mb-4">
            Key Features
          </h3>
          <ul className="space-y-3">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={20} className="text-primary" />
              <h3 className="text-foreground text-lg font-bold font-display">Tech Stack</h3>
            </div>
            <div className="space-y-3">
              {project.techStack.map((t) => (
                <div key={t.name} className="pb-3 border-b border-border last:border-0 last:pb-0">
                  <div className="text-foreground font-bold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{t.purpose}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg h-11 px-4 border border-border text-muted-foreground text-sm font-bold hover:border-primary/50 hover:text-primary transition-all"
                >
                  <Github size={16} /> View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg h-11 px-4 bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
