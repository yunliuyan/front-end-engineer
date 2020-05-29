const link = {
  title: 'API 文档-Link组件',
  content: [],
  children: [
    {
      title: 'Link',
      content: [
        {
          beforeCodeContent: [
						'允许用户浏览应用的主要方式。<Link> 以适当的 href 去渲染一个可访问的锚标签。',
						'<Link> 可以知道哪个 route 的链接是激活状态的，并可以自动为该链接添加 activeClassName 或 activeStyle。'
          ],
          code: '',
          afterCodeContent: [],
        },
      ],
    },
    {
      title: 'Props',
      content: [
        {
          beforeCodeContent: [
            {
              title: 'to',
              desc:
                '跳转链接的路径，如 /users/123。',
            },
            {
              title: 'query',
              desc: '已经转化成字符串的键值对的对象。',
            },
            {
              title: 'hash',
							desc: 'URL 的 hash 值，如 #a-hash。',
							note: '注意：React Router 目前还不能管理滚动条的位置，并且不会自动滚动到 hash 对应的元素上。如果需要管理滚动条位置，可以使用 scroll-behavior 这个库。'
            },
            {
              title: 'state',
              desc:'保存在 location 中的 state。',
						},
						{
              title: 'activeClassName',
              desc:'当某个 route 是激活状态时，<Link> 可以接收传入的 className。失活状态下是默认的 class。',
						},
						{
              title: 'activeStyle',
              desc:'当某个 route 是激活状态时，可以将样式添加到链接元素上。',
						},
						{
              title: 'onClick(e)',
              desc:'自定义点击事件的处理方法。如处理 <a> 标签一样 - 调用 e.preventDefault() 来防止过度的点击，同时 e.stopPropagation() 可以阻止冒泡的事件。',
            },
          ],
          code: ``,
          afterCodeContent: [],
        },
      ],
		},
		{
      title: '其他',
      content: [
        {
          beforeCodeContent: [
            '你也可以在 <a> 标签上传入一些你想要的 props，如 title，id，className 等等。',
          ],
          code: '',
          afterCodeContent: [],
        },
      ],
    },
    {
      title: '示例',
      content: [
        {
          beforeCodeContent: [
            '如 <Route path="/users/:userId" /> 这样的 route：',
          ],
					code: 
`
<Link to={'/users/'+ user.id} activeClassName="active">{user.name}</Link>
// 变成它们其中一个依赖在 History 上，当这个 route 是
// 激活状态的
<a href="/users/123" class="active">Michael</a>
<a href="#/users/123">Michael</a>

// 修改 activeClassName
<Link to={'/users/'+user.id}} activeClassName="current">{user.name}</Link>

// 当链接激活时，修改它的样式
<Link to="/users" style={{color: 'white'}} activeStyle={{color: 'red'}}>Users</Link>
`,
          afterCodeContent: [],
        },
      ],
    },
  ],
}

export default link
