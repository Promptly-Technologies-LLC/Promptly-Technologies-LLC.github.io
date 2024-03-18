# A comic book-style business website built with React + Typescript + Tailwind

![Website social card preview image](https://github.com/Promptly-Technologies-LLC/Promptly-Technologies-LLC.github.io/blob/main/public/images/card.jpg?raw=true)

The business website of Promptly Technologies, LLC is designed in the style of a comic book. In building this website, we greatly leveraged the incredible power of MidJourneyAI to develop beautiful, flashy graphics. We combined this with Typescript's strong typing, React's intuitive modularity, Tailwind's powerful styling, Vite's easy build system, and Github Actions scripting to automatically build and deploy the site every time we push a new change. The result is a website that is easy to maintain and update, and that looks great on both desktop and mobile devices.

## Structure and customization

The entry points of the site, of course, are `index.html`, `main.tsx`, and `App.tsx`, as is traditional in React + Typescript architecture. The site consists of two pages, `Home` and `Legal`. The former hosts the core of the site, while the latter hosts the privacy policy. The Home consists of a `Hero` section (the "cover" of our comic book), a `Story` section (the comic strips), a `Bookings` section for users to book consultations (roughly analogous to the subscription page in an old-timey comic book), and `Credits` section (really our "Team" section but presented in the style of comic book credits).

Some of the metadata and content of the site is controlled from JSON files in the `src/customizations` folder. You can add new social profiles here, and also change the text that appears in the hero section.

The `Booking` section is a Calendly iframe displayed from offsite and must be controlled from the Calendly dashboard.

## Contributing

If you find a bug or have a feature request, please open an issue on Github. If you would like to contribute code, please open a pull request. We welcome contributions!
