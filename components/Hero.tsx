"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
      {/* Background image / video placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-placeholder.jpg')" }}
        aria-hidden
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="relative z-10 flex items-center h-full"
      >
        <div className="container">
          <div className="max-w-3xl text-center mx-auto px-4">
            <motion.h1 variants={item} className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight text-white mb-4">
              Building Excellence in Navi Mumbai Since 1981
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-gray-200 mb-8">
              Trusted by generations — delivering luxury, durability and timeless design across every project.
            </motion.p>

            <motion.div variants={item} className="flex gap-4 justify-center flex-wrap">
              <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/projects" className="inline-block px-6 py-3 rounded-md bg-[var(--color-gold)] text-deep-navy font-semibold shadow-md">
                  View Our Projects
                </Link>
              </motion.span>

              <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-md border border-[var(--color-gold)] text-white font-semibold bg-transparent">
                  Contact Us
                </Link>
              </motion.span>
            </motion.div>

            <motion.div variants={item} className="mt-10 text-sm text-gray-300">
              <span className="mr-3">Established 1981</span>
              <span className="mx-2">•</span>
              <span>Luxury residential & commercial developments</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
