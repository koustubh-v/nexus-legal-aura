import { Scale, Mail, Phone, MapPin, Shield, FileText, Users } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

export const Footer = () => {
  return (
    <footer className="relative py-20 px-6 mt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      <div className="absolute inset-0 bg-gradient-neon opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Scale className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">LegalAI</h3>
                <p className="text-muted-foreground">Document Assistant</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Advanced AI-powered legal document analysis platform designed to provide 
              instant insights and comprehensive compliance checking for legal professionals 
              and businesses.
            </p>
            <div className="flex space-x-4">
              <NeonButton variant="glass" size="icon">
                <Mail className="w-5 h-5" />
              </NeonButton>
              <NeonButton variant="glass" size="icon">
                <Phone className="w-5 h-5" />
              </NeonButton>
              <NeonButton variant="glass" size="icon">
                <MapPin className="w-5 h-5" />
              </NeonButton>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contract Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Compliance Checking
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Risk Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Document Review
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Security badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
            <h5 className="font-semibold text-foreground mb-2">Bank-Level Security</h5>
            <p className="text-sm text-muted-foreground">256-bit SSL encryption for all data</p>
          </div>
          <div className="glass-card p-6 text-center">
            <FileText className="w-12 h-12 text-accent mx-auto mb-3" />
            <h5 className="font-semibold text-foreground mb-2">GDPR Compliant</h5>
            <p className="text-sm text-muted-foreground">Full data protection compliance</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Users className="w-12 h-12 text-secondary mx-auto mb-3" />
            <h5 className="font-semibold text-foreground mb-2">Professional Grade</h5>
            <p className="text-sm text-muted-foreground">Trusted by legal professionals</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 LegalAI Document Assistant. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">
                <strong className="text-primary">Disclaimer:</strong> This AI tool provides analysis 
                for informational purposes only and does not constitute legal advice.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};