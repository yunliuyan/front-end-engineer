import React from 'react'
import './componentRedirect.css'
import redirect from '@/data/componentRedirect'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentRedirect() {
  return (
    <div className="component-link">
      <BaseModule data={redirect} />
    </div>
  )
}

export default componentRedirect