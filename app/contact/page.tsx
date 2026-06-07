import ContactForm from '../../components/ContactForm'
import React from 'react'

export const metadata = {
  title: 'Contact — Super Construction Company',
  description: 'Contact Super Construction Company — Navi Mumbai headquarters, enquiries, and site visits. Real Estate Navi Mumbai specialists.',
}

export default function Contact() {
  const address = {
    street: 'Plot No. 12, Palm Street',
    locality: 'Navi Mumbai',
    region: 'Maharashtra',
    postalCode: '400703',
    phone: '+91 22 1234 5678',
    email: 'contact@superconstruction.example',
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Super Construction Company',
    description: 'Super Construction Company — Real Estate Navi Mumbai. Premium residential and commercial developments since 1981.',
    telephone: address.phone,
    email: address.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    url: 'https://www.superconstruction.example',
  }

  return (
    <section className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-display mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">Reach our Navi Mumbai headquarters for enquiries, site visits and corporate requests.</p>

        <div className="bg-white border rounded p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Navi Mumbai Headquarters</h3>
          <address className="not-italic text-gray-700">
            Plot No. 12, Palm Street<br />
            Navi Mumbai, Maharashtra 400703<br />
            <br />
            Phone: <a href={`tel:${address.phone}`} className="text-deep-navy">{address.phone}</a><br />
            Email: <a href={`mailto:${address.email}`} className="text-deep-navy">{address.email}</a>
          </address>

          <div className="mt-4">
            <p className="text-sm text-gray-500">Office Hours: Mon–Fri 09:00–18:00</p>
          </div>

          <div className="mt-6">
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">Map placeholder (embed Google Maps iframe in production)</div>
          </div>
        </div>

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Send an enquiry</h3>
        <ContactForm />
      </div>
    </section>
  )
}
