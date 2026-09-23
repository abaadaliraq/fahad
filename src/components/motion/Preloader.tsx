"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MIN_VISIBLE = 700;
const MAX_VISIBLE = 1800;
const HERO_IMAGE = "/images/fahadhero.jpg";

function loadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    const logo = logoRef.current;
    const halo = haloRef.current;

    if (!root || !logo || !halo) {
      return;
    }

    document.documentElement.classList.add("motion-loading");

    const ctx = gsap.context(() => {
      if (!reduceMotion) {
        gsap.to(logo, {
          scale: 1.04,
          opacity: 1,
          duration: 1.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(halo, {
          scale: 1.16,
          opacity: 0.72,
          duration: 1.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, root);

    const startedAt = performance.now();
    const timeout = new Promise<void>((resolve) => window.setTimeout(resolve, MAX_VISIBLE));
    const assets = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      loadImage(HERO_IMAGE),
    ]).then(() => undefined);

    Promise.race([assets, timeout]).then(() => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, MIN_VISIBLE - elapsed);

      window.setTimeout(() => {
        ctx.revert();
        gsap.timeline({
          defaults: { ease: "power4.inOut" },
          onComplete: () => {
            document.documentElement.classList.remove("motion-loading");
            document.documentElement.classList.add("motion-ready");
            window.dispatchEvent(new CustomEvent("fahad:preloader-complete"));
            setVisible(false);
          },
        })
          .to(logo, { scale: reduceMotion ? 0.92 : 0.82, opacity: 0, duration: reduceMotion ? 0.18 : 0.42 })
          .to(halo, { scale: 0.88, opacity: 0, duration: reduceMotion ? 0.18 : 0.42 }, "<")
          .to(root, { clipPath: "inset(0 0 100% 0)", duration: reduceMotion ? 0.24 : 0.7 }, "-=0.05");
      }, wait);
    });

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("motion-loading");
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="preloader" ref={rootRef} aria-label="Loading">
      <div className="preloader__halo" ref={haloRef} aria-hidden="true" />
      <div className="preloader__logo" ref={logoRef}>
        <Image src="/images/logo/fahad-logo.png" alt="" width={72} height={72} priority />
      </div>
    </div>
  );
}
