# HTTP简介

1： HTTP协议全名:Hyper Text Transfer Protocol(超文本传输协议)的缩写，是用于万维网

   服务器传输超文本到本地浏览器的传送协议。

2：HTTP是一个基于TCP/IP通信协议来传送数据(HTML,文件，图片文件，查询结果等)。

3：HTTP是一个属于应用层的面向对象的协议，由于其简介，快速的方式，适用于分布式超媒体

   信息系统。它于1990提出，经过几年的使用和发展，得到不断的完善和拓展。目前在www使用的是

   HTTP/1.0的第六版，HTTP/1.1的规范工作正在进行之中，而且HTTP-NG的建议已经提出。

4：HTTP协议工作于客户端-服务端构架微商。刘篮球作为HTTP客户端通过URL向HTTP服务端即web服务器发送

   所有请求。web服务器根据接收的请求后，向客户端发送详情信息。
    
   ![image](https://upload-images.jianshu.io/upload_images/2964446-5a35e17f298a48e1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2)

# 主要特点

1：简单快速：客户向服务器请求服务时，只需传送请求方法和路径。常用方法有:GET,HEAD,POST。每种方法规定了客户端       

   与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。
        
2：   灵活： HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。

3：  无连接：无连接的含义限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省时间。

4：  无状态：HTTP协议是无状态协议 。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后序处理需要

   前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的

   应答就较快。

5： 支持B/S以及C/S模式。

# HTTP之URL

HTTP使用同一资源标识符(Uniform Resource Identifiers, URI)来传输数据和建立连接。URL是一种特殊类型的URI，包含了用于查找某个资源的足够的信息。

URL: http://www.yunliuyan.com:8080/home/index.html?id=5&age=24618&page=1#name

1: 协议部分: 该部分为“http：”，这代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，FTP等。在"//"为分隔符。

2：域名部分：该部分为"www.yunliuyan.com" 。一个URL钟，也可以使用IP地址作为域名使用(如:localhost，127.0.0.1)。

3：端口部分：跟在域名后面的是端口，域名和端口之间使用":"作为分隔符。(端口不是URL必须的一部分，如果省略，则采用默认端口)。

4: 虚拟目录部分: 从域名后的第一个"/"开始到最后一个"/"为止，是虚拟目录部分，虚拟目录也不是URL必须的。上面的URL为"/home/"。

5：文件名部分：从域名后的最后一个"/"到"？"为止，或最后一个"/"到"#",或"/"到结束，都是文件部分。该部分为"index.html"。(该文件也不是URL必须的)

6：锚部分：从"#"开始到最后，都是锚部分。该部分为"name"。(非必须)

7：参数部分: 从"?"开始到"#"为止之间的部分都是为参数部分。该部分为"id=5&age=24618&page=1",多个参数用"&"作为分隔符。

# URL和URI的区别

URI(uniform resource identifier): 统一资源标识符，用来唯一的标识一个资源。

Web上可用的每种资源如HTML文档，图像，视频片段，程序等都是URI来定位的。URI一般由三部分组成的:

1: 访问资源的命名机制

2：存放资源的主机名

3：资源自身的名称，由路径标识，着重强调于资源。

URL(uniform resource locator)：统一资源定位器，它是一种具体的URI，即url可以用来标识一个资源，且指明如何locate此资源。

URL是Internet上用来描述信息资源的字符串，主要用在各种www客户程序和服务器程序上。

采用url可以用一种统一格式来描述各种信息资源，包括文件，服务器的地址和目录等。一般URL由三个部分组成：

1：协议(或称服务方式)

2:存有该资源的主机IP地址(有时也包括端口号)

3：主机资源的具体地址(如目录和文件名等)

# Request请求信息

客户端发送一个HTTP请求到服务器的请求消息包括以下格式

请求行(reuqest line), 请求头部(header)，空行和请求数据四个部分组成。

![image](https://upload-images.jianshu.io/upload_images/2964446-fdfb1a8fce8de946.png?imageMogr2/auto-orient/strip%7CimageView2/2)

GET请求例子：

      GET /562f25980001b1b106000338.jpg HTTP/1.1
      Host    img.mukewang.com
      User-Agent    Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36
      Accept    image/webp,image/*,*/*;q=0.8
      Referer    http://www.imooc.com/
      Accept-Encoding    gzip, deflate, sdch
      Accept-Language    zh-CN,zh;q=0.8
      
      第一部分: 请求行，用来说明请求类型，要访问的资源以及所使用的的HTTP的版本      
               GET: 请求类型为GET；[/562f25980001b1b106000338.jpg]：要访问的资源；HTTP/1.1：HTTP版本为1.1
               
      第二部分：请求头部，紧接着请求行(第一行)之后的部分，用来说明服务器使用的附加信息
               从第二行开始即为请求头部。HOST将指出请求的目的地。
               User-Agent:服务器端和客户端脚本都能访问它,它是浏览器类型检测逻辑的重要基础.该信息由你的浏览器来定义,并且在每个请求中自动发送等等
               
      第三部分: 空行，请求头部后面的空行是必须的(及时第四部分请求数据为空，也必须要有空行)
      
      第四部分：请求数据(也叫主体),可以调价任意数据。(该例子请求数据为空)
      
   POST请求例子
      
      POST / HTTP1.1
      Host:www.wrox.com
      User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
      Content-Type:application/x-www-form-urlencoded
      Content-Length:40
      Connection: Keep-Alive

      name=Professional%20Ajax&publisher=Wiley
      
      第一部分：请求行，第一行明了是post请求，以及http1.1版本。
      第二部分：请求头部，第二行至第六行。
      第三部分：空行，第七行的空行。
      第四部分：请求数据，第八行。







