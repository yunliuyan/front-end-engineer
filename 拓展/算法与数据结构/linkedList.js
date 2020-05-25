//链表的设计:包含两类，一个是Node类用来表示借点，另一个是likedList类提供插入节点、删除节点等一些操作

//node类:两个属性，element用来保存节点上的数据，next用来保存指向下一个节点的链接
function Node(element) {
	this.element = element; //当前节点的元素
	this.next = null;  //下一个节点链接
}

//linkedlist 提供了对链表进行操作的方法，包括插入删除节点，查找给定的值等。值得注意的是，它只有一个属性，那就是使用一个Node对象来保存该链表的头节点

function Llist () {
	this.head = new Node('head'); //头节点
	this.find = find;  //查找节点
	this.insert = insert;  //插入节点
	this.remove = remove; //删除节点
	this.findPrev = findPrev; //查找前一个节点
	this.display = display;  //显示链表
}


//head节点的next属性初始化为null，当有新元素插入时，next会指向新的元素。

//insert:向链表插入一个节点。想要插入一个节点，我们必须明确在哪个节点的前面或者后面插入。我们先来看看，如何在一个已知节点的后面插入一个节点。

//在一个已知节点后插入新节点，我们首先得找到该节点，为此，我们需要一个find方法用来遍历链表，查找给定的数据。如果找到，该方法就返回保存该数据的节点。

//find：查找给定节点

function find(item) {
	let currNode = this.head;

	while(currNode.element != item ){
		currNode = currNode.next;
	}
	return currNode
}
//find 方法同时展示了如何在链表上移动。首先，创建一个新节点，将链表的头节点赋给这个新创建的节点，然后在链表上循环，如果当前节点的element属性和我们要找的信息不符，就酱当前节点移动到
//下一个节点，如果查找成功，该方法犯规包含该数据的节点;否则，就会返回null

//一旦找到了节点，我们就可以将新的节点插入到链表中了，将新节点的next属性设置为后面节点的next属性对应的值，然后设置后面节点的next属性指向新的节点

function insert ( newElement,item ) {
	let newNode = new Node(newElement);
	let currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;
}

//display：显示链表
function display() {
	let currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.element);
		currNode = currNode.next
	}
}

//测试
let  fruits = new Llist();

fruits.insert('Apple','head');
fruits.insert('Banana','Apple');
fruits.insert('Pear','Banana')

console.log(fruits.display())


//remove: 从链表中删除一个节点

//查找带删除节点的前一个节点

function findPrv(item) {
	let currNode = this.head;
	while(!(currNode.next !== null)&&(currNode.element != item)){
		currNode = currNode.next
	}
	return currNode;
}

function remove(item){
	let prevNode = this.findPrev(item);
	if(prevNode.next != null){
		prevNode.next = prevNode.next.next;
	}
}

//测试
fruits.insert('Grape','pear');

console.log(fruits.display())

//去掉banana

fruits.remove('Banana')
console.log(fruits.display())


//双向链表的实现
//尽管从链表的头节点遍历链表很简单，但是反过来，从后向前遍历却不容易。我们可以通过给Node类增加一个previous属性，让其指向前驱节点的链接，这样就形成了双向链表
//要实现双线链表，首先需要给Node类增加一个previous属性
function Node(element) {
	this.element = element; //当前节点的元素
	this.next = null; //下一个节点链接
	this.previous = null ; //上一个节点链接
}


// 双向链表的insert方法与单链表相似，但需要设置新节点的previous属性，使其指向该节点的前驱，定义如下：

function insert (newElement,item) {
	let newNode = new Node(newElement);
	let currNode = this.find( item );
	newNode.next = currNode.next;
	newNode.previous = currNode;
	currNode.next = newNode;
}

//双向链表的删除remove方法比单链表效率高，不需要查找前驱节点，只要找出待删除节点，然后将该节点的前驱next属性指向待删除节点的后继，设置该节点后继previous属性，
//指向待删除节点的前驱即可。定义如下：

function remove(item) {
	let currNode = this.find(item);
	if(!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null
	}
}

