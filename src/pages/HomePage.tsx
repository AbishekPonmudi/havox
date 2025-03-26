import { Link } from "react-router-dom";
import { ArrowRight, Shield, Terminal, Server, Code, BookOpen, Database, Cloud, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="space-y-24">
      {/* Hero Section - Unchanged */}
      <section className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div
              className="lg:w-3/5 space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <p className="text-cyan-400 font-mono mb-2">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-2">
                Abishek <span className="text-cyan-400">(Havox)</span>
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="size-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </span>
                  <span>Security Researcher</span>
                </div>
                <span className="text-slate-600">|</span>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="size-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </span>
                  <span>Red Teaming</span>
                </div>
                <span className="text-slate-600">|</span>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="size-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </span>
                  <span>Cloud Security</span>
                </div>
              </div>
              <p className="text-slate-300 text-lg max-w-xl pt-3">
                I'm a cybersecurity researcher with working in Pentesting, security research and cloud + network security. My work focuses on developing audit and security tools and
                identifying vulnerabilities to create more secure systems.
              </p>
              <motion.div
                className="pt-4 flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/projects">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/10 px-5 py-6 rounded group">
                      Explore My Work
                      <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/blog">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-5 py-6 rounded group"
                    >
                      Read My Blog
                      <BookOpen className="ml-2 h-4 w-4 transition-all group-hover:scale-110" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-64 h-64 md:w-72 md:h-72 relative">
                <motion.div
                  className="absolute inset-2 bg-cyan-400/20 rounded"
                  animate={{
                    boxShadow: ["0px 0px 0px rgba(34,211,238,0.2)", "0px 0px 30px rgba(34,211,238,0.5)", "0px 0px 0px rgba(34,211,238,0.2)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                <motion.img
                  src="https://ext.same-assets.com/3530962384/3873595901.jpeg"
                  alt="Abishek"
                  className="absolute inset-0 object-cover w-full h-full rounded border-2 border-cyan-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Centered Alignment */}
      <div className="mb-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Featured Work</span>
          <h2 className="text-3xl font-bold text-slate-100 mt-2">Recent Projects</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore some of my recent security projects and tools developed to solve real-world cybersecurity challenges.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
            <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 text-cyan-400 flex items-center justify-center size-12 rounded-lg bg-slate-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-100 mb-2">PlanqX EDR</h3>
                <p className="text-cyan-400 mb-3 text-sm">Open-source Endpoint Detection & Response tool with advanced threat hunting capabilities.</p>
                <p className="text-slate-400 mb-4">A comprehensive security solution with cloud-native architecture that forwards system logs, telemetry, and data to a server for analysis and incident response.</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">C++</span>
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">Python</span>
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">Windows API</span>
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">ETW</span>
                </div>
                <Link to="/projects" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm group justify-center md:justify-start">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-1 group-hover:translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
            <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 text-cyan-400 flex items-center justify-center size-12 rounded-lg bg-slate-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Windows Authenticator</h3>
                <p className="text-cyan-400 mb-3 text-sm">Security script adding an extra authentication layer to PowerShell and Command Prompt.</p>
                <p className="text-slate-400 mb-4">Enhances Windows security by requiring credential validation before granting access to sensitive operations, mimicking Linux's sudo-like functionality.</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">PowerShell</span>
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">Windows Registry</span>
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">Security</span>
                </div>
                <Link to="/projects" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm group justify-center md:justify-start">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-1 group-hover:translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
            <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 text-cyan-400 flex items-center justify-center size-12 rounded-lg bg-slate-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Vulnerability Scanner</h3>
                <p className="text-cyan-400 mb-3 text-sm">Python-based scanner that identifies system weaknesses across different platforms.</p>
                <p className="text-slate-400 mb-4">Leveraging external APIs and CVE databases, this tool scans configurations, firewall settings, ports, and more to detect vulnerabilities and suggest patches.</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">Python</span>
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">CVE Database</span>
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent shadow bg-slate-700 text-slate-200">API Integration</span>
                </div>
                <Link to="/projects" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm group justify-center md:justify-start">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-1 group-hover:translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/projects" className="inline-flex items-center justify-center px-4 py-2 border border-slate-700 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
            View All Projects
          </Link>
        </div>
      </div>

      {/* Rest of the sections remain unchanged */}
      <section className="py-16 bg-slate-800/20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="mb-4 bg-cyan-400/10 text-cyan-400 border-none hover:bg-cyan-400/20">Latest Content</Badge>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Recent Publications
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Technical articles and guides based on my research and experience in cybersecurity.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Fundamentals of Cybersecurity: Beginner Guide",
                description: "An essential guide to cybersecurity concepts and Blue Teaming fundamentals.",
                link: "https://midi-fox-ef1.notion.site/Getting-Started-in-Cybersecurity-Basics-4a13f54b07ca447493f741e2a7b4c7fd?pvs=4"
              },
              {
                title: "EDR Development: Malware Analysis Basics",
                description: "Deep dive into malware analysis techniques used in EDR systems.",
                link: "https://midi-fox-ef1.notion.site/EDR-Malware-analysis-PLANQX-EDR-b493337e467c47e39eedb3b99dab404c?pvs=4"
              },
              {
                title: "Pentesting Roadmap: From Basics to Advanced",
                description: "A comprehensive guide to mastering web pentesting from scratch.",
                link: "https://midi-fox-ef1.notion.site/Pentesting-Guide-to-learn-Basics-Resources-140e1d3764a180c6a4fdc0653319fa21?pvs=4"
              }
            ].map((article, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ y: -5 }}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-slate-100 hover:text-cyan-400 transition-colors text-lg">
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400">{article.description}</p>
                  </CardContent>
                  <CardFooter>
                    <motion.a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/blog">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                  View All Articles
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="mb-4 bg-cyan-400/10 text-cyan-400 border-none hover:bg-cyan-400/20">Expertise</Badge>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">What I Do</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Specialized in cybersecurity across multiple domains, focusing on both offensive and defensive security strategies.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Shield className="h-10 w-10 text-cyan-400" />, title: "Offensive Security", description: "Expert in penetration testing and red team engagements to identify vulnerabilities before they can be exploited." },
              { icon: <Code className="h-10 w-10 text-cyan-400" />, title: "Security Development", description: "Building cybersecurity tools like PlanqX EDR for comprehensive endpoint protection and vulnerability detection." },
              { icon: <Server className="h-10 w-10 text-cyan-400" />, title: "Cloud Security", description: "Implementing secure configurations and best practices for AWS and other cloud platforms to protect infrastructure." },
              { icon: <Terminal className="h-10 w-10 text-cyan-400" />, title: "Vulnerability Research", description: "Researching and reporting security vulnerabilities through bug bounty programs and dedicated security research." }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ y: -5 }}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <motion.div className="mb-4" whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.3 }}>
                      {item.icon}
                    </motion.div>
                    <CardTitle className="text-slate-100">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-500">
              <CardContent className="p-10 text-center">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-slate-100 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Interested in working together?
                </motion.h2>
                <motion.p
                  className="text-slate-400 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  I'm always open to discussing security research, product development, or partnership opportunities.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/about">
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">Get In Touch</Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;