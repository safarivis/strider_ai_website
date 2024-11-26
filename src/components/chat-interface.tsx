import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";

export function ChatInterface() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    // Handle send logic here
    setInput("");
  };

  return (
    <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-0">
      <div className="p-4 flex gap-2">
        <Input
          placeholder="ask about our ai solutions..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="w-full max-w-lg border-0 focus-visible:ring-0 bg-transparent"
        />
        <Button onClick={handleSend} size="icon" variant="ghost">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}