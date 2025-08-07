import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/typing-animation";

export default function HeroSection() {
  return (
    <section className="gradient-bg text-white py-20 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              S SUGALE CHRISTO
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6 text-blue-100 min-h-[2em]"
            >
              <TypingAnimation 
                texts={[
                  "MBA Candidate | Marketing & HR Professional",
                  "E-commerce Sales Specialist",
                  "Digital Marketing Expert",
                  "Community Leadership Advocate",
                  "AI-Driven Content Creator"
                ]} 
                speed={80}
              />
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg mb-8 text-blue-50 max-w-2xl"
            >
              Dynamic marketing professional with hands-on experience in e-commerce sales, 
              digital marketing, and social media promotions. Passionate about driving 
              business growth through innovative strategies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                asChild
                className="bg-accent text-white hover:bg-yellow-600 transition-colors font-medium"
              >
                <a href="#contact">
                  <i className="fas fa-envelope mr-2"></i>
                  Hire Me
                </a>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-medium"
              >
                <a href="#about">
                  <i className="fas fa-user mr-2"></i>
                  Learn More
                </a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/3 text-center"
          >
            {/* Professional headshot placeholder */}
            <div className="w-64 h-64 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <i className="fas fa-user text-6xl text-white/50"></i>
              {/* TODO: Replace with actual professional photo */}
              {/* <img src="professional-photo.jpg" alt="S Sugale Christo" className="w-64 h-64 rounded-full object-cover border-4 border-white/30" /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
