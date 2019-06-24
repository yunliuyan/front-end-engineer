  # 浏览器构成
  
  
   shell:
      
      浏览器的外壳，例如菜单栏，工具栏等。主要是提供给用户操作，参数设置等等。它是用来调用内核实现各种功能的。
      
   内核：
    
      浏览器的核心，内核是基于标记语言显示内容的程序或模块。也有一些浏览器并不区分外壳和内核，从 Mozillia将Gecko独立出来后，
      
      才有了外壳和内核的区别。目前主流的浏览器:IE6,IE8,Mozililia,Firefox,Opeta,Safari,chrome,Netscape等。
      
      
   # 浏览器内核
   
      可分为两部分：渲染引擎和JS引擎。它负责获取网页的内容(HTML,XML,图像等)，整理讯息(例如加入css等)，以及计算网页的显示方式。
      
      然后会输出至显示器或打印机。浏览器的不同对于网页的语法解释也不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端
      
      以及其他需要编辑、显示内容的应用程序都需要内核。JS引擎则是解析JavaScript语言，执行JavaScript语言实现网页的效果。最开始
      
      渲染引擎和JS轻轻并没有区分很明确，后面JS引擎越来越独立，内核就只倾向于渲染引擎。
      
  # 内核种类
  
   Trident
   
     Trident(IE内核)：该内核程序在1997年的IE4中首次被采用，是微软在Mosaic("马赛克"，这是人类历史上第一个浏览器，从此网页
      
     在图形界面的窗口浏览)代码的基础之上修改而来的，并沿用到IE11，也被普遍乘坐“IE内核”。
      
     Trident实际上是一款开放的内核，其接口内核设计的相当成熟，因此才有许多采用IE内核而非IE的浏览器(壳浏览器)涌现，由于IE
      
     本身的"垄断性"(虽然名义上IE并非垄断，但实际上，特别是从Windows95年代一直到CP初期，就市场占有率来说IE的确借助Windows
      
     的东风处于"垄断"的地位)而使得Trident内核的长期一家独大，微软很长时间并没有更新Trident内核，这导致了两个后果--一是
      
     Trident内核曾经几乎与W3C标准脱节(2005年)，二是Trident内核的大量bug等安全性问题没有得到及时解决，然后加上一些致力于
      
     开源的开发者和学者们公开自己认为IE浏览器不安全的观点，也有很多用户专享其他浏览器，Firefox和Opera就是这个时候星期的，
      
     非Reident内核浏览器的市场占有率大幅度提高也导致许多网页开发人员开始注意网页标准和非IE浏览器的浏览效果问题。
      
     补充: IE从版本11开始，初步支持WebGL技术。IE8的JavaScript引擎是jsscript,IE9开始用Chakra,这两个版本区别很大，Chakra无论
      
     是速度和标准化方面都很出色。
      
     国内很多的双核浏览器的其中一核便是Trindent，即为"兼容模式"。
      
     Windows10发布之后，IE将其内置浏览器命名为Edge,Edge最显著的特点就是新内核EdgeHTML。
      
   Gecko
   
      Gecko(Firefox内核): Netscape6开始采用的内核，后来的Mozilla FireFox(火狐浏览器)也采用了该内核，Gecko的特点就是代码
        
      完全公开，因此这是个开源内核，因此受到许多人的青睐，Gecko内核的浏览器也很多，这也是Gecko内核虽然年轻但市场占有率能够
        
      迅速提高的重要原因。
        
      事实上，Gecko引擎的由来跟IE不无关系，前面说过IE没有使用W3C的标准，这导致了微软内部一些开发人员的不满；他们与当时已经
        
      停止更新了的Netscape的一些员工一起创办了Mozilla,以当时的Mosaic内核为基础重新编写内核，于是开发过了Gecko。不过事实上，
        
      Gecko内核的浏览器仍然还是Firefox用户最多，所以有时候也会被称为Firefox内核。此外Gecko也是一个跨平台内核，可以在Windows
        
      、BSD、Linux和Mac OS X中使用。
        
   Webkit
    
      一提到Webkit，首先想到的便是Chrome，可以说，Chrome将webkit内核做的深入人心，殊不知，webkit的鼻祖其实是Safari。现在很多人
        
      错误的把webkit叫做Chrome内核(即使Chrome内核已经是blink了)，苹果表示已经哭的留血泪了。
        
      Safari是苹果公司开发的浏览器，使用KDE(Linux桌面系统)的KHTML作为浏览器的内核，Safari所用浏览器内核的名称是大名鼎鼎的webkit。
        
      Safari在2003年1月7号首度发行测试版，并成为MAC OS X v10.3与之后版本的默认浏览器，也成为苹果其他系列产品的指定浏览器(也
        
      已支持Windows平台)。
        
      如上述可知，webkit前身是KDE小组的KHTML引擎，可以说webkit是KHTML的一个开源的分支。当年苹果在比较了Gecko和KHTML后，选择
        
      了后者做引擎开发，是因为KHTML拥有清晰的源码结构和极快的渲染速度。
        
      webkit内核可以说是以硬件盈利为主的苹果公司给软件行业的最大贡献之一。随后，2008年谷歌公司发布了Chrome浏览器，
        
      采用了chromium内核便是fork了webkit
        
  Chromium/Bink
  
      2008年，谷歌公司发布了Chrome浏览器，浏览器使用的内核被命名为chromium。
      
      chromium fork 自开源引擎webkit，却把webkit的代码梳理得可读性很高，以前可能需要一天进行编译的代码，现在只要两个小时就
      
      能搞定。因此Chromium引擎和其他基于webkit的引擎所渲染页面的效果也是有出入的。所以有些地方会把chromium引擎和webkit区分
      
      开来单独介绍，而有的文章把chromium归入webkit引擎中，都是有一定道理的。
      
      谷歌公司还研发了自己的JavaScript引擎，v8，极大的提高了JavaScript的运算速度。
      
      chromium问世后，带动了国产浏览器行业的发展。一些基于chromium的单核，双核浏览器如雨后春笋般拔地而起、例如搜狗、360、QQ
      
      浏览器等等，无一不是套着不同的外壳用着相同的内核。
      
      然而在2013年4月3日，谷歌在chromium Blog上发表博客，称将与苹果的开源浏览器核心webkit分道扬镳，在Choromium项目中研发
      
      Blink渲染引擎(即浏览器核心),内置于Chrome浏览器之中。
      
      webkit用的好好地，为啥要投入入到一个新的内核中去呢？
      
      Blink其实是webkit的分支，如同webkit是KHTML的分支。Google的chromium项目此前一直使用webkit(WebCore)作为渲染引擎，
      
      但出于某种原因，并没有将其多进程架构移植入webkit。
      
      后来，由于苹果推出webkit2余chromium的沙箱设计存在冲突，所以chromium一直停留在webkit，并使用移植的方式和主线
      
      webkit2的对接。这增加了chromium的复杂性，且在一定程度上影响了chromium的架构移植工作。
      
      基于以上原因，Google决定从webkit衍生出自己的Blink引擎。(后由Google和Opera software共同研发)，将在webkit代码
      
      的基础上研发更加快速简约的渲染引擎，并逐步脱离webkit的影响，创造一个完全独立的Blink引擎，这样一来，唯一一条维系
      
      Google和苹果之间的技术的纽带就这样被切断了。
      
      Google和苹果在过个领域都是竞争对手，而唯独在浏览器引擎上有技术合作，利益一致。但又为了各自的利益，谁都不会全心全意
      
      的去做好webkit，因为你做出来的成果竞争对手可以直接享用。随着移动互联网已经崛起，手机和平板设备端必将成为浏览器的
      
      另一个战场。这时若Google和苹果仍然黏在一起，将会严重阻碍双方的进步，也会阻碍webkit的进步，分则利，合则损。
      
      据说Blink删除了880w行webkit的代码。
      
  # 关于移动端

      移动端的浏览器内核主要说是系统内置浏览器的内核。
      
      目前移动设备浏览器常用的内核就是:webkit,blink,trindent,gecko等，其中iPhone和iPad等iOS设备都是webkit，Android4.4
      
      之前是webkit，4.4系统浏览器切换到了chromium，内核是webkit的分支Blink，windows Phone8系统浏览器内核是Trident
      
 # 渲染引擎
 
   浏览器渲染引擎及依赖模块
   
   ![image](https://user-gold-cdn.xitu.io/2018/4/4/1628f1a408ef0436?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
   
     一个渲染引擎主要包括HTML解释器、css解释器、布局和JavaScript引擎等，但JavaScript引擎现在都已经独立出来了。底部是所
     
     依赖的模块，包括网络、储存、2D/3D图形、音频和视频，图片解码器等等，再下面就是操作系统相关的支持。
     
   一个大致渲染过程及依赖模块关系图如下:
   
   ![image](https://user-gold-cdn.xitu.io/2018/4/4/1628f1a408fb77c3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
   
   webkit渲染的详细过程
   
   ![image](https://user-gold-cdn.xitu.io/2018/4/4/1628f1a4744e0375?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
   
      在浏览器输入URL以后，依赖网络模块加载各种资源，得到一个HTML，HTML交给HTML解析器进行解析，最后生成DOM树，如果再解析
      
      过程中邮存在JavaScript代码就交给JavaScript引擎处理，处理完成后返回DOM树。在此环节中其目的就是要构建一个DOM树
      
   DOM树绘制上下文
   
  ![image](https://user-gold-cdn.xitu.io/2018/4/4/1628f1a494d9db07?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
   
      在网络资源中获得css代码后，则交给css解析器处理，同时也会计算布局。DOM树会构建成一个RnederObject树，它和DOM树节点
      
      一一对应，然后再和解析后的css合并分析，生成renderLayer树，这个树即最终用于渲染的树，然后绘制上下文
      
       
      
 
    
      
