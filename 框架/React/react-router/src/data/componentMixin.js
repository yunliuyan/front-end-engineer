const mixin = {
	title: 'API 文档-Mixins',
	content: [],
	children: [
		{
			title: '生命周期 Mixin',
			content: [
				{
					beforeCodeContent: [
						'在组件中添加一个钩子，当路由要从 route 组件的配置中跳转出来时被调用，并且有机会去取消这次跳转。主要用于表单的部分填写。',
						'在常规的跳转中， routerWillLeave 会接收到一个单一的参数：我们正要跳转的 location。去取消此次跳转，返回 false。',
						'提示用户确认，返回一个提示信息（字符串）。在 web 浏览器 beforeunload 事件发生时，routerWillLeave 不会接收到一个 location 的对象（假设你正在使用 useBeforeUnload history 的增强方法）。在此之上，我们是不可能知道要跳转的 location，因此 routerWillLeave 必须在用户关闭标签之前返回一个提示信息。'
					],
					code:'',
					afterCodeContent: [],
				}
			]
		},
		{
			title: '生命周期方法',
			content: [
				{
					beforeCodeContent: [
						{
						  title: 'routerWillLeave(nextLocation)',
							desc: '当路由尝试从一个 route 跳转到另一个并且渲染这个组件时被调用。',
						},
						{
							title: 'arguments',
							desc: 'nextLocation - 下一个 location'
						},
			    ],
					code: '',
					afterCodeContent: [

					],
				}
			]
		},
		{
			title: 'History Mixin',
			content: [
				{
					beforeCodeContent: [
						'在组件中添加路由的 history 对象。',
						'注意：你的 route components 不需要这个 mixin，它在 this.props.history 中已经是可用的了。这是为了组件更深次的渲染树中需要访问路由的 history 对象。'
			    ],
					code: '',
					afterCodeContent: [

					],
				}
			]
		},
		{
			title: 'Methods',
			content: [
				{
					beforeCodeContent: [
						{
							title: 'pushState(state, pathname, query)',
							desc: '跳转至一个新的 URL。'
						},
						'arguments',
						'state - location 的 state。',
						'pathname - 没有 query 完整的 URL。',
						'query - 通过路由字符串化的一个对象。',
						{
							title: 'replaceState(state, pathname, query)',
							desc: '在不影响 history 长度的情况下（如一个重定向），用新的 URL 替换当前这个。'
						},
						'参数',
						'state - location 的 state',
						'pathname - 没有 query 完整的 URL。',
						'query - 通过路由字符串化的一个对象。',
						{
							title: 'go(n)',
							desc: '在 history 中使用 n 或 -n 进行前进或后退'
						},
						{
							title: 'goBack()',
							desc: '在 history 中后退。'
						},
						{
							title: 'goForward()',
							desc: '在 history 中前进。'
						},
						{
							title: 'createPath(pathname, query)',
							desc: '使用路由配置，将 query 字符串化加到路径名中。'
						},
						{
							title: 'createHref(pathname, query)',
							desc: '使用路由配置，创建一个 URL。例如，它会在 pathname 的前面加上 #/ 给 hash history。'
						},
						{
							title: 'isActive(pathname, query, indexOnly)',
							desc: '根据当前路径是否激活返回 true 或 false。通过 pathname 匹配到 route 分支下的每个 route 将会是 true（子 route 是激活的情况下，父 route 也是激活的），除非 indexOnly 已经指定了，在这种情况下，它只会匹配到具体的路径。'
						},
						'参数',
						'pathname - 没有 query 完整的 URL。',
						'query - 如果没有指定，那会是一个包含键值对的对象，并且在当前的 query 中是激活状态的 - 在当前的 query 中明确是 undefined 的值会丢失相应的键或 undefined',
						'indexOnly - 一个 boolean（默认：false）。',
						'示例'
			    ],
					code: 
`
import { History } from 'react-router'

React.createClass({
  mixins: [ History ],
  render() {
    return (
      <div>
        <div onClick={() => this.history.pushState(null, '/foo')}>Go to foo</div>
        <div onClick={() => this.history.replaceState(null, 'bar')}>Go to bar without creating a new history entry</div>
        <div onClick={() => this.history.goBack()}>Go back</div>
     </div>
   )
 }
})
`,
					afterCodeContent: [
						{
							title: '',
							desc: '假设你正在使用 bootstrap，并且在 Tab 中想让那些 li 获得 active：',
							code:
`
import { Link, History } from 'react-router'

const Tab = React.createClass({
  mixins: [ History ],
  render() {
    let isActive = this.history.isActive(this.props.to, this.props.query)
    let className = isActive ? 'active' : ''
    return <li className={className}><Link {...this.props}/></li>
  }
})

// 如 <Link/> 一样使用它，你会得到一个包进 'li' 的锚点
// 并且还有一个自动的 'active' class。
<Tab href="foo">Foo</Tab>
`
						}
					],
				}
			]
		},
		{
			title: '但我仍然在使用 Classes',
			content: [
				{
					beforeCodeContent: [
						'在应用中少数组件由于 History mixin 的缘故而用得不爽，此时有以下几个选项：',
						'1:让 this.props.history 通过 route 组件到达需要它的组件中。',
						'2:使用 context'
			    ],
					code: 
`
import { PropTypes } from 'react-router'

class MyComponent extends React.Component {
  doStuff() {
    this.context.history.pushState(null, '/some/path')
  }
}

MyComponent.contextTypes = { history: PropTypes.history }
`,
					afterCodeContent: [
						'3:确保你的 history 是一个 module',
						{
							title: '',
							desc: '4: 创建一个高阶的组件，我们可能用它来结束跳转和阻止 history，只是没有时间去思考所有的方法。',
							code:
`
function connectHistory(Component) {
  return React.createClass({
    mixins: [ History ],
    render() {
      return <Component {...this.props} history={this.history} />
    }
  })
}

// 其他文件
import connectHistory from './connectHistory'

class MyComponent extends React.Component {
  doStuff() {
    this.props.history.pushState(null, '/some/where')
  }
}

export default connectHistory(MyComponent)
`
						}
					],
				}
			]
		},
		{
			title: 'RouteContext Mixin',
			content: [
				{
					beforeCodeContent: [
						'RouteContext mixin 提供了一个将 route 组件设置到 context 中的便捷方法。这对于 route 渲染元素并且希望用 生命周期 mixin 来阻止跳转是很有必要的。',
						'简单地将 this.context.route 添加到组件中。',
					],
					code:'',
					afterCodeContent: [],
				}
			]
		},
	]
}

export default mixin