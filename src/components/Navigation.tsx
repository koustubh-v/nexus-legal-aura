import { NeonButton } from "@/components/ui/neon-button";
import { Home, Upload, MessageCircle, FileText, Scale } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">LegalAI</h1>
              <p className="text-xs text-muted-foreground">Document Assistant</p>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">
            <NeonButton variant="glass" size="icon" className="group">
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </NeonButton>
            <NeonButton variant="glass" size="icon" className="group">
              <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </NeonButton>
            <NeonButton variant="glass" size="icon" className="group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </NeonButton>
            <NeonButton variant="glass" size="icon" className="group">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </NeonButton>
          </div>
        </div>
      </div>
    </nav>
  );
};