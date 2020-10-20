# 工作流程

工作区 -> 暂存区 -> 仓库（本地仓库+远程仓库）



## 1，查看所有全局配置项 git配置

git config -- global -- list

2.查看指定的全局配置项

git config -- global user.name "用户名"

git config -- global user.email "信箱"

## 2.git基本操作

- 初始化仓库，`git init`
- 查看文件的状态，`git status / git status -s`
- 添加到暂存区，`git add . / git add index.html`
- 提交到仓库，`git commit -m '新增了 index.html 文件'`
- 生成秘钥：ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 
- Github 的 SSH key 是否配置成功 ssh -T git@github.com



## 几个小命令

- `ls`，列出当前目录的文件列表
- `clear`，`ctrl + l`，清屏
- `touch index.html`，创建文件
- `mkdir test`，创建文件夹