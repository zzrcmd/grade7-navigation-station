@echo off

echo ��ȡԶ�ֿ̲�ĸ���
git pull origin main

echo ������и��ĵ��ݴ���
git add -A

set /p commit_message="�������ύ������"

echo �ύ�ݴ����ĸ���
git commit -m "%commit_message%"

echo ���͵�Զ�ֿ̲�� main ��֧
git push origin main

echo ���!
pause
