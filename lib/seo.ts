import type { Metadata } from 'next'

const SITE_NAME = 'Super Construction Company'
const DEFAULT_DESC = 'Premium real estate and construction services — Navi Mumbai. 40+ years of legacy, craftsmanship and modern living.'

export function defaultMetadata(overrides?: Partial<Metadata>): Metadata {
  const base: Metadata = {
    title: SITE_NAME,
    description: DEFAULT_DESC,
    titleTemplate: '%s | Super Construction Company — Navi Mumbai',
    openGraph: {
      title: `${SITE_NAME} — Real Estate Navi Mumbai`,
      description: DEFAULT_DESC,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: '/assets/og/og-default.jpg', width: 1200, height: 630 }],
    },
  }
  return { ...base, ...(overrides || {}) }
}
