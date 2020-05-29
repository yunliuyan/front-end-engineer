import React from 'react'
import './componentUtilities.css'
import utilities from '@/data/componentUtilities'
import BaseModule from '@/component/baseModule/baseModule'

/**api文档 Utilities */

function componentUtilities() {
  return (
    <div className="component-utilities">
      <BaseModule data={utilities} />
    </div>
  )
}

export default componentUtilities
