import React from 'react'
import './componentIndexRedirect.css'
import indexRedirect from '@/data/componentIndexRedirect'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 IndexRedirect */

function componentIndexRedirect() {
  return (
    <div className="component-link">
      <BaseModule data={indexRedirect} />
    </div>
  )
}

export default componentIndexRedirect