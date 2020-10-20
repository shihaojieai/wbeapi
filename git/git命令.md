# 工作流程

工作区 -> 暂存区 -> 仓库（本地仓库+远程仓库）



## 1，查看所有全局配置项 git配置

git config -- global -- list

2.查看指定的全局配置项

git config -- global user.name "用户名"

git config -- global user.email "信箱"

## 2.git基本操作

- ### 基础操作

- 初始化仓库，`git init`

- 查看文件的状态，`git status / git status -s`

- 添加到暂存区，`git add . / git add "index.html"`

- 提交到仓库，`git commit -m '新增了 index.html 文件'`

- ### 分支操作

- 分支列表，`git branch` 

- 分支，`git branch 分支名称` (在主分支分master,可以一直分)

- 切换分支， `git checkout 分支名称 `

- 删除分支,`git branch -d  分支名称`

- 分支创建和切换，`git checkout -b 分支名称 ` (在主分支分master,可以一直分)

- 合并分支,`git merge 分支名称` (在主分支合并master)

- ### 远程仓库操作

- 查看远程仓库中所有的分支列表，`git remote show 远程仓库名称`

- 拉取远程分支的最新的代码,`git pull`

- 删除远程分支，`git push 远程仓库名称 --delete 远程分支名称`

- 生成秘钥：ssh-keygen -t rsa -b 4096 -C "1963301851@qq.com" 

- Github 的 SSH key 是否配置成功 ssh -T git@github.com

  ​



## 几个小命令

- `ls`，列出当前目录的文件列表
- `clear`，`ctrl + l`，清屏
- `touch index.html`，创建文件
- `mkdir test`，创建文件夹





1. [下载 Git](https://git-scm.com/download/win)
2. 注册 GitHub 账号

配置本机全局的用户名（username）和密码（password）

```bash
git config --global user.name 'shihaojieai'
git config --global user.email '1963301851@qq.com'
```

1. 配置 SSH

```bash
ssh-keygen -t rsa -b 4096 -C "1963301851@qq.com"
```

去 C:\Users\用户名文件夹\.ssh 目录打开 id_rsa.pub 文件，把文件的内容粘到 GitHub 的对应的配置里面`点击头像 -> Settings -> SSH and GPG Keys -> New SSH key`

检测是否配置成功，能看到 success 就成功了

```javascript
ssh -T git@github.com
```

1. New repository

新建一个空的文件夹

```bash
echo "# 说明" >> README.md
git init :初始化
git add . :添加全部/git add '文件名字' :添加单个文件
git commit -m "备注" :添加本地仓库
git remote add origin git@github.com:shihaojieai/wbeapi.git远程仓库地址 : 链接github远程仓库
git push -u origin master 完成增加
```

1. 以后的所有文件的修改，只需要

```bash
git add .
git commit -m '提交信息'
git push
```

1. 如果说本地不在了

```bash
git clone git@github.com:ifer-itcast/test233.git
```

## 10.git push -u origin master 本地仓库添加到远程仓库发生冲突 

1.git push -u origin master --force 强制添加 （force：强制）

2.先git pull git 然后 push -u origin master 先吧远程仓库的东西啦下来 然后添加



### 11.遇到冲突时的分支合并



![git遇到冲突时的分支合并](E:\就业班\webapi\images\git遇到冲突时的分支合并.png)



### 12.将本地分支推送到远程仓库![git本地分支推送到远程仓库](E:\就业班\webapi\images\git本地分支推送到远程仓库.png)



### 13.跟踪分支

![git跟踪分支](E:\就业班\webapi\images\git跟踪分支.png)