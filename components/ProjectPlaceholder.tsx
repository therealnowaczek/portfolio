type Props = {
  title: string;
  accent: string;
  label?: string;
  className?: string;
  captionClassName?: string;
  aspect?: "video" | "square" | "tall";
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  tall: "aspect-[390/844]",
};

export function ProjectPlaceholder({
  title,
  accent,
  label,
  className = "",
  captionClassName = "",
  aspect = "video",
}: Props) {
  return (
    <div
      className={`relative flex w-full items-end overflow-hidden rounded-[8px] ${aspectClass[aspect]} ${className}`}
      style={{
        background: `linear-gradient(145deg, ${accent}22 0%, ${accent}55 45%, #f0f2f5 100%)`,
      }}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, ${accent}66 0%, transparent 45%),
            linear-gradient(135deg, transparent 40%, ${accent}33 100%)`,
        }}
      />
      <div
        className={`relative z-[1] w-full p-4 sm:p-5 ${captionClassName}`}
      >
        <p className="text-base font-semibold text-[#111111] sm:text-lg">
          {title}
        </p>
      </div>
    </div>
  );
}
