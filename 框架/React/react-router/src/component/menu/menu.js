import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './menu.css'
const { SubMenu } = Menu

function Meun(props) {
  const menuContent = props.menuContent
  return (
    <Menu
			style={{ width: 256, height: `100%` }}
			defaultSelectedKeys={['1']}
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
								{console.log(item)}
								{/* 当有子集时继续遍历 */}
								{item.children.length &&
									item.children.map((val, k) => {
										if (val.hasOwnProperty('children')) {
											return (
												<Menu.ItemGroup
													key={val.key}
													title={
														<span>
															<strong>{`${index + 1}.${k + 1}`}</strong>
															<span>{val.title}</span>
														</span>
													}
												>
													{val.children.length &&
														val.children.map((m, n) => {
															return (
																<Menu.Item key={m.key}>{`${index + 1}.${k + 1}.${
																	n + 1
																}  ${m.title}`}</Menu.Item>
															)
														})}
												</Menu.ItemGroup>
											)
										}else{
											return (
												<Menu.Item key={val.key}>{`${index + 1}.${k + 1}  ${val.title}`}</Menu.Item>
											)
										}
									})}
							</SubMenu>
						)
					}else{
						return (
							<Menu.Item key={item.key}><Link to={item.router}><strong>{`${index + 1}.  ${item.title}`}</strong></Link></Menu.Item>
						)
					}
          
        })}
    </Menu>
  )
}

export default Meun
