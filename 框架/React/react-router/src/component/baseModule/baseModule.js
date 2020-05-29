import React from 'react'
import { Divider, Table} from 'antd'
import CodeShow from '@/component/codeShow/codeShow'
import './baseModule.css'

//大标题
const BigTitle = function (props) {
  return <div className="title-name">{props.title}</div>
}

//内容
const Content = function (props) {
  return <div className="font-context">{props.content}</div>
}

//副标题
const SubTitile = function (props) {
  return <div className="sub-title-name">{props.title}</div>
}

// api内容介绍
const ApiContent = function (props) {
  const { title, desc } = props.content
  return (
    <div>
     	{title && (<div className="api-content">{title}</div>)} 
			{desc && (<div className="font-context">{desc}</div>)}
			{
				props.content.hasOwnProperty('code') && (<CodeShow codeContent={props.content.code} />)
			}
			{
				props.content.hasOwnProperty('table') && (<Table className="font-context" pagination={false} columns={props.content.table.columns} dataSource={props.content.table.data} />)
			}
			{
				props.content.hasOwnProperty('note') && (<div className="font-context"><b>{props.content.note}</b></div>)
			}
    </div>
  )
}

function BaseModule(props) {
  const { data } = props
  return (
    <div className="module-box">
      <BigTitle title={data.title} />
      <Divider />
      {data.content.length > 0 &&
        data.content.map((con,aa) => {
          return <Content key={'aa'+aa} content={con} />
        })}
      {data.children.length > 0 &&
        data.children.map((sub,vv) => {
          return (
            <div key={vv}>
              {sub.title && <SubTitile key={sub.key} title={sub.title} />} 
              {sub.content.length &&
                sub.content.map((item,index) => {
                  return (
                    <div key={index}>
                      {item.beforeCodeContent.length > 0 &&
                        item.beforeCodeContent.map((beforeContent,k) => {
                          {
                            /**判断 beforeContent是否是对象*/
                          }
                          if (
                            Object.prototype.toString.call(beforeContent) ===
                            '[object Object]'
                          ) {
														return <ApiContent key={k} content={beforeContent} />
                          } else {
                            return <Content key={item.key + beforeContent} content={beforeContent} />
                          }
                        })}
                      {item.code && <CodeShow key={item.key}  codeContent={item.code} />}
                      {item.afterCodeContent.length > 0 &&
                        item.afterCodeContent.map((afterContent,kk) => {
                          {
                            /**判断 afterContent*/
                          }
                          if (
                            Object.prototype.toString.call(afterContent) ===
                            '[object Object]'
                          ) {
														return <ApiContent key={kk} content={afterContent} />
                          } else {
                            return <Content key={'kk'+kk} content={afterContent} />
                          }
                        })}
                    </div>
                  )
                })}
            </div>
          )
        })}
    </div>
  )
}

export default BaseModule
