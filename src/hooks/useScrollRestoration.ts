import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const useScrollRestoration = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const isRestoring = useRef<boolean>(false);
  const scrollPositions = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (navigationType === "POP") {
      isRestoring.current = true;
      const savedPosition = scrollPositions.current.get(pathname);

      if (savedPosition !== undefined) {
        const restoreScroll = () => {
          window.scrollTo(0, savedPosition);
          isRestoring.current = false;
        };

        setTimeout(restoreScroll, 100);
        setTimeout(restoreScroll, 300);
        setTimeout(restoreScroll, 500);
      } else {
        isRestoring.current = false;
      }
      return;
    }

    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isRestoring.current) {
        scrollPositions.current.set(pathname, window.scrollY);
      }
    };

    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      scrollPositions.current.set(pathname, window.scrollY);
    };
  }, [pathname]);
};
