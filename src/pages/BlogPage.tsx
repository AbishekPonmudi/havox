import { ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Introduction to Malware Analysis: Beginner Guide",
      date: "March 15, 2025",
      readTime: "10 min read",
      description: "A foundational guide to Malware analysis, helping you understand the fundamental concepts and practices to get started in this field.",
      tags: ["Security", "Malware"],
      link: "https://midi-fox-ef1.notion.site/Getting-Started-in-Cybersecurity-Basics-4a13f54b07ca447493f741e2a7b4c7fd"
    },
    {
      title: "Understanding Endpoint Detection for Modern Threats",
      date: "October 24, 2024",
      readTime: "8 min read",
      description: "An overview of endpoint detection systems, their importance, and the role of advanced technologies in cybersecurity.",
      tags: ["EDR", "Security"],
      link: "https://midi-fox-ef1.notion.site/EDR-Malware-analysis-PLANQX-EDR-b493337e467c47e39eedb3b99dab404c"
    },
    {
      title: "Pentesting Roadmap: From Basics to Advanced",
      date: "February 18, 2025",
      readTime: "9 min read",
      description: "A comprehensive guide to mastering web pentesting from scratch with practical examples.",
      tags: ["Pentesting", "Web"],
      link: "https://midi-fox-ef1.notion.site/Pentesting-Guide-to-learn-Basics-Resources-140e1d3764a180c6a4fdc0653319fa21"
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
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-slate-100 mb-6">
          Insights & Publications
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Exploring cybersecurity concepts, techniques, and best practices through detailed guides and articles.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
              <CardHeader className="space-y-1 pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center text-sm text-slate-400 gap-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-100 hover:text-cyan-400 transition-colors">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 line-clamp-3">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-cyan-500/50 text-cyan-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <motion.a
                  href={post.link}
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
      </div>
    </motion.div>
  );
};

export default BlogPage;
