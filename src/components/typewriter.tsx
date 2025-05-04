"use client";

import type React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

type TypewriterProps = {
  text: string;
  className?: string;
  delay?: number;
  cursorClassName?: string;
};

export function Typewriter({
  text,
  className,
  delay = 0,
  cursorClassName = 'ml-1 inline-block h-[1em] w-[3px] bg-current align-middle' // Default cursor style
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const stopBlinkingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startDelayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set isClient to true only after mounting on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Cleanup function to clear all timers
    const cleanup = () => {
      if (startDelayTimeoutRef.current) clearTimeout(startDelayTimeoutRef.current);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
      if (stopBlinkingTimeoutRef.current) clearTimeout(stopBlinkingTimeoutRef.current);
      typingIntervalRef.current = null;
      cursorIntervalRef.current = null;
      stopBlinkingTimeoutRef.current = null;
      startDelayTimeoutRef.current = null;
    };

    // Exit early if not on client or if reduced motion is preferred
    if (!isClient || prefersReducedMotion) {
      setDisplayText(text); // Show full text immediately
      setShowCursor(false); // No cursor needed
      cleanup(); // Clean up any potentially running timers from previous renders
      return;
    }

    // Reset state for typing effect
    setDisplayText('');
    setCurrentIndex(0);
    setShowCursor(true);

    // Start the typing effect after the specified delay
    startDelayTimeoutRef.current = setTimeout(() => {
      typingIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < text.length) {
            setDisplayText((prev) => prev + text[prevIndex]);
            return prevIndex + 1;
          } else {
            if(typingIntervalRef.current) clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;

            // Start blinking cursor
             cursorIntervalRef.current = setInterval(() => {
               setShowCursor((prev) => !prev);
             }, 500); // Blinking interval

             // Stop blinking after some time and hide cursor
             stopBlinkingTimeoutRef.current = setTimeout(() => {
               if(cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
               cursorIntervalRef.current = null;
               setShowCursor(false);
             }, 5000); // Stop blinking after 5 seconds

            return prevIndex; // Typing finished
          }
        });
      }, 50); // Typing speed
    }, delay); // Initial delay

    // Return the cleanup function
    return cleanup;

  // Dependency array includes critical state/props
  }, [text, delay, isClient, prefersReducedMotion]);

  // --- Hydration Handling ---
  // Render nothing on the server to avoid mismatch.
  // Or, render the final text if reduced motion is preferred AFTER mount.
  if (!isClient) {
     // Render an empty span or placeholder with the same class for layout consistency during SSR
     return <span className={className}>&nbsp;</span>; // Use non-breaking space or adjust styling
  }

  if (prefersReducedMotion) {
      return <span className={className}>{text}</span>;
  }
  // --- End Hydration Handling ---

  // Render the typing effect on the client
  return (
    <span className={className}>
      {displayText}
      {/* Conditionally render motion cursor only if !prefersReducedMotion and typing is ongoing or just finished */}
      {!prefersReducedMotion && showCursor && (
         <motion.span
           key="cursor"
           className={cursorClassName}
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 1, 0] }}
           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
         />
      )}
    </span>
  );
}
