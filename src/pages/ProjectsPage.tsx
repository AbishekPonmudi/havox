import { Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Page transition animation
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "PlanqX EDR",
      description: "Open-source Endpoint Detection and Response tool designed for advanced threat detection",
      details: "A comprehensive security solution with cloud-native architecture that forwards system logs, telemetry, and data to a server for analysis and incident response.",
      features: [
        "Real-time threat detection for process injections and malware",
        "Network traffic analysis to block malicious domains and DDoS attempts",
        "Scalable endpoint management",
        "Vulnerability detection using CVE databases"
      ],
      github: "https://github.com/AbishekPonmudi/PlanqX_EDR-Endpoint-Detection-and-Response/tree/V1.0.1--Testing",
      image: "https://ext.same-assets.com/360618708/3897369204.png",
      technologies: ["C++", "Python", "Windows API", "ETW"]
    },
    {
      title: "Windows Authenticator",
      description: "Security script adding an extra authentication layer to PowerShell and Command Prompt",
      details: "Enhances Windows security by requiring credential validation before granting access to sensitive operations, mimicking Linux's sudo-like functionality.",
      features: [
        "Registry-based access control mechanism",
        "Credential validation workflow",
        "Secure authentication for critical commands",
        "User-friendly implementation"
      ],
      github: "https://github.com/AbishekPonmudi/Command-Privelage-Management-for-Powershell",
      image: "https://ext.same-assets.com/3701033077/641136483.png",
      technologies: ["PowerShell", "Windows Registry", "Credential Management"]
    },
    {
      title: "Vulnerability Scanner",
      description: "Python-based scanner that identifies system weaknesses across different platforms",
      details: "Leveraging external APIs and CVE databases, this tool scans configurations, firewall settings, ports, and more to detect vulnerabilities and suggest patches.",
      features: [
        "Cross-platform support for Windows and Linux",
        "API integration with security databases",
        "Comprehensive system analysis",
        "Actionable remediation suggestions"
      ],
      github: "https://github.com/AbishekPonmudi/Vulner_scanner",
      image: "https://ext.same-assets.com/1433717099/2443598521.png",
      technologies: ["Python", "CVE Database", "API Integration", "Security Analysis"]
    }
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-20"
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div
        className="text-center mb-16"
        variants={itemVariants}
      >
        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          Security Projects
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A collection of cybersecurity tools and applications I've developed to address real-world security challenges.
        </p>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
            variants={itemVariants}
          >
            {/* Project Image */}
            <div className="md:w-2/5">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-2 bg-cyan-400/20 rounded"></div>
                <div className="relative z-10 bg-slate-800/90 p-4 rounded border border-slate-700 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded object-contain h-52 mx-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Project Details */}
            <div className="md:w-3/5">
              <h2 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h2>
              <p className="text-cyan-400 text-lg mb-4">{project.description}</p>
              <p className="text-slate-400 mb-6">{project.details}</p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-slate-200 font-medium mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="text-slate-400 flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                      >
                        <span className="text-cyan-400 mr-2">▹</span> {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-200 font-medium mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                      >
                        <Badge className="bg-slate-800 hover:bg-slate-700 text-slate-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Source</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-24"
        variants={itemVariants}
      >
        <h3 className="text-slate-200 text-xl font-medium mb-4">More Projects</h3>
        <p className="text-slate-400 mb-6">
          Explore additional projects and contributions on my GitHub profile.
        </p>
        <a
          href="https://github.com/AbishekPonmudi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
              <Github className="mr-2 h-4 w-4" />
              View GitHub Profile
            </Button>
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
