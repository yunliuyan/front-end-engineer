const intro = {
	title: '简介',
	content: [
		'React Router是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。',
		'为了向你说明React Router解决的问题，让我们先来创建一个不使用它的应用。所有文档中的实例代码都回使用ES6/ES2015语法和语言特性。'
	],
	children: [
		{
			title: '不使用React Router',
			content: [
				{
					beforeCodeContent: [],
					code: `
import React from 'react'
import { render } from 'react-dom'
					
const About = React.createClass({/*...*/})
const Inbox = React.createClass({/*...*/})
const Home = React.createClass({/*...*/})

const App = React.createClass({
	getInitialState() {
		return {
		  route: window.location.hash.substr(1)
		}
	},

	componentDidMount() {
	  window.addEventListener('hashchange', () => {
	    this.setState({
	      route: window.location.hash.substr(1)
	    })
	  })
	},

	render() {
		let Child
		switch (this.state.route) {
		  case '/about': Child = About; break;
		  case '/inbox': Child = Inbox; break;
		  default:  Child = Home;
		}

		return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
})

React.render(<App />, document.body)`,
					afterCodeContent: [
						'当URL的hash部分(指的是#后的部分)变化后，App组件会根据this.state.route来渲染不同的<child>。看起来很直接，但它很快就会变得复杂起来。'
					]
				},
				{
					beforeCodeContent: [
						'现在设想一下 Inbox 下面嵌套一些分别对应于不同 URL 的 UI 组件，就像下面这样的列表-详情视图：'
					],
					code: `
		path: /inbox/messages/1234

		+---------+------------+------------------------+
		| About   |    Inbox   |                        |
		+---------+            +------------------------+
		| Compose    Reply    Reply All    Archive      |
		+-----------------------------------------------+
		|Movie tomorrow|                                |
		+--------------+   Subject: TPS Report          |
		|TPS Report        From:    boss@big.co         |
		+--------------+                                |
		|New Pull Reque|   So ...                       |
		+--------------+                                |
		|...           |                                |
		+--------------+--------------------------------+
					`,
					afterCodeContent: []
				},
				{
					beforeCodeContent: [
						'还可能有一个状态页，用于在没有选择 message 时展示：'
					],
					code: `
		path: /inbox

		+---------+------------+------------------------+
		| About   |    Inbox   |                        |
		+---------+            +------------------------+
		| Compose    Reply    Reply All    Archive      |
		+-----------------------------------------------+
		|Movie tomorrow|                                |
		+--------------+   10 Unread Messages           |
		|TPS Report    |   22 drafts                    |
		+--------------+                                |
		|New Pull Reque|                                |
		+--------------+                                |
		|...           |                                |
		+--------------+--------------------------------+
					`,
					afterCodeContent: ['为了让我们的 URL 解析变得更智能，我们需要编写很多代码来实现指定 URL 应该渲染哪一个嵌套的 UI 组件分支：App -> About, App -> Inbox -> Messages -> Message, App -> Inbox -> Messages -> Stats，等等。']
				}
			]
		},
		{
			title: '使用 React Router 后',
			content: [
				{
					beforeCodeContent: ['让我们用 React Router 重构这个应用。'],
					code: 
`
import React from 'react'
import { render } from 'react-dom'

// 首先我们需要导入一些组件...
import { Router, Route, Link } from 'react-router'

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
          接着用 'this.props.children' 替换 '<Child>'
          router 会帮我们找到这个 children
        */}
        {this.props.children}
      </div>
    )
  }
})

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.body)
`,
					afterCodeContent: [
						'React Router 知道如何为我们搭建嵌套的 UI，因此我们不用手动找出需要渲染哪些 <Child> 组件。举个例子，对于一个完整的 /about 路径，React Router 会搭建出 <App><About /></App>。'
					]
				},
				{
					beforeCodeContent: ['在内部，router 会将你树级嵌套格式的 <Route> 转变成路由配置。但如果你不熟悉 JSX，你也可以用普通对象来替代：'],
					code: 
`
const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'inbox', component: Inbox },
  ]
}

React.render(<Router routes={routes} />, document.body)
`,
					afterCodeContent: [
					]
				},
			]
		},
		{
			title: '添加更多的 UI',
			content: [
				{
					beforeCodeContent: ['好了，现在我们准备在 inbox UI 内嵌套 inbox messages。'],
					code: 
`
// 新建一个组件让其在 Inbox 内部渲染
const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {/* 渲染这个 child 路由组件 */}
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        {/* 添加一个路由，嵌套进我们想要嵌套的 UI 里 */}
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
`,
					afterCodeContent: [
					]
				},
				{
					beforeCodeContent: ['现在访问 URL inbox/messages/Jkei3c32 将会匹配到一个新的路由，并且它成功指向了 App -> Inbox -> Message 这个 UI 的分支。'],
					code: 
`
<App>
  <Inbox>
    <Message params={ {id: 'Jkei3c32'} } />
  </Inbox>
</App>
`,
					afterCodeContent: []
				},
			]
		},
		{
			title: '获取 URL 参数',
			content: [
				{
					beforeCodeContent: ['为了从服务器获取 message 数据，我们首先需要知道它的信息。当渲染组件时，React Router 会自动向 Route 组件中注入一些有用的信息，尤其是路径中动态部分的参数。我们的例子中，它指的是 :id。'],
					code: 
`
const Message = React.createClass({

  componentDidMount() {
    // 来自于路径 '/inbox/messages/:id'
    const id = this.props.params.id

    fetchMessage(id, function (err, message) {
      this.setState({ message: message })
    })
  },

  // ...

})
`,
					afterCodeContent: [
						'你也可以通过 query 字符串来访问参数。比如你访问 /foo?bar=baz，你可以通过访问 this.props.location.query.bar 从 Route 组件中获得 "baz" 的值。',
						'这就是 React Router 的奥秘。应用的 UI 以盒子中嵌套盒子的方式来表现；然后你可以让这些盒子与 URL 始终保持同步，而且很容易地把它们链接起来。',
						'这个关于 路由配置 的文档深入地描述了 router 的功能。'
					]
				},
			]
		},
	]
}

export default intro;