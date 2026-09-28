/** Matches `NEXT_PUBLIC_BASE_PATH` / `next.config` basePath (no trailing slash). */
const raw = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const BASE_PATH = raw.replace(/\/$/, "");

/** Prefix a root-absolute public asset path for GitHub Pages subpath deploys. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}
