"use client"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import siteMetadata from "@/data/site-metadata"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              Hi, I&apos;m {siteMetadata.name}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
          <h2 className="text-xl md:text-3xl font-medium mb-6">{siteMetadata.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <p className="text-lg text-white/90">{siteMetadata.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 font-medium text-purple-700 transition-all hover:scale-105 hover:bg-white/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white px-6 font-medium text-white transition-all hover:scale-105 hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2.5,
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="absolute bottom-10"
      >
        <Link href="#about">
          <ArrowDown className="h-10 w-10 text-white/80 hover:text-white cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  )
}
