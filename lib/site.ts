const LOCAL_SITE_URL = 'http://localhost:3000';

function normalizeSiteUrl(rawValue: string | undefined) {
  if (!rawValue) return LOCAL_SITE_URL;

  const candidate = /^https?:\/\//i.test(rawValue) ? rawValue : 'https://' + rawValue;

  try {
    return new URL(candidate).origin;
  } catch {
    return LOCAL_SITE_URL;
  }
}
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  || process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

export const SITE_URL = normalizeSiteUrl(configuredSiteUrl);

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}
