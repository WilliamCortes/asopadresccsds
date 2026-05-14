import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Shield, ExternalLink } from "lucide-react";

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact.info");
  const localePath = (href: string) => `/${locale}${href}`;

  return (
    <footer className="bg-brand-blue text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-sm p-1">
                <Image
                  src="/images/logo_asopadres.jpg"
                  alt="ASOPADRES CCSDS"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="font-serif font-bold text-lg leading-tight">
                  ASOPADRES CCSDS
                </p>
                <p className="text-white/60 text-xs">Anolaima, Cundinamarca</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-4">
              {t("description")}
            </p>
            {/* Legal badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">
                <Shield className="h-3 w-3" />
                {t("nit")}
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">
                {t("ccf")}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {[
                { key: "about", href: "/quienes-somos" },
                { key: "legal", href: "/marco-legal" },
                { key: "project", href: "/proyecto-cancha" },
                { key: "join", href: "/afiliate" },
                { key: "news", href: "/comunicados" },
                { key: "privacy", href: "/proteccion-datos" },
                { key: "contact", href: "/contactenos" },
              ].map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={localePath(href)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${tContact("email")}`}
                  className="text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  {tContact("email")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <a
                  href={`https://wa.me/${tContact("phone").replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {tContact("phone")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">
                  {tContact("address")}
                </span>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.ccsds.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white/70 transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                  {t("school_link")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-2 text-center">
            <p className="text-xs text-white/40 font-medium uppercase tracking-wide">
              {t("legal_name")}
            </p>
            <p className="text-xs text-white/30">
              {t("address")} — {t("watchdog")}
            </p>
            <p className="text-xs text-brand-gold/70 font-medium">
              {t("independence")}
            </p>
            <p className="text-xs text-white/25 mt-2">
              © {new Date().getFullYear()} ASOPADRES CCSDS. {t("rights")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
