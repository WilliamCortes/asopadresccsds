"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "/images/danzas_cachipay.jpg", altKey: "alt_danzas", span: "col-span-1 row-span-2" },
  { src: "/images/evento_teatro.jpg", altKey: "alt_teatro", span: "col-span-1 row-span-1" },
  { src: "/images/personas_bailando.jpg", altKey: "alt_bailando", span: "col-span-1 row-span-1" },
  { src: "/images/ninos_gradas.jpg", altKey: "alt_ninos", span: "col-span-1 row-span-1" },
  { src: "/images/papa_hijo.jpg", altKey: "alt_padre_hijo", span: "col-span-1 row-span-2" },
  { src: "/images/volando_cometa.jpg", altKey: "alt_cometa", span: "col-span-1 row-span-1" },
] as const;

export function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-3"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {GALLERY_IMAGES.map(({ src, altKey, span }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${span}`}
            >
              <Image
                src={src}
                alt={t(altKey)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
