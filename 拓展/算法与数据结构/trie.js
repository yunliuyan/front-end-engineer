//Trie树，幼教字典树，前缀树，单词查找树，是一种多叉树结构。Trie树通常只用来处理字符串

//Trie特性：
//1： 根结点不包含字符，除根结点外每一个子节点都包含一个字符
//2: 从跟结点到某一个节点，路径上经过的字符连接起来，为该节点对应的字符串(单词).
//3： 每个节点的所有子节点包含的字符互不相同。
//4: 通常在实现Trie的时候，会在节点结构中设置一个标识，用来标识该节点处是否构成一个单词

//Trie优缺点
// Trie树的核心思想是空间换时间，利用字符串的公共前缀来减少无谓的字符串比较以达到提高查询效率的目的。
//优点:
//1: 插入和查询的效率很高，都为O(w),其中w是待插入/查询的字符串的长度
//2: Trie树种不同的关键字不会产生冲突。
//3: Trie树只有在允许一个关键字关联多个值的情况下才有类似hash碰撞发生。
//4: Trie树不用球hash值，对短字符串有更快的速度。通常，求hash值也是需要遍历字符串的。
//5: Tire树可以对关键字按字典序排序

//缺点：
//当hash函数很好时，Trie树的查找效率会低于哈希搜索。
//空间消耗比较大。

//假如现在有100万条数据，如果使用tire查找，就和多少条没有关系。
//Trie: 时间复杂度： O(w)
//BST:: 时间复杂度： O(logn)

//Tire数据结构

//在考察一个字符串或者单词看成是一个整体，但是Tire却打破了这种方式，它以一个字母为单位拆分储存，从根结点开始一直到叶子结点去遍历，遍历到一个叶子结点就形成一个单词

//Trie的定义
// class Treenode {
// 	constructor(key,leaf) {
// 		this.key = key;
// 		this.leaf = leaf;
// 		this.count = 0;
// 		if(!leaf) {
// 			this.children = [];
// 		}
// 	}
// }

// class Tree {
// 	constructor() {
// 		let root = new Treenode(null,false);
// 		this.root = root;
// 	}
// 	run(strs) {
// 		let root = this.root;
// 		for (let i=0; i<strs.length; i++){
// 			this.insertNode(root,strs[i]);
// 		}
// 	}
// 	//创建字典树
//  insertNode(node,str) {
// 	if(!node.leaf) {
// 		//当前节点的子节点中是否有字符串的第一个字符，从子节点中匹配
// 		let child = node.children.find((child) => {
// 			return child.key == str[0]
// 		})
// 		if(child) {
// 			//有多少单词通过这个节点，即由根至该节点组成的字符串模式出现的次数
// 			child.count++;
// 			//子节点中存在，则继续遍历下一个字符
// 			this.insertNode(child,str.substring(1))
// 		}else{
// 			//子节点中没有，则插入该节点
// 			if(str.length === 1){
// 				child = new Treenode(str[0],true);
// 			}else{
// 				child = new Treenode(str[0],false)
// 			}
// 			node.children.push(child);
// 			this.insertNode(child,str.substring(1));
// 		}
// 	}
// }

// 	search (txt) {
// 		if(!txt) {
// 			return;
// 		}
// 		//从根结点开始查找匹配
// 		let root = this.root;
// 		let isIn = this.searchTxt(root,txt);
// 		console.log(isIn);
// 	}

// 	searchTxt(node,txt) {
// 		if(!txt) {
// 			return false;
// 		}
// 		if(!node.leaf) {
// 			//判断子节点中是否有想等值
// 			let child = node.children.find(child =>{
// 				return child.key = txt[0];
// 			});
// 			if(!child) {
// 				//没有匹配到字符，说明不存在
// 				return false;
// 			}else if(child.leaf) {
// 				//说明已经找到头了
// 				return child;
// 			}else {
// 				if(txt.length === 1){
// 					//字符串已经匹配完，但是节点不是叶子结点，说明不存在
// 					return false;
// 				}
// 				return this.searchTxt(child, txt.substring(1));
// 			}
// 		}else {
// 			//查到了叶子结点，判断当前节点的值是否相等
// 			if(node.key == txt[0]) {
// 				return node;
// 			}else {
// 				return false;
// 			}
// 		}
// 	}

// 	getRoot() {
// 		return this.root;
// 	}


// }


// const strs=['hello','hi','hello','hellen','red','read'];
// const tree = new Tree();
// tree.run(strs);
// tree.search('hel');//false


// //字典的实现
// //字典类
// function Dictionary() {
// 	this.dataStore = {};
// 	this.add = add;     //添加uansu
// 	this.find = find;  //查找元素
// 	this.remove = remove; //删除元素
// 	this.count = count; //字典中元素的个数
// 	this.showAll = showAll; //显示字典元素
// 	this.clear = clear; //清空字典
// }

// //add: 向字典添加一个元素
// function add(key,value) {
// 	this.dataStore[key] = value;
// }

// //find: 查找字典中的元素

// function find(key) {
// 	return this.dataStore[key]
// }

// //remove 删除字典中的一个元素
// function remove(key) {
// 	if(this.dataStore[key]){
// 		this.dataStore.splice(key,1)
// 	}else{
// 		return 'not found'
// 	}
// }

// //shoeAll: 显示字典中所有键值对

// function showAll() {
// 	for(let key in this.dataStore) {
// 		console.log('key:'+this.dataStore[key])
// 	}
// }
// //javascript实现字典树trie
// class TrieNode {
// 	constructor(value) {
// 		this.value = value;  //value 为单个字符
// 		this.num = 1;
// 		this.deep = 0; //根结点默认0
// 		this.son = [];
// 		this.isEnd = false;
// 	}
// 	findNode(value) {
// 		for(let i=0; i<this.son.length; i++) {
// 			const node = this.son[i]
// 			if(node.value == value){
// 				return node
// 			} 
// 		}
// 		return null;
// 	}
// }

// class Trie {
// 	constructor() {
// 		this.root = new TrieNode(null);
// 		this.size = 1; //一开始的时候只有根结点这一个节点
// 	}
// 	insert(str) {
// 		let node = this.root;
// 		for(let c of str) 
// 			let snode = node.findNode(c);
// 			if(snode == null){
// 				snode = new TrieNode(c);
// 				snode.deep = node.deep + 1;
// 				node.son.push(snode); 
// 			}else{
// 				snode.num++; //有N个字符串经过它
// 			}
// 			node = snode;
// 		}
// 		//如果当前的node已经是一个Word，则不需要添加
// 		if(!node.isEnd) { 
// 			this.size++; 
// 			node.isEnd = true;
// 		}
// 	}
// 	has(str) {
// 		let node = this.root;
// 		for(let c of str){
// 			const snode = node.findNode(c)
// 			if(snode) {
// 				node = snode;
// 			}else{
// 				return false
// 			}
// 		}
// 		return node.isEnd
// 	}
// }

// //demo 
// const nt = new Trie();
// nt.insert('name');
// nt.insert('word');
// console.log(nt.has('has'))
// console.log(nt.has('name'))
// console.log(nt.has('na'))

//{A:1,B.A:2,B.B:3,CC.D.E:4,CC.D.F:5} => {A：1,B:{A:2,B:3},CC:{D{E:4,F:5}}}

let testObj = {
	"A": 1,
	"B.A": 2,
	"B.B": 3,
	"CC.D.E": 4,
	"CC.D.F": 5
}
let result = {}
const insertObj = function(key,value) {
	let keyArr = key.split('.');
	let node = result;
	keyArr.forEach((item,index)=>{
		if(index === (keyArr.length-1)){
			node[item] = value
		}else{
			if(node.hasOwnProperty(item)){
				node = node[item]
			}else{
				node[item] = {};
				node = node[item]
			}
		}
		
	})
};
for (let key in testObj) {
	insertObj(key,testObj[key])
}
console.log(result)


//by new way

// class Trie{
// 	constructor() {
// 		this.root = new TrieNode();
// 	}
// 	isValid(str) {
// 		return /^[a-z1-9]+$/i.test(str);
// 	}
// 	insert(word) {
// 		// addWord
// 		if(this.isValid(word)) {
// 			let cur = this.root;
// 			for(let i = 0; i < word.length; i++) {
// 				let c = word.charCodeAt(i);
// 				c -= 48; //减少‘0’的charCode
// 				var node = cur.edges[c];
// 				if(node == null) {
// 					var node = (cur.edges[c] = new TrieNode());
// 					node.value = word.charAt(i);
// 					node.numPass = 1; //有N个字符串经过它
// 				} else {
// 					node.numPass++
// 				}
// 				cur = node;
// 			}
// 			cur.isEnd = true; //字符串到此节点已经结束
// 			cur.numEnd++; //这个字符串重复的次数

// 			return true;
// 		} else {
// 			return false
// 		}

// 	}
// 	remove(word){
// 		if(this.isValid(word)) {
// 			var cur = this.root;
// 			var array = [], n = word.length;
// 			for(let i = 0; i < n; i++) {
// 				var c = word.charCodeAt(i);
// 				c = this.getIndex(c);
// 				var node = cur.edges[c];
// 				if(node) {
// 					array.push(node)
// 					cur = node
// 				}else{
// 					return false
// 				}
// 			}
// 			if(array.length === n){
// 				array.forEach(function(el){
// 					el.numPass--
// 				})
// 				cur.numEnd--;
// 				if(cur.numEnd == 0){
// 					cur.isEnd = false
// 				}
// 			}
// 		}else{
// 			return false
// 		}
// 	}
// 	preTraversal(cb){ //先序遍历
// 		function preTraversalImpl(root, str, cb){
// 			cb(root, str);
// 			for(let i = 0, n = root.edges.length; i < n; i++) {
// 				let node = root.edges[i];
// 				if(node){
// 					preTraversalImpl(node, str+node.value,cb);
// 				}
// 			}
// 		}
// 		preTraversalImpl(this.root, "", cb);
// 	}
// 	//在字典树找那个查找是否存在某字符串为前缀开头的字符串(包括前缀字符串本身)
// 	isContainPrefix(word) {
// 		if(this.isValid(word)) {
// 			var cur = this.root;
// 			for(var i = 0; i < word.length; i++){
// 				var c = wrd.charCodeAt(i);
// 				c -= 48; //减少0的charCode
// 				if(cur.edges[c]) {
// 					cur = cur.edges[c];
// 				} else {
// 					return false
// 				}
// 			}
// 			return true;
// 		}else{
// 			return false;
// 		}
// 	}
// 	isContainWord(str) {
// 		//在字典树中查找是否存在某字符串（不为前缀）
// 		if(this.isValid(word)) {
// 			var cur = this.root;
// 			for(var i = 0; i < word.length; i++) {
// 				var c = word.charCodeAt(i);
// 				c -= 48;
// 				if(cur.edges[c]) {
// 					cur = cur.edges[c];
// 				} else {
// 					return false
// 				}
// 			}
// 			return cur.isEnd
// 		}else{
// 			return false
// 		}
// 	}
// 	countPrefix(word) {
// 		//统计以指定字符串为前缀的字符串数量
// 		if(this.isValid(word)){
// 			var cur = this.root;
// 			for(var i = 0; i < word.length; i++){
// 				var c = word.charCodeAt(i);
// 				c -= 48;
// 				if(cur.edges[c]) {
// 					cur = cur.edges[c];
// 				}else{
// 					return 0
// 				}
// 			}
// 			return cur.numPass;
// 		} else {
// 			return 0
// 		}
// 	}

// 	countWord(word) {
// 		//统计某字符串出现的次数方法
// 		if(this.isValid(word)) {
// 			var cur = this.root;
// 			for(var i = 0; i < word.length; i++){
// 				var c = word.charCodeAt(i);
// 				c -= 48;
// 				if(cur.edges[c]) {
// 					cur = cu.edges[c]
// 				}else{
// 					return 0
// 				}
// 			}
// 			return cur.numEnd;
// 		} else {
// 			return 0
// 		}
// 	}
// }

// class TrieNode {
// 	constructor() {
// 		this.numPass = 0; //有多少个单词经过这节点
// 		this.numEnd = 0; //有多少个单词就此结束
// 		this.edges = [];
// 		this.value = ""; //value为单个字符
// 		this.isEnd = false;
// 	}
// }