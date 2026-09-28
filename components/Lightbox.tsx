"use client";

import { useEffect, useState } from "react";
import { ProjectPlaceholder } from "./ProjectPlaceholder";

type Props = {
  src: string | null;
  title: string;
  accent: string;
  onClose: () => void;
};

export function Lightbox({ src, title, accent, onClose }: Props) {
  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    setIsTall(false);
  }, [src]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={`Zoomed screen: ${title}`}
      onClick={onClose}
    >
      <div
        className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="truncate text-sm font-medium text-white/90">{title}</p>
        <button
          type="button"
          className="shrink-0 rounded-[8px] bg-white px-3 py-1.5 text-sm font-medium text-foreground"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-6"
        onClick={onClose}
      >
        <div
          className={`mx-auto ${
            isTall
              ? "w-full max-w-[min(100%,420px)]"
              : "flex w-full max-w-[min(100%,1100px)] justify-center"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={title}
              className={
                isTall
                  ? "block h-auto w-full rounded-[10px] bg-white shadow-2xl"
                  : "block h-auto max-h-[calc(100vh-7rem)] w-auto max-w-full rounded-[10px] bg-white object-contain shadow-2xl"
              }
              onLoad={(e) => {
                const img = e.currentTarget;
                if (img.naturalHeight > 0) {
                  setIsTall(img.naturalWidth / img.naturalHeight < 0.72);
                }
              }}
            />
          ) : (
            <div className="rounded-[10px] bg-white p-2">
              <ProjectPlaceholder
                title={title}
                accent={accent}
                aspect="video"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
