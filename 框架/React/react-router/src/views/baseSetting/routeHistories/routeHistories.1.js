import React from 'react'
import './routeHistories.css'
import data from '@/data/baseSetting/routeHistories'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function routeHistories() {
  return (
    <div>
      <BaseModule data={data} />
    </div>
  )
}

export default routeHistories
