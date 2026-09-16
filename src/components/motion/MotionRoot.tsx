"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Preloader } from "@/components/motion/Preloader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealDirection = "left" | "right" | "top" | "bottom";

function isReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealHeading(scope: ParentNode, selector: string, direction: "rtl" | "ltr", reduce: boolean) {
  const headings = gsap.utils.toArray<HTMLElement>(selector, scope);

  headings.forEach((heading) => {
    const lines = Array.from(heading.children).filter((child): child is HTMLElement => child instanceof HTMLElement && child.tagName.toLowerCase() === "span");
    if (!lines.length) {
      return;
    }

    if (reduce) {
      gsap.set(lines, { clearProps: "all" });
      return;
    }

    gsap.fromTo(lines, {
      yPercent: 110,
      opacity: 0.96,
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: heading,
        start: "top 82%",
        once: true,
      },
    });
  });

  const labels = gsap.utils.toArray<HTMLElement>([
    ".journey__label",
    ".ventures__section-label",
    ".vision-experience__label",
    ".current-roles__label",
    ".contact__label",
    ".journey-full-hero__label",
    ".ventures-full-hero__label",
    ".community-partnerships__label",
  ].join(","), scope);

  labels.forEach((label) => {
    if (reduce) {
      return;
    }

    gsap.fromTo(label, {
      autoAlpha: 0,
      x: direction === "rtl" ? 18 : -18,
    }, {
      autoAlpha: 1,
      x: 0,
      duration: 0.62,
      ease: "power3.out",
      scrollTrigger: {
        trigger: label,
        start: "top 88%",
        once: true,
      },
    });
  });
}

function revealBlock(scope: ParentNode, selector: string, y = 28) {
  const items = gsap.utils.toArray<HTMLElement>(selector, scope);

  items.forEach((item) => {
    gsap.fromTo(item, { autoAlpha: 0, y }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 84%",
        once: true,
      },
    });
  });
}

function ensureCover(panel: HTMLElement) {
  let cover = panel.querySelector<HTMLElement>(":scope > .motion-image-cover");
  if (!cover) {
    cover = document.createElement("span");
    cover.className = "motion-image-cover";
    cover.setAttribute("aria-hidden", "true");
    panel.appendChild(cover);
  }

  return cover;
}

function coverEndState(direction: RevealDirection) {
  if (direction === "left") {
    return { xPercent: -101, yPercent: 0 };
  }

  if (direction === "right") {
    return { xPercent: 101, yPercent: 0 };
  }

  if (direction === "top") {
    return { xPercent: 0, yPercent: -101 };
  }

  return { xPercent: 0, yPercent: 101 };
}

function revealPanel(
  scope: ParentNode,
  selector: string,
  direction: RevealDirection = "right",
  options: { delay?: number; duration?: number; cover?: "dark" | "cream" } = {},
) {
  const panels = gsap.utils.toArray<HTMLElement>(selector, scope);

  panels.forEach((panel, index) => {
    const cover = ensureCover(panel);
    const media = panel.querySelector<HTMLElement>("img, .journey-card__image, .current-roles__image");
    const delay = Number(panel.dataset.revealDelay ?? options.delay ?? index * 0.04);
    const duration = Number(panel.dataset.revealDuration ?? options.duration ?? 1.05);
    const theme = panel.dataset.revealTheme ?? options.cover ?? "dark";

    cover.style.background = theme === "cream" ? "#F0EDE5" : "#07100F";

    gsap.set(panel, { overflow: "hidden", visibility: "visible" });
    gsap.set(cover, { autoAlpha: 1, xPercent: 0, yPercent: 0 });

    if (media) {
      gsap.set(media, { scale: 1.07, transformOrigin: "center center" });
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        start: "top 84%",
        once: true,
      },
    });

    timeline.to(cover, {
      ...coverEndState(direction),
      duration,
      delay,
      ease: "power4.inOut",
    });

    if (media) {
      timeline.to(media, {
        scale: 1,
        duration: Math.max(duration + 0.24, 1.2),
        ease: "power3.out",
      }, delay + 0.02);
    }
  });
}

function setupHero(scope: ParentNode, reduce: boolean) {
  const hero = scope.querySelector<HTMLElement>(".hero");
  if (!hero) {
    return;
  }

  const portrait = hero.querySelector(".hero__portrait");
  const topbarItems = hero.querySelectorAll(".brand, .language-switcher, .topbar__menu-toggle, .fullscreen-toggle");
  const navLinks = hero.querySelectorAll(".topbar__nav-link");
  const eyebrow = hero.querySelector(".hero__eyebrow");

  if (reduce) {
    window.dispatchEvent(new CustomEvent("fahad:hero-typewriter-start"));
    return;
  }

  gsap.set([portrait, topbarItems, navLinks, eyebrow], { autoAlpha: 0 });
  gsap.set(portrait, { scale: 1.08, filter: "blur(6px)" });
  gsap.set(topbarItems, { y: -10 });
  gsap.set(navLinks, { y: -10 });
  gsap.set(eyebrow, { y: 14 });

  const play = () => {
    gsap.timeline({ onComplete: () => window.dispatchEvent(new CustomEvent("fahad:hero-typewriter-start")) })
      .to(portrait, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" })
      .to(topbarItems, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.04 }, "-=0.45")
      .to(navLinks, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.06 }, "-=0.48")
      .to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" }, "-=0.18");
  };

  if (document.documentElement.classList.contains("motion-ready")) {
    play();
  } else {
    window.addEventListener("fahad:preloader-complete", play, { once: true });
  }
}

function setupTopbar(scope: ParentNode, reduce: boolean) {
  const topbars = gsap.utils.toArray<HTMLElement>(".topbar", scope);

  topbars.forEach((topbar) => {
    ScrollTrigger.create({
      start: 76,
      end: 99999,
      onUpdate: (self) => {
        const active = self.scroll() > 76;
        gsap.to(topbar, {
          backgroundColor: active ? "rgba(5,7,6,.72)" : "rgba(5,7,6,0)",
          borderBottomColor: active ? "rgba(241,239,231,.05)" : "rgba(241,239,231,0)",
          backdropFilter: active ? "blur(14px)" : "blur(0px)",
          duration: reduce ? 0 : 0.3,
          overwrite: true,
        });
      },
    });
  });
}

function setupScrollProgress(scope: ParentNode) {
  const bar = scope.querySelector<HTMLElement>(".scroll-progress__bar");
  if (!bar) {
    return;
  }

  gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => gsap.to(bar, { scaleX: self.progress, duration: 0.12, ease: "none", overwrite: true }),
  });
}

function setupInternalHero(scope: ParentNode, reduce: boolean) {
  [".journey-full-hero", ".ventures-full-hero"].forEach((selector) => {
    const hero = scope.querySelector<HTMLElement>(selector);
    if (!hero) {
      return;
    }

    const track = hero.querySelector<HTMLElement>(`${selector}__track`);
    const panels = gsap.utils.toArray<HTMLElement>(`${selector}__panel`, hero).slice(0, 4);
    const copy = gsap.utils.toArray<HTMLElement>(`${selector}__panel-copy > *`, hero);

    if (track) {
      track.style.animationPlayState = "paused";
    }

    if (reduce) {
      if (track) track.style.animationPlayState = "running";
      return;
    }

    panels.forEach((panel, index) => {
      revealPanel(hero, `${selector}__panel:nth-child(${index + 1})`, index % 2 === 0 ? "right" : "left", { delay: index * 0.08 });
    });

    gsap.delayedCall(1.15, () => {
      if (track) track.style.animationPlayState = "running";
    });

    gsap.fromTo(copy, { autoAlpha: 0, y: 18 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      stagger: 0.04,
      delay: 0.45,
    });
  });
}

function setupParallax(scope: ParentNode, reduce: boolean) {
  if (reduce) {
    return;
  }

  const targets = gsap.utils.toArray<HTMLElement>([
    ".current-roles__image",
    ".venture-chapter__media img",
  ].join(","), scope);

  targets.slice(0, 8).forEach((target) => {
    gsap.fromTo(target, { yPercent: -4 }, {
      yPercent: 4,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  });
}

function setupCountUp(scope: ParentNode, reduce: boolean) {
  const stats = gsap.utils.toArray<HTMLElement>(".venture-chapter__stats strong", scope);

  stats.forEach((stat) => {
    const text = stat.textContent?.trim() ?? "";
    const match = text.match(/^(\+?)(\d+)(M?)(\+?)$/i);

    if (!match || reduce) {
      return;
    }

    const [, prefix, value, suffix, plus] = match;
    const target = Number(value);
    const state = { value: 0 };

    ScrollTrigger.create({
      trigger: stat,
      start: "top 86%",
      once: true,
      onEnter: () => {
        gsap.to(state, {
          value: target,
          duration: 1.25,
          ease: "power2.out",
          onUpdate: () => {
            stat.textContent = `${prefix}${Math.round(state.value)}${suffix}${plus}`;
          },
        });
      },
    });
  });
}

function setupFooterMotion(root: HTMLElement, reduce: boolean) {
  const footer = root.querySelector<HTMLElement>(".footer");
  if (!footer || reduce) {
    return;
  }

  gsap.fromTo(footer.querySelector(".footer__logo"), { autoAlpha: 0, scale: 0.92 }, {
    autoAlpha: 1,
    scale: 1,
    duration: 0.62,
    ease: "power3.out",
    scrollTrigger: { trigger: footer, start: "top 88%", once: true },
  });

  gsap.fromTo(footer.querySelectorAll(".footer__identity-copy > *, .footer__intro"), { autoAlpha: 0, y: 16 }, {
    autoAlpha: 1,
    y: 0,
    duration: 0.62,
    ease: "power3.out",
    stagger: 0.06,
    scrollTrigger: { trigger: footer, start: "top 88%", once: true },
  });

  gsap.fromTo(footer.querySelectorAll(".footer__column li, .footer__contact a, .footer__social a"), { autoAlpha: 0, y: 12 }, {
    autoAlpha: 1,
    y: 0,
    duration: 0.48,
    ease: "power3.out",
    stagger: 0.035,
    scrollTrigger: { trigger: footer, start: "top 86%", once: true },
  });
}

function setupRefreshEvents() {
  const refresh = () => ScrollTrigger.refresh();
  const debouncedRefresh = gsap.delayedCall(0.18, refresh).pause();
  const onResize = () => debouncedRefresh.restart(true);

  if (document.fonts) {
    document.fonts.ready.then(refresh).catch(() => undefined);
  }

  window.addEventListener("load", refresh, { once: true });
  window.addEventListener("resize", onResize);
  document.addEventListener("fullscreenchange", refresh);
  window.addEventListener("fahad:preloader-complete", refresh, { once: true });

  return () => {
    window.removeEventListener("resize", onResize);
    document.removeEventListener("fullscreenchange", refresh);
    debouncedRefresh.kill();
  };
}

function setupSiteMotion(root: HTMLElement, pathname: string) {
  const reduce = isReducedMotion();
  const direction = document.documentElement.dir === "ltr" ? "ltr" : "rtl";
  const cleanupRefresh = setupRefreshEvents();

  setupScrollProgress(root);
  setupTopbar(root, reduce);
  setupInternalHero(root, reduce);
  setupHero(root, reduce);

  if (!reduce) {
    revealHeading(root, [
      ".journey__title",
      ".ventures-card__title",
      ".vision-experience__title",
      ".current-roles__heading",
      ".contact__heading",
      ".community-partnerships__title",
      ".venture-chapter__content h2",
      ".ventures-other__header h2",
      ".journey-intro__heading",
      ".career-chapter__heading",
    ].join(","), direction, reduce);

    revealBlock(root, ".journey__intro, .ventures-card__description, .ventures-card__names, .vision-experience__intro, .contact__subline, .community-partnerships__line, .ventures-other__header p", 24);
    revealBlock(root, ".journey__cta, .ventures-card__cta, .contact__link", 18);

    const journeyCards = gsap.utils.toArray<HTMLElement>(".journey-card", root);
    const journeyCardsTrigger = root.querySelector<HTMLElement>(".journey__cards");
    if (journeyCards.length && journeyCardsTrigger) {
      gsap.fromTo(journeyCards, { autoAlpha: 0, y: 44 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: journeyCardsTrigger,
          start: "top 82%",
          once: true,
        },
      });
    }

    revealPanel(root, ".journey-card:nth-child(1)", "right");
    revealPanel(root, ".journey-card:nth-child(2)", "bottom", { delay: 0.08 });
    revealPanel(root, ".journey-card:nth-child(3)", "left", { delay: 0.16 });
    revealPanel(root, ".ventures-card__media", "left");
    revealPanel(root, ".ventures-card__text", direction === "rtl" ? "right" : "left");
    revealPanel(root, ".current-roles__panel:nth-child(1)", "bottom");
    revealPanel(root, ".current-roles__panel:nth-child(2)", "top", { delay: 0.08 });
    revealPanel(root, ".current-roles__panel:nth-child(3)", "bottom", { delay: 0.16 });
    revealPanel(root, ".community-partnerships__visual", "bottom");
    revealPanel(root, ".venture-chapter__media", direction === "rtl" ? "left" : "right");
    revealPanel(root, ".career-chapter__media", direction === "rtl" ? "right" : "left", { cover: "cream" });

    const visionPillars = gsap.utils.toArray<HTMLElement>(".vision-experience__pillar", root);
    const visionPillarsTrigger = root.querySelector<HTMLElement>(".vision-experience__pillars");
    if (visionPillars.length && visionPillarsTrigger) {
      gsap.fromTo(visionPillars, { autoAlpha: 0, y: 28 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: visionPillarsTrigger,
          start: "top 82%",
          once: true,
        },
      });
    }

    const visionWatermark = root.querySelector<HTMLElement>(".vision-experience__watermark");
    const visionSection = root.querySelector<HTMLElement>(".vision-experience");
    if (visionWatermark && visionSection) {
      gsap.to(visionWatermark, {
        xPercent: direction === "rtl" ? 3 : -3,
        ease: "none",
        scrollTrigger: {
          trigger: visionSection,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }

    setupParallax(root, reduce);
    setupCountUp(root, reduce);
    setupFooterMotion(root, reduce);
  } else {
    root.querySelectorAll(".motion-image-cover").forEach((cover) => cover.remove());
    window.dispatchEvent(new CustomEvent("fahad:hero-typewriter-start"));
  }

  gsap.fromTo(root, { autoAlpha: 0.98 }, { autoAlpha: 1, duration: pathname === "/" ? 0.2 : 0.45, ease: "power2.out" });

  return cleanupRefresh;
}

export function MotionRoot({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    let cleanupRefresh: (() => void) | undefined;
    const ctx = gsap.context(() => {
      cleanupRefresh = setupSiteMotion(root, pathname);
    }, root);

    return () => {
      cleanupRefresh?.();
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, { scope: rootRef, dependencies: [pathname], revertOnUpdate: true });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <div className="scroll-progress" aria-hidden="true"><span className="scroll-progress__bar" /></div>
      <div ref={rootRef}>{children}</div>
    </>
  );
}




