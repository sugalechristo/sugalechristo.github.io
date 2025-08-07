import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: "fas fa-envelope",
      label: "Email Me",
      href: "mailto:sugalechristo2001@gmail.com",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: "fas fa-phone",
      label: "Call Me",
      href: "tel:+919789296263",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: "fas fa-download",
      label: "Download CV",
      onClick: () => window.print(),
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/919789296263",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 no-print">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium mr-3 shadow-lg">
                  {action.label}
                </span>
                {action.href ? (
                  <a
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${action.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
                  >
                    <i className={action.icon}></i>
                  </a>
                ) : (
                  <button
                    onClick={action.onClick}
                    className={`${action.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
                  >
                    <i className={action.icon}></i>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className={`w-14 h-14 rounded-full shadow-xl transition-all duration-300 ${
            isOpen 
              ? 'bg-red-600 hover:bg-red-700 rotate-45' 
              : 'bg-primary hover:bg-blue-800'
          }`}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-plus'} text-xl`}></i>
        </Button>
      </motion.div>
    </div>
  );
}