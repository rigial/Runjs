import { useEffect } from 'react';
import {
  SEOProps,
  SEO_CONFIG,
  formatDocumentTitle,
  getCanonicalUrl,
  getAbsoluteImageUrl,
} from './seoConfig';

function setMetaTag(
  attributeName: 'name' | 'property',
  attributeValue: string,
  content: string | undefined
) {
  let element = document.querySelector(
    `meta[${attributeName}="${attributeValue}"]`
  );

  if (content === undefined || content === null) {
    if (element) {
      element.remove();
    }
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonicalLink(canonicalUrl: string | undefined) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!canonicalUrl) {
    if (link) {
      link.remove();
    }
    return;
  }

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', canonicalUrl);
}

function setJsonLd(structuredData: SEOProps['structuredData']) {
  // Remove existing dynamic JSON-LD scripts injected by useSEO
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"][data-dynamic-seo="true"]'
  );
  existingScripts.forEach((script) => script.remove());

  if (!structuredData) return;

  const dataArray = Array.isArray(structuredData)
    ? structuredData
    : [structuredData];

  dataArray.forEach((data) => {
    try {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-seo', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    } catch (e) {
      console.warn('Failed to inject JSON-LD structured data', e);
    }
  });
}

/**
 * Custom hook to dynamically apply route-level SEO metadata to document head.
 */
export function useSEO({
  title,
  description = SEO_CONFIG.defaultDescription,
  canonical,
  image = SEO_CONFIG.defaultImage,
  type = 'website',
  noIndex = false,
  noFollow = false,
  keywords,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = formatDocumentTitle(title);
    document.title = formattedTitle;

    // 2. Canonical URL & Image URL
    const canonicalUrl = getCanonicalUrl(canonical);
    const absoluteImageUrl = getAbsoluteImageUrl(image);

    // 3. Standard Meta Directives
    const robotsContent =
      noIndex || noFollow
        ? `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`
        : 'index, follow';

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', robotsContent);
    setMetaTag('name', 'author', SEO_CONFIG.author);
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // 4. Canonical Link
    setCanonicalLink(canonicalUrl);

    // 5. Open Graph Meta Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', absoluteImageUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', SEO_CONFIG.siteName);
    setMetaTag('property', 'og:locale', SEO_CONFIG.locale);

    // 6. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', absoluteImageUrl);
    setMetaTag('name', 'twitter:creator', SEO_CONFIG.twitterHandle);
    setMetaTag('name', 'twitter:site', SEO_CONFIG.twitterHandle);

    // 7. Structured Data (JSON-LD)
    setJsonLd(structuredData);

    return () => {
      // Clean up dynamic structured data when route unmounts
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"][data-dynamic-seo="true"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, [
    title,
    description,
    canonical,
    image,
    type,
    noIndex,
    noFollow,
    keywords,
    structuredData,
  ]);
}
