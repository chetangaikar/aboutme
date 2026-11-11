import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { assetSourceUrl } from "./pages-utils.mjs";

// Materialize the existing uploaded portrait so Pages does not depend on
// Lovable's host-specific /__l5e/ request handler at runtime.
const asset = JSON.parse(await readFile(new URL("../src/assets/chetan-gaikar-photo.jpg.asset.json", import.meta.url), "utf8"));
const origin = process.env.LOVABLE_ASSET_ORIGIN || "https://id-preview--99827be9-cab0-477c-b5cc-6932dd52b072.lovable.app";
const response = await fetch(assetSourceUrl(asset, origin));
if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
  throw new Error(`Portrait download failed (${response.status}); check LOVABLE_ASSET_ORIGIN.`);
}
const bytes = new Uint8Array(await response.arrayBuffer());
if (!bytes.length) throw new Error("Portrait download was empty.");
await mkdir("dist/assets", { recursive: true });
await writeFile("dist/assets/chetan-gaikar-photo.jpg", bytes);
await copyFile("dist/index.html", "dist/404.html");
await writeFile("dist/.nojekyll", "");
console.log("Pages ready: bundled portrait, route fallback, and .nojekyll.");