"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./CustomCursor.module.css";

type CursorMode = "default" | "link" | "logo" | "explore";
type CursorTheme = "dark" | "light";

const POINTER_QUERY = "(pointer: fine) and (hover: hover)";
const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

function getCursorMode(target: EventTarget | null): CursorMode {
  if (!(target instanceof Element)) {
    return "default";
  }

  const explicit = target.closest<HTMLElement>("[data-cursor]")?.dataset.cursor;
  if (explicit === "logo" || explicit === "explore" || explicit === "link") {
    return explicit;
  }

  if (target.closest("a, button, [data-cursor='link']")) {
    return "link";
  }

  return "default";
}

function getCursorTheme(target: EventTarget | null): CursorTheme {
  if (!(target instanceof Element)) {
    return "dark";
  }

  return target.closest<HTMLElement>("[data-cursor-theme]")?.dataset.cursorTheme === "light" ? "light" : "dark";
}

function getCursorLabel(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return document.documentElement.lang === "en" ? "EXPLORE ↗" : "استكشف ↗";
  }

  const language = target.closest<HTMLElement>("[data-language]")?.dataset.language ?? document.documentElement.lang;
  return language === "en" ? "EXPLORE ↗" : "استكشف ↗";
}

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLElement | null>(null);
  const imageFollowRef = useRef<HTMLElement | null>(null);
  const magneticReturnRef = useRef<gsap.core.Tween | null>(null);
  const imageReturnRef = useRef<gsap.core.Tween | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const ringPositionRef = useRef({ x: 0, y: 0 });
  const hasPointerRef = useRef(false);
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [theme, setTheme] = useState<CursorTheme>("dark");
  const [label, setLabel] = useState("استكشف ↗");

  useEffect(() => {
    const reset = window.setTimeout(() => setMode("default"), 0);
    return () => window.clearTimeout(reset);
  }, [pathname]);

  useEffect(() => {
    const pointerQuery = window.matchMedia(POINTER_QUERY);
    const update = () => setEnabled(pointerQuery.matches);
    const timer = window.setTimeout(update, 0);

    pointerQuery.addEventListener("change", update);

    return () => {
      window.clearTimeout(timer);
      pointerQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("custom-cursor-enabled");
      return;
    }

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const reduce = window.matchMedia(REDUCE_QUERY).matches;
    const follow = reduce ? 0.6 : 0.28;

    if (!root || !dot || !ring) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const transformAt = (x: number, y: number) => `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    const setVisible = (visible: boolean, immediate = false) => {
      gsap.to(root, {
        opacity: visible ? 1 : 0,
        duration: immediate || reduce ? 0.01 : 0.16,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const render = () => {
      const target = targetRef.current;
      const ringPosition = ringPositionRef.current;

      ringPosition.x += (target.x - ringPosition.x) * follow;
      ringPosition.y += (target.y - ringPosition.y) * follow;

      dot.style.transform = transformAt(target.x, target.y);
      ring.style.transform = transformAt(ringPosition.x, ringPosition.y);

      frameRef.current = window.requestAnimationFrame(render);
    };

    const startTrackingAt = (x: number, y: number) => {
      targetRef.current = { x, y };
      if (!hasPointerRef.current) {
        ringPositionRef.current = { x, y };
        dot.style.transform = transformAt(x, y);
        ring.style.transform = transformAt(x, y);
      }
      hasPointerRef.current = true;
    };

    const show = () => {
      if (hasPointerRef.current) {
        setVisible(true);
      }
    };

    if (document.documentElement.classList.contains("motion-ready")) {
      show();
    } else {
      window.addEventListener("fahad:preloader-complete", show, { once: true });
    }

    frameRef.current = window.requestAnimationFrame(render);

    const onPointerMove = (event: PointerEvent) => {
      startTrackingAt(event.clientX, event.clientY);

      if (document.documentElement.classList.contains("motion-ready")) {
        setVisible(true, true);
      }

      const magnetic = magneticRef.current;
      if (magnetic && !reduce) {
        const rect = magnetic.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
        gsap.to(magnetic, { x, y, duration: 0.32, ease: "power3.out", overwrite: true });

        const arrow = magnetic.querySelector<HTMLElement>("[class*='arrow'], .contact__arrow");
        if (arrow) {
          gsap.to(arrow, { x: x * 1.4, y: y * 1.4, duration: 0.32, ease: "power3.out", overwrite: true });
        }
      }

      const image = imageFollowRef.current;
      if (image && !reduce) {
        const host = image.closest<HTMLElement>("[data-image-follow]");
        if (host) {
          const rect = host.getBoundingClientRect();
          const x = -((event.clientX - rect.left) / rect.width - 0.5) * 8;
          const y = -((event.clientY - rect.top) / rect.height - 0.5) * 8;
          gsap.to(image, { x, y, scale: 1.025, duration: 0.32, ease: "power3.out", overwrite: true });
        }
      }
    };

    const updateMode = (target: EventTarget | null) => {
      setMode(getCursorMode(target));
      setTheme(getCursorTheme(target));
      setLabel(getCursorLabel(target));
    };

    const onPointerOver = (event: PointerEvent) => {
      updateMode(event.target);

      if (event.target instanceof Element) {
        const magnetic = event.target.closest<HTMLElement>("[data-magnetic]");
        if (magnetic && magneticRef.current !== magnetic) {
          magneticReturnRef.current?.kill();
          magneticRef.current = magnetic;
        }

        const imageHost = event.target.closest<HTMLElement>("[data-image-follow]");
        if (imageHost) {
          imageReturnRef.current?.kill();
          imageFollowRef.current = imageHost.querySelector<HTMLElement>("img, .current-roles__image, .journey-card__image, .ventures-card__media");
        }
      }
    };

    const onPointerOut = (event: PointerEvent) => {
      const next = event.relatedTarget;
      const target = event.target;

      if (target instanceof Element) {
        const magnetic = magneticRef.current;
        if (magnetic && !magnetic.contains(next as Node | null)) {
          const arrow = magnetic.querySelector<HTMLElement>("[class*='arrow'], .contact__arrow");
          magneticReturnRef.current = gsap.to(magnetic, { x: 0, y: 0, duration: reduce ? 0.01 : 0.38, ease: "power3.out", overwrite: true });
          if (arrow) {
            gsap.to(arrow, { x: 0, y: 0, duration: reduce ? 0.01 : 0.38, ease: "power3.out", overwrite: true });
          }
          magneticRef.current = null;
        }

        const image = imageFollowRef.current;
        const host = target.closest<HTMLElement>("[data-image-follow]");
        if (image && host && !host.contains(next as Node | null)) {
          imageReturnRef.current = gsap.to(image, { x: 0, y: 0, scale: 1, duration: reduce ? 0.01 : 0.42, ease: "power3.out", overwrite: true });
          imageFollowRef.current = null;
        }
      }

      if (next instanceof Element) {
        updateMode(next);
      } else {
        setMode("default");
      }
    };

    const onPointerDown = () => root.dataset.pressed = "true";
    const onPointerUp = () => root.dataset.pressed = "false";
    const onPointerLeave = () => setVisible(false);
    const onPointerEnter = (event: PointerEvent) => {
      startTrackingAt(event.clientX, event.clientY);
      setVisible(true, true);
    };
    const onFullscreenChange = () => {
      const { x, y } = targetRef.current;
      ringPositionRef.current = { x, y };
      dot.style.transform = transformAt(x, y);
      ring.style.transform = transformAt(x, y);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave, { passive: true });
    document.documentElement.addEventListener("pointerenter", onPointerEnter, { passive: true });
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("fahad:preloader-complete", show);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.removeEventListener("pointerenter", onPointerEnter);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      magneticReturnRef.current?.kill();
      imageReturnRef.current?.kill();
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className={styles.cursor} data-mode={mode} data-theme={theme} data-pressed="false" ref={rootRef} aria-hidden="true">
      <div className={styles.dot} ref={dotRef}>
        <span className={styles.dotVisual} />
      </div>
      <div className={styles.ring} ref={ringRef}>
        <span className={styles.ringVisual}>
          <Image className={styles.logo} src="/images/logo/fahad-logo.png" alt="" width={24} height={24} aria-hidden="true" />
          <span className={styles.label}>{label}</span>
        </span>
      </div>
    </div>
  );
}




