const data = {
	title: '路由匹配原理',
	content: [
		'路由拥有三个属性来决定是否“匹配“一个 URL：',
		'1: 嵌套关系',
		'2: 它的 路径语法',
		'3: 它的 优先级'
	],
	children: [
		{
			title: '嵌套关系',
			content: [
				{
					beforeCodeContent: [
						'React Router 使用路由嵌套的概念来让你定义 view 的嵌套集合，当一个给定的 URL 被调用时，整个集合中（命中的部分）都会被渲染。嵌套路由被描述成一种树形结构。React Router 会深度优先遍历整个路由配置来寻找一个与给定的 URL 相匹配的路由。'
					],
					code: '',
					afterCodeContent: [
					]
				},
			]
		},
		{
			title: '路径语法',
			content: [
				{
					beforeCodeContent: [
						'路由路径是匹配一个（或一部分）URL 的 一个字符串模式。大部分的路由路径都可以直接按照字面量理解，除了以下几个特殊的符号：',
						'1: :paramName – 匹配一段位于 /、? 或 # 之后的 URL。 命中的部分将被作为一个参数',
						'2: () – 在它内部的内容被认为是可选的',
						'3: * – 匹配任意字符（非贪婪的）直到命中下一个字符或者整个 URL 的末尾，并创建一个 splat 参数'
					],
					code:
`
<Route path="/hello/:name">         // 匹配 /hello/michael 和 /hello/ryan
<Route path="/hello(/:name)">       // 匹配 /hello, /hello/michael 和 /hello/ryan
<Route path="/files/*.*">           // 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg
`,
					afterCodeContent: [
						'如果一个路由使用了相对路径，那么完整的路径将由它的所有祖先节点的路径和自身指定的相对路径拼接而成。使用绝对路径可以使路由匹配行为忽略嵌套关系。',
					]
				}
			]
		},
		{
			title: '优先级',
			content: [
				{
					beforeCodeContent: ['最后，路由算法会根据定义的顺序自顶向下匹配路由。因此，当你拥有两个兄弟路由节点配置时，你必须确认前一个路由不会匹配后一个路由中的路径。例如，千万不要这么做：'],
					code:
`
<Route path="/comments" ... />
<Redirect from="/comments" ... />
`,
					afterCodeContent: []		
				}
			]
		},
	]
}

export default data;