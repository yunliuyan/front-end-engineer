const menuArray = [
	{
		key: '1',
		title: '简介',
		router: '/brief_introduction'
	},
	{
		key: 'setting',
		title: '基础',
		children: [
			{
				key: '14',
				title: '路由配置',
				router: '/router_setting'
			},
			{
				key: '15',
				title: '路由匹配原理',
				router: '/route_matching_principle'
			},
			{
				key: '16',
				title: 'History',
				router: '/route_histories'
			},
			{
				key: '17',
				title: '默认路由（IndexRoute）与 IndexLink',
				router: '/index_route'
			}
		]
	},
	{
		key: 'using',
		title: '高级用法',
		children: [
			{
				key: '18',
				title: '动态路由',
				router: '/dynamic_routing'
			},
			{
				key: '19',
				title: '跳转前确认',
				router: '/confirm_before_jump'
			},
			{
				key: '20',
				title: '服务端渲染',
				router: '/server_rendering'
			},
			{
				key: '21',
				title: '组件生命周期',
				router: '/component_life_cycle'
			},
			{
				key: '22',
				title: '在组件外部使用导航',
				router: '/outside_component_navigaton'
			}
		]
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
						router: '/component_router'
					},
					{
						key: '3',
						title: 'Link',
						router: '/component_link'
					},
					{
						key: '4',
						title: 'IndexLink',
						router: '/component_index_link'
					},
					{
						key: '5',
						title: 'RoutingContext',
						router: '/component_routing_context'
					},
				],
			},
			{
				key: 'componentSetting',
				title: '组件的配置',
				children: [
					{
						key: '6',
						title: 'Route',
						router: '/component_route'
					},
					{
						key: '7',
						title: 'PlainRoute',
						router: '/component_plain_route'
					},
					{
						key: '8',
						title: 'Redirect',
						router: '/component_redirect'
					},
					{
						key: '9',
						title: 'IndexRoute',
						router: '/component_index_route'
					},
					{
						key: '10',
						title: 'IndexRedirect',
						router: '/component_index_redirect'
					}
				]
			},
			{
				key: 'routeComponent',
				title: 'Route 组件',
				children: [
					{
						key: '11',
						title: '已命名的组件',
						router: '/component_route_components'
					},
				]
			},
			{
				key: 'mixins',
				title: 'Mixins',
				children: [
					{
						key: '12',
						title: 'Mixins',
						router: '/component_mixin'
					},
				]
			},
			{
				key: 'utilities',
				title: 'Utilities',
				children: [
					{
						key: '13',
						title: 'Utilities',
						router: '/component_utilities'
					}
				]
			}
		],
	},
]

export default menuArray;