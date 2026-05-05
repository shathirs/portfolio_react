import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Briefcase, Calendar, Github } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-background px-4 py-16">
        <div className="container max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="glass rounded-xl p-8 text-center">
            <h1 className="text-2xl font-bold mb-3">Project not found</h1>
            <p className="text-muted-foreground">The project you are looking for does not exist.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="container max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="glass rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Calendar className="w-4 h-4" />
            <span className="font-mono text-sm">{project.year}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h1>

          {project.company && (
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm">{project.company}</span>
            </div>
          )}

          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Project Evidence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={`${project.slug}-${index}`}
                  src={image}
                  alt={`${project.title} evidence ${index + 1}`}
                  className="w-full h-52 sm:h-56 object-contain bg-background rounded-lg border border-border"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {project.videoEmbedUrl && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">{project.videoTitle || "Project Demo Video"}</h2>
              <div className="rounded-lg border border-border bg-background p-2">
                <iframe
                  src={project.videoEmbedUrl}
                  title={project.videoTitle || `${project.title} demo video`}
                  className="w-full h-64 md:h-96 rounded-md"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {project.videoDriveUrl && (
                <a
                  href={project.videoDriveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-3"
                >
                  Open in Google Drive
                </a>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetails;
