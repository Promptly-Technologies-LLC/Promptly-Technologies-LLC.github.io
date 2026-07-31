/**
 * The palette. This is the single source of truth for colour on the site:
 * this file turns it into utilities (`bg-caption`, `text-accent`,
 * `border-ink`), and `src/styles/global.css` republishes it as custom
 * properties (`--color-ink`, …) for hand-written CSS and inline SVG.
 *
 * Rule of thumb: if you are about to type a hex code anywhere else in this
 * repo, add it here instead and reference it by name.
 */
const palette = {
  /** Ink — panel rules, lettering, hard drop shadows. Everything is drawn in it. */
  ink: {
    DEFAULT: '#111111',
    soft: '#4b5563', // secondary copy, placeholders
    line: '#d6d1c4', // hairlines and input borders, tinted warm like newsprint
  },
  /** Newsprint — the page itself and the bands that break it up. */
  newsprint: {
    DEFAULT: '#ffffff',
    shade: '#efece4', // alternating section ground
    deep: '#cfcabb', // the shaded foot of the scalloped oval
  },
  /** Halftone — the two-colour dot screen behind the logotype. */
  halftone: {
    magenta: '#ff00ff',
    red: '#ff0000',
  },
  /** Caption — narration-box fill. The colour the story is told in. */
  caption: {
    DEFAULT: '#fca5a5',
    edge: '#f87171',
  },
  /** Accent — the one hue that means "act on this". Buttons and inline CTAs. */
  accent: {
    DEFAULT: '#2563eb',
    dark: '#1e40af',
  },
  /** Alert — validation and error copy only. */
  alert: '#dc2626',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        bangers: ['Bangers', 'cursive'],
        euphoria: ['Allura', 'cursive'],
      },
      borderWidth: {
        panel: '3px',
      },
      boxShadow: {
        /** The hard, offset, un-blurred shadow that makes a rectangle read as a panel. */
        panel: `6px 6px 0 ${palette.ink.DEFAULT}`,
        pop: `4px 4px 0 ${palette.ink.DEFAULT}`,
      },
      maxWidth: {
        custom: '300px',
      },
    },
  },
};
