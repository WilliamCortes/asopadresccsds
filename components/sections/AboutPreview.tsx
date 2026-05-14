"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Users, Handshake } from "lucide-react";

const ICONS = [Shield, Users, Handshake];

export function AboutPreview() {
  const t = useTranslations("about_preview");

  const points = [
    { titleKey: "point1_title", bodyKey: "point1_body", Icon: ICONS[0] },
    { titleKey: "point2_title", bodyKey: "point2_body", Icon: ICONS[1] },
    { titleKey: "point3_title", bodyKey: "point3_body", Icon: ICONS[2] },
  ] as const;

  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl lg:text-4xl font-bold text-brand-blue text-center mb-16"
        >
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {points.map(({ titleKey, bodyKey, Icon }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/8 text-brand-blue mb-5">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                {t(titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(bodyKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
