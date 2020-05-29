const data = {
	title: 'Histories',
	content: [
		'React Router 是建立在 history 之上的。 简而言之，一个 history 知道如何去监听浏览器地址栏的变化， 并解析这个 URL 转化为 location 对象， 然后 router 使用它匹配到路由，最后正确地渲染对应的组件。',
		'常用的 history 有三种形式， 但是你也可以使用 React Router 实现自定义的 history。',
		'1: browserHistory',
		'2: hashHistory',
		'3: createMemoryHistory'
	],
	children: [
		{
			content: [
				{
					beforeCodeContent: [
						{
							title: '',
							desc: '你可以从 React Router 中引入它们：',
							code: 
`
// JavaScript 模块导入（译者注：ES6 形式）
import { browserHistory } from 'react-router'
`
						},
						{
							title: '',
							desc: '然后将它们传递给<Router>:',
							code: 
`
render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
`
						},
						{
							title: 'browserHistory',
							desc: 'Browser history 是使用 React Router 的应用推荐的 history。它使用浏览器中的 History API 用于处理 URL，创建一个像example.com/some/path这样真实的 URL 。'
						}
					],
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
			title: '服务器配置',
			content: [
				{
					beforeCodeContent: [
						'服务器需要做好处理 URL 的准备。处理应用启动最初的 / 这样的请求应该没问题，但当用户来回跳转并在 /accounts/123 刷新时，服务器就会收到来自 /accounts/123 的请求，这时你需要处理这个 URL 并在响应中包含 JavaScript 应用代码。',
						'一个 express 的应用可能看起来像这样的：'
					],
					code:
`
const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

// 通常用于加载静态资源
app.use(express.static(__dirname + '/public'))

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
`,
					afterCodeContent: [
						{
							title: '',
							desc: '如果你的服务器是 nginx，请使用 try_files 指令：',
							code:
`
server {
  ...
  location / {
    try_files $uri /index.html
  }
}
`
						},
						'当在服务器上找不到其他文件时，这可以让 nginx 服务器提供静态文件服务并指向index.html 文件。',
						{
							title: '',
							desc: '对于Apache服务器也有类似的方式，创建一个.htaccess文件在你的文件根目录下：',
							code: 
`
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`
						}
					]
				}
			]
		},
		{
			title: 'IE8, IE9 支持情况',
			content: [
				{
					beforeCodeContent: [
						'如果我们能使用浏览器自带的 window.history API，那么我们的特性就可以被浏览器所检测到。如果不能，那么任何调用跳转的应用就会导致 全页面刷新，它允许在构建应用和更新浏览器时会有一个更好的用户体验，但仍然支持的是旧版的。',
						'你可能会想为什么我们不后退到 hash history，问题是这些 URL 是不确定的。如果一个访客在 hash history 和 browser history 上共享一个 URL，然后他们也共享同一个后退功能，最后我们会以产生笛卡尔积数量级的、无限多的 URL 而崩溃。',
						{
							title: 'hashHistory',
							desc: 'Hash history 使用 URL 中的 hash（#）部分去创建形如 example.com/#/some/path 的路由。'
						}
					],
					code:'',
					afterCodeContent: []
				}
			]
		},
		{
			title: '我应该使用 createHashHistory吗？',
			content: [
				{
					beforeCodeContent: [
						'Hash history 不需要服务器任何配置就可以运行，如果你刚刚入门，那就使用它吧。但是我们不推荐在实际线上环境中用到它，因为每一个 web 应用都应该渴望使用 browserHistory。'
					],
					code:'',
					afterCodeContent: []
				}
			]
		},
		{
			title: '像这样 ?_k=ckuvup 没用的在 URL 中是什么？',
			content: [
				{
					beforeCodeContent: [
						'当一个 history 通过应用程序的 push 或 replace 跳转时，它可以在新的 location 中存储 “location state” 而不显示在 URL 中，这就像是在一个 HTML 中 post 的表单数据。',
						'在 DOM API 中，这些 hash history 通过 window.location.hash = newHash 很简单地被用于跳转，且不用存储它们的location state。但我们想全部的 history 都能够使用location state，因此我们要为每一个 location 创建一个唯一的 key，并把它们的状态存储在 session storage 中。当访客点击“后退”和“前进”时，我们就会有一个机制去恢复这些 location state。',
						{
							title: 'createMemoryHistory',
							desc: 'Memory history 不会在地址栏被操作或读取。这就解释了我们是如何实现服务器渲染的。同时它也非常适合测试和其他的渲染环境（像 React Native ）。',
						},
						{
							title: '',
							desc: '和另外两种history的一点不同是你必须创建它，这种方式便于测试。',
							code:
`
const history = createMemoryHistory(location)
`
						}
					],
					code:'',
					afterCodeContent: []
				}
			]
		},
		{
			title: '实现示例',
			content: [
				{
					beforeCodeContent: [],
					code:
`
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from '../components/App'
import Home from '../components/Home'
import About from '../components/About'
import Features from '../components/Features'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='features' component={Features} />
    </Route>
  </Router>,
  document.getElementById('app')
)
`,
					afterCodeContent: []
				}
			]
		},
	]
}

export default data;