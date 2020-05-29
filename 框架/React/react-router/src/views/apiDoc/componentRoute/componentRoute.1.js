import React from 'react'
import './componentRoute.css'
import route from '@/data/componentRoute'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentRoute() {
  return (
    <div className="component-link">
      <BaseModule data={route} />
    </div>
  )
}

export default componentRoute