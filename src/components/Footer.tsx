import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Phone,
  Mail,
} from "lucide-react";

export const Footer = () => {
  const iconStyle =
    "flex items-center justify-center rounded-full border border-1 border-cyan-400 w-10 h-10 text-cyan-400 hover:text-cyan-500 transition-all duration-300";

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-2xl mb-6">
            <span className="mr-2">Start a project</span>
            <span className="inline-block animate-bounce">🚀</span>
          </h2>

          <p className="text-gray-400 mb-8">
            Interested in making waves together? Let&apos;s connect and build
            something amazing.
          </p>

          <div className="w-32 h-1 bg-cyan-400 mx-auto mb-10"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://www.facebook.com/davistheweb.dev"
              target="_blank"
              className={iconStyle}
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://x.com/davistheweb"
              className={iconStyle}
              aria-label="Twitter"
              target="_blank"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/davistheweb.dev"
              className={iconStyle}
              aria-label="Instagram"
              target="_blank"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.github.com/davistheweb"
              className={iconStyle}
              aria-label="GitHub"
              target="_blank"
            >
              <Github size={18} />
            </a>
            <a
              href="https://wa.me/+2349018268069"
              className={iconStyle}
              aria-label="WhatsApp"
              target="_blank"
            >
              <Phone size={18} />
            </a>
            <a
              href="mailto:josiahdave001@gmail.com"
              className={iconStyle}
              aria-label="Email"
              target="_blank"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="pt-8 border-t border-gray-800 text-sm">
            <p>&copy; {year} · Built by Davistheweb</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
