import { createRoot } from 'react-dom/client';
import App from './App';
import { BRAND, TITLE_SUFFIX } from './config';

const container = document.getElementById('root')!;

// Update document title and basic meta to use the central BRAND
const title = `${BRAND}${TITLE_SUFFIX}`;
document.title = title;

const ensureMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

ensureMeta('name', 'description', 'Write and run code instantly in the browser. Supports Python, JavaScript, C++, Java, Go, C#, and more.');
ensureMeta('property', 'og:title', `Run Code in Your Browser - ${BRAND}`);
ensureMeta('property', 'og:description', 'Instant, multi-language coding without setup. Try Python, JavaScript, C++, and more.');
createRoot(container).render(<App />);
