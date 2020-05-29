const utilities = {
	title: 'API 文档-Utilities',
	content: [],
	children: [
		{
			title: 'useRoutes(createHistory)',
			content: [
				{
					beforeCodeContent: [
						'返回一个新的 createHistory 函数，它可以用来创建读取 route 的 history 对象。',
						'1:listen((error, nextState) => {})',
						'2:listenBeforeLeavingRoute(route, (nextLocation) => {})',
						'3:match(location, (error, redirectLocation, nextState) => {})',
						'4:isActive(pathname, query, indexOnly=false)',
					],
					code:'',
					afterCodeContent: [],
				}
			]
		},
		{
			title: 'match(location, cb)',
			content: [
				{
					beforeCodeContent: [
						'这个函数被用于服务端渲染。它在渲染之前会匹配一组 route 到一个 location，并且在完成时调用 callback(error, redirectLocation, renderProps)。',
						'传给回调函数去 match 的三个参数如下：',
						'1:error：如果报错时会出现一个 Javascript 的 Error 对象，否则是 undefined。',
						'2:redirectLocation：如果 route 重定向时会有一个 Location 对象，否则是 undefined。',
						'3:renderProps：当匹配到 route 时 props 应该通过路由的 context，否则是 undefined。',
						'如果这三个参数都是 undefined，这就意味着在给定的 location 中没有 route 被匹配到。',
						{
							note: '注意：你可能不想在浏览器中用它，除非你做的是异步 route 的服务端渲染。'
						}
					],
					code:'',
					afterCodeContent: [],
				}
			]
		},
		{
			title: 'createRoutes(routes)',
			content: [
				{
					beforeCodeContent: [
						'创建并返回一个从给定对象 route 的数组，它可能是 JSX 的 route，一个普通对象的 route，或是其他的数组。',
						{
							title: 'routes',
							desc: '一个或多个的 Route 或 PlainRoute。'
						}
					],
					code:'',
					afterCodeContent: [],
				}
			]
		},
		{
			title: 'PropTypes',
			content: [
				{
					beforeCodeContent: [
						'敬请期待！',
					],
					code:'',
					afterCodeContent: [],
				}
			]
		},
	]
}

export default utilities;