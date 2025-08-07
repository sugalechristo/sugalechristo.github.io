import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="mobile-section bg-white">
      <div className="container mx-auto mobile-container">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          <i className="fas fa-heart mr-3"></i>
          Community Involvement
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 card-hover border border-gray-200"
          >
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Sports and Education Development Coordinator</h3>
                <h4 className="text-lg font-medium text-dark mb-2">Colachel Football Club</h4>
                <p className="text-gray-600">Colachel, Kanyakumari District</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  2020 - Present
                </span>
                <p className="text-gray-500 text-sm mt-1">4+ Years</p>
              </div>
            </div>
            
            <ul className="space-y-4 text-dark mb-6">
              {[
                {
                  icon: "fas fa-futbol",
                  color: "text-green-500",
                  text: "Led community development initiatives focused on sports and education, organizing football coaching sessions and events to promote youth engagement and skill-building."
                },
                {
                  icon: "fas fa-share-alt",
                  color: "text-blue-500",
                  text: "Managed social media presence for the club, creating content to raise awareness and attract participants, fostering teamwork and leadership skills."
                },
                {
                  icon: "fas fa-graduation-cap",
                  color: "text-purple-500",
                  text: "Contributed to local education programs through sports integration, enhancing community outreach and personal development for underprivileged youth."
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="flex items-start"
                >
                  <i className={`${item.icon} ${item.color} mr-3 mt-1 flex-shrink-0`}></i>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://instagram.com/colachel_fc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
              >
                <i className="fab fa-instagram mr-2"></i>
                @colachel_fc
              </a>
              <a 
                href="https://youtube.com/colachel-stars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
              >
                <i className="fab fa-youtube mr-2"></i>
                Colachel Stars
              </a>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 white-box p-6 sm:p-8 card-hover"
          >
            <h3 className="text-xl font-bold text-primary mb-4">
              <i className="fas fa-trophy mr-3"></i>
              Certifications & Achievements
            </h3>
            <div className="flex items-center">
              <i className="fas fa-medal text-accent text-2xl mr-4"></i>
              <div>
                <h4 className="font-semibold text-dark">Tamil Nadu State Certificate in Football Competitions</h4>
                <p className="text-gray-600">Higher Secondary Level - Awarded for outstanding performance in state-level tournaments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
