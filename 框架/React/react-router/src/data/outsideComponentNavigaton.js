const data = {
	title: '在组件外部使用导航',
	content: [],
	children: [
		{
			title: '',
			content: [
				{
					beforeCodeContent: [
						{
							title: '',
							desc: '虽然在组件内部可以使用 this.context.router 来实现导航，但许多应用想要在组件外部使用导航。使用Router组件上被赋予的history可以在组件外部实现导航。',
							code:
`
// your main file that renders a Router
import { Router, browserHistory } from 'react-router'
import routes from './app/routes'
render(<Router history={browserHistory} routes={routes}/>, el)
`
						}
					],
					code: 
`
// somewhere like a redux/flux action file:
import { browserHistory } from 'react-router'
browserHistory.push('/some/path')
`,
					afterCodeContent: []
				},
			]
		},
	]
}

export default data;