const palin = {
	title: 'API 文档-PlainRoute组件',
	content: [],
	children: [
		{
			title: 'PlainRoute',
			content: [
				{
					beforeCodeContent: ['route 定义的一个普通的 JavaScript 对象。 Router 把 JSX 的 <Route> 转化到这个对象中，如果你喜欢，你可以直接使用它们。 所有的 props 都和 <Route> 的 props 一样，除了那些列在这里的。'],
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
						  title: 'childRoutes',
							desc: '子 route 的一个数组，与在 JSX route 配置中的 children 一样',
						},
						{
							title: 'getChildRoutes(location, callback)',
							desc: '与 childRoutes 一样，但是是异步的，并且可以接收 location。对于 code-splitting 和动态路由匹配很有用（给定一些 state 或 session 数据会返回不同的子 route）'
						},
						{
							title: 'callback signature',
							desc: 'cb(err, routesArray)',
							code: 
`
let myRoute = {
  path: 'course/:courseId',
  childRoutes: [
    announcementsRoute,
    gradesRoute,
    assignmentsRoute
  ]
}

// 异步的子 route
let myRoute = {
  path: 'course/:courseId',
  getChildRoutes(location, cb) {
    // 做一些异步操作去查找子 route
    cb(null, [ announcementsRoute, gradesRoute, assignmentsRoute ])
  }
}

// 可以根据一些 state
// 跳转到依赖的子 route
<Link to="/picture/123" state={{ fromDashboard: true }}/>

let myRoute = {
  path: 'picture/:id',
  getChildRoutes(location, cb) {
    let { state } = location

    if (state && state.fromDashboard) {
      cb(null, [dashboardPictureRoute])
    } else {
      cb(null, [pictureRoute])
    }
  }
}
`,
						},
						{
							title: 'getIndexRoute(location, callback)',
							desc: `与 indexRoute 一样，但是是异步的，并且可以接收 location。与 getChildRoutes 一样，对于 code-splitting 和动态路由匹配很有用`,
						},
						{
							title: 'cb(err, components)',
							desc:'callback signature',
							code: 
`
// 例如：
let myIndexRoute = {
  component: MyIndex
}

let myRoute = {
  path: 'courses',
  indexRoute: myIndexRoute
}

// 异步的 index route
let myRoute = {
  path: 'courses',
  getIndexRoute(location, cb) {
    // 做一些异步操作
    cb(null, myIndexRoute)
  }
} 
`
						},
			    ],
					code: '',
					afterCodeContent: [

					],
				}
			]
		},
	]
}

export default palin