# A comic book-style business website built with React + Typescript + Tailwind

![Website social card preview image](https://github.com/Promptly-Technologies-LLC/Promptly-Technologies-LLC.github.io/blob/main/public/images/card.jpg?raw=true)

The business website of Promptly Technologies, LLC is designed in the style of a comic book. In building this website, we greatly leveraged the incredible power of MidJourneyAI to develop beautiful, flashy graphics. We combined this with Typescript's strong typing, React's intuitive modularity, Tailwind's powerful styling, Vite's easy build system, and Github Actions scripting to automatically build and deploy the site every time we push a new change. The result is a website that is easy to maintain and update, and that looks great on both desktop and mobile devices.

## Structure and customization

The entry points of the site, of course, are `index.html`, `main.tsx`, and `App.tsx`, as is traditional in React + Typescript architecture.

The site consists of three pages, `Home`, `Legal`, and `Store`. The `Home` page hosts the core of the site, `Legal` hosts the terms and conditions and privacy policy, and `Store` hosts products syndicated from Zazzle via an RSS feed which we scrape using a Github Actions script.

The `Home` page consists of a `Hero` section (the "cover" of our comic book), a `ContactForm` section powered by FormSpree, a `Story` section (the comic strips), an `Events` section with a subscription form powered by ConvertKit, and a `Credits` section (really our "Team" section but presented in the style of comic book credits).

Some of the metadata and content of the site is controlled from JSON files in the `src/customizations` folder. You can add new social profiles here, and also change the text that appears in the hero section.

To use the `ContactForm` or `SubscribeForm` components, you will need [FormSpree](https://formspree.io/) and [ConvertKit](https://convertkit.com/?lmref=R3jWSQ) accounts, respectively. There is also a `Bookings` component, not currently implemented, which is powered by [Calendly](https://calendly.com/). Sign up, create a form, and put your form URL or ID(s) in `src/customizations/siteproperties.json`.

## Contributing

If you find a bug or have a feature request, please open an issue on Github. If you would like to contribute code, please open a pull request. We welcome contributions!

- [ ] Add a Github Actions script to send email notifications to subscribers when new events are added to the calendar