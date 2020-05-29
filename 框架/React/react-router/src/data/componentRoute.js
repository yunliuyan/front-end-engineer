const route = {
	title: 'API 文档-Route组件',
	content: [],
	children: [
		{
			title: 'Route',
			content: [
				{
					beforeCodeContent: ['Route 是用于声明路由映射到应用程序的组件层。'],
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
						  title: 'path',
							desc: 'URL 中的路径。它会组合父 route 的路径，除非它是从 / 开始的， 将它变成一个绝对路径',
							note: '注意：在动态路由中，绝对路径可能不适用于 route 配置中。'
						},
						'如果它是 undefined，路由会去匹配子 route。',
						{
							title: 'component',
							desc: '当匹配到 URL 时，单个的组件会被渲染。它可以 被父 route 组件的 this.props.children 渲染。',
							code: 
`
const routes = (
  <Route component={App}>
    <Route path="groups" component={Groups}/>
    <Route path="users" component={Users}/>
  </Route>
)

class App extends React.Component {
  render () {
    return (
      <div>
        {/* 这会是 <Users> 或 <Groups> */}
        {this.props.children}
      </div>
    )
  }
}
`,
						},
						{
							title: 'components',
							desc: 'Route 可以定义一个或多个已命名的组件，当路径匹配到 URL 时， 它们作为 name:component 对的一个对象去渲染。它们可以被 父 route 组件的 this.props[name] 渲染。',
							code:
`
// 想想路由外部的 context — 如果你可拔插
// 'render' 的部分，你可能需要这么做：
// <App main={<Users />} sidebar={<UsersSidebar />} />

const routes = (
  <Route component={App}>
    <Route path="groups" components={{main: Groups, sidebar: GroupsSidebar}}/>
    <Route path="users" components={{main: Users, sidebar: UsersSidebar}}>
      <Route path="users/:userId" component={Profile}/>
    </Route>
  </Route>
)

class App extends React.Component {
  render () {
    const { main, sidebar } = this.props
    return (
      <div>
        <div className="Main">
          {main}
        </div>
        <div className="Sidebar">
          {sidebar}
        </div>
      </div>
    )
  }
}

class Users extends React.Component {
  render () {
    return (
      <div>
        {/* 当路径是 "/users/123" 是 'children' 会是 <Profile> */}
        {/* UsersSidebar 也可以获取作为 this.props.children 的 <Profile> ，
            所以这有点奇怪，但你可以决定哪一个可以
            继续这种嵌套 */}
        {this.props.children}
      </div>
    )
  }
}
`,
						},
						{
							title: 'getComponent(location, callback)',
							desc:'与 component 一样，但是是异步的，对于 code-splitting 很有用。'
						},
						{
							title: 'cb(err, components)',
							desc:'callback signature',
							code: 
`
<Route path="courses/:courseId" getComponent={(location, cb) => {
  // 做一些异步操作去查找组件
  cb(null, {sidebar: CourseSidebar, content: Course})
}}/>
`
						},
						{
							title: 'children',
							desc: 'Route 可以被嵌套，this.props.children 包含了从子 route 组件创建的元素。由于这是路由设计中非常重要的部分，请参考 Route 配置。'
						},
						{
							title: 'onEnter(nextState, replaceState, callback?)',
							desc: `当 route 即将进入时调用。它提供了下一个路由的 state，一个函数重定向到另一个路径。this 会触发钩子去创建 route 实例。
							当 callback 作为函数的第三个参数传入时，这个钩子将是异步执行的，并且跳转会阻塞直到 callback 被调用`,
						},
						{
							title: 'onLeave()',
							desc: '当 route 即将退出时调用。'
						}
			    ],
					code: '',
					afterCodeContent: [

					],
				}
			]
		},
	]
}

export default route