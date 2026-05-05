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
      "Portfolio: shathir-sheriff.vercel.app",
      "LinkedIn: https://www.linkedin.com/in/shathir-sheriff/",
      "",
      "Professional summary from CV:",
      "Final year Software Engineering undergraduate student with strong interest in MERN stack development and hands-on full-stack experience using MongoDB, Express.js, React, and Node.js.",
      "",
      "Technical skills from CV:",
      "- Frontend: React.js, Next.js, HTML, CSS, Bootstrap, Tailwind CSS",
      "- Backend: Node.js, Express.js, REST APIs, PHP",
      "- Databases: MongoDB, MySQL",
      "- Tools: Git, GitHub, Postman, VS Code, Cursor",
      "- Concepts: CRUD operations, Agile methodology",
      "- Cloud: AWS",
      "",
      "Education:",
      "- BSc (Hons) in Software Engineering, University of Bedfordshire (2025 - Present)",
      "- Higher Diploma in Information Technology, SLIIT City Uni (2022 - 2025)",
      "",
      "Certifications and achievements:",
      "- Certificate in Next Gen-AI Bootcamp (Codewave Academy)",
      "- Certificate in Artificial Intelligence (AII)",
      "- AI & ML certificate from American Institute of Innovation",
      "- Certificate in Human Resource Management (CIPM)",
      "- G.C.E. Advance Level Certificate (D.S. Senanayaka National School Beruwala)",
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
