/**
 * Comic-stock ground for the page.
 *
 * One fragment shader draws a seamless tile — warm pulp, machine-direction
 * fibers, and a few flecks — and the tile is multiplied over the flat
 * newsprint tokens. Open paper stays near white in the tile, so the token
 * supplies the stock color and the shader only cuts tooth into it.
 *
 * The SVG turbulence in `global.css` paints immediately. This replaces it
 * when WebGL can run. Forced-colors keeps the flat token.
 */

const TILE_SIZE = 512;

const VERTEX_SOURCE = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAGMENT_BODY = `
uniform vec2 uResolution;

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p, vec2 cells) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash12(mod(i, cells));
  float b = hash12(mod(i + vec2(1.0, 0.0), cells));
  float c = hash12(mod(i + vec2(0.0, 1.0), cells));
  float d = hash12(mod(i + vec2(1.0, 1.0), cells));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float noise(vec2 uv, float cells) {
  return vnoise(uv * cells, vec2(cells));
}

float fbm(vec2 uv) {
  float v = 0.0;
  float a = 0.5;
  float sum = 0.0;
  float cells = 3.0;
  for (int i = 0; i < 5; i++) {
    v += a * noise(uv, cells);
    sum += a;
    cells *= 2.0;
    a *= 0.5;
  }
  return v / sum;
}

float ridged(vec2 uv, vec2 freq) {
  float warp = (noise(uv + vec2(0.17, 0.41), 4.0) - 0.5) * 2.4;
  vec2 p = vec2(uv.x * freq.x, uv.y * freq.y + warp);
  float n = vnoise(p, freq);
  return 1.0 - abs(n * 2.0 - 1.0);
}

float fiberLayer(vec2 uv, float cells, float len0, float len1, float wid0, float wid1, float wildAt) {
  vec2 p = uv * cells;
  vec2 cell = floor(p);
  float acc = 0.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 c = cell + vec2(float(i), float(j));
      vec2 w = mod(c, vec2(cells));
      for (int k = 0; k < 2; k++) {
        float fk = float(k);
        vec2 seed = w + vec2(fk * 17.0, fk * 29.0 + 3.0);
        vec2 origin = c + vec2(hash12(seed + 1.2), hash12(seed + 2.4));
        float along = (hash12(seed + 3.3) - 0.5) * 1.15;
        float around = hash12(seed + 4.4) * 6.2831853;
        float wild = step(wildAt, hash12(seed + 8.8));
        float ang = mix(along, around, wild);
        vec2 dir = vec2(cos(ang), sin(ang));
        float len = mix(len0, len1, hash12(seed + 5.5));
        vec2 ba = dir * len;
        vec2 diff = p - origin - ba * clamp(dot(p - origin, ba) / dot(ba, ba), 0.0, 1.0);
        float d = length(diff);
        float h = clamp(dot(p - origin, ba) / dot(ba, ba), 0.0, 1.0);
        float width = mix(wid0, wid1, hash12(seed + 6.6));
        float taper = smoothstep(0.0, 0.18, h) * smoothstep(1.0, 0.72, h);
        float core = smoothstep(width, width * 0.05, d) * taper;
        float ink = mix(0.45, 1.0, hash12(seed + 7.7));
        acc = max(acc, core * ink);
      }
    }
  }
  return acc;
}

float flecks(vec2 uv) {
  float cells = 34.0;
  vec2 p = uv * cells;
  vec2 cell = floor(p);
  float acc = 0.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 c = cell + vec2(float(i), float(j));
      vec2 w = mod(c, vec2(cells));
      float spawn = hash12(w + 19.0);
      if (spawn > 0.84) {
        vec2 center = c + vec2(hash12(w + 1.7), hash12(w + 4.1));
        vec2 delta = p - center;
        float ang = hash12(w + 6.0) * 6.2831853;
        float ca = cos(ang);
        float sa = sin(ang);
        vec2 rot = vec2(ca * delta.x - sa * delta.y, sa * delta.x + ca * delta.y);
        float big = step(0.97, spawn);
        float radius = mix(0.05, 0.16, hash12(w + 8.2)) * mix(1.0, 2.4, big);
        float squash = mix(0.45, 1.0, hash12(w + 9.3));
        float dd = length(rot / vec2(radius, radius * squash));
        float blob = smoothstep(1.0, 0.25, dd);
        acc = max(acc, blob * mix(0.55, 1.0, hash12(w + 2.2)));
      }
    }
  }
  return acc;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  float cloud = fbm(uv);
  float pulp = noise(uv + vec2(0.37, 0.11), 70.0);
  float fine = noise(uv + vec2(0.08, 0.62), 180.0);
  float along = smoothstep(0.42, 0.82, ridged(uv, vec2(5.0, 28.0)));
  float across = smoothstep(0.55, 0.9, ridged(uv + vec2(0.2, 0.13), vec2(22.0, 7.0)));
  float hairs = fiberLayer(uv, 14.0, 0.28, 0.62, 0.03, 0.07, 0.28);
  float fuzz = fiberLayer(uv + vec2(0.31, 0.17), 24.0, 0.16, 0.42, 0.04, 0.09, 0.0);
  float speck = flecks(uv);
  float grit = hash12(gl_FragCoord.xy + vec2(0.5));

  // Open stock is warm; everything else only darkens, so multiply keeps
  // the lightest paper at this cream and cuts pulp, fiber, and flecks into it.
  vec3 grain = vec3(0.988, 0.958, 0.895);
  grain -= vec3(0.05, 0.046, 0.062) * cloud;
  grain -= vec3(0.022, 0.02, 0.026) * pulp;
  grain -= vec3(0.02, 0.018, 0.022) * fine;
  grain -= vec3(0.03, 0.026, 0.018) * along;
  grain -= vec3(0.018, 0.016, 0.012) * across;
  grain -= vec3(0.12, 0.1, 0.06) * hairs;
  grain -= vec3(0.07, 0.058, 0.036) * fuzz;
  grain -= vec3(0.3, 0.24, 0.14) * speck;
  grain -= vec3(0.012) * grit;

  gl_FragColor = vec4(clamp(grain, 0.0, 1.0), 1.0);
}
`;

function fragmentSource(precision: 'highp' | 'mediump'): string {
  return `precision ${precision} float;\n${FRAGMENT_BODY}`;
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

interface PaperGl {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
}

function renderTile(size: number): PaperGl | null {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: true,
    premultipliedAlpha: false,
  });
  if (!gl) return null;

  const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SOURCE);
  const fragment =
    compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource('highp')) ??
    compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource('mediump'));
  if (!vertex || !fragment) {
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return null;
  }

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return null;
  }

  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'aPos');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const resolution = gl.getUniformLocation(program, 'uResolution');
  gl.uniform2f(resolution, size, size);
  gl.viewport(0, 0, size, size);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  gl.finish();

  return { canvas, gl };
}

function alignPaperStock(): void {
  document.querySelectorAll('.bg-newsprint-shade').forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    const rect = node.getBoundingClientRect();
    const x = Math.round(rect.left + window.scrollX);
    const y = Math.round(rect.top + window.scrollY);
    node.style.backgroundPosition = `${String(-x)}px ${String(-y)}px`;
  });
}

let watching = false;

function watchAlignment(): void {
  if (watching) return;
  watching = true;
  window.addEventListener('resize', alignPaperStock, { passive: true });
  window.addEventListener('load', alignPaperStock, { passive: true });
  if (document.fonts) {
    void document.fonts.ready.then(alignPaperStock);
  }
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(() => {
      alignPaperStock();
    });
    observer.observe(document.body);
  }
}

function copyTile(paper: PaperGl): HTMLCanvasElement | null {
  const { gl, canvas } = paper;
  const { width, height } = canvas;
  const pixels = new Uint8Array(width * height * 4);
  gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  gl.getExtension('WEBGL_lose_context')?.loseContext();

  const copy = document.createElement('canvas');
  copy.width = width;
  copy.height = height;
  const ctx = copy.getContext('2d');
  if (!ctx) return null;

  const image = ctx.createImageData(width, height);
  const row = width * 4;
  for (let y = 0; y < height; y++) {
    const src = y * row;
    image.data.set(pixels.subarray(src, src + row), (height - 1 - y) * row);
  }
  ctx.putImageData(image, 0, 0);
  return copy;
}

function publishTile(paper: PaperGl): void {
  const copy = copyTile(paper);
  if (!copy) return;
  copy.toBlob((blob) => {
    if (!blob) return;
    const root = document.documentElement;
    const previous = root.dataset.paperTextureUrl;
    if (previous) URL.revokeObjectURL(previous);
    const url = URL.createObjectURL(blob);
    root.dataset.paperTextureUrl = url;
    root.style.setProperty('--paper-texture', `url("${url}")`);
    alignPaperStock();
  }, 'image/png');
}

/** Swap the CSS paper fallback for a shader-drawn tile. */
export function applyPaperTexture(): void {
  if (window.matchMedia('(forced-colors: active)').matches) return;

  watchAlignment();
  alignPaperStock();

  window.requestIdleCallback(() => {
    const paper = renderTile(TILE_SIZE);
    if (paper) publishTile(paper);
  }, { timeout: 500 });
}
