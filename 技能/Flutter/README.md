# 搭建flutter环境

  在这里，不得不吐槽一下，某堵墙对于国内的程序员真是太不友好了！折腾了一天，本人才把flutter的环境搭建好。为了防止想学flutter的道友踩坑(网上的坑也多)，就特地把自己安装flutter的过程以及踩的坑说明一下。(flutter的使用依赖也不是一般的多)
  
  注: 本文只是介绍如何在windows里面安装flutter，如果是用MacOS 或者 Linux的道友，请戳https://flutter-io.cn/docs/get-started/install
 
# 需要安装的工具

  1：翻墙VPN(要么使用镜像代理);
  
  2：Flutter SDK;
  
  3：Android Studio(安装这个主要是为了获取Android SDK);
  
  4：编辑器安装插件(本人用的是vscode)
  
  5：安卓模拟器(本人用的是夜神模拟器)
  
  (吐槽一下，真是一步一个坑啊~0.o)
  
 
# 系统要求(最低要求)

  操作系统: Windows 7 或更高版本 (64-bit)
  
  磁盘空间: 400 MB (不包括Android Studio的磁盘空间)
  
  工具: Flutter 依赖下面这些命令行工具.
  
    Git for Windows (Git命令行工具)

    如果已安装Git for Windows，请确保命令提示符或PowerShell中运行 git 命令，不然在后面运行flutter doctor时将出现Unable to find git in your PATH     错误, 此时需要手动添加C:\Program Files\Git\bin至Path系统环境变量中
    
 
