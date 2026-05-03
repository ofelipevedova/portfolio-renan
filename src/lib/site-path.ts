const externalUrlPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;

function normalizeBasePath(value: string | undefined) {
  const trimmed = value?.trim() ?? "";

  if (!trimmed || trimmed === "/") {
    return "";
  }

  const withoutTrailingSlash = trimmed.replace(/\/+$/, "");

  return withoutTrailingSlash.startsWith("/")
    ? withoutTrailingSlash
    : `/${withoutTrailingSlash}`;
}

export const siteBasePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export const siteOrigin = (process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "")
  .trim()
  .replace(/\/+$/, "");

export function publicPath(path: string) {
  if (!path || externalUrlPattern.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!siteBasePath) {
    return normalizedPath;
  }

  if (
    normalizedPath === siteBasePath ||
    normalizedPath.startsWith(`${siteBasePath}/`)
  ) {
    return normalizedPath;
  }

  return `${siteBasePath}${normalizedPath}`;
}

export function publicUrl(path: string) {
  const pathWithBase = publicPath(path);

  if (!siteOrigin || externalUrlPattern.test(pathWithBase)) {
    return pathWithBase;
  }

  return new URL(pathWithBase, siteOrigin).toString();
}
