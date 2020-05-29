import React from 'react'
import './componentRouteComponents.css'
import routeComponents from '@/data/componentRouteComponents'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentRouteComponents() {
  return (
    <div className="component-link">
      <BaseModule data={routeComponents} />
    </div>
  )
}

export default componentRouteComponents