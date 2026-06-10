import { useEffect } from 'react';

/**
 * Sets document.title and the meta description for a page.
 * Lightweight alternative to react-helmet-async (single-page meta needs).
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
