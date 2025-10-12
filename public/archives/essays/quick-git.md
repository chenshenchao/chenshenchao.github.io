# Git 速查

```bash
# 初始化，会生成 .get 目录
git init

# 查看用户名和邮件
git config user.name
git config user.email

# 修改用户名和邮件,加入 -g 可以全局设置。
git config user.name chenshenchao
git config user.email chenshenchao@outlook.com

# 把修改加入
git add .

# 取消 add 的操作
git reset HEAD
# 指定文件或目录
git reset HEAD ./.gitignore

# 提交
git commit -m "提交备注信息"

# 推送远程
# --force 强制
# --all 全部
git push origin --force --all
```

## 克隆（clone）

```bash
# 指定分支 -b branch_name
git clone -b branch_name git@github.com:path/to/r.git

# 指定深度 --depth 1
git clone -b branch_name --depth 1 git@github.com:path/to/r.git

# 递归初始化子模块
git clone --recurse-submodules git@github.com:path/to/r.git
```

## 分支（branch）

```bash
# 查看分支详情
git branch -avv

# 设置本地分支关联的远程分支
git branch -u remote_origin_name/remote_branch_name local_branch_name

# 设置本地分支关联的远程分支（同名）
git branch -u remote_origin_name branch_name
```

## 标签（tag）

```bash
# 查看所有标签
git tag
# 查看标签，带过滤条件
git tag -l "pattern"
# 查看标签，带排序。按版本排序
git tag --sort=version:refname

# 查看标签详情
git show <tag>
```

## 日志（log）

```bash
# 打印图 --graph
# 格式 --pretty https://git-scm.com/docs/pretty-formats
# %H commit hash 提交的散列
# %h abbreviated commit hash 提交的散列缩写
# %ad author date 提交的日期
# %s subject 提交的消息内容
# %an author 提交的作者
git log --pretty=format:"%h %ad | %s [%an]" --graph --date=short
```

## 差异（diff）

```bash
# 查看修改差异
git diff

# 查看修改差异（指定文件）
git diff path/to/file
```

## 删除（rm）

git rm 只删除当前提交内的文件和历史。要全部时期删除需要利用 git filter-branch

```bash
# 删除指定文件同时包括它的历史记录。
git rm path/to/file

# 只删除历史记录
git rm --cached path/to/file

# 删除不匹配（路径错了）而失败时不报错。多和批量操作连用防止报错导致接下来直接退出不执行后续。
git rm --ignore-unmatch path/to/file
```

## 垃圾回收（gc）

```bash
# --aggressive 更耗时，但是优化更好。
# --prune 修剪松散对象，可指定日期，=now 全部。
git gc --aggressive --prune=now
```

## 子树（subtree）

```bash
# 添加子树 --prefix 使用相对项目目录的路径，用来作为子树并入的目录
git subtree add --prefix=local_subtree_dir git@github.com:your/sub_project.git
```

## 子模块（submodule）
不推荐使用，但是不少旧项目，尤其 C/C++ 项目使用 submodule 来做依赖管理。

```bash
# 初始化子模块
git submodule init

# 更新子模块
git submodule update 

# 更新子模块（一步到位）
git submodule update --init --recursive
```

## 过滤分支（filter-branch）

实则是遍历分支并附带各种操作。

```bash
# 遍历分支执行 git rm -r --cached --ignore-unmatch ./dir 命令
# 所以要确保被删除的目录是整个都被删除的，不然会把整个目录的历史清掉。
# 也可以只指定单个文件，这个时候不需要 -r 
# --prune-empty
# --force 强制
# --tag-name-filter cat  执行 cat [tag-name] ，这样会打印各个 tag 的信息
# --index-filter '要执行的命令行'
# 注：Windows 下用双引号 "git rm ..."
git filter-branch --prune-empty --force --tag-name-filter cat --index-filter 'git rm -r --cached --ignore-unmatch ./dir' -- --all
```

## 钩子（Hook）

git 的钩子运行机制非常简单，就是在项目执行 git 命令的某个阶段执行钩子文件的脚本（sh 或 bash）。（可能也是因为这个原因 Windows 版的 git 必须用 Msys2 因为要执行 linux 的脚本 sh 或 bash）

路径在项目的 .git/hooks 里面

- post-update
- pre-commit  在提交前，这个一般可以写个脚本检查文件大小，防止提交大文件
- pre-push 在推（push）前，
- pre-receive 在拉（pull）后，

```bash
#!/bin/bash

# 本地 Hook，其实就是执行命令
chown -R www:www .

# Web Hook 非常简单，其实就是用 linux 的 wget 或者 curl 命令调用一下远程接口，通知远程程序拉代码。
wget --post-data 'user=git&password=PASSWORD&other=info' 'http://your.webhook.com'
curl -d 'user=git&password=PASSWORD&other=info' 'http://your.webhook.com'
```

## 大文件存储 LFS

```bash
# 安装
git lfs install

# LFS 加入监听指定后缀的文件
git lfs track "*.bin"

# LFS 去除监听后缀文件
git lfs untrack "*.png"
git add --renormalize .

# 查看 LFS 已跟踪文件的大小。
git lfs ls-files --size

# 查看本地 LFS 配置
git lfs env 
```

## 第三方插件

### git-filter-repo

```bash
# 安装
pip install git-filter-repo

# 清理 大于 100M 的文件。
git filter-repo --strip-blobs-bigger-than 100M

# 重新配置远程仓库
git remote add origin <your_repo_url>

# 推
git push -u origin main
```
