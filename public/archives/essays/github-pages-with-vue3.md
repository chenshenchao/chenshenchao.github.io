# 用 Vue 3 写 GitHub Pages

要写博客的话 GitHub Pages 是个不错的选择。但是 GitHub Pages 是静态的，并不能像常规网站那样由后端负责把数据存储到数据库。（虽然也可以自己跨域调接口，但是目前不考虑这种。）所以管理博文信息就都是通过文件的形式，我使用的是 Markdown 文件。
通过 Vue 执行编译可以很容易地得到 dist 目录下生成的静态站文件。但是 GitHub Pages 只能指定一个分支，目录只能 /（根目录）或者 /docs （文档目录）二选一。所以就用到了 git subtree 来指定一个目录导出 gh-pages 分支。

注：GitHub Pages 不支持 Git LFS 的文件，如果被 LFS 追踪就会导致该文件在 GitHub Pages 是 1kb 而显示不出内容。

```shell
# 编译 dist
npm run build

# 把 dist 已提交的内容单独推送到远程分支 origin/gh-pages
git subtree push --prefix dist origin gh-pages
```
