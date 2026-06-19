# A comic book-style business website built with Astro + React + Tailwind

![Website social card preview image](https://github.com/Promptly-Technologies-LLC/Promptly-Technologies-LLC.github.io/blob/main/public/images/card.jpg?raw=true)

The business website of Promptly Technologies, LLC is designed in the style of a comic book. In building this website, we greatly leveraged the incredible power of MidJourneyAI to develop beautiful, flashy graphics. We combined this with Astro's static site generation, React islands for interactive widgets, Typescript's strong typing, Tailwind's powerful styling, and Github Actions scripting to automatically build and deploy the site every time we push a new change. The result is a website that is easy to maintain and update, indexable by search engines, and that looks great on both desktop and mobile devices.

## Structure and customization

The site is built with [Astro](https://astro.build/) and uses file-based routing:

- `/` — Home (hero, contact, story, events, credits)
- `/store` — Zazzle product feed
- `/legal` — Privacy policy

Static comic-book components are `.astro` files. Interactive widgets (FullCalendar events, FormSpree contact form, ConvertKit subscribe form) are React islands hydrated on the client.

Metadata and content are controlled from JSON files in the `src/customizations` folder. You can add new social profiles, change hero text, and configure third-party form IDs in `siteproperties.json`.

To use the contact or subscribe forms, you will need [FormSpree](https://formspree.io/) and [ConvertKit](https://convertkit.com/?lmref=R3jWSQ) accounts. Sign up, create a form, and put your form URL or ID(s) in `src/customizations/siteproperties.json`.

## Development

```bash
bun install
bun dev
```

## Build

```bash
bun run build
```

The build fetches the latest Zazzle product feed, then generates static HTML into `dist/`.

## Contributing

If you find a bug or have a feature request, please open an issue on Github. If you would like to contribute code, please open a pull request. We welcome contributions!

- [ ] Add a Github Actions script to send email notifications to subscribers when new events are added to the calendar
