const routeComponents = {
	title: 'API 文档-RouteComponents',
	content: [],
	children: [
		{
			title: 'Route Components',
			content: [
				{
					beforeCodeContent: [
						'当 route 匹配到 URL 时会渲染一个 route 的组件。路由会在渲染时将以下属性注入组件中：',
						{
							title: 'history',
							desc: 'Router 的 history history。'
						},
						'对于跳转很有用的 this.props.history.pushState(state, path, query)',
						{
							title: 'location',
							desc: '当前的 location。'
						},
						{
							title: 'params',
							desc: 'URL 的动态段。'
						},
						{
							title: 'route',
							desc: '渲染组件的 route。'
						},
						{
							title: 'routeParams',
							desc: `this.props.params 是直接在组件中指定 route 的一个子集。例如，如果 route 的路径是 users/:userId 而 URL 是 /users/123/portfolios/345，那么 this.props.routeParams 会是 {userId: '123'}，并且 this.props.params 会是 {userId: '123', portfolioId: 345}。`
						},
						{
							title: 'children',
							desc: '匹配到子 route 的元素将被渲染。如果 route 有已命名的组件，那么此属性会是 undefined，并且可用的组件会被直接替换到 this.props 上。'
						}
					],
					code:'',
					afterCodeContent: [],
				},
			]
		},
		{
			title: '示例',
			content: [
				{
					beforeCodeContent: [
					],
					code: 
`
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="groups" component={Groups} />
      <Route path="users" component={Users} />
    </Route>
  </Router>
), node)

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 这可能是 <Users> 或 <Groups> */}
        {this.props.children}
      </div>
    )
  }
}
`,
					afterCodeContent: [],
				}
			]
		},
		{
			title: '已命名的组件',
			content: [
				{
					beforeCodeContent: [
						'当一个 route 有一个或多个已命名的组件时，其子元素的可用性是通过 this.props 命名的。因此 this.props.children 将会是 undefined。那么所有的 route 组件都可以参与嵌套。',
						'示例'
					],
					code: 
`
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="groups" components={{main: Groups, sidebar: GroupsSidebar}} />
      <Route path="users" components={{main: Users, sidebar: UsersSidebar}}>
        <Route path="users/:userId" component={Profile} />
      </Route>
    </Route>
  </Router>
), node)

class App extends React.Component {
  render() {
    // 在父 route 中，被匹配的子 route 变成 props
    return (
      <div>
        <div className="Main">
          {/* 这可能是 <Groups> 或 <Users> */}
          {this.props.main}
        </div>
        <div className="Sidebar">
          {/* 这可能是 <GroupsSidebar> 或 <UsersSidebar> */}
          {this.props.sidebar}
        </div>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        {/* 如果在 "/users/123" 路径上这会是 <Profile> */}
        {/* UsersSidebar 也会获取到作为 this.props.children 的 <Profile> 。
            你可以把它放这渲染 */}
        {this.props.children}
      </div>
    )
  }
}
`,
					afterCodeContent: [],
				}
			]
		},
	]
}

export default routeComponents;