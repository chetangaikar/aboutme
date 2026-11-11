export function normalizeBasePath(value = "/") {
  const path = value.trim().replace(/^\/+|\/+$/g, "");
  return path ? `/${path}/` : "/";
}

export function assetSourceUrl(asset, origin) {
  return new URL(asset.url, origin).href;
}