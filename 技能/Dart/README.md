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
        buyMoreLlamas();  
      } on Exception catch(e) {
        print('unknown exception:$e')
      } catch(e,s) {
        print('exception details:\n $e  ')
      }
      
 3: rethrow
 
  rethrow 语句用来处理一个异常，同时希望这个异常能够被其它调用的部分使用。
  
      final foo = '';
      
      void misbehave() {
        try {
          foo = '1';
        } catch(e) {
          print('2');
          rethrow; //如果不重新抛出异常，main函数中的catch语句执行不到
        }
      }
      
      void main() {
        try {
          misbehave();
        } catch (e) {
          print('3')
        }
      }
 
  4：finally
  
   Dart的finally用来执行那些无论异常是否发生都执行的操作。
   
      final foo = '';
      
      void misbehave() {
        try {
          foo = '1';
        } catch (e) {
          print('2')
        }
      }
      
      void main() {
        try {
          misbehave();
        } catch(e) {
          print('3')
        } finally {
          print('4'); //即使没有rethrow最终都会执行到
        }
      }
       
# 函数function
  
   以下是一个实现函数的例子
    
    bool isNoble(int atomicaNumber) {
      return _nobleGases[atomicNumber] != null;
    }
       
  1. main()函数 
  
     每个应用程序都必须有一个顶层main()函数，它可以作为应用程序的入口点。该main()函数返回void并具有List<String>参数的可选参数。
  
         void main() {
            querySelector('#sample_text_id')
             ..text = 'Click me!'
             ..onClick.listen(reverseText);
         }
     
   级联符号..允许你在同一个对象上进行一系列操作。除了函数调用之外，还可以访问同一对象上的字段。这通常会节省创建临时变量的步骤。
    
        querySelector('#confirm')  //得到一个对象
            ..text = 'Confirm' 
            ..classes.add('important')
            ..onClick.listen(e=>window.alert('confirmed!'))
            
   级联符号也可以嵌套使用。例如: 
    
      final addressBook = (AddressBookBuilder()
       ..name = 'jenny'
       ..email = 'jenny@example.com'
       ..phone = (PhoneNumberBuilder()
             ..number = '415-555-0100'
             ..label = 'home')
           .build())
       .build();
       
   当返回值是void时不能构建级联
   
        var sb = StringBuffer();
        sb.write('foo') //返回void
          ..write('bar'); //这里会报错
       
2 可选参数
  
  可选的命名参数，定义函数时，使用{param1,param2,...}, 用于指定命名参数。例如: 
  
      void enableFlags({bool bold, bool hidden}) {
        //...
      }
      
      enableFlags(bold:true,hidden: false)
      
 可选的位置参数，用[]标记它们可选的位置参数:
 
    String say(String from, String msg,[String device]) {
      var result = '$from says $msg';
      if(device != null) {
        result = '$result with a $device';
      }
      return result;
    }
    
    say('Bob', 'Howdy'); //结果是：Bob says Howdy
    
    say('Bob','Howdy', 'smoke signal'); //结果是: Bob says Howdy with a smoke signal
    
3: 默认参数

  函数可以使用=为命名参数和位置参数定义默认值。默认值必须是编译时常量。如果没有提供默认值，则默认值为null。
  
    void enableFlags2({bool bold = false, bool hidden = fasle}) {
      //...
    }
    
    //调用的时候: bold will be true; hidden will be false
    enableFlags2(bold:true);
    
    String say(String from, String msg = 'Howdy', [String device = 'carrier pigeon',String mood]) {
      var result = '$from says #msg';
      if(device != null ) {
        result = '$result with a $device'
      }
      if(mood != null) {
        result = '$result (in a $mood mood)';
      }
      return result;
    }
    
    //调用方式:
    say('Bob','XUSL'); //Bob says XUSL with a carrier pigeon;
    
   你还可以将list或map作为默认值传递。下面的实例顶一个函数doStuff(),该函数指定列表参数的默认list和gifts参数的默认map。
 
    void soStuff(
      {
        List<int> list = const [1,2,3],
        Map<String,String> gifts = const {'first': 'paper','second':'cotton'} 
      }
    ){
      print('list: $list');
      print('gifts: $gifts')
    }

4 作为一个类对象的功能

  你可以将一个函数作为参数传递给另一个函数。
  
    void printElement(int element) {
      print(element);
    }
    var list = [1,2,3];
    
    //把printElement函数作为一个参数传递进来
    list.forEach(printElement)
   
  你可以将一个函数分配给一个变量
  
    var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
    assert(loudify('hello') == '!!! HELLO !!!');
    
5 匿名函数

  a 大多数函数都能被命名为匿名函数，如main()或者printElment()。你还可以创建一个名为匿名函数的无名函数，有时也可以创建lambda或闭包。你可以为变量
  
  分配一个匿名函数，例如，从集合中添加或删除它。
  
  b 一个匿名函数看起类似于一个命名函数-0或更多的参数，在括号之间用逗号和可选类型标注分离。
  
  c 下面的代码块包含函数的主体
    
     ([[Type] param1[,...]]) {
        codeBlock;
     };
     
  d 下面的实例定义了一个具有无类型参数的匿名函数item，该函数被list中的每个item调用，输出一个字符串，该字符串包含指定索引处的值。
  
    var list = ['apples','bananas','oranges'];
    
    list.forEach((item) => {
      print('${list.indexOf(item)}:$item');
    })
    
  e 如果函数之包含一条语句，可以使用箭头符号=》来缩短它，比如上面的例子可以简写成:
  
  list.forEach((item) => print('$(list.indexoOf(item):$item)'));
  
 6 返回值
 
  所有函数都返回一个值，如果没有指定返回值，则语句return null，隐式的附加到函数体。
  
     foo() {};
     assert(foo() == null)
     
# 类(Class)

 1 对象
 
   a Dart是一种面向对象的语言，并且支持基于mixin的继承方式。
   
   b Dart语言中所有的对象都是某一个类的实例，所有的类有同一个基类--Object。
   
   c 基于mixin的继承方式具体是指:一个类可以继承自多个父类。
   
   d 使用new语句来构造一个类，构造函数的名字可能是ClassName,也可以是ClasName.identigire,例如:
   
      var jsonData = JSON.decode('{"x":1,"y": 2 }');
      
      //创建一个pint实例可以用point()
      var p1 = new Piont(2,2);
      
      //Create a Point using Point.fromJson().
      var p2 = new Piont.fromJson(jsonData)
      
   e 使用.（dot）来调用实例的变量或方法
   
      var p = new Point(2,2);
      p.y = 3;
      assert(p.y == 3);
      
      num distance = p.distanceTo(new Point(4,4));
      
  d 使用?.来确认前操作数不为空，常用来代替.，避免左边操作数为null引发异常。
  
      p?.y = 4; //如果p不是null,那么y的值为4
      
  e 使用const代替new来创建编译时的常量构造函数
  
      var p = const ImmutablePoint(2,2);
      
  f 使用runtimeType方法，在运行中获取对象的类型。该方法将返回Type类型的变量。
  
      print('The type of a is ${a.runtimeType}');
      
2 实例化变量
    
  a 在类定义中，所有没有初始化的变量都会被初始化为null。
  
      class Point {
        num x;
        num y;
        num z = 0;
      }
          
  b 类定义中所有的变量，Dart语言都会隐式的定义setter方法，针对非空的变量会额外增加getter方法。
  
    class Point {
      num x;
      num y;
    }
    
    main() {
      var point = new Point();
      point.x = 4;
      assert(point.x == 4);
      assert(point.y == null);
    }
        
 3 构造函数
 
   a 声明一个和类名相同的好书，来作为类的构造函数。
    
      class Point {
        num x;
        num y;
        
        Point(num x, num y) {
          this.x = x;
          this.y = y;
        }
      }
      
   b this关键字只想当前类的实例，上面的代码可以简化为:
   
      class Point {
        num x;
        num y;
        
        Point(this.x,this.y);
      }
      
4 构造函数不能继承

    Dart语言中，子类不会继承父类的命名构造函数。如果不显式提供子类的构造函数，系统就提供默认的构造函数。
    
5 命名构造函数

   a 使用命名构造函数从另一类或现有的数据中快速实现构造函数
   
      class Point {
        num x;
        num y;
        
        Point(this.x,this.y);
        
        //命名构造函数
        Point.fromJson(Map json) {
          x = json['x'];
          y = json['y'];
        }
      }
        
  b 构造函数不能被继承，父类中的命名构造函数不能被子类继承。如果想要子类也拥有一个父类一样名字的构造函数，必须在子类是实现这个构造函数。
  
6 调用父类的非默认构造函数

 a 默认情况下，子类只能调用父类的无名，无参数的构造函数；父类的无名构造函数会在子类的构造函数前调用；如果initialize list也同时定义了，
 
   则会先执行initialize list中的内容，然后再执行父类的无名无参数构造函数，最后调用子类自己的无名无参数构造函数。即下面的顺序:
   
   1 initialize list(初始化列表)
   2 spuer class`s no-arg constructor (父类无参数构造函数)
   3 main class`s no-arg constructor(主类无参数构造函数)
    
 b 如果父类不显示提供无名无参数构造函数，在子类必须手动调用父类的一个构造函数。这种情况下，调用父类的构造函数的代码放在子类构造函数名后，
 
  子类构造函数前，中间用:分割。
  
      class Person {
        String firstName;
        Person.fromJson(Mao data) {
          print('in Person');
        }
      }
      class Employee extends Person {
        //父类没有无参数的非命名构造函数，必须手动调用一个构造函数
        super.fromJson(data);
        Employee.fromJson(Map data) : super.fromJson(data) {
          print('in Employee');
        }
      }
      
      main() {
        var emp = new Employee.fromJson({});
        
        //Prints;
        // in Person
        //in Employee
        if(emp is Person) {
          //类型检查
          emp.firstNmae = 'Bob';
        }
        (emp as Person).firstName = 'Bob';
      }
      
 7 初始化列表
  
   除了调用父类的构造函数，也可以通过初始化列表在子类的构造函数体前（大括号前）来初始化实例的变量值，使用逗号,分隔，如下
   
      class Point {
        num x;
        num y;
        
        Point(this.x,this.y);
        
        //初始化列表在构造函数运行前设置实例变量。
        Point.fromJson(Map  jsonMap) 
        : x = jsonMap['x'],
          y = jsonMap['y'] {
            print('In Point.fromJson():($x,$y)')
          }  
      }
      
      //注意:上述代码，初始化程序无法访问this关键字。
      
8 静态构造函数
  
  a 如果类产生的对象永远不会改变，可以让这些对象成为编译时常量。为此，需要定义一个const构造函数并确保所有的实例变量都是final的。
  
      class ImmutablePoint {
        final num x;
        final num y;
        const ImmutablePoint(this.x,this.y);
        static final ImmutablePoint origin = const ImmutablePoint(0,0)
      }
      
9 重定向构造函数

   有时候构造函数的目的只是重定向到该类的另一个构造函数。重定向构造函数没有函数体，使用冒号:分隔
    
      class Point {
        num x;
        num y;
        
        //主构造函数
        Point(this.x,this.y) {
          print('Point($x,$y)');
        }
        //重定向构造函数，指向主构造函数，函数体为空
        Point.alongXAxis(num x) :this(x,0);
      } 
      void main() {
        var p1 = new Point(1,2);
        var p2 = new Point.alongXAxis(4);
      }
      
 10 常量构造函数
 
 如果类的对象不会发生变化，可以构造一个编译时的常量构造函数。定义格式如下:
 
  定义所有的实例变量是final
  
  使用const声明构造函数
  
      class ImmutablePoiint {
        final num x;
        final num y;
        
        const ImmuttablePoint(this.x,this.y);
        static final ImmutablePoint origin = const ImmutablePoint(0,0);
      }
      
 11 工厂构造函数
 
  当实现一个使用factory关键词修饰的构造函数是，这个构造函数不必创建类的新实例。例如，工厂构造函数可能从缓存返回实例，或者它可能返回子类型的实例。
  
  下面的示例演示一个工厂构造函数从缓存返回的对象:
  
    class Logger {
      final String name;
      bool mute = false;
      
      //_cache是一个私有库
      static final Map<String,Logger> _cache = <String,Logger>{};
      
      factory Logger(String name) {
        if(_cache.containsKey(name)) {
          return _cache[name];
        } else {
          final logger = new Logger._internal(name);
          _cache[name] = logger;
          return logger;
        }
      }
      logger._internal(this.name);
      
      void log(String msg) {
        if(!mute) {
          print(msg)
        }
      }
    }
    
    //工厂构造函数不能用this
   
# 方法
    
   方法就是为对象提供行为的函数。
   
  # 实例方法
   
   对象的实例方法可以访问实例变量和this。一下实例中的distanceTo()方法是实例方法的一个例子:
   
      import 'sqrt:math';
      
      class Point {
        num x;
        num y;
        Point(this.x,this.y);
        
        num distanceTo(Point other) {
          var dx = x - other.x;
          var dy = y - other.y;
          return sqrt(dx*dx + dy*dy);
        }
      }
  setters 和 gertters
  
   这是一种提供对方法属性读和写的特殊方法。每个实例变量都有一个隐式的getter方法，合适的话可能还会有setter方法。可以通过实现getters和setters来创建附加属性，也就是直接使用get和set关键词:
   
      class Rectangle {
        num left;
        num top;
        num width;
        num height;
        
        Rectangle(this.left,this.top,this.width,this.height);
        
        //定义两个计算属性: right and bottom 
        num get right => left + width;
        set right(num value) => left = value - width;
        num get bottom => top + height;
        set bottom(num value) => top = value - height;
      }
      
      main() {
        var rect = new Rectangle(3,4,20,15);
        assert(rect.left == 3);
        rect.right = 23;
      }
      
      //不论是否显示的定义了一个getter，类似增量(++)的操作符，都能以预期的方式工作。为了避免产生任何向着不期望的方向操作，操作符一旦调用getter，就         会把他的值存在临时变量里。
      
      //借助于getter和setter，可以直接使用实例变量，并且在不改变客户代码量的情况下把它们包装秤方法。
      
  # 抽象方法
  
  instance,getter 和setter方法可以是抽象的，也就是定义一个接口，但是把实现交给其他类，要创建一个抽象方法，使用分号;代替方法体:
  
      abstract class Doer {
        //...定义实例变量和方法...
        void doSomething(); //定义一个抽象方法。
      }
      
      class EffectiveDoer extends Doer {
        void doSomething() {
          // ...提供一个实现方法，所以这里的方法不是抽象的...
        }
      }
      
  # 枚举类型
  
  枚举类型，通常被称作enumerations或enums,是一种用来代表一个固定数量的常量的特殊类。
  
  声明一个枚举类型需要使用关键字enum:
  
    enum Color {
      red,
      green,
      blue
    }
    
 在枚举中每个值都有一个index getter方法。它返回一个在枚举声明中从0开始的位置。例如，第一个值索引值为0，第二个值索引值为1。
 
    assert(Color.red.index == 0);
    assert(Color.green.index == 1);
    assert(Color.blue.index == 2);
    
要得到枚举列表的所有值，可使用枚举的values常量。
   
   List<Color> colors = Color.values;
   assert(colors[2] == Color.blue);
  
    //你可以在switch语句中使用枚举。如果e在switch(e)是雷士类型的枚举，如果不处理所有的枚举都会弹出警告
    
    enum Color {
      red,
      green,
      blue,
    }
    //...
    Color aColor = Color.blue;
    switch(aColor) {
      case Color.red:
        print('Red as roses!');
        break;
        
      case Color.green:
        print('Green as grass!');
        break;
        
      default: 
        print(aColor);
    }
    
    //枚举类型有一下限制
      //不能再子类中混合或实现一个枚举
      //不能显示实例化一个枚举
      

为类添加特征:mixins

  mixins是一种多类层次结构的类的代码重用。
  
  要使用mixin,在with关键字后面跟一个或多个mixin的名字。下面的例子显示了两个使用mixins的类:
  
      class Musician extends Performer with Musical {
      
          //...
      }
      
      class Maestro extends Person with Musical,
          Aggressive,Demented {
            
              Maestro(String maestroName) {
                name = maestroName;
                canConduct = true;
              }
          }
  要实现mixin，就创建一个集成object类的子类，不声明任何构造函数，不调用super。例如:
  
      abstract class Musical {
        bool canPlayPiano = false;
        bool canCompose = false;
        bool canConduct = false;
        
        void entertainMe() {
          if(canPlayPiano) {
            print('Playig Piano');
          } else if(canConduct) {
            print('Waving hands')
          } else {
            print('Humming to self')
          }
        }
      }
      
  # 类的变量和方法
   
   使用static关键字来定义变量和类方法。
   
   只有当静态变量被使用时才被初始化。
   
   静态变量，静态变量(类变量)对于类状态和常数是有用的:
   
      class Color {
        static const red = const Color('red'); //一个恒定的静态变量
        final String name; //一个实例变量
        const Color(this.name); //一个恒定的构造函数
      }
      
      main() {
        assert(Color.red.name == 'red');
      }
      
  静态方法，静态方法(类方法)不在一个实例上进行操作，因而不必访问this。例如:
  
      import 'dart:math';
      
      class Point {
        num x;
        num y;
        Point(this.x,this.y);
        
        static num distanceBetween(Point a,Point b) {
          var dx = a.x - b.x;
          var dy = a.y - b.y;
          return sqrt(dx*dx+dy*dy);
        }
      }
        
     main() {
      var a = new Point(2,2);
      var b = new Point(4,4);
      
      var distance = Point.distanceBetween(a,b);
      assert(distance < 2.9 && distance > 2.8);
     }
    //注:考虑使用高阶层的方法而不是静态方法，是为了常用或者广泛使用的工具和功能。
    
    //静态方法可以作为编译时常量。例如你可以把静态方法作为一个参数传递给静态构造函数
   
 # 抽象类
 使用abstract修饰符来定义一个抽象类，该类不能被实例化。抽象类在定义接口的时候非常有用，实际上抽象也包含一个实现。如果你先个让你的抽象类被实例化，请定义一个工厂函数。
 
 抽象类通常包含抽象方法。下面声明一个含有抽象方法的抽象类的例子:
 
      //这个类是抽象类，因此不能被实例化
      abstract class AbstractContainer {
        //定义构造函数，域，或方法
        void updateChildren(); //抽象方法。
      }
      
 下面的类不是抽象类，因此它可以被实例化。即使定义了一个抽象方法:
 
 class SpecializedContainer extends AbstractContainer {
    //定义更多构造函数,域,方法
    
    void updateChildren() {
      // ...实现 updateChildren()...
    }
    
    //抽象方法造成一个警告，但是不会阻止实例化。
    void doSomething();
 }
  
 # 类-隐式接口
 每个类隐式的定义了一个接口，含有类的所有实例和它实现的所有接口。如果想创建一个支持类B的API的类A，但又不想继承类B，那么，类A应该实现类B的接口。
 
 一个类实现一个或更多接口通过用implements子句声明，然后提供API接口要求。例如:
 
    //一个person，包含greet()的隐式接口。
    class Person {
      //在这个接口中，只有库中可见。
      final _name;
      
      //不在接口中，因为这个是构造函数
      Person(this._name);
      
      //在这个接口中
      string greet(who) => 'Hello,$who. I am $_name.';
    }
    
    //Person 接口的一个实现。
    
    class Imposter implements Person {
      //我们不得不定义，却不使用
      final _name = "";
      
      String greet(who) => 'Hi $who. Do you knoe who I am?';
    }
    
    greetBob(Person person) => person.greet('bob');
    
    main() {
      print(greetBob(new Person('kathy')));
      print(greetBob(new Imposter()));
    }
    
# 类-扩展一个类

  使用extends创建一个子类，同时supper将指向父类:
  
      class Television {
        void turnOn() {
          _illuminateDisplay();
          _activateIrSensor();
        }
      }
      
      class SmartTelevision  extends Television {
         void turnOn() {
             super.turnOn();
             _bootNetworkInterface();
             _initializeMemory();
             _upgradeApps();
          }
      }
     
子类可以重载实例方法，getters方法,setters方法。下面是个关于重写Object类的方法noSuchMethod()的例子，当代码企图用不存在的方法或实例变量时，这个方法就会被调用。

      class A {
          void noSuchMethod(Invocation mirror) {
          // 如果你不重写 noSuchMethod 方法, 就用一个不存在的成员，会导致NoSuchMethodError 错误。
            print('you tried to use a non-existent member:'+'${mirror.memberName}')
          }
      }
      
可以使用@override注释表明重写了一个成员

    class A {
      @overrode
      void noSuchMethod(Invocation mirror) {
       // ...
      }
    } 
    
如果你用noSuchMethod()实现每一个可能getter方法，setter方法和类的方法，MAME可以使用@proxy标注来避免警告。

    @proxy
    class A {
      void noSuchMethod(Invocation mirror) {
        // ...
      }
    }
