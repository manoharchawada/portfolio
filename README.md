# Manohar Chawada — Portfolio

A single-page portfolio built with plain HTML/CSS — no build step required.

## Structure

Everything lives in `index.html`. Sections: Hero → About (stats) → Experience → Selected Work (Veels, IQONS, Second Appraisal, Swingist) → Stack → Education & Awards → Contact.

All content is pulled directly from the resume — no placeholder text.

## Deploy to Vercel

1. Create a new GitHub repo (e.g. `portfolio`)
2. Push this file:
   ```bash
   git init
   git add index.html
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/manoharchawada/portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the repo, and deploy — no config needed since it's a static HTML file.

## Customizing

- **Colors**: edit the `:root` CSS variables at the top of `index.html` (`--red`, `--cyan`, `--bg`)
- **Project screenshots**: the Veels screenshots are hotlinked from the Google Play CDN. If you want to swap them, replace the `<img src="...">` URLs in the `#work` section.
- **IQONS link**: the `com.iqons` Play Store link in the resume returned a 404 at the time this was built — double check the package ID before linking out, or remove the link if the app was renamed/delisted.
