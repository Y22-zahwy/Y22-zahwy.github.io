"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import siteMetadata from "@/data/site-metadata"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a href={`mailto:${siteMetadata.email}`} className="font-medium hover:underline">
                    {siteMetadata.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="font-medium">{siteMetadata.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>

              <Button className="w-full bg-white text-purple-600 hover:bg-white/90">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
