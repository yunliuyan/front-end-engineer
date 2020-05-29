const data = {
	title: '路由配置',
	content: [
		'路由配置是一组指令，用来告诉 router 如何匹配 URL以及匹配后如何执行代码。我们来通过一个简单的例子解释一下如何编写路由配置。',
	],
	children: [
		{
			content: [
				{
					beforeCodeContent: [],
					code: 
`
import React from 'react'
import { Router, Route, Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
`,
					afterCodeContent: [
						{
							title: '',
							desc: '通过上面的配置，这个应用知道如何渲染下面四个 URL：',
							table: {
								columns: [
									{
										title: 'URL',
										dataIndex: 'url',
										key: 'url',
									},
									{
										title: '组件',
										dataIndex: 'component',
										key: 'component',
									},
								],
								data: [
									{
										key: 1,
										url: '/',
										component: 'App'
									},
									{
										key: 2,
										url: '/about',
										component: 'App -> About'
									},
									{
										key: 3,
										url: '/inbox',
										component: 'App -> Inbox'
									},
									{
										key: 4,
										url: '/inbox/messages/:id',
										component: 'App -> Inbox -> Message'
									},
								] 
							}
						}
					]
				},
			]
		},
		{
			title: '添加首页',
			content: [
				{
					beforeCodeContent: ['想象一下当 URL 为 / 时，我们想渲染一个在 App 中的组件。不过在此时，App 的 render 中的 this.props.children 还是 undefined。这种情况我们可以使用 IndexRoute 来设置一个默认页面。'],
					code:
`
import { IndexRoute } from 'react-router'

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      {/* 当 url 为/时渲染 Dashboard */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
`,
					afterCodeContent: [
						'现在，App 的 render 中的 this.props.children 将会是 <Dashboard>这个元素。这个功能类似 Apache 的DirectoryIndex 以及 nginx的 index指令，上述功能都是在当请求的 URL 匹配某个目录时，允许你制定一个类似index.html的入口文件。',
						{
							title: '',
							desc: '我们的 sitemap 现在看起来如下：',
							table: {
								columns: [
									{
										title: 'URL',
										dataIndex: 'url',
										key: 'url',
									},
									{
										title: '组件',
										dataIndex: 'component',
										key: 'component',
									},
								],
								data: [
									{
										key: 1,
										url: '/',
										component: 'App -> Dashboard'
									},
									{
										key: 2,
										url: '/about',
										component: 'App -> About'
									},
									{
										key: 3,
										url: '/inbox',
										component: 'App -> Inbox'
									},
									{
										key: 4,
										url: '/inbox/messages/:id',
										component: 'App -> Inbox -> Message'
									},
								] 
							}
						}
					]
				}
			]
		},
		{
			title: '让 UI 从 URL 中解耦出来',
			content: [
				{
					beforeCodeContent: ['如果我们可以将 /inbox 从 /inbox/messages/:id 中去除，并且还能够让 Message 嵌套在 App -> Inbox 中渲染，那会非常赞。绝对路径可以让我们做到这一点。'],
					code:
`
React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        {/* 使用 /messages/:id 替换 messages/:id */}
        <Route path="/messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
`,
					afterCodeContent: [
						'在多层嵌套路由中使用绝对路径的能力让我们对 URL 拥有绝对的掌控。我们无需在 URL 中添加更多的层级，从而可以使用更简洁的 URL。',
						{
							title: '',
							desc: '我们现在的 URL 对应关系如下：',
							table: {
								columns: [
									{
										title: 'URL',
										dataIndex: 'url',
										key: 'url',
									},
									{
										title: '组件',
										dataIndex: 'component',
										key: 'component',
									},
								],
								data: [
									{
										key: 1,
										url: '/',
										component: 'App -> Dashboard'
									},
									{
										key: 2,
										url: '/about',
										component: 'App -> About'
									},
									{
										key: 3,
										url: '/inbox',
										component: 'App -> Inbox'
									},
									{
										key: 4,
										url: '/inbox/messages/:id',
										component: 'App -> Inbox -> Message'
									},
								] 
							},
							note: '提醒：绝对路径可能在动态路由中无法使用。'
						}
					]
				}
			]
		},
		{
			title: '兼容旧的 URL',
			content: [
				{
					beforeCodeContent: [
						'等一下，我们刚刚改变了一个 URL! 这样不好。 现在任何人访问 /inbox/messages/5 都会看到一个错误页面。:(',
						'不要担心。我们可以使用 <Redirect> 使这个 URL 重新正常工作。'
					],
					code:
`
import { Redirect } from 'react-router'

React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="/messages/:id" component={Message} />

        {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>
    </Route>
  </Router>
), document.body)
`,
					afterCodeContent: [
						'现在当有人点击 /inbox/messages/5 这个链接，他们会被自动跳转到 /messages/5。 :raised_hands:',
					]
				}
			]
		},
		{
			title: '进入和离开的Hook',
			content: [
				{
					beforeCodeContent: [
						'Route 可以定义 onEnter 和 onLeave 两个 hook ，这些hook会在页面跳转确认时触发一次。这些 hook 对于一些情况非常的有用，例如权限验证或者在路由跳转前将一些数据持久化保存起来。',
						'在路由跳转过程中，onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束。然后onEnter hook会从最外层的父路由开始直到最下层子路由结束。',
						'继续我们上面的例子，如果一个用户点击链接，从 /messages/5 跳转到 /about，下面是这些 hook 的执行顺序：',
						'1: /messages/:id 的 onLeave',
						'2: /inbox 的 onLeave',
						'3: /about 的 onEnter'
					],
					code:'',
					afterCodeContent: []
				}
			]
		},
		{
			title: '替换的配置方式',
			content: [
				{
					beforeCodeContent: [
						'因为 route 一般被嵌套使用，所以使用 JSX 这种天然具有简洁嵌套型语法的结构来描述它们的关系非常方便。然而，如果你不想使用 JSX，也可以直接使用原生 route 数组对象。',
						{
							title: '',
							desc: '上面我们讨论的路由配置可以被写成下面这个样子：',
							code:
`
const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'inbox',
        component: Inbox,
        childRoutes: [
          { path: '/messages/:id', component: Message },
          { path: 'messages/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]

React.render(<Router routes={routeConfig} />, document.body)
`
						}
					],
					code:'',
					afterCodeContent: []
				}
			]
		},
	]
}

export default data;