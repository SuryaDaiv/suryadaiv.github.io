import { useEffect } from 'react';
import { BRAND, TITLE_SUFFIX, SITE_URL } from '../config';

type SEOProps = {
  title: string;
  description: string;
  url?: string;
};

export default function SEO({ title, description, url }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${BRAND}${TITLE_SUFFIX}`;
    document.title = fullTitle;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url ?? SITE_URL);
  }, [title, description, url]);

  return null;
}
