const redirect ={
	title: 'API 文档-Redirect组件',
	content: [],
	children: [
		{
			title: 'Redirect',
			content: [
				{
					beforeCodeContent: ['在应用中 <Redirect> 可以设置重定向到其他 route 而不改变旧的 URL。'],
					code:'',
					afterCodeContent: [],
				},
			]
		},
		{
      title: 'Props',
      content: [
        {
          beforeCodeContent: [
            {
              title: 'from',
              desc:
                '你想由哪个路径进行重定向，包括动态段。',
            },
            {
              title: 'to',
              desc: '你想重定向的路径。',
            },
            {
              title: 'query',
							desc: '默认情况下，query 的参数只会经过，但如果你需要你可以指定它们。',
							code:
`
// 我们需要从 '/profile/123' 改变到 '/about/123'
// 并且由 '/get-in-touch' 重定向到 '/contact'
<Route component={App}>
  <Route path="about/:userId" component={UserProfile}/>
  {/* /profile/123 -> /about/123 */}
  <Redirect from="profile/:userId" to="about/:userId" />
</Route>
`,
							note: '注意，在 route 层 <Redirect> 可以被放在任何地方，尽管正常的优先 规则仍适用。如果你喜欢将下一个重定向到它各自的 route 上，from 的路径会匹配到一个与 path 一样的正常路径。'
            },
          ],
					code: 
`
<Route path="course/:courseId">
  <Route path="dashboard" />
  {/* /course/123/home -> /course/123/dashboard */}
  <Redirect from="home" to="dashboard" />
</Route>
`,
          afterCodeContent: [],
        },
      ],
		},
	]
}

export default redirect