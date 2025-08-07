import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InterestsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    {
      icon: "fas fa-futbol",
      title: "Sports Development",
      description: "Passionate about promoting youth engagement through football coaching and organizing sports events",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: "fas fa-book-reader",
      title: "Marketing & Leadership",
      description: "Continuous learning through books on marketing strategies, leadership principles, and business growth",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: "fas fa-brain",
      title: "AI & Innovation",
      description: "Staying updated with AI trends, business automation, and emerging technologies in digital marketing",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: "fas fa-users",
      title: "Community Building",
      description: "Building strong communities through sports integration and education programs for underprivileged youth",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="interests" className="mobile-section bg-gray-50">
      <div className="container mx-auto mobile-container">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          <i className="fas fa-star mr-3"></i>
          Interests & Hobbies
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="white-box p-6 sm:p-8 card-hover"
              >
                <div className="flex items-start">
                  <div className={`${interest.color} p-4 rounded-lg mr-4 flex-shrink-0`}>
                    <i className={`${interest.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{interest.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal motto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 sm:p-8 text-center border border-gray-200"
          >
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-quote-left text-2xl text-primary mr-3"></i>
              <h3 className="text-xl font-bold text-primary">Personal Philosophy</h3>
              <i className="fas fa-quote-right text-2xl text-primary ml-3"></i>
            </div>
            <p className="text-lg text-dark font-medium italic">
              "Combining strategic marketing insights with community leadership to drive meaningful growth and positive impact in every project I undertake."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}