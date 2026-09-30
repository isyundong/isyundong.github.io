# ZHANG.stream

Yundong Zhang's personal site, built with [Astro](https://astro.build). It is a single English page.

```sh
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # output in dist/
```

- Site info and the project list: `src/data/site.ts`
- Shared design system stylesheet: `public/ds/zs.css`. Once deployed it is served at `https://zhang.stream/ds/zs.css`, and every `*.zhang.stream` site and ipscaner.com loads it.

Deploy target is Cloudflare Pages: build command `npm run build`, output directory `dist`.
