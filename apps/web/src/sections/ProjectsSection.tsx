import React from 'react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const ProjectsSection: React.FC = () => {
  const getProjectImageClass = (id: string) => {
    switch (id) {
      case 'elegance-others':
        // Centered fit with background fill so the circular logo is completely uncropped
        return 'w-full h-full object-contain p-4 sm:p-6 bg-[#94BBE9] transition-transform duration-500 group-hover:scale-105';
      case 'anger-management':
        // Zoomed in on central game menu buttons
        return 'w-full h-full object-cover object-center scale-125 transition-transform duration-500 group-hover:scale-130';
      case 'overtake-safety':
        // Clean fit for infographic banner
        return 'w-full h-full object-contain bg-[#07090E] p-1 transition-transform duration-500 group-hover:scale-[1.01]';
      default:
        return 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105';
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      {/* Section Header */}
      <div className="space-y-3 mb-16 max-w-2xl">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
          FEATURED PROJECTS
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Here are some of the selected projects that showcase my passion for software engineering, web development, and AI systems.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16 lg:space-y-24">
        {PORTFOLIO_DATA.projects.map((project: Project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
          >
            {/* Left: Project Image Frame */}
            <div className="lg:col-span-6">
              <div className="relative bg-[#141414] border border-neutral-800 rounded-3xl p-4 sm:p-6 overflow-hidden transition-all duration-300 group-hover:border-[#C6F432]/40 shadow-xl">
                {/* Category Pill */}
                <div className="absolute top-6 left-6 z-10 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-neutral-300 text-xs font-mono px-3.5 py-1.5 rounded-full">
                  {project.category}
                </div>

                {/* Project Screenshot Container */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={getProjectImageClass(project.id)}
                  />
                </div>
              </div>
            </div>

            {/* Right: Project Meta & Details */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Info Table Lines */}
              <div className="pt-2 border-t border-neutral-900 space-y-3">
                <div className="text-xs font-heading uppercase tracking-wider text-neutral-500 font-semibold pb-1">
                  PROJECT INFO
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-neutral-900 text-sm">
                  <span className="text-neutral-400">Year</span>
                  <span className="text-white font-medium">{project.year}</span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-neutral-900 text-sm">
                  <span className="text-neutral-400">Role</span>
                  <span className="text-white font-medium">{project.role}</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#C6F432] hover:underline underline-offset-4 transition-all"
                  >
                    <span>LIVE DEMO</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-white hover:text-[#C6F432] transition-colors"
                  >
                    <span>SEE ON GITHUB</span>
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};