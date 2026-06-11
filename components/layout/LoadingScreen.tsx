"use client";

import Logo from "@/components/layout/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type LoadingScreenProps = {
  label: string;
  locale: string;
};

export default function LoadingScreen({ label, locale }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Logo locale={locale} size="loading" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-white/60 md:text-base"
          >
            {label}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
