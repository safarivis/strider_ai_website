import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, AlertCircle } from "lucide-react";

export function ChatInterface() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://app.fastbots.ai") {
        console.log("Received message:", event.data);
        if (event.data.type === "ready") {
          setIframeLoaded(true);
          setError(null);
        } else if (event.data.message) {
          setResponse(event.data.message);
          setIsLoading(false);
          setError(null);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    if (!iframeLoaded) {
      setError("Chat service not ready. Please try again in a moment.");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    // Set a timeout for response
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      setError("Response timeout. Please try again.");
    }, 30000); // 30 second timeout

    // Send message to iframe
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          { type: "user_message", message: input },
          "https://app.fastbots.ai"
        );
        setInput("");
      } else {
        throw new Error("Chat service not available");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      setIsLoading(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  return (
    <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-0">
      {response && (
        <div className="p-4 border-b">
          <p className="text-sm">{response}</p>
        </div>
      )}
      {error && (
        <div className="p-2 text-red-500 flex items-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}
      <div className="p-4 flex gap-2">
        <Input
          placeholder={
            !iframeLoaded 
              ? "Connecting to chat service..." 
              : isLoading 
                ? "Waiting for response..." 
                : "ask about our ai solutions..."
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
          className="w-full max-w-lg border-0 focus-visible:ring-0 bg-transparent"
          disabled={isLoading || !iframeLoaded}
        />
        <Button 
          onClick={handleSend} 
          size="icon" 
          variant="ghost" 
          disabled={isLoading || !iframeLoaded}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <iframe
        ref={iframeRef}
        src="https://app.fastbots.ai/embed/cm3edvadc0c3dn8bjd7fvw1vl"
        style={{ display: 'none' }}
        title="Chatbot"
        onLoad={() => {
          console.log("iframe loaded");
          // We'll wait for the "ready" message instead of using onLoad
        }}
      />
    </Card>
  );
}