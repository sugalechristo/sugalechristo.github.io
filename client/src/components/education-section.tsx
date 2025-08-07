import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      degree: "Master of Business Administration (MBA)",
      specialization: "Marketing and Human Resources",
      institution: "Udaya School of Engineering (Affiliated to Anna University)",
      location: "Ammandivilai, Chennai",
      period: "2023 - 2025",
      status: "Expected Graduation",
      statusColor: "bg-accent/10 text-accent",
      coursework: "Marketing Strategy, Digital Marketing, Human Resource Management, Consumer Behavior, Organizational Development",
      project: "\"A Study on Sales and Distribution Strategies of PastaInMinutes towards Sevagan Market Place Private Limited, Kanyakumari\" – Conducted in-depth analysis of e-commerce distribution channels, import logistics, and sales optimization.",
      gradient: true
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Nehru Arts and Science College (Affiliated to Bharathiar University)",
      location: "Coimbatore",
      period: "2020 - 2023",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      description: "Developed technical skills in computer applications, data management, and basic programming, supporting digital marketing and e-commerce tools."
    },
    {
      degree: "Higher Secondary Education",
      institution: "St. Mary's Higher Secondary School",
      location: "Colachel, Kanyakumari District",
      period: "2018 - 2020",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      description: "Completed with a focus on foundational subjects, building strong communication and analytical skills."
    }
  ];

  return (
    <section id="education" className="mobile-section bg-white">
      <div className="container mx-auto mobile-container">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          <i className="fas fa-graduation-cap mr-3"></i>
          Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className={`${
                item.gradient 
                  ? 'bg-gradient-to-r from-primary/5 to-secondary/5' 
                  : 'bg-neutral'
              } rounded-xl p-6 sm:p-8 card-hover border border-gray-200`}
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.degree}</h3>
                  {item.specialization && (
                    <h4 className="text-lg font-medium text-dark mb-2">{item.specialization}</h4>
                  )}
                  <p className="text-gray-600">{item.institution}</p>
                  <p className="text-gray-600">{item.location}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className={`${item.statusColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {item.period}
                  </span>
                  <p className="text-gray-500 text-sm mt-1">{item.status}</p>
                </div>
              </div>
              
              {item.coursework && (
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-dark mb-2">Relevant Coursework:</h5>
                    <p className="text-gray-700">{item.coursework}</p>
                  </div>
                  
                  {item.project && (
                    <div>
                      <h5 className="font-semibold text-dark mb-2">MBA Project:</h5>
                      <p className="text-gray-700">{item.project}</p>
                    </div>
                  )}
                </div>
              )}
              
              {item.description && (
                <p className="text-gray-700">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
