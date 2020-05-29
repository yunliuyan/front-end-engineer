import React from 'react'
import './componentMixin.css'
import minix from '@/data/componentMixin'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 link */

function componentMixin() {
  return (
    <div className="component-link">
      <BaseModule data={minix} />
    </div>
  )
}

export default componentMixin