# An easy-to-customize business website template in React + Typescript + Tailwind

This business website template — created by Promptly Technologies, LLC for our own use in-house — is designed for dead-easy customization and free hosting on Github Pages. It is built with Typescript, React, and TailwindCSS, and it uses Github Actions in combination with some custom Node.js scripting to automatically build and deploy the site every time you push a new change.

To get started with the template, you can use the button on Github to create a new repo from this template. You will need to name your new repo `{YOUR-GITHUB-USERNAME}.github.io`, replacing the curly braces with your actual Github username. Then, follow the instructions below to customize the site.

## Customizing the site

Most customization is done from the `customizations` folder. This folder contains JSON files that define the content of the site. You can edit these files directly on Github, or you can clone the repo to your local machine and edit them there. (If you edit them locally, you will need to push your changes to Github for them to take effect.) Before the automatic build process will work correctly, you will need to change the "url" field in `siteproperties.json` to `https://{YOUR-GITHUB-USERNAME}.github.io`.

You will also want to replace the images in the `public` folder and provide the new file paths for your images in the `logos.json`, `siteproperties.json`, and `team.json` files in the `customizations` folder.

To change the color scheme of the site, you can define your new color scheme in `tailwind.config.js` by replacing the hex values assigned to the various colors. You can also change shadow styling in this file.

## Structure of the code

Of course, if you know what you're doing, you can edit the code itself. The `index.html` file in the root directory is the entry point for the site. The `src` folder contains `main.tsx` and `App.tsx` files that define the structure of the site. Each "route" in `App.tsx` corresponds to a different "page" of the site. The pages are defined by files in the `pages` folder, and each page uses components defined in the `components` folder. The `types` folder contains the Typescript type definitions used throughout the site. 

The automated build process is controlled by `package.json`, `setmetadata.js`, and `.github/workflows/deploy.yml`. The process triggers on every push to the `main` branch of the remote repo, and it automatically builds and deploys the site to the `gh-pages` branch.

## Using a custom domain

If you want to use a custom domain instead of the default 'https://{YOUR-GITHUB-USERNAME}.github.io', it's a bit complicated. Here's the rundown on what you need to do:

1. Register a domain name with a domain manager like Godaddy or Domain.com. If you already have a domain you've been using for another website, restore the default DNS settings.
2. Add the domain under your **user** "Settings > Pages" on Github. (Not to be confused with your **repo** "Settings > Pages"!)
3. Follow Github's instructions to verify your domain. This will involve going back to your domain manager and creating a DNS record. Here's how I did that on the domain management service I used, Domain.com:
   - Click to "Manage" the domain.
   - Go to "Advanced > DNS & Nameservers" on the menu bar.
   - Go to "DNS Records" tab.
   - Click "Add DNS Record".
   - Set "Type" to "TXT", "Time to Live" to half an hour, and "Name" and "Content" to the values provided by Github.
   - Click "Add DNS".
   - Wait 15–30 minutes for the DNS changes to propagate, then go back to Github "Settings > Pages" and click the button to finish verification.
4. As long as we're here, we'll also edit the DNS records to point them to Github's servers:
   - Delete all existing "CNAME" records and any "A" records named "@". (You should leave all other "A" records alone. Only delete the ones named "@".)
   - Create four new records of type "A", named "@". Each record's value/content should be one of the four Github Pages IP addresses: "185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153". Set "Time to Live" to half an hour. You should have an "A" record for each IP address.
   - Create one record of type "CNAME", named "www", with your custom domain (e.g., *example.com*, with no "http://" prefix) as its value/content. Set "Time to Live" to half an hour.
5. In your 'https://{YOUR-GITHUB-USERNAME}.github.io' repo on Github, you will now go to the **repo** "Settings > Pages" (not to be confused with the **user** settings you changed in a previous step!) and add your domain.
6. At first, you'll probably see a message that verification of your domain failed. You'll need to wait at least a couple of ours for your DNS changes to propagate, maybe even a full day. Then refresh this page, and you should see "DNS check successful" under the custom domain field.
7. Click the check box to "Enforce HTTPS". (If the DNS check passed but the box isn't clickable,  Github may not have issued your site an SSL certificate yet. Take and break for a few hours and then come back and try again. If it still doesn't work, try removing and re-adding your domain.)

Additionally, to use a custom domain, you will need to update the "url" field in `siteproperties.json` to your prefixed custom domain (e.g., "https://example.com"). (The automatic build process will propagate this to other files as needed, so you shouldn't need to manually change this anywhere else.)

## Contributing

If you find a bug or have a feature request, please open an issue on Github. If you would like to contribute code, please open a pull request. We welcome contributions!

The following features are planned for future releases:

- Image gallery component
- Improve site design, 'cause right now it kinda sucks
- Finish adding support for a Dark Mode color scheme, maybe improve theming system in general