/**
 * Generate all favicon / icon files from an SVG template.
 *
 * Outputs:
 *   src/app/favicon.ico   – 16, 32, 48 px combined
 *   src/app/icon.svg       – scalable vector
 *   src/app/icon.png       – 512×512
 *   src/app/apple-icon.png – 180×180
 *   public/icon-192.png    – 192×192  (manifest)
 *   public/icon-512.png    – 512×512  (manifest)
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "src", "app");
const PUBLIC_DIR = path.join(ROOT, "public");

// ─── SVG source ──────────────────────────────────────────────────
const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="102" fill="#2F5D50"/>
  <text
    x="180" y="360"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="340"
    font-weight="700"
    fill="#F6F3EC"
    letter-spacing="-10"
  >D</text>
  <rect x="310" y="340" width="90" height="22" rx="4" fill="#F6F3EC"/>
</svg>`;

// ─── Helpers ─────────────────────────────────────────────────────

async function svgToPng(svgBuffer, size) {
  return sharp(svgBuffer)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

/**
 * Build a minimal ICO file from multiple PNG buffers.
 * ICO format: 6-byte header → N × 16-byte directory entries → image data
 */
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * count;
  let dataOffset = headerSize + dirSize;

  const entries = pngBuffers.map((buf) => {
    const meta = { size: buf.length, offset: dataOffset };
    dataOffset += buf.length;
    return meta;
  });

  const totalSize = dataOffset;
  const ico = Buffer.alloc(totalSize);

  // Header
  ico.writeUInt16LE(0, 0);     // reserved
  ico.writeUInt16LE(1, 2);     // type: 1 = ICO
  ico.writeUInt16LE(count, 4); // image count

  const sizes = [16, 32, 48];

  // Directory entries
  for (let i = 0; i < count; i++) {
    const off = headerSize + i * dirEntrySize;
    const dim = sizes[i] <= 255 ? sizes[i] : 0;
    ico.writeUInt8(dim, off);
    ico.writeUInt8(dim, off + 1);
    ico.writeUInt8(0, off + 2);
    ico.writeUInt8(0, off + 3);
    ico.writeUInt16LE(1, off + 4);
    ico.writeUInt16LE(32, off + 6);
    ico.writeUInt32LE(entries[i].size, off + 8);
    ico.writeUInt32LE(entries[i].offset, off + 12);
  }

  // Image data
  for (let i = 0; i < count; i++) {
    pngBuffers[i].copy(ico, entries[i].offset);
  }

  return ico;
}

// ─── Main ────────────────────────────────────────────────────────
async function main() {
  const svgBuffer = Buffer.from(SVG);

  const [png16, png32, png48, png180, png192, png512] = await Promise.all([
    svgToPng(svgBuffer, 16),
    svgToPng(svgBuffer, 32),
    svgToPng(svgBuffer, 48),
    svgToPng(svgBuffer, 180),
    svgToPng(svgBuffer, 192),
    svgToPng(svgBuffer, 512),
  ]);

  // 1. favicon.ico (16, 32, 48)
  const icoBuffer = buildIco([png16, png32, png48]);
  fs.writeFileSync(path.join(APP_DIR, "favicon.ico"), icoBuffer);
  console.log("✓ src/app/favicon.ico");

  // 2. icon.svg
  fs.writeFileSync(path.join(APP_DIR, "icon.svg"), SVG);
  console.log("✓ src/app/icon.svg");

  // 3. icon.png (512×512)
  fs.writeFileSync(path.join(APP_DIR, "icon.png"), png512);
  console.log("✓ src/app/icon.png");

  // 4. apple-icon.png (180×180)
  fs.writeFileSync(path.join(APP_DIR, "apple-icon.png"), png180);
  console.log("✓ src/app/apple-icon.png");

  // 5. Manifest icons in /public
  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-192.png"), png192);
  console.log("✓ public/icon-192.png");

  fs.writeFileSync(path.join(PUBLIC_DIR, "icon-512.png"), png512);
  console.log("✓ public/icon-512.png");

  console.log("\nAll favicon files generated successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
