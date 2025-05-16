"use client"
import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import siteMetadata from "@/data/site-metadata"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          {siteMetadata.education.map((edu, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-purple-500 transition-colors duration-300">
                <div className="absolute left-0 sm:left-0 top-0 sm:top-7 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="sm:pl-20">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>Graduating {edu.graduationYear}</span>
                  </div>
                  <p className="text-gray-700">{edu.university}</p>

                  <div className="mt-6 p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></div>
                        <span>Specialized in mobile application development and UI/UX design</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></div>
                        <span>Developed multiple real-world projects as part of coursework</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></div>
                        <span>Participated in coding competitions and hackathons</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
