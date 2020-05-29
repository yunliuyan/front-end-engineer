import React from 'react'
import './routerSetting.css'
import data from '@/data/baseSetting/routerSetting'
import BaseModule from '@/component/baseModule/baseModule'

/**简介 */

function routerSetting() {
  return (
    <div>
      <BaseModule data={data} />
    </div>
  )
}

export default routerSetting
