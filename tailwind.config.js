/** @type {import('tailwindcss').Config} */

// The palette and type stacks are declared as custom properties in
// src/styles/global.css so hand-written CSS and inline SVG can reach them too.
// This file only maps those properties onto Tailwind's theme, so a value is
// defined in exactly one place. Colors resolve through the `-rgb` channel
// triplets, which is what keeps opacity modifiers (e.g. `bg-ink/60`) working.
const withAlpha = (channels) => `rgb(var(${channels}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Line work and body text.
        ink: withAlpha('--ink-rgb'),
        'ink-muted': withAlpha('--ink-muted-rgb'),
        // Page stock.
        newsprint: withAlpha('--newsprint-rgb'),
        'newsprint-shade': withAlpha('--newsprint-shade-rgb'),
        // Process colors, used by the halftone title fill.
        'halftone-magenta': withAlpha('--halftone-magenta-rgb'),
        'halftone-red': withAlpha('--halftone-red-rgb'),
        // Narration boxes.
        'caption-pink': withAlpha('--caption-pink-rgb'),
        // The one accent: buttons and in-copy links.
        accent: withAlpha('--accent-rgb'),
        'accent-dark': withAlpha('--accent-dark-rgb'),
        // Form validation copy.
        alert: withAlpha('--alert-rgb'),
      },
      fontFamily: {
        // `display` is Bangers (title, headings, narration), `script` is Allura
        // (the hero tagline), `sans` is body copy and UI. The stacks themselves
        // live in global.css alongside the palette.
        display: 'var(--font-display)',
        script: 'var(--font-script)',
        sans: 'var(--font-sans)',
      },
      maxWidth: {
        'custom': '300px',
      }
    }
  }
}
