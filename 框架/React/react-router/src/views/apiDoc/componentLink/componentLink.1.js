import React from 'react'
import './componentLink.css'
import link from '@/data/componentLink'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentLink() {
  return (
    <div className="component-link">
      <BaseModule data={link} />
    </div>
  )
}

export default componentLink