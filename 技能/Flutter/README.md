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
  
  ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/flutterDoctor.jpg)
  
  这是我配置好了出现的显示，如果只安装了上面的步骤跟我显示的不一样的。在这里我踩了个坑，估计有的人也会踩到的：输入flutter doctor之后就不动了。上面也说过，这个原因是，你要加载的文件被那堵墙拦住了，所以加载不了，而配置的镜像没啥用，我没有去找新的镜像源，就翻墙了。然后就加载了相对应的文件了。
  
  到了这里，如果你输入flutter doctor有下拉数据就算是前面的流程都成功了，里面的报错先别在意。
  
 # Android设置 
 
 最开始我以为只要安装flutter SDK就可以了，当我装成功了flutter SDK，就兴冲冲的去建立了flutter的项目(后面会讲述如何建立)。建立好了，运行，然后又像傻狍子一样等，啥都没有。后来输入flutter doctor,才发现我的Android SDK没装。后来又去看文档，发现要设置Android。又只能跑去搞Android设置了。搜索了好多文档资料，国内也有Android SDK，还有Android Studio。但对于一个小白来讲，这个都不知道是个啥东西，只能下载安装咯，安装之后发现没用啊，就只能继续去翻墙，去Android Studio下载。下载地址(如果访问不了就要翻墙): https://developer.android.com/studio/index.html
 
 下载完了之后便去安装(根据网上如何去安装Android Studio)安装了一下，其实我并不想去这个软件去开发flutter的，因为习惯了vscode了，安装这个只是为了获取里面的SDK罢了。哈哈哈，安装这个真是拔呀拔萝卜，拔出来才知道这个坑真是深不可测啊，安装这个又要去配置java的jdk（还好我之前学过java，已经配置好了java的JDK和SDK）。安装好了就去看看里面的Android的SDK吧(如何安装Android Studio诸君只能去网上看吧。)
 
 如果你的Android Studio，就可获得Android SDK了，一般都在C:user/用户名/AppData/Local/Android/Sdk。然后把它添加到用户变量里面(是环境变量里面的用户变量哦)。
 
 ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/andoridSdk.jpg)
 
 总结: 其实我们只需要Android SDK罢了，如果你能单独找到Android SDK那也么得问题，个人感觉不需要安装Android Studio，安装这个是真的烦。后面你再输入flutter doctor时，Android SDK就不会报错了。（记得重启哦）
 
 # 编辑器安装插件(vscode)
 
 本人习惯用vscode，而且它本身就有可开发flutter的插件，所以咯，安装vscode(步骤网上很多)，然后安装dart和flutter的插件
 
 在此需要说明的是:flutter是写dart的，我之前学dart也装了dart的SDK，编写flutter的话好像也要安装dart特定的SDK，不过似乎安装flutter的插件会自动配置dart，本人不太确定，这个坑我没踩。如果不幸踩到了，那就只能去装dart的SDK咯，这个也很麻烦，不过网上的教程很多，比装flutter的简单多了。
 
 总是，在vscode安装了Dart和flutter的插件后，基本差不多了。
 
 ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/vscode.jpg)
 
 #  设置模拟器(夜神模拟器)
 
 编写的flutter是需要平台来看的，毕竟做的是安卓和iOS开发，不能用浏览器咯，要么用自己的手机，要么去下载一个模拟器。我就选择了夜神模拟器作为安卓开发。下载地址:https://www.yeshen.com/
 
 下载完成之后也需要配置一下环境变量的(如果你不想每次都要跑到目录夹里面运行：nox_adb.exe connect 127.0.0.1:62001)的话，像之前的环境配置一样，找到夜神浏览器的目录夹，把里面的bin文件配置到环境变量中。
 
 到此，模拟器也装好了，现在就是要把vscode和夜神模拟器连接咯，打开vscode的powershell，在里面输入adb connect 127.0.0.1:62001，然后右下角有设备连接，就说明vscode和夜神模拟器连接成功了。
 
 
 ![image](https://github.com/yunliuyan/front-end-engineer/blob/master/image/yeshen.jpg)
 
 
  如果道友你看到这个界面，那么恭喜你，你所有的配置都成功了。
  
  
  # 创建第一个flutter项目
 
  1：启动 VS Code；
  
  2：调用 View>Command Palette…；
  
  3：输入 ‘flutter’, 然后选择 ‘Flutter: New Project’ action；
  
  4：输入 Project 名称 (如myapp), 然后按回车键；
  
  5：指定放置项目的位置，然后按蓝色的确定按钮；
  
  6：等待项目创建继续，并显示main.dart文件；
  
  7：上述命令创建一个Flutter项目，项目名为myapp，其中包含一个使用Material 组件的简单的演示应用程序；
  
  8：在项目目录中，道友的应用程序的代码位于 lib/main.dart；
  
  9：确保在VS Code的右下角选择了目标设备；
  
  10：按 F5 键或调用Debug>Start Debugging；
  
  11：如果一切正常，在应用程序建成功后，您应该在您的设备或模拟器上看到应用程序
  
  
  
    
  
 
 
 
