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
  
  工具: Flutter 依赖下面这些命令行工具:
  
    Git for Windows (Git命令行工具)

    如果已安装Git for Windows，请确保命令提示符或PowerShell中运行 git 命令，
    
    不然在后面运行flutter doctor时将出现Unable to find git in your PATH错误,
    
    此时需要手动添加C:\Program Files\Git\bin至Path系统环境变量中
 
# 使用镜像

  因为某墙的关系，flutter在国内访问会受到限制，于是flutter官方为开发者临时搭建了一个镜像，大家可将环境变量加入到 用户变量 中(是用户变量！)。不知道如何配置的可以先去百度搜索一下。 
  
      export PUB_HOSTED_URL=https://pub.flutter-io.cn
      
      export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
      
   ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/1564193669(1).jpg)
      
 然而，此镜像为临时镜像，并不能保证一直可用！！！"读者可以参考详情请参考 Using Flutter in China 以获得有关镜像服务器的最新动态。"(当时我flutter SDK都配好，啥都根据文档弄好了，执行flutter doctor，然后像个傻狍子一样等了半个小时，啥都没加载，动都不动。后来才发觉，这个镜像没啥用啊~)当时想放弃的心都有了，这个镜像太难搞了，自己有没有好的镜像源，去看文档也是一脸懵逼。后来嘛，灵机一动，不搞这个镜像了，我有一个翻墙软件，咱直接开启不就得了。弄这个镜像，真的是累觉不爱。
 
 所以，如果当你安装镜像后没啥用的话，自己去翻墙吧。没有什么是金钱解决不了的，如果有，那应该是钱给的不到位~
 
 # Flutter SDK
 
  这个是主要的东西(似乎是句废话)。获取Flutter SDK有两种方式。
  
    1：直接去官网下载：https://flutter.dev/docs/development/tools/sdk/releases#windows
  
    2: 使用git去GitHub下载：https://github.com/flutter/flutter/releases (安装git的文档网上很多，我就不写如何安装了)
  
    // 在此建议，获取Flutter的SDK后，在D盘创建一个文件夹存放。换句话说你本人一定要知道你下载的文件放在哪。
    
    
   ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/flutterUrl.png)
   
   这样你就很容易获知自己的flutter SDK在哪了。
    
  当你把Flutter SDK安装好了，接下来就是配置环境变量了。打开放置Flutter SDK目录夹，有一个bin文件夹，进入进去，复制访问bin文件的文件路径。
  
  ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/flutterBin.png)
  
  然后将bin文件放置环境变量里面(系统变量里面path！！)
  
  ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/flutterpath.jpg)
  
  环境变量配置好了，开机重启一下，(我当时也配置好了，但是没重启，就卡在那里了~)，重启后，为了确认配置已生效，可在cmd，输入export查看一下。
  
  确认好了之后，便打开flutter SDK文件找到flutter-console.bat文件，双击打开。
  
  ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/flutterConsole.jpg)
  
  打开之后输入 flutter doctor命令。
  
  
  
  
    
  
 
 
 
