#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config --global user.name "cloudtophouse"
git config --global user.email "cloudtophouse@163.com"
git add -A
git commit -m 'deploy'




# 如果发布到 https://<USERNAME>.github.io
# git push -f "https://31d8c0e45ca7064d511298d4fe8a0861b47aff20@github.com/CloudTopHouse/cloudtophouse.github.io.git" master:gh-pages
git push -f git@github.com:cloudtophouse/cloudtophouse.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
cd -