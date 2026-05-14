"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectTeaserProps {
  locale: string;
}

export function ProjectTeaser({ locale }: ProjectTeaserProps) {
  const t = useTranslations("project_teaser");

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-brand-gold font-medium text-sm uppercase tracking-widest mb-4">
              {t("eyebrow")}
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("body")}
            </p>
            <Link
              href={`/${locale}/proyecto-cancha`}
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all duration-200 group"
            >
              {t("cta")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/proyecto_cancha.jpg"
                  alt={t("image_alt")}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/images/proyecto_cancha_2.jpg"
                  alt={t("image_alt")}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-blue text-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-xs text-white/70 uppercase tracking-wide">Proyecto</p>
              <p className="font-serif font-bold text-sm">Cancha Cubierta</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
