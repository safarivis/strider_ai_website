import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="cyberpunk"
      enableSystem={false}
      storageKey="theme"
      themes={["light", "dark", "cyberpunk"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
