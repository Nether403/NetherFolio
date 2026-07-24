/**
 * Builds a stand-in cover mark GLB (extruded "MvD") for the dithered hero.
 * Replace public/models/cover-mark.glb with your own model when available.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";

// Minimal FileReader polyfill for three's GLTFExporter in Node.
if (typeof globalThis.FileReader === "undefined") {
  globalThis.FileReader = class FileReader {
    result = null;
    onloadend = null;
    onerror = null;
    readAsArrayBuffer(blob) {
      Promise.resolve(blob.arrayBuffer?.() ?? blob)
        .then((buf) => {
          this.result = buf;
          this.onloadend?.({ target: this });
        })
        .catch((err) => this.onerror?.(err));
    }
  };
}

if (typeof globalThis.Blob === "undefined") {
  const { Blob } = await import("node:buffer");
  globalThis.Blob = Blob;
}
const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../public/models/cover-mark.glb");

function letterM() {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.lineTo(0.18, 0);
  s.lineTo(0.18, 0.72);
  s.lineTo(0.42, 0.28);
  s.lineTo(0.66, 0.72);
  s.lineTo(0.66, 0);
  s.lineTo(0.84, 0);
  s.lineTo(0.84, 1);
  s.lineTo(0.58, 1);
  s.lineTo(0.42, 0.62);
  s.lineTo(0.26, 1);
  s.lineTo(0, 1);
  s.closePath();
  return s;
}

function letterV() {
  const s = new THREE.Shape();
  s.moveTo(0, 1);
  s.lineTo(0.2, 1);
  s.lineTo(0.38, 0.22);
  s.lineTo(0.56, 1);
  s.lineTo(0.76, 1);
  s.lineTo(0.45, 0);
  s.lineTo(0.31, 0);
  s.closePath();
  return s;
}

function letterD() {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.lineTo(0.42, 0);
  s.bezierCurveTo(0.78, 0, 0.95, 0.22, 0.95, 0.5);
  s.bezierCurveTo(0.95, 0.78, 0.78, 1, 0.42, 1);
  s.lineTo(0, 1);
  s.closePath();
  const hole = new THREE.Path();
  hole.moveTo(0.2, 0.18);
  hole.lineTo(0.4, 0.18);
  hole.bezierCurveTo(0.62, 0.18, 0.74, 0.3, 0.74, 0.5);
  hole.bezierCurveTo(0.74, 0.7, 0.62, 0.82, 0.4, 0.82);
  hole.lineTo(0.2, 0.82);
  hole.closePath();
  s.holes.push(hole);
  return s;
}

function meshFromShape(shape, x) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.03,
    bevelSegments: 2,
    curveSegments: 12,
  });
  geo.translate(x, -0.5, -0.14);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xe8f4f2,
    metalness: 0.15,
    roughness: 0.45,
  });
  return new THREE.Mesh(geo, mat);
}

const group = new THREE.Group();
group.name = "MvDCoverMark";
group.add(meshFromShape(letterM(), -1.35));
group.add(meshFromShape(letterV(), -0.35));
group.add(meshFromShape(letterD(), 0.55));

const exporter = new GLTFExporter();

const result = await new Promise((resolve, reject) => {
  exporter.parse(
    group,
    (glb) => resolve(glb),
    (err) => reject(err),
    { binary: true }
  );
});

writeFileSync(outPath, Buffer.from(result));
console.log(`Wrote ${outPath} (${Buffer.from(result).byteLength} bytes)`);
