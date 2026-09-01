import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);

  return {
    title: t.contact.metaTitle,
    description: t.contact.metaDescription,
  };
}

export default async function ContatoPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const t = getDictionary(locale);

  const channels = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
    },
    {
      label: "WhatsApp",
      value: t.contact.whatsappValue,
      href: site.links.whatsapp,
      icon: WhatsappIcon,
    },
    {
      label: "LinkedIn",
      value: t.contact.linkedinValue,
      href: site.links.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "GitHub",
      value: t.contact.githubValue,
      href: site.links.github,
      icon: GithubIcon,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm locale={locale} />
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.contact.channelsTitle}
          </h2>
          <div className="mt-4 space-y-3">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-card-hover"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <channel.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {channel.label}
                  </span>
                  <span className="block text-sm text-muted">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted">
            {t.contact.footerNote}
          </p>
        </div>
      </div>
    </div>
  );
}
