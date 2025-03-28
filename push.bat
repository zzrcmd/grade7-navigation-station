@echo off

echo 拉取远程仓库的更新
git pull origin main

echo 添加所有更改到暂存区
git add -A

set /p commit_message="请输入提交描述："

echo 提交暂存区的更改
git commit -m "%commit_message%"

echo 推送到远程仓库的 main 分支
git push origin main

echo 完成!
pause
