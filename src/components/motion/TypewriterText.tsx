"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TypewriterTextProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  start?: boolean;
  speed?: number;
  onComplete?: () => void;
};

function segmentText(value: string) {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(value), (part) => part.segment);
  }

  return Array.from(value);
}

export function TypewriterText({ className, lineClassName, lines, onComplete, speed = 42, start = true }: TypewriterTextProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const completeRef = useRef(onComplete);
  const segments = useMemo(() => segmentText(lines.join("\n")), [lines]);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!start) {
      return;
    }

    if (reduceMotion) {
      const reduceTimer = window.setTimeout(() => {
        setCount(segments.length);
        setDone(true);
        setCursorVisible(false);
        completeRef.current?.();
      }, 0);

      return () => window.clearTimeout(reduceTimer);
    }

    let timer: number | undefined;
    const startTimer = window.setTimeout(() => {
      setCount(0);
      setDone(false);
      setCursorVisible(true);

      let index = 0;
      timer = window.setInterval(() => {
        index += 1;
        setCount(index);

        if (index >= segments.length) {
          if (timer) {
            window.clearInterval(timer);
          }
          setDone(true);
          completeRef.current?.();
          window.setTimeout(() => setCursorVisible(false), 500);
        }
      }, speed);
    }, 0);

    return () => {
      window.clearTimeout(startTimer);
      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, [segments.length, speed, start]);

  const visibleText = segments.slice(0, count).join("");
  const visibleLines = visibleText.split("\n");

  return (
    <span className={className} data-typing-done={done}>
      {lines.map((_, index) => (
        <span className={lineClassName} key={index}>
          {visibleLines[index] ?? ""}
          {cursorVisible && index === visibleLines.length - 1 ? <span className="typewriter-cursor" aria-hidden="true" /> : null}
        </span>
      ))}
    </span>
  );
}


