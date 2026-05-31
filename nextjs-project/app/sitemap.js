import { ARTICLES, SERVICES } from '../lib/data';

export default function sitemap() {
  const base = 'https://cabinet-patrimonium.fr';
  
  const articles = ARTICLES.map(a => ({
    url: `${base}/article/${a.slug}`,
    lastModified: a.dateISO,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const services = SERVICES.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: '2026-05-01',
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/ressources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/a-propos`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/mentions-legales`, changeFrequency: 'yearly', priority: 0.3 },
    ...articles,
    ...services,
  ];
}
