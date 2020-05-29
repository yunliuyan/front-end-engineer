import React from 'react'
import './dynamicRouting.css'
import data from '@/data/dynamicRouting'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function dynamicRouting() {
  return (
    <div>
      <BaseModule data={data} />
    </div>
  )
}

export default dynamicRouting