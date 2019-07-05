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
              
      b: 默认值
      
        未初始化的变量的初始值为null（包括数字），因此数字，字符串都可以调用各种方法。我们来测试一下
        int lineCount;
        assert(lineCount == null); //为false的时候则抛出异常
        print(lineCount); //打印结果为null，证明数字类型初始化值为null
        
      c:final 和 const 
      
        如果你从未打算更改一个变量，那么使用final或const，而不是var，也不是一个类型。
        
        一个final变量只能被初始化一次，const变量是一个编译时常量，(const变量时隐世的final)
        
        final的顶级或类变量在第一次使用时被初始化。
        
        final String outSideFinalName
        
        被final或者const修饰的变量，变量类型可以省略，建议指定数据类型。
        
        //可以省略string这个类型声明
        
        final name = 'Bob';
        
        final String name1 = '张三';
        
        呗final或const修饰的变量无法再去修改其值
        
        final String outSideFinalName = 'Alex';
        
        //'outSideFinalName',一个被final修饰的变量，只能赋值一次。
        
        outSideFinalName = 'Bill' //报错
        
        final或则const不能和var同时使用
        
        const var String outSideName = 'Bill'; //报错
        
        final var String name = 'Lili'; //报错
        
        常量如果是类级别的，请使用static const
        
        static const String name3 = 'Tom'
        
        常量的运算
        
        const speed = 100; 
        
        const doucle distance = 2.5 * speed; 
        
        const 关键字不只是声明常数变量，你也可以使用它来创建常量值，以及声明创建常量值的构造函数，任何变量都可以有一个常量值。
        
         //注意: []创建的是一个空的list的集合
         
         //const []创建一个空的，不可变的列表。
         var varList = const []; //varList当前的EIL；
         final finalList = const []; //finalList一直是ETL
         const constList = const []; //constList是一个可临时编译的ETL
         
         //可以更改非final，非const变量的值，技术它曾经具有const变量的值
         
         varList = ['hehe']
         
        在常量表达式中，该运算符的操作数必须为'bool','num','String'或者'null',const常量必须用conat类型的值初始化。
        
        const String outSIdeName = 'Bill';
        final String outSideFinaelName = 'Alex';
        const String outSideName2 = 'Tom';
        
        const aXonstList = const['1', '2', '3'];
        
        //在常量表达式中，该运算符的操作数必须为‘bool’,'num','string'或‘null’
        const validConstString = '$outSideName $outSideName2 $aConstList';
        
 # 数据类型
 
  # num
  
   a: num是数字类型的父类，有两个子类int和double。
   
   b: int根绝平台不同，整数值不大于64位。在Dart VM上，值可以从-2^63到2^63-1,编译成JavaScript的Dart使用JavaScript代码，
      允许值从2^53到2^53-1.
      
   c: double 64位(双精度)浮点数，如OEEE 754标准所规定。
   
        int a = 1;   
        print(a);
        
        double b = 1.12;    
        print(b);
         
         //String -> int
         int one = int.pares('1') 
         print(one + 2)//输出3
         
         //String->double
         var onePointOne = double.pares('1.1');
         print(onePointOne + 2) //输出3.1
         
         //int -> String
         String oneAsString = 1.toString();
         print('$oneAsString + 2'); //'1+2';
         
         //double -> String (注意括号中要有小数点的位数，否则会报错)
         String piAsString = 3.125465.toStringAsFixed(2);
         print(piAsString) //最后一位会自动四舍五入
         
# String
  
   a: Dart里面的String是一系列UTF-16代码单元
      
   b：你可以使用单引号或者双引号来创建一个字符串
      
   c: 单引号或者双引号里面嵌套使用引号
      
   d: 用$或{}来计算字符串中变量的值，需注意的是如果是表达式则需要表示为：${表达式}
      
         String singleString = 'abcdeee';
         String doubleString = 'abcdeeesfdgh';
          
         String sdString = '$singleString a "abcde" ${singleString}';
         String dsString = "abc 'asd' $sdString";
         print(sdString);print(dsString);
          
         String singleString = 'aaa';
         String doubleString = 'bbb';
         //单引号嵌套双引号
         String sdString = '$singleString a "bbb" ${doubleString.toUpperCase()}'
         print(sdString) //aaa a "bbb" BBB
          
# bool
  
   a: Dart是强bool类型检查，只有bool类型的值为true才被认为是true
      
   b: 只有两个兑现更具有bool类型，true和false，他们都是编译时常量
      
   c: Dart的类型安全意味着不能使用if(nonboolleanValue)或assert(nonboolleanValue)等代码，相反Dart使用的是显示的检查值
      
   D：assert是语言内置的断言函数，仅在检查模式下有效，在开发过程中，除非条件为真，否则会引发一场。(段失败则程序立刻终止)
      
       //检查是否为空字符串
       var fullName = '';
       assert(fullName.isEmpty);
       
       //检查0
       var hitPoints = 0;
       assert(hitPoints <= 0);
       
       //检查是否为null
       var unicorn;
       assert(unicorn == null);
       
       //检查是否NaN
       var iMeantToDoThis = 0/0;
       assert(iMeantToDoThis.isNaN)
       
# List集合

  a: 在Dart中，数组是list对象，因此大多数人只是将它们称为List。Dart list文字看起来像JavaScript数组文字。
  
     //创建一个int类型的list
     List list = [10,7,23];
     print(list); //输出[10,7,23]
     
     //使用List的构造函数，也可以添加int参数，表示List固定长度，不能进行添加 删除操作
     var fruits  = new List();
     
     //添加元素
     fruits.add('apples');
     
     //添加多个元素
     fruits.addAll(['oranges','bananas']);
     
     List subFruits = ['apples','origges','bananas'];
     //将subFruits加入fruits
     fruits.addAll(subFruits)
     
     print(fruits); //输出： [apples, oranges, bananas, apples, oranges, banans]
     
     //获取List的长度
     print(fruits.length) //5
     
     //获取第一个元素
     print(frutis.first);
     
     //获取最后一个元素
     print(frutis.first);
     
     //利用搜索引获取元素
     print(fruits[0]);
     
     //查找某个元素的索引号
     print(fruits.indexof('apples'));
     
     //删除指定位置的元素，返回删除的元素
     print(fruits.removeAt(0));
     
     
     //删除指定位置的元素，成功返回true，失败返回false
     //如果集合里面有多个‘apples’，只会删除集合中第一个该元素
     fruits.remove('apples');
     
     //删除最后一个元素，返回删除的元素
     fruits.removeLast();
     
     //删除指定条件的元素(例如:元素的长度大于6)
     fruits.removeWhere((item)=>item.length > 6);
     
     //删除所有的元素
     fruits.clear();
     
 注意事项：
 
     1：可以直接打印list包括list的元素，list也是一个对象。但是java必须遍历才能打印list，直接打印是地址值。
     
     2：和java一样list里面的元素必须保持类型一致，不一致就会报错。
     
     3：和java一样list的交表从0开始
     
     4：如果集合里面有过个相同的元素‘X’，只会删除集合中各地一个该元素
     
# Map集合
     
  1：一般来说，map是将键和值相关联的对象，键值都可以是任何类型的对象。每个键只出现一次，但可以多次使用相同的值。Dart支持map文字和map类型提供。
  
  2：初始化Map方式一：直接声明，用{}表示，里面写key和value,魅族键值对中间用都好隔开。
  
     Map companys = { 'Alibaba': '阿里巴巴','Tencent': '腾讯' }
     print(companys) //{ 'Alibaba': '阿里巴巴','Tencent': '腾讯' }
     
  3:创建Map方式二: 先声明，再去赋值。
   
    Map schoolsMap = new Map();
    schoolsMap['first'] = '江西师范大学';
    schoolsMap['second'] = '清华';
    
    var fruits = new Map();
    fruits["first"] = "apple";
    fruits["second"] = "banana";
    
  4:Map API
  
    //指定键值对的参数类型
    var aMap = new Map<int, String>();
    
    //Map的赋值，中括号中是key,这里可不是数组
    aMap[1] = '小米';
    
    //Map中的键值对是唯一的
    //同Set不同，第二次输入的key如果存在，value会覆盖之前的数据
    aMap[1] = '非爱';
    
    //map里面的value可以相同
    aMap[2] = '非爱';
    
    //Map里面value值可以为空字符串
    aMap[3] = '';
    
    //Map里面的value可以为null
    aMap[4] = null;
    print(aMap); //{'1': '非爱', '2': '非爱', '3': '', '4': null}
    
    //检索Map是否含有某key
    assert(aMap.containsKey(1));
    
    //删除某个键值对
    aMap.remove(1);
    
 注意事项
 
    1：map的key类型不一致也不会报错。
    
    2：添加元素的时候，会按照你添加元素的顺序逐个加入到map里面。
    
    3：map里面的key不嫩共享同，但value可以相同，value可以为空字符串或者null。
    

# 运算符

    一元后置操作符： expr++ expr-- () [] . ?
    
    一元前置操作符: expr !expr ~expr ++expr --expr
    
    乘除: * / % ~/
    
    加减: + -
    
    位移:  << >>
    
    按位与: &
    
    按位或: |
    
    按位异或: ^
    
    逻辑与: &&
    
    逻辑或: ||
    
    关系和类型判断: >= > <= < as is is!
    
    等与不等: == !=
    
    如果为空: ??
    
    条件表达式:expr1 ? expr2 : expr3
    
    赋值： = *= /= ~/= %= += == <<= >>= &= ^= =??=
    
  # 流程控制语句
  
    if...else
    
    for
    
    while do-while
    
    break continue
    
    switch...case
    
    assert(仅在checked模式有效)
    
# 异常

  1：throw
    
   a: 抛出固定类型的异常
     
      throw new FormatException('Expected at least 1 section');
      
   b: 抛出任意类型的异常
   
      throw 'Out of llamas!';
      
   c: 抛出异常表达式
   
      distanceTo(Point other) => 
        throw new  unimplementedError();
        
 2: catch
 
  将可能出现异常的代码放置try语句中个，可以通过on语句来指定需要捕获的异常类型，使用catch来处理异常。
  
      try {
        breedMoreLlamas();
      } on OutOfLlamasException {
      
      }
 
    
  
       
       
       
          
          
        
        
        
        
        
