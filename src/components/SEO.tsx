import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogType?: 'website' | 'article';
  type?: 'website' | 'article';
  ogImage?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
  noIndex?: boolean;
  noFollow?: boolean;
}

const DEFAULT_TITLE =
  'RunJS.in | Online JavaScript, TypeScript & React Playground';
const DEFAULT_DESCRIPTION =
  'RunJS is an interactive developer playground and full JavaScript learning platform. Write, test, and master JavaScript with 175+ structured lessons and real-time execution.';
const DEFAULT_OG_IMAGE = 'https://runjs.in/og-image.png';
const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://runjs.in';

function updateMetaTag(
  attrName: 'name' | 'property',
  attrValue: string,
  content: string | undefined
) {
  if (content === undefined) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string | undefined) {
  if (!href) return;
  let element = document.querySelector(
    `link[rel="${rel}"]`
  ) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default function SEO({
  title,
  titleTemplate = '%s | RunJS',
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  ogType,
  type,
  ogImage,
  image,
  jsonLd,
  structuredData,
  noindex = false,
  noIndex = false,
  noFollow = false,
}: SEOProps) {
  const resolvedType = ogType || type || 'website';
  const resolvedImage = ogImage || image || DEFAULT_OG_IMAGE;
  const resolvedNoIndex = noindex || noIndex;
  const resolvedData = structuredData || jsonLd;

  const fullTitle = title ? titleTemplate.replace('%s', title) : DEFAULT_TITLE;

  const fullCanonical = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`
    : typeof window !== 'undefined'
      ? `${BASE_URL}${window.location.pathname}`
      : BASE_URL;

  const keywordsString = Array.isArray(keywords)
    ? keywords.join(', ')
    : keywords ||
      'javascript, typescript, react, code playground, learn javascript, web development, runjs';

  useEffect(() => {
    // 1. Update document title
    document.title = fullTitle;

    // 2. Standard Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywordsString);
    updateMetaTag(
      'name',
      'robots',
      resolvedNoIndex || noFollow
        ? `${resolvedNoIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );
    updateLinkTag('canonical', fullCanonical);

    // 3. OpenGraph Tags
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', fullCanonical);
    updateMetaTag('property', 'og:type', resolvedType);
    updateMetaTag('property', 'og:image', resolvedImage);
    updateMetaTag('property', 'og:site_name', 'RunJS');

    // 4. Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', resolvedImage);

    // 5. Schema.org JSON-LD structured data
    const existingScript = document.getElementById('seo-json-ld');
    if (resolvedData) {
      const script =
        (existingScript as HTMLScriptElement) ||
        document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(resolvedData);
      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [
    fullTitle,
    description,
    keywordsString,
    fullCanonical,
    resolvedType,
    resolvedImage,
    resolvedData,
    resolvedNoIndex,
    noFollow,
  ]);

  return null;
}
