import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../components/theme-switcher";
import { NewsletterSignup } from "../components/newsletter-signup";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 text-foreground">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center min-h-screen relative">
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>
        <Link to="/" className="absolute bottom-4 left-4 text-foreground/80 hover:text-foreground transition-colors">
          ← Home
        </Link>
        
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
            AI Setup. Integration. Training. Simplified.
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex gap-4 items-center text-foreground/80"
        >
          <a
            href="mailto:sales@strijder.online"
            className="text-base hover:text-foreground transition-colors"
          >
            sales@strijder.online
          </a>
          <span className="text-foreground/40">•</span>
          <a
            href="https://www.linkedin.com/in/louis-du-plessis-72a95923a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-foreground/40">•</span>
          <NewsletterSignup />
        </motion.div>
      </div>
    </div>
  );
}
