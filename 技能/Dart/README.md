# Dart学习
  
  # 语言特性
    
    1：Dart所有的东西都是对象，即使是数组numbers，函数function、null也都是对象，所有的对象都继承自object类。
    
    2：Dart动态类型语言，尽量给变量定义一个类型，会更安全，没有显示定义类型的变量在debug模式下的类型是dynamic(动态的)。
    
    3：Dart在running之前解析你的所有代码，指定数据类型和编译时的常量，可以提高运行速度。
    
    4：Dart中的类和接口是统一的，类即接口，你可以继承一个类，也可以实现一个类(接口)，自然也包含了良好的面向对象和并发编程的支持。
    
    5：Dart提供了顶级函数(如:main())
    
    6：Dart没有public，private，protected这些关键字，变量名以"_"开头意味着对它的lib是私有的。
    
    7：没有初始化的变量都会被赋予默认值null。
    
    8：final的值只能被设定一次。const是一个编译时的常量，可以通过const来创建常量值。var c = const[];这里c还是一个变量，只是
    
      被赋值了一个常量值。   它还是可以赋其他值。实例变量可以final，但不能是const.
      
    9: 编程语言并不是孤立存在的，Dart也是这样，它由语言规范、虚拟机、类库和工具等组成:
    
        SDK: SDK包含Dart VM、dart2js、Pub、库和工具。
        
        Dartium: 内嵌Dart VM的chromium，可以在浏览器直接执行dart代码。
        
        Dart2js: 将Dart代码编译为JavaScript的工具。
        
        DartEditor: 基于eclipse的全功能IDE，并包含以上所有工具。支持代码补全，代码导航，快速修正，重构，调试等功能。
        
 # 保留关键字
  
      abstract do import super as dynamic in switch assert else interface sync* enum implements is this async* export
      
      library throw await external mixin true break extends new try case factory null typedef catch false operator var
      
      class final part void const finally rethrow while continue for return with covariant get set yield* default if static
      
      deferred
      
 # 变量和常量
 
    1: 变量声明与初始化
      
       a:调用的变量name包含对string值为“张三”的对象的引用，name推断变量的类型是string，但可以通过制定它来更改该类型。
       
        如果对象不限于单一类型(没有明确的类型)，请使用object或dynamic关键字
        
              //没有明确类型，编译的时候根绝值来明确类型
              
              var name = '云流烟';
              
              Object name = '蝉嘶雪';
              
              dynamic name = '李四';
              
              //显示声明将被推断类型，可以使用string显示声明字符串类型
              
              String name = '云流烟'
