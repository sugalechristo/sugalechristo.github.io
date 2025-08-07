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
    <footer className="bg-dark text-white py-8 no-print">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-2"
          >
            S Sugale Christo
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 mb-4"
          >
            Marketing & HR Professional | E-commerce Specialist
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-6 mb-4"
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
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-xl`}></i>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} S Sugale Christo. All rights reserved. | Ready to make an impact in your organization!
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
