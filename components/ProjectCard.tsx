import Image from "next/image";
import { type IconType } from "react-icons";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  technologies: Technology[];
  description?: string;
}

export function ProjectCard({ title, image, link, technologies, description }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-foreground/10 bg-background/50 transition-all hover:border-foreground/20 hover:shadow-xl dark:bg-foreground/5">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative block aspect-video overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </a>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">{title}</h3>
        
        {description && (
          <p className="mb-4 text-sm text-foreground/70 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="flex items-center gap-1.5 rounded-full border border-foreground/5 bg-background/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm"
              title={tech.name}
            >
              <tech.icon style={{ color: tech.color }} className="text-sm" />
              <span className="text-foreground/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
