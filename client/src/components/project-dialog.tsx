import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const getTagColor = (tag: string) => {
  const colorMap: { [key: string]: string } = {
    "Social Platform": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Real-time Chat": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "File Sharing": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "Mystery Stories": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    "Unexplained": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "Paranormal": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "AI-Powered": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Pattern Generation": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Crochet Design": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    "Privacy Browser": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    "WebGL": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "Tor Integration": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    "Cryptocurrency": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "Security": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "Multi-Signature": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  };
  return colorMap[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
};

const getButtonColor = (projectId: string) => {
  const colorMap: { [key: string]: string } = {
    spacelink: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800",
    obscure: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800",
    secureshare: "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800",
    onionbrowser: "bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800",
    cryptovault: "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-800",
  };
  return colorMap[projectId] || "bg-primary hover:bg-primary/90";
};

export function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
            />
          </div>
          
          <div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            {project.features.length > 0 && (
              <div className="space-y-4 mb-6">
                {project.features.map((feature, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={getTagColor(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            {project.link ? (
              <Button
                asChild
                className={`text-white ${getButtonColor(project.id)}`}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.linkText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button
                className={`text-white ${getButtonColor(project.id)}`}
                disabled
              >
                {project.linkText}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
