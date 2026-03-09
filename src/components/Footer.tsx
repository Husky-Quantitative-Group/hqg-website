export default function Footer() {
  return (
    <footer id="team" className="border-t border-border bg-card py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-display text-xl font-bold text-foreground">HQG</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Husky Quantitative Group — UConn's student-run quantitative
              trading organization.
            </p>
          </div>
          <div>
            <p className="font-ui text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground mb-4">
              Links
            </p>
            <div className="space-y-2 font-ui font-bold">
              {["About Us", "Research", "Engineering", "Apply"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(" ", "")}`}
                  className="block text-sm text-secondary-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-ui text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground mb-4">
              Connect
            </p>
            <div className="space-y-2 font-ui font-bold">
              <a
                href="https://github.com/Husky-Quantitative-Group"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-secondary-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:hqg@uconn.edu"
                className="block text-sm text-secondary-foreground hover:text-primary transition-colors"
              >
                hqg@uconn.edu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Husky Quantitative Group. All rights reserved.
          </p>
          <p className="font-mono-hqg text-xs text-muted-foreground">
            University of Connecticut
          </p>
        </div>
      </div>
    </footer>
  );
}
