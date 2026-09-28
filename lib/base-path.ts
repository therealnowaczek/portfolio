/** Matches `NEXT_PUBLIC_BASE_PATH` / `next.config` basePath (no trailing slash). */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

/** Prefix a root-absolute public asset path for GitHub Pages subpath deploys. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}
