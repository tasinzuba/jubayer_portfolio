"use client";

import { useState, useEffect, useCallback } from "react";
import { BOOT_LINES } from "@/terminal/ascii";

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const skipBoot = useCallback(() => {
    setLines(BOOT_LINES);
    setDone(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        setTimeout(onComplete, 400);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 p-4 sm:p-8 font-mono overflow-hidden flex flex-col">
      <div className="flex-1 overflow-hidden">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-green-500 text-xs sm:text-sm leading-relaxed whitespace-pre"
          >
            {line}
          </p>
        ))}
        {!done && (
          <span className="inline-block w-2.5 h-4 bg-green-500 animate-pulse" />
        )}
      </div>
      {!done && (
        <button
          onClick={skipBoot}
          className="self-end text-green-500/50 hover:text-green-500 text-xs transition-colors"
        >
          [Press to skip]
        </button>
      )}
    </div>
  );
}
