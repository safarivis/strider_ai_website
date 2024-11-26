import { motion } from "framer-motion";
import { ChatInterface } from "./components/chat-interface";
import { siteConfig } from "./lib/constants";
import { ThemeSwitcher } from "./components/theme-switcher";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 text-foreground">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center min-h-screen relative">
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 mt-32 w-full max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
          >
            {siteConfig.name}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-full max-w-xl mt-auto mb-8"
        >
          <ChatInterface />
        </motion.div>
      </div>
    </div>
  );
}

export default App;