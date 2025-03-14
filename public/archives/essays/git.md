# Git 使用手册

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

## 差异（diff）

```bash
# 查看修改差异
git diff

# 查看修改差异（指定文件）
git diff path/to/file
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