import { Mail, Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      ease: "easeInOut"
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

const AboutPage = () => {
  const skills = [
    { name: "C++", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "PowerShell", category: "languages" },
    { name: "Windows API", category: "development" },
    { name: "Linux", category: "platforms" },
    { name: "Windows", category: "platforms" },
    { name: "AWS", category: "cloud" },
    { name: "Malware Analysis", category: "security" },
    { name: "Red Teaming", category: "security" },
    { name: "Exploit Development", category: "security" },
    { name: "Cloud Security", category: "cloud" },
    { name: "Docker", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "Burp Suite", category: "security" },
    { name: "Wireshark", category: "security" },
    { name: "Penetration Testing", category: "security" },
    { name: "ETW", category: "development" },
    { name: "CVE Research", category: "security" }
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/AbishekPonmudi",
      icon: <Github className="h-5 w-5" />
    },
    {
      platform: "Twitter",
      url: "https://x.com/Havox03",
      icon: <Twitter className="h-5 w-5" />
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abishekponmudi/",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@havox_cybernet",
      icon: <Youtube className="h-5 w-5" />
    }
  ];

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

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-20"
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold text-slate-100 mb-6">About Me</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Profile Section - Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-xl border border-slate-700 bg-slate-800/20 p-4 overflow-hidden">
            <h2 className="text-2xl font-bold mb-2 text-center text-slate-100">Havox</h2>
            <p className="text-slate-400 text-center mb-4">Abishek, 25</p>

            <div className="flex justify-center mb-4">
              <Avatar className="h-32 w-32 border-4 border-cyan-500/30">
                <AvatarImage src="https://ext.same-assets.com/3530962384/3873595901.jpeg" alt="Abishek Ponmudi" />
                <AvatarFallback className="bg-slate-700 text-cyan-400 text-2xl">AP</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-md text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label={social.platform}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm">
              <p>
                <span className="text-cyan-400">$</span> whoami
                <br />
                <span className="text-green-400">›</span> Red Teaming
                <br />
                <span className="text-green-400">›</span> Pentesting
                <br />
                <span className="text-green-400">›</span> Security Researcher
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Right Column */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-xl border border-slate-700 bg-slate-800/20 p-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-bold mb-4 text-slate-100">Hello friend</h3>
              <p className="text-slate-400 mb-6">
                Hello friend, I'm Abishek, a cybersecurity specialist with working in offensive security, Pentesting, cloud+network security and software developer. My professional journey spans developing security tools like PlanqX EDR and participating in bug bounty programs with organizations including Google, LeetCode, and NoBullProjects.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-8 text-slate-100">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <Badge key={skill.name} className="bg-slate-700 hover:bg-slate-600 text-slate-200">
                    {skill.name}
                  </Badge>
                ))}
              </div>

              <motion.div
                className="flex justify-center my-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="mailto:havox004@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded font-medium transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        className="rounded-xl border border-slate-700 bg-slate-800/20 p-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-6 text-slate-100">Recent Achivement & d3velopement</h3>
        <div className="space-y-8">
                  <div className="flex border-l-2 border-cyan-500/50 pl-4">
                    <div className="ml-2">
                      <h4 className="text-lg font-medium text-slate-100">PlanqX EDR Development</h4>
                      <p className="text-cyan-400 text-sm mb-2">2024 Nov - Present</p>
                      <p className="text-slate-400">
                        Leading the development of an open-source Endpoint Detection and Response tool designed for advanced threat detection and response capabilities.
                      </p>
                      <a 
                        href="https://github.com/AbishekPonmudi/PlanqX_EDR-Endpoint-Detection-and-Response"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:underline"
                      >
                        GitHub Repository
                      </a>
                    </div>
                  </div>

                  <div className="flex border-l-2 border-cyan-500/50 pl-4">
                    <div className="ml-2">
                      <h4 className="text-lg font-medium text-slate-100">Bug Bounty - Internal Organization</h4>
                      <p className="text-cyan-400 text-sm mb-2">2023 - 2024</p>
                      <p className="text-slate-400">
                        Active participation in bug bounty programs identifying and reporting security vulnerabilities in various web applications and platforms.
                      </p>
                    </div>
                  </div>

                  <div className="flex border-l-2 border-cyan-500/50 pl-4">
                    <div className="ml-2">
                      <h4 className="text-lg font-medium text-slate-100">Bug Bounty Google VRP</h4>
                      <p className="text-cyan-400 text-sm mb-2">2023</p>
                      <p className="text-slate-400">
                        Found some PII (Personal Identifiable Information) on the auth mechanism. Used to be my first Bug Bounty and received an award as the First Dragon of the year for submitting a valid report.
                      </p>
                      <a 
                        href="https://www.linkedin.com/posts/abishekponmudi_bugbounty-google-bugs-activity-7237678430434066433-Gjyu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-3fCoBOSbvrO8IUz1-uz9CrEPkzGK_9hE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:underline"
                      >
                        LinkedIn Post
                      </a>
                    </div>
                  </div>

                  <div className="flex border-l-2 border-cyan-500/50 pl-4">
                    <div className="ml-2">
                      <h4 className="text-lg font-medium text-slate-100">Bug Bounty Leetcode</h4>
                      <p className="text-cyan-400 text-sm mb-2">2025</p>
                      <p className="text-slate-400">
                        Found critical ACE (Arbitrary Code Execution) on the Leetcode Platform and reported it.
                      </p>
                      <p className="text-cyan-400 text-sm mb-2">Check Out</p>
                      <a 
                        href="https://www.linkedin.com/posts/abishekponmudi_leetcode-bugbounty-ethicalhacking-activity-7298593177131786240-uR4V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-3fCoBOSbvrO8IUz1-uz9CrEPkzGK_9hE"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:underline"
                      >
                        LinkedIn Post
                      </a>
                    </div>
                  </div>

          <div className="flex border-l-2 border-cyan-500/50 pl-4">
            <div className="ml-2">
              <h4 className="text-lg font-medium text-slate-100">Red Team Operations</h4>
              <p className="text-cyan-400 text-sm mb-2">2024 - Present</p>
              <p className="text-slate-400">
                Conducting comprehensive red team operations to identify security weaknesses and improve the overall security posture of organizations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
