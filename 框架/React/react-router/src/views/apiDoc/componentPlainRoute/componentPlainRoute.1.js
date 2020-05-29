import React from 'react'
import './componentPlainRoute.css'
import palin from '@/data/componentPlainRoute'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentPlainRoute() {
  return (
    <div className="component-link">
      <BaseModule data={palin} />
    </div>
  )
}

export default componentPlainRoute