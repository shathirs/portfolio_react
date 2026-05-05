import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPortfolioAiReply } from "@/lib/aiChat";
import { projects } from "@/data/projects";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const PortfolioAiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I am Shathir's AI assistant. Ask me about projects, skills, education, or contact details."
    }
  ]);

  const portfolioContext = useMemo(() => {
    const projectSummary = projects
      .map((project) => `- ${project.title}: ${project.description}`)
      .join("\n");

    return [
      "Name: Shathir Sheriff",
      "Role: Software Engineering Student",
      "Email: sheriffshathir@gmail.com",
      "Phone: +94 71 4876 345",
      "Location: Kalutara South, Sri Lanka",
      "",
      "Projects:",
      projectSummary
    ].join("\n");
  }, []);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: trimmed
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await getPortfolioAiReply(trimmed, portfolioContext);
      const assistantMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const fallbackMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: "Something went wrong while fetching AI response. Please try again."
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-[340px] sm:w-[380px] h-[500px] glass border border-border rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/80">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-sm">Ask AI</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close AI chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-8 bg-primary text-primary-foreground"
                    : "mr-8 bg-secondary text-secondary-foreground"
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="mr-8 bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-sm">
                Thinking...
              </div>
            )}
          </div>

          <div className="p-3 border-t border-border bg-background/80">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <Button type="button" size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button type="button" className="rounded-full shadow-lg gap-2" onClick={() => setIsOpen(true)}>
          <MessageCircle className="w-4 h-4" />
          Ask AI
        </Button>
      )}
    </div>
  );
};

export default PortfolioAiChat;
