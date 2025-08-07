import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillBar from "@/components/skill-bar";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Digital Marketing & E-Commerce",
      icon: "fas fa-chart-line",
      color: "bg-primary/10 text-primary",
      skills: [
        "Shopify Store Management",
        "Shiprocket Integration",
        "B2B/B2C Strategies",
        "Social Media Promotions",
        "Market Analysis"
      ]
    },
    {
      title: "Content Creation Tools",
      icon: "fas fa-palette",
      color: "bg-secondary/10 text-secondary",
      skills: [
        "Canva (Promotional Content)",
        "Google Veo 3 (Video Creation)",
        "Ideogram (Image Creation)",
        "Content Strategy"
      ]
    },
    {
      title: "AI & Productivity Tools",
      icon: "fas fa-robot",
      color: "bg-accent/10 text-accent",
      skills: [
        "Grok, ChatGPT, Gemini, Claude",
        "Google Drive, Docs, Sheets",
        "Data Management & Collaboration",
        "Content Generation & Automation"
      ]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      color: "bg-green-100 text-green-600",
      skills: [
        "Team Collaboration",
        "Problem-Solving",
        "Analytical Thinking",
        "Leadership"
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Fluent", color: "bg-primary" },
    { name: "Tamil", level: "Native", color: "bg-secondary" },
    { name: "Malayalam", level: "Proficient", color: "bg-accent" }
  ];

  return (
    <section id="skills" className="mobile-section bg-gray-50">
      <div className="container mx-auto mobile-container">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          <i className="fas fa-cogs mr-3"></i>
          Skills & Expertise
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="white-box p-6 sm:p-8 card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className={`${category.color} p-3 rounded-lg mr-4`}>
                    <i className={`${category.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + (skillIndex * 0.1) }}
                      className="flex items-center"
                    >
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Technical Proficiency */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 white-box p-6 sm:p-8 card-hover"
          >
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              <i className="fas fa-chart-bar mr-2"></i>
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Marketing & E-commerce</h4>
                <SkillBar skill="Digital Marketing" percentage={90} color="bg-blue-600" delay={0} />
                <SkillBar skill="Shopify Management" percentage={85} color="bg-green-600" delay={0.1} />
                <SkillBar skill="Social Media Marketing" percentage={88} color="bg-pink-600" delay={0.2} />
                <SkillBar skill="Content Creation" percentage={92} color="bg-purple-600" delay={0.3} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Tools & Analytics</h4>
                <SkillBar skill="AI Tools (ChatGPT, Claude)" percentage={86} color="bg-orange-600" delay={0.4} />
                <SkillBar skill="Google Analytics" percentage={80} color="bg-yellow-600" delay={0.5} />
                <SkillBar skill="Canva Design" percentage={89} color="bg-teal-600" delay={0.6} />
                <SkillBar skill="Market Analysis" percentage={83} color="bg-indigo-600" delay={0.7} />
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 white-box p-6 sm:p-8 card-hover text-center"
          >
            <h3 className="text-xl font-bold text-primary mb-6">
              <i className="fas fa-language mr-2"></i>
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 1.0 + (index * 0.1) }}
                  className={`${lang.color} text-white px-6 py-2 rounded-full font-medium`}
                >
                  {lang.name} ({lang.level})
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
