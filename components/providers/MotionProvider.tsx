"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Honours the OS-level `prefers-reduced-motion` setting: Framer Motion drops
 * transform animations for users who ask for reduced motion, keeping opacity
 * changes only.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
