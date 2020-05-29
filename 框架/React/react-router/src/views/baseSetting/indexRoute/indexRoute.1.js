import React from 'react'
import './indexRoute.css'
import data from '@/data/baseSetting/indexRoute'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function indexRoute() {
  return (
    <div>
      <BaseModule data={data} />
    </div>
  )
}

export default indexRoute
