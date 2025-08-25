import { useState } from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { Download, FileText, Eye, RotateCcw, CheckCircle, AlertTriangle, Info } from "lucide-react";

interface ReportData {
  title: string;
  summary: string;
  risks: string[];
  recommendations: string[];
  compliance: string;
}

export const ReportSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [reportData] = useState<ReportData>({
    title: "Contract Analysis Report",
    summary: "Comprehensive analysis of your legal document completed successfully.",
    risks: [
      "Liability clause may expose company to excessive risk",
      "Termination notice period is shorter than industry standard",
      "Intellectual property rights not clearly defined"
    ],
    recommendations: [
      "Negotiate liability cap limitations",
      "Extend termination notice to 60 days",
      "Add specific IP ownership clauses"
    ],
    compliance: "Document meets 89% of regulatory requirements"
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Detailed
            </span>{" "}
            <span className="text-foreground">Analysis Report</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get comprehensive insights and actionable recommendations for your legal documents.
          </p>
        </div>

        {/* 3D Flipping Card */}
        <div className="relative h-96 mb-8" style={{ perspective: '1000px' }}>
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={handleFlip}
          >
            {/* Front of card */}
            <div className="absolute inset-0 glass-card p-8 backface-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Analysis Complete</h3>
                    <p className="text-muted-foreground">Click to view details</p>
                  </div>
                </div>
                <RotateCcw className="w-6 h-6 text-muted-foreground animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="glass-card p-4 bg-accent/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Document Processed</span>
                  </div>
                  <p className="text-muted-foreground">{reportData.summary}</p>
                </div>

                <div className="glass-card p-4 bg-primary/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Info className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Compliance Score</span>
                  </div>
                  <p className="text-muted-foreground">{reportData.compliance}</p>
                </div>

                <div className="glass-card p-4 bg-destructive/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-foreground">Risks Identified</span>
                  </div>
                  <p className="text-muted-foreground">{reportData.risks.length} potential issues found</p>
                </div>
              </div>
            </div>

            {/* Back of card */}
            <div className="absolute inset-0 glass-card p-8 rotate-y-180 backface-hidden">
              <div className="h-full overflow-y-auto">
                <h3 className="text-xl font-semibold text-foreground mb-6">{reportData.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-destructive mb-3 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Risk Assessment
                    </h4>
                    <ul className="space-y-2">
                      {reportData.risks.map((risk, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Recommendations
                    </h4>
                    <ul className="space-y-2">
                      {reportData.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NeonButton variant="glow" size="lg" className="group">
            <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Download Full Report
          </NeonButton>
          <NeonButton variant="outline" size="lg" className="group">
            <Eye className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            View in Browser
          </NeonButton>
        </div>

        {/* Report Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Comprehensive Analysis
            </h4>
            <p className="text-muted-foreground">
              Detailed breakdown of clauses, terms, and legal implications.
            </p>
          </div>
          
          <div className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Actionable Insights
            </h4>
            <p className="text-muted-foreground">
              Clear recommendations to improve your legal documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};