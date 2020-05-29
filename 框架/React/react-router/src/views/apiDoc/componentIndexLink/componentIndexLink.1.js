import React from 'react'
import './componentIndexLink.css'
import indexLink from '@/data/componentIndexLink'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentIndexLink() {
  return (
    <div className="component-link">
      <BaseModule data={indexLink} />
    </div>
  )
}

export default componentIndexLink