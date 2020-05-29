import React from 'react'
import './componentRouter.css'
import router from '@/data/componentRouter'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 router */

function componentRouter() {
  return (
    <div className="component-router">
      <BaseModule data={router} />
    </div>
  )
}

export default componentRouter