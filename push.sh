#!/bin/bash

# 拉取远程仓库的更新
git pull origin main

# 添加所有更改到暂存区
git add -A

# 提示用户输入提交描述
read -p "请输入提交描述: " commit_message

# 提交暂存区的更改
git commit -m "$commit_message"

# 推送到远程仓库的 main 分支
git push origin main