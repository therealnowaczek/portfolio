type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
};

/** Design screenshots must stay sharp; skip next/image lossy resize. */
export function ProjectImage({
  src,
  alt,
  className = "",
  priority,
  onLoad,
}: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onLoad={onLoad}
    />
  );
}
