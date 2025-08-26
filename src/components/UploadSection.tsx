import { useState } from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { Upload, FileText, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, DOCX, or TXT file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 50MB.",
        variant: "destructive",
      });
      return;
    }

    setUploadedFile(file);
    setIsUploading(true);
    setUploadProgress(0);
    setUploadComplete(false);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setUploadComplete(true);
            toast({
              title: "Upload complete!",
              description: `${file.name} has been successfully analyzed.`,
            });
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    document.getElementById('file-input')?.click();
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Smart Document
            </span>{" "}
            <span className="text-foreground">Analysis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simply drag and drop your legal documents for instant AI-powered analysis and insights.
          </p>
        </div>

        {/* Upload Box */}
        <div
          className={`relative glass-card p-12 text-center border-2 border-dashed transition-all duration-300 cursor-pointer ${
            isDragging
              ? "neon-border animate-pulse-glow scale-105"
              : "border-glass-border hover:border-primary/50"
          } ${uploadComplete ? "border-accent" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <input
            id="file-input"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileInput}
          />
          {!isUploading && !uploadComplete ? (
            <>
              <div className="mb-6">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-primary p-6 animate-float">
                  <Upload className="w-full h-full text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Drop your legal documents here
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Supports PDF, DOC, DOCX files up to 50MB
              </p>
              
              <NeonButton variant="glow" size="lg" onClick={handleBrowseClick}>
                <FileText className="w-5 h-5 mr-2" />
                Browse Files
              </NeonButton>
            </>
          ) : uploadComplete ? (
            <div className="space-y-6">
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-primary p-6">
                <CheckCircle className="w-full h-full text-accent animate-pulse" />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Document Uploaded Successfully!
                </h3>
                <p className="text-muted-foreground mb-2">
                  Your document has been analyzed and is ready for AI review
                </p>
                <p className="text-sm text-accent">
                  File: {uploadedFile?.name}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-primary p-6">
                <Loader2 className="w-full h-full text-primary-foreground animate-spin" />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Processing Document...
                </h3>
                
                {/* 3D Progress Bar */}
                <div className="relative w-full h-6 glass-card rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-primary transition-all duration-300 rounded-full neon-glow"
                    style={{ width: `${uploadProgress}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-foreground">
                    {uploadProgress}%
                  </div>
                </div>
              </div>
              
              {uploadProgress === 100 && (
                <div className="flex items-center justify-center text-accent">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Upload Complete!</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Contract Analysis
            </h4>
            <p className="text-muted-foreground">
              Identify key clauses, risks, and obligations automatically.
            </p>
          </div>
          
          <div className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Compliance Check
            </h4>
            <p className="text-muted-foreground">
              Ensure documents meet legal standards and regulations.
            </p>
          </div>
          
          <div className="glass-card p-6 hover:scale-105 transition-transform md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
              <Loader2 className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Instant Processing
            </h4>
            <p className="text-muted-foreground">
              Get results in seconds, not hours or days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};