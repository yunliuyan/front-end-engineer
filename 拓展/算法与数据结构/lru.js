/***
 * 设计并实现最不经常使用缓存的数据结构。它应该支持以下操作: get 和 put。
 * get(key) - 如果键存在于缓存中，则获取键的值(总是整数),否则返回-1。
 * put(key,value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，它应该在插入新项目之前，使最不经常使用的项目无效。
 * 在此问题中，当存在平局(即两个或更多个键具有相同使用频率)时，最近最少使用的键将被去除。
 */

 /**
	* 你是否可以在O(1)时间复杂度内执行两项操作？
  */

const LRUCache = function(capacity) {

	this.map = {};
	this.size = 0;
	this.maxSize = capacity;
 
	//链表的头部
	this.head = {
		prev: null,
		next: null
	};

	//链表的尾部
	this.tail = {
		prev: this.head,
		next: null
	};

	this.head.next = this.tail;

};

//get()

LRUCache.prototype.get = function(key) {
	if(this.map[key] !== undefined ) {
		//将对应的节点抽出并设为链表的首项并返回对应值
		const node = this.extractNode(this.map[key]);
		this.insertNodeToHead(node);
		return this.map[key].val;
	}else{
		return -1
	}
};


//put()
LRUCache.prototype.put = function(key,value) {
	let node;
	if(this.map[key]) {
		// 若该项已经存在，则抽取出来并设置相对应的值
		node = this.extractNode(this.map[key]);
		node.val = value;
	} else {
		//如该项不存在，那就创造一个新节点
		node = {
			prev: null,
			next: null,
			val: value,
			key,
		};
		 this.map[key] = node;
		 this.size++;
	}

	//将节点设为链表的首项
	this.insertNodeToHead(node);
	if(this.size > this.maxSize) {
		//超过限制则删除最后一项
		const delNode = this.tail.prev;
		const delKey = delNode.key;
		this.extractNode(delNode);
		this.size--;
		delete this.map[delKey];
	}
};

//插入节点到链表首项

LRUCache.prototype.insertNodeToHead = function(node) {
	const head = this.head;
	const oldFirstNode = this.head.next;
	node.prev = head;
	head.next = node;
	node.next = oldFirstNode;
	oldFirstNode.prev = node;
	return node
}

//从链表中抽取节点
LRUCache.prototype.extractNode = function(node) {
	const before = node.prev;
	const after = node.next;
	before.next = after;
	after.prev = before;
	node.prev = null;
	node.next = null;
	return node;
}

console.dir(LRUCache)

	const cache = new LRUCache(2);
console.log(cache)
	cache.put(1,1);
	
	cache.put(2,2);
	
	cache.get(1); //返回1

	cache.put(3,3); //去除key 2

	cache.get(2); //返回-1(未找到key 2)

	cache.get(3);  //返回3

	cache.put(4,4); //去除key 1
	
	cache.get(1); //返回-1

	cache.get(3);  //返回3

	cache.get(4);  //返回4

	

