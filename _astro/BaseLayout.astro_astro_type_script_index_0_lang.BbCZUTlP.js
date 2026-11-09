const g=`
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,m=`
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
`;function h(t){return`precision ${t} float;
${m}`}function d(t,o,e){const a=t.createShader(o);return a?(t.shaderSource(a,e),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.warn(t.getShaderInfoLog(a)),t.deleteShader(a),null)):null}function w(t){const o=document.createElement("canvas");o.width=t,o.height=t;const e=o.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0,premultipliedAlpha:!1});if(!e)return null;const a=d(e,e.VERTEX_SHADER,g),n=d(e,e.FRAGMENT_SHADER,h("highp"))??d(e,e.FRAGMENT_SHADER,h("mediump"));if(!a||!n)return e.getExtension("WEBGL_lose_context")?.loseContext(),null;const r=e.createProgram();if(!r)return null;if(e.attachShader(r,a),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))return console.warn(e.getProgramInfoLog(r)),e.getExtension("WEBGL_lose_context")?.loseContext(),null;e.useProgram(r);const c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const l=e.getAttribLocation(r,"aPos");e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);const s=e.getUniformLocation(r,"uResolution");return e.uniform2f(s,t,t),e.viewport(0,0,t,t),e.drawArrays(e.TRIANGLES,0,3),e.finish(),{canvas:o,gl:e}}function i(){document.querySelectorAll(".bg-newsprint-shade").forEach(t=>{if(!(t instanceof HTMLElement))return;const o=t.getBoundingClientRect(),e=Math.round(o.left+window.scrollX),a=Math.round(o.top+window.scrollY);t.style.backgroundPosition=`${String(-e)}px ${String(-a)}px`})}let p=!1;function x(){p||(p=!0,window.addEventListener("resize",i,{passive:!0}),window.addEventListener("load",i,{passive:!0}),document.fonts&&document.fonts.ready.then(i),typeof ResizeObserver<"u"&&new ResizeObserver(()=>{i()}).observe(document.body))}function b(t){const{gl:o,canvas:e}=t,{width:a,height:n}=e,r=new Uint8Array(a*n*4);o.readPixels(0,0,a,n,o.RGBA,o.UNSIGNED_BYTE,r),o.getExtension("WEBGL_lose_context")?.loseContext();const c=document.createElement("canvas");c.width=a,c.height=n;const l=c.getContext("2d");if(!l)return null;const s=l.createImageData(a,n),u=a*4;for(let f=0;f<n;f++){const v=f*u;s.data.set(r.subarray(v,v+u),(n-1-f)*u)}return l.putImageData(s,0,0),c}function y(t){const o=b(t);o&&o.toBlob(e=>{if(!e)return;const a=document.documentElement,n=a.dataset.paperTextureUrl;n&&URL.revokeObjectURL(n);const r=URL.createObjectURL(e);a.dataset.paperTextureUrl=r,a.style.setProperty("--paper-texture",`url("${r}")`),i()},"image/png")}function E(){window.matchMedia("(forced-colors: active)").matches||(x(),i(),window.requestIdleCallback(()=>{const t=w(512);t&&y(t)},{timeout:500}))}E();
