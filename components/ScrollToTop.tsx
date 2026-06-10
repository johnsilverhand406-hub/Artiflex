import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls the window (and the scrollable main container) to top on route change. */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Layout renders content inside a scrollable <main> — reset it too.
    document.querySelector('main')?.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
