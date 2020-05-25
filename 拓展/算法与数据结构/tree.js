//二叉树：：每个节点最多只有两个分支的树结构
//完美二叉树:除了叶子节点之外的每一个节点都有两个孩子，每一层(包含最后一层)都被完全填充
//完全二叉树:除了最后一层之外的其他每一层都被完全填充，并且所有节点都保持向左对齐
//满二叉树:除了叶子结点之外的每一个结点都有两个孩子结点

//前序遍历：首先访问根结点然后遍历左子树，最后遍历右子树。在遍历左、右子树时，仍然先访问根结点，然后遍历左子树，最后遍历右子树
//中序遍历：首先遍历左子树，然后访问根结点，最后遍历右子树。在遍历左右子树时，仍然先遍历左子树，再访问根结点，最后遍历右子树
//后序遍历：首先遍历左子树，然后遍历右子树，最后遍历根结点。在遍历左右子树时，仍然先遍历左子树，然后遍历右子树，最后遍历根结点
//深度优先搜索:顾名思义，查找时深度优先，从根结点访问最远的节点知道找到所有节点。前序，中序和后序遍历都是深度优先遍历的特例
//广度优先搜索；广度优先遍历会先访问离根结点最近的节点，二叉树的广度优先遍历又称层次遍历。算法借助队列实现


//二叉树的声明
const node = function(element){
	this.element = element;
	this.left = null;
	this.right = null;
}


//前序遍历
let order = '';
const hlr = function(node) {
	if(!node) return;
	order += `${order.element},`;
	hlr(node.left);
	hlr(node.right);
}  

const preOrder = function(root){
	hlr(root);
	order = order.slice(0,order.length-1); 
	return order
} 

//中序遍历
let inOrder = '';
const lhr = function(node) {
	if(!node) return;
	lhr(node.left)
	inOrder += `${node.element},`
	lhr(node.right)
}

const inOrderFun = function(root){
	lhr(root);
	inOrder = inOrder.slice(0,inOrder.length -1)
	return inOrder
}

//后序遍历
let lastOrder = '';
const lrh = function(node) {
	if(!node) return; 
	lrh(node.left);
	lrh(node.right);
	lastOrder += `${node.element},`
}
const lastOrderFun = function(root){
	lrh(root);
	lastOrder = lastOrder.slice(0,lastOrder.length-1);
	return lastOrder
}

//层次遍历
const  levelOrder = function(root) {
	if(!root) return '';
	let a = [],left,right;
	a.push(root);
	//节点入队，指针指向头部元素，如果它有left/right入队。
	//指针后移，继续同步步骤。直至指针跑到队列尾部后面去。
	for(let i = 0; i<a.length; i++) {
		left = a[i].left;
		if(left) a.push(left);
		right = a[i].right;
		if(right) a.push(right)
	}
	return a.map(item=>item.val).join(',')
}

//二叉查找树：任意一个节点的左子树都小于该节点，其右子树都大于该节点的二叉树

//查找操作：先和根结点的值比较，如果相等，就找到了，如果要查找的值比根结点小，就在左子树中递归查找，如果比根结点大，就在右子树中递归查找。

const findNode = function(root,ele) {
	let p = root;
	while(p){
		if(ele === p.element) {
			return p
		}else if (ele < p.element) {
			p = p.left
		}else {
			p = p.right
		}
	}
	return null //没有该节点值
}

//插入操作: 从根结点开始，比较要插入的数据和节点的大小关系。如果要插入的数据比当前节点的数据大，且右子树为空，就作为该节点的右子节点；如果右子树不为空，就继续递归右子树。小则反之

const insert = function(root,ele) {
	let node = new node(ele)
	if(!root) return root = node;
	let p = root;
	while(p) {
		if(ele < p.element) {
			if(!p.left){
				p.left = node
				return inOrder(p)
			}
			p = p.left
		}else if(ele > p.element){
			if(!p.right){
				p.right = node
				return inOrder(p)
			}
			 p = p.right
		}else{
			console.log('该二叉树含有相同值得数据，无法插入')
			return false
		}
	}
}

//删除操作：1：删除的节点没有子节点->直接更新父节点指向其的指针为null;2:要删除的节点只有一个子节点->父节点中指向要删除的节点的指针，更新为要删除节点的那个子节点；
//3:要删除的节点有两个节点:找到右子树中的最小节点(一般是叶子节点)，替换到要删除的节点上。(当然也可以选择左子树的最大节点)
const remove = function(root,ele) {
	//假设二叉树没有重复数据
	let p = root;
	let parent, dir;  //暂不考虑只有根结点一个的情况
	while(p) {
		if(ele == p.element){
			// 要删除的节点没有子节点
			if(!p.left && !p.right){
				parent[dir] = null;
				return true
			}
			//要删除的节点只有一个子节点
			else if(!p.left && p.right){
				parent[dir] = p.right;
				console.log('只有右节点');
				return true
			}else if(!p.left && p.right){
				parent[dir] = p.left;
				console.log('只有左节点')
				return true
			}

			//要删除的节点有两个子节点
			//可以将右子树的最小节点替换到被删除的节点位置，并删除这个最小节点
			//当然也可以在左子树找最大节点
			else if(p.left && p.right) {
				//找出最小节点minP
				let minParent, minP = p;
				while(minP) {
					if(!minP.left){
						break;
					}
					minParent = minP;
					minP = minP.left;
				}
				//第二步：替换(把数据移过去)
				p.element = minP.element;

				//第三部：删除最小节点
				if(!minP.right){
					minParent.left = null;
					console.log('最小节点没有子节点')
					return true;
				}else if(minP.right){
					minParent.left = minP.right;
					console.log('最小节点只有右节点')
					return true
				}
			}

			return p;

		}
		//继续找要删除的节点
		else {
			parent = p;
			if(ele < p.element) {
				p = p.left;
				dir = 'left';
			}else {
				p = p.right;
				dir = 'right';
			}
		}
	}
	return null;
}

