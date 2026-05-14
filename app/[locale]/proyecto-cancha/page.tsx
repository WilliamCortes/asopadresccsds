import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.pages.project" });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: t("title"),
    description: t("description"),
    funder: {
      "@type": "NGO",
      name: "ASOPADRES CCSDS",
      taxID: "901.740.513-1",
    },
  };

  return {
    title: t("title"),
    description: t("description"),
    other: {
      "script:ld+json": JSON.stringify(structuredData),
    },
  };
}

function ProjectProgress({ raised = 0, goal = 50000000 }) {
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  const formatCOP = (n: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
      <div className="flex justify-between items-end mb-3">
        <div>
          <p className="text-3xl font-bold font-serif text-brand-blue">
            {percentage}%
          </p>
          <p className="text-sm text-muted-foreground">de la meta alcanzado</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Meta</p>
          <p className="font-semibold text-foreground">{formatCOP(goal)}</p>
        </div>
      </div>
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-blue rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Recaudado: <span className="font-medium text-foreground">{formatCOP(raised)}</span>
      </p>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProjectContent({ locale }: { locale: string }) {
  const t = useTranslations("project_page");

  return (
    <div className="pt-20">
      {/* Hero section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/ninos_gradas.jpg"
          alt={t("image_alt_1")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <p className="text-brand-gold font-medium text-sm uppercase tracking-widest mb-3">
              {t("eyebrow")}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl">
              {t("title")}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Intro */}
        <p className="text-xl text-foreground leading-relaxed font-serif mb-12 border-l-4 border-brand-gold pl-6">
          {t("intro")}
        </p>

        {/* Section 1 */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            {t("section1_title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t("section1_body")}</p>
        </div>

        {/* Project photos */}
        <div className="grid grid-cols-2 gap-4 my-12">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="/images/proyecto_cancha.jpg"
              alt={t("image_alt_1")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="/images/proyecto_cancha_2.jpg"
              alt={t("image_alt_2")}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            {t("section2_title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t("section2_body")}</p>
        </div>

        {/* Section 3 - Progress */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            {t("section3_title")}
          </h2>
          <ProjectProgress raised={0} goal={50000000} />
        </div>

        {/* CTA — natural invitation */}
        <div className="bg-brand-cream rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {t("cta_title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
            {t("cta_body")}
          </p>

          {/* Payment options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {/* Wompi Colombia */}
            <div className="bg-white rounded-xl p-5 border border-border text-left">
              <p className="font-semibold text-sm text-foreground mb-1">
                {t("wompi_title")}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                {t("wompi_subtitle")}
              </p>
              <a
                href="#wompi-payment"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue-dark transition-colors"
              >
                {t("cta_colombia")}
              </a>
            </div>

            {/* PayPal International */}
            <div className="bg-white rounded-xl p-5 border border-border text-left">
              <p className="font-semibold text-sm text-foreground mb-1">
                {t("paypal_title")}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                {t("paypal_subtitle")}
              </p>
              <a
                href="#paypal-payment"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#0070ba] text-white text-sm font-medium rounded-lg hover:bg-[#003087] transition-colors"
              >
                {t("cta_international")}
              </a>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            ASOPADRES CCSDS · NIT 901.740.513-1 · Entidad registrada en Cámara de Comercio de Facatativá
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { locale } = await params;
  return <ProjectContent locale={locale} />;
}
