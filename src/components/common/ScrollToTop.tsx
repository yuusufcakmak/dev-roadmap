import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef<string>("");
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
        setTimeout(restoreScroll, 50);
        setTimeout(restoreScroll, 200);
        setTimeout(restoreScroll, 500);
        setTimeout(restoreScroll, 1000);
      } else {
        isRestoring.current = false;
      }
      return;
    }
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.scrollTo(0, 0);
    }

    previousPathname.current = pathname;
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

  return null;
};

export default ScrollToTop;
