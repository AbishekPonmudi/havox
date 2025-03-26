import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, url: "https://github.com/AbishekPonmudi", label: "GitHub" },
    { icon: <Twitter className="h-4 w-4" />, url: "https://x.com/Havox03", label: "Twitter" },
    { icon: <Linkedin className="h-4 w-4" />, url: "https://www.linkedin.com/in/abishek-ponmudi/", label: "LinkedIn" },
    { icon: <Mail className="h-4 w-4" />, url: "mailto:havox004@gmail.com", label: "Email" }
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://ext.same-assets.com/3530962384/3873595901.jpeg"
                alt="Havox"
                className="w-8 h-8 rounded border border-cyan-500/50"
              />
              <span className="font-bold text-xl text-slate-100">
                Havox<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Security researcher and ethical hacker focused on developing tools and enhancing cybersecurity.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-slate-200 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-200 mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 rounded text-slate-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Havox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
