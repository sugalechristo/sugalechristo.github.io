import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: "fas fa-envelope",
      href: "mailto:sugalechristo2001@gmail.com",
      label: "Email"
    },
    {
      icon: "fas fa-phone",
      href: "tel:+919789296263",
      label: "Phone"
    },
    {
      icon: "fab fa-instagram",
      href: "https://instagram.com/colachel_fc",
      label: "Instagram"
    },
    {
      icon: "fab fa-youtube",
      href: "https://youtube.com/colachel-stars",
      label: "YouTube"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-primary via-blue-800 to-purple-900 text-white py-12 no-print overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 right-16 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-4 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto mobile-container relative z-10">
        <div className="text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            S Sugale Christo
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 mb-6 text-lg"
          >
            Marketing & HR Professional | E-commerce Specialist
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-8 mb-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
                className="text-blue-100 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/20"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-blue-200 text-sm md:text-base border-t border-white/20 pt-4 mt-4"
          >
            © {currentYear} S Sugale Christo. All rights reserved. | Ready to make an impact in your organization!
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
