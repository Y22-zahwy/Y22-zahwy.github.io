"use client"
import { motion } from "framer-motion"
import siteMetadata from "@/data/site-metadata"

export default function Skills() {
  const colors = ["bg-purple-500", "bg-pink-500", "bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-fuchsia-500"]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {siteMetadata.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              className="group"
            >
              <div
                className={`h-full rounded-xl p-6 ${colors[index % colors.length]} bg-opacity-10 border border-transparent hover:border-current hover:border-opacity-20 transition-all duration-300`}
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${colors[index % colors.length]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold">{skill.charAt(0)}</span>
                  </div>
                  <h3 className="font-medium text-gray-900">{skill}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
