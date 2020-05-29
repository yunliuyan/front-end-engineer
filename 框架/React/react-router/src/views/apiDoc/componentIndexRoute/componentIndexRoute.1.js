import React from 'react'
import './componentIndexRoute.css'
import indexRoute from '@/data/componentIndexRoute'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 indexRoute */

function componentIndexRoute() {
  return (
    <div className="component-link">
      <BaseModule data={indexRoute} />
    </div>
  )
}

export default componentIndexRoute