"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FullscreenContextValue = {
  isFullscreen: boolean;
  isSupported: boolean;
  toggleFullscreen: () => Promise<void>;
};

const FullscreenContext = createContext<FullscreenContextValue | null>(null);

export function FullscreenProvider({ children }: { children: ReactNode }) {
  const [isSupported, setIsSupported] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const syncFullscreen = useCallback(() => {
    setIsFullscreen(Boolean(document.fullscreenElement));
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const supported = typeof document.documentElement.requestFullscreen === "function" && typeof document.exitFullscreen === "function";
      setIsSupported(supported);

      if (supported) {
        syncFullscreen();
        document.addEventListener("fullscreenchange", syncFullscreen);
      }
    }, 0);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("fullscreenchange", syncFullscreen);
    };
  }, [syncFullscreen]);

  const toggleFullscreen = useCallback(async () => {
    if (!isSupported) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  }, [isSupported]);

  const value = useMemo(
    () => ({ isFullscreen, isSupported, toggleFullscreen }),
    [isFullscreen, isSupported, toggleFullscreen],
  );

  return <FullscreenContext.Provider value={value}>{children}</FullscreenContext.Provider>;
}

export function useFullscreen() {
  const context = useContext(FullscreenContext);

  if (!context) {
    throw new Error("useFullscreen must be used within FullscreenProvider");
  }

  return context;
}