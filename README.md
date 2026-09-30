# ZHANG.stream

张云东的个人网站，基于 [Astro](https://astro.build)。

```sh
npm install
npm run dev      # 本地开发 http://localhost:4321
npm run build    # 输出到 dist/
```

- 文章：`src/content/posts/*.md`
- 项目、相册、站点信息：`src/data/site.ts`
- 共享设计规范样式：`public/ds/zs.css`，部署后地址是 `https://zhang.stream/ds/zs.css`，所有 `*.zhang.stream` 子站都引用这一份。

部署目标是 Cloudflare Pages：构建命令 `npm run build`，输出目录 `dist`。
