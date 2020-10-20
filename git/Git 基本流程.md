1. [下载 Git](https://git-scm.com/download/win)

2. 注册 GitHub 账号

配置本机全局的用户名（username）和密码（password）

```bash
git config --global user.name 'ifer'
git config --global user.email 'ifer@qq.com'
```

3. 配置 SSH

```bash
ssh-keygen -t rsa -b 4096 -C "ifer@qq.com"
```

去 C:\Users\用户名文件夹\.ssh 目录打开 id_rsa.pub 文件，把文件的内容粘到 GitHub 的对应的配置里面`点击头像 -> Settings -> SSH and GPG Keys -> New SSH key`

检测是否配置成功，能看到 success 就成功了

```bash
ssh -T git@github.com
```

4. New repository

新建一个空的文件夹

```bash
echo "# 说明" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:ifer-itcast/test233.git
git push -u origin master
```

5. 以后的所有文件的修改，只需要

```bash
git add .
git commit -m '提交信息'
git push
```

6. 如果说本地不在了

```bash
git clone git@github.com:ifer-itcast/test233.git
```