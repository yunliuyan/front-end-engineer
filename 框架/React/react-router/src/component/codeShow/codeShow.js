import React from 'react'
import './codeShow.css'

function CodeShow(props) {
	const codeContent = props.codeContent
  return (
		<pre className="code-show">
			<code>{codeContent}</code>
		</pre>
  )
}

export default CodeShow
