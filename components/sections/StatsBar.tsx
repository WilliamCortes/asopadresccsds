"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function StatsBar() {
  const t = useTranslations("stats");

  const stats = [
    { value: t("families_value"), label: t("families_label") },
    { value: t("projects_value"), label: t("projects_label") },
    { value: t("years_value"), label: t("years_label") },
    { value: t("founded_value"), label: t("founded_label") },
  ];

  return (
    <section className="bg-brand-blue py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-xs uppercase tracking-widest mb-10"
        >
          {t("title")}
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl lg:text-5xl font-bold text-brand-gold mb-2">
                {value}
              </p>
              <p className="text-white/60 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
