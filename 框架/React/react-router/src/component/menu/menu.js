import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './menu.css'
const { SubMenu } = Menu

function Meun(props) {
	const menuContent = props.menuContent
	const defaultKey = props.defaultKey || menuContent[0].router
  return (
    <Menu
			style={{ width: `100%`, minHeight: `100%` }}
			defaultSelectedKeys={[defaultKey]}
			defaultOpenKeys={[menuContent[1].key,menuContent[2].key,menuContent[3].key]}
      mode="inline"
    >
      {menuContent.length &&
        menuContent.map((item, index) => {
					if(item.hasOwnProperty('children')){
						return (
							<SubMenu
								key={item.key}
								title={
									<span>
										<strong>{`${index + 1}. `}</strong>
										<span>{item.title}</span>
									</span>
								}
							>
								{/* 当有子集时继续遍历 */}
								{item.children.length &&
									item.children.map((val, k) => {
										if (val.hasOwnProperty('children')) {
											return (
												<Menu.ItemGroup
													key={val.key}
													title={
														<span>
															<strong>{`${index + 1}.${k + 1} `}</strong>
															<span>{val.title}</span>
														</span>
													}
												>
													{val.children.length &&
														val.children.map((m, n) => {
															return (
																<Menu.Item key={m.router}><Link to={m.router} key={m.key}>{`${index + 1}.${k + 1}.${
																	n + 1
																}  ${m.title}`}</Link></Menu.Item>
															)
														})}
												</Menu.ItemGroup>
											)
										}else{
											return (
												<Menu.Item key={val.router}><Link to={val.router} key={val.key}>{`${index + 1}.${k + 1}  ${val.title}`}</Link></Menu.Item>
											)
										}
									})}
							</SubMenu>
						)
					}else{
						return (
							<Menu.Item key={item.router}><Link to={item.router} key={item.key}><strong>{`${index + 1}.  ${item.title}`}</strong></Link></Menu.Item>
						)
					}
          
        })}
    </Menu>
  )
}

export default Meun
