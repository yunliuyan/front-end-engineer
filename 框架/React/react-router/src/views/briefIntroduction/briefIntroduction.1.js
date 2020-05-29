import React from 'react'
import './briefIntroduction.css'
import intro from '@/data/briefIntroduction'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function briefIntroduction() {
  return (
    <div className="brief-introduction">
      <BaseModule data={intro} />
    </div>
  )
}

export default briefIntroduction
