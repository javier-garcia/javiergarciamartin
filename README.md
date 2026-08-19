# Javi Garcia — Portfolio

Portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS and Three.js. It is ready to publish to a Git repository and deploy on Vercel.

Application code lives under `src/`: routes in `src/app`, reusable UI in `src/components`, content in `src/data`, React behavior in `src/hooks`, and shared page structures in `src/templates`. Tailwind CSS 4 is loaded from `src/app/globals.css`.

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Push this directory to GitHub, GitLab or Bitbucket.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Keep the detected framework as **Next.js** and use the default build settings.
4. Deploy. The site does not currently require environment variables.

Vercel will run `npm install` and `npm run build` automatically.

### Canonical URL

SEO metadata defaults to `https://javigarcia.dev`. If the production domain is different, define the following environment variable in Vercel before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```
