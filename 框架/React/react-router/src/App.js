import React, { useState, Suspense, useEffect } from 'react'
import { Spin } from 'antd'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Menu from '@/component/menu/menu.js'
import './App.css'
import 'antd/dist/antd.css'
import menuArray from '@/config/menuList'
import { getRouters } from '@/config/util'

//获取当前配置的路由
const settingRoute = getRouters(
  require.context('@/views', true, /\.1.js$/),
  '@/views'
)

function App() {
  const currenYear = new Date().getFullYear()
  const [menuList] = useState(menuArray)
	const defaultKey = window.location.hash.slice(1);
  return (
    <div className="App">
      <Router basename="/">
        <div className="main">
          <div className="app-left">
            <Menu menuContent={menuList} defaultKey={defaultKey} />
          </div>
          <div className="app-right">
            <Suspense fallback={<Spin className="spin" size={'large'} />}>
              <div className="content">
                <Switch>
                  {settingRoute.map((route) => {
                    return (
                      <Route
                        key={route.name}
                        path={route.path}
                        component={route.instance}
                      />
                    )
                  })}
                  <Redirect to="/brief_introduction" />
                </Switch>
                <div className="footer">
                  <p>copyRight 2020-{currenYear}年，by 云流烟</p>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
