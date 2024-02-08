import React from 'react'
import MenuList from './MenuList'

const TreeMenu = ({menus}) => {
  return (
    <div>
      <MenuList list={menus}/>
    </div>
  )
} 

export default TreeMenu
