import React from 'react'
import './serverRendering.css'
import data from '@/data/serverRendering'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function serverRendering() {
  return (
    <div>
      <BaseModule data={data} />
    </div>
  )
}

export default serverRendering
