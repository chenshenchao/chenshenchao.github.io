# 用 Vue 3 写 GitHub Pages

```shell
# 编译 dist
npm run build

# 把 dist 已提交的内容单独推送到远程分支 origin/gh-pages
git subtree push --prefix dist origin gh-pages
```