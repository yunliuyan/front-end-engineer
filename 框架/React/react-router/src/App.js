import React, { useState, Suspense } from 'react'
import { Spin } from 'antd'
import Menu from './component/menu/menu.js'
import './App.css'
import 'antd/dist/antd.css'
import menuArray from './config/menuList'

function App() {
  const currenYear = new Date().getFullYear()
  const [menuList] = useState(menuArray)

  return (
    <div className="App">
      <div className="main">
        <div className="app-left">
          <Menu menuContent={menuList} />
        </div>
        <div className="app-right">
          <Suspense fallback={<Spin className="spin" size={'large'} />}>
            <div className="footer">
              <p>copyRight 2020-{currenYear}年，by 云流烟</p>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App
