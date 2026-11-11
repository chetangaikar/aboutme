import assert from "node:assert/strict";
import test from "node:test";
import { assetSourceUrl, normalizeBasePath } from "./pages-utils.mjs";

test("repository Pages deployments use a trailing-slash repository base", () => {
  assert.equal(normalizeBasePath("/aboutme"), "/aboutme/");
  assert.equal(normalizeBasePath("/another-repo/"), "/another-repo/");
});

test("account Pages and custom domains use the root base", () => {
  assert.equal(normalizeBasePath(""), "/");
  assert.equal(normalizeBasePath("/"), "/");
});

test("Lovable image pointers resolve against the original host, not GitHub Pages", () => {
  assert.equal(
    assetSourceUrl({ url: "/__l5e/assets-v1/photo/portrait.jpg" }, "https://example.lovable.app"),
    "https://example.lovable.app/__l5e/assets-v1/photo/portrait.jpg",
  );
});