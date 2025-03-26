import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    // Set current path from window.location on client-side
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => currentPath === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" }
  ];

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-slate-900/95 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div variants={childVariants}>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://ext.same-assets.com/3530962384/3873595901.jpeg"
              alt="Havox"
              className="w-8 h-8 rounded border border-cyan-500/50"
            />
            <span className="font-bold text-xl text-slate-100">
              Havox<span className="text-cyan-400">.</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div key={item.path} variants={childVariants}>
              <Link
                to={item.path}
                onClick={() => setCurrentPath(item.path)}
                className={`text-sm relative ${
                  isActive(item.path)
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-slate-100"
                } transition-colors`}
              >
                {item.label}
                <AnimatePresence>
                  {isActive(item.path) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                      initial={{ width: 0, opacity: 0, left: "50%" }}
                      animate={{ width: "100%", opacity: 1, left: 0 }}
                      exit={{ width: 0, opacity: 0, left: "50%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <motion.div className="md:hidden" variants={childVariants}>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="text-slate-300">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-900 border-slate-700">
              <SheetHeader>
                <SheetTitle className="text-slate-100">
                  Havox<span className="text-cyan-400">.</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setCurrentPath(item.path)}
                    className={`text-lg relative group overflow-hidden ${
                      isActive(item.path)
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-slate-100"
                    } transition-colors`}
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400/50"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
