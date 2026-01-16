# Git 速查

```bash
# 初始化，会生成 .get 目录
git init

# 把修改加入
git add .

# 取消 add 的操作
git reset HEAD
# 指定文件或目录
git reset HEAD ./.gitignore
# 取消最近一个 commit 的操作
git reset --mixed HEAD~1

# 提交
git commit -m "提交备注信息"

# 推送远程
# --force 强制
# --all 全部
git push origin --force --all
```

## 配置（config）

配置文件会修改项目的 .git/config 文件，或者全局的 ~/.gitconfig 文件。

```bash
# 查看用户名和邮件
git config user.name
git config user.email

# 修改用户名和邮件,加入 -g 可以全局设置。
git config user.name chenshenchao
git config user.email chenshenchao@outlook.com

# 关闭权限修改的检测
git config --global core.filemode false

# 列举
git config --global --list

# 全局设置
git config --global http.proxy http://127.0.0.1:10808

# 取消代理
git config --global --unset http.proxy

#只对 github.com 使用代理
git config --global http.https://github.com.proxy socks5://127.0.0.1:10808

#取消对 github.com 使用代理
git config --global --unset http.https://github.com.proxy

# 清理所有 安全目录
git config --global --unset-all safe.directory 

# 放开安全目录
git config --global safe.directory '*'
# 放行所有，相当于不管这个漏洞了。
git config --global --add safe.directory '*'
git config --global --unset-all safe.directory
```

.git/config 或者 ~/.gitconfig 文件的配置：

```ini
# 使用 socks5 作为代理。
[core]
	sshCommand = "ssh -o ProxyCommand='connect -S 127.0.0.1:10808 %h %p'"
[http]
	proxy = socks5://127.0.0.1:10808
[https]
	proxy = socks5://127.0.0.1:10808
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

## 暂存（stash）

```bash
# 查看暂存列表
git stash list

# 把 git add 保存的暂存起来，内容在当前分支撤回。
git stash

# 添加备注信息
git stash -m "your message content."

# 把暂存的修改放出，最近一条。
git stash pop

# 指定索引弹出，可以 git stash list 看到索引
git stash pop 1

# 查看改动，最近一条
git stash show 

# 查看改动，指定索引
git stash show 1

# 应用，类似pop 但是不删除
git stash apply

# 指定索引
git stash apply 1

# 删除
git stash drop

# 删除指定
git stash drop 1

# 清除所有暂存
git stash clear
```

## 分支（branch）

```bash
# 查看分支详情
git branch -avv

# 删除分支
git branch -d <branch_name>

# 强制删除分支
git branch -D <branch_name>

# 删除远程分支
git push <remote> --delete <name>

# 分支改名
git branch -m <old_name> <new_name>

# 设置本地分支关联的远程分支，一般要先 git fetch 把新的仓库拉下来。
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

# 查看远程分支 origin 的 tag
git ls-remote --tags origin

# 查看标签详情
git show <tag>

# 新建 tag
git tag <newtag>
# 新建 tag 注解
git tag -a newtag -m "message"

# 删除本地标签
git tag -d <name>

# 删除远程标签
git push <remote> :refs/tags/<name>
```

## 日志（log）

```bash
# 最后一条记录的 散列（缩略）
git log --reverse --format=%h -n 1

# 最后一条记录的 散列（全）
git log --reverse --format=%H -n 1

# 打印 a.txt 的提交记录，每一条都只显示 hash 和 message 内容。
git log --oneline -- /d/a.txt

# 打印 a.txt 的提交记录，如果 a.txt 改名过，那么改名前的记录也会打印。
git log --follow -- /d/a.txt

# 打印具体提交的内容
git show <hash>

# 打印图 --graph
# 格式 --pretty https://git-scm.com/docs/pretty-formats
# %H commit hash 提交的散列
# %h abbreviated commit hash 提交的散列缩写
# %ad author date 提交的日期
# %s subject 提交的消息内容
# %an author 提交的作者
git log --pretty=format:"%h %ad | %s [%an]" --graph --date=short

# 指定时间范围
# --since <time> 开始
# --until <time> 结束
# --stat 详细信息
# --graph 显示分支图
git log --since="2022-07-14 00:00:00" --until="2022-07-15 23:59:59" --stat

# 查找有删除信息的日志，并显示具体的日志信息。
git log --diff-filter=D --summary

# 打印每个提交的提交人
git log --format='%aN'

# 打印指定提交人的统计信息
git log --author="username" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -

# 打印统计每个人的提交量
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```

## 拉取（fetch）

```bash
# 清理已经删除的远程分支
git fetch --prune
```

## 合并（merge）

```bash
# --no--squash 合并不压扁记录。
git merge otherorigin/otherbranch --no--squash

# --squash 压扁记录，很危险，记录被合并成一条新的。
git merge otherorigin/otherbranch --squash
```

### 不同仓库合并（不推荐，会丢失历史，而且还很麻烦）

注：此种方式合并后 two 参库的历史会丢失，只剩下最后一次的提交历史。

```bash
# 需要有仓库 your_one 在本地的项目
git clone git@github.com:you/your_one.git

# 到 your_one 目录下来做合并操作
cd your_one

# 把 your_two 加入到 your_one 的 remote 里面
git remote add two git@github.com:you/your_two.git

# 拉取 your_two 的代码
git fetch two

# 检出一条分支，用来合并
git checkout -b twob two/main

# 切回主分支
git checkout main

# 使用本地分支合并
git merge twob --allow-unrelated-histories

# 合并代码（合并前最好确保没有文件名相同） 使用远程分支
# --allow-unrelated-histories 因为两份代码历史不相关，所以加上这个允许合并。
git merge two/master --allow-unrelated-histories
```

## 差异（diff）

```bash
# 查看修改差异
git diff

# 查看修改差异（指定文件）
git diff path/to/file
```

## 清理（clean）

```bash
# 清理新加文件（未跟踪）
# -f 文件
# -d 目录
# -n 列出文件预览
# -x 连同 .gitignore 忽略的文件也清理。
git clean -nfd

# -x 在线上比较危险，慎用。
# 因为线上很多配置文件都是被忽略版本管理的，很容易误删。
git clean -xnfd
```

## 迁移（mv）

```bash
# 移动目录，这样的好处是让历史不会断掉。
git mv /path/to/olddir  /path/to/newdir
```

## 删除（rm）

git rm 只删除当前提交内的文件和历史。要全部时期删除需要利用 git filter-branch

```bash
# 删除指定文件同时包括它的历史记录。
git rm path/to/file

# 只删除历史记录
git rm --cached path/to/file

# 删除指定路径目录记录
git rm -r --cached /dir/path

# 删除不匹配（路径错了）而失败时不报错。多和批量操作连用防止报错导致接下来直接退出不执行后续。
git rm --ignore-unmatch path/to/file
```

## 检出（checkout）

```bash
# 撤销修改，还没有 git add 。
git checkout /dir/path

# 撤销修改指定文件。
git checkout -- /file/path

# 检出指定文件内容到指定提交
git checkout [commitid] -- /file/path
```

## （restore）

```bash
# 去掉 git add 添加的记录。
# 只对 git add 但是没有 git commit 的记录有效。
git restore --staged /file_or_dir/path

# 没有被 git add 的文件会回退修改的内容。
# 但是仅限文件修改，算是弱化版的 git checkout .
# 只对没有 git add 的文件有效。
git restore /file_or_dir/path
```

## （reset）

重置分支，从 HEAD 往前的提交。

```bash
# 撤销已加入 HEAD 的内容。
git reset HEAD

# 撤销最近1个提交历史，修改内容保留。
git reset --soft HEAD~1

# 撤销最近2个提交历史，修改内容删除。
git reset --hard HEAD~2

# 指定版本切换当前的记录（此时 HEAD 变成指定的记录），配合 git checkout -- /path/to/file 可以切出指定版本的文件
git reset [commitid] [/path/to/file]
```

```bash
# 强制转到指定分支
# fetch 全部分支  硬 reset 到分支 pull 拉去。 
# 此方法无法在 2个分支有冲突的时候直接用后者直接覆盖。
git fetch --all
git reset --hard origin/yourbranch
git pull
```

## （rebase）

## 垃圾回收（gc）

```bash
# --aggressive 更耗时，但是优化更好。
# --prune 修剪松散对象，可指定日期，=now 全部。
git gc --aggressive --prune=now
```

## 远程（remote）

```bash
# 查看远程仓库
git remote

# 查看远程仓库详细
git remote -v

# 添加远程仓库
git remote add <remote_name> <remote_url>
git remote add origin git@github.com:chenshenchao/project.git

# 删除远程仓库
git remote rm <remote_name>

# 修改远程仓库 url
git remote set-url <remote_name> <remote_url>

# 修改远程仓库名字
git remote rename <remote_old> <remote_new>

# 拉取远程分支到本地分支
git pull <remote> <remote_name>:<local_name>

# 推送本地分支到远程分支
git push <remote> <local_name>:<remote_name>
```

## 子树（subtree）

会直接把目标仓库的历史合并进当前项目。

```bash
# 添加子树 --prefix 使用相对项目目录的路径必填，用来作为子树并入的目录，main 是分支必填
git subtree add --prefix=local_subtree_dir git@github.com:your/sub_project.git main

# 更新子树
git subtree pull --prefix=local_subtree_dir git@github.com:your/sub_project.git main
# --squash 会压缩成历史提交成一个提交，所以不能保留原历史。
git subtree pull --prefix=local_subtree_dir git@github.com:your/sub_project.git main --squash
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

# 清除掉已加载的子模块，使得子模块目录为 init update 前的空目录。
git submodule deinit --all

# 移除子模块
# 删除后 .gitmodules 里面还是有记录，要手动删除。
git rm --cached path/to/submodule

# 迁移子模块目录
# git 1.9.3 或 2.18 版本开始支持用这个命令迁移子模块
# 直接操作前最好用 git submodule deinit --all 清理，不然一堆文件记录。
# 如果很多的迁移引起的记录，git checkout . 去掉。
git mv /path/to/olddir  /path/to/newdir

# 列举子模块
git submodule

# 添加子模块
git submodule add <url> <name>

# 指定分支
git submodule add -b <branch> <url> <name>

# 指定深度
git submodule add -b <branch> --depth 1 <url> <name>
```

## 过滤分支（filter-branch）

实则是遍历分支并附带各种操作。
注：这个命令会导致 hash 不一致，git 和区块链很像，不能篡改历史，会导致仓库变成两个仓库而不能合并。

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

```bash
# 删除指定文件的所有记录。 path/to/your.tar
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch path/to/your.tar" --prune-empty --tag-name-filter cat -- --all

# 修改提交者名 yourname
git filter-branch -f --env-filter "GIT_AUTHOR_NAME=yourname" -- --all

# 修改提交者邮箱 your@email.com
git filter-branch -f --env-filter "GIT_AUTHOR_EMAIL=your@email.com" -- --all
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

## 常见问题

### Windows 给 git 配置代理

通过以下批处理脚本，给 git 配置的代理可以覆盖 HTTP(S) 和 SSH。

```bat
@echo off

@rem git http.proxy
set vars=
for /f "tokens=*" %%i in ('git config --global http.proxy') do (
    set vars=%%i
)

if "%vars%" == "" (
    git config --global http.proxy socks5://127.0.0.1:10808
    echo "set http.proxy"
) else (
    git config --global --unset http.proxy
    echo "unset http.proxy=%vars%"
)

@rem git https.proxy
set vars=
for /f "tokens=*" %%i in ('git config --global https.proxy') do (
    set vars=%%i
)

if "%vars%" == "" (
    git config --global https.proxy socks5://127.0.0.1:10808
    echo "set https.proxy"
) else (
    git config --global --unset https.proxy
    echo "unset https.proxy=%vars%"
)

@rem git core.sshCommand
set vars=
for /f "tokens=*" %%i in ('git config --global core.sshCommand') do (
    set vars=%%i
)

if "%vars%" == "" (
    git config --global core.sshCommand "ssh -o ServerAliveInterval=60 -o ProxyCommand='connect -S 127.0.0.1:10808 %%h %%p'"
    echo "set core.sshCommand"
) else (
    git config --global --unset core.sshCommand
    echo "unset core.sshCommand=%vars%"
)

pause
```

### 远程分支有误

```
error: update_ref failed for ref 'refs/remotes/origin/main': cannot lock ref 'refs/remotes/origin/main': unable to resolve reference 'refs/remotes/origin/main': reference broken
```

删掉 .git/refs/remotes/origin

```bash
# 再次拉取
git fetch origin
```

### cannot lock ref ORIG_HEAD

```
fatal: update_ref failed for ref 'ORIG_HEAD': cannot lock ref 'ORIG_HEAD': unable to resolve reference 'ORIG_HEAD': reference broken
```
.git/ORIG_HEAD 删掉。
