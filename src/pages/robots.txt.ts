import type { APIRoute } from 'astro';
import { site } from '../config/site';

/**
 * robots.txt généré.
 * Démo : exploration interdite. Production : tout autoriser + sitemap.
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const base = siteUrl ?? new URL(site.url);
  const body = site.demo
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', base).toString()}\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
