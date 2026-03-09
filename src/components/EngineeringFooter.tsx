import { Terminal } from "lucide-react";

const EngineeringFooter = () => (
  <footer className="border-t border-border py-8 sm:py-10">
    <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-hqg-terminal-green" />
          <span className="font-ui text-xs font-bold tracking-[0.06em] uppercase text-muted-foreground">
            HQG Engineering
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} HQG</span>
          <span className="text-border">·</span>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <span className="text-border">·</span>
          <a href="#" className="hover:text-foreground transition-colors">Main Site</a>
        </div>
      </div>
    </div>
  </footer>
);

export default EngineeringFooter;
