"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ target, suffix = '+', className = '' }: { target: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionVal = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, target, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsubscribe = motionVal.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
    return unsubscribe;
  }, [motionVal]);

  return (
    <span className={className} ref={ref} aria-hidden>
      0{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Company stats" className="py-16 bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display mb-2">40+ Years of legacy</h2>
          <p className="text-gray-600">Delivering quality homes and commercial spaces with care and craftsmanship.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-deep-navy">
              <Counter target={40} suffix="+" className="inline-block" />
            </div>
            <div className="mt-2 text-gray-700">Years of Experience</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-deep-navy">
              <Counter target={40} suffix="+" className="inline-block" />
            </div>
            <div className="mt-2 text-gray-700">Projects Delivered</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-deep-navy">
              <Counter target={1000} suffix="+" className="inline-block" />
            </div>
            <div className="mt-2 text-gray-700">Happy Families</div>
          </div>
        </div>
      </div>
    </section>
  );
}
