import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ['', '#about', '#menu', '#gallery', '#reviews', '#location', '#reserve', '#order', '#faq', '#contact'];
  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: s === '' ? 1 : 0.7,
  }));
}
