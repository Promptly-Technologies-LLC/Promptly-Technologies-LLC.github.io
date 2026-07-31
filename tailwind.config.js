/**
 * Colour channels — the single source of truth for colour on the site.
 * Triplets here become Tailwind utilities (`bg-caption`, `text-accent`,
 * `bg-ink/70`) and are republished as `--color-*-rgb` / `--color-*` custom
 * properties for hand-written CSS and inline SVG.
 *
 * Rule of thumb: if you are about to type a hex code anywhere else in this
 * repo, add it here instead and reference it by name.
 */
const channels = {
  /** Ink — panel rules, lettering, hard drop shadows. Everything is drawn in it. */
  ink: {
    DEFAULT: '17 17 17',
    soft: '75 85 99', // secondary copy, placeholders
    line: '214 209 196', // hairlines and input borders, tinted warm like newsprint
  },
  /** Newsprint — the page itself and the bands that break it up. */
  newsprint: {
    DEFAULT: '255 255 255',
    shade: '239 236 228', // alternating section ground
    deep: '207 202 187', // the shaded foot of the scalloped oval
  },
  /** Halftone — the two-colour dot screen behind the logotype. */
  halftone: {
    magenta: '255 0 255',
    red: '255 0 0',
  },
  /** Caption — narration-box fill. The colour the story is told in. */
  caption: {
    DEFAULT: '252 165 165',
  },
  /** Accent — the one hue that means "act on this". Buttons and inline CTAs. */
  accent: {
    DEFAULT: '37 99 235',
    dark: '30 64 175',
  },
  /** Alert — validation and error copy only. */
  alert: '220 38 38',
};

const withAlpha = (triplet) => `rgb(${triplet} / <alpha-value>)`;
const solid = (triplet) => `rgb(${triplet})`;

function toColors(node) {
  if (typeof node === 'string') return withAlpha(node);
  return Object.fromEntries(Object.entries(node).map(([key, value]) => [key, toColors(value)]));
}

/** Flatten nested channel groups into `--color-*` / `--color-*-rgb` custom properties. */
function cssVariablesFromChannels(node, path = []) {
  const vars = {};
  for (const [key, value] of Object.entries(node)) {
    const segment = key === 'DEFAULT' ? path : [...path, key];
    if (typeof value === 'string') {
      const name = segment.join('-');
      vars[`--color-${name}-rgb`] = value;
      vars[`--color-${name}`] = solid(value);
    } else {
      Object.assign(vars, cssVariablesFromChannels(value, segment));
    }
  }
  return vars;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: toColors(channels),
      fontFamily: {
        // `display` is Bangers (title, headings, narration, nav, buttons);
        // `script` is Allura (the hero tagline). Stacks are republished as
        // `--font-display` / `--font-script` in global.css.
        display: ['Bangers', 'cursive'],
        script: ['Allura', 'cursive'],
      },
      borderWidth: {
        panel: '3px',
      },
      boxShadow: {
        /** The hard, offset, un-blurred shadow that makes a rectangle read as a panel. */
        panel: `6px 6px 0 ${solid(channels.ink.DEFAULT)}`,
        pop: `4px 4px 0 ${solid(channels.ink.DEFAULT)}`,
      },
      maxWidth: {
        custom: '300px',
      },
    },
  },
  plugins: [
    function republishPalette({ addBase }) {
      addBase({
        ':root': cssVariablesFromChannels(channels),
      });
    },
  ],
};
