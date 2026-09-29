"use client";

import { useEffect, useState } from "react";
import { ProjectImage } from "./ProjectImage";

const PHONE =
  "relative mx-auto aspect-[390/844] w-full max-w-[280px] bg-surface sm:max-w-[320px]";
const PHONE_THUMB = "relative aspect-[390/844] w-full bg-surface";
/** Matches desktop capture 1600×900 (exact 16:9 / aspect-video). */
const DESKTOP = "relative aspect-video w-full bg-surface";

/** 16:9 ≈ 1.78; iPhone ≈ 0.46 — anything under ~0.85 is a phone frame. */
function isTallRatio(width: number, height: number) {
  return height > 0 && width / height < 0.85;
}

type Props = {
  src: string;
  alt: string;
  /** Initial guess before natural size loads (avoids layout flash). */
  defaultTall?: boolean;
  /** Full-width cover vs grid thumbnail. */
  variant?: "cover" | "thumb";
  priority?: boolean;
};

/**
 * Picks phone vs 16:9 frame from the image itself so mixed projects
 * (e.g. Nest iOS + desktop) don't letterbox into the wrong aspect.
 */
export function ScreenFrame({
  src,
  alt,
  defaultTall = false,
  variant = "thumb",
  priority,
}: Props) {
  const [tall, setTall] = useState(defaultTall);

  useEffect(() => {
    setTall(defaultTall);
  }, [src, defaultTall]);

  const frame = tall
    ? variant === "cover"
      ? PHONE
      : PHONE_THUMB
    : DESKTOP;

  return (
    <div className={frame}>
      <ProjectImage
        src={src}
        alt={alt}
        priority={priority}
        className={
          tall
            ? "absolute inset-0 h-full w-full object-cover object-top"
            : "absolute inset-0 h-full w-full object-contain object-top"
        }
        onLoad={(e) => {
          const img = e.currentTarget;
          setTall(isTallRatio(img.naturalWidth, img.naturalHeight));
        }}
      />
    </div>
  );
}
