import React from 'react'
import './componentLifeCycle.css'
import data from '@/data/componentLifeCycle'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function componentLifeCycle() {
  return (
    <div>
      <BaseModule data={data} />
    </div>
  )
}

export default componentLifeCycle
