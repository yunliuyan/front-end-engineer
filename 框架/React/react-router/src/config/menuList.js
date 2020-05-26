const menuArray = [
	{
		key: '1',
		title: '配置',
		router: '/base_setting'
	},
	{
		key: 'api',
		title: 'API 文档',
		children: [
			{
				key: 'component',
				title: '组件',
				children: [
					{
						key: '2',
						title: 'Router',
					},
					{
						key: '3',
						title: 'Link',
					},
					{
						key: '4',
						title: 'IndexLink',
					},
					{
						key: '5',
						title: 'RoutingContext',
					},
				],
			},
			{
				key: 'componentSetting',
				title: '组件的配置',
				children: [
					{
						key: '6',
						title: 'Route'
					},
					{
						key: '7',
						title: 'PlainRoute'
					},
					{
						key: '8',
						title: 'Redirect'
					},
					{
						key: '9',
						title: 'IndexRoute'
					},
					{
						key: '10',
						title: 'IndexRedirect'
					}
				]
			},
			{
				key: 'routeComponent',
				title: 'Route 组件',
				children: [
					{
						key: '11',
						title: '已命名的组件'
					},
				]
			},
			{
				key: 'mixins',
				title: 'Mixins',
				children: [
					{
						key: '12',
						title: '生命周期'
					},
					{
						key: '13',
						title: 'History'
					},
					{
						key: '14',
						title: 'RouteContext'
					},
				]
			},
			{
				key: 'utilities',
				title: 'Utilities',
				children: [
					{
						key: '15',
						title: 'useRoutes'
					},
					{
						key: '16',
						title: 'match'
					},
					{
						key: '17',
						title: 'createRoutes'
					},
					{
						key: '18',
						title: 'PropTypes'
					},
				]
			}
		],
	},
]

export default menuArray;