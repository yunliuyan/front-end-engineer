import React from 'react'
import './componentRoutingContext.css'
import routingContext from '@/data/componentRoutingContext'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentRoutingContext() {
  return (
    <div className="component-link">
      <BaseModule data={routingContext} />
    </div>
  )
}

export default componentRoutingContext