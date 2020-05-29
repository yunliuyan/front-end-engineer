import React from 'react'

const camelToUnderline = function(str) {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};

const getRouters = function(files, entryPath) {
	if(!~entryPath.indexOf('@/')) {
		return new Error('需要传绝对路径哦~')
	}
	// require.context不支持动态路径，只能从外部取完传进来
	// import不允许插值中包含@，会失效
	
	const relativePath = entryPath.slice(2);
	const routes = [];
	files.keys().forEach(item => {
		let path = item.slice(1);
		item = item.slice(2).split('/')[item.slice(2).split('/').length-2];
		routes.push({name: item, path: `/${camelToUnderline(item)}`, instance: React.lazy(() => import(`@/${relativePath}${path}`))})
	});
	return routes
};

export{
	camelToUnderline,
	getRouters
}