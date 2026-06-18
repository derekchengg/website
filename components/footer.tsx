import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-16 border-t border-border/30">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-foreground">Derek Cheng</p>
          <div className="flex items-center gap-5 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/derekchengg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/derek--cheng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-10">
        © {new Date().getFullYear()} Derek Cheng
      </p>
    </footer>
  );
}

export default Footer;
