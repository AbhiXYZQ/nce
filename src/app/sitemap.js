import { DEPARTMENTS } from "@/lib/departments";

const DEFAULT_SITE_URL = "https://ncechandi.ac.in";

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  const url = (envUrl || DEFAULT_SITE_URL).trim();
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function withBase(base, path) {
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}

export default function sitemap() {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const staticPaths = [
    "/",
    "/about",
    "/vision",
    "/administration",
    "/principal",
    "/faculty",
    "/academics",
    "/admission",
    "/departments",
    "/placement",
    "/research",
    "/iqac",
    "/nirf",
    "/notices",
    "/calendar",
    "/syllabus",
    "/exam",
    "/results",
    "/clubs",
    "/alumni",
    "/scholarships",
    "/grievance",
    "/anti-ragging",
    "/student-login",
    "/contact",
  ];

  const departmentPaths = Object.values(DEPARTMENTS ?? {}).map((d) => `/departments/${d.slug}`);

  const urls = [...new Set([...staticPaths, ...departmentPaths])];

  return urls.map((path) => ({
    url: withBase(baseUrl, path),
    lastModified: now,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path.startsWith("/departments/") ? 0.7 : 0.8,
  }));
}
