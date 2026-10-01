import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * HashRouter-safe anchor navigation. React Router's hash handling conflicts
 * with HashRouter URLs, so in-page anchors like "/#opettajat" or
 * "/hierontakoulutus#sisalto" are handled manually: navigate to the target
 * route first, then smooth-scroll to the element.
 */
export function useAnchorNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (href: string) => (event: React.MouseEvent) => {
      const [path, hash] = href.split('#');
      if (!hash) return;
      event.preventDefault();
      const targetPath = path || '/';
      const scroll = () => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      if (targetPath !== pathname) {
        navigate(targetPath);
        window.setTimeout(scroll, 200);
      } else {
        scroll();
      }
    },
    [navigate, pathname]
  );
}

export function isAnchorHref(href: string) {
  return href.includes('#');
}
