 # XSS攻击
 
  定义： XSS是一种经常出现在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其他用户使用的页面中。其实在web前端方面，可以
  
        简单的理解为一种JavaScript代码注入。
        
  例子：我们有一个社交网站，允许大家相互访问空间，网站可能是这样做的:
  
        <?php 
            $username = "云流烟";
         ?>
         <!DOCYTPE HTML?
            <html>
              <head>
                  <meta charset="utf-8" />
              </head>
              <body>
                <div>用户名: <? php echo $username; ?></div>
              </body>
            </html>
         </HTML>
           
