import { memo } from 'react';
import { useSEO } from './useSEO';
import { SEOProps } from './seoConfig';

/**
 * Declarative SEO Component.
 * Place inside any route component to automatically manage title, meta tags,
 * canonical links, Open Graph, Twitter cards, and Schema.org structured data.
 */
function SEO(props: SEOProps) {
  useSEO(props);
  return null;
}

export default memo(SEO);
