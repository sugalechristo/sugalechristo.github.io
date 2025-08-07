import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          <i className="fas fa-briefcase mr-3"></i>
          Professional Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary hidden md:block"></div>
            
            {/* Experience Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative md:ml-16 mb-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-white hidden md:block"></div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Sales and Marketing Assistant (Part-Time)</h3>
                    <h4 className="text-lg font-medium text-dark mb-2">Sevagan Market Place Private Limited</h4>
                    <p className="text-secondary font-medium">Brand: Pasta In Minutes</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      July 2024 - Present
                    </span>
                    <p className="text-gray-500 text-sm mt-1">1+ Year</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <a 
                    href="https://pastainminutes.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-primary transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    pastainminutes.com
                  </a>
                </div>
                
                <ul className="space-y-3 text-dark">
                  {[
                    "Managed e-commerce operations for import-based business sourcing pasta from Barakah Al Sanabil (Jeddah, Saudi Arabia) and driving sales across India, focusing on B2B and B2C channels.",
                    "Created and executed social media promotions on Instagram, YouTube, and WhatsApp, increasing brand visibility and engagement by optimizing content for target audiences.",
                    "Handled Shopify store management, including product listings, inventory updates, and integration with Shiprocket for streamlined shipping and order fulfillment, reducing processing time by 20%.",
                    "Developed promotional content using Canva, AI tools (Grok, ChatGPT, Gemini, Claude), Google Veo 3 for videos, and Ideogram for images, supporting website enhancements and marketing campaigns.",
                    "Conducted market analysis for e-commerce strategies, contributing to sales growth through data-driven insights from Google Sheets and Docs."
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      className="flex items-start"
                    >
                      <i className="fas fa-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
