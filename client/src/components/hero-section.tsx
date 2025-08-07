import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/typing-animation";

export default function HeroSection() {
  return (
    <section className="relative text-white py-20 mt-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3 text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              S SUGALE CHRISTO
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl mb-6 text-blue-100 min-h-[2em]"
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
              className="text-base md:text-lg mb-8 text-blue-50 max-w-2xl mx-auto lg:mx-0"
            >
              Dynamic marketing professional with hands-on experience in e-commerce sales, 
              digital marketing, and social media promotions. Passionate about driving 
              business growth through innovative strategies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                asChild
                className="bg-accent text-white hover:bg-yellow-600 transition-colors font-medium px-8 py-3"
              >
                <a href="#contact">
                  <i className="fas fa-envelope mr-2"></i>
                  Hire Me
                </a>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-2 border-white text-primary bg-white hover:bg-transparent hover:text-white transition-colors font-medium px-8 py-3"
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
            className="lg:w-1/3 text-center order-1 lg:order-2"
          >
            {/* Professional headshot */}
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img 
                  src="/professional-photo.jpg" 
                  alt="S Sugale Christo - Professional Photo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error('Image failed to load:', target.src);
                    // Fallback if image doesn't load
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<div class="w-full h-full bg-white/20 flex items-center justify-center"><i class="fas fa-user text-6xl text-white/50"></i></div>';
                    }
                  }}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full border-2 border-accent/50 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
