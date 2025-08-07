import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I will get back to you soon.",
        variant: "default"
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "An error occurred while sending your message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 9789296263",
      href: "tel:+919789296263"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "sugalechristo2001@gmail.com",
      href: "mailto:sugalechristo2001@gmail.com"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Colachel, Kanyakumari District\nTamil Nadu, India"
    }
  ];

  const socialLinks = [
    {
      icon: "fab fa-instagram",
      href: "https://instagram.com/colachel_fc"
    },
    {
      icon: "fab fa-youtube",
      href: "https://youtube.com/colachel-stars"
    },
    {
      icon: "fas fa-globe",
      href: "https://pastainminutes.com"
    }
  ];

  return (
    <section id="contact" className="mobile-section bg-gray-50">
      <div className="container mx-auto mobile-container">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          <i className="fas fa-envelope mr-3"></i>
          Get In Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="white-box overflow-hidden border border-gray-200">
            <div className="lg:flex">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:w-1/2 bg-primary text-white p-6 sm:p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
                <p className="mb-8 text-blue-100">
                  Ready to bring innovative marketing strategies and HR expertise to your team. 
                  Let's discuss how I can contribute to your organization's growth.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      className="flex items-center"
                    >
                      <i className={`${item.icon} text-accent mr-4 text-xl`}></i>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-blue-100 hover:text-white transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-blue-100 whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <i className={`${link.icon} text-xl`}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:w-1/2 p-6 sm:p-8"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark font-medium">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your name" 
                              {...field} 
                              className="border-gray-300 focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Enter your email" 
                              {...field} 
                              className="border-gray-300 focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark font-medium">Subject</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:ring-2 focus:ring-primary">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Job Opportunity">Job Opportunity</SelectItem>
                              <SelectItem value="Project Collaboration">Project Collaboration</SelectItem>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={5}
                              placeholder="Tell me about your requirements..." 
                              {...field} 
                              className="border-gray-300 focus:ring-2 focus:ring-primary resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-white hover:bg-blue-800 transition-colors font-medium"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
