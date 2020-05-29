import React from 'react'
import './outsideComponentNavigaton.css'
import data from '@/data/outsideComponentNavigaton'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function outsideComponentNavigaton() {
  return (
    <div>
      <BaseModule data={data} />
    </div>
  )
}

export default outsideComponentNavigaton