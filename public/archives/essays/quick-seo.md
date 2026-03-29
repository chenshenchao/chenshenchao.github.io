# [草稿]SEO 速查

- [百度指数](https://index.baidu.com/v2/index.html#/)

## robots.txt

- User-agent：匹配爬虫规则（* 全部；Baiduspider：百度爬虫）
- Allow: 允许（大小写敏感）
- Disallow: 不允许（大小写敏感，* 匹配任意字符，$ 匹配结尾）
- Sitemap：专门给爬虫做的导航页。（大小写敏感）

```txt
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://你的域名.com/sitemap.xml
```

### sitemap.xml

最多 50,000 条 URL，未压缩文件大小 ≤ 50MB。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://xxx.com/</loc> <!-- 完整URL -->
    <lastmod>2026-03-29</lastmod> <!-- 最后更新日期 -->
    <changefreq>daily</changefreq> <!-- 更新频率：always/hourly/daily/weekly/monthly/yearly/never -->
    <priority>1.0</priority> <!-- 优先级：0.0-1.0，首页1.0，分类0.8，产品0.6 -->
  </url>
  <url>
    <loc>https://xxx.com/stem-toys-wholesale/</loc>
    <lastmod>2026-03-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```


### sitemapindex.xml

```txt
Sitemap: https://域名.com/sitemapindex.xml
```

可拆分子导航如 sitemap-products.xml、sitemap-categories.xml 等。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://你的域名.com/sitemap-products.xml</loc>
    <lastmod>2026-03-29</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://你的域名.com/sitemap-categories.xml</loc>
    <lastmod>2026-03-29</lastmod>
  </sitemap>
</sitemapindex>
```

## URL

- 大部分爬虫区分链接的标识只到 path，query_string 和 hash 不用作区分。

## HTML

```html
<html>
  <head>
    <title>①页面标题</title>
    <meta name="description" content="②描述"/>
    <link rel="canonical" href="https://你的网址⑩相似形式内容主体链接">
  </head>
  <body>
    <h1>③内容标题 h1 - h6</h1>
    <h2>...</h2>
    <a>④链接</a>
    <img alt="⑤图片alt"/>
    <strong><b>⑥强调</b></strong>
    <p>⑦段落</p>
    <ul><li>⑧列表</li></ul>
    <ol><li>⑧列表</li></ol>
    <table>...⑨表格</table>
  </body>
</html>
