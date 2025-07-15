import { useState } from "react";
import { ProjectDialog } from "@/components/project-dialog";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  tags: string[];
  link?: string;
  linkText: string;
}

const webProjects: Project[] = [
  {
    id: "spacelink",
    title: "SpaceLink",
    description: "Your personal universe of creativity, connection, and unlimited expression. Just like the golden days, but better.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      {
        title: "Unlimited Customization",
        description: "Create your space exactly how you want it. Custom CSS, themes, layouts - your creativity is the limit."
      },
      {
        title: "Massive File Sharing",
        description: "Share everything from small texts to full movies. Public gallery with ebooks, music, docs, and more."
      },
      {
        title: "Integrated Messaging",
        description: "Real-time chat that works seamlessly across web, Android, and iOS. Stay connected everywhere."
      }
    ],
    tags: ["Social Platform", "Real-time Chat", "File Sharing"],
    link: "https://connect-culture-jasonclarkagain.replit.app/",
    linkText: "Visit SpaceLink"
  },
  {
    id: "obscure",
    title: "The Obscure Chronicles",
    description: "Dive into the depths of the unexplained. From mysterious holes that defy physics to creatures that shouldn't exist, we chronicle the stories that conventional wisdom refuses to acknowledge.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      {
        title: "Featured Mysteries",
        description: "Each story has been carefully investigated and documented. These are not mere tales, but accounts that challenge our understanding of reality."
      },
      {
        title: "Categories",
        description: "Mysterious Landscapes, Abandoned Places, Unexplained Phenomena, and Mysterious Creatures."
      },
      {
        title: "Popular Stories",
        description: "Mel's Hole, Dyatlov Pass Incident, Mothman of Point Pleasant, Winchester Mystery House, and more."
      }
    ],
    tags: ["Mystery Stories", "Unexplained", "Paranormal"],
    link: "https://wandering-mysteries-jasonclarkagain.replit.app/",
    linkText: "Explore Chronicles"
  },
  {
    id: "secureshare",
    title: "Secure Share Hub",
    description: "An innovative AI-powered platform for creating and sharing crochet patterns. Transform text descriptions and images into detailed crochet instructions with advanced pattern generation.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      {
        title: "Text to Pattern",
        description: "Describe your crochet pattern in natural language and generate detailed stitch-by-stitch instructions."
      },
      {
        title: "Image Upload",
        description: "Upload images to automatically generate matching crochet patterns with color palettes and complexity options."
      },
      {
        title: "Interactive Preview",
        description: "2D/3D pattern visualization with grid view, color preview, and AR viewing capabilities."
      }
    ],
    tags: ["AI-Powered", "Pattern Generation", "Crochet Design"],
    link: "https://crochet-ai-canvas-undertheclearbl.replit.app/",
    linkText: "Try Pattern Generator"
  },
  {
    id: "onionbrowser",
    title: "Onion Browser",
    description: "A privacy-focused web browser built with WebGL technology, offering advanced security features and anonymous browsing capabilities for the modern web.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      {
        title: "WebGL Acceleration",
        description: "Harnesses WebGL for smooth, hardware-accelerated browsing with enhanced performance and visual capabilities."
      },
      {
        title: "Privacy Protection",
        description: "Built-in Tor integration, tracker blocking, and encrypted connections to protect your digital footprint."
      },
      {
        title: "Anonymous Browsing",
        description: "Multi-layer encryption and onion routing for complete anonymity and protection from surveillance."
      }
    ],
    tags: ["Privacy Browser", "WebGL", "Tor Integration"],
    link: "https://jason-clark.org/webgl/index.html",
    linkText: "Launch Browser"
  },
  {
    id: "cryptovault",
    title: "Crypto Vault",
    description: "Enterprise-grade cryptocurrency wallet and security platform featuring multi-signature protection, cold storage integration, and advanced threat detection for digital asset management.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      {
        title: "Multi-Signature Security",
        description: "Advanced multi-signature wallet technology requiring multiple approvals for enhanced transaction security."
      },
      {
        title: "Cold Storage Integration",
        description: "Seamless integration with hardware wallets and air-gapped systems for maximum asset protection."
      },
      {
        title: "Threat Detection",
        description: "Real-time monitoring and AI-powered threat detection to protect against sophisticated cyber attacks."
      }
    ],
    tags: ["Cryptocurrency", "Security", "Multi-Signature"],
    linkText: "Access Vault"
  }
];

const bookProjects: Project[] = [
  {
    id: "book1",
    title: "Book Project 1",
    description: "Description of first book project.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [],
    tags: ["Literature", "Writing"],
    linkText: "Read More"
  },
  {
    id: "book2",
    title: "Book Project 2",
    description: "Description of second book project.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [],
    tags: ["Fiction", "Publishing"],
    linkText: "Read More"
  },
  {
    id: "book3",
    title: "Book Project 3",
    description: "Description of third book project.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [],
    tags: ["Non-fiction", "Research"],
    linkText: "Read More"
  }
];

const photoProjects: Project[] = [
  {
    id: "photo1",
    title: "Photography Project 1",
    description: "Description of photography project.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [],
    tags: ["Photography", "Visual Arts"],
    linkText: "View Gallery"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const ProjectLink = ({ project, index }: { project: Project; index: number }) => (
    <button
      onClick={() => setSelectedProject(project)}
      className="project-link"
    >
      [{index + 1}]
    </button>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      </header>

      {/* Web Portfolio Section */}
      <section className="mb-12">
        <div className="border-t border-gray-300 mb-6"></div>
        <h2 className="text-3xl font-bold mb-6"># Web Portfolio</h2>
        <div className="space-x-2">
          {webProjects.map((project, index) => (
            <ProjectLink key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Books Section */}
      <section className="mb-12">
        <div className="border-t border-gray-300 mb-6"></div>
        <h2 className="text-3xl font-bold mb-6"># Books</h2>
        <div className="space-x-2">
          {bookProjects.map((project, index) => (
            <ProjectLink key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Photography Section */}
      <section className="mb-12">
        <div className="border-t border-gray-300 mb-6"></div>
        <h2 className="text-3xl font-bold mb-6"># Photography</h2>
        <div className="space-x-2">
          {photoProjects.map((project, index) => (
            <ProjectLink key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Project Dialog */}
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
