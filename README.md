# Javi Garcia — Portfolio

Portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS and Three.js. It is ready to publish to a Git repository and deploy on Vercel.

The current visual system lives in `app/globals.css`. Tailwind CSS 4 is loaded in that same file and can be used alongside the existing classes in any component.

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
