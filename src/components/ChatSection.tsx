import { useState } from "react";
import { NeonButton } from "@/components/ui/neon-button";
import { Send, Mic, MicOff, Bot, User } from "lucide-react";
import aiAvatar from "@/assets/ai-avatar.jpg";
import aiLawyer1 from "@/assets/ai-lawyer-1.jpg";
import aiLawyer2 from "@/assets/ai-lawyer-2.jpg";

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI Legal Assistant. I've analyzed your document and I'm ready to answer any questions you have about it.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: "Based on your document analysis, I can provide detailed insights about that clause. The contract includes standard liability limitations that are commonly found in commercial agreements...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ask Your</span>{" "}
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              AI Assistant
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant answers about your legal documents through natural conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Avatar */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden glass-card p-4 animate-pulse-glow">
                <img 
                  src={aiAvatar} 
                  alt="AI Assistant Avatar"
                  className="w-full h-full object-cover rounded-full animate-hologram-flicker"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
              </div>
            </div>
            
            {/* 3D AI Lawyer Models */}
            <div className="flex space-x-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-lg overflow-hidden glass-card p-2 float-animation">
                  <img 
                    src={aiLawyer1} 
                    alt="AI Lawyer Assistant 1"
                    className="w-full h-full object-cover rounded-lg animate-hologram-flicker"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="w-24 h-24 rounded-lg overflow-hidden glass-card p-2 float-animation" style={{animationDelay: '1s'}}>
                  <img 
                    src={aiLawyer2} 
                    alt="AI Lawyer Assistant 2"
                    className="w-full h-full object-cover rounded-lg animate-hologram-flicker"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">LegalAI Assistant</h3>
              <p className="text-muted-foreground">
                Advanced AI trained on legal documents and case law
              </p>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="glass-card h-96 flex flex-col">
              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div className={`max-w-xs lg:max-w-md glass-card p-4 ${
                      message.type === 'user' 
                        ? 'bg-primary/20 rounded-br-none' 
                        : 'bg-accent/20 rounded-bl-none'
                    }`}>
                      <p className="text-foreground text-sm">{message.content}</p>
                      <div className="text-xs text-muted-foreground mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-glass-border">
                <div className="flex space-x-3">
                  <div className="flex-1 flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask about your document..."
                      className="input-neon flex-1"
                    />
                    <NeonButton
                      variant={isListening ? "glow" : "outline"}
                      size="icon"
                      onClick={toggleListening}
                      className={isListening ? "animate-pulse-glow" : ""}
                    >
                      {isListening ? (
                        <MicOff className="w-5 h-5" />
                      ) : (
                        <Mic className="w-5 h-5" />
                      )}
                    </NeonButton>
                  </div>
                  <NeonButton variant="glow" onClick={handleSendMessage}>
                    <Send className="w-5 h-5" />
                  </NeonButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};