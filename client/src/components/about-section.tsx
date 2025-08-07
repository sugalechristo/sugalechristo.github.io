import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="mobile-section bg-white">
      <div className="container mx-auto mobile-container">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          <i className="fas fa-user-circle mr-3"></i>
          About Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="white-box p-6 sm:p-8 card-hover"
          >
            <p className="text-lg leading-relaxed text-dark mb-6">
              Dynamic MBA candidate in Marketing and Human Resources with hands-on experience 
              in e-commerce sales, digital marketing, and social media promotions. Proficient 
              in B2B and B2C strategies, Shopify store management, and AI-driven content creation.
            </p>
            <p className="text-lg leading-relaxed text-dark">
              Eager to apply analytical skills, leadership from community initiatives, and 
              innovative marketing techniques to drive business growth in marketing or HR roles, 
              with a focus on e-commerce and talent management.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
