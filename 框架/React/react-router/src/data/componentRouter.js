const router = {
	title: 'API 文档-Router组件',
	content: [],
	children: [
		{
			title: 'Router',
			content: [
				{
					beforeCodeContent: ['React Router 的重要组件。它能保持 UI 和 URL 的同步。'],
					code:'',
					afterCodeContent: [],
				}
			]
		},
		{
			title: 'Props',
			content: [
				{
					beforeCodeContent: [
						{
							title: 'children (required)',
							desc: '一个或多个的 Route 或 PlainRoute。当 history 改变时， <Router> 会匹配出 Route 的一个分支，并且渲染这个分支中配置的组件，渲染时保持父 route 组件嵌套子 route 组件。',
						},
						{
							title: 'routes',
							desc: 'children 的别名。',
						},
						{
							title: 'history',
							desc: 'Router 监听的 history 对象，由 history 包提供。',
						},
						{
							title: 'createElement(Component, props)',
							desc: '当 route 准备渲染 route 组件的一个分支时，就会用这个函数来创建 element。当你使用某种形式的数据进行抽象时，你可以想要获取创建 element 的控制权，例如在这里设置组件监听 store 的变化，或者使用 props 为每个组件传入一些应用模块。'
						},
					],
					code:
`
<Router createElement={createElement} />

// 默认行为
function createElement(Component, props) {
  // 确保传入了所有的 props！
  return <Component {...props}/>
}

// 你可能会使用什么，如 Relay
function createElement(Component, props) {
  // 确保传入了所有的 props！
  return <RelayContainer Component={Component} routerProps={props}/>
}
`,
					afterCodeContent: [
						{
							title: 'stringifyQuery(queryObject)',
							desc: '一个用于把 Link 或调用 transitionTo 函数的对象转化成 URL query 字符串的函数。',
						},
						{
							title: 'parseQueryString(queryString)',
							desc: '一个用于把 query 字符串转化成对象，并传递给 route 组件 props 的函数。',
						},
						{
							title: 'parseQueryString(queryString)',
							desc: '一个用于把 query 字符串转化成对象，并传递给 route 组件 props 的函数。',
						},
						{
							title: 'onError(error)',
							desc: '当路由匹配到时，也有可能会抛出错误，此时你就可以捕获和处理这些错误。通常，它们会来自那些异步的特性，如 route.getComponents，route.getIndexRoute，和 route.getChildRoutes。',
						},
						{
							title: 'onUpdate()',
							desc: '当 URL 改变时，需要更新路由的 state 时会被调用。'
						},
					],
				}
			]
		},
		{
			title: '示例',
			content: [
				{
					beforeCodeContent: ['请看仓库中的示例目录 examples/，这些例子都广泛使用了 Router。'],
					code:'',
					afterCodeContent: [],
				}
			]
		},
	]
}

export default router;